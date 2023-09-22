import { login } from '../api/auth/login.mjs';
import * as storage from '../storage/index.mjs';

export function setLoginFormListener() {
	const form = document.querySelector('#loginForm');

	if (form) {
		form.addEventListener('submit', async (event) => {
			event.preventDefault();
			const form = event.target;
			const formData = new FormData(form);
			const profile = Object.fromEntries(formData.entries());

			try {
				const { accessToken, ...user } = await login(profile);

				storage.save('token', accessToken);
				storage.save('profile', user);

				location.href = '/listings';
			} catch (error) {
				console.error(error);
			}
		});
	}
}
