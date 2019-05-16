import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { fetching } from "../actions"
// import actions

class CharacterListView extends React.Component {

  componentDidMount() {
    // call our action
    this.props.fetching();
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  characters: state.charsReducer.characters,
  // Array characters, Boolean fetching, null error.
  fetching: state.charsReducer.fetching,
  error: state.charsReducer.error
})

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps,
  {
    /* action creators go here */
    fetching
  }
)(CharacterListView);
