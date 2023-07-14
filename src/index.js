import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    img: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    img: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    img: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    img: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    img: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    img: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <h1>hello react</h1>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Pizza(props) {
  return (
      <li className={`pizza ${props.pizzaObj.soldOut ? "sold-out":""}`}>
      <img src={props.pizzaObj.img} />
    <div className>
    
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.soldOut ? "Sold-Out" : props.pizzaObj.price}</span>
    </div>
      </li>
  );
}
const Header = () => {
  return (
    <div className="header">
      <h1>Fast React Pizza</h1>;
    </div>
  );
};
const Menu = () => {
  return (
    <div className="menu">
      <h2>Menu</h2>
      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza pizzaObj={pizza} />
        ))}
      </ul>

      {/* <Pizza
        name="foccacia"
        price={12}
        img="pizzas/focaccia.jpg"
        ingredients="Bread with italian olive oil and rosemary"
      /> */}
    </div>
  );
};

const Order = ({closeHour}) =>{
  return <div className="order">
  <p>we're open till {closeHour}:00 .come visit or order online</p>
  <button className="btn">Order</button>
</div>
}

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 21;

  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(hour, isOpen);
  console.log(hour, isOpen);
  // if (isOpen) {
  //   alert("Open");
  // } else alert("close");

  return (
    <div className="footer">
      <footer>
        {isOpen ? (
         <Order closeHour={closeHour} />
        ) : (
          <p>
            we're happy to welcome you between {openHour}:00 and {closeHour}:00
          </p>
        )}
      </footer>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
