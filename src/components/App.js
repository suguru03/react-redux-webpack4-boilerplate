import React from 'react';

import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Footer from './Footer';

const getStyles = () => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    maxWidth: '50%',
    border: '1px solid grey',
    backgroundColor: 'lightgrey',
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

const App = () => {
  const styles = getStyles();
  return (
    <div style={styles.root}>
      <AddTodo />
      <TodoList />
      <Footer />
    </div>
  );
};

export default App;
