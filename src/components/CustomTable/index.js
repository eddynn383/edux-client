import { useEffect, useRef } from 'react'
import { useTable, usePagination, useRowSelect } from 'react-table'
import Checkbox from '../Checkbox'

import Table from '../Table'
import TableBody from '../TableBody'
import TableCell from '../TableCell'
import TableHead from '../TableHead'
import TableRow from '../TableRow'
import Button from '../Button'
import Icon from '../Icon'
import Select from '../Select'

import '../../modules/Pagination/style.scss'

const CustomTable = ({ cn, columns, data, initialState, search, onRowSelect,  }) => {

    const hasCheckboxBeenClicked = useRef(false);

    const IndeterminateCheckbox = ({ indeterminate, checked, onChange, ...rest }) => {
        const handleChange = (checkboxValue) => {
            if (onChange) {
                hasCheckboxBeenClicked.current = true;
                onChange({
                    target: {
                        checked: checkboxValue === 'checked',
                    },
                });
            }
        };

        const value = indeterminate ? 'intermediate' : checked ? 'checked' : 'unchecked';

        return (
            <Checkbox type="checkbox" value={value} onChange={handleChange} {...rest}/>
        );
    };

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        selectedFlatRows,
        state: { pageIndex, pageSize, selectedRowIds }
    } = useTable(
        {
            columns,
            data
        },
        usePagination,
        useRowSelect,
        (hooks) => {
            hooks.visibleColumns.push((columns) => [
                {
                    id: "selection",
                    Header: ({ getToggleAllPageRowsSelectedProps }) => (
                        <IndeterminateCheckbox {...getToggleAllPageRowsSelectedProps()} />
                        
                    ),
                    Cell: ({ row }) => {
                        const cellProps = row.getToggleRowSelectedProps()   

                        return (
                            <IndeterminateCheckbox 
                                {...cellProps}
                                disabled={row.original.disabled} 
                                checked={
                                    cellProps.checked || (!cellProps.checked && row.original.disabled)
                                } 
                            />
                        )
                    }
                },
                ...columns
            ]);
        }
    );

    const paginationSizeOptions = [
        {
            label: "10", 
            value: 10
        },
        {
            label: "20", 
            value: 20
        },
        {
            label: "30", 
            value: 30
        },
        {
            label: "40", 
            value: 40
        },
        {
            label: "50", 
            value: 50
        }
    ]

    useEffect(() => {
        // if (!hasCheckboxBeenClicked.current) {
        //   return;
        // }
    
        // if (onRowSelect) {
        //     onRowSelect(selectedFlatRows, selectedRowIds, {
        //         pageIndex,
        //         pageSize,
        //         search,
        //         sortBy,
        //     });
        // }
        // hasCheckboxBeenClicked.current = false;
        console.log(pageOptions)
        console.log(pageIndex)
        console.log(selectedFlatRows)
    }, [
        // onRowSelect,
        // selectedFlatRows,
        // selectedRowIds,
        // pageIndex,
        // pageSize,
        // search,
        // sortBy,
    ]);

    return (
        <>
            <Table {...getTableProps()}>
                <TableHead>
                {
                    headerGroups.map((headerGroup, hgKey) => (
                        <TableRow {...headerGroup.getHeaderGroupProps()} key={hgKey}>
                            {
                                headerGroup.headers.map((column, hghKey) => (
                                    <TableCell type="columnheader" {...column.getHeaderProps()} key={hghKey}>{column.render("Header")}</TableCell>
                                ))
                            }
                        </TableRow>
                    ))
                }
                </TableHead>
                <TableBody {...getTableBodyProps()}>
                    {
                        page.map((row, rowKey) => {
                            prepareRow(row);
                            return (
                                <TableRow {...row.getRowProps()} key={rowKey}>
                                    {
                                        row.cells.map((cell, colKey) => {
                                            return (
                                                <TableCell {...cell.getCellProps()} key={colKey}>{cell.render("Cell")}</TableCell>
                                            );
                                        })
                                    }
                                </TableRow>
                            );
                        })
                    }
                </TableBody>
            </Table>
            <div className="pagination">
                <div className="pagination_left">
                    <Select placeholder={paginationSizeOptions[0].label} options={paginationSizeOptions} onChange={
                        (value) => {setPageSize(Number(value.value))}
                        // (value) => console.log(value)
                    } 
                        />
                </div>
                <div className="pagination_right">
                    {/* <Button onClick={() => gotoPage(0)} disabled={!canPreviousPage}><Icon value="faChevronLeft"/></Button> */}
                    <Button size="small" onClick={() => previousPage()} disabled={!canPreviousPage}><Icon value="faChevronLeft"/></Button>
                    <ul className="pages">
                        {
                            pageOptions.map((option, idx) => (
                                <li className={option === pageIndex ? 'selected' : ''} key={idx}>
                                    <Button size="small" onClick={() => gotoPage(option)}>{option + 1}</Button>
                                </li>
                            ))
                        }
                    </ul>
                    <Button size="small" onClick={() => nextPage()} disabled={!canNextPage}><Icon value="faChevronRight"/></Button>
                    {/* <Button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}><Icon value="faChevronRight"/></Button> */}
                </div>


                {/* <span>Page{" "}<strong>{pageIndex + 1} of {pageOptions.length}</strong>{" "}</span>
                <span>| Go to page:{" "}
                    <input type="number" defaultValue={pageIndex + 1} onChange={(e) => {
                            const page = e.target.value ? Number(e.target.value) - 1 : 0; 
                            gotoPage(page);
                        }}
                        style={{ width: "100px" }}
                    />
                </span>{" "} */}
                
                {/* <select value={pageSize}
                    onChange={(e) => {
                        setPageSize(Number(e.target.value));
                    }}
                >
                    {[10, 20, 30, 40, 50].map((pageSize) => (
                        <option key={pageSize} value={pageSize}>Show {pageSize}</option>
                    ))}
                </select> */}
                {/* <pre>
                <code>
                    {JSON.stringify(
                    {
                        selectedRowIds: selectedRowIds,
                        "selectedFlatRows[].original": selectedFlatRows.map(
                        (d) => d.original
                        )
                    },
                    null,
                    2
                    )}
                </code>
                </pre> */}
            </div>
        </>
    );
}

export default CustomTable;
