import React, { useState, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ListItemText, TextField } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { updateTask } from '../../../actions'


const useStyles = makeStyles((theme) => ({
  textField: {
    width: '100%',
  },
}));

const TaskDescription = ({ task }) => {
  const [value, setValue] = useState(task.description)
  const [isEditMode, setEditMode] = useState(false)
  const dispatch = useDispatch()

  const toggleEditMode = () => setEditMode(!isEditMode)

  const handleOnChange = (e) => setValue((e.target.value))

  const handleBlur = () => {
    dispatch(updateTask(task.id, value))
    toggleEditMode()
  }

  const classes = useStyles();
  return (
    <Fragment>
      {!isEditMode && <ListItemText primary={value} onClick={toggleEditMode} />}
      {isEditMode && (
        <TextField
          className={classes.textField}
          autoFocus={true}
          value={value}
          onBlur={handleBlur}
          onChange={handleOnChange}
        />
      )}
    </Fragment>
  )
}

export { TaskDescription }
