const initialState = {
    books: [
      // {
      //     id: 1,
      //     author: 'Mick',
      //     title: 'Start JS'
      // },
      // {
      //     id: 2,
      //     author: 'Nickel',
      //     title: 'Start React'
      // },
    ],
}

const reducer = (state = initialState, action) => {

    // if state - undefined, you need initialState 
    switch (action.type) {
      case 'BOOKS_LOADED':
        return {
            books: action.payload
        };
      
      default:
        return state;  
      // if action.type - undefined, you need return state unchanged 
    }
  }
export default reducer;