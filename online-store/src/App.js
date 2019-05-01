import React ,{Component} from 'react';


import logo from './logo.svg';
import './App.css';
import {routes} from "./routes";
import {Link} from "react-router-dom";
import {Route} from "react-router-dom";
import {AdminPage} from "./scenes/admin";
import {products} from "./data/products";
const getProducts=async ()=>new Promise(
    (resolve )=>{
        setInterval(()=>resolve(products),2000);
    }
);
class App extends Component {
  state={
      products:[],
      loading:true,
  };
  async componentDidMount() {
      const prods=await getProducts();
      this.setState({
          products:prods,
          loading:false
      })
  }
  updateProduct=(newProduct)=>{
    this.setState({
        products:this.state.products.map((oldPruduct)=>{
        if(oldPruduct.id===newProduct.id){
            return newProduct
        }
        return oldPruduct;
      }),
  })
  };

    render(){
      if(this.state.loading){
          return<h1>Loading...</h1>
      }
  return (
    <div className="App">
        <p>
          <Link to={routes.admin}>Admin</Link>
        </p>
        <Route

            path={routes.admin} render={
                (renderProps)=>
                    <AdminPage updateProduct={this.updateProduct} productList={this.state.products} {...renderProps} />}
        />

    </div>
  );
    }
}

export default App;
