import { getListing, updateListing } from '../api/listings/index.mjs';

export async function setUpdateListingListener() {
	const form = document.querySelector('#editListing');

	const url = new URL(location.href);
	const id = url.searchParams.get('id');

	if (form) {
		const button = document.querySelector('button');
		button.disabled = true;
		const listing = await getListing(id);

		form.title.value = listing.title;
		form.body.value = listing.body;
		form.tags.value = listing.tags.join(' ');
		form.media.value = listing.media;

		button.disabled = false;

		form.addEventListener('submit', async (event) => {
			event.preventDefault();
			const form = event.target;
			const formData = new FormData(form);
			const updatedListing = Object.fromEntries(formData.entries());
			updatedListing.id = id;

			const tags = formData.get('tags');
			const tagList = tags.split(' ').map((tag) => tag.trim());
			updatedListing.tags = tagList;

			try {
				await updateListing(updatedListing);
				console.log('Listing updated successfully');

				if (updatedListing.tags) {
					const listingTags = document.querySelector('#listingTags');
					listingTags.innerHTML = `Tags: ${updatedListing.tags.join(', ')}`;
				}
			} catch (error) {
				console.error('Error updating listing:', error);
			}
		});
	}
}
