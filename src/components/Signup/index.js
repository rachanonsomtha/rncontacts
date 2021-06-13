import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/core';
import { View, Text, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import Container from '../common/Container';
import Input from '../common/Input';
import CustomButton from '../common/CustomButton';
import styles from './style';
import { LOGIN } from '../../constants/routeNames'
const RegisterComponent = ({ onSubmit,
    onChange,
    form,
    errors,
    error,
    loading
}) => {

    const { navigate } = useNavigation();
    return (
        <Container>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.container}>
                <Image source={require('../../assets/images/logo.png')} style={styles.logoImage} />
                <View>
                    <Text style={styles.title}>Welcome to RNContacts</Text>
                    <Text style={styles.subTitle}>Create a free account</Text>
                    <View style={styles.form}>
                        <Input
                            label="Username"
                            iconPosition="right"
                            placeholder="Enter Username"
                            onChangeText={(value) => {
                                onChange({ name: "userName", value })
                            }}
                            error={errors.userName || error?.username?.[0]}
                        />
                        <Input
                            label="First name"
                            iconPosition="right"
                            placeholder="Enter First name"
                            onChangeText={(value) => {
                                onChange({ name: "firstName", value })
                            }}
                            error={errors.firstName || error?.first_name?.[0]}
                        />
                        <Input
                            label="Last name"
                            iconPosition="right"
                            placeholder="Enter Last name"
                            onChangeText={(value) => {
                                onChange({ name: "lastName", value })
                            }}
                            error={errors.lastName || error?.last_name?.[0]}
                        />
                        <Input
                            label="Email"
                            iconPosition="right"
                            placeholder="Enter Email"
                            onChangeText={(value) => {
                                onChange({ name: "email", value })
                            }}
                            error={errors.email || error?.email?.[0]}
                        />

                        <Input
                            label="Password"
                            secureTextEntry={true}
                            icon={<Text>Show</Text>}
                            iconPosition="right"
                            placeholder="Enter Password"
                            onChangeText={(value) => {
                                onChange({ name: "password", value })
                            }}
                            error={errors.password || error?.password?.[0]}
                        />
                        <CustomButton
                            loading={loading}
                            disabled={loading}
                            title="Submit"
                            primary
                            onPress={onSubmit}
                        />
                        <View style={styles.createSection}>
                            <Text style={styles.infoText}>Already have account ?</Text>
                            <TouchableOpacity onPress={() => navigate(LOGIN)}>
                                <Text style={styles.linkBtn}>Login</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </Container>
    )
}

export default RegisterComponent
