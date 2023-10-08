import {BsSearch} from 'react-icons/bs'
import './Search.css'
import { useContext, useEffect, useState } from 'react'
import GithubContext from '../../context/GithubContext'
import axios from 'axios'
import ThemeContext from '../../context/ThemeContext'

const Search = () => {
  const [username, setUsername] = useState('');
  const {setUser, setLoading}  = useContext(GithubContext)
  const {theme} = useContext(ThemeContext)
  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

      const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_AUTH;
const GITHUB_URL  = import.meta.env.VITE_GITHUB_URL;

const github = axios.create({
  baseURL: GITHUB_URL,
  headers: { Authorization: `token ${GITHUB_TOKEN}` },
})

const onSearch = () =>{
   setLoading(true)
 
    github.get(`/${username}`)
    .then((response) =>{
      setUser(response.data);
      // console.log(response.data, 'data')
      setLoading(false);
    }).catch((error) =>{
      console.log('error', error)
      setLoading(false)
    })
    setUsername(' ')
  }

  return (
    <div className="searchContainer" style={theme === 'light'? {background: '#FFFF', boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.2)'}:{backgroundColor: 'hsl(243.66deg 17.89% 29.52%)'} }>
        <div className="textContainer">
        <BsSearch className='searchIcon'/>
        <input
        style={theme === 'light'? {color: 'black'} : {}}
        type='text' 
        placeholder='Search Github Username...' 
        value={username}
        onChange={handleInputChange}
        onKeyDown={(e) => e.key ===  'Enter' && onSearch()}
        required/>
        <button onClick={onSearch}>Search</button>
        </div>
    </div>
  )
}

export default Search