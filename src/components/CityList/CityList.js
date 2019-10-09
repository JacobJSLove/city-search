import React from 'react';
import { connect } from 'react-redux';
import LoadingContext from 'context/LoadingContext';

class CityList extends React.Component {
    static contextType = LoadingContext;
    renderCities() {
        return this.props.city.sort(function(a, b) {
                return a.id - b.id;
            })
            .map(city => {
                return (
                    <li className="list-group-item" key={city.id}>
                    <h5 className="mb-1">{city.id + 1} - {city.name}</h5>
                    <p className="mb-1">{city.desc}</p>
                </li>
                )
            })
    }

    render() {
        if (this.props.city.length === 10 && this.context.loading) {
            return <ul className="list-group">{this.renderCities()}</ul>
        };
        return < > {
            this.context.loading ? (
                <div className="spinner-border text-primary" role="status">
  <span className="sr-only">Loading...</span>
</div>) : (<div className="alert alert-warning" role="alert">
  <strong>Holy guacamole!</strong> Air pollution is too high across Europe
</div>)
        } < />
    }
}

const mapStateToProps = state => {
    return { city: state.city };
};

export default connect(mapStateToProps)(CityList);