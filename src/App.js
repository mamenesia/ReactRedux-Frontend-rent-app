import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./Publics/store"

import Login from "./pages/Login"
import Explore from "./pages/Explore"
import Register from "./pages/Register"
import Landing from "./pages/Landing"
import Detail from "./pages/Detail"
import History from "./pages/History"
import Logout from "./pages/Logout"
import NotFoundPage from "./pages/Notfound"

const App = () => (
  <div>
    <Router>
      <Provider store={store}>
        <div>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/login" component={Login} />
            <Route path="/explore" component={Explore} />
            <Route path="/history" component={History} />

            <Route path="/register" component={Register} />
            <Route path="/logout" component={Logout} />
            <Route exact path={"/book/:idBook"} component={Detail} />
            <Route patah="/404" component={NotFoundPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </Provider>
    </Router>
  </div>
)

export default App
