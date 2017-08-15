
import React, { Component } from 'react'
import StatusBook from '../StatusBook'

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

                    <div className="book">
                      <div className="book-top">
                        <div className="book-cover" style={{
                          width: 128,
                          height: 188,
                          backgroundImage: `url(${book.imageLinks.smallThumbnail})`
                        }}></div>

                        <StatusBook

                          handleStatusBook={this.props.handleStatusBook}

                          shelf={book.shelf}

                          book={book}
                        />

                      </div>
                      <div className="book-title">{book.title}</div>
                      <div className="book-authors">

                            { book.authors && book.authors.map((author) => (

                                <span key={book.id + author}>{author}, </span>

                            ))}

                      </div>
                    </div>
                  </li>
              ))}
          </ol>
        </div>
      </div>
    )

  }

}

export default Books;