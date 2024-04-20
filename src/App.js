import { BrowserRouter, Routes, Route } from "react-router-dom";
import MoviePage from "./pages/MoviePage";
import About from "./pages/about";
import Home from "./pages/home";
import Faq from "./pages/faq";
import Contact from "./pages/contact";

export default function App(){
    return(
        <div>
           
            <BrowserRouter>
        
            <Routes>
                <Route index element={<Home/>} />
                <Route path="/MoviePage" element={<MoviePage/>} />
                <Route path="/about" element={<About/>}/>
                <Route path="/faq" element={<Faq/>}/>                              
                <Route path="/home" element={<Home/>}/>                              
                <Route path="/contact" element={<Contact/>}/>                              
                
            </Routes>
            </BrowserRouter>
        </div>
    )
}