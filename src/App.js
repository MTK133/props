import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import { Hero } from './Components/Hero';
import CardList from './Components/CardList';
import Card from './Components/Card';
function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <CardList />
      <Card />
      <Card data={{
        title: 'Mohamed',
        date: '12/52/89'
      }}
      />
    </>

  );
}

export default App;
