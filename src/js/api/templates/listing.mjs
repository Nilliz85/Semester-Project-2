export function listingTemplate(listingData) {
	const listing = document.createElement('div');
	listing.classList.add('listing');

	const title = document.createElement('h2');
	title.innerText = listingData.title;
	listing.appendChild(title);

	if (listingData.media) {
		const img = document.createElement('img');
		img.src = listingData.media;
		img.alt = `Image from ${listingData.title}`;
		listing.appendChild(img);
	}

	const body = document.createElement('p');
	body.innerText = listingData.body;
	listing.appendChild(body);

	return listing;
}

export function renderListingTemplate(listingData, parent) {
	const listingContainer = document.getElementById(parent);
	const listingElement = listingTemplate(listingData);
	listingContainer.innerHTML = '';
	listingContainer.appendChild(listingElement);
}
