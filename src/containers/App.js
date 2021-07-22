import React, { useState, useEffect } from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import  './App.css'

import * as actions from '../actions'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        searchField: state.searchField,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: event => dispatch(actions.setSearchField(event.target.value))
    }
}

const App = (props) => {
    const [robotss, setRobotss] = useState([])
    // const [searchField, setSearchField] = useState('')

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {setRobotss(users)})
    },[])

    // const onSearchChange = (event) => {
    //     setSearchField(event.target.value)
    // }
    const filteredRobots = robotss.filter( r => r.name.toLowerCase().includes(props.searchField.toLowerCase()))
    if (!robotss.length){
        return <h1>Loading</h1>
    }
    return (
        <div className='tc'>
            <h1 className='f1'>RoboFriends</h1>
            <SearchBox onSearchChange={props.onSearchChange}/>
            <Scroll>
                <CardList robots = {filteredRobots} />
            </Scroll>
        </div>
        
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(App)