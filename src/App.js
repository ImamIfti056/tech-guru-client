import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import AllOrders from './Pages/AllOrders/AllOrders';
import DashBoard from './Pages/Dashboard/Dashboard';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import MyOrders from './Pages/MyOrders/MyOrders';
import NotFound from './Pages/NotFound/NotFound';
import Pay from './Pages/Pay/Pay';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Products from './Pages/Products/Products';
import Purchase from './Pages/Purchase/Purchase';
import Register from './Pages/Register/Register';
import Review from './Pages/Review/Review';
import Footer from './Pages/Shared/Footer/Footer';
import Navbar from './Pages/Shared/Navbar/Navbar';

function App() {
  return (
    <div>
      <AuthProvider>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <PrivateRoute path='/dashboard'>
            <DashBoard></DashBoard>
          </PrivateRoute>
          <PrivateRoute path='/allorders'>
            <AllOrders></AllOrders>
          </PrivateRoute>
          <PrivateRoute path='/pay'>
            <Pay></Pay>
          </PrivateRoute>
          <PrivateRoute path='/review'>
            <Review></Review>
          </PrivateRoute>
          <PrivateRoute path='/myorders'>
            <MyOrders></MyOrders>
          </PrivateRoute>
          <Route path='/products'>
            <Products></Products>
          </Route>
          <PrivateRoute path='/purchase/:id'>
            <Purchase></Purchase>
          </PrivateRoute>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/register'>
            <Register></Register>
          </Route>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
