import React from 'react';
import LvmButton from "./UI/button/LvmButton";
import {useDispatch} from "react-redux";
import {setVisible} from "../store/actions/modalsActions";
const TableRow = ({ rowData }) => {
    const dispatch = useDispatch();


    return (
        <tr>
            {Object.values(rowData).map((cellData, cellIndex) => {
                switch (cellIndex) {
                    case (rowData.length - 1):
                        return (
                        <td key={cellIndex}>
                            <LvmButton onClick={() => dispatch(setVisible([cellData, 'call_text']))}>Текст звонка</LvmButton>
                        </td>
                    );
                    case (rowData.length - 2):
                        return (
                            <td key={cellIndex}>
                                <LvmButton onClick={() => dispatch(setVisible([cellData, 'usual']))}>Анализ адм.</LvmButton>
                            </td>
                        );
                    case (rowData.length - 3):
                        return (
                            <td key={cellIndex}>
                                <LvmButton onClick={() => dispatch(setVisible([cellData, 'usual']))}>Анализ звонка</LvmButton>
                            </td>
                        );

                    default:
                        return (
                            <td key={cellIndex}>
                                {cellData}
                            </td>
                        );
                }
            })}
        </tr>
    );
};

export default TableRow;