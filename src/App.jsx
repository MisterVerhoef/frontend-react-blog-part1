import './App.css'

import {Routes, Route} from "react-router-dom";
import Homepage from "./pages/homepage/Homepage.jsx";
import BlogpostSummaryPage from "./pages/blogpostSummaryPage/BlogpostSummaryPage.jsx";
import BlogPost from "./pages/blogpost/BlogPost.jsx";
import ErrorPage from "./pages/errorPage/ErrorPage.jsx";
import NavBar from "./components/navbar/NavBar.jsx";
import posts from "./constants/data.json";
import FooterBar from "./components/footerBar/FooterBar.jsx";

function App() {
    console.log(posts)

    return (
        <>
           <NavBar/>
            <Routes>
                <Route path="/" element={<Homepage/>} />
                <Route path="/posts" element={<BlogpostSummaryPage/>} />
                <Route path="/posts/new" element={<BlogPost/>} />
                <Route path="/posts/:id" element={<BlogPost/>} />
                <Route path="*" element={<ErrorPage/>} />
            </Routes>
            <FooterBar/>
        </>
    )
}

export default App
