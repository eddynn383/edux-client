import sx from './component.module.scss';

const Button = ({ cn, id, value, variant="contained", theme="primary", size="medium", type="button", title, disabled, style, onClick, children}) => {

    return (
        <button className={cn ? `${sx.button} ${cn}` : `${sx.button}`} id={id} value={value} xvariant={variant} xtheme={theme} xsize={size} type={type} title={title} disabled={disabled} style={style} onClick={onClick} >
            {children ? children : value}
        </button>
    )
}

export default Button