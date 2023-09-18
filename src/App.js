import ReactDOM from 'react-dom/client';
import DMV from './DMV';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
// import your route components too

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<DMV />}/>
    </Routes>
  </BrowserRouter>
);
