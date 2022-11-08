const TableRow = ({ cn, style, children }) => {
    return (
        <div className={cn ? `${'component table_row'} ${cn}` : `${'component table_row'}`} role="row" style={style} >
            {children}
        </div>
    )
}

export default TableRow
