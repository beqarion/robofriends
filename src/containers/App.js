import React, { useState, useEffect } from 'react'
import CardList from '../components/CardList'
import { robots } from '../robots'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import  './App.css'

const App = () => {
    const [robotss, setRobotss] = useState([])
    const [searchField, setSearchField] = useState('')

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {setRobotss(users)})
    },[])

    const onSearchChange = (event) => {
        setSearchField(event.target.value)
    }
    const filteredRobots = robotss.filter( r => r.name.toLowerCase().includes(searchField.toLowerCase()))
    if (!robotss.length){
        return <h1>Loading</h1>
    }
    return (
        <div className='tc'>
            <h1 className='f1'>RoboFriends</h1>
            <SearchBox searchChange={onSearchChange}/>
            <Scroll>
                <CardList robots = {filteredRobots} />
            </Scroll>
            
        </div>
        
    )
}

export default App