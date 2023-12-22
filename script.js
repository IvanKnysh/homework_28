const kitchenProducts = [
	{
		type: "grater",
		price: 10,
	},
	{
		type: "pastry-bag",
		price: 25,
	},
	{
		type: "scale",
		price: 5,
	},
	{
		type: "whisk",
		price: 15,
	},
];

const devicesProducts = [
	{
		type: "desktop",
		price: [100, 1000],
	},
	{
		type: "laptop",
		price: [50, 1500],
	},
	{
		type: "smartphone",
		price: [80, 2000],
	},
	{
		type: "tablet",
		price: [20, 1300],
	},
];

const cosmeticsProducts = [
	{
		type: "blush",
		price: 100,
	},
	{
		type: "eyeshadow",
		price: 50,
	},
	{
		type: "lipstick",
		price: 80,
	},
	{
		type: "nail-polish",
		price: 200,
	},
	{
		type: "perfume",
		price: 300,
	},
];

const Kitchen = { category: "kitchen" };
const Devices = { category: "devices" };
const Cosmetics = { category: "cosmetics" };

kitchenProducts.forEach((product) => Object.setPrototypeOf(product, Kitchen));
devicesProducts.forEach((product) => Object.setPrototypeOf(product, Devices));
cosmeticsProducts.forEach((product) =>
	Object.setPrototypeOf(product, Cosmetics)
);

const renderProducts = (arr) => {
	const categoryName = arr[0].category;

	document.querySelector(".wrapper").insertAdjacentHTML(
		"beforeend",
		`<div class="category-item" id="${categoryName}">
			<h2>Category: ${categoryName}</h2>
			<div class="flx"></div>
		</div>`
	);

	arr.forEach((item) => {
		document.querySelector(`.wrapper #${categoryName} .flx`).insertAdjacentHTML(
			"beforeend",
			`<div class="product-item">
				<img src="./images/${categoryName}/${item.type}.svg" alt="${item.type}" />
				<div class="info">Name: <span>${item.type}</span></div>
				<div class="info">Price: <span>$${item.price}</span></div>
			</div>`
		);
	});
};

renderProducts(kitchenProducts);
renderProducts(devicesProducts);
renderProducts(cosmeticsProducts);
