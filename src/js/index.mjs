import * as listingMethods from '../js/api/listings/index.mjs';
import * as templates from '../js/api/templates/index.mjs';
import * as listeners from '../js/api/handlers/index.mjs';

const path = location.pathname;

listeners.checkIfLoggedIn(path);
listeners.logoutHandler();

/**
 * Handle actions and templates based on the current path.
 * @param {string} path - Current path.
 */

if (path === '/profile/login/') {
	listeners.setLoginFormListener();
} else if (path === '/profile/register/') {
	listeners.setRegisterFormListener();
} else if (path === '/listings/create/') {
	listeners.setCreateListingListener();
} else if (path === '/listings/edit/') {
	listeners.setUpdateListingListener();
} else if (path === '/profile/edit/') {
	listeners.setUpdateProfileListener();
} else if (path === '/listings/') {
	async function testTemplate() {
		const listings = await listingMethods.getListings();
		const container = document.querySelector('#listings');
		templates.renderListingTemplates(listings, container);
	}
	testTemplate();
	listeners.setSearchAndFilterListener();
} else if (path === '/listing/') {
	const params = new URLSearchParams(window.location.search);
	const id = params.get('id');
	const listing = await listingMethods.getListing(id);
	const container = document.querySelector('#listing');
	templates.renderOneListingTemplate(listing, container);
	listeners.setBiddingListener();
} else if (path === '/profile/') {
	listeners.setViewProfileListener();
}
