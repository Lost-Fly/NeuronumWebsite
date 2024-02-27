import React, {useEffect, useRef} from 'react';
import Navbar from "../components/UI/Navbar/LvmNavbar";
import {useDispatch, useSelector} from "react-redux";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import LvmLoader from "../components/UI/Loader/LvmLoader";
import CallsTable from "../components/CallsTable";
import classes from "../components/compstyles/Table.module.css";
import {setPage, setTotalPages} from "../store/actions/paramsActions";
import LvmModal from "../components/UI/Modal/LvmModal";
import {getPageCount, transformData, transformFilterDict} from "../utils/tabledata";
import {setError, solveError} from "../store/actions/errorAction";
import {setData, setFilteredData} from "../store/actions/tableActions";
import {useObserver} from "../hooks/useObserver";
import useExecutionTime from "../hooks/useExecutionTime";
import ComplexNavbar from "../components/UI/Navbar/TailwindNavbar";
const CallsMainTable = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.loading.isLoading);
    const isDataSetted = useSelector((state) => state.tabledata.isDataSetted);
    const dataAmount = useSelector((state) => state.tabledata.dataAmount);
    const errorState = useSelector((state) => state.error.errorState);
    const errorMessage = useSelector((state) => state.error.errorMessage);
    const page = useSelector((state) => state.params.page);
    const pageSize = useSelector((state) => state.params.limit);
    const totalPages = useSelector((state) => state.params.totalPages);
    const filtersDict = useSelector((state) => state.filters.dataDict );
    const lastElement = useRef();
    const { executionTime, measureExecutionTime } = useExecutionTime();
    const isFiltersVisible = useSelector(state => state.filters.isVisible)


    const [fetchData] = useFetching(async (filtersDict, page, pageSize) => {

        const response = await PostService.getByDataPage(transformFilterDict(filtersDict, page, pageSize));

        console.log("USUAL FETCHING")
        if(response.data.length === 0 || !response.data){
            dispatch(setError('Нет данных для отображения! Проверьте установленные фильтры!'))
        }else {
            dispatch(setData(transformData(response.data)));
        }
    })


    const [fetchDataFiltered] = useFetching(async (filtersDict, page, pageSize) => {
        const response = await PostService.getByDataPage(transformFilterDict(filtersDict, 0, pageSize));
        const totalCount = response.headers['calls-total-count']
        console.log(totalCount)
        dispatch(setTotalPages(getPageCount(totalCount, pageSize)))
        dispatch(setFilteredData(transformData(response.data)));
        console.log("FILTERED FETCHING")
    })


    useObserver(lastElement, page < totalPages, isLoading, !isDataSetted || dataAmount < pageSize, () => {
        dispatch(setPage(page + 1));
    })

    useEffect(() => {
        if (isLoading || page === 0 || dataAmount < pageSize) return;
        fetchData(filtersDict, page, pageSize)
    }, [page])

    useEffect(() => {
        // if (isLoading) return;
        dispatch(setPage(0));
        fetchDataFiltered(filtersDict, page, pageSize);
    }, [filtersDict])


    return (
        <div>
            <ComplexNavbar/>
            {/*<h2  className="">Таблица анализа звонков</h2>*/}




            <div className={classes.tableContainer}>
                <CallsTable/>
                {errorState &&
                    <h1 style={{textAlign:"center", display:"flex"}}>Произошла ошибка: {errorMessage}</h1>
                }
                <div ref={lastElement} style={{height: '1px'}}></div>
            </div>


            <LvmModal />


            {isLoading &&
                <LvmLoader/>
            }

        </div>
    );

};

export default CallsMainTable;