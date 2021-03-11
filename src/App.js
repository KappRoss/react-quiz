import React from 'react'
import Layout from './hoc/Layout/Layout';
import Quiz from './containers/Quiz/Quiz';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom'
import QuizCreator from "./containers/QuizCreator/QuizCreator";
import QuizList from "./containers/QuizList/QuizList";
import Auth from "./containers/Auth/Auth";
import {connect} from "react-redux";
import Logout from "./components/Logout/Logout";
import {autoLogin} from "./store/actions/auth";

class App extends React.Component {

    componentDidMount() {
        this.props.autoLogin()
    }

    render() {
        let routes = (
            <Switch>
                <Route path={'/auth'} component={Auth}/>
                <Route path={'/quiz/:id'} component={Quiz}/>
                <Route path={'/'} exact component={QuizList}/>
                <Redirect to={'/'} />
            </Switch>
        )

        if (this.props.isAuth) {
            routes = (
                <Switch>
                    <Route path={'/quiz-creator'} component={QuizCreator}/>
                    <Route path={'/quiz/:id'} component={Quiz}/>
                    <Route path={'/logout'} component={Logout} />
                    <Route path={'/'} exact component={QuizList}/>
                    <Redirect to={'/'} />
                </Switch>
            )
        }

        return (
            <Layout>
                {routes}
            </Layout>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuth: !!state.auth.token
    }
}

export default withRouter(connect(mapStateToProps, {autoLogin})(App));
