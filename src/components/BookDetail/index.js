import React, {Component} from 'react';
import StatusBook from '../StatusBook';


class BookDetail extends Component {

    render () {
        return (
            <div className="book">
                <div className="book-top">
                <div className="book-cover book-detail" style={{
                    width: 128,
                    height: 188,
                    backgroundImage: `url(${this.props.smallThumbnail})`
                }}></div>

                <StatusBook

                    handleStatusBook={this.props.handleStatusBook}

                    shelf={this.props.shelf}

                    book={this.props.book}
                />

                </div>
                <div className="book-title">{this.props.title}</div>
                <div className="book-authors">

                    { this.props.authors && this.props.authors.map((author) => (

                        <span key={this.props.book.id + author}>{author}, </span>

                    ))}

                </div>
            </div>
        )
    }

}

export default BookDetail;