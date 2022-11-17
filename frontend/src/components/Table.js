import React, { useState, useEffect, useMemo } from 'react'
import { useNavigate } from 'react-router-dom';
import { useTable, usePagination } from 'react-table';
import axios from 'axios';

// import { getHeaders } from '../components/columns'
// // import { useAppContext } from "../context/AppContext";
// import { getUserData, makeData } from "../data/makeData";

import "../styles/table.css";
import { useRef } from 'react';

// Create an editable cell renderer
const EditableCell = ({
    value: initialValue,
    row: { index },
    column: { id },
    updateMyData, // This is a custom function that we supplied to our table instance
}) => {
    // We need to keep and update the state of the cell normally
    const [value, setValue] = useState(initialValue)

    useEffect(() => {
        setValue(initialValue)
    }, [initialValue])

    return <input
        type="checkbox"
        defaultChecked={value}
        onChange={(e) => {
            setValue(e.target.checked);
            updateMyData(index, id, e.target.checked)
        }
        } />
}

// Set our editable cell renderer as the default Cell renderer
const defaultColumn = {
    Cell: EditableCell,
}
const recommendations = []

// Be sure to pass our updateMyData and the skipPageReset option
export default function Table({ COLUMNS, useCaseData, param }) {
    // For this example, here using pagination to illustrate how to stop
    // the current page from resetting when our data changes
    // Otherwise, nothing is different here.

    const columns = useMemo(() => COLUMNS, [])
    const [data, setData] = useState(useCaseData)
    const [originalData] = useState(data)
    const [skipPageReset, setSkipPageReset] = useState(false)
    const navigate = useNavigate();
    const recommendationRef = useRef();
    const confidenceRef = useRef();

    // We need to keep the table from resetting the pageIndex when we
    // Update data. So we can keep track of that flag with a ref.

    // When our cell renderer calls updateMyData, we'll use
    // the rowIndex, columnId and new value to update the
    // original data
    const updateMyData = (rowIndex, columnId, value) => {
        // We also turn on the flag to not reset the page
        setSkipPageReset(true)
        setData(old =>
            old.map((row, index) => {
                if (index === rowIndex) {
                    return {
                        ...old[rowIndex],
                        [columnId]: value,
                    }
                }
                return row
            })
        )

    }

    // After data CHANGES, we turn the flag back off
    // so that if data actually changes when we're not
    // editing it, the page is reset
    useEffect(() => {
        setSkipPageReset(false)
    }, [data])

    // Let's add a data resetter
    // illustrate that flow...
    const resetData = () => {
        getRecommendation()
        setData(originalData)
        data.push(recommendations)

        //To publish response locally on or the server
        axios.post('http://157.230.127.240:8080/receive', {

       // axios.post('http://localhost:8080/receive', {
            data, param
        })

        navigate("/Finish")
    }

    const getRecommendation = () => {
        // console.log(page[0].original.photo);
        recommendations.push({ recommendation: recommendationRef.current.value, photoId: page[0].original.photo, confidence: confidenceRef.current.value });
        recommendationRef.current.value = "";


        //  if (confidenceRef.current.value === "Level of confidence") {
        //     alert('Please select the level of confidence');
        // }
    }
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        // pageCount,
        // gotoPage,
        nextPage,
        previousPage,
        // setPageSize,
        state: { pageIndex, }, //pageSize },
    } = useTable({
        columns,
        data,
        defaultColumn,
        // // use the skipPageReset option to disable page resetting temporarily
        autoResetPage: !skipPageReset,
        initialState: { pageSize: 15 },

        // // updateMyData isn't part of the API, but
        // // anything is put into these options will
        // // automatically be available on the instance.
        // // That way it can call this function from the
        // // cell renderer!
        updateMyData,
    }, usePagination)

    return (
        <>
            { }
            <div className="container">
                <div className="leftBlock">
                    <div className="image">
                        <img
                            src={`/img/${page[0].original.photo}.png` === "/img/undefined.png" ? "/img/75.png" : `/img/${page[0].original.photo}.png`}
                            alt="first"
                        />
                    </div>
                </div>
                <div className="rightBlock">
                    <ul className="list">
                        <li>Correct: The attribute/method is suitable for the class in blue.</li>
                        <li>Obvious: The attribute/method you could have easily proposed yourself</li>
                        <li>Redundant: The attribute/method exists or is similar to an existing one in the diagram</li>
                        <li>Contextualized: The attribute/method belongs to the diagram domain</li>
                        <li>Generalizable: The attribute/method is also applicable to other classes of the diagram</li>
                    </ul>
                    <div>
                        <table  {...getTableProps()}>
                            <thead>
                                {headerGroups.map(headerGroup => (
                                    <tr {...headerGroup.getHeaderGroupProps()}>
                                        {headerGroup.headers.map(column => (
                                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                                        ))}
                                    </tr>
                                ))}
                            </thead>
                            <tbody {...getTableBodyProps()}>
                                {page.map((row, i) => {
                                    prepareRow(row);
                                    return (
                                        row.original.item ?
                                            <tr {...row.getRowProps()}>
                                                {row.cells.map((cell, i) => {

                                                    //     console.log(cell.row.original.itemType);
                                                    return <td  {...cell.getCellProps([
                                                        {
                                                            className: cell.row.original.itemType === "Attribute" ? "attribute" : "",

                                                        },
                                                        {
                                                            className: cell.row.original.itemType === "Method" ? "method" : "",

                                                        },
                                                    ])}>{i === 0 || i === 1 ? cell.value : cell.render('Cell')}</td>
                                                })}
                                            </tr> : ''
                                    )
                                })}
                            </tbody>
                        </table>
                        <div className="submi">
                            <h4> If you missed an attribute or method for the class in Blue please add it here</h4>
                            <input
                                type="text"
                                name=""
                                id=""
                                placeholder="Optional"
                                ref={recommendationRef}
                            />
                            <select required="required"
                                name="optionlist"
                                ref={confidenceRef}
                                onChange="combo(this, 'demo')">
                                <option selected disabled>Level of confidence</option>
                                <option>Completely confident</option>
                                <option>Fairly confident</option>
                                <option>Somewhat confident</option>
                                <option>Slightly confident</option>
                                <option>Not confident at all</option>
                            </select>
                            <button onClick={() => {
                                previousPage();

                            }} disabled={!canPreviousPage}>
                                Previous
                            </button>
                            {canNextPage ?
                                <button onClick={(e) => {
                                    if (confidenceRef.current.value === "Level of confidence") {
                                        alert('Please select the level of confidence');
                                    } else {
                                        nextPage()
                                        getRecommendation()
                                        confidenceRef.current.value = "Level of confidence"
                                    }

                                }} disabled={!canNextPage}>
                                    Next
                                </button>
                                : <button onClick={(e) => {
                                    if (confidenceRef.current.value === "Level of confidence") {
                                        alert('Please select the level of confidence');
                                    } else {
                                        resetData()
                                    }
                                }}>Submit</button>
                            }
                            <span>
                                <strong>
                                    {pageIndex + 1} of {pageOptions.length} Page
                                </strong>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
