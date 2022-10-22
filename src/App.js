import Home from "./components/Home/Home";
import {Routes,Route, Navigate} from "react-router-dom";
import Header from "./components/Header/Header";
function App() {

    return (
        <>
        <Header/>
        <Routes>
            <Route path="/watch" element={<Home />} />
            <Route path="home" element={<Navigate to={'/watch'} />} />
            <Route path="watch" element={<Navigate to={'/watch'} />} />
            <Route path="/" element={<Navigate to={'/watch'} />} />
            <Route path="" element={<Navigate to={'/watch'} />} />
        </Routes>
        </>
  );
}
export default App;
