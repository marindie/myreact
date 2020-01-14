import React, { Fragment } from 'react';
import MainContext from '../context/MainContext';

const Category = () => (
    <MainContext.Consumer>
        {context => (
            <Fragment>
                {Object.keys(context.categories).map(key => (
                    <p>{context.categories[key]}</p>
                ))}
            </Fragment>
        )}                
    </MainContext.Consumer>    
);

export default Category;