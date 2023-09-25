import './App.css';
import Banner from './Banner';
import Row from './Row';
import requests from './request';
import title from './titles';


function App() {
  return (
    <div className="App">
      <h1>{title.name} </h1>
      <Banner/>
      <Row title={title.name1}  fetchUrl={requests.fetchTrending}/>
      <Row title={title.name2}  fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title={title.name3}  fetchUrl={requests.fetchTopRated}/>
      <Row title={title.name4}  fetchUrl={requests.fetchActionMovies}/>
      <Row title={title.name5}  fetchUrl={requests.fetchComedyMovies}/>
      <Row title={title.name6}  fetchUrl={requests.fetchHorrorMovies}/>
    </div>
  );
}

export default App;
