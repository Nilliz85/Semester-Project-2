import { getListings } from '../listings/index.mjs';

const parentElement = document.getElementById('listings');

/**
 * Create and render an HTML template for a multiple listings, then append it to a specified parent element.
 * @param {Object} listingData - The data of the listing.
 * @param {string} listingData.title - The title of the listing.
 * @param {string} listingData.body - The body content of the listing.
 * @param {string} listingData.media - The URL of the listing's media (optional).
 * @param {string[]} listingData.tags - The tags associated with the listing (optional).
 * @param {HTMLElement} parent - The parent element to which the listing template is appended.
 * @returns {HTMLElement} The generated and appended listing HTML element.
 */

export function listingTemplateB(listingData) {
	const listingLink = document.createElement('a');
	listingLink.href = `/listings/?id=${listingData.id}`;
	const listing = document.createElement('div');
	listingLink.append(listing);
	listingLink.classList.add('col-md-4', 'listing', 'border', 'w-25', 'mh-25', 'm-4', 'text-decoration-none', 'text-body');
	const listingTitle = document.createElement('h2');
	listingTitle.innerText = listingData.title;
	listingTitle.classList.add('text-center', 'p-3');
	listing.append(listingTitle);
	const listingBody = document.createElement('p');
	listingBody.innerText = listingData.description;
	listingBody.classList.add('text-center', 'p-3');
	listing.append(listingBody);

	const img = document.createElement('img');
	if (listingData.media.length > 0) {
		const imageUrl = listingData.media[0];
		const tempImg = new Image();
		tempImg.src = imageUrl;
		tempImg.onload = () => {
			img.src = imageUrl;
		};

		tempImg.onerror = () => {
			img.src = '../../../assets/img/auctionet-placeholder.png';
		};
	} else {
		img.src = '../../../assets/img/auctionet-placeholder.png';
	}

	img.alt = `Image from ${listingData.title}`;
	img.classList.add('mt-5', 'mb-2', 'img-fluid');
	listing.append(img);

	if (listingData.tags.length > 0) {
		const tags = document.createElement('div');
		tags.classList.add('tags', 'd-flex');
		tags.innerHTML = "<p class='pe-2'>Tags: </p>";

		const slicedTags = listingData.tags.slice(0, 3);
		const additionalTags = listingData.tags.length > 2 ? '...' : '';

		slicedTags.forEach((tag, index) => {
			const tagElement = document.createElement('p');
			tagElement.classList.add('tag', 'pe-2');
			tagElement.innerText = `${tag}`;
			tags.append(tagElement);

			if (index < slicedTags.length - 1) {
				tags.append(document.createTextNode(', '));
			}
		});

		if (additionalTags) {
			const lastTagElement = tags.lastChild;
			lastTagElement.innerText += additionalTags;
		}

		listing.append(tags);
	}

	return listingLink;
}

let currentPage = 1;
const itemsPerPage = 15;
let currentTag = '';
let currentSortType = '';

export function renderListingTemplates(listingDataList, parent) {
	const start = (currentPage - 1) * itemsPerPage;
	const end = start + itemsPerPage;

	const currentItems = listingDataList.slice(start, end);
	parent.append(...currentItems.map(listingTemplateB));
	parent.classList.add('row');
}

document.addEventListener('DOMContentLoaded', () => {
	const loadMoreButton = document.createElement('div');
	let totalItems = 100; // TODO: Replace with actual total number of items

	loadMoreButton.classList.add('load-more', 'text-body', 'fs-5', 'hover-grow');

	const updateButtonState = () => {
		if (currentPage * itemsPerPage >= totalItems) {
			loadMoreButton.innerHTML = `
			<div>Go back to the top</div>
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16">
				<path fill-rule="evenodd" d="M1.646 11.354a.5.5 0 0 1 .708 0L8 5.707l5.646 5.647a.5.5 0 0 1 .708-.708l-6-6a.5.5 0 0 1-.708 0l-6 6a.5.5 0 0 1 0 .708z"/>
			</svg>
		`;
		} else {
			loadMoreButton.innerHTML = `
				<div>Load more auctions</div>
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
					<path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
				</svg>
			`;
		}
	};

	loadMoreButton.addEventListener('click', () => {
		if (currentPage * itemsPerPage >= totalItems) {
			window.scrollTo({ top: 0, behavior: 'smooth' });
			currentPage = 1;
		} else {
			currentPage++;
		}

		getListings(currentTag, currentSortType).then((data) => {
			renderListingTemplates(data, parentElement);
			updateButtonState();
		});
	});

	parentElement.after(loadMoreButton);

	getListings(currentTag, currentSortType).then((data) => {
		renderListingTemplates(data, parentElement);
		updateButtonState();
	});
});
