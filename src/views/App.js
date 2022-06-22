import { Routes, Route } from 'react-router';
import '../styles/App.css';
import HomePage from './HomePage';
import NotFound from './NotFound';

function App() {
  return (
    <Routes>
      <Route path='' element={<HomePage />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}

export default App;
