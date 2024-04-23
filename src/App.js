import { BrowserRouter, Routes, Route } from "react-router-dom";
import MoviePage from "./pages/MoviePage";
import About from "./pages/about";
import Home from "./pages/home";
import Faq from "./pages/faq";
import Contact from "./pages/contact";
import LoginForm from "./pages/login";

export default function App(){
    return(
        <div>
           
            <BrowserRouter>
        
            <Routes>
                <Route index element={<LoginForm/>} />
                <Route path="/MoviePage" element={<MoviePage/>} />
                <Route path="/about" element={<About/>}/>
                <Route path="/faq" element={<Faq/>}/>                              
                <Route path="/home" element={<Home/>}/>                              
                <Route path="/contact" element={<Contact/>}/>                              
                <Route path="/login" element={<LoginForm/>}/>  
            </Routes>
            </BrowserRouter>
        </div>
    )
}