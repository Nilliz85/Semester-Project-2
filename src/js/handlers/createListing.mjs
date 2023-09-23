import { createListing } from '../api/listings/index.mjs';

export function setCreateListingFormListener() {
	const form = document.querySelector('#createListing');

	if (form) {
		form.addEventListener('submit', async (event) => {
			event.preventDefault();
			const form = event.target;
			const formData = new FormData(form);

			const title = formData.get('title');
			const description = formData.get('description');
			const deadline = formData.get('deadline');
			const media = formData.get('media');

			const listing = {
				title: title,
				description: description,
				deadline: deadline,
				media: media,
			};

			console.log(listing);

			try {
				await createListing(listing);
				console.log('Listing created successfully');
			} catch (error) {
				console.error('Error creating listing:', error);
			}
		});
	}
}
