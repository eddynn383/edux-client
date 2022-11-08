import './style.scss'

const Title = ({type, cn, children}) => {
    let $el;
    switch (type) {
        case "page":
            $el = <h1 className={cn ? `${'page_title'} ${cn}` : `${'page_title'}`}>{children}</h1>
            break;
        case "section":
            $el = <h2 className={cn ? `${'section_title'} ${cn}` : `${'section_title'}`}>{children}</h2>
            break;
        case "module":
            $el = <h3 className={cn ? `${'module_title'} ${cn}` : `${'module_title'}`}>{children}</h3>
            break;
        default: $el = <h4 className={cn}>{children}</h4>
            break;
    }

    return $el
}

export default Title
