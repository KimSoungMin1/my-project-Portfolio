import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import Project from "./Components/Project";
import TopButton from "./Components/TopButton";
import About from "./Components/About";
function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Project />
      <TopButton />
      <About />
    </div>
  );
}

export default App;
