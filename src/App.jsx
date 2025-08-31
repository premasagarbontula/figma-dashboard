import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainContent from "./pages/Shop";
import Cart from "./pages/Cart";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#fbf9f6]">
        <Navbar />

        <div className="flex-1">
          <Routes>
            {/* Default route */}
            <Route path="/" element={<MainContent />} />
            <Route path="/shop" element={<MainContent />} />
            <Route path="/cart" element={<Cart />} />

            <Route
              path="/special"
              element={<h1 className="text-2xl p-6">Special Page</h1>}
            />
            <Route
              path="/explore"
              element={<h1 className="text-2xl p-6">Explore Page</h1>}
            />
            <Route
              path="/about"
              element={<h1 className="text-2xl p-6">About Us</h1>}
            />
            <Route
              path="/rewards"
              element={<h1 className="text-2xl p-6">Rewards Page</h1>}
            />
            <Route
              path="/contact"
              element={<h1 className="text-2xl p-6">Contact Page</h1>}
            />
            <Route
              path="/account"
              element={<h1 className="text-2xl p-6">User Account</h1>}
            />
            <Route
              path="/search"
              element={<h1 className="text-2xl p-6">Search Page</h1>}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
