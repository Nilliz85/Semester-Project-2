import { API_AUCTION_URL } from '../constants.mjs';
import { authFetch } from '../authFetch.mjs';

const action = '/listings';
const method = 'delete';

export async function removeListing(id) {
	if (!id) {
		throw new Error('Delete requires an ID');
	}

	const updateListingURL = `${API_AUCTION_URL}${action}/${id}`;

	const response = await authFetch(updateListingURL, {
		method,
	});

	return await response.json();
}
