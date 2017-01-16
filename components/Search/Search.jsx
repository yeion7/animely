import React, { PropTypes } from 'react';
import debounce from 'debounce';

require('./Search.styl');

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.props.onUserInput(
      event.target.value,
    );
    debounce(this.props.fetch, 1000)();
  }

  render() {
    return (
      <section className="Search">
        <form action="" className="Search-form">
          <input
            type="text"
            className="Search-input"
            placeholder="Search anime and more"
            value={this.props.text}
            onChange={this.handleChange}
            ref={(input) => { this.textInput = input; }}
          />
        </form>
      </section>
    );
  }
}

Search.propTypes = {
  text: PropTypes.string,
  fetch: PropTypes.func,
  onUserInput: PropTypes.func,
};
export default Search;
