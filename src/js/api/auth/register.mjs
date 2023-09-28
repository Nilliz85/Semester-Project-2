import { API_AUCTION_URL } from '../constants.mjs';

/**
 * Registers a new user.
 * @param {Object} profile - An object containing user information.
 * @param {string} profile.username - The chosen username for the new user.
 * @param {string} profile.email - The email address of the new user.
 * @param {string} profile.password - The password chosen by the new user.
 * @returns {Promise<Object>} A Promise that resolves with the registration response.
 * @throws {Error} If there is an issue during the registration process.
 */
export async function register(profile) {
	const action = '/auth/register';
	const method = 'post';

	try {
		const registerURL = API_AUCTION_URL + action;
		const body = JSON.stringify(profile);

		const response = await fetch(registerURL, {
			headers: {
				'Content-Type': 'application/json',
			},
			method,
			body,
		});

		if (!response.ok) {
			throw new Error('Registration failed');
		}

		const result = await response.json();
		alert('You have registered successfully');
		return result;
	} catch (error) {
		throw new Error('Registration error: ' + error.message);
	}
}
