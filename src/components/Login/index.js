import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/core';
import { View, Text, Image, TouchableOpacity } from 'react-native'
import Container from '../../components/common/Container';
import Input from '../../components/common/Input';
import CustomButton from '../../components/common/CustomButton';
import styles from './style';
import { REGISTER } from '../../constants/routeNames'
const LoginComponent = () => {

    const { navigate } = useNavigation();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    return (
        <Container>
            <Image source={require('../../assets/images/logo.png')} style={styles.logoImage} />
            <View>
                <Text style={styles.title}>Welcome to RNContacts</Text>
                <Text style={styles.subTitle}>Please login here</Text>

                <View style={styles.form}>
                    <Input
                        label="Username"
                        onChangeText={(text) => setUsername(text)}
                        value={username}
                        iconPosition="right"
                        placeholder="Enter Username"
                    />
                    <Input
                        label="Password"
                        secureTextEntry={true}
                        onChangeText={(text) => setPassword(text)}
                        value={password}
                        icon={<Text>Show</Text>}
                        iconPosition="right"
                        placeholder="Enter Password"
                    />
                    <CustomButton
                        title="Submit"
                        primary
                    />
                    <View style={styles.createSection}>
                        <Text style={styles.infoText}>Need a new account ?</Text>
                        <TouchableOpacity onPress={() => navigate(REGISTER)}>
                            <Text style={styles.linkBtn}>Register</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        </Container>
    )
}

export default LoginComponent
