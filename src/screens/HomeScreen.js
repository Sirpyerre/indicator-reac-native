import React from 'react';
import {Text, View, Button} from 'react-native';

const HomeScreen = ({navigation}) => {
    return (
        <View>
            <Text>Hola estoy en home</Text>
            <Button onPress={ () =>
                navigation.navigate('Second')
            } title="Ir a la segunda pantalla"/>
        </View>
    )
};

export default HomeScreen;