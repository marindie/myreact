import React from 'react';
import MainContext from '../context/MainContext';

class MainProvider extends React.Component{
    state = {
        categories: {
            "name01": "Oracle",
            "name02": "Android",
            "name03": "Linux",
            "name04": "Java",
            "name05": "Jenkins",
            "name06": "React"
        },
        link: {
            "name01": "/image",
            "name02": "/sign-up",
            "name03": "/sign-up",
            "name04": "/sign-up",
            "name05": "/sign-up",
            "name06": "/sign-up"
        },
        card: {
            "name": "정승원 Patrick",
            "meta": "Programmer, Gamer",
            "desc": "다 이루어 져라",
            "blogTitle": "My Blog",
            "blogDesc": "긍정 코딩 꿈나무"
        }
    };

    render(){
        return (
            <MainContext.Provider
                value={{
                    categories: this.state.categories,
                    link: this.state.link,
                    card: this.state.card
                }}
            >
                {this.props.children}
            </MainContext.Provider>
        )
    }
}

export default MainProvider;