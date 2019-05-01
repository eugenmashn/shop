import React from 'react'
import styled from 'styled-components'
import {productPropTypes} from "../common/propTypes";
import {arrayOf,shape,string,number} from 'prop-types'

const InputField=styled.input`display: block;`;
 const ProductComponent=({title,description})=>(
    <form>
        <InputField name="title" defaultValue={title}/>
        <InputField name="description"defaultValue={description}/>
    </form>
);
 ProductComponent.propTypes=productPropTypes;
export const ProductContainer=({match:{params},productList})=>{
  const product=productList.find(({id})=>Number(params.id)===id);

  return<ProductComponent{...product}/>
};
ProductComponent.propType={
    productList:arrayOf(productPropTypes).isRequired,
};

