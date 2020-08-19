import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './routes';

import SingIn from '../pages/SingIn';
import SingUp from '../pages/SingUp';
import TeacherList from '../pages/TeacherList';
import TeacherForm from '../pages/TeacherForm';
import Profile from '../pages/Profile';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SingIn} />
    <Route path="/singup" exact component={SingUp} />

    <Route path="/dashboard" exact component={TeacherList} />
    <Route path="/give-classes" exact component={TeacherForm} />
    <Route path="/profile" exact component={Profile} />
  </Switch>
);

export default Routes;