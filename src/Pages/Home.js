import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import Search from "../Components/Search";
function Home() {
  return (
    <div className="home">
      {/* header */}
      <div className="home__header">
        <div className="home__headerLeft">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>
        <div className="home__headerRight">
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
          <AppsIcon />
          <Avatar />
          {/* Avatar */}
        </div>
      </div>
      {/* body */}
      <div className="home__body">
        <img
          src="https://pngimg.com/uploads/google/google_PNG19644.png"
          alt="logo"
        />
        <div className="home__inputContainer">
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Home;

// Created using the https://cse.google.com/cse/new
// Get your apikey from  https://developers.google.com/custom-search/v1/using_rest
