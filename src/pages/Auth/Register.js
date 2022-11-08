import { useState, useRef, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'

import Form from '../../components/Form'
import FormInput from '../../components/FormInput'
import Label from '../../components/Label'
import Input from '../../components/Input'
import Button from '../../components/Button'
import Icon from '../../components/Icon'

// import axios from '../../api/axios';

// eslint-disable-next-line
const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const PASS_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
const REGISTER_URL = '/api/v1/auth/signup'

const Register = () => {

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/"

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmationRef = useRef()
    
    const [email, setEmail] = useState('')
    const [validEmail, setValidEmail] = useState(false)
    const [emailFocus, setEmailFocus] = useState(false)
    
    const [password, setPassword] = useState('')
    const [validPassword, setValidPassword] = useState(false)
    const [passwordFocus, setPasswordFocus] = useState(false)
    
    const [passwordConf, setPasswordConf] = useState('')
    const [validPasswordConf, setValidPasswordConf] = useState(false)
    const [passwordConfFocus, setPasswordConfFocus] = useState(false)
    
    const [errorMsg, setErrorMsg] = useState('')
    const [success, setSuccess] = useState('')
    
    const [loading, setLoading] = useState(false)
    const [showPass, setShowPass] = useState(false)
    const [showPassConf, setShowPassConf] = useState(false)


    
    const props = {
        email: {
            cn: ['email'],
            name: 'email',
            iconBefore: <Icon value="faEnvelope" cn={['before', 'default']}/>,
            placeholder: 'Email',
            innerRef: emailRef,
            focus: emailFocus,
            status: !emailFocus && email ? (validEmail ? 'success' : 'fail') : 'none',
            autoComplete: 'off',
            required: true,
            ariaInvalid: validEmail ? false : true,
            // ariaDescribedBy: 'uidnote',
            onChange: (e) => setEmail(e.target.value),
            onFocus: () => setEmailFocus(true),
            onBlur: () => setEmailFocus(false)
        },
        password: {
            cn: ['password'],
            name: 'password',
            type: showPass ? 'text' : 'password',
            iconBefore: <Icon value="faLock" cn={['before', 'default']}/>,
            iconAfter: <Icon value={showPass ? 'faEye' : 'faEyeSlash'} cn={['after', 'change-type']} onClick={showPassword}/>,
            placeholder: 'Password',
            status: !passwordFocus && password ? (validPassword ? 'success' : 'fail') : 'none',
            focus: passwordFocus,
            innerRef: passwordRef,
            autoComplete: 'off',
            required: true,
            ariaInvalid: validPassword ? false : true,
            // ariaDescribedBy: 'uidnote',
            onChange: (e) => setPassword(e.target.value),
            onFocus: () => setPasswordFocus(true),
            onBlur: () => setPasswordFocus(false)
        },
        repassword: {
            cn: ['repassword', showPass],
            name: 'repassword',
            type: showPassConf ? 'text' : 'password',
            iconBefore: <Icon value="faLock" cn={['before', 'default']}/>,
            iconAfter: <Icon value={showPassConf ? 'faEye' : 'faEyeSlash'} cn={['after', 'change-type']} onClick={showPasswordConfirm}/>,
            placeholder: 'Confirm password',
            status: !passwordConfFocus && passwordConf ? (validPasswordConf ? 'success' : 'fail') : 'none',
            focus: passwordConfFocus,
            innerRef: passwordConfirmationRef,
            autoComplete: 'off',
            required: true,
            onChange: (e) => setPasswordConf(e.target.value),
            onFocus: () => setPasswordConfFocus(true),
            onBlur: () => setPasswordConfFocus(false)
        },
        checkbox: {
            cn: ['checkbox'],
            id: 'remember-me',
            label: 'Remember me',
            checkmark: <Icon cn={['faCheck']} value='faCheck'/>
        },
        button: {
            type: 'submit',
            size: 'large',
            text: 'Submit',
            theme: 'primary',
            disabled: !validEmail || !validPassword || !validPasswordConf ? true : false
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
        const result = EMAIL_REGEX.test(email)
        setValidEmail(result)
    }, [email])

    useEffect(() => {
        const result = PASS_REGEX.test(password)
        setValidPassword(result)

        const match = password === passwordConf
        setValidPasswordConf(match)
    }, [password, passwordConf])

    useEffect(() => {
        setErrorMsg('')
    }, [email, password, passwordConf])

    function showPassword() {
        setShowPass(prev => !prev)
    }

    function showPasswordConfirm() {
        setShowPassConf(prev => !prev)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const v1 = EMAIL_REGEX.test(email)
        const v2 = PASS_REGEX.test(password)

        if (!v1 || !v2) {
            setErrorMsg("Invalid Entry")
            return
        }
        console.log(emailRef.current.value)
        console.log(passwordRef.current.value)

        try {
            setLoading(true)
            // const response = await AuthService.register({
            //     email: emailRef.current.value,
            //     password: passwordRef.current.value
            // })
            // const response = await axios.post(REGISTER_URL, JSON.stringify({email, password}), {
            //     headers: {'Content-Type': 'application/json'},
            //     // withCredentials: true
            // })
            // console.log(response.data)
            // console.log(response.accessToken)
            // console.log(JSON.stringify(response))
            setLoading(false)
            setEmail('')
            setPassword('')
            setPasswordConf('')
            navigate("/login", { replace: true })
        } catch (err) {
            console.log(err)
            if (!err?.response) {
                setErrorMsg('No Server Response')
            } else if (err.response?.status === 409) {
                setErrorMsg('This email is already taken')
            } else {
                setErrorMsg('Registration Failed')
            }
        }
    }

    return (
        <>
            <div className="module signup">
                <h1 className="signup_title">Create your <br/> account</h1>
                <Form cn={['signup_form']} onSubmit={handleSubmit}>
                    <FormInput cn="form_item--email"> 
                        <Label htmlFor="email" hide={true}>Email</Label>
                        <Input id="email" type="email" size="large" {...props.email} />
                    </FormInput>
                    <FormInput cn="form_item--pass"> 
                        <Label htmlFor="password" hide={true}>Password</Label>
                        <Input id="password" type="password" size="large" {...props.password} />
                    </FormInput>
                    <FormInput cn="form_item--repass"> 
                        <Label htmlFor="repassword" hide={true}>Password Confirmation</Label>
                        <Input id="repassword" type="password" size="large" {...props.repassword} />
                    </FormInput>
                    <FormInput cn="form_item--signup"> 
                        <Button {...props.button} style={{width: "100%"}}>Register</Button>
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
                <span>Already have an account?</span>
                <Link to="/login">Sign In</Link>
            </div>
        </>
    )
}

export default Register
