import './style.scss'

const Text = ({cn, size="medium", inline, children}) => {
    return (
        inline ? <span className={cn ? `${'component text'} ${cn}` : `${'component text'}`} xsize={size}>{children}</span> : <p>{children}</p>
    )
}

export default Text