import Main from './pages/main'
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Definite from './pages/definite'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/posts/:id' element={<Definite />}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
