/**
 * Manages data in local storage for user authentication and custom values.
 * @param {string} key - The key for data storage or retrieval.
 * @param {string} value - (Optional) The value to save to local storage.
 * @returns {string | boolean | null}
 * - If 'value' is provided, saves it with the specified 'key'.
 * - If 'value' is not provided, loads the value associated with 'key' from local storage or returns null if not found.
 * - If 'key' is used without 'value', removes the value associated with 'key' from local storage.
 * - If the 'key' is 'loggedIn', checks if the user is logged in and returns true or false accordingly.
 * - For other keys, it manages custom data storage and retrieval.
 */

export function save(key, value) {
	localStorage.setItem(key, JSON.stringify(value));
}

export function load(key) {
	try {
		const value = localStorage.getItem(key);
		return JSON.parse(value);
	} catch {
		return null;
	}
}

export function remove(key) {
	localStorage.removeItem(key);
}

export function checkIfLoggedIn() {
	const token = load('token');
	if (token) {
		return true;
	} else {
		return false;
	}
}

export function logout() {
	remove('token');
	remove('profile');
}

export function getToken() {
	const token = localStorage.getItem('token');
	return JSON.parse(token);
}

export function getCredits() {
	const profile = getProfile();
	const credits = profile.credits;
	return JSON.parse(credits);
}
