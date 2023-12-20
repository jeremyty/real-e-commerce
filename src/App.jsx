import { Provider } from "react-redux";
import Home from "./pages/Home";
import { store } from "./store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import { AuthProvider } from "./components/AuthProvider";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import SuccessPage from "./pages/SuccessPage";
import PaymentCancel from "./pages/PaymentCancel";

function App() {
  return (
    <AuthProvider>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/pl" element={<ProductList />} />
            <Route path="/pd" element={<Product />} />
            <Route path="/success" element={<SuccessPage />} />
            <Route path="/cancel" element={<PaymentCancel />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </AuthProvider>
  );
}

export default App;
