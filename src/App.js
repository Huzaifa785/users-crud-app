import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Dashboard from './components/Dashboard';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Users from './components/Users';
import CreateUser from './components/CreateUser';
import EditUser from './components/EditUser';
import { UserProvider } from './UserContext';

function App() {
  return (
    <>
      <Router>
        <div id="wrapper">
          <Sidebar />
          <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
              <Topbar />
              <div class="container-fluid">
                <Switch>
                  <Route path="/" component={Dashboard} exact={true} />
                  <UserProvider>
                    <Route path="/users" component={Users} exact={true} />
                    <Route path="/create-user" component={CreateUser} exact={true} />
                    <Route path="/edit-user/:id" component={EditUser} exact={true} />
                  </UserProvider>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
