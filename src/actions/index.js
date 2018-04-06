export default function selectBook(book) {
return {
    type : 'BOOK_SELECTED',
    payload : book
    }
}

// export default function addBook(newBook) {
//     return {
//         type : 'ADD_BOOK',
//         payload : data
//     }
// }
