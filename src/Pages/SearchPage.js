import React from "react";
import { useStateValue } from "../Reducers/StateProvider";
import useGoogleSearch from "../DataFetching/useGoogleSearch";
import { Link } from "react-router-dom";
import "./SearchPage.css";
import Search from "../Components/Search";
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Loader from "react-loader-spinner";
function SearchPage() {
  const [{ term }] = useStateValue();
  const { data } = useGoogleSearch(term);
  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img
            className="searchPage__logo"
            src="https://pngimg.com/uploads/google/google_PNG19644.png"
            alt="search_logo"
          />
        </Link>
        <div className="searchPage__headerBody">
          <Search hideButtons />
          <div className="searchPage__options">
            <div className="searchPage__optionsLeft">
              <div className="searchPage__option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="searchPage__option">
                <DescriptionIcon />
                <Link to="/news">News</Link>
              </div>
              <div className="searchPage__option">
                <ImageIcon />
                <Link to="/images">Images</Link>
              </div>
              <div className="searchPage__option">
                <LocalOfferIcon />
                <Link to="/shopping">Shopping</Link>
              </div>
              <div className="searchPage__option">
                <RoomIcon />
                <Link to="/maps">Maps</Link>
              </div>
              <div className="searchPage__option">
                <MoreVertIcon />
                <Link to="/more">More</Link>
              </div>
            </div>
            <div className="searchPage__optionsRight">
              <div className="searchPage__option">
                <Link to="/settings">Settings</Link>
              </div>
              <div className="searchPage__option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {term && (
        <div className="searchPage__results">
          <p className="searchPage__resultCount">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds) for {term}
          </p>

          {data ? (
            data.items.map((item, index) => {
              return (
                <div key={index} className="searchPage__result">
                  <a href={item.link}>
                    {item.pagemap?.cse_image?.length ? (
                      <img
                        className="searchPage__resultImage"
                        src={item.pagemap?.cse_image[0]?.src}
                        alt="img"
                      />
                    ) : null}
                    {item.displayLink}
                  </a>
                  <a className="searchPage__resultTitle" href={item.link}>
                    <h1>{item.title}</h1>
                  </a>
                  <p className="searchPage__resultSnippet">{item.snippet}</p>
                </div>
              );
            })
          ) : (
            <center>
              <Loader
                type="Watch"
                color="#70757a"
                height={200}
                width={200}
                timeout={30000}
              />
            </center>
          )}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
