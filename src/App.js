import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Home from './Component/Home';
import Create from './Component/Create';
import Update from './Component/Update';

function App() {
  return (
    <>

        <Router>
              <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="/create" element={<Create/>} /> 
                <Route path="/update/:id" element={<Update/>} />
              </Routes>
        </Router>

    </>
  );
}

export default App;
