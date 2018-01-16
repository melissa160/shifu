import React from "react"
import PropTypes from "prop-types"
class HelloWorld extends React.Component {
  render () {
    return (
      <div>
        <div>Greeting: <b> {this.props.greeting}</b></div>
      </div>
    );
  }
}

HelloWorld.propTypes = {
  greeting: PropTypes.string
};
export default HelloWorld
