import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/core';
import { View, Text, Image, TouchableOpacity } from 'react-native'
import Container from '../common/Container';
import Input from '../common/Input';
import CustomButton from '../common/CustomButton';
import styles from './style';
import { LOGIN } from '../../constants/routeNames'
const RegisterComponent = ({ onSubmit,
    onChange,
    form,
    errors
}) => {

    const { navigate } = useNavigation();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    return (
        <Container>
            <Image source={require('../../assets/images/logo.png')} style={styles.logoImage} />
            <View>
                <Text style={styles.title}>Welcome to RNContacts</Text>
                <Text style={styles.subTitle}>Create a free account</Text>

                <View style={styles.form}>
                    <Input
                        label="Username"
                        value={username}
                        iconPosition="right"
                        placeholder="Enter Username"
                        onChangeText={(value) => {
                            onChange({ name: "userName", value })
                        }}
                        error={errors.userName}
                    />
                    <Input
                        label="First name"
                        value={username}
                        iconPosition="right"
                        placeholder="Enter First name"
                        onChangeText={(value) => {
                            onChange({ name: "firstName", value })
                        }}
                        error={errors.firstName}
                    />
                    <Input
                        label="Last name"
                        value={username}
                        iconPosition="right"
                        placeholder="Enter Last name"
                        onChangeText={(value) => {
                            onChange({ name: "lastName", value })
                        }}
                        error={errors.lastName}
                    />
                    <Input
                        label="Email"
                        value={username}
                        iconPosition="right"
                        placeholder="Enter Email"
                        onChangeText={(value) => {
                            onChange({ name: "email", value })
                        }}
                        error={errors.email}
                    />

                    <Input
                        label="Password"
                        secureTextEntry={true}
                        value={password}
                        icon={<Text>Show</Text>}
                        iconPosition="right"
                        placeholder="Enter Password"
                        onChangeText={(value) => {
                            onChange({ name: "password", value })
                        }}
                        error={errors.password}
                    />
                    <CustomButton
                        title="Submit"
                        primary
                        onPress={onSubmit}
                    />
                    <View style={styles.createSection}>
                        <Text style={styles.infoText}>Need a new account ?</Text>
                        <TouchableOpacity onPress={() => navigate(LOGIN)}>
                            <Text style={styles.linkBtn}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        </Container>
    )
}

export default RegisterComponent