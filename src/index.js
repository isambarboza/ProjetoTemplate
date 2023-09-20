import React from 'react';
import ReactDOM from 'react-dom/client';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from './pages/Login';
import Dashboard from './Dashboard';
import CadastroUsuario from "./pages/CadastroUsuario";
import ErroPage from './pages/ErroPage';
import App from './pages/App';
import CadastroProduto from './pages/CadastroProduto';
import "./App.css";

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1565c0',
      light: '#40c4ff',
      dark: '#0d47a1',
      contrastText: '#e0e0e0',
    },
    secondary: {
      main: '#78909c',
      light: '#ff0700',
      dark: '#ff1000',
    },
    text: {
      primary: '#263238',
      secondary: '#9e9e9e',
      hint: '#ffb74d',
      disabled: '#bdbdbd',
    },
    error: {
      main: '#ff3c00',
      contrastText: '#bdbdbd',
    },
    warning: {
      main: '#ffc80d',
    },
    info: {
      main: '#0073b3',
    },
    success: {
      main: '#0ebd3a',
    },
    divider: '#253540',
    background: {
      default: '#bdbdbd',
      paper: '##bdbdbd',
    },
  },
  typography: {
    fontFamily: 'Oswald',
    fontWeightLight: 700,
    fontWeightRegular: 700,
    fontWeightMedium: 700,
    button: {
      fontWeight: 1000,
      fontSize: '1rem',
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErroPage />
  },
  {
    path: "/cadastro",
    element: <CadastroUsuario />,
    errorElement: <ErroPage />
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children:[
      {
        path: "produtos",
        element: <App />
      },
      {
        path: "cadastro/produto",
        element: <CadastroProduto />
      },
      {
        path: "editar/produto/:id",
        element: <CadastroProduto />
      },
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
  </ThemeProvider>
);
