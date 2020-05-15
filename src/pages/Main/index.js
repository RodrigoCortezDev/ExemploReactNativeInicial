import React from 'react';
import { Text, Alert, Keyboard } from 'react-native';
import { Container, Form, Input, SubmitButton } from './styles';
import api from '../../services/api';

// import { Icon } from 'react-native-vector-icons/MaterialIcons';

export default class Main extends React.Component {
	//Variaveis de estado
	state = {
		newUser: '',
		users: [],
	};

	//Ao abrir o app
	componentDidMount() {}

	//Adicionar o usuário
	handleAddUser = async () => {
		const { users, newUser } = this.state;

		const response = await api.get(`/users/${newUser}`);

		const data = {
			name: response.data.name,
			login: response.data.login,
			bio: response.data.bio,
			avatar: response.data.avatar_url,
		};

		this.setState({ users: [...users, data], newUser: '' });
		Keyboard.dismiss();
	};

	//Renderização da tela
	render() {
		const { users, newUser } = this.state;

		return (
			<Container>
				{/* <Icon name="add" size={20} color="#fff" /> */}
				<Form>
					<Input
						autoCorrect={false}
						autoCapitalize="none"
						placeholder="Adicionar Usuário..."
						onChangeText={(text) => this.setState({ newUser: text })}
						returnKeyType="send"
						onSubmitEditing={this.handleAddUser}
						value={newUser}
					/>
					<SubmitButton rippleColor="#fff" onPress={this.handleAddUser}>
						<Text>Incuir</Text>
					</SubmitButton>

					{/* <SubmitButton color="#fff" onPress={() => this.props.navigation.navigate('Users')}>
						<Text>OK</Text>
					</SubmitButton> */}
				</Form>
			</Container>
		);
	}
}
