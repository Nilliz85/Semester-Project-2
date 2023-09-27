import * as listingMethods from '../api/listings/index.mjs';

export function listingsTemplate(listingData) {
	const listings = document.createElement('div');
	listings.classList.add('listings');

	const createdDate = new Date(listingData.created);
	const formattedDate = `${createdDate.getDate()}-${createdDate.getMonth() + 1}-${createdDate.getFullYear()} ${createdDate.getHours()}:${createdDate.getMinutes()}`;

	listings.innerHTML = `<div class="card">
  <a href="/listing/index.html?id=${listingData.id}" class="listing-title p-2 " id=${listingData.id}>${listingData.title} </a> 
  <p class="listing-body p-2">${listingData.body}</p>
  <div class="p-2" id="listingsId" value="${listingData.id}">#${listingData.id}</div>
 
  <p class="p-1 text-muted">posted: ${formattedDate}</p>
  </div>`;

	if (listingData.media) {
		const img = document.createElement('img');
		img.classList.add('image-size');
		img.src = listingData.media;
		img.alt = `Image of ${listingData.title}`;
		listings.append(img);
	}

	return listings;
}

export function renderListingTemplates(listingDataList, parent) {
	parent.append(...listingDataList.map(listingsTemplate));
}

async function templates() {
	const listings = await listingMethods.getListings();
	const container = document.getElementById('listings');
	renderListingTemplates(listings, container);
}

templates();
