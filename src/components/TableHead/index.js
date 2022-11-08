const TableHead = ({cn, style, children}) => {
    return (
        <div className={cn ? `${'component table-head'} ${cn}` : `${'component table_head'}`} style={style}>
            {children}
        </div>
    )
}

export default TableHead
