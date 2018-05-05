import React from 'react';

import Checkbox from 'material-ui/checkbox';
import { ListItem, ListItemText } from 'material-ui/List';

const Todo = props => (
  <ListItem>
    <Checkbox />
    <ListItemText primary="sample text" style={{ marginTop: 0 }} />
  </ListItem>
);

export default Todo;
