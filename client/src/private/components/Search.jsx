import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      term: ''
    }

  //this.performSearch = this.performSearch.bind(this);
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange (event) {
    this.setState({
      term: event.target.value
    })
  }

  handleSubmit(event) {
    this.performSearch(this.state.term)
    event.preventDefault();
  }
  
  render() {
    return (  
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
     )
  }


};

export default Search