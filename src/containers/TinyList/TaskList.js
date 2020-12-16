import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { TaskItem } from '../../components/List/TaskItem';
import { CircularProgress, List } from '@material-ui/core';
import { isEmpty, size } from 'lodash';
import { setTasks } from '../../actions';
import { getSortedTasks } from '../../utils/helper';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    textAlign: 'center',
    margin: 'auto',
    marginTop: '20px',
    [theme.breakpoints.up('sm')]: {
      width: '50%',
    }
  },
}));


const TaskList = () => {
  const [sortedList, setSortedList] = useState([])
  const [listSize, setListSize] = useState(0)
  const { tasks, isLoading } = useSelector(state => state.tinyList);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch((setTasks()))
  }, [dispatch])

  useEffect(() => {
    setListSize(size(tasks))
  }, [tasks])
  
  useEffect(() => {
    const sortedTasks = getSortedTasks(tasks)
    setSortedList(sortedTasks)
  }, [tasks, listSize])

  const classes = useStyles();
  return (
    <div className={classes.root}>
      {isLoading && <CircularProgress />}
      {!sortedList.length && <p>No tasks added</p>}
      {!isEmpty(tasks) && <List>
        {
          sortedList.map(task => <TaskItem key={task.id} task={task} />)
        }
      </List>}
    </div>
  )
}

export { TaskList }
