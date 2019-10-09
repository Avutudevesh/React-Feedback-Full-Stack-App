import React from 'react';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';
import {reduxForm} from 'redux-form';

class SurveyNew extends React.Component {
    state = {showformReview: false};
    renderContent() {
        if(this.state.showformReview){
            return <SurveyFormReview 
                        onCancel = {() => this.setState({showformReview: false})}/>;
        }

        return <SurveyForm 
                onSurveySubmit = {() => {this.setState({showformReview: true})}}
        />;
    }
    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        );
    }
}

export default reduxForm({
    form: 'surveyForm'
})(SurveyNew);