import './style.scss'

const Badge = ({ cn, id, value, max, theme="primary", variant="solid", size, type="info", title, children }) => {
    const val = max ? (value > max ? `${max}+` : `${value}`) : `${value}`

    if (!value && !children) {
        return null;
    }

    return (
        <span className={cn ? `${'component badge'} ${cn}` : `${'component badge'}`} id={id} value={val} xmax={max} xtheme={theme} xvariant={variant} xsize={size} type={type} title={title}>
            {children ? children : val}
        </span>
    )
}

export default Badge