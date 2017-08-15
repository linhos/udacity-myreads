
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Books from '../Books';


class SearchForm extends Component {

  onChange = (e) => {
    const { name, value } = e.target
    if (this.props.onSearchBook)
      this.props.onSearchBook(value)

  }

  onSubmit = (e) => {
    e.preventDefault();
    if (this.props.onSearchBook)
      this.props.onSearchBook(e.target.search.value)
  }

  render () {

    return (
      <div>
        <div className="search-books">
          <div className="search-books-bar">
            <Link className="close-search" to='/' >Close</Link>
            <div className="search-books-input-wrapper">
              <form onSubmit={ this.onSubmit }>
                <input name="search" type="text" placeholder="Search by title or author..." onChange={ this.onChange } />
              </form>

            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">

                <Books books={this.props.books}
                       handleStatusBook={this.props.handleStatusBook} />

            </ol>
          </div>
        </div>
      </div>
    )
  }

}

export default SearchForm;