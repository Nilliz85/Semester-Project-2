import * as storage from '../storage/index.mjs';
import * as profileMethods from '../profiles/index.mjs';
import * as templates from '../templates/index.mjs';

/**
 * @description This function creates the event listeners to the user profile.
 */
export async function setViewProfileListener() {
	const profile = storage.load('profile');
	console.log(profile);
	const profileData = await profileMethods.getProfile(profile.name);
	const listingsContainer = document.querySelector('#profile-listings');
	const profileTitle = document.querySelector('#profileName');
	const profileDetails = document.querySelector('#profileDetails');
	const profileCredits = document.querySelector('#profileCredits');
	profileTitle.innerHTML = profileData.name;
	templates.renderProfileListingsTemplates(profileData.listings, listingsContainer);
	profileTitle.innerHTML = profileData.name;
	profileCredits.innerHTML = profileData.credits;
}
