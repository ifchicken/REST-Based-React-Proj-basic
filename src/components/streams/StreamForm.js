import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  // meta includes some properties
  renderInput= ({ input, label, meta }) => {
    // console.log(meta);
    // console.log(formProps);
    const className = `field ${meta.error && meta.touched? 'error' : ''}`;
    return (
      <div className={className}>
        <label>{ label }</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
        {/*<div>{meta.error}</div>*/}
      </div>
    );
  }

  onSubmit = (formValues) => {
    // console.log(formValues);

    // onSubmit func pass down from parent
    this.props.onSubmit(formValues);
  }

  render() {
    // console.log(this.props);
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field name="description" component={this.renderInput} label="Enter Description" />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  // redux-form whould check field name, if match and erro will pass through Field
  const errors = {};
  if (!formValues.title) {
    errors.title = 'u must enter title';
  }
  if (!formValues.description) {
    errors.description = 'u must enter description';
  }
  return errors;
};


export default reduxForm({
  // form name for purpose, redux will store the name in store
  form: 'streamForm',
  validate
})(StreamForm);




// reduxForm is a func silimar to connect
// handleSubmit is from redux-form, it has event.preventDefault(); itself
// inside () is cb func for handleSubmit
