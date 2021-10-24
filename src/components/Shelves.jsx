import React from 'react'
import Shelf from './Shelf'

const BookShelf = (props) => {
  const { Books, onChangeShelf } = props
  return (
    <React.Fragment>
      <Shelf
        title={'Currently Reading'}
        Books={Books.filter((b) => b.shelf === 'currentlyReading')}
        onChangeShelf={onChangeShelf}
      />
      <Shelf
        title={'Want To Read'}
        Books={Books.filter((b) => b.shelf === 'wantToRead')}
        onChangeShelf={onChangeShelf}
      />
      <Shelf
        title={'Read'}
        Books={Books.filter((b) => b.shelf === 'read')}
        onChangeShelf={onChangeShelf}
      />
    </React.Fragment>
  )
}

export default BookShelf
