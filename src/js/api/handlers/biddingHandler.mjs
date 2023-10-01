import { createBid } from '../listings/index.mjs';
import * as templates from '../templates/index.mjs';

/**
 * @description This module handles bidding functionality on an online auction page.
 * It listens for bid submissions triggered by clicking the "Bidding" button,
 * retrieves the auction listing's ID from the URL, and creates new bids with
 * the specified amount. After a bid is made, it updates the auction listing
 * information and refreshes the page to reflect the changes.
 */

export function setBiddingListener() {
	const bid = document.querySelector('#biddingButton');
	const bidInput = document.querySelector('#bidInput');
	const params = new URLSearchParams(window.location.search);
	const id = params.get('id');

	if (bidInput) {
		bid.addEventListener('click', async (event) => {
			event.preventDefault();

			const amount = bidInput.value;
			const returnTheListing = await createBid(id, amount);

			const container = document.querySelector('#bidList');
			const newBidDiv = document.createElement('div');
			newBidDiv.classList.add('justify-content-center', 'mx-auto', 'd-flex', 'w-75', 'border', 'border-1', 'border-$border-color', 'rounded', 'p-2', 'm-2');

			const newBidText = document.createElement('p');
			newBidText.classList.add('bidding-text', 'mx-auto');
			newBidText.innerHTML = `Bid: ${amount}&nbsp;&nbsp;&nbsp;&nbsp; `;
			newBidText.innerHTML += `By: &nbsp;<i>${returnTheListing.bids[returnTheListing.bids.length - 1].bidderName}</i>`;

			newBidDiv.append(newBidText);
			container.append(newBidDiv);

			window.location.reload();
		});
	}
}
