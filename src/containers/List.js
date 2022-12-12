import React, {Component} from "react";
import Card from "./Card/Card";
import {fs} from 'fs';

class List extends Component{

    constructor(){
        super()
        this.state = {
            data: [],
            loading: true,
        }
    }

    async componentDidMount(){
        // console.log(`Directory name: ${path.join(__dirname, '../../assets/data.json')}`)

        const movies = await fs('../assets/data.json')
        const moviesJSON = await movies.json()
        console.log(moviesJSON)
        if(moviesJSON){
            this.setState({
                data: moviesJSON,
                loading: false
            })
        }
    }

    render(){
        // return <Card />
        const {data, loading} = this.state
        if(loading) return <h1>Loading...</h1>
        return data.map( movie => <Card key = {movie.id} movie = {movie}/>)
    }
}

export default List;