import { load } from './storage/index.mjs';

/**
 * Retrieve an authenticated request headers object or make an authenticated request to the API.
 * @param {string} url - (Optional) The URL to make the request to (if making a request).
 * @param {object} options - (Optional) The options object for the request (if making a request).
 * @returns {Object | Promise<Response>}
 * - If 'url' and 'options' are provided, returns a Promise that resolves to the fetch response.
 * - If 'url' and 'options' are not provided, returns the headers object containing the Content-Type and Authorization headers.
 */

export function headers() {
	const token = load('token');
	return {
		'Content-Type': 'application/json',
		Authorization: `Bearer ${token}`,
	};
}

export async function authFetch(url, options = {}) {
	return fetch(url, {
		...options,
		headers: headers(),
	});
}
