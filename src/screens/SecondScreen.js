import React,{ useState, useEffect } from 'react';
import {Text, View} from 'react-native';
import Indicator from "../components/Indicator";

const SecondScreen = () => {
    const [isVisible, setIsVisible] = useState(true);
    const toggleVisible = () => {
        setIsVisible(!isVisible);
    };

    useEffect(() => {
        setTimeout(() => {
            toggleVisible();
        }, 1000);
    }, []);


    return (
        <View>
            <Indicator isVisible={isVisible}/>
            <Text>Segunda pantalla</Text>
        </View>
    )
};

export default SecondScreen