import './style.scss'

const Card = ({cn, size="medium", type="component", theme="light", columns, rows, contentTop, contentBottom, style, children }) => {
    return (
        <div className={cn ? `card ${cn}` : `card`} xsize={size} xtheme={theme} xtype={type} xcol={columns} xrow={rows} style={style} >
            {
            contentTop &&
            <div className="card_top">
                {contentTop}
            </div>
            }
            {!contentTop && !contentBottom ? children : null}
            {
            contentBottom && 
            <div className="card_bottom">
                {contentBottom}
            </div>
            }
        </div>
    )
}

export default Card