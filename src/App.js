import './index.css';
import Nav from './components/Nav'
import Footer from './components/Footer';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Books from './pages/Books';
import { books } from "./data";
import BookInfo from './pages/BookInfo';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <Router>
      <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/books" render={() => <Books books={books} />} />
            <Route path="/books/1" render={() => <BookInfo books={books} />} />
          </Switch>
          <Footer />
      </div>
    </Router>
  );
}

//TIME: 1:19:53

export default App;
