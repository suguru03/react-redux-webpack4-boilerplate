import React from 'react';

import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';

const styles = theme => ({
  textField: {
    marginLeft: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
    },
    menu: {
      width: 200,
    },
  },
});

const AddTodo = ({ classes }) => {
  return (
    <form>
      <TextField className={classes.textField} id="add-todo" label="Add a Todo" margin="normal" name="todo" placeholder="i.e buy chocolate" />
      <Button className={classes.button} color="primary" type="submit" variant="raised">
        Add Todo
      </Button>
    </form>
  );
};

export default withStyles(styles)(AddTodo);
