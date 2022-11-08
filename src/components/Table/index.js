import "./style.scss"

const Table = ({cn, style, children}) => {
    return (
        <div className={cn ? `${'component table'} ${cn}` : `${'component table'}`} role="table" style={style}>
            {children}
        </div>
    )
}

export default Table
