import React from 'react';
import ReactDOM from 'react-dom';
import data from '../../../db/exampleData.js';
import Movie from './components/Movie.jsx';
import Search from './components/Search.jsx';


class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      movieslist : [],
      currentmovie : ''
    }
    
  this.performSearch = this.performSearch.bind(this)
  }

  componentWillMount() {
    this.setState({
      movies: data
    })
  }
 
  performSearch(term) {
    console.log(term)
    let results = this.state.movies.filter( (movie, i) => {
      if (movie.title.toLowerCase().indexOf(term.toLowerCase()) > -1 ) {
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
      <Search search={this.performSearch}/>
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
