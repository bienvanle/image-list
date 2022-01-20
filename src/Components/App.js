import React from 'react'
import SearchInput from './Searchinput';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.onSearchSubmit = this.onSearchSubmit.bind(this);
    }

    onSearchSubmit(entry) {
        console.log(entry);
    }
    render() {
        return (
            <div className='ui container' style={{ marginTop: 20 }}>
                <SearchInput onSearchSubmit={this.onSearchSubmit} />
            </div>
        )
    }
}

export default App;