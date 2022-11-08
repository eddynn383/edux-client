const TableBody = ({cn, style, children}) => {
    return (
        <div className={cn ? `${'component table_body'} ${cn}` : `${'component table_body'}`} role="rowgroup" style={style}>
            {children}
        </div>
    )
}

export default TableBody
