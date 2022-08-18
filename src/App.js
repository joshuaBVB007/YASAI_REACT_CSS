import './App.css';
import { Header } from './header/header.js';
import { Items } from './items/items.js';
import { About } from './about/about.js';
import { Location } from './location/location.js'; 
import { Contact } from './contact/contact.js';
import { Routes, Route } from "react-router-dom";
import { NotFound } from "./not_found/not_found.js"

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Items />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/location" element={<Location />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
