import React from "react";
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="section-title">
          <h2>About</h2>
        </div>

        <div className="about-content grid">
          <div className="about-img">
            <img src={aboutImg} alt="" />
          </div>
          <div className="about-text">
            <h2 className="about-title fs-26 ls-1">About BookHub</h2>
            <p className="fs-17">
              Welcome to BookHub, your ultimate companion for discovering,
              reading, and organizing books effortlessly. Whether you’re an avid
              reader, a casual explorer, or someone looking to track their
              reading journey, BookHub offers an intuitive and engaging
              experience tailored just for you. With a vast collection of books
              across multiple genres, BookHub makes it easy to find your next
              favorite read. Our powerful search and recommendation system helps
              you explore new titles, while personalized book suggestions ensure
              you always have something exciting to dive into. You can create
              and manage your own bookshelves, track your reading progress, and
              even bookmark your favorite passages for future reference.
            </p>
            <p className="fs-17">
              BookHub is designed with simplicity and usability in mind. Our
              clean and user-friendly interface allows for seamless navigation,
              making it convenient to browse, organize, and enjoy your books
              anytime, anywhere. Whether you prefer fiction, non-fiction,
              mystery, fantasy, or self-improvement, BookHub brings the world of
              literature right to your fingertips. Join our growing community of
              book lovers and embark on a journey filled with knowledge,
              adventure, and inspiration. Start exploring today and make BookHub
              your personal reading companion!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
