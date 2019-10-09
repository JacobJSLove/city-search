import React from 'react';

const Context = React.createContext(false);

export class LoadingStore extends React.Component {
    state = { loading: false };

    onLoadChange = loading => {
        this.setState({ loading })
    }

    render() {
        return (
            <Context.Provider value={{ ...this.state,onLoadChange: this.onLoadChange }}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export default Context;