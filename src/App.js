import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Todo from './components/Todo/Todo';
import Completed from './components/Completed/Completed';
import Calandar from './components/Calandar/Calandar';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Todo></Todo> }></Route>
        <Route path='/completed' element={<Completed></Completed>}></Route>
        <Route path='/calandar' element={<Calandar></Calandar>}></Route>
      </Routes>
    </div>
  );
}

export default App;
