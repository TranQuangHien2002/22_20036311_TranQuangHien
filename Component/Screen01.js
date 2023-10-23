import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native'

import React, { useEffect } from 'react'

const users = [{
    name: 'admin',
    password: 'admin'
}]

export default function screens_2a() {
    const [name, setName] = React.useState('');
    const [password, setPassword] = React.useState('');
    const handleLogin = () => {
        users.forEach((item) => {
            if (item.name === name && item.password === password) {
                alert('Login success')
            }else{
                alert('Login unsuccessful')
            }
        })
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>LOGIN</Text>
            <View style={{ padding: 15 }}>
                <View style={styles.groupTxtInput}>
                    <Image
                        source={require('../assets/avatar.png')}
                        style={styles.imgInTxtInput}
                    />
                      <TextInput placeholder='Name'  onChangeText={(e) => setName(e)}></TextInput>
                </View>
                <View style={styles.groupTxtInput}>
                    <Image
                        source={require('../assets/lock.png')}
                        style={styles.imgInTxtInput}
                    />
                    <TextInput placeholder='Password' onChangeText={(e) => setPassword(e)}></TextInput>
                    <View style={styles.imgDisplay}>
                        <Image
                            source={require('../assets/eye.png')}
                            style={styles.imgInTxtInput}
                        />
                    </View>
                </View>
                <View style={styles.textBtnLogin}>
                    <Button title='Login' color={'#060000'}  onPress={handleLogin}></Button>
                </View>
                <Text style={styles.forgot}>Forgot your password?</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundImage: 'linear-gradient(180deg, #FBCB00 0%, #BF9A00 100%)'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 82,
    },
    forgot: {
        display: 'flex',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 45,
        justifyContent: 'center'
    },
    groupTxtInput: {
        flexDirection: 'row',
        width: '100%',
        marginTop: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#F2F2F2',
        padding: 10
    },
    imgInTxtInput: {
        width: 25,
        height: 25,
        marginRight: 15
    },
    imgDisplay: {
        marginLeft: '100px'
    },
    textBtnLogin: {
        marginTop: '50px'
    }
})