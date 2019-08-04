const autoSwitch = () => {
	//TBC  this change only for Marcus to have a demo
	if (window.location.hostname == 'localhost') {
		return 'http://localhost:3099/api';
	} else if (window.location.hostname == '10.96.20.74') {
		return 'http://10.96.20.74:3010/api';
	}
};

export const config = {
	graphqQL_url: autoSwitch()
};
