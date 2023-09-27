import { API_AUCTION_URL } from '../constants.mjs';
import { authFetch } from '../authFetch.mjs';

const action = '/profiles';

/**
 * Retrieves a profile based on the provided name.
 * @param {string} name - The name of the profile to retrieve.
 * @returns {Promise<Object>} A Promise that resolves to the profile object with the specified name.
 */

export async function getProfile(name) {
	if (!name) {
		throw new Error('Get requires a name');
	}
	const getProfileURL = `${API_AUCTION_URL}${action}/${name}?_listings=true`;
	const response = await authFetch(getProfileURL);
	return await response.json();
}
