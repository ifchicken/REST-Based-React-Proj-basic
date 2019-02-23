import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component {
  // need to fetch info by itself when we hv /:id
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    // console.log(formValues);
    this.props.editStream(this.props.match.params.id, formValues);
  };

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    // console.log(this.props);
    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm
          /*initialValues={{ title: 'Edit', description: 'change me'}}*/
          initialValues={_.pick(this.props.stream, 'title', 'description')}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}
// initialValues is special property name from reduxform
// pass title and description bc in streamForm field has these 2 name, it would find match name first


// ownProps is same as props above
const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
}

export default connect(
  mapStateToProps,
  { fetchStream, editStream }
)(StreamEdit);
