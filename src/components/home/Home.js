import React from 'react';
import { useUserContext } from '../../context/userContext';
const Home = () => {
  const {user} = useUserContext();
  console.log(user)
  return (
    <>
      {
        user&&(
          <div className='dashboard__cont'>
            <h2>Hi {user.data.name}</h2>
          </div>
        )
      }
    </>
  )
}

export default Home;