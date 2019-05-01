import React from 'react'
import styled, {css} from 'styled-components'
import {productPropTypes} from "../common/propTypes";
import {arrayOf} from 'prop-types'
import {routes} from "../routes";
const commonInputStyles=css`display: block;`;
const TextArea=styled.textarea`${commonInputStyles}`;
const InputField=styled.input`${commonInputStyles}`;
 const ProductComponent=({title,description,onChange,onSubmit})=>(
    <form onSubmit={onSubmit}>
        <InputField name="title"value={title} onChange={onChange('title')}/>
        <TextArea name="description"value={description}onChange={onChange('description')}/>
        <button type='submit'>Save</button>
    </form>
);
 ProductComponent.propTypes=productPropTypes;
export class ProductContainer extends React.Component {
    constructor(props){
        super(props);
        const {match:{params},productList}=props;
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
    onSubmit=(e)=>{
        e.preventDefault();
        this.props.updateProduct(this.state);
        this.props.history.push(routes.admin);
    };
   render (){



   return<ProductComponent{...this.state}
                          onSubmit={this.onSubmit}
   onChange={this.onChange}
   />
}};
ProductComponent.propType={
    productList:arrayOf(productPropTypes).isRequired,
};

