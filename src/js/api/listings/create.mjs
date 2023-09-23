import { API_AUCTION_URL } from '../constants.mjs';
import { authFetch } from '../authFetch.mjs';

const action = '/listings';
const method = 'post';

export async function createListing(listingData) {
	const createListingURL = API_AUCTION_URL + action;

	const response = await authFetch(createListingURL, {
		method,
		body: JSON.stringify(listingData),
	});
	if (response.ok) {
		alert('Success');
		location.href = '/listings';
	}

	return await response.json();
}
