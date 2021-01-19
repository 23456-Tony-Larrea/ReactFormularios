import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Donantes from './components/Donantes';
import Regitropersonas from './components/Registropersonas';
function App() {
  return (
    <Router>

        <Switch>
          <Route path="/registropersonas" exact>
            <Donantes/>
          </Route>
          <Route path="/registroequipo" exact>
            <Regitropersonas/>
          </Route>
          </Switch> 
    </Router>
  );
}

export default App;
