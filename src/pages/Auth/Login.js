import { useState, useRef, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { setCredentials } from '../../services/Auth/authSlice'
import { useLoginMutation } from '../../services/Auth/authApiSlice'

import usePersist from '../../hooks/usePersist'


import Form from '../../components/Form'
import FormInput from '../../components/FormInput'
import Label from '../../components/Label'
import Input from '../../components/Input'
import Checkbox from '../../components/Checkbox'
import Button from '../../components/Button'
import Icon from '../../components/Icon'
 
// import useAuth from '../../hooks/useAuth';
// import useNav from '../../hooks/useNavigation';
// import axios from '../../api/axios';

// const LOGIN_URL = '/api/v1/auth/signin'

const Login = (o) => {
    // const { setCurrentUser, setIsAuth, setRoles } = useAuth()
    // const { setNav, setTitle } = useNav()

    // const location = useLocation()
    // const from = location.state?.from?.pathname || "/"
    
    const emailRef = useRef()
    const passwordRef = useRef()
    const errRef = useRef()
    
    const [email, setEmail] = useState('')
    const [emailFocus, setEmailFocus] = useState(false)
    
    const [password, setPassword] = useState('')
    const [passwordFocus, setPasswordFocus] = useState(false)
    
    const [errorMsg, setErrorMsg] = useState('')
    const [success, setSuccess] = useState(false)
    
    const [message, setMessage] = useState('')
    const [type, setType] = useState('password')
    const [loading, setLoading] = useState(false)
    const [showPass, setShowPass] = useState(false)

    const [persist, setPersist] = usePersist()
    
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [login, { isLoading }] = useLoginMutation()
    
    function showPassword() {
        setShowPass(prev => !prev)
    }

    const props = {
        email: {
            cn: 'input--email',
            name: 'email',
            iconBefore: <Icon value="faEnvelope" cn={['icon--before icon--default']}/>,
            placeholder: 'Email',
            focus: emailFocus,
            innerRef: emailRef,
            required: true,
            onChange: (e) => setEmail(e.target.value),
            onFocus: () => setEmailFocus(true),
            onBlur: () => setEmailFocus(false)
        },
        password: {
            cn: 'input--password',
            name: 'password',
            type: showPass ? 'text' : 'password',
            iconBefore: <Icon value="faLock" cn={['icon--before icon--default']}/>,
            iconAfter: <Icon value={showPass ? 'faEye' : 'faEyeSlash'} cn={['icon--after icon--change-type']} onClick={showPassword}/>,
            placeholder: 'Password',
            focus: passwordFocus,
            innerRef: passwordRef,
            required: true,
            onChange: (e) => setPassword(e.target.value),
            onFocus: () => setPasswordFocus(true),
            onBlur: () => setPasswordFocus(false)
        },
        checkbox: {
            cn: ['checkbox'],
            id: 'remember-me',
            label: 'Remember me',
            onClick: () => setPersist(prev => !prev)
        },
        button: {
            type: 'submit',
            size: 'large',
            text: 'Submit',
            theme: 'primary',
            disabled: loading
        },
        // social: {
        //     cn: ['submit', 'icon', 'reset'],
        //     type: 'submit',
        //     size: 'medium',
        //     text: 'Submit',
        //     theme: 'primary',
        // }
    }

    useEffect(() => {
        emailRef.current.focus()
    }, [])

    useEffect(() => {
        setErrorMsg('')
    }, [email, password])

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const { accessToken } = await login({ email, password }).unwrap()
            dispatch(setCredentials({ accessToken }))

            setEmail('')
            setPassword('')
            navigate('/dashboard')

        } catch (err) {
            console.log(err)
            if (!err.status) {
                setErrorMsg('No server response')
            } else if (err.status === 400) {
                setErrorMsg('Missing Email or Password')
            } else if (err.status === 401) {
                setErrorMsg('Unauthorized')
            } else {
                setErrorMsg('Login failed!')
            }
            errRef.current.focus();
        }
    }

    return (
            loading ? 
            <div className="module loading">
                <Icon cn={["spinner"]} iconClass="fa-spin" value="faCompactDisc" />
            </div>
            :
            <>
                <div className="module signin">
                    <h1 className="signin_title">Welcome back <br/>to <span style={{color: "#1C6BBA"}}>EDEN</span></h1>
                    <Form cn={['signin_form']} onSubmit={handleSubmit}>
                        <FormInput cn="form_item--email"> 
                            <Label htmlFor="email" hide={true}>Email</Label>
                            <Input id="email" type="email" size="large" {...props.email} />
                        </FormInput>
                        <FormInput cn="form_item--password"> 
                            <Label htmlFor="password" hide={true}>Password</Label>
                            <Input id="password" type="password" size="large" {...props.password} />
                        </FormInput>
                        <FormInput cn="form_item--remember"> 
                            <Checkbox {...props.checkbox} type="checkbox"/>
                            <Link to="/forgot-password">Forgot Password?</Link>
                        </FormInput>
                        <FormInput cn="form_item--signin"> 
                            <Button {...props.button} style={{width: "100%"}}>Sign In</Button>
                        </FormInput>
                    </Form>
                </div>
                {/* <div className="module social">
                    <span>Or continue with one of these social profile</span>
                    <div className="social_buttons">
                        <Button {...props.social}><Icon iconType="brands" cn={['google']} value="faGoogle"/></Button>
                        <Button {...props.social}><Icon iconType="brands" cn={['facebook']} value="faFacebook"/></Button>
                        <Button {...props.social}><Icon iconType="brands" cn={['github']} value="faGithub"/></Button>
                        <Button {...props.social}><Icon iconType="brands" cn={['stackoverflow']} value="faStackOverflow"/></Button>
                    </div> 
                </div> */}
                <div className="module register">
                    <span>Don’t have an account?</span>
                    <Link to="/register">Create an account</Link>
                </div>
            </>
    )
}

export default Login
