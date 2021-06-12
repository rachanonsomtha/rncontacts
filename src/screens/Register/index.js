import React, { useState } from 'react'
import { Text, View } from 'react-native';
import RegisterComponent from '../../components/Signup';

const Register = () => {
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});

    const onChange = ({ name, value }) => {
        console.log(value)
        setForm({ ...form, [name]: value, })
        if (value != '') {
            if (name === "password") {
                if (value.length < 6) {
                    setErrors((prev) => {
                        return { ...prev, [name]: 'This field need minimun 6 charactors' }
                    })
                } else {
                    setErrors((prev) => {
                        return { ...prev, [name]: null }
                    })
                }
            } else {
                setErrors((prev) => {
                    return { ...prev, [name]: null }
                })
            }
        } else {
            setErrors((prev) => {
                return { ...prev, [name]: 'This field is required' }
            })
        }
    }

    const onSubmit = () => {
        //validations
        console.log('form: >> ', form)
        if (!form.userName) {
            setErrors(prev => {
                return { ...prev, userName: "Please add a username" }
            })
        }
        if (!form.firstName) {
            setErrors(prev => {
                return { ...prev, firstName: "Please add a firstName" }
            })
        }
        if (!form.lastName) {
            setErrors(prev => {
                return { ...prev, lastName: "Please add a lastName" }
            })
        }
        if (!form.Email) {
            setErrors(prev => {
                return { ...prev, email: "Please add a Email" }
            })
        }
        if (!form.password) {
            setErrors(prev => {
                return { ...prev, password: "Please add a password" }
            })
        }
    }

    return (
        <RegisterComponent onSubmit={onSubmit} onChange={onChange} form={form} errors={errors} />
    )
}

export default Register