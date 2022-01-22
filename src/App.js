import "bootstrap/scss/bootstrap.scss"
import './App.scss';
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import ContentContainer from "./components/ContentContainer/ContentContainer";

function App() {
    return (
        <div className="App">
            <Header />
            <Navigation />
            <ContentContainer />
        </div>
    );
}

export default App;