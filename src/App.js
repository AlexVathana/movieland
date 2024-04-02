import { BrowserRouter, Routes, Route } from "react-router-dom";
import MoviePage from "./pages/MoviePage";
import About from "./pages/about";
import Home from "./pages/home";

export default function App(){
    return(
        <div>
           
            <BrowserRouter>
        
            <Routes>
                <Route index element={<Home/>} />
                <Route path="/MoviePage" element={<MoviePage/>} />
                <Route path="/about" element={<About/>}/>              
          
            </Routes>
            </BrowserRouter>
        </div>
    )
}