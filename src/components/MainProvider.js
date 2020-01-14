import React from 'react';
import MainContext from '../context/MainContext';

class MainProvider extends React.Component{
    state = {
        categories: {
            "name01": "Oracle",
            "name02": "React"
        }
    };

    render(){
        return (
            <MainContext.Provider
                value={{
                    categories: this.state.categories
                }}
            >
                {this.props.children}
            </MainContext.Provider>
        )
    }
}

export default MainProvider;