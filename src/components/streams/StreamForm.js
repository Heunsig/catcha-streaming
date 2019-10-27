import React from 'react'
import { Field, reduxForm } from 'redux-form'


class StreamForm extends React.Component {
  renderError ({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui tiny error message">
          { error }
        </div>
      )
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`
    return (
      <div className={ className }>
        <label>{label}</label>
        <input type="text" {...input} autoComplete="off"/>
        { this.renderError(meta) }
      </div>
    )
  }

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues)
  }

  render () {
    return (
      <div className="ui segment">
        <form 
          onSubmit={this.props.handleSubmit(this.onSubmit)} 
          className="ui form error"
        >
          <Field name="title" component={this.renderInput} label="Enter Title"/>
          <Field name="description" component={this.renderInput} label="Enter Description"/>
          <div className="formActions">
            <button className="ui button primary">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

const validate = (formValues) => {
  const errors = {}

  if (!formValues.title) {
    errors.title = 'You must enter a title'
  }

  if (!formValues.description) {
    errors.description = 'You must enter a description'
  }

  return errors
}

export default reduxForm({
  form: 'streamForm',
  validate
})(StreamForm)
