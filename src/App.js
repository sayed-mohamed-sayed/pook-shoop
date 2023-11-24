// import "./App.css";
import "./index.css";
import Loginin from "./register/login"
import Signin from "./register/signin";
import {BrowserRouter,Route ,Redirect, Routes } from "react-router-dom"
import Header from "./header/Header";
import Show from "./show/Show";
import {data} from "./data/data"
import Cart from "./buycart/Cart";
import Fotter from "./fotter/fotter";
import Showmore from "./showmore/showmore";
import Contact from "./contact/contact";
import Author from "./author/author";
import LOGIN from "./register/login";
import Pagation from "./pagation/pagation";

function App() {
  return (
    <div>


<BrowserRouter>
      <Header/>
     
    
     
<Routes>
<Route path="/" element={<Show/>}/>
<Route path="/cart" element={<Cart/>}/>
<Route path="/showmore" element={<Showmore data={data}/>}/>
<Route path="/contact" element={<Contact/>}/>
<Route path="/author" element={ <Pagation data={data}/>}/>
<Route path="/signin" element={<Signin/>}/>
<Route path="/login" element={<LOGIN/>}/>
</Routes>

<Fotter/>
</BrowserRouter>
    </div>
  );
}

export default App;
