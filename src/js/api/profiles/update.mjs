import { API_AUCTION_URL } from '../constants.mjs';

import { authFetch } from '../authFetch.mjs';

const action = '/profiles';
const method = 'put';

export async function updateProfile(profileData) {
	if (!profileData.name) {
		throw new Error('Update requeires a name');
	}

	const updateProfileURL = `${API_AUCTION_URL}${action}/${profileData.name}/media`;

	const response = await authFetch(updateProfileURL, {
		method,
		body: JSON.stringify(profileData),
	});

	return await response.json();
}
