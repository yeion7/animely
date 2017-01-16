import React from 'react';
import nani from 'nani';

import Search from '../components/Search/Search';
import ListItems from '../components/ListItems/ListItems';
import Loading from '../components/Loading/Loading';

const api = nani.init('yeion7-mjuwe', '759gIvnno5QVV1AMMTR');

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      data: [],
      page: 1,
      loading: true,
    };

    this.handleUserInput = this.handleUserInput.bind(this);
    this.fetchSearch = this.fetchSearch.bind(this);
  }

  componentDidMount() {
    api.get('browse/anime')
      .then((data) => {
        this.setState({
          data,
          page: this.state.page + 1,
          loading: false,
        });
      })
      .catch(() => {
        this.setState({
          loading: true,
        });
        throw new Error('Fail feaching data');
      });
  }

  handleUserInput(text) {
    this.setState({
      searchText: text,
    });
  }

  fetchSearch() {
    const text = `anime/search/${this.state.searchText}`;
    api.get(text)
      .then((data) => {
        this.setState({
          data,
          page: this.state.page + 1,
          loading: false,
        });
      })
      .catch(() => {
        this.setState({
          loading: true,
        });
        throw new Error('Fail feaching data');
      });
  }


  render() {
    return (
      <section name="Home">
        <Search
          onUserInput={this.handleUserInput}
          text={this.state.searchText}
          fetch={this.fetchSearch}
        />
        {this.state.loading && (<Loading />)}
        <ListItems items={this.state.data} />
      </section>
    );
  }
}

export default Home;
