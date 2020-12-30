
import './App.css';
import Row from './Components/Row';
import requests from './requests';
import Banner from './Components/Banner';
import Nav from './Components/Nav';


function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />


      <Row title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}

      />
      <Row title="TRENDING" fetchUrl={requests.fetchTrending} />
      <Row title="TOP RATED" fetchUrl={requests.fetchToprated} />
      <Row title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies} />
      <Row title="HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="DOCUMENTARIES" fetchUrl={requests.fetchDocumentaries} />
      <Row title="ROMANTIC MOVIES" fetchUrl={requests.fetchRomanticMovies} />
    </div>
  );
}

export default App;





