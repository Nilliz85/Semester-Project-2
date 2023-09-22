import { API_AUCTION_URL } from '../constants.mjs';
import { authFetch } from '../authFetch.mjs';

const action = '/listings';

export async function getListings() {
	const updateListingURL = `${API_AUCTION_URL}${action}`;

	const response = await authFetch(updateListingURL);

	return await response.json();
}

export async function getListing(id) {
	if (!id) {
		throw new Error('Get requires a listingID');
	}
	const getListingURL = `${API_AUCTION_URL}${action}/${id}`;

	const response = await authFetch(getListingURL);

	return await response.json();
}
