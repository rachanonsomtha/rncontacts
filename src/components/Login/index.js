import React from 'react'
import { View, Text, Image } from 'react-native'
import Container from '../../components/common/Container';
import Input from '../../components/common/Input';
import CustomButton from '../../components/common/CustomButton';
import styles from './style';

const LoginComponent = () => {


    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    return (
        <Container>
            <Image source={require('../../assets/images/logo.png')} style={styles.logoImage} />
            <View>
                <Text style={styles.title}>Welcome to RNContacts</Text>
                <Text style={styles.subTitle}>Please login here</Text>
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
            </View>
        </Container>
    )
}

export default LoginComponent
