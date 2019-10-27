import React from 'react'
// import { BrowserRouter, Route } from 'react-router-dom'
import { Router, Route, Switch } from 'react-router-dom'
import StreaCreate from './streams/StreamCreate'
import StreaEdit from './streams/StreamEdit'
import StreaDelete from './streams/StreamDelete'
import StreaList from './streams/StreamList'
import StreaShow from './streams/StreamShow'
import Header from './Header'
import history from '../history'

const App = () => {
  return (
    <Router history={history}>
      <Header/>
      <div className="ui container" id="contentWrapper">
        <div className="ui grid">
          <div className="column">
            <Switch>
              <Route path="/" exact component={StreaList}/>
              <Route path="/streams/new" exact component={StreaCreate}/>
              <Route path="/streams/edit/:id" exact component={StreaEdit}/>
              <Route path="/streams/delete/:id" exact component={StreaDelete}/>
              <Route path="/streams/:id" exact component={StreaShow}/>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App