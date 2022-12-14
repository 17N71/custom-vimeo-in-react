import {Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CurrentVideoPage from "./components/CurrentVideoPage/CurrentVideoPage";

function App() {
    return (
        <>
        <Header/>
        <Routes>
            <Route path="/watch" element={<Home />} />
            <Route path={`/watch/:img`} element={<CurrentVideoPage />} />
            <Route path="home" element={<Navigate to={'/watch'} />} />
            <Route path="watch" element={<Navigate to={'/watch'} />} />
            <Route path="/" element={<Navigate to={'/watch'} />} />
            <Route path="" element={<Navigate to={'/watch'} />} />
        </Routes>
         <Footer />
        </>
  );
}
export default App;
