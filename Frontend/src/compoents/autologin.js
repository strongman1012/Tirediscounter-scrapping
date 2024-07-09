import React, { Component } from 'react';

class SearchProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      searchResults: [],
      loading: false,
    };

    this.UserName = '10340';
    this.Password = 'autotires';

    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async handleSearch() {
    this.setState({ loading: true });
    const { searchTerm } = this.state;
    try {
      const response = await fetch('http://localhost:8000/search-products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          UserName: this.UserName,
          Password: this.Password,
          searchTerm,
        }),
      });
      const data = await response.json();
      console.log(data.results);
      if (data.success) {
        this.setState({ searchResults: data.results });
      } else {
        console.error('Search failed', data.error);
        // Handle search failure (e.g., show error message)
      }
    } catch (error) {
      console.error('Error during search', error);
      // Handle network or server error
    } finally {
      this.setState({ loading: false });
    }
  }

  handleChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    const { searchTerm, searchResults, loading } = this.state;

    return (
      <div>
        <input
          type="text"
          placeholder="Enter search term"
          value={searchTerm}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSearch} disabled={loading}>
          Search
        </button>
        {loading && <p>Loading...</p>}
        {searchResults.length > 0 && (
          <ul>
            {searchResults.map((result, index) => (
              <li key={index}>{result}</li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default SearchProducts;
