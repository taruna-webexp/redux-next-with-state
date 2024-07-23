const initialState = {
    todos: [],
  };
  
  const toDoReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_TO_LIST":
        return {
          ...state,
          todos: [
            ...state.todos,
            {
              id: state.todos.length + 1,
              item: action.payload.item,
            },
          ],
        };
  
      case "REMOVE_TO_LIST":
        return {
          ...state,
          todos: state.todos.filter(item => item.id !== action.payload.id),
        };
  
      default:
        return state;
    }
  };
  
  export default toDoReducer;
  