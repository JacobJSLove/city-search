import React from 'react';
import Downshift from 'downshift';
import { connect } from 'react-redux';
import { getCitiesAndDescriptions } from '../../actions';

//self
import './SearchBar.scss';

const items = [{
        value: 'Poland',
        tag: 'PL'
    },
    {
        value: 'Germany',
        tag: 'GR'
    }
];


class SearchBar extends React.Component {
    state = {
        term: '',
        prevTerm: ''
    };
    onFormSubmit = event => {
        event.preventDefault();
        let { term, prevTerm } = this.state;

        if (term !== '' && prevTerm !== term) {
            this.setState({ prevTerm: term })
            this.props.getCitiesAndDescriptions(term);
        };
    };

    render() {
        return (
            <Downshift
onStateChange = {
    data => {
        this.setState({ term: data.inputValue })
    }
}
itemToString={item => (item ? item.value : '')}
>
{({
  getInputProps,
  getItemProps,
  getMenuProps,
  isOpen,
  inputValue,
  highlightedIndex,
}) => (
  <div>
    <form className="input-group mb-3" onSubmit={this.onFormSubmit}>
    <input type="text"
        value={this.state.term}
        className="form-control" 
        placeholder="Szukane państwo"
        aria-label="Szukane państwo"
        {...getInputProps()} 
       />
        <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Sprawdź</button>
        </div>
    </form>
    <ul className="list-group" {...getMenuProps()}>
      {isOpen
        ? items
            .filter(item => !inputValue || item.value.toLowerCase().includes(inputValue.toLowerCase()))
            .map((item, index) => (
              <li 
                {...getItemProps({
                  key: item.value,
                  index,
                  item,
                  className: {
                    backgroundColor:
                      highlightedIndex === index ? 'list-group-item' : 'list-group-item active',
                  }
                })}
              >
                {item.value}
              </li>
            ))
        : null}
    </ul>
  </div>
)}
</Downshift>
        );
    }
}

export default connect(null, {
    getCitiesAndDescriptions
})(SearchBar);