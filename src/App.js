import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import DashBoard from './components/DashBoard/DashBoard';
import FinalRoutes from './Routes/Routes';
import { AuthProvider } from './auth-context';
import './App.css';

class App extends React.Component {

  render() {

    return (
      <div className="App">
        <AuthProvider>
          <BrowserRouter>
            <DashBoard />
            <FinalRoutes />
          </BrowserRouter>
        </AuthProvider>
      </div>
    );
  }
};


export default (App);
