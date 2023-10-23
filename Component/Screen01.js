import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native'

import React, { useEffect } from 'react'

const users = [{
    id: 1,
    name: 'admin1',
    password: 'admin'
},
{
    id: 2,
    name: 'admin2',
    password: 'admin'
},
{
    id: 3,
    name: 'admin3',
    password: 'admin'
},
{
    id: 4,
    name: 'admin4',
    password: 'admin'
}, {
    id: 5,
    name: 'admin5',
    password: 'admin'
},
]

export default function Screen01({navigation}) {
    const [name, setName] = React.useState('');
    const [password, setPassword] = React.useState('');
    const handleLogin = () => {
        let loginSuccessful = false;
        users.forEach((item) => {
            if (item.name === name && item.password === password) {
                loginSuccessful = true;
            }
        });
    
        if (loginSuccessful) {
            navigation.navigate('Screen02');
        } else {
            alert('Login unsuccessful');
        }
    };
    return (
        <View style={styles.container}>
            <View style={{ alignItems: 'center', marginBottom: 20 }}>
                <Image
                    source={require('../assets/icon.png')}
                    style={{ width: 100, height: 100, alignItems: 'center' }}
                />
            </View>
            <Text style={styles.title}>Hello Again!</Text>
            <Text style={styles.title1}>Login into your account</Text>
            <View style={{ padding: 15 }}>
                <View style={styles.groupTxtInput}>
                    <Image
                        source={require('../assets/Vector.png')}
                        style={styles.imgInTxtInputimg}
                    />
                    <TextInput placeholder='Enter your email address' onChangeText={(e) => setName(e)}></TextInput>
                </View>
                <View style={styles.groupTxtInput}>
                    <Image
                        source={require('../assets/lock.png')}
                        style={styles.imgInTxtInputimg}
                    />
                    <TextInput placeholder='Enter your password' onChangeText={(e) => setPassword(e)}></TextInput>
                    <View style={styles.imgDisplay}>
                        <Image
                            source={require('../assets/eye.png')}
                            style={styles.imgInTxtInput}
                        />
                    </View>
                </View>
                <View style={{ alignItems: 'flex-end', color: '#87CEFA' }}>
                    <Text style={{ color: '#87CEFA' }}>Forgot password</Text>
                </View>
                <View style={styles.textBtnLogin}>
                    <Button title='Continue' onPress={handleLogin}></Button>
                </View>
                <Text style={styles.forgot}>or</Text>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                    <Image
                        source={require('../assets/google.png')}
                        style={styles.imgInTxtInput3}
                    />
                    <Image
                        source={require('../assets/face.png')}
                        style={styles.imgInTxtInput3}
                    />
                    <Image
                        source={require('../assets/apple.png')}
                        style={styles.imgInTxtInput3}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    title1: {
        fontSize: 14,
        marginBottom: 82,
        textAlign: 'center'
    },
    forgot: {
        display: 'flex',
        fontSize: 20,
        marginTop: 20,
        justifyContent: 'center'
    },
    groupTxtInput: {
        flexDirection: 'row',
        width: '100%',
        marginTop: 10,
        marginBottom: 10,
        borderWidth: 5,
        borderColor: '#F2F2F2',
        padding: 10,

    },
    imgInTxtInput: {
        width: 25,
        height: 25,
        marginRight: 15
    },
    imgInTxtInput3: {
        width: 60,
        height: 60,
        marginRight: 20
    },
    imgInTxtInputimg: {
        width: 15,
        height: 15,
        marginRight: 15
    },
    imgDisplay: {
        marginLeft: '100px'
    },
    textBtnLogin: {
        marginTop: '50px',
        borderRadius: 20,
        color: '#87CEFA'
    }
})