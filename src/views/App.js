import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Navigate, Route, Routes } from 'react-router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/App.css';
import Gallery from './Gallery';
import HomePage from './HomePage';
import NotFound from './NotFound';
import OurPeople from './OurPeople';
import Signin from './Signin';
import Signup from './Signup';

function App() {
  const theme = createTheme({
    colors: {
      primary: '#018F55',
      grey: '#F5F5F5',
    },
    palette: {
      primary: {
        main: '#018F55',
      },
      text: {
        primary: '#fffff',
      },
    },
    typography: {
      fontFamily: 'Open Sans',
      button: {
        fontVariant: 'normal',
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="home" element={<HomePage />}></Route>
          <Route
            path=""
            element={<Navigate to="/home" replace={true} />}
          ></Route>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
          <Route path="our-people" element={<OurPeople />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <ToastContainer />
      </ThemeProvider>
    </>
  );
}

export default App;

