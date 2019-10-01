import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import {connect} from 'react-redux';
import {fetchUser} from '../actions';
import Landing from './Landing';

const Dashboard = () => {
    return <h2>Dashboard</h2>;
}

const SurveyNew = () => {
    return <h2>SurveyNew</h2>;
}

class App extends React.Component {
    componentDidMount(){
        this.props.fetchUser();
    }
    render() {
        return (
            <div className="container">
                <BrowserRouter>
                <div>
                <Header />
                <Route path="/" exact component={Landing}/>
                <Route path="/surveys/new" exact component={SurveyNew}/>
                <Route path="/surveys" exact component={Dashboard}/>
                </div>
                </BrowserRouter>
            </div>
            );
    }
}

export default connect(null, {fetchUser})(App);