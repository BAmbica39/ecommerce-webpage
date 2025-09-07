import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext"; // ✅ important
import Navbar from "./components/Navbar";

import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ItemsPage from "./pages/ItemsPage";
import CartPage from "./pages/CartPage";
import PaymentPage from "./pages/PaymentPage";

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <div style={{ padding: "20px" }}>
          <Routes>
            <Route path="/" element={<ItemsPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/payment" element={<PaymentPage />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;



// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import LoginPage from "./pages/LoginPage";
// import SignupPage from "./pages/SignupPage";
// import ItemsPage from "./pages/ItemsPage";
// import CartPage from "./pages/CartPage";
// import PaymentPage from "./pages/PaymentPage";

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <div style={{ padding: "20px" }}>
//         <Routes>
//           <Route path="/" element={<ItemsPage />} />
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/signup" element={<SignupPage />} />
//           <Route path="/cart" element={<CartPage />} />
//           <Route path="/payment" element={<PaymentPage />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
