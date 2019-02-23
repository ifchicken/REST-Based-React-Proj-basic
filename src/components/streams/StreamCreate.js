import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamCreate extends React.Component {
  // renderError({ error, touched }) {
  //   if (touched && error) {
  //     return (
  //       <div className="ui error message">
  //         <div className="header">{error}</div>
  //       </div>
  //     );
  //   }
  // }
  //
  // renderInput= ({ input, label, meta }) => {
  //   // console.log(meta);
  //   // console.log(formProps);
  //   const className = `field ${meta.error && meta.touched? 'error' : ''}`;
  //   return (
  //     <div className={className}>
  //       <label>{ label }</label>
  //       <input {...input} autoComplete="off" />
  //       {this.renderError(meta)}
  //       {/*<div>{meta.error}</div>*/}
  //     </div>
  //   );
  // }

  onSubmit = (formValues) => {
    // console.log(formValues);
    this.props.createStream(formValues);
  }

  render() {
    // console.log(this.props);
    return (
      // <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
      //   <Field name="title" component={this.renderInput} label="Enter Title" />
      //   <Field name="description" component={this.renderInput} label="Enter Description" />
      //   <button className="ui button primary">Submit</button>
      // </form>
      <div>
        <h3>Create a Stream</h3>
        {/* pass onsubmit to StreamForm*/}
        <StreamForm onSubmit={this.onSubmit}/>
      </div>
    );
  }
}

// const validate = (formValues) => {
//   // redux-form whould check field name
//   const errors = {};
//   if (!formValues.title) {
//     errors.title = 'u must enter title';
//   }
//   if (!formValues.description) {
//     errors.description = 'u must enter description';
//   }
//   return errors;
// };
//
//
// const formWrapped = reduxForm({
//   form: 'stringCreate',
//   validate
// })(StreamCreate);
//
export default connect(null, { createStream })(StreamCreate);



// reduxForm is a func silimar to connect
// handleSubmit is from redux-form, it has event.preventDefault(); itself
// inside () is cb func for handleSubmit
