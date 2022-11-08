const Form = ({ cn, style, onSubmit, children }) => {
    return (
        <form className={cn ? `${'component form'} ${cn}` : `${'component form'}`} style={style} onSubmit={onSubmit} >
            {children}
        </form>
    )
}

export default Form