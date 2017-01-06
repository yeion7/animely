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
      anime: [],
      manga: [],
      characters: [],
      page: 1,
      loading: true,
    };
  }
  componentDidMount() {
    api.get('browse/anime')
      .then((data) => {
        this.setState({
          anime: this.state.anime.concat(data),
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
        <Search />
        {this.state.loading && (<Loading />)}
        <ListItems items={this.state.anime} />
      </section>
    );
  }
}

export default Home;
