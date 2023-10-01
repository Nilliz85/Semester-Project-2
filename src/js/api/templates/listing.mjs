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
	listing.classList.add('col-md-4', 'listing', 'border', 'rounded', 'my-5', 'w-25', 'mh-25', 'text-body');

	const listingTitle = document.createElement('h2');
	listingTitle.innerText = listingData.title;
	listingTitle.classList.add('listing-title', 'text-center', 'mt-5');
	listing.append(listingTitle);

	const listingBody = document.createElement('p');
	listingBody.innerText = listingData.description;
	listingBody.style.width = '85%';
	listingBody.classList.add('border', 'mx-auto', 'bg-light', 'p-3');
	listing.append(listingBody);

	if (listingData.media) {
		const img = document.createElement('img');
		img.src = listingData.media;
		img.alt = `Image from ${listingData.title}`;
		img.style.width = '85%';
		img.classList.add('mt-5', 'img-fluid', 'mx-auto', 'd-block');
		listing.append(img);
	}

	if (listingData.tags.length > 0) {
		const tags = document.createElement('div');
		tags.style.width = '85%';
		tags.classList.add('tags', 'd-flex', 'mx-auto', 'text-body');
		tags.innerHTML = "<p class= 'tags','pe-2'>Tags: </p>";
		listingData.tags.forEach((tag) => {
			const tagElement = document.createElement('p');
			tagElement.classList.add('tag', 'pe-2');
			tagElement.innerText = `${tag}, `;
			tags.append(tagElement);
		});
		listing.append(tags);
	}

	const listingBids = document.createElement('div');
	listingBids.classList.add('mb-5');
	listingBids.id = 'bidList';
	listingData.bids.forEach((bid) => {
		const bidElement = document.createElement('div');
		bidElement.classList.add('justify-content-center', 'mx-auto', 'd-flex', 'w-75', 'border', 'border-1', 'border-$border-color', 'rounded', 'p-2', 'm-2');
		const bidText = document.createElement('p');
		bidText.classList.add('bidding-text', 'mx-auto');
		bidText.innerHTML = `Bid: ${bid.amount}&nbsp;&nbsp;&nbsp;&nbsp; `;
		bidText.innerHTML += `By: &nbsp;<i>${bid.bidderName}</i>`;
		bidElement.append(bidText);
		listingBids.append(bidElement);
	});
	listing.append(listingBids);

	const bidInput = document.createElement('input');
	bidInput.type = 'number';
	bidInput.placeholder = 'Enter your bid';
	bidInput.classList.add('ml-20', 'mb-2');
	bidInput.style.display = 'block';
	bidInput.style.margin = 'auto';
	bidInput.name = 'bidValue';
	bidInput.id = 'bidInput';

	const bidButton = document.createElement('button');
	bidButton.classList.add('ml-20', 'btn', 'btn-primary', 'mb-5');
	bidButton.id = 'biddingButton';
	bidButton.type = 'submit';
	bidButton.innerText = 'Bid';
	bidButton.style.display = 'block';
	bidButton.style.margin = 'auto';

	listing.append(bidInput, bidButton);

	return listing;
}

export function renderOneListingTemplate(listingData, parent) {
	const listingElement = listingTemplateC(listingData);
	parent.append(listingElement);
}
