import React ,{Component} from 'react';


import logo from './logo.svg';
import './App.css';
import {routes} from "./routes";
import {Link} from "react-router-dom";
import {Route} from "react-router-dom";
import {AdminPage} from "./scenes/admin";
import {products} from "./data/products";
const getProducts=async ()=>products;
class App extends Component {
  state={
      products:[],
  };
  async componentDidMount() {
      const prods=await getProducts();
      this.setState({
          products:prods,
      })
  }

    render(){
  return (
    <div className="App">
        <p>
          <Link to={routes.admin}>Admin</Link>
        </p>
        <Route

            path={routes.admin} render={
                (renderProps)=>
                    <AdminPage productList={this.state.products} {...renderProps} />}
        />

    </div>
  );
    }
}

export default App;
