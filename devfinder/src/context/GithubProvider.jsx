import axios from 'axios';
import {useState, useEffect} from 'react'
import GithubContext from './GithubContext';
// import { Octokit, App } from "octokit";
const GithubProvider = ({children}) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false); // Set initial loading state to false




    
//     const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_AUTH;
// const GITHUB_URL  = import.meta.env.VITE_GITHUB_URL;

// const github = axios.create({
//   baseURL: GITHUB_URL,
//   headers: { Authorization: `token ${GITHUB_TOKEN}` },
// })

// useEffect(() => {
//     setLoading(true);
//     axios
//     .get('https://api.github.com/users')
//     .then((response) => {
//       setUser(response.data);
//       setLoading(false);
//     })
//     .catch((error) => {
//       console.error('Error fetching data:', error);
//       setLoading(false);
//     });
// }, [])

// github.post()

   

return (
  <GithubContext.Provider value={{ user, loading, setUser, setLoading }}>
    {children}
  </GithubContext.Provider>
);

}

export default GithubProvider