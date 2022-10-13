import Input from '../../components/Input';
import Button from '../../components/Button';
// import Icon from '../../components/Icon';
import { addClass, classModifier } from '../../functions/utils';
import './style.scss';

const Search = ({cn, input, button}) => {
    // console.log(o)
    // const innerProps = {
    //     input: {
    //         class: o.input.class,
    //         id: o.input.id,
    //         type: o.input.type,
    //         'data-size': o.input.size,
    //         placeholder: o.input.placeholder,
    //     },
    //     button: {
    //         class: o.button.class,
    //         type: 'button',
    //         iconBefore: <Icon cn={[o.button.iconBefore]} value={o.button.iconBefore} />
    //     }
    // }
    return (
        <div className={addClass(classModifier('module', cn))}>        
            <Input {...input} />
            <Button {...button} />
        </div>
    )
}

export default Search