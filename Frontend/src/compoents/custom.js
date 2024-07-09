import React, { Component } from 'react';

class CustomDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDropSearch: false,
      selectedValue: '125', // Default select value
      activeOption: null // Track the active option on hover
    };
    this.handleSelectClick = this.handleSelectClick.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleOptionClick = this.handleOptionClick.bind(this);
    this.handleOptionMouseEnter = this.handleOptionMouseEnter.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleSelectClick() {
    this.setState(prevState => ({
      showDropSearch: !prevState.showDropSearch
    }));
  }

  handleClickOutside(event) {
    if (this.dropdownRef && !this.dropdownRef.contains(event.target)) {
      this.setState({ showDropSearch: false });
    }
  }

  handleOptionClick(value) {
    this.setState({
      selectedValue: value,
      showDropSearch: false,
      activeOption: value
    });
  }

  handleOptionMouseEnter(value) {
    this.setState({
      activeOption: value
    });
  }

  getOptions() {
    const optionsMapping = {
      tcwlw_width: ['205', '70', '80', '90'],
      tcwlw_height: ['55', '56', '120'],
      tcwlw_rim: ['16', '17', '220'],
      tcwlw_seasonId: ['200', '210', '220'],
      tcwlw_speedRating: ['200', '210', '220'],
      // Add more mappings as needed
    };

    const { id } = this.props;
    return optionsMapping[id] || optionsMapping.tcwlw_width;
  }

  render() {
    const { showDropSearch, selectedValue, activeOption } = this.state;
    const { id, name } = this.props;
    const options = this.getOptions();

    return (
      <div
        className="tcwlw_select_field tcwlw_custom_select"
        ref={node => { this.dropdownRef = node; }}
      >
        <select
          name={name}
          className=""
          style={{ position: 'relative' }}
          id={id}
          value={selectedValue}
          onChange={() => {}}
        >
          {options.map(value => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
        <div className="tcwlw_select_field_overlay" onClick={this.handleSelectClick}></div>
        <div className="dropsearch" style={{ display: showDropSearch ? 'block' : 'none' }}>
          <div className="tcwlw_select_field_options tcwlw_select_field_options_filterable">
            <input type="search" autoComplete="off" defaultValue="" />
            <ul style={{ maxHeight: '19em' }}>
              {options.map(value => (
                <li
                  key={value}
                  className={activeOption === value ? 'tcwlw_select_field_active_option' : ''}
                  data-tcwlw-value={value}
                  onClick={() => this.handleOptionClick(value)}
                  onMouseEnter={() => this.handleOptionMouseEnter(value)}
                >
                  {value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default CustomDropdown;
