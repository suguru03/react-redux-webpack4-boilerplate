import React from 'react';

import List from 'material-ui/List';
import { withStyles } from 'material-ui/styles';

import Todo from './Todo';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: theme.palette.background.paper,
    width: '50%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

const TodoList = ({ classes }) => {
  return (
    <List className={classes.root}>
      <Todo />
    </List>
  );
};

export default withStyles(styles)(TodoList);
