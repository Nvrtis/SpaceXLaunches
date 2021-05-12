import Article from "./Components/Article/Article";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Article />
      <Footer />
      <div className="spacer"></div>
    </div>
  );
}
