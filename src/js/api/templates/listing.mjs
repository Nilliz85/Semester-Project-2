/**
 * Handles the creation and rendering of a single listing template.
 * @param {Object} listingData - The data of the listing.
 * @param {string} listingData.title - The title of the listing.
 * @param {string} listingData.body - The body content of the listing.
 * @param {string} listingData.media - The URL of the listing's media (optional).
 * @param {string[]} listingData.tags - The tags associated with the listing (optional).
 * @param {HTMLElement} parent - The parent element to which the listing template is appended.
 * @returns {HTMLElement} The generated and appended listing HTML element.
 */

export function listingTemplateC(listingData) {
	const listing = document.createElement('div');
	listing.classList.add('col-md-4', 'listing', 'border', 'w-25', 'mh-25', 'm-4', 'text-body');
	listing.innerText = listingData.title;

	const listingBody = document.createElement('p');
	listingBody.innerText = listingData.description;
	listing.append(listingBody);

	if (listingData.media) {
		const img = document.createElement('img');
		img.src = listingData.media;
		img.alt = `Image from ${listingData.title}`;
		img.classList.add('mt-5', 'img-fluid');
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

	const listingBids = document.createElement('div');
	listingData.bids.forEach((bid) => {
		const bidElement = document.createElement('div');
		const bidText = document.createElement('p');
		bidText.innerHTML = `Bid: ${bid.amount} `;
		bidText.innerHTML += `Bidder: ${bid.bidderName}`;
		bidElement.append(bidText);
		listingBids.append(bidElement);
	});
	listing.append(listingBids);
	return listing;
}

export function renderOneListingTemplate(listingData, parent) {
	const listingElement = listingTemplateC(listingData);
	parent.append(listingElement);

	// Add a click event listener to the listing element
	listingElement.addEventListener('click', () => {
		// Navigate to the detailed listing page with the listing ID
		window.location.href = `/listing/?id=${listingData.id}`;
	});
}
