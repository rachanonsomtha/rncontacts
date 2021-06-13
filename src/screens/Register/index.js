import React, { useState } from 'react'
import { Text, View } from 'react-native';
import RegisterComponent from '../../components/Signup';
import envs from '../../config/env';
import register from '../../context/auth/register';
import axios from '../../helpers/axiosInterceptor';
import { GlobalContext } from '../../context/Provider'

const Register = () => {
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});
    const { authDispatch, authState: { error, loading, data } } = React.useContext(GlobalContext)
    const { BACKEND_URL } = envs;


    console.log('error >>', error)
    const onChange = ({ name, value }) => {
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
        if (Object.values(form).length === 5 &&
            Object.values(form).every(item => item.trim().length > 0)
            && Object.values(errors).every(item => !item)) {
            register(form)(authDispatch);
        }
    }



    return (
        <RegisterComponent onSubmit={onSubmit} onChange={onChange} form={form} errors={errors} error={error} loading={loading} />
    )
}

export default Register