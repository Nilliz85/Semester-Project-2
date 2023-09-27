import { API_AUCTION_URL } from '../constants.mjs';
import { authFetch } from '../authFetch.mjs';

const action = '/listings/';
const method = 'post';

/**
 * Generates a new listing URL based on the provided listing data.
 * @param {Object} listingData - The data object containing the details of the new listing.
 * @returns {Promise<Object>} A Promise that resolves to the response of the listing creation.
 */

export async function createBid(id, amount) {
	const createListingURL = API_AUCTION_URL + action + id + '/bids';
	const response = await authFetch(createListingURL, {
		method,
		body: JSON.stringify({ amount: Number(amount) }),
	});
	return await response.json();
}
