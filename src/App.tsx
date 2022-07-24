import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import {
    BrowserRouter,
    HashRouter,
    Redirect,
    Route,
    Switch,
    withRouter,
} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {Component} from "react";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/preloader/Preloader";
import store, {AppStateType} from "./redux/redux-store";
import * as React from "react";
import ProfileContainer from "./components/Profile/ProfileContainer";

const DialogsContainer = React.lazy(() =>
    import("./components/Dialogs/DialogsContainer" )
);

type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
    initializeApp: () => void
}

class App extends Component<MapPropsType & DispatchPropsType> {
    catchAllUnhandledErrors = (e: PromiseRejectionEvent) => {
        alert("some error");
    };

    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }

    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors)
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>;
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    {/*<Redirect>*/}
                    <Route
                        path="/dialogs"
                        render={() => {
                            return (
                                <React.Suspense fallback={<div>Loading...</div>}>
                                    <DialogsContainer/>
                                </React.Suspense>
                            );
                        }}
                    />
                    <Route
                        path="/profile/:userId?"
                        render={() => <ProfileContainer/>}
                    />
                    {/*<Route path="/" render={() => <Redirect to={"/profile"} />} />*/}
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                    <Route path="/users" render={() => <UsersContainer/>}/>
                    <Route path="/login" render={() => <LoginPage/>}/>
                    {/*<Route path="*" render={() => <div>404 not found</div>} />*/}
                    {/*</Redirect>*/}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized,
});

const AppContainer = compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)(App);

const SamuraiJSApp: React.FC = () => {
    return (
        // <HashRouter basename={process.env.PUBLIC_URL}>
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    // </HashRouter>
)
    ;
};
export default SamuraiJSApp;
