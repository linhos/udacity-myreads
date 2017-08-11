import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'

import { Route } from 'react-router-dom'
import SearchForm from './components/SearchForm'
import Reads from './components/Reads';


class BooksApp extends Component {

  constructor () {
    super();
    this.state = {
      books: [],
      results: []

    }
    this.handleStatusBook = this.handleStatusBook.bind(this);
  }


  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }


  searchBook(books) {

    BooksAPI.search(books).then(books => {

      books.map(book => {
        let existingBook = this.state.books.find(b => b.id === book.id);
        if (existingBook) {
          book.shelf = existingBook.shelf
        }
        return book;
      });

      this.setState(state => ({
        results: books,
      }))

    })

  }

  handleStatusBook(book, shelf) {
    BooksAPI.update(book,  shelf).then(() => {
      let bookItems = this.state.books;
      let existingBook = bookItems.find(b => b.id === book.id);
      if (existingBook) {
        bookItems = bookItems.map(b => {
          if(b.id === book.id){
            b.shelf = shelf;
          }
          return b;
        });
      }
      this.setState({
        books: bookItems,
      });
    })


  }

  render() {



    return (
      <div className="app">

        <Route exact path="/" render={ ({history}) =>(
          <Reads books ={this.state.books} handleStatusBook={this.handleStatusBook} />

        )}/>


        <Route exact path="/search" render={ ({ history }) =>(
          <SearchForm onSearchBook={(books) => {
              this.searchBook(books)
            }}

            handleStatusBook={this.handleStatusBook}
            books={this.state.results}

          />
        )}/>



      </div>
    )
  }
}

export default BooksApp
