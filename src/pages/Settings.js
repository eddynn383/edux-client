import { useEffect } from 'react'
import useNav from '../hooks/useNavigation'
import Form from '../components/Form'
import Button from '../components/Button'

const Settings = () => {

    const { setTitle } = useNav()

    useEffect(() => {
        setTitle('Settings')
    }, [])

    const props = {
        button: {
            cn: ['submit', 'text', 'reset'],
            type: 'submit',
            size: 'medium',
            text: 'Submit',
            theme: 'primary',
            style: {"display": "block", "margin": "0"}
            // disabled: loading
        }
    }
    
    return (
        <>        
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla repellat, tempore ducimus nostrum deleniti, velit fugiat cum in pariatur autem veritatis aliquam quia minima quo commodi, maxime inventore nemo magni.</p>
            {           
                <Form cn={['theme-edit']} >
                    <div>
                        <Button {...props.button}>Save</Button>
                    </div>
                </Form>
            }
        </>
    )
}

export default Settings
