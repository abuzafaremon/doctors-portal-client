import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import About from './Pages/About/About';
import AppointmentPage from './Pages/AppointmentPage/AppointmentPage';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointments from './Pages/Dashboard/MyAppointments';
import MyHistory from './Pages/Dashboard/MyHistory';
import MyReviews from './Pages/Dashboard/MyReviews';
import Users from './Pages/Dashboard/Users';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import NotFound from './Pages/NotFound/NotFound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RequireAdmin from './Pages/Login/RequireAuth/RequireAdmin';
import AddDoctor from './Pages/Dashboard/AddDoctor';
import ManageDoctors from './Pages/Dashboard/ManageDoctors';
import MyProfile from './Pages/Dashboard/MyProfile';
import Payment from './Pages/Dashboard/Payment';

function App() {
  return (
    <div className="App max-w-7xl mx-auto">
      <Header />
      <div style={{ height: '64px' }}></div>
      <Routes>
        <Route path='/' element={
          <RequireAuth>
            <Home />
          </RequireAuth>
        }></Route>

        <Route path='/home' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>

        <Route path='/appointment' element={
          <RequireAuth>
            <AppointmentPage />
          </RequireAuth>
        }></Route>

        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }>
          <Route path='profile' element={<MyProfile />}></Route>
          <Route path='appointments' element={<MyAppointments />}></Route>
          <Route path='reviews' element={<MyReviews />}></Route>
          <Route path='history' element={<MyHistory />}></Route>
          <Route path='payment/:id' element={<Payment />}></Route>
          <Route path='users' element={
            <RequireAdmin>
              <Users />
            </RequireAdmin>
          }></Route>
          <Route path='addDoctor' element={
            <RequireAdmin>
              <AddDoctor />
            </RequireAdmin>
          }></Route>
          <Route path='manageDoctors' element={
            <RequireAdmin>
              <ManageDoctors />
            </RequireAdmin>
          }></Route>
        </Route>

        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
