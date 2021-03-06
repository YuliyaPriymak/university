import React, {Component} from 'react';
import './Forma.scss'

class Forma extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {onInputChange, onReset, country, onSearchUniversity} = this.props;
        return (
            <div className='container mb-3 input-group'>
                <input type="text" className='form-control' placeholder='enter country' value={country}
                       onChange={onInputChange}/>
                <div>
                    <button className='btn btn-outline-secondary' onClick={onSearchUniversity}>send</button>
                    <button className='btn btn-outline-secondary' onClick={onReset}>reset</button>
                </div>
            </div>
        );
    }
}

export default Forma;