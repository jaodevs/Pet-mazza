import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Edit from './pages/Edit/edit';
import Feed from './pages/Feed/feed';
import Lermais from './pages/Lermais/lermais';
import Post from './pages/post/post';

function App() {
  return(
    <Router>
        <Switch>
            <Route exact path="/" component={Feed}/>
            <Route path="/post" component={Post}/>
            <Route path="/edit/:id" component={Edit}/>
            <Route path="/lermais" component={Lermais}/>
        </Switch>
    </Router>
  )
}



export default App;
