import Body from "./components/Body";
import Header from "./components/Header";
import Article from "./components/Article";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Body />
        <Article />
      </main>
      <Footer />
    </div>
  );
}

export default App;
