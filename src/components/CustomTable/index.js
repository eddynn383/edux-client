import { useState, useEffect, useMemo, useRef } from 'react'
import { 
    useTable, 
    // Column, 
    useSortBy, 
    useGlobalFilter, 
    usePagination, 
    useRowSelect, 
    // TableToggleAllRowsSelectedProps, 
    // useFlexLayout, 
    // useResizeColumns, 
    // PluginHook, 
    // SortingRule, 
    // Row, 
    useExpanded 
} from 'react-table';
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

const CustomTable = (props) => {

    const { 
        cn, 
        columns, 
        data: dataProp, 
        initialState, 
        search, 
        onRowSelect, 
        isKeepSelectionOnSearch,
        pageSizeOptions = [10, 20, 30, 40, 50],
        bundles,
        tableProperties,
        tableFunctions,
        actionButtons = [],
        emptyState,
        emptySearchState,
        
        isServerSide,
        onFetchData,
        getRowId,
        pageCount: pageCountProp,
        entriesCount,
        useFlexLayout,
        useResizeColumns,
        // useSticky,
        isLoading,
        pagePadding = 10,
        cellPadding,
        headerHeight,
        rowHeight
    } = props

    // const styleProps = {
    //     cellPadding,
    //     pagePadding,
    //     headerHeight,
    //     rowHeight,
    //     isLoading,
    // };

    
    const [data, setData] = useState([]);
    
    useEffect(() => {
        setData(dataProp);
        // console.log(data)
    }, [dataProp]);

    // const tableBundles = {
    //     tableHeaderCellTitle: 'Toggle sort by',
    //     rowCheckboxTitle: 'Toggle Row',
    //     ...bundles,
    // };
 
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

    // const defaultInitialState = {
    //     // By default, pageSize is 10. This overrides it, with the first value from the pageSizeOptions
    //     pageSize: pageSizeOptions[0],
    // };

    // const defaultColumn = useMemo(
    //     () => ({
    //       minWidth: 36,
    //       width: 200,
    //       maxWidth: 600,
    //       resizable: false,
    //     }), [],
    // );

    // const HoverBarColumn = (actionButtons) => {
    //     if (actionButtons.length === 0) {
    //       return [];
    //     }
      
    //     const column = {
    //         id: 'action',
    //         Header: () => <></>,
    //         Cell: (instanceProperties) => {
    //         // We grab the state from the instance properties as we are above the useTable definition
    //         const { state, row } = instanceProperties;
    //             // return (
    //             //     <HoverBar actionButtons={actionButtons} tableState={state} row={row} />
    //             // );
    //         },
    //         disableGlobalFilter: true,
    //         resizable: false,
    //         sticky: 'right',
    //         width: 0,
    //     };
      
    //     return [column];
    // };

        // (hooks) => {
        //     hooks.visibleColumns.push((columns) => [
        //         {
        //             id: "selection",
        //             Header: ({ getToggleAllPageRowsSelectedProps }) => (
        //                 <IndeterminateCheckbox {...getToggleAllPageRowsSelectedProps()} />                       
        //             ),
        //             Cell: ({ row }) => {
        //                 const cellProps = row.getToggleRowSelectedProps()   

        //                 return (
        //                     <IndeterminateCheckbox 
        //                         {...cellProps}
        //                         disabled={row.original.disabled} 
        //                         checked={
        //                             cellProps.checked || (!cellProps.checked && row.original.disabled)
        //                         } 
        //                     />
        //                 )
        //             }
        //         },
        //         ...columns
        //     ]);
        // }
        // console.log(tableFunctions)

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

    // console.log(tableHooks)

    // const serverSideOptions = isServerSide
    // ? {
    //     // If server-side data fetching is activated, the pagination is controlled
    //     // from the outside of this component
    //     manualPagination: true,
    //     // Without this disabled, the pageIndex is resetting when changing page
    //     autoResetPage: false,
    //     // We control the number of pages to display from the outside
    //     pageCount: pageCountProp || 0,
    //     // Do no reset column sorting state
    //     autoResetSortBy: false,
    //     // Do not reset selected rows state
    //     autoResetSelectedRows: false,
    //     // Server-side global search, without this, the action button row wouldn't get the latest globalFilter
    //     manualGlobalFilter: true,
    //     }
    // : {};

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        rows,
        gotoPage,
        setPageSize,
        pageOptions,
        setGlobalFilter,
        canPreviousPage,
        canNextPage,
        pageCount,
        nextPage,
        previousPage,
        selectedFlatRows,
        toggleAllRowsSelected,
        state
    } = useTable(
        {
            columns,
            data,
            // defaultColumn,
            // initialState: { ...defaultInitialState, ...initialState },
            getRowId,
            // ...serverSideOptions,
            ...tableProperties,
        },
        // useGlobalFilter,
        // useSortBy,
        // useExpanded,
        // usePagination,
        // useRowSelect,
        // useFlexLayout,
        // useResizeColumns,
        // useSticky,
        ...tableHooks


    );

    const { pageIndex, pageSize, sortBy, selectedRowIds } = state;

    // useEffect(() => {
    //     if (onFetchData) {
    //         onFetchData({ pageIndex, pageSize, search, sortBy });
    //     }
    // }, [onFetchData, pageIndex, pageSize, search, sortBy]);
    
      // Update the table internal state with the updated search prop
    // useEffect(() => {
    //     setGlobalFilter(search);
    // }, [setGlobalFilter, search]);


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
            <Table {...getTableProps()} className={cn}>
                <TableHead>
                {
                    headerGroups.map((headerGroup, hgKey) => (
                        <TableRow {...headerGroup.getHeaderGroupProps()} key={hgKey}>
                            {
                                headerGroup.headers.map((column, hghKey) => {
                                    const ArrowUpDown = column.isSortedDesc ? (
                                        <Icon value="faArrowDownWideShort" />
                                    ) : (
                                        <Icon value="faArrowUpWideShort" />
                                    )
                                    return (
                                        <TableCell type="columnheader" {...column.getHeaderProps(
                                            // column.getSortByToggleProps({ title: tableBundles.tableHeaderCellTitle })
                                            )} key={hghKey}>
                                            {column.render("Header")}
                                            {
                                                column.isSorted ? (
                                                    <span style={{ marginLeft: '3px' }}>{ArrowUpDown}</span>
                                                ) : undefined
                                            }
                                            {column.resizable ? (
                                                <div
                                                    {
                                                        ...column.getResizerProps({
                                                        onClick: (e) =>
                                                            e.stopPropagation(),
                                                        })
                                                    }
                                                    // className={classNames('resizer', {
                                                    // isResizing: column.isResizing,
                                                    // })}
                                                />
                                                ) : undefined
                                            }
                                        </TableCell>
                                    )
                                })
                            }
                        </TableRow>
                    ))
                }
                </TableHead>
                <TableBody {...getTableBodyProps()}>
                    {
                        page?.map((row, rowKey) => {
                            prepareRow(row);
                            const { isSelected, original } = row;
                            const isDisabled = original.disabled;

                            return (
                                <TableRow {...row.getRowProps()} key={rowKey}>
                                    {
                                        row?.cells.map((cell, colKey) => {
                                            return (
                                                <TableCell {...cell.getCellProps()} key={colKey}>
                                                    {
                                                        cell.render("Cell")
                                                    }
                                                </TableCell>
                                            );
                                        })
                                    }
                                </TableRow>
                            );
                        })
                    }
                    {
                        
                        page.length === 0 && !isLoading && (
                            <span {...(search ? emptySearchState : emptyState)}>Is Empty</span>
                        )
                        
                    }
                </TableBody>
                {
                    isLoading ? (
                        <span areNoItems={page.length === 0}>Loading...</span>
                    ) : undefined
                }
            </Table>

            {tableProperties && tableProperties.hidePagination ? null :  (
                <div className="pagination">
                    <div className="pagination_left">
                        <Select placeholder={pageSizeOptions[0]} options={pageSizeOptions} onChange={(value) => {setPageSize(Number(value.value))}} />
                    </div>
                    <div className="pagination_right">
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
                    </div>
                </div>
            )}
        </>
    );
}

export default CustomTable;
