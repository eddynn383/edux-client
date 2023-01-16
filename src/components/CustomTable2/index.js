import { useState, useMemo, useEffect, useRef } from 'react'
import { useTable, Column, useSortBy, useGlobalFilter, usePagination, useRowSelect, TableToggleAllRowsSelectedProps, useFlexLayout, Row } from 'react-table'
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

const CustomTable2 = ({ cn, columns, data: dataProp, initialState, isServerSide, getRowId, search, onRowSelect, isKeepSelectionOnSearch, pageSizeOptions = [10, 20, 30, 40, 50]  }) => {

    const [data, setData] = useState([]);
    
    useEffect(() => {
        setData(dataProp);
    }, [dataProp]);

    const hasCheckboxBeenClicked = useRef(false);

    const IndeterminateCheckbox = ({ indeterminate, checked, onChange: onCheckBoxChange, ...rest }) => {
        const handleChange = (checkboxValue) => {
            if (onCheckBoxChange) {
                hasCheckboxBeenClicked.current = true;
                onCheckBoxChange({
                    target: {
                        checked: checkboxValue === 'checked',
                    },
                });
            }
        };

        const checkedValue = checked ? 'checked' : 'unchecked';
        const value = indeterminate ? 'intermediate' : checkedValue;

        return (
            <Checkbox type="checkbox" value={value} onChange={handleChange} {...rest} />
        );
    };

    const defaultInitialState = {
        // By default, pageSize is 10. This overrides it, with the first value from the pageSizeOptions
        pageSize: pageSizeOptions[0],
    };

    const defaultColumn = useMemo(
        () => ({
            minWidth: 36, 
            width: 200,
            maxWidth: 600,
            resizable: false,
        }), []
    )

    const tableHooks = [
        (hooks) => {
            hooks.allColumns.push((hooksColumns) => [
                // Adds a column for selection
                {
                    id: 'selection',
                    Header: ({ getToggleAllPageRowsSelectedProps }) => (
                        <>
                            <IndeterminateCheckbox {...getToggleAllPageRowsSelectedProps()} />
                        </>
                    ),
                    Cell: ({ row }) => {
                        const cellProps = row.getToggleRowSelectedProps();

                        return (
                            <IndeterminateCheckbox
                                {...cellProps}
                                disabled={row.original.disabled}
                                checked={
                                    cellProps.checked || (!cellProps.checked && row.original.disabled)
                                }
                            />
                        );
                    },
                    sticky: 'left',  
                    resizable: false,
                    disableResizing: true,
                    disableGlobalFilter: true,
                    width: 36,
                },
                ...hooksColumns,
                // special column for the action buttons, which is displayed when hovering on each row
                // ...HoverBarColumn(actionButtons),
            ]);
        },
    ];

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
        state: { pageIndex, pageSize, sortBy, selectedRowIds },
        selectedFlatRows,
        toggleAllRowsSelected,
    } = useTable(
        {
            columns,
            data,
            defaultColumn,
            initialState: { ...defaultInitialState, ...initialState },
            getRowId
        },
        usePagination,
        useRowSelect,
        ...tableHooks
    );

    // const paginationSizeOptions = [
    //     {
    //         label: "10", 
    //         value: 10
    //     },
    //     {
    //         label: "20", 
    //         value: 20
    //     },
    //     {
    //         label: "30", 
    //         value: 30
    //     },
    //     {
    //         label: "40", 
    //         value: 40
    //     },
    //     {
    //         label: "50", 
    //         value: 50
    //     }
    // ]

    useEffect(() => {
        // This prevents infinite loops in some context since this useEffect will be triggered
        // on each re-render of the component.
        // If the user has not touched the selection checkboxes, we don't fire the callback
        if (!hasCheckboxBeenClicked.current) {
          return;
        }
    
        if (onRowSelect) {
            onRowSelect(selectedFlatRows, selectedRowIds, {
                pageIndex,
                pageSize,
                search,
                sortBy,
            });
        }
    
        // After we fired the callback, we need to reset the boolean for next time
        hasCheckboxBeenClicked.current = false;
    }, [
        onRowSelect,
        selectedFlatRows,
        selectedRowIds,
        pageIndex,
        pageSize,
        search,
        sortBy,
    ]);

    const previousSearch = useRef();

    // When searching, we manually reset to the first page
    // Remark: this would be automatical had we not disabled autoResetPage
    useEffect(() => {
      // The first time the component initialize we don't want to force a reset on the page index
      const isFirstTime = previousSearch.current !== undefined;
  
      if (isFirstTime) {
        if (!isKeepSelectionOnSearch) {
          // Unselect all the table rows
          toggleAllRowsSelected(false);
        }
  
        if (isServerSide) {
          // Reset to page 1
          gotoPage(0);
        }
      }
  
      previousSearch.current = search;
    }, [
      gotoPage,
      isServerSide,
      search,
      toggleAllRowsSelected,
      isKeepSelectionOnSearch,
    ]);

    return (
        <>
            <Table {...getTableProps()} cn={cn}>
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
        </>
    );
}

export default CustomTable2;