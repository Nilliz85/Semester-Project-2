import { API_AUCTION_URL } from '../../api/constants.mjs';
import { authFetch } from '../authFetch.mjs';

const action = '/profiles';
const method = 'put';

/**
 * Updates a user profile with the provided data.
 * @param {object} profileData - The data object containing the updated profile information.
 * @returns {object} The updated user profile object.
 */

export async function updateProfile(profileData) {
	if (!profileData.name) {
		throw new Error('Update requires a name');
	}
	const updateProfileURL = `${API_AUCTION_URL}${action}/${profileData.name}`;
	const response = await authFetch(updateProfileURL, {
		method,
		body: JSON.stringify(profileData),
	});
	return await response.json();
}
