import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import {
  HashRouter,
  Redirect,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer.tsx";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login.tsx";
import { Component } from "react";
import { connect, Provider } from "react-redux";
import { compose } from "redux";
import { initializeApp } from "./redux/app-reducer.ts";
import Preloader from "./components/common/preloader/Preloader";
import store from "./redux/redux-store.ts";
import React from "react";
import ProfileContainer from "./components/Profile/ProfileContainer";

const DialogsContainer = React.lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);

class App extends Component {
  // catchAllUnhandledErrors = (promiseRejectionEvent) => {
  //   alert("some error");
  // };

  componentDidMount() {
    this.props.initializeApp();
    // window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }

  // componentWillUnmount() {
  //   window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors)
  // }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          {/*<Switch>*/}
            <Route
              path="/dialogs"
              render={() => {
                return (
                  <React.Suspense fallback={<div>Loading...</div>}>
                    <DialogsContainer />
                  </React.Suspense>
                );
              }}
            />
            <Route
              path="/profile/:userId?"
              render={() => <ProfileContainer />}
            />
            <Route path="/" render={() => <Redirect to={"/profile"} />} />
            <Route path="/news" render={() => <News />} />
            <Route path="/music" render={() => <Music />} />
            <Route path="/settings" render={() => <Settings />} />
            <Route path="/users" render={() => <UsersContainer />} />
            <Route path="/login" render={() => <LoginPage />} />
            {/*<Route path="*" render={() => <div>404 not found</div>} />*/}
          {/*</Switch>*/}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);

const SamuraiJSApp = (props) => {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </HashRouter>
  );
};
export default SamuraiJSApp;
