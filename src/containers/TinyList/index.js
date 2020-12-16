import React, { Fragment } from 'react';
import { AddTaskInput } from '../../components/List/AddTask';
import { TaskList } from './TaskList';

const TinyList = () => {
  return <Fragment>
    <AddTaskInput />
    <TaskList />
  </Fragment>
}

export { TinyList }
