import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Todo from './components/Todo/Todo';
import Completed from './components/Completed/Completed';
import Calendar from './components/Calendar/Calendar';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Todo></Todo> }></Route>
        <Route path='/completed' element={<Completed></Completed>}></Route>
        <Route path='/calendar' element={<Calendar></Calendar>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
