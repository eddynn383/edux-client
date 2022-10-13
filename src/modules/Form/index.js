const Form = ({ cn, style, onSubmit, children }) => {
    const outerProps = {
        className: cn,
        style,
        onSubmit
    }
    return (
        <form {...outerProps}>
            {children}
        </form>
    )
}

export default Form