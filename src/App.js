import React from 'react'
import Login from './interview task/Login'
import {Link,Routes,Route,useNavigate} from 'react-router-dom';
import Students from './interview task/Students';
import Navbars from './interview task/Navbars';

export default function App() {





  return (
    <div>
 <Navbars/>
<Routes>

  <Route path='/students' element={<Students/>}></Route>
  <Route path='/login' element={<Login/>}></Route>
</Routes>
    </div>
  )
}

