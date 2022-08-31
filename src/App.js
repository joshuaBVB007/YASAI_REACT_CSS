import './App.css';
import { Header } from './header/header.js';
import { Items } from './items/items.js';
import { About } from './about/about.js';
import { Location } from './location/location.js'; 
import { Contact } from './contact/contact.js';
import { Routes, Route } from "react-router-dom";
import { NotFound } from "./not_found/not_found.js";
import { Reservation } from "./reservation/reservation.js";
import { Shopping } from "./shopping_bag/shopping.js";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<About />} />

        {/* Header links */}
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Items />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/location" element={<Location />} />
        {/* Focus Products */}
        <Route path="/shopping" element={<Shopping />} />
        <Route path="/shopping/:lista" element={<Shopping />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
