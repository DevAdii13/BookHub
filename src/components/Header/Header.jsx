import React from "react";
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className="holder">
      <header className="header">
        <Navbar />
        <div className="header-content flex flex-c text-center text-white">
          <h2 className="header-title text-capitalize">
            find your book of choice.
          </h2>
          <br />
          <p className="header-text fs-18 fw-3">
            Your gateway to endless stories — explore, read, and track your
            favorite books.Discover new books and organize your personal
            library with ease.A digital bookshelf built just for you — start
            your reading adventure today!" "Connect with stories that inspire
            and track your reading journey effortlessly.Unleash your inner
            bookworm with a personalized reading experience.
          </p>
          <SearchForm />
        </div>
      </header>
    </div>
  );
};

export default Header;
