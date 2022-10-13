import sx from './component.module.scss'

const Label = ({cn, htmlFor, children}) => {
    return (
        <label className={cn ? `${sx.label} ${cn}` : `${sx.label}`} htmlFor={htmlFor}>{children}</label>
    )
}

export default Label