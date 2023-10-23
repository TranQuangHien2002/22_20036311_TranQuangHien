import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native'

import React, { useEffect } from 'react'

export default function Screen02({navigation}) {
    return (
        <View style={styles.container}>
            <Text>mang hinh 2</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    }
})