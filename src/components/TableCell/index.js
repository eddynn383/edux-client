
const TableCell = ({ cn, type="cell", style, children }) => {
    return (
        <div className={cn ? `${'component table_cell'} ${cn}` : `${'component table_cell'}`} role={type} style={style}>
            {children}
        </div>
    )
}

export default TableCell
