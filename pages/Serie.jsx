import React, { PropTypes } from 'react';
import nani from 'nani';

import SerieData from '../components/SerieData/SerieData';
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
    const url = `anime/${this.props.params.id}/characters`;
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
        <h1 className="Serie title" style={style}>
          {this.state.data.title_english}
        </h1>
        <div className="Serie-container">
          {this.state.loading
          ? (<Loading />)
          : (<SerieData {...this.state.data} />)
          }
        </div>
      </section>
    );
  }
}

Serie.propTypes = {
  params: PropTypes.shape({
    id: PropTypes.number,
  }),
};

export default Serie;
