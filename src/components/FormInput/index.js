
const FormInput = ({cn, id, children}) => {
    return (
        <div className={cn ? `${'component from_input'} ${cn}` : `${'component from_input'}`} id={id}>
            {children}
        </div>
    )
}

export default FormInput
