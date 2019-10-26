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
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={StreaList}/>
            <Route path="/streams/new" exact component={StreaCreate}/>
            <Route path="/streams/edit/:id" exact component={StreaEdit}/>
            <Route path="/streams/delete/:id" exact component={StreaDelete}/>
            <Route path="/streams/:id" exact component={StreaShow}/>
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App