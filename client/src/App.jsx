import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import CreateUser from "./CreateUser.jsx";
import Users from "./Users.jsx";
import UpdateUser from "./UpdateUser.jsx";

function App() {

  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Users />}></Route>
                <Route path='/create' element={<CreateUser />}></Route>
                <Route path='/update/:id' element={<UpdateUser />}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App;
