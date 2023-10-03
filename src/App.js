  import './App.css';
  // import Test from './test';
  import { render } from 'react-dom';
  import Context from './Context';
  import { useContext } from 'react';
  import { FeedPage } from './components/Feed';
  import { HomePage } from "./components/Home_Page";

  
  import {AuthForm} from './components/Auth_form';
  import {Product} from "./components/product";
  import {ProductCards} from "./components/Product_cards";

  import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


  // functional components
 // JSX
  function App() {
    const { firstName, lastName, isAuth } = useContext(Context);

    return (
      <>
           {/* <h1>{firstName} {lastName} is {isAuth?"LoggedIn":"Not LoggedIn"}</h1> */}

          <Router>
            <ul>
                <li>
                  <Link to="/">To Home</Link>
                </li>
                <li>
                  <Link to="/Feed">To Feed</Link>
                </li>
                <li>
                  <Link to="/Auth_form">To AuthForm</Link>
                </li>
            </ul>

             <Routes>
                 <Route exact path="/" element={<HomePage/>} />
                 <Route path="/Feed" element={<FeedPage/>} />
                 <Route path="/Auth_form" element={<AuthForm />}/>
                 <Route path="/product" element={<Product/>}/>
                 <Route path="/product/Product_cards" element={<ProductCards/>}/>
              </Routes>
            </Router>


      </>
      );
    }

  export default App;

