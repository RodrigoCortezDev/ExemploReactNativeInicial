import React from 'react';
import { View, Text } from 'react-native';
import api from '../../services/api';
import { Container, Header, Avatar, Name, Bio, Starred, OwnerAvatar, Info, Title, Author, Stars } from './styles';

export default class Users extends React.Component {
	state = {
		stars: [],
	};

	async componentDidMount() {
		const { route, navigation } = this.props;

		try {
			//Setando o Header com o nome do usuário
			const user = route.params.user;
			navigation.setOptions({ headerTitle: user.name });

			//Buscando pela api os repositorios definidos como estrelas
			const reponse = await api.get(`/users/${user.login}/starred`);
			this.setState({ stars: reponse.data });
		} catch (error) {
			console.tron.log(error);
		}
	}

	render() {
		const { stars } = this.state;
		const { route, navigation } = this.props;
		const user = route.params.user;

		return (
			<Container>
				<Header>
					<Avatar source={{ uri: user.avatar }} />
					<Name>{user.name}</Name>
					<Bio>{user.bio}</Bio>
				</Header>
				<Stars
					data={stars}
					keyExtractor={(star) => String(star.id)}
					renderItem={({ item }) => (
						<Starred>
							<OwnerAvatar source={{ uri: item.owner.avatar_url }} />
							<Info>
								<Title>{item.name}</Title>
								<Author>{item.owner.login}</Author>
							</Info>
						</Starred>
					)}
				/>
			</Container>
		);
	}
}
