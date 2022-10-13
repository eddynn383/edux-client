import { useNavigate } from "react-router"
import Button from "../../components/Button"

const Unauthorized = () => {
    const navigate = useNavigate()
    const goBack = () => navigate(-1)

    const props = {
        button: {
            cn: ['submit', 'text', 'reset'],
            type: 'submit',
            size: 'large',
            text: 'Submit',
            theme: 'primary',
            onClick: goBack
        }
    }
    return (  
        <div className="module module--unauthorized">
            <h1 className="module_title">401</h1>
            <div className="module_details">
                <h2 className="module_subtitle">Unauthorized</h2>
                <p className="module_description">You tried to access an unauthorized page!</p>
                <div className="module_button">
                    <Button {...props.button}>Go Back</Button>
                </div>
            </div>
        </div>
    )
}

export default Unauthorized