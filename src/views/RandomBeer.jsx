import React, { Component } from 'react';
import NavBar from './../components/NavBar';
import * as BeerApi from './../components/BeerApi';

class SingleBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beer: null,
    };
    //console.log(props.match.params.beerId)
  }

  getBeer() {
    BeerApi.listRandomBeer()
      .then((beer) => this.setState({ beer }))
      .catch((error) => console.log(error));
  }

  componentDidMount() {
    this.getBeer();
  }

  render() {
    const beer = this.state.beer;
    console.log(this.state.beer);
    return (
      <div>
        <NavBar />
        {beer && (
          <div>
            <img src={beer.image_url} alt={beer.name} />
            <h1>{beer.name}</h1>
            <h2>{beer.tagline}</h2>
            <p>{beer.first_brewed} </p>
            <p>{beer.attenuation_level} </p>
            <p>{beer.description} </p>
            <p>{beer.contributed_by} </p>
          </div>
        )}
      </div>
    );
  }
}

export default SingleBeer;
