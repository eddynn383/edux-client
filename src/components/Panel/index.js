import './style.scss';

const Panel = ({cn, style, children}) => {
    return (
        <div className={cn} style={style}>
            {children}
        </div>
    )
}

export default Panel