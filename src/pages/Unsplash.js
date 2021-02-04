import React, { Component } from 'react'
import api_unsplash from '../api/api_unsplash'
import ModalBox from '../components/ModalsBox'

class Unsplash extends Component {
    constructor(props) {
        super(props)

        this.state = {
            results: [],
            photo: '',
            modal: false,
            
        }
    }

    

    toggle = () => {
        this.setState({ modal: !this.state.modal })
    }

    handleChange = (event) => {
        this.setState({ photo: event.target.value })
    }

    handleSearch = (keyword) => {
        api_unsplash
            .get('search/photos', {
                params: { query: keyword }
            })
            .then(response => {
                console.log(response)
                if (response.data.total === 0) {
                    console.log(response)
                    this.setState({ modal: !this.state.modal })
                } else {
                    this.setState({ results: response.data.results })
                }
            })
            .catch(error => {
                console.log(error)
            })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.handleSearch(this.state.photo)
    }

    render() {
        return (
            <div className="container">
                <h1>Unsplash</h1>
                <div className="form-group" handleSearch={this.handlerSearch}>
                    <form className="row" onSubmit={this.handleSubmit}>
                        <input onChange={this.handleChange} value={this.state.photo} type="text" className="form-control col-md-5" placeholder="Search..."></input>
                        {/* <button onClick={this.handleSubmit} type="button" className="btn btn-primary col-md-1">Search</button> */}
                    </form>
                </div>
                <div>
                    {this.state.results.map((result) =>
                        <img src={result.urls.small} alt="image" style={{ width: '200px' }} />
                    )}
                </div>
                
                <ModalBox modal={this.state.modal} toggle={this.toggle} message="Image not found!"/>
            </div>
        )
    }
}

export default Unsplash
