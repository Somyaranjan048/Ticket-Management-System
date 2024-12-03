import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../src/components/auths/Login';
//import Tree from './componenets/tree';
import Dashbord from './Pages/DashBord'

function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Login/>} />
      {/*<Route path="/orgchart" element={<Tree/>} /> */}
      <Route path="/admin" element={<Dashbord/>} />
     </Routes>
    </BrowserRouter>
  );
}

export default App;
