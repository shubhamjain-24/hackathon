import Section2 from "./Landing_page/Section2/Section2";
import Section3 from "./Landing_page/Section3/Section3";
import Section5 from "./Landing_page/Section5/Section5";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./Components/Navbar";
import Section4 from "./Landing_page/Section4/Section4";
import Footer from "./Landing_page/Footer/Footer";
import PandC from "./PandC/PandC";
import Landing_page from "./Landing_page/Landing_page";
import AboutUs from "./AboutUs/About_Us";
import ContactUs from "./ContactUs/ContactUs";
import Blogs from "./Blogs/Blogs";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Blog from "./Blog/Blog";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Landing_page/>}/>
        <Route path="/aboutUs" element={<AboutUs/>}/>
        <Route path="/PandC" element={<PandC/> }/>
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="/contactUs" element={<ContactUs/>}/>
      </Routes>
    </Router>
    {/* <Blog/> */}
   {/* <Landing_page/> */}
    {/* <PandC/> */}
    {/* <AboutUs/> */}
    {/* <ContactUs/> */}
    {/* <Blogs/> */}
    </>
  );
}

export default App;
