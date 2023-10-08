import './Info.css'
import {IoLocationSharp} from 'react-icons/io5'
import {FiExternalLink} from 'react-icons/fi'
import {AiOutlineTwitter} from 'react-icons/ai'

import GithubContext from '../../context/GithubContext'
import { useContext } from 'react'
import ThemeContext from '../../context/ThemeContext'


function formatDate(originalDate) {
  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  // Parse the original date string
  const parsedDate = new Date(originalDate);

  // Get the day, month, and year
  const day = parsedDate.getUTCDate();
  const month = months[parsedDate.getUTCMonth()];
  const year = parsedDate.getUTCFullYear();

  // Format the date
  const formattedDate = `Joined ${day} ${month} ${year}`;

  return formattedDate;
}


const Info = () => {
  const {user, loading} = useContext(GithubContext)
  const {theme} = useContext(ThemeContext)
  console.log(user?.created_at, 'created at')
  if(loading){
    return(
      <>
      loading....
      </>
    )
  }
  return (
    <div className="container" style={theme === 'light'? {background: '#FFFF', boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.2)'}:{backgroundColor: 'hsl(243.66deg 17.89% 29.52%)'} }>
     { user ?  <div className="infoContainer">
        <img src={user?.avatar_url}/>
       

            <div className="userInfo" >
            <h1>{user?.name}</h1>
            <h2 style={theme === 'light' ? {color: '#6db7e9'} : {}}>{user?.login}</h2>
            <p>{user?.bio}</p>
            <div className={`userContainer ${theme === 'light' ? 'lightRepo': 'darkRepo'}`}>
            <div className="user">
              <div>Repos</div>
              <div>{user?.public_repos}</div>
            </div>
            <div className="user">
              <div>Followers</div>
              <div>{user?.followers}</div>
            </div>
            <div className="user">
              <div>Following</div>
              <div>{user?.following}</div>
            </div>

          
            </div>
            <div className="social">
              <div className="location"><IoLocationSharp/>{user?.location || "Location"}</div>
              <div className="tiwtter"><AiOutlineTwitter/>{user?.twitter_username}</div>
              <div className="link"><FiExternalLink/><a href={`https://${user?.blog}`} rel='noreferrer' target='_blank'>{user?.blog}</a></div>
              <div className="org">DTC</div>
            </div>
            
            </div>
            <div className="date">{formatDate(user?.created_at)} </div>
        </div> :<div className="infoContainer">
        <img src="https://avatars.githubusercontent.com/u/87796038?v=4"/>
       

            <div className="userInfo">
            <h1>Anas Khan</h1>
            <h2 style={theme === 'light' ? {color: '#6db7e9'} : {}}>anaskhan28</h2>
            <p>Frontend Developer ✨- Open source enthusiast 🌐- Awesome Person ✌️</p>
            <div  className={`userContainer ${theme === 'light' ? 'lightRepo': 'darkRepo'}`}>
            <div className="user">
              <div>Repos</div>
              <div>66</div>
            </div>
            <div className="user">
              <div>Followers</div>
              <div>55</div>
            </div>
            <div className="user">
              <div>Following</div>
              <div>130</div>
            </div>

          
            </div>
            <div className="social">
              <div className="location"><IoLocationSharp/>Location</div>
              <div className="tiwtter"><AiOutlineTwitter/>@anaskhan_28</div>
              <div className="link"><FiExternalLink/>https://github/anaskhn28</div>
              <div className="org">DTC</div>
            </div>
            
            </div>
            <div className="date">Joined 25 Jan 2021</div>
        </div> }
    </div>
  )
}

export default Info