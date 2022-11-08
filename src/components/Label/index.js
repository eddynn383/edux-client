import './style.scss'

const Label = ({ cn, htmlFor, hide, children }) => {
    return (
        <label className={cn ? `${'component label'} ${cn}` : `${'component label'}`} hidden={hide} htmlFor={htmlFor}>{children}</label>
    )
}

export default Label