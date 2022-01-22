import './App.css';
import Sidebar from './Components/Sidebar';
import Dashboard from './Components/Dashboard';
import AllStudents from './Components/AllStudents';
import AddStudents from './Components/AddStudents';
import EditStudent from './Components/EditStudent';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import React ,{ useState } from 'react';

//1. create context
export const stuContext = React.createContext();

function App() {

   const [stu, setStu] = useState([{
name:"Mark",
mobile:"9829389849",
email:"mark@yahoo.com",
cls:"BW98WE"
   },
   {name:"Jacob",
   mobile:"9874618798",
   email:"jacob@gmail.com",
   cls:"BW09WD"},

   {name:"Larry",
   mobile:"8765431349",
   email:"larry@mail.com",
   cls:"BW67WE"}
]);

  return (
    <BrowserRouter>
    {/* 2.context provider */}
<stuContext.Provider value={{stu,setStu}}>
    <div className="App" >
    <div> <Sidebar/></div>
    <div className='Content-div'>
    <Routes>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/all-students' element={<AllStudents/>}/>
      <Route path='/add-students' element={<AddStudents/>}/>
      <Route path='/edit-students/:id' element={<EditStudent/>}/>
      <Route path='/' element={<Dashboard/>}/>
    </Routes>
    </div>
    </div>
    </stuContext.Provider>
</BrowserRouter>
  );
}

export default App;
