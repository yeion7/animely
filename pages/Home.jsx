import React from 'react';
import { nani as api } from 'nani';

import Search from '../components/Search/Search';
import ListItems from '../components/ListItems/ListItems';
import Loading from '../components/Loading/Loading';

api.init('yeion7-mjuwe', '759gIvnno5QVV1AMMTR');

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      data: [],
      loading: true,
    };

    this.handleUserInput = this.handleUserInput.bind(this);
    this.fetchAnime = this.fetchAnime.bind(this);
  }

  componentDidMount() {
    this.fetchAnime(this.state.searchText);
  }

  handleUserInput(text) {
    this.setState({
      searchText: text,
    });
  }

  fetchAnime(text) {
    const search = text ? `anime/search/${text}` : 'browse/anime';
    api.get(search)
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
        throw new Error('Failing Feaching Fata');
      });
  }

  render() {
    return (
      <section name="Home">
        <Search
          onUserInput={this.handleUserInput}
          text={this.state.searchText}
          fetch={this.fetchAnime}
        />
        {this.state.loading && (<Loading />)}
        <ListItems items={this.state.data} />
      </section>
    );
  }
}

export default Home;
