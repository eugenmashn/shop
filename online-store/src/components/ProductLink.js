import React from 'react';
import {number,string} from 'prop-types';
import {formatRoute} from "react-router-named-routes";
import {routes} from "../routes";
import {Link} from "react-router-dom";

export const ProductLink=({title,id})=>(
    <div>
        <Link to={formatRoute(routes.adminProduct,{id})}>{title}</Link>
    </div>
);
ProductLink.propType={
    id:number.isRequired,
    title:string.isRequired,
};

