import * as listingMethods from '../listings/index.mjs';
import * as templates from '../templates/index.mjs';

/**
 * @description This function sets the event listeners for the search and filter forms.
 */

export function setSearchAndFilterListener() {
	setSortTypeListener();
	setFilterByTagListener();
}

export function setSortTypeListener() {
	const form = document.querySelector('#sortListingsForm');
	const container = document.querySelector('#listings');
	form.addEventListener('submit', async (e) => {
		e.preventDefault();
		const sortType = new FormData(form).get('sortType');
		currentSortType = sortType;
		const returnedListings = await getListings(currentTag, sortType);
		container.innerHTML = ''; // Clear existing listings
		renderListingTemplates(returnedListings, container);
	});
}

export function setFilterByTagListener() {
	const form = document.querySelector('#filterByTagForm');
	const container = document.querySelector('#listings');
	form.addEventListener('submit', async (e) => {
		e.preventDefault();
		const filterTag = new FormData(form).get('filterByTag');
		currentTag = filterTag;
		const returnedListings = await getListings(filterTag, currentSortType);
		container.innerHTML = ''; // Clear existing listings
		renderListingTemplates(returnedListings, container);
	});
}

// export function setSortTypeListener() {
// 	const form = document.querySelector('#sortListingsForm');
// 	const container = document.querySelector('#listings');
// 	if (!form || !container) {
// 		return;
// 	}

// 	form.addEventListener('submit', async (e) => {
// 		e.preventDefault();
// 		const form = e.target;
// 		const formData = new FormData(form);
// 		const values = Object.fromEntries(formData.entries());
// 		const sortType = values.sortType;
// 		currentSortType = sortType;

// 		const returnedListings = await listingMethods.getListings('', sortType);
// 		const container = document.querySelector('#listings');
// 		templates.renderListingTemplates(returnedListings, container);
// 	});
// }

// export function setFilterByTagListener() {
// 	const form = document.querySelector('#filterByTagForm');
// 	const container = document.querySelector('#listings');

// 	if (!form || !container) {
// 		return;
// 	}
// 	form.addEventListener('submit', async (e) => {
// 		e.preventDefault();
// 		const form = e.target;
// 		const formData = new FormData(form);
// 		const values = Object.fromEntries(formData.entries());
// 		const filterTag = values.filterByTag;
// 		currentTag = filterTag;
// 		console.log(formData);
// 		const returnedListings = await listingMethods.getListings(filterTag, '');
// 		templates.renderListingTemplates(returnedListings, container);
// 	});
// }
