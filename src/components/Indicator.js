import React from 'react';
import {View, ActivityIndicator, StyleSheet, Modal}
    from 'react-native';

const Indicator = ({isVisible}) => {
    return (
        <Modal
            visible={isVisible}
        >
            <View>
                <ActivityIndicator
                    size='large'
                    color='#00ff00'
                />
            </View>
        </Modal>
    );
};

export default Indicator;