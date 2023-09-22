import * as listeners from './handlers/index.mjs';
import * as templates from './templates/index.mjs';
import { loginRedirect } from './api/helpers/auth.mjs';
import { renderListingTemplate } from '../js/templates/listing.mjs';

export default function router() {
	const path = location.pathname;

	switch (path) {
		case '/profile/login/':
			listeners.setLoginFormListener();
			return;
		case '/profile/register/':
			listeners.setRegisterFormListener();
			return;
		case '/listing/create/':
			listeners.setCreateListingFormListener();
			listeners.logoutListener();
			return;
		case '/listing/edit/':
			listeners.setUpdateListingListener();
			listeners.logoutListener();
			return;
		case '/profile/edit/':
			listeners.setUpdateProfileListener();
			listeners.logoutListener();
			return;
		case '/listing/index.html':
			listeners.setUpdateListingListener();
			listeners.removeListingListener();
			listeners.logoutListener();
			break;
		case '/listings/':
			templates.renderListingTemplates();
			listeners.logoutListener();
			return;
		case '/listings/listing.html':
			templates.testListingTemplate();
			listeners.logoutListener();
			return;
		case '/profile/':
			listeners.logoutListener();
			break;
		default:
			break;
	}

	loginRedirect(path);
}
