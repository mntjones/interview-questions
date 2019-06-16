import React, { Component } from 'react';


class QuestionForm extends React {

	// updates as form is being filled in
	handleOnChange = event => {
    const { title, value } = event.target;
    
    // need to connect
  }

  // creates new question/answer on submit button
  handleOnSubmit = event => {
    event.preventDefault()
   	//create question
  }

  render() {

    const { category, body } = this.props.QuestionFormDataReducer;

    return (
      <div className="form">
        <h2>Add Question</h2>
        <form onSubmit={this.handleOnSubmit}>
          <div>
            <label htmlFor="category">Category:</label>
            <input 
              type="text"
              onChange={this.handleOnChange}
              name="category"
              value={category}
            />
          </div>

          <div>
            <label htmlFor="body">Body of Question:</label>
            <input 
              type="text"
              onChange={this.handleOnChange}
              name="body"
              value={body}
            />
          </div>
          
          <button type="submit" className="form-button">Add Question</button>

        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { QuestionFormDataReducer: state.QuestionFormDataReducer }
}

export default connect(mapStateToProps, {updateQuestionFormData, createQuestion})(QuestionForm);
