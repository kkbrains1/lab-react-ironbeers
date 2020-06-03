import React, { Component } from 'react';
import * as BeerApi from './../components/BeerApi';
import NavBar from './../components/NavBar';
import { Link } from 'react-router-dom';

class AllBeers extends Component {
  constructor() {
    super();
    this.state = {
      allBeers: [],
    };
  }

  componentDidMount() {
    this.getAllBeers();
  }

  getAllBeers() {
    BeerApi
      .listAllBeers()
      .then((allBeers) => this.setState({ allBeers }))
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div>
        <NavBar />
        <h1>I am all the beers</h1>
        <ul>
          {this.state.allBeers.map((beer) => (
            <>
              <li key={beer._id}>
                <Link to={`/beers/${beer._id}`}> {beer.name} </Link>
                <img src={beer.image_url} alt={beer.name} width="60px" />
                <p>{beer.tagline}</p>
                <sub>
                  <strong>Created by: </strong>
                  {beer.contributed_by}
                </sub>
                <br />
              </li>
            </>
          ))}
        </ul>
      </div>
    );
  }
}

export default AllBeers;
