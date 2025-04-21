import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import InputRegister from './components/InputRegister';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path='/register' element={<InputRegister/>}/>
      <Route/>
    </Routes>
  );
}

export default App;
