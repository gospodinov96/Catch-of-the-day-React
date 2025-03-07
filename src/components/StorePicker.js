import React from 'react';
import PropTypes from 'prop-types';
import { getFunName } from '../helpers';


class StorePicker extends React.Component { 
    static propTypes = {
        history: PropTypes.object
    };
    
    myInput = React.createRef();

    goToStore = event => {
        // 1. Stop Form from Submitting
        event.preventDefault();

        // 2. get the text from the input
        const storeName = this.myInput.current.value;
        // console.log(this.myInput.current.value);

        // 3. Change the page to /store/whatever-they-entered
        this.props.history.push(`/store/${storeName}`);

    };

    render() {
        return (
        <form className='store-selector' onSubmit={this.goToStore}>
            <h2>Please Enter a Store</h2>
            <input 
                type='text' 
                ref={this.myInput} 
                required 
                placeholder='Store Name' 
                defaultValue={getFunName()}
            />
            <button type='submit'>Visit Store</button>
        </form>
        );
    }
}

export default StorePicker;