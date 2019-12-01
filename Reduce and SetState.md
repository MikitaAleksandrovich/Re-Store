
React: setState()
---------------

{ a: 0, b: 0 } // Initial State

setState({ a: 100 });

// result state
{ a: 100, b: 0 } // Changed State


Redux: reducer() 
---------------

{ a: 0, b: 0 } // Initial State

const reducer = (state, action) => {
    return { a: 100, b: state.b }; // must return all values from initial state, even if didn't changed them
};

// result state
{ a: 100, b: 0 }

