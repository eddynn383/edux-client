const Title = ({type, cn, children}) => {
    let $el;
    switch (type) {
        case "page":
            $el = <h1 className={cn}>{children}</h1>
            break;
        case "section":
            $el = <h2 className={cn}>{children}</h2>
            break;
        case "module":
            $el = <h3 className={cn}>{children}</h3>
            break;
        default: $el = <h4 className={cn}>{children}</h4>
            break;
    }

    return $el
}

export default Title
