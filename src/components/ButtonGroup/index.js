import './style.scss'
// import sx from '../../assets/design/component.module.scss'

const ButtonGroup = ({cn, id, selected, children}) => {
    return (
        <div className={cn ? `${'component button-group'} ${cn}` : `${'component button-group'}`} id={id} xselected={selected}>
            {children}
        </div>
    )
}

export default ButtonGroup
