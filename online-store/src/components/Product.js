import React from 'react'
import styled, {css} from 'styled-components'
import {productPropTypes} from "../common/propTypes";
import {arrayOf} from 'prop-types'
import {routes} from "../routes";
import {AddMOdule} from "./AddMOdule";
const commonInputStyles=css`display: block;`;
const TextArea=styled.textarea`${commonInputStyles}`;
const InputField=styled.input`${commonInputStyles}`;
 const ProductComponent=({title,description,deleteFunc,onClick,onChange,onSubmit,match,id})=>(
     <div>
    <form onSubmit={onSubmit}>
        <InputField name="title"value={title} onChange={onChange('title')}/>
        <TextArea name="description"value={description}onChange={onChange('description')}/>
        <button type='submit'>Save</button>
        <button onClick={onClick}>Delete</button>


    </form>
    <AddMOdule addNewFon={this.props.addNewFon}/>
     </div>
);
 ProductComponent.propTypes=productPropTypes;
export class ProductContainer extends React.Component {
    constructor(props){
        super(props);
        const {match:{params},productList,addNewFon}=props;
        const product=productList.find(({id})=>Number(params.id)===id);
        this.state={
            ...product,
        }
}
    onChange=(name)=>({target:{value}})=>{
        this.setState({
            [name]:value,
        });
};
    onClick=(e)=>{
        e.preventDefault();
        this.props.deleteFunc(this.state);
        this.props.history.push(routes.admin);

    };
    onSubmit=(e)=>{
        e.preventDefault();
        this.props.updateProduct(this.state);
        this.props.history.push(routes.admin);
    };
   render (){



   return<ProductComponent
       addNewFon={this.addNewFon}
       {...this.state}
         onSubmit={this.onSubmit}
         onClick={this.onClick}
        onChange={this.onChange}
   />
}};
ProductComponent.propType={
    productList:arrayOf(productPropTypes).isRequired,
};

