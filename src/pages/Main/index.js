import {RectButton} from 'react-native-gesture-handler';
import React from 'react';
import { View, Text } from 'react-native';


export default function Main() {
    return (
         <View>
            <Text>Main</Text>
            <RectButton key="teste">
                <Text>Clique aqui</Text>
            </RectButton>
        </View>
    );
}