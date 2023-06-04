import AppLayout from "./components/appLayout/AppLayout";
import "./app.css";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";

function App() {
  const admin = JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user || "{}")?.currentUser?.isAdmin ;
  return (
    //important note: v6 version must be wraped into route otherwise routes error
    //for layout element like div, you need to use Outlet and need to be separated into components
    //https://stackoverflow.com/questions/71185633/react-router-v6-how-to-render-multiple-component-inside-and-outside-a-div-with
    <Router>
        <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<AppLayout admin={admin} />} >
        <Route exact path="/" element={<Home />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/user/:userId" element={<User />} />
        <Route path="/newUser" element={<NewUser />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/newProduct" element={<NewProduct />} />
        </Route>
        </Routes>
    </Router>
  );
}

export default App;
