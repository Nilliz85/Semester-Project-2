import { createBid } from '../listing/index.mjs';
import * as templates from '../templates/index.mjs';

/**
 * @description This module handles bidding functionality on an online auction page.
 * It listens for bid submissions triggered by clicking the "Bidding" button,
 * retrieves the auction listing's ID from the URL, and creates new bids with
 * the specified amount. After a bid is made, it updates the auction listing
 * information and refreshes the page to reflect the changes.
 */

export function setBiddingListener() {
	console.log('test');
	const bid = document.querySelector('#biddingButton');
	const bidInput = document.querySelector('#bidInput');
	const params = new URLSearchParams(window.location.search);
	const id = params.get('id');

	if (bidInput) {
		bid.addEventListener('click', async (event) => {
			event.preventDefault();

			const amount = bidInput.value;
			console.log(1);
			const returnTheListing = await createBid(id, amount);
			const container = document.querySelector('#listing');
			console.log(returnTheListing);
			window.location.reload();
		});
	}
}
