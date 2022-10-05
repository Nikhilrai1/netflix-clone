import React from 'react'
import Banner from '../components/banner/Banner'
import Navbar from '../components/navbar/Navbar'
import Row from '../components/row/Row'
import './HomeScreen.css'
import requests from '../api/request'

const HomeScreen = () => {
  return (
    <div className='homeScreen'>
      <Navbar />
      <Banner />
      <Row
        title={"NETFLIX ORIGINALS"}
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row
        title={"Trending Now"}
        fetchUrl={requests.fetchTrending}
      />
      <Row
        title={"Top Rated"}
        fetchUrl={requests.fetchTopRated}
      />
      <Row
        title={"Action Movies"}
        fetchUrl={requests.fetchActionMovies}
      />
      <Row
        title={"Comedy Movies"}
        fetchUrl={requests.fetchComedyMovies}
      />
      <Row
        title={"Horror Movies"}
        fetchUrl={requests.fetchHorrorMovies}
      />
      <Row
        title={"Romance Movies"}
        fetchUrl={requests.fetchRomanceMovies}
      />
      <Row
        title={"Documentaries"}
        fetchUrl={requests.fetchDocumentaries}
      />

    </div>
  )
}

export default HomeScreen