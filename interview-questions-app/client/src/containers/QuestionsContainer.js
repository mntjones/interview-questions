import React, {Component} from 'react';

import QuestionForm from './MemberForm';
import Card from './Card';



class QuestionsContainer extends Component {


 constructor(props) {
  super(props)

  this.state={
    questions: []
  }

  this.handleUpdate = this.handleUpdate.bind(this)

 }

  componentDidMount() {
    this.props.getQuestions()

  }

  handleUpdate(question){

    //fetch request here
  }

  
  render() {

    return(

    	< Card />
    	< QuestionForm />
   
    );
  } 
}

const mapStateToProps = (state) => {
  return ({
    //questions
  })
}

export default connect(mapStateToProps, { // actions })(QuestionsContainer);