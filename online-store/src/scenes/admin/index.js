import React from 'react'
import {arrayOf,shape,string,number} from 'prop-types'
import {ProductLink} from "../../components/ProductLink";
import {productPropTypes} from "../../common/propTypes";
export const AdminPage=({productList})=>(
    <div>
        {productList.map(({title,id})=><ProductLink key={id} id={id} title={title} />)}
    </div>

    );
AdminPage.propType={
    productList:arrayOf(productPropTypes).isRequired,
};