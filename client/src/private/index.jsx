import React from 'react';
import ReactDOM from 'react-dom';
import data from '../../../db/exampleData.js';
import Movie from './components/Movie.jsx';
import Search from './components/Search.jsx';


class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      movies : [],
      currentmovie : ''
    } 
  }

  componentDidMount() {
    this.setState({
      movies: data
    })
  }
 
  performSearch(term) {
    let results = this.movies.map( (movie) => {
      if (movie.indexOf(term) > -1) {
        return movie;
      }
    })
    
    if (results.length === 0) {
      //Do Nothing
    } else {
      this.setState({
        movies: results
      })
    }
  }

  render () {
    {var movielist = this.state.movies.map( (movie, i ) => {
        return <Movie key={i} movie={movie} />
    })}
    
    return (
      <div>
      <Search search={this.performSearch.bind(this)}/>
      <table>
        <thead>
        <tr>
          <th>MovieList!</th>
        </tr>
        </thead>
          <tbody>
            {movielist}
          </tbody>
      </table>
      </div>
    )

  }

};


ReactDOM.render(<App/>, document.getElementById('App'))
