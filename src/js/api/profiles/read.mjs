import { API_AUCTION_URL } from '../constants.mjs';

import { authFetch } from '../authFetch.mjs';
import { load } from '../../storage/index.mjs';

const action = '/profiles';

export async function getProfiles() {
	const updateProfileURL = `${API_AUCTION_URL}${action}`;

	const response = await authFetch(updateProfileURL);

	return await response.json();
}

export async function getProfile(name) {
	if (!name) {
		throw new Error('Get requires a profile name');
	}
	const getProfileURL = `${API_AUCTION_URL}${action}/${name}`;

	const response = await authFetch(getProfileURL);

	return await response.json();
}
