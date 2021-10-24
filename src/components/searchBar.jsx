import React from 'react'
import { Link } from 'react-router-dom'

class SearchBar extends React.Component {
  render() {
    const { onSearch, searchValue, searchedResult, onChangeShelf } = this.props
    return (
      <div>
        <div className='search-books'>
          <div className='search-books-bar'>
            <Link to='/' className='close-search'>
              Close
            </Link>
            <div className='search-books-input-wrapper'>
              <input
                value={searchValue}
                onChange={(e) => onSearch(e.target.value)}
                type='text'
                placeholder='Search by title or author'
              />
            </div>
          </div>
        </div>
        <div className='search-books-results'>
          <ol className='books-grid'>
            {searchedResult &&
              searchedResult.length > 0 &&
              searchedResult.map((Book) => (
                <li key={Book.id}>
                  <div className='book'>
                    <div className='book-top'>
                      <div
                        className='book-cover'
                        style={{
                          width: 128,
                          height: 192,
                          backgroundImage:
                            Book.imageLinks && Book.imageLinks.smallThumbnail
                              ? `url(${Book.imageLinks.smallThumbnail})`
                              : 'no Image',
                        }}
                      />
                      <div className='book-shelf-changer'>
                        <select
                          onChange={(e) => {
                            onChangeShelf(e.target.value, Book)
                          }}
                          value={Book.shelf ? Book.shelf : 'none'}
                        >
                          <option value='move' disabled>
                            Move to...
                          </option>
                          <option value='currentlyReading'>
                            Currently Reading
                          </option>
                          <option value='wantToRead'>Want to Read</option>
                          <option value='read'>Read</option>
                          <option value='none'>None</option>
                        </select>
                      </div>
                    </div>
                    <div className='book-title'>{Book.title}</div>
                    <div className='book-authors'>
                      {(Book.authors && Book.authors.length) > 1
                        ? Book.authors.join(', ')
                        : Book.authors}
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

export default SearchBar
