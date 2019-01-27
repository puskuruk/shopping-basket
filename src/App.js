import React, { Component } from 'react';
import {createStore, applyMiddleware,compose} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import Reducers from './reducers/index';
import ProductList from './components/productList';
import Basket from './components/basket';
import './App.css';

const store = createStore(Reducers, 
  compose(applyMiddleware(ReduxThunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  );

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [
        { id:1, name:'Apple', price:10 },
        { id:2, name:'Eggplant', price: 15 },
        { id:3, name:'Pear', price:5 },
        { id:4, name:'Patato', price: 12 },
        { id:5, name:'Banana', price:18 }
      ]
    }
  }
  render() {
    return (
      <Provider store={store}>
        <div className="general">
          <ProductList products= {this.state.products}/>
          <Basket/>
        </div>    
      </Provider>
    );
  }
}

export default App;
