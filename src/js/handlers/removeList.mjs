import { removeListing } from '../api/listings/delete.mjs';

export async function removeListingListener() {
	const form = document.querySelector('#editListing');
	const deleteButton = document.querySelector('#removeButton');

	const url = new URL(location.href);
	const id = url.searchParams.get('id');

	deleteButton.addEventListener('click', (event) => {
		event.preventDefault();
		removeListing(id);
	});
}
