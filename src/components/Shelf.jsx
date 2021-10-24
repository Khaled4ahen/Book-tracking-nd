import React from 'react'

const Book = (props) => {
  const { Books, title, onChangeShelf } = props
  return (
    <div className='bookshelf'>
      <h2 className='bookshelf-title'>{title}</h2>
      <div className='bookshelf-books' />

      <div className='bookshelf-books'>
        <ol className='books-grid'>
          {Books.map((Book) => (
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

export default Book
