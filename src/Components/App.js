import React from 'react'
import SearchInput from './Searchinput';
import axios from 'axios';
import ImageList from './ImageList';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            image: []
        }
        this.onSearchSubmit = this.onSearchSubmit.bind(this);
    }

    async onSearchSubmit(entry) {
        const response = await axios.get(`https://pixabay.com/api/?key=25327652-7048e9191eea8c23577dfe04e&q=${entry}&image_type=photo`)
        this.setState({ image: response.data.hits })
    }
    render() {
        const { image } = this.state;
        return (
            <div className='ui container' style={{ marginTop: 20 }}>
                <SearchInput onSearchSubmit={this.onSearchSubmit} />
                <ImageList image={image} />
            </div>
        )
    }
}

export default App;