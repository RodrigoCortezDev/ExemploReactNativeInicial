import React from 'react';
import { Text } from 'react-native';
import { Container, Form, Input, SubmitButton } from './styles';
import { Icon } from 'react-native-vector-icons/MaterialIcons';

export default class Main extends React.Component {
	state = {};

	componentDidMount() {}

	render() {
		return (
			<Container>
				{/* <Icon name="add" size={20} color="#fff" /> */}
				<Form>
					<Input autoCorrect={false} autoCapitalize="none" placeholder="Adicionar Usuário..." />
					<SubmitButton color="#fff" onPress={() => this.props.navigation.navigate('Users')}>
						<Text>OK</Text>
					</SubmitButton>
				</Form>
			</Container>
		);
	}
}
