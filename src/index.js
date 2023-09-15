//import react and reactdom
import React from 'react';
// import ReactDOM from 'react-dom'; // FOR REACT 17
import ReactDOM from 'react-dom/client';
import './index.css';

const pizzaData = [
	{
		name: 'Focaccia',
		ingredients: 'Bread with italian olive oil and rosemary',
		price: 6,
		photoName: 'pizzas/focaccia.jpg',
		soldOut: false,
	},
	{
		name: 'Pizza Margherita',
		ingredients: 'Tomato and mozarella',
		price: 10,
		photoName: 'pizzas/margherita.jpg',
		soldOut: false,
	},
	{
		name: 'Pizza Spinaci',
		ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
		price: 12,
		photoName: 'pizzas/spinaci.jpg',
		soldOut: false,
	},
	{
		name: 'Pizza Funghi',
		ingredients: 'Tomato, mozarella, mushrooms, and onion',
		price: 12,
		photoName: 'pizzas/funghi.jpg',
		soldOut: false,
	},
	{
		name: 'Pizza Salamino',
		ingredients: 'Tomato, mozarella, and pepperoni',
		price: 15,
		photoName: 'pizzas/salamino.jpg',
		soldOut: true,
	},
	{
		name: 'Pizza Prosciutto',
		ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
		price: 18,
		photoName: 'pizzas/prosciutto.jpg',
		soldOut: false,
	},
];

// create your app component, start with UPPERCASE
function App() {
	return (
		<div className={'container'}>
			<Header />
			<Menu />
			<Footer />
		</div>
	);
}

const Header = () => {
	return (
		<header className={'header'}>
			<h1>Fast React Pizza Co.</h1>
		</header>
	);
};

const Menu = () => {
	const pizzas = pizzaData;
	// const pizzas = []; This is an example of an empty array coming through
	const numPizzas = pizzas.length;

	return (
		<main className={'menu'}>
			<h2>Our Menu</h2>
			{/* To avoid an empty array or a "0" from showing up as a falsy number, turn your condition into a boolean. */}
			{numPizzas > 0 ? (
				<>
					<p>
						Authentic Italian Cuisine. 6 creative dishes to choose from. All from our stone over, all organic, all
						delicious.
					</p>

					<ul className='pizzas'>
						{pizzas.map((pizza, i) => (
							<Pizza key={i} pizzaObject={pizza} />
						))}
						{/* Can also write each prop this way instead of consolidating through a pizzaObject:
        {pizzas.map((pizza, i) => (
          <Pizza
            key={i}
            name={pizza.name}
            ingredients={pizza.ingredients}
            photoName={pizza.photoName}
            price={pizza.price}
          />
        )} */}
					</ul>
				</>
			) : (
				<p>We're still working on our menu. Please come back later.</p>
			)}
		</main>
	);
};

const Pizza = ({ pizzaObject }) => {
	const { photoName, name, ingredients, price, soldOut } = pizzaObject;

	return (
		<li className={`pizza ${soldOut && 'sold-out'}`}>
			<img src={photoName} alt={name} />
			<div>
				<h3>{name}</h3>
				<p>{ingredients}</p>
				<span>{soldOut ? 'SOLD OUT' : price}</span>
			</div>
		</li>
	);
};

const Order = ({ closeHour, openHour }) => {
	return (
		<div className='order'>
			<p>
				We're open from {openHour}:00 to {closeHour}:00. Come visit us or order online.
			</p>
			<button className='btn'>Order</button>
		</div>
	);
};

const Footer = () => {
	const hour = new Date().getHours();
	const openHour = 12;
	const closeHour = 22;
	const isOpen = hour >= openHour && hour <= closeHour;

	// if (hour >= openHour && hour >= closeHour) alert("We're currently open !");
	// else alert("Sorry, we're closed");

	return (
		<footer className={'footer'}>
			{isOpen ? (
				<Order closeHour={closeHour} openHour={openHour} />
			) : (
				<p>
					We're happy to welcome you between {openHour}:00 and {closeHour}:00
				</p>
			)}
		</footer>
	);
};

// REACT 18 approach...
// Specifiying an html element to be the element that your app will be, like #root
const root = ReactDOM.createRoot(document.getElementById('root'));
// render the app to the DOM
root.render(
	// A react component that renders our components twice to pick up bugs and will check if we are using outdated parts of React API.
	// Useful to do this DURING DEVELOPMENT
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);

// REACT 17 approach...
// React.render(<App />), document.getElementById('root');
