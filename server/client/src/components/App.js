import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import {connect} from 'react-redux';
import {fetchUser} from '../actions';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';

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