import React, { Component } from 'react'
import { connect } from 'react-redux'

class CreateTodo extends Component {

  constructor() {
    super()
    this.state = {
      text: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addTodo(this.state)
    // if not given any arguments, connect will return dispatch as a prop to the component we're wrapping with connect
    // this.props.dispatch({ type: 'ADD_TODO', payload: this.state })
  }

  render() {
    return(
      <div>
        Create Todo Component
        <form onSubmit={this.handleSubmit} >
          <p>
            <label>add todo</label>
            <input type="text" onChange={this.handleChange} value={this.state.text} />
          </p>
          <input type="submit" />
        </form>
        {this.state.text}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: (formData) => dispatch({ type: "ADD_TODO", payload: formData })
  }
}

export default connect(null, mapDispatchToProps)(CreateTodo);
// if not given any arguments, connect will return dispatch as a prop to the component we're wrapping with connect
// export default connect()(CreateTodo)
