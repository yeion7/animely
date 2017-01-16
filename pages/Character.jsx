import React, { PropTypes } from 'react';
import nani from 'nani';

import CharacterData from '../components/CharacterData/CharacterData';
import Loading from '../components/Loading/Loading';

const style = {
  textAlign: 'center',
};

class Serie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      loading: true,
    };
  }

  componentDidMount() {
    const url = `character/${this.props.params.id}`;
    nani.get(url)
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
        throw new Error('Fail feaching data serie');
      });
  }

  render() {
    return (
      <section name="Serie">
        {this.state.loading
          ? (<Loading />)
          : (
            <div className="Serie-container">
              <h1 className="Serie title" style={style}>
                {`${this.state.data.name_first} ${this.state.data.name_last}`}
              </h1>
              <CharacterData {...this.state.data} />
            </div>
          )
          }
      </section>
    );
  }
}

Serie.propTypes = {
  params: PropTypes.shape({
    id: PropTypes.string,
  }),
};

export default Serie;
