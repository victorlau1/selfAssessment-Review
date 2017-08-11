import React from 'react';
import ReactDOM from 'react-dom';
import data from '../../../db/exampleData.js';
import Movie from './components/Movie.jsx';
import Search from './components/Search.jsx';
import Add from './components/Add.jsx';
import request from 'request';

class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      movies : [],
      filter: false
    }
    
  this.performSearch = this.performSearch.bind(this)
  this.reset = this.reset.bind(this)
  
  //May not actually need this
  this.addMovie = this.addMovie.bind(this)
  this.userAddedMovies = this.userAddedMovies.bind(this)
  this.getData = this.getData.bind(this)
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

  getData (title) {
      var options = {
        url:'http://netflixroulette.net/api/api.php?',
        headers: {
          title: 'Attack on titan'
        }
      }
    request(options, (err, res, body) => {
      if (err) {
        console.log(err)
      } else {
        console.log(res)
      }
  })
  }



  addMovie (newMovie){
    var curlist = this.state.movies
    curlist.push(newMovie)
    this.setState({
      movies: curlist
    })
  }
  
  reset() { 
    //Could add a filter check here
    this.setState({
      movies: data
    })
  }  
  
  userAddedMovies () {
    var userOnly = this.state.movies.filter( (movie, i) => {
      if (movie.isUser === true) {
        return movie
      }
    })

    this.setState({
      movies: userOnly
    })

  }

  render () {
    {var movielist = this.state.movies.map( (movie, i ) => {
        return <Movie key={i} movie={movie} />
    })}
    
    return (
      <div>
      <Search search={this.performSearch}/>
      <Add add={this.addMovie}/>
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
      <button name='reset' onClick={this.reset}>Reset</button>
      <button name='userOnly' onClick={this.userAddedMovies}>Users</button>
      <button name='netflix' onClick={this.getData}>Netflix API</button>
      </div>
    )

  }

};


ReactDOM.render(<App/>, document.getElementById('App'))
