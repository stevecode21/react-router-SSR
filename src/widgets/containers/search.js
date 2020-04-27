import React, { Component } from "react";
import Search from "../components/search";
import { connect } from "react-redux";
import * as actions from "../../actions/index";
import { bindActionCreators } from "redux";

class SearchContainer extends Component {
  state = {
    value: "",
    // Inicialmente lo querré falso porque no quiero nada de texto
    prompt: false,
  };
  handleSubmit = (event) => {
    event.preventDefault();
    // console.log(this.input.value, 'submit')
    // fetch(`http://miapi.com/buscar/${this.input.value}`).then((data)=>{
    // })
    this.props.actions.searchAsyncEntities(this.input.value);
  };
  setInputRef = (element) => {
    this.input = element;
  };
  handleInputChange = (event) => {
    this.setState({
      value: event.target.value.replace(" ", "-"),
      //Prompt va a validar si existe algo en el value, así como la longitud de mi valor ya que si hay 0 no habrá nada (false) y 1 habrá 1 o mas caracteres (true)
      //Con !! esto reafirmará 2 valores (true o false)
      prompt: !!event.target.value.length,
    });
  };
  render() {
    return (
      <Search
        setRef={this.setInputRef}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleInputChange}
        value={this.state.value}
        //Le envío los props a mi Prompt component de React Router
        prompt={this.state.prompt}
      />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

export default connect(null, mapDispatchToProps)(SearchContainer);
