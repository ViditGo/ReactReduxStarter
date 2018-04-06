import React from 'react';
import BooksList from '../containers/books_list';
import BookDetail from '../containers/book_detail';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <BooksList />
        <BookDetail />
      </div>
    );
  }
}
