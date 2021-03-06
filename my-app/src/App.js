import React, { Component } from 'react';
import Layout from './component/Layout/Layout'
import BurgerBuilder from './container/BurgerBuilder/BurgerBuilder';
import Checkout from './container/CheckOut/Checkout';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div >
        <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/" exact component={BurgerBuilder} />
          </Switch> 
        </Layout>
      </div>);
  }
}

export default App;
