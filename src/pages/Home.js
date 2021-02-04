import React, { Component } from 'react'
import axios from 'axios'
import MemberCard from '../components/MemberCard'
import ModalBox from '../components/ModalsBox'

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            members: [],
            id: null,
            modal: false
        }
    }

    handleChange = (event) => {
        this.setState({ id: event.target.value })
    }

    toggle = () => {
        this.setState({ modal: !this.state.modal })
    }

    handleSearch = (keyword) => {
        axios.get(`https://reqres.in/api/users/${keyword}`)
            .then(response => {
                this.setState({ members: response.data.data })
                console.log(response)
            })
            .catch(error => {
                console.log(error)
                this.setState({ modal: !this.state.modal })
            })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.handleSearch(this.state.id)
    }


    render() {
        return (
            <div className="container">
                <h1>Home</h1>
                <div className="form-group" handleSearch={this.handleSearch}>
                    <form className="row" onSubmit={this.handleSubmit}>
                        <input onChange={this.handleChange} value={this.state.id} type="text" className="form-control col-md-5" placeholder="Search id..." />
                        {/* <button onClick={this.handleSubmit} type="button" className="btn btn-primary col-md-1">Search</button> */}
                    </form>
                </div>
                <div>
                    <div className="row">
                        <MemberCard 
                            avatar={this.state.members.avatar} 
                            id={this.state.members.id} 
                            first_name={this.state.members.first_name} 
                            last_name={this.state.members.last_name} 
                            email={this.state.members.email} />
                    </div>
                </div>

                <ModalBox 
                    modal={this.state.modal} 
                    toggle={this.toggle} 
                    message="Id not found! Only range from 1-12" />

            </div>
        )
    }
}

export default Home
