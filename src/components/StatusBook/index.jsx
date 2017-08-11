
import React, { Component } from 'react'



class StatusBook extends Component {

  onChange = (e) => {
    const { name, value } = e.target
    if (this.props.handleStatusBook)
      this.props.handleStatusBook(this.props.book, value)

  }

  render () {

    return (
      <div>
        <div className="book-shelf-changer">
          <form>
            <select defaultValue={this.props.shelf} onChange={ this.onChange}  name="shelf">
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </form>
        </div>
      </div>
    )
  }


}

export default StatusBook;