import { Environment, Network, RecordSource, Store } from 'relay-runtime';
import { withRouter } from 'react-router-dom';
import { isEmpty } from 'lodash';
import { config } from './Config/system';

function fetchQuery(operation, variables, cacheConfig, uploadables, props) {
	//Config
	var accessToken = localStorage.getItem('_token');
	var baseurl = config.graphqQL_url;
	let body;

	if (!isEmpty(uploadables)) {
		if (!window.FormData) {
			throw new Error('Uploading files without `FormData` not supported.');
		}

		const formData = new FormData();
		formData.append('query', operation.text);
		formData.append('variables', JSON.stringify(variables));

		Object.keys(uploadables).forEach((key) => {
			if (Object.prototype.hasOwnProperty.call(uploadables, key)) {
				formData.append(key, uploadables[key]);
			}
		});

		body = formData;
	} else {
		body = JSON.stringify({
			query: operation.text,
			variables
		});
	}
	return fetch(baseurl, {
		method: 'POST',
		headers: {
			Authorization: accessToken ? `Bearer ${accessToken}` : '',
			'Content-Type': 'application/json'
		},
		body
	})
		.then((response) => {
			return response.json();
		})
		.then((response) => {
			if (!response.ok) {
				switch (response.status) {
					case 401:
						break;

					case 500:
						break;
				}
				return response;
			} else {
				return response;
			}
		})
		.catch((err) => {
			console.log('error:', err);
			return err.json();
		});
}

const environment = new Environment({
	network: Network.create(fetchQuery),
	store: new Store(new RecordSource())
});

export default withRouter(environment);
