import React from 'react';
import PageMenu from './PageMenu';
import TestPage from './TestPage';
import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";
import LecturePage from './LecturePage';
import StudyPage from './StudyPage';
import ListPage from './ListPage';
export default function PageBody() {
  return (
    <div className='page_wrapper'>
      <Router>
        <PageMenu />
        <hr />
          <Switch>
          <Route path="/test">
            <TestPage />
          </Route>
          <Route path="/lectures">
            <LecturePage />
          </Route>
          <Route path="/study">
            <StudyPage />
          </Route>
          <Route path="/list">
            <ListPage/>
          </Route>
          <Route path="/">
            <TestPage />
          </Route>
        </Switch>
       
        </Router>
    </div>
  )
}
