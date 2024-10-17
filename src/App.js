import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route exact path="/" component={Home} />
                    <Route path="/projects" component={Projects} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
