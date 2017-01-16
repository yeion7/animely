import React from 'react';
import nani from 'nani';

import Search from '../components/Search/Search';
import ListItems from '../components/ListItems/ListItems';
import Loading from '../components/Loading/Loading';
import Item from '../components/Item/Item';

nani.init('yeion7-mjuwe', '759gIvnno5QVV1AMMTR');

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
    const url = `${window.location.protocol}//
    ${window.location.host}
    ${window.location.pathname}`;

    window.history.pushState(url, 'Search', `/${text}`);
  }

  fetchAnime() {
    const search = this.state.searchText
    ? `anime/search/${this.state.searchText}`
    : 'browse/anime';

    nani.get(search)
      .then((data) => {
        this.setState({
          data,
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
        <ListItems>
          {this.state.data
              .map(item =>
                <Item
                  key={item.id}
                  {...item}
                />,
              )}
        </ListItems>
      </section>
    );
  }
}

export default Home;
