
import React, { Component } from 'react'
import StatusBook from '../StatusBook'
import BookDetail from '../BookDetail'

class Books extends Component {

  render () {

    const bookList = this.props.books || [];

    return (
      <div>

        <h2 className="bookshelf-title">{this.props.type}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
              {bookList.length > 0 && bookList.map((book) => (
                  <li key={book.id} name={book.shelf}>
                      <BookDetail 
                      smallThumbnail = {book.imageLinks.smallThumbnail} 
                      handleStatusBook = {this.props.handleStatusBook} 
                      shelf = {book.shelf}
                      book = {book}
                      title= {book.title}
                      authors= {book.authors}
                      />

                  </li>
              ))}
          </ol>
        </div>
      </div>
    )

  }

}

export default Books;