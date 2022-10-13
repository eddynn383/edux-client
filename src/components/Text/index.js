import sx from './component.module.scss'


const Text = ({children, size="medium", inline, cn}) => {
    return (
        inline ? <span class={cn ? `${sx.text} ${cn}` : `${sx.text}`} xsize={size}>{children}</span> : <p>{children}</p>
    )
}

export default Text