import React from "react";
import "./App.css";
import { Row } from "./components/Row";
import { Banner } from "./components/Banner"
import { Nav } from "./components/Nav"
import { requests } from "./utils/requests";

export default function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="ActionMovies" fetchUrl={requests.fetchActionMovies} />
      <Row title="ComedyMovies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="HorrorMovies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="RomanceMovies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="DocumentMovies" fetchUrl={requests.fetchDocumentMovies} />
    </div>
  );
};