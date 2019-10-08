import React from 'react';
import { connect } from 'react-redux';
import { getCitiesAndDescriptions } from '../../actions';

//self
import './SearchBar.scss';

class SearchBar extends React.Component {
    state = { term: '' };

    onInputChange = event => {
        this.setState({ term: event.target.value });
    };

    onFormSubmit = event => {
        event.preventDefault();
        if (this.state.term !== '') {
            this.props.getCitiesAndDescriptions(this.state.term);
        };
    };

    render() {
        return (
            <form className="input-group mb-3" onSubmit={this.onFormSubmit}>
                <input type="text"
                        value={this.state.term}
                        onChange={this.onInputChange}
                        className="form-control" 
                        placeholder="Szukane państwo"
                        aria-label="Szukane państwo"
                        aria-describedby="button-addon2" />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Sprawdź</button>
                </div>
            </form>
        );
    }
}

export default connect(null, {
    getCitiesAndDescriptions
})(SearchBar);