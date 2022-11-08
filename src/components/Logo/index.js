import './style.scss'

const Logo = ({cn, url, alt, style}) => {
    
    return (
        <>
            <div className={cn ? `${'component logo'} ${cn}` : `${'component logo'}`}>
                <img src={url} alt={alt} style={style} />
            </div>
        </>
    )
}

export default Logo