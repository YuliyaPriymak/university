import React, {Component} from 'react';
import './App.css';
import Forma from "./components/Forma/Forma";
import TableUniversity from "./components/TableUniversity/TableUniversity";

class App extends Component {

    state = {
        university: [],
        country: '',
        isLoad: false
    }
    onInputChange = (e) => {
        this.setState({country: e.target.value});
    }
    onSearchUniversity = (e) => {
        e.preventDefault();
        fetch(`http://universities.hipolabs.com/search?country=${this.state.country}`)
            .then(res => res.json())
            .then(json => {
                this.setState(this.state.university = json)
            });
        this.setState({isLoad: true})
    }
    onReset = (e) => {
        e.preventDefault();
        this.setState({
            country: '',
            university: [],
            isLoad: false
        });

    }

    render() {
        return (
            <div className='wrapper'>
                <Forma
                    country={this.state.country}
                    onInputChange={this.onInputChange}
                    onSearchUniversity={this.onSearchUniversity}
                    onReset={this.onReset}
                />
                {
                    !this.state.university.length && this.state.isLoad && <div>Loading...</div>
                }
                {
                    this.state.university.length > 0 && <TableUniversity country={this.state.country} university={this.state.university}/>
                }
            </div>
        );
    }
}

export default App;
