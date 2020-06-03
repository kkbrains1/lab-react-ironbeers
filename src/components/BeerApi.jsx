//import React from 'react'
import axios from 'axios';

const listAllBeers = () => {
  return new Promise((resolve, reject) => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((result) => {
        //console.log(result.data);
        const allBeers = result.data;
        resolve(allBeers);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const listSingleBeer = (beerId) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((result) => {
        //console.log(result.data);
        const beer = result.data;
        resolve(beer);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const listRandomBeer = () => {
  return new Promise((resolve, reject) => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then((result) => {
        //console.log(result.data);
        const beer = result.data;
        resolve(beer);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export { listAllBeers, listSingleBeer, listRandomBeer };
