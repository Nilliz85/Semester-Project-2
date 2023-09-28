import { API_AUCTION_URL } from '../../api/constants.mjs';
import { authFetch } from '../authFetch.mjs';

const action = '/listings';
const method = 'put';

/**
 * @description Updates a listing with the provided data.
 * @param {Object} listingData - The data object containing the updated listing information.
 * @returns {Promise<Object>} A Promise that resolves to the response of the listing update.
 */

export async function updateListing(listingData) {
	if (!listingData.id) {
		throw new Error('Listing ID is required');
	}
	const updateListingURL = `${API_AUCTION_URL}${action}/${listingData.id}`;
	const response = await authFetch(updateListingURL, {
		method,
		body: JSON.stringify(listingData),
	});
	return await response.json();
}
