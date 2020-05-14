import {RectButton} from 'react-native-gesture-handler';
import React from 'react';
import { View, Text } from 'react-native';


export default function Main({ navigation }) {
    return (
         <View>
            <Text>Main</Text>
            <RectButton key="teste" onPress={() => navigation.navigate('Users')}>
                <Text>Clique aqui</Text>
            </RectButton>
        </View>
    );
}