import React from 'react';
// import { Icon } from 'react-native-vector-icons/MaterialIcons';
import { Text } from 'react-native';
import { Container, Form, Input, SubmitButton } from './styles';

export default function Main({ navigation }) {
    return (
        <Container>
            <Form>
                <Input
                    autoCorrect={false}
                    autoCapitalize="none"
                    placeholder="Adicionar Usuário"
                />
                <SubmitButton color="#fff" onPress={() => navigation.navigate('Users') }>
                    <Text>OK</Text>
                    {/* <Icon name="add" size={20} color="#fff"/> */}
                </SubmitButton>
            </Form>
        </Container>
    );
}