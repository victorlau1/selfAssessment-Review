import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      term: ''
    }

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange (event) {
    this.setState({
      term: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.search(this.state.term)
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Movie:
        </label>
          <input value={this.state.term} onChange={this.handleChange} />
        <input type="submit" value="Submit" />
      </form>
    );
  }


};

export default Search
