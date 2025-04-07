import logo from './logo.svg';
import './App.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Todo from './pages/Todo';

function App() {
  return (
  <BrowserRouter>
<Routes>
<Route path='/' element={<Todo/>}></Route>

</Routes>
  </BrowserRouter>
  );
}

export default App;
