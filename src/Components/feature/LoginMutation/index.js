import { commitMutation, graphql } from 'react-relay';
import environment from '../../../Environment';

const mutation = graphql`
	mutation LoginMutation($data: LoginInput) {
		login(data: $data) {
			access_token
			refresh_token
		}
	}
`;

export default function LoginMutation(loginInfo, result) {
	const { username, password } = loginInfo;
	var variables = {
		data: {
			username: username,
			password: password
		}
	};

	commitMutation(environment, {
		mutation,
		variables,
		onCompleted: (response, error) => {
			result(response, error);
			console.log('Response received from server.');
		},
		onError: (err) => result(null, err)
	});
}
