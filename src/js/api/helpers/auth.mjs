import { isloggedIn } from './storage.mjs';

export function loginRedirect(path) {
	if (isloggedIn()) {
		if (path === '/profile/login/' || path === '/profile/register/') {
			location.href = '/listings/';
		}
	} else {
		if (path !== '/' && path !== '/profile/login/' && path !== '/profile/register/') {
			location.href = '/';
		}
	}
}
