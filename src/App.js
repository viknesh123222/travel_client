import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import Register from "./pages/Register/register";
import Profile from "./components/profile/Profile";
import Listcity1 from "./pages/listcity/Listcity1";
import Thankyou from "./pages/thankyou/Thankyou";
import Listcity2 from "./pages/listcity/Listcity2 ";
import Listcity3 from "./pages/listcity/Listcity3";
import Booking from "./components/Bookings/Booking";
import Timepicker from "./pages/timepicker/Timepicker";
import Forgot from "./components/forgot/Forgot";
import Forgotid from "./components/forgotid/Forgotid";
import Gpay from "./components/paytm/Gpay"
import EditUser from "./components/Edituser/EditUser";
import Lodge from "./components/Lodge Booking/Lodgetable"
import Mahal from "./components/Mahaltable/MahalTable"
import Jcb from "./components/JCB/Jcb"
import ReservedDate from "./components/Dateview/Date"

import {  userInputs } from "./formSource";


function App() {  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/login" element={<Login/>}/>

        <Route path="/profile" element={<Profile/>} />
        <Route path="/edituser" element={<EditUser/>} />
        <Route path="hotels/travel" element={<Listcity1/>}/>
      <Route path="hotels/mahal" element={<Listcity2/>}/>
      <Route path="hotels/lodge" element={<Listcity3/>}/>
      <Route path="/forgot" element={<Forgot />} />
      <Route path="/forgotid" element={<Forgotid/>}/>
      <Route path="/Thankyou" element={<Thankyou/>}/>
      <Route path="/Timepicker" element={<Timepicker/>}/>
      <Route path="/Lodgetable" element={<Lodge/>}/>
      <Route path="/Jcb" element={<Jcb/>}/>

             < Route path="/MahalTable" element={<Mahal/>}/>
  <Route path="/Date" element={
  <ReservedDate/>}/>

      <Route path="/Gpay" element={<Gpay/>}/>

      <Route path="/hotels/room/book/:roomid" element={<Booking/>} />
        <Route path="/register" element={<Register inputs={userInputs} title="Add New User" />}/>


      </Routes>
    </BrowserRouter>
  );
}

export default App;
