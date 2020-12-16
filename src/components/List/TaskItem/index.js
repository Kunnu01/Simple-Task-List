import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  Checkbox,
  IconButton,
} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import { TaskDescription } from '../TaskDescription'
import { completeTask, unCompleteTask, deleteTask } from '../../../actions'


const useStyles = makeStyles((theme) => ({
  root: {
    "&:hover $listItemSecondaryAction": {
      visibility: 'inherit',
    }
  },
  listItemSecondaryAction: {
    visibility: 'hidden',
    [theme.breakpoints.down('sm')]: {
      visibility: 'visible'
    }
  },
}));

const TaskItem = ({ task }) => {
  const dispatch = useDispatch()

  const handleComplete = (e) => {
    if (e.target.checked) {
      dispatch(completeTask(task.id))
    } else {
      dispatch(unCompleteTask(task.id))
    }
  }

  const handleDelete = () => {
    dispatch(deleteTask(task.id))
  }
  
  const classes = useStyles();  
  return (
    <ListItem dense button classes={{
      container: classes.root,
    }}>
      <ListItemIcon>
        <Checkbox
          edge="start"
          checked={!!task.completed_at}
          disableRipple
          onChange={handleComplete}
        />
      </ListItemIcon>
      <TaskDescription task={task} />
      <ListItemSecondaryAction className={classes.listItemSecondaryAction}>
        <IconButton edge="end" onClick={handleDelete}>
          <DeleteOutlinedIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export { TaskItem }
