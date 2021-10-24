import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI.js'
import SearchBar from './searchBar'
// import Navbar from './Navbar'
import Shelves from './Shelves'

class App extends React.Component {
    state = {
        books: [],
        searchValue: '',
        searchedResult: [],
        flip:false
    }

    async componentDidMount() {
        const books = await BooksAPI.getAll()
        this.setState(() => ({
            books,
        }))
        // BooksAPI.getAll().then(books => {
        //     this.setState(() => ({
        //         books
        //     }));
        // })
    }

    onChangeShelf = (shelf,Book) => {                       //4          //4          
      const updateIndex = this.state.books.findIndex(b => b.id === Book.id);
      const Books = this.state.books.map(b => b);
      const updatedBookList = Books;

    if (updateIndex === -1) {
      Book.shelf = shelf;
      updatedBookList.push(Book);
    } else {
      updatedBookList[updateIndex].shelf = shelf;
      
    }
    this.setState({
      books: updatedBookList
    });

    BooksAPI.update(Book, shelf);

    this.setState(currentState => ({
      flip: !currentState.flip
    }));
    }
    onSearch = (searchValue) => {
        this.setState(() => ({ searchValue }))
        BooksAPI.search(searchValue).then((searchedResult) => {
            if (searchedResult && searchedResult.length > 0) {
                for (let i = 0; i < searchedResult.length; i++) {
                    for (let j = 0; j < this.state.books.length; j++) {
                        if (searchedResult[i].id === this.state.books[j].id) {
                            const index = this.state.books.findIndex(
                                (book) => book.id === searchedResult[i].id
                            )
                            searchedResult[i].shelf = this.state.books[
                                index
                            ].shelf
                        }
                    }
                }
            }
            this.setState(() => ({ searchedResult }))
        })
    }

    render() {
        const { books, searchValue, searchedResult } = this.state
        return (
            <React.Fragment>
                {/* <Navbar /> */}
                {/* <nav style={{ float: 'left' }}>
                    <Link to=''>Home</Link>
                </nav> */}
                {/* <div className='list-books-content' /> */}
                <Switch>
                    <Route
                        path='/search'
                        render={() => (
                            <SearchBar
                                searchValue={searchValue}
                                onSearch={this.onSearch}
                                searchedResult={searchedResult}
                                onChangeShelf={this.onChangeShelf}
                            />
                        )}
                    />

                    <Route
                        exact
                        path='/'
                        render={() => (
                            <div className='list-books'>
                                <div className='list-books-title'>
                                    <h1>MyReads</h1>
                                </div>
                                <Shelves
                                    onChangeShelf={this.onChangeShelf}
                                    Books={books}
                                />
                            </div>
                        )}
                    />
                </Switch>
                <div className='open-search'>
                    <Link to='/search' className='button'>
                        Search
                    </Link>
                </div>
            </React.Fragment>
        )
    }
}

export default App
