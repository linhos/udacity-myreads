
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Books from "../Books/index"



class Reads extends Component {

  render () {

    let currentlyReading
    currentlyReading = this.props.books.filter(book => book.shelf === 'currentlyReading');

    let wantToRead
    wantToRead = this.props.books.filter(book => book.shelf === 'wantToRead');

    let read
    read = this.props.books.filter(book => book.shelf === 'read');

    return (
      <div>

        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <div className="bookshelf">
                <Books books={currentlyReading}
                       type="Currently Reading"
                       selected="currentlyReading"
                       handleStatusBook={this.props.handleStatusBook}
                />
              </div>
              <div className="bookshelf">
                <Books books={wantToRead}
                       type="Want to Read"
                       selected="wantToRead"
                       handleStatusBook={this.props.handleStatusBook}
                />
              </div>
              <div className="bookshelf">
                <Books books={read}
                       type="Read"
                       selected="read"
                       handleStatusBook={this.props.handleStatusBook}
                />
              </div>
            </div>
          </div>
          <div className="open-search">
            <Link to='/search' >Add a book</Link>
          </div>
        </div>

      </div>
    )
  }

}

export default Reads;