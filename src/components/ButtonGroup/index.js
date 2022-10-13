import sx from './component.module.scss'

const ButtonGroup = ({cn, id, selected, children}) => {
    return (
        <div className={cn ? `${sx["button-group"]} ${cn}` : `${sx["button-group"]}`} id={id} xselected={selected}>
            {children}
        </div>
    )
}

export default ButtonGroup
