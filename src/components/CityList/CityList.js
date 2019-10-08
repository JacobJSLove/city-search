import React from 'react';
import { connect } from 'react-redux';


class CityList extends React.Component {
    renderCities() {
        return this.props.city.slice(0, 10).sort(function(a, b) {
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
        return (
            <ul className="list-group">{this.renderCities()}</ul>
        );
    }
}

const mapStateToProps = state => {
    return { city: state.city };
};

export default connect(mapStateToProps)(CityList);