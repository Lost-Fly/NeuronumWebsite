import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    getPageCount,
    TableHeader,
    transformData,
    transformFilterDict,
    transformFiltersOptions
} from "../utils/tabledata";
import TableRow from "./TableRow";
import classes from "./compstyles/Table.module.css";
import DataSelect from "./UI/DataSelect/DataSelect";
import PnButton from "./UI/button/PnButton";
import {closeFilters, setFiltersOptions, setFiltersVisible} from "../store/actions/filtersActions";
import TimeSelect from "./UI/TimeSelect/TimeSelect";
import CombSelect from "./UI/select/CombSelect";
import DropWindow from "./UI/dropwindow/DropWindow";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import {setTotalPages} from "../store/actions/paramsActions";
import {setFilteredData} from "../store/actions/tableActions";


const CallsTable = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.tabledata.data)
    const isVisible = useSelector(state => state.filters.isVisible)

    let filterRowVisible = "";

    if (isVisible){
        filterRowVisible = "";
    }else{
        filterRowVisible = "none";
    }

    function renderElementForColumn(key) {
        switch (key) {
            case 'Дата':
                return <DropWindow props={key}><DataSelect props={key}/></DropWindow>;
            case 'Время':
                return <DropWindow props={key}><TimeSelect props={key}/></DropWindow>;
            case 'Причина отказа':
                return
            case 'Анализ':
                return
            case 'Оценка работы администратора':
                return
            case 'Текст звонка':
                return
            case 'Номер':
                return
            case 'Имя клиента':
                return
            default:
                return <CombSelect props={key}/>;
        }
    }

    const filtersJson = [
        "administratorName", "doctor", "record", "isIncoming", "wasBefore",
        "complaint", "virtualNumber", "lateMarker"
    ]

    // const filtersJson = {
    //     params: {
    //         nameOfFiltersToFind: ['doctor', 'administratorName', 'complaint', "record", "incoming", "wasBefore"]
    //     }
    // };
    // { params: { answer: 42 } }

    const [getFiltersOptions] = useFetching(async () => {
        const response = await PostService.getFiltersOptions(filtersJson);
        dispatch(setFiltersOptions(transformFiltersOptions(response.data)))
        // console.log(response.data);
    })

    const toggleFilters = () => {
        getFiltersOptions();
        if(!isVisible){
            dispatch(setFiltersVisible());
        }else{
            dispatch(closeFilters())
        }
    };

    return (
        <div>
            <table id="dataTable">

                <thead>
                <tr>
                    {TableHeader.map((colName, index) => (
                        <th key={colName}>
                            <div className={classes.headerContainer}>
                                <div className={classes.colName}>
                                    {colName}
                                </div>
                                <div className={classes.colBtn}>
                                    <PnButton onClick={toggleFilters}/>
                                </div>
                            </div>
                        </th>
                    ))}
                </tr>
                </thead>

                <tbody>
                <tr style={{display:filterRowVisible}}>
                    {TableHeader.map((colName, index) => (
                        <th key={colName}>
                            {renderElementForColumn(colName)}
                        </th>
                    ))}
                </tr>
                {data.map((rowData, rowIndex) => (
                    <TableRow key={rowIndex} rowData={rowData} />
                ))}
                </tbody>

            </table>
        </div>
    );
};

export default CallsTable;