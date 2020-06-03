import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>I am the Home page</h1>
      <img
        src="https://source.unsplash.com/random/?beers"
        alt="Random beers from Unsplash"
        width="600px"
      />
      <Link to="/beers" >All Beers</Link>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate,
        minima magni. Itaque eveniet alias praesentium voluptate ratione ea
        aperiam, iure, dolor officiis sit saepe aliquid quos a aut. Perferendis,
        nulla?
      </p>
      <img
        src="https://source.unsplash.com/random/?draught,beer"
        alt="Random draught beer from Unsplash"
        width="600px"
      />
      <Link to="/random-beer" >Random Beer</Link>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur eum
        quaerat ex aliquam non aut, deserunt modi! Iure doloribus voluptatem
        corrupti rem eaque quis fuga dolorum cumque! Modi, similique odit.
      </p>
      <img
        src="https://source.unsplash.com/random/?IPA,beer"
        alt="Random IPA from Unsplash"
        width="600px"
      />
      <Link to="/new-beer" >New Beer</Link>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, laborum!
        Ab omnis minima labore voluptas doloribus unde et obcaecati porro
        officiis consequatur, eligendi fugit iste, sit qui minus dolore
        quibusdam.
      </p>
    </div>
  );
};

export default Home;
