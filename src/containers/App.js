import React, { useEffect } from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import  './App.css'

import { requestRobots, setSearchField } from '../actions'
import { connect } from 'react-redux'


const mapStateToProps = (state) => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: event => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots()),
    }
}

const App = (props) => {
    
    useEffect(() => {
        props.onRequestRobots()
     },[])
    
    const filteredRobots = props.robots.filter( r => r.name.toLowerCase().includes(props.searchField.toLowerCase()))
    if (props.isPending){
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