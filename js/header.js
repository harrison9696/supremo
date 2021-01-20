// Naming the variables
const navBtn = document.querySelector('.navbar__hamburger');
const navOpen = document.querySelector('.navbar__open');

const cart = document.querySelector('.navbar__cart');
const cartItems = document.querySelector('.navbar__items');
const popup = document.querySelector('.navbar__popup');
const overlay = document.querySelector('.navbar__overlay');
const buyBtns = document.querySelectorAll('.btn--buy');

const productOne = document.querySelector('.navbar__product--1');
const productTwo = document.querySelector('.navbar__product--2');
const productThree = document.querySelector('.navbar__product--3');
const productFour = document.querySelector('.navbar__product--4');
const productFive = document.querySelector('.navbar__product--5');
const productSix = document.querySelector('.navbar__product--6');

const supremoDelux = document.querySelector('.supremo-delux');
const supremoSweet = document.querySelector('.supremo-sweet');
const supremoNutty = document.querySelector('.supremo-nutty');
const coffeeSet = document.querySelector('.coffee-set');
const coffeeMug = document.querySelector('.coffee-mug');
const coffeeLights = document.querySelector('.coffee-lights');

const priceDisplay = document.querySelector('.navbar__price');

const removeOne = document.querySelector('.remove-1');
const removeTwo = document.querySelector('.remove-2');
const removeThree = document.querySelector('.remove-3');
const removeFour = document.querySelector('.remove-4');
const removeFive = document.querySelector('.remove-5');
const removeSix = document.querySelector('.remove-6');

let numberItems = 0;
let numberItemOne = 0;
let numberItemTwo = 0;
let numberItemThree = 0;
let numberItemFour = 0;
let numberItemFive = 0;
let numberItemSix = 0;
let price = 0;

// Toggling the menu dropdown
navBtn.addEventListener('click', e => {
	navOpen.classList.toggle('nav-open');
	navBtn.classList.toggle('nav-open');
});

// SHOPPING CART

// Opening the shopping cart
cart.addEventListener('click', e => {
	popup.classList.add('active-popup');
	overlay.classList.add('active-overlay');
});

overlay.addEventListener('click', e => {
	popup.classList.remove('active-popup');
	overlay.classList.remove('active-overlay');
});

// Hiding shopping cart style if no items
if (numberItemOne === 0) {
	productOne.style.display = 'none';
}

if (numberItemTwo === 0) {
	productTwo.style.display = 'none';
}

if (numberItemThree === 0) {
	productThree.style.display = 'none';
}

if (numberItemFour === 0) {
	productFour.style.display = 'none';
}

if (numberItemFive === 0) {
	productFive.style.display = 'none';
}

if (numberItemSix === 0) {
	productSix.style.display = 'none';
}

// Adding an item
buyBtns.forEach((buyBtn, index) => {
	buyBtn.addEventListener('click', function () {
		numberItems++;
		cartItems.innerHTML = `${numberItems}`;

		if (index === 0) {
			numberItemOne++;
			productOne.style.display = 'flex';

			if (numberItemOne >= 1) {
				supremoDelux.innerHTML = `Supremo Delux x${numberItemOne}`;
			}
		}

		if (index === 1) {
			numberItemTwo++;
			productTwo.style.display = 'flex';

			if (numberItemTwo >= 1) {
				supremoSweet.innerHTML = `Supremo Sweet x${numberItemTwo}`;
			}
		}

		if (index === 2) {
			numberItemThree++;
			productThree.style.display = 'flex';

			if (numberItemThree >= 1) {
				supremoNutty.innerHTML = `Supremo Nutty x${numberItemThree}`;
			}
		}

		if (index === 3) {
			numberItemFour++;
			productFour.style.display = 'flex';

			if (numberItemFour >= 1) {
				coffeeSet.innerHTML = `Coffee Set x${numberItemFour}`;
			}
		}

		if (index === 4) {
			numberItemFive++;
			productFive.style.display = 'flex';

			if (numberItemFive >= 1) {
				coffeeMug.innerHTML = `Coffee Mug x${numberItemFive}`;
			}
		}

		if (index === 5) {
			numberItemSix++;
			productSix.style.display = 'flex';

			if (numberItemSix >= 1) {
				coffeeLights.innerHTML = `Coffee Lights x${numberItemSix}`;
			}
		}

		// Price
		price =
			39.99 * numberItemOne +
			29.99 * numberItemTwo +
			29.99 * numberItemThree +
			120 * numberItemFour +
			5 * numberItemFive +
			100 * numberItemSix;
		price = price.toFixed(2);
		priceDisplay.innerHTML = `${price}`;
	});
});

// Removing an item
removeOne.addEventListener('click', function () {
	if (numberItemOne >= 1) {
		numberItems -= 1;
		numberItemOne -= 1;

		cartItems.innerHTML = `${numberItems}`;
		supremoDelux.innerHTML = `Supremo Delux x${numberItemOne}`;

		price =
			39.99 * numberItemOne +
			29.99 * numberItemTwo +
			29.99 * numberItemThree +
			120 * numberItemFour +
			5 * numberItemFive +
			100 * numberItemSix;
		price = price.toFixed(2);
		priceDisplay.innerHTML = `${price}`;
	}

	if (numberItemOne === 0) {
		productOne.style.display = 'none';

		price =
			39.99 * numberItemOne +
			29.99 * numberItemTwo +
			29.99 * numberItemThree +
			120 * numberItemFour +
			5 * numberItemFive +
			100 * numberItemSix;
		price = price.toFixed(2);
		priceDisplay.innerHTML = `${price}`;
	} else {
		return;
	}
});

removeTwo.addEventListener('click', function () {
	if (numberItemTwo >= 1) {
		numberItems -= 1;
		numberItemTwo -= 1;

		cartItems.innerHTML = `${numberItems}`;
		supremoSweet.innerHTML = `Supremo Sweet x${numberItemTwo}`;

		price =
			39.99 * numberItemOne +
			29.99 * numberItemTwo +
			29.99 * numberItemThree +
			120 * numberItemFour +
			5 * numberItemFive +
			100 * numberItemSix;
		price = price.toFixed(2);
		priceDisplay.innerHTML = `${price}`;
	}

	if (numberItemTwo === 0) {
		productTwo.style.display = 'none';

		price =
			39.99 * numberItemOne +
			29.99 * numberItemTwo +
			29.99 * numberItemThree +
			120 * numberItemFour +
			5 * numberItemFive +
			100 * numberItemSix;
		price = price.toFixed(2);
		priceDisplay.innerHTML = `${price}`;
	} else {
		return;
	}
});

removeThree.addEventListener('click', function () {
	if (numberItemThree >= 1) {
		numberItems -= 1;
		numberItemThree -= 1;

		cartItems.innerHTML = `${numberItems}`;
		supremoNutty.innerHTML = `Supremo Nutty x${numberItemThree}`;

		price =
			39.99 * numberItemOne +
			29.99 * numberItemTwo +
			29.99 * numberItemThree +
			120 * numberItemFour +
			5 * numberItemFive +
			100 * numberItemSix;
		price = price.toFixed(2);
		priceDisplay.innerHTML = `${price}`;
	}

	if (numberItemThree === 0) {
		productThree.style.display = 'none';

		price =
			39.99 * numberItemOne +
			29.99 * numberItemTwo +
			29.99 * numberItemThree +
			120 * numberItemFour +
			5 * numberItemFive +
			100 * numberItemSix;
		price = price.toFixed(2);
		priceDisplay.innerHTML = `${price}`;
	} else {
		return;
	}
});

removeFour.addEventListener('click', function () {
	if (numberItemFour >= 1) {
		numberItems -= 1;
		numberItemFour -= 1;

		cartItems.innerHTML = `${numberItems}`;
		coffeeSet.innerHTML = `Coffee Set x${numberItemFour}`;

		price =
			39.99 * numberItemOne +
			29.99 * numberItemTwo +
			29.99 * numberItemThree +
			120 * numberItemFour +
			5 * numberItemFive +
			100 * numberItemSix;
		price = price.toFixed(2);
		priceDisplay.innerHTML = `${price}`;
	}

	if (numberItemFour === 0) {
		productFour.style.display = 'none';

		price =
			39.99 * numberItemOne +
			29.99 * numberItemTwo +
			29.99 * numberItemThree +
			120 * numberItemFour +
			5 * numberItemFive +
			100 * numberItemSix;
		price = price.toFixed(2);
		priceDisplay.innerHTML = `${price}`;
	} else {
		return;
	}
});

removeFive.addEventListener('click', function () {
	if (numberItemFive >= 1) {
		numberItems -= 1;
		numberItemFive -= 1;

		cartItems.innerHTML = `${numberItems}`;
		coffeeMug.innerHTML = `Coffee Mug x${numberItemFive}`;

		price =
			39.99 * numberItemOne +
			29.99 * numberItemTwo +
			29.99 * numberItemThree +
			120 * numberItemFour +
			5 * numberItemFive +
			100 * numberItemSix;
		price = price.toFixed(2);
		priceDisplay.innerHTML = `${price}`;
	}

	if (numberItemFive === 0) {
		productFive.style.display = 'none';

		price =
			39.99 * numberItemOne +
			29.99 * numberItemTwo +
			29.99 * numberItemThree +
			120 * numberItemFour +
			5 * numberItemFive +
			100 * numberItemSix;
		price = price.toFixed(2);
		priceDisplay.innerHTML = `${price}`;
	} else {
		return;
	}
});

removeSix.addEventListener('click', function () {
	if (numberItemSix >= 1) {
		numberItems -= 1;
		numberItemSix -= 1;

		cartItems.innerHTML = `${numberItems}`;
		coffeeLights.innerHTML = `Coffee Lights x${numberItemSix}`;

		price =
			39.99 * numberItemOne +
			29.99 * numberItemTwo +
			29.99 * numberItemThree +
			120 * numberItemFour +
			5 * numberItemFive +
			100 * numberItemSix;
		price = price.toFixed(2);
		priceDisplay.innerHTML = `${price}`;
	}

	if (numberItemSix === 0) {
		productSix.style.display = 'none';

		price =
			39.99 * numberItemOne +
			29.99 * numberItemTwo +
			29.99 * numberItemThree +
			120 * numberItemFour +
			5 * numberItemFive +
			100 * numberItemSix;
		price = price.toFixed(2);
		priceDisplay.innerHTML = `${price}`;
	} else {
		return;
	}
});
