import React from 'react';
import Downshift from 'downshift';
import { connect } from 'react-redux';
import { getCitiesAndDescriptions } from 'actions';
import LoadingContext from 'context/LoadingContext';

//self
import './SearchBar.scss';

const items = [{
        value: 'Poland',
        tag: 'PL'
    },
    {
        value: 'Germany',
        tag: 'DE'
    },
    {
        value: 'Spain',
        tag: 'ES'
    },
    {
        value: 'France',
        tag: 'FR'
    }
];


class SearchBar extends React.Component {
    static contextType = LoadingContext;
    state = {
        term: '',
        prevTerm: '',
    };
    onFormSubmit = event => {
        event.preventDefault();
        let { term, prevTerm } = this.state;
        let item = items.find(item => item.value.toLowerCase() === term.toLowerCase());
        if (item) {
            if (prevTerm.toLowerCase() !== term.toLowerCase()) {
                this.context.onLoadChange(true);
                this.setState({ prevTerm: term });
                localStorage.setItem("search", term);
                this.props.getCitiesAndDescriptions(item.tag);
            };
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
initialInputValue={localStorage.getItem("search") ? localStorage.getItem("search") : ''}
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
        className="form-control" 
        placeholder="Type country"
        aria-label="Type country"
        {...getInputProps()} 
       />
        <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Check</button>
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
                  className: highlightedIndex === index ? 'list-group-item list-group-item-action active' : 'list-group-item list-group-item-action'
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