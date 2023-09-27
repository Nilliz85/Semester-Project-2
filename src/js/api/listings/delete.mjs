import { API_AUCTION_URL } from '../../api/constants.mjs';
import { authFetch } from '../authFetch.mjs';

const action = '/listings';
const method = 'delete';

/**
 * This function deletes a listing.
 * @param {} id  - The listing id
 * @returns  {Promise<Object>} A Promise that resolves to the listing deletion response.
 */

export async function removeListing(id) {
	if (!id) {
		throw new Error('Listing ID is required to delete a listing.');
	}
	const removeListingURL = `${API_AUCTION_URL}${action}/${id}`;
	const response = await authFetch(removeListingURL, {
		method,
	});
	return await response.json();
}
