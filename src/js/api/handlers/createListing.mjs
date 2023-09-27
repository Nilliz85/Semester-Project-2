import { createListing } from '../listing/create.mjs';

export function setCreateListingListener() {
	const form = document.querySelector('#createListing');

	/**
	 * Set up a listener for form submission events on the provided HTML form element
	 * and handle data transmission to the API when the form is submitted.
	 * @param {HTMLFormElement} form - The form element to which the listener is attached.
	 */

	if (form) {
		form.addEventListener('submit', (event) => {
			event.preventDefault();
			const form = event.target;
			const formData = new FormData(form);
			const listing = Object.fromEntries(formData.entries());
			listing.description = [listing.description];
			listing.tags = [listing.tags];
			listing.media = [listing.media];
			createListing(listing);
			console.log(listing);
			console.log(formData);
			console.log(form);
		});
	}
}
