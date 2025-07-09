import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Input, Image, Button } from '@rneui/base';

export default function Login() {
  return (
    <View style={styles.container}>
        <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc8Z8RN8x4jVbfY5ezKLR8lFLVftEmcLdtjQ&s' }} 
            style={{ width: 100, height: 100 }}
        />
        <Input keyboardType='default' placeholder='Correo electrónico' containerStyle={{ width: '85%', height: 42}} />
        <Input keyboardType='default' placeholder='Contraseña' containerStyle={{ width: '85%', height: 42}} />
        <Button title='Iniciar sesión' containerStyle={{ width: '85%', height: 42, marginTop: 64 }} />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    }
});