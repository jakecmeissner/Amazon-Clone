import './App.css';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './components/container/Home';
import Signup from './components/container/Signup';
import Signin from './components/container/Signin';
import headphone from './assets/img/headphone.png'
import Read from './components/container/Read';
import { Route, Routes } from 'react-router-dom';
import Cart from './components/container/Cart';
import Order from './components/container/Order';
import Thankyou from './components/container/Thankyou';
// import Signup from './components/Signup';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Signin' element={<Signin />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/Order' element={<Order />} />
        <Route path='/Thankyou' element={<Thankyou />} />
        {/* <Read /> */}
      </Routes> 
      <Footer />

    </div>
  );
}

export default App;
