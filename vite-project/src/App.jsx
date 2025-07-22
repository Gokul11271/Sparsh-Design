import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Herosection.jsx";
import "./App.css";
import About from "./components/About Us.jsx";
import Collection from "./collection.jsx";
import Gallery from "./components/Gallery.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import AdminDashboard from "./components/AdminDashboard.jsx";
import AdminLogin from "./components/AdminPage.jsx";
import TrackVisitor from "./components/TrackVisitor";
function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <TrackVisitor />
              <Navbar />
              <Hero />
              <About />
              <Collection />
              <Gallery />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
