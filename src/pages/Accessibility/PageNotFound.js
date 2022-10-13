import { useNavigate } from "react-router"
import Button from "../../components/Button"

const PageNotFound = () => {
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
        <div className="module module--not-found">
            <h1 className="module_title">404</h1>
            <div className="module_details">
                <h2 className="module_subtitle">Looks like you’re lost</h2>
                <p className="module_description">This page was not found. You may have mistyped the address or the page may have moved</p>
                <div className="module_button">
                    <Button {...props.button}>Go Back</Button>
                </div>
            </div>
        </div>
    )
}

export default PageNotFound