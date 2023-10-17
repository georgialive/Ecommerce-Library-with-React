import './index.css';
import Nav from './components/Nav'
import Footer from './components/Footer';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Books from './pages/Books';
import { books } from "./data";
import BookInfo from './pages/BookInfo';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Cart from './pages/Cart';
import { useEffect, useState } from 'react';

function App() {
   const [cart, setCart] = useState([]);

   function addToCart(book) {
    setCart([...cart, book])
   }

   useEffect(() => {
    console.log(cart);
   }, [cart])

  return (
    <Router>
      <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/books" exact render={() => <Books books={books} />} />
            <Route path="/books/:id" render={() => <BookInfo books={books} addToCart={addToCart}/>} />
            <Route path="/cart" render={() => <Cart books={books} />} />
          </Switch>
          <Footer />
      </div>
    </Router>
  );
}

//TIME: 1:38:24

export default App;
