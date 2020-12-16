import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { InputAdornment, TextField } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import { useDispatch } from 'react-redux';
import { addTask } from '../../../actions'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '50%',
    }
  }
}));

const AddTaskInput = () => {
  const [description, setDescription] = useState('')
  const dispatch = useDispatch()

  const handleChange = (e) => setDescription(e.target.value)

  const handleHitEnter = (e) => {
    if (e.charCode === 13 && description.trim().length) {
      dispatch(addTask(description))
      setDescription('')
    }
  }
  
  const classes = useStyles();
  return (
    <TextField
      className={classes.root}
      color="primary"
      id="input-with-icon-textfield"
      placeholder="Add to list..."
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <AddIcon color="primary" />
          </InputAdornment>
        ),
      }}
      onChange={handleChange}
      onKeyPress={handleHitEnter}
    />
  )
}

export { AddTaskInput }