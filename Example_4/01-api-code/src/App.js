import logo from './logo.svg';
import './App.css';
import SearchForm from './components/SearchForm';

import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Detail from './components/Detail';

function App() {
  return (
    <BrowserRouter>
        <header>
          <nav className="navbar">
            <div className="container">
              <h1 className='navbar-brand'>CHALLENGE 1</h1>
            </div>
          </nav>
          <section className='design' id='design'>
            <div className="container">
              <div className="title">
                <h2>Posts</h2>
              </div>
              <div className="design-title">
                <div className="title-container">
                  <SearchForm></SearchForm>
                  <Switch>
                    <Route exact path = "/:id">
                      <Detail></Detail>
                    </Route>
                  </Switch>
                </div>
              </div>

            </div>
          </section>
          {/* Footer Starts */}
          <footer>
            <div class="footer-content">
              <h3>Json Placeholder API</h3>
                <ul class="socials">
                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                    <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                    <li><a href="#"><i class="fa fa-youtube"></i></a></li>
                    <li><a href="#"><i class="fa fa-linkedin-square"></i></a></li>
                </ul>
              <div class="footer-bottom">
                  <p>copyright &copy;2022 Json Placeholder API. designed by <span>Saeng su Kwon</span> </p>
              </div>
            </div>
          </footer>
      {/* Footer Ends*/}
        </header>

    </BrowserRouter>
  );
}

export default App;
