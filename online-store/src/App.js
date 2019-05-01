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
        setInterval(()=>resolve(products),1000);
    }
);
class App extends Component {
    constructor(props){
        super(props);
       this.state={
        products:[],
        loading:true,

    };
    this.deleteFunc=this.deleteFunc.bind(this);
    }

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
  deleteFunc=(ThisProd)=>{

      this.setState(
          {
              products:this.state.products.filter((ProductOld)=>{
                  if(ThisProd.id!==ProductOld.id){
                      return ProductOld
                  }
              })
          }
      )
  };
  addNewFon=(title,description)=>{
      const id= this.state.products.length+1;
      const newElem={
          id: id,
          title: title,
          description:description,
          image: 'https://hotline.ua/img/tx/862/862504_s265.jpg',
          price: 8457,};
      this.setState(
          {
              products:this.state.products.push(newElem)
          }
      )
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
                    <AdminPage addNewFon={this.addNewFon}deleteFunc={this.deleteFunc} updateProduct={this.updateProduct} productList={this.state.products} {...renderProps} />}
        />

    </div>
  );
    }
}

export default App;
