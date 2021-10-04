import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavHead from './componentdidmount/navbarCompanentHomePage/navHeadPage';
import AdminRoute from './componentdidmount/routing/adminRoute';
import AdminPanelScreen from './adminPanel/adminPanelScreen';
import { useSelector } from 'react-redux';
import { navDoNotShow } from './componentdidmount/redux/navRedux/action';
import HomePage from "./componentdidmount/headPage/HomePageScreen";


function App() {

  const navdonotshow = useSelector(state=>state.navbarallcantrol.navshow)

 
  return (
    <div className="App">
      <header className="App-header">
       

     
        <Router>
          {navdonotshow === "/admin" ? "" :  
              <Route 
              path="/" 
              component={HomePage} />   
          }
          <AdminRoute path="/admin"   component={AdminPanelScreen} />
        </Router>
      </header>
    </div>
  );
}

export default App;
