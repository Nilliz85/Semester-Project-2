import * as listingMethods from '../listings/index.mjs';

/**
 * Generate an HTML template for rendering a single listing and render templates for multiple listings.
 * @param {Object} listingData - The data of the single listing.
 * @param {string} listingData.title - The title of the listing.
 * @param {string} listingData.body - The body content of the listing.
 * @param {string} listingData.media - The URL of the listing's media (optional).
 * @param {string[]} listingData.tags - The tags associated with the listing (optional).
 * @param {Object[]} listingDataList - An array of listing data objects for multiple listings.
 * @param {HTMLElement} parent - The parent element to which the listing templates are appended.
 * @returns {HTMLElement[]} An array of generated and appended listing HTML elements.
 */

export function listingTemplateB(listingData) {
	const listing = document.createElement('div');

	listing.id = listingData.id;
	listing.classList.add('col-md-4', 'listing', 'border', 'w-25', 'mh-25', 'm-4', 'text-decoration-none', 'text-body');
	const listingTitle = document.createElement('h2');
	listingTitle.innerText = listingData.title;
	listing.append(listingTitle);

	const listingBody = document.createElement('p');
	listingBody.innerText = listingData.body;
	listing.append(listingBody);

	if (listingData.media) {
		const img = document.createElement('img');
		img.src = listingData.media;
		img.alt = `Image from ${listingData.title}`;
		img.classList.add('mt-5', 'mb-2', 'img-fluid');
		listing.append(img);
	}

	if (listingData.tags.length > 0) {
		const tags = document.createElement('div');
		tags.classList.add('tags', 'd-flex');
		tags.innerHTML = "<p class= 'pe-2'>Tags: </p>";
		listingData.tags.forEach((tag) => {
			const tagElement = document.createElement('p');
			tagElement.classList.add('tag', 'pe-2');
			tagElement.innerText = `${tag}, `;
			tags.append(tagElement);
		});
		listing.append(tags);
	}

	const buttonContainer = document.createElement('div');
	buttonContainer.classList.add('d-flex');
	const editButtonLink = document.createElement('a');
	editButtonLink.href = `/listings/edit/?id=${listingData.id}`;
	const editButton = document.createElement('button');
	editButton.classList.add('btn', 'btn-primary');
	editButton.innerHTML = 'Edit';
	const deleteButton = document.createElement('button');
	deleteButton.classList.add('btn', 'btn-danger', 'delete-button');
	deleteButton.innerHTML = 'Delete';
	buttonContainer.append(deleteButton);
	editButtonLink.append(editButton);
	buttonContainer.append(editButtonLink);
	listing.append(buttonContainer);
	return listing;
}

export function renderProfileListingsTemplates(listingDataList, parent) {
	parent.innerHTML = '';
	parent.append(...listingDataList.map(listingTemplateB));
	parent.classList.add('row');
	const deleteButtons = document.querySelectorAll('.delete-button');
	deleteButtons.forEach((button) => {
		button.addEventListener('click', async (e) => {
			e.preventDefault();
			const id = e.target.parentElement.parentElement.id;
			await listingMethods.removeListing(id);
			window.location.reload();
		});
	});
}
