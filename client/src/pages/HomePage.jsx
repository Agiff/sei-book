import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCurrentUser } from '../store/actions/actionUser';

const HomePage = () => {
  const { user } = useSelector(state => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [])

  return (
    <div className='container'>
      <h1>Welcome, {user?.role} {user?.name}!</h1>
    </div>
  )
}

export default HomePage
