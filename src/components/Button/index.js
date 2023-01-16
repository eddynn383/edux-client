import './style.scss';
// import sx from '../../assets/design/component.module.scss'

const Button = ({ cn, id, value, size="medium", theme="light", variant="solid", status="accent", type="button", title, disabled, style, onClick, children }) => {

    return (
        <button className={cn ? `${'button'} ${cn}` : `${'button'}`} id={id} value={value} xtheme={theme} xstatus={status} xvariant={variant} xsize={size} type={type} title={title} disabled={disabled} style={style} onClick={onClick} >
            {children ? children : value}
        </button>
    )
}

export default Button