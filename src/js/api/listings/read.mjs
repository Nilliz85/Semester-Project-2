import { API_AUCTION_URL } from '../../api/constants.mjs';
import { authFetch } from '../authFetch.mjs';

const action = '/listings';

/**
 * Retrieves listings, allowing sorting by 'sortType' or filtering by 'tag'.
 * @param {string} tag - The tag to filter listings by.
 * @param {string} sortType - The type of sorting to apply.
 * @param {*} id - (Optional) The ID of a specific listing to retrieve.
 * @throws {Error} If 'id' is provided but not found.
 * @returns If 'id' is provided, returns the listing with the given ID; otherwise, returns listings
 * filtered or sorted based on 'tag' and 'sortType'.
 */

export async function getListings(tag, sortType) {
	const getListingsURL = `${API_AUCTION_URL}${action}?_author=true${tag ? `&_tag=${tag}` : ''}${sortType ? `&sort=created&sortOrder=${sortType}` : ''}`;
	const response = await authFetch(getListingsURL);
	return await response.json();
}

export async function getListing(id) {
	if (!id) {
		throw new Error('Get requires a listingID');
	}
	const getListingURL = `${API_AUCTION_URL}${action}/${id}?_bids=true&_seller=true`;
	const response = await authFetch(getListingURL);
	return await response.json();
}
