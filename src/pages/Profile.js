import { useState, useRef } from 'react'

import Form from '../components/Form'
import Cover from '../components/Cover'
import Input from '../components/Input'
import Button from '../components/Button'



const Profile = () => {
    const fnCover = useRef()
    const fnRef = useRef()
    const lnRef = useRef()
    const emailRef = useRef()
    const phoneRef = useRef()
    const countryRef = useRef()
    const cityRef = useRef()
    const addressRef = useRef()
    const passwordRef = useRef()

    const [cover, setCover] = useState('https://images.pexels.com/photos/13146598/pexels-photo-13146598.jpeg')
    const [id, setId] = useState('#000001')
    const [fn, setFn] = useState('eduard')
    const [ln, setLn] = useState('boboc')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [country, setCountry] = useState('')
    const [city, setCity] = useState('')
    const [address, setAddress] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState('')

    const props = {
        cover: {
            cn: ['cover'],
            url: cover,
            alt: `${fn} ${ln}`,
            size: 'extra-large'
        },
        id: {
            cn: ['id'],
            id: 'id',
            name: 'id',
            label: 'ID',
            value: id,
            disabled: true
        },
        firstname: {
            cn: ['firstname'],
            id: 'fn',
            name: 'firstname',
            label: 'Firstname',
            value: fn,
            outerRef: fnRef,
            onChange: (e) => setFn(e.target.value)
        },
        lastname: {
            cn: ['lastname'],
            id: 'fn',
            name: 'lastname',
            label: 'Lastname',
            value: ln,
            outerRef: lnRef,
            onChange: (e) => setLn(e.target.value)
        },
        email: {
            cn: ['email'],
            id: 'email',
            name: 'email',
            label: 'Email',
            value: email,
            outerRef: emailRef,
            required: true,
            onChange: (e) => setEmail(e.target.value)
        },
        phone: {
            cn: ['phone'],
            id: 'phone',
            name: 'phone',
            label: 'Phone',
            value: phone,
            outerRef: phoneRef,
            onChange: (e) => setPhone(e.target.value)
        },
        country: {
            cn: ['country'],
            id: 'country',
            name: 'country',
            label: 'Country',
            value: country,
            outerRef: countryRef,
            onChange: (e) => setCountry(e.target.value)
        },
        city: {
            cn: ['city'],
            id: 'city',
            name: 'city',
            label: 'City',
            value: city,
            outerRef: cityRef,
            onChange: (e) => setCity(e.target.value)
        },
        address: {
            cn: ['address'],
            id: 'address',
            name: 'address',
            label: 'Address',
            value: address,
            outerRef: addressRef,
            onChange: (e) => setAddress(e.target.value)
        },
        password: {
            cn: ['password'],
            id: 'password',
            name: 'password',
            label: 'Password',
            value: password,
            placeholder: 'Password',
            outerRef: passwordRef,
            required: true,
            onChange: (e) => setPassword(e.target.value),
        },
        save: {
            cn: ['submit', 'text', 'reset'],
            type: 'submit',
            size: 'large',
            text: 'Save',
            theme: 'primary',
            disabled: loading
        },
    }

    const handleSubmit = () => {

    }

    return (
        <>        
            <Form cn={['signin']} onSubmit={handleSubmit}>
                <div className="form_item form_item--one">
                    <Cover {...props.cover} />
                </div>
                <div className="form_item form_item--two">
                    <Input {...props.id} type="text"/>
                </div>
                <div className="form_item form_item--three">
                    <Input {...props.firstname} type="text"/>
                </div>
                <div className="form_item form_item--four">
                    <Input {...props.lastname} type="text"/>
                </div>
                <div className="form_item form_item--five">
                    <Input {...props.email} type="email"/>
                </div>
                <div className="form_item form_item--six">
                    <Input {...props.phone} type="text"/>
                </div>
                <div className="form_item form_item--seven">
                    <Input {...props.country} type="text"/>
                </div>
                <div className="form_item form_item--eight">
                    <Input {...props.city} type="text"/>
                </div>
                <div className="form_item form_item--nine">
                    <Input {...props.address} type="text"/>
                </div>
                <div className="form_item form_item--ten">
                    <Input {...props.password}/>
                </div>
                <div className="form_item form_item--eleven">
                    <Button {...props.save}>Save</Button>
                </div>
            </Form>
        </>
    )
}

export default Profile
