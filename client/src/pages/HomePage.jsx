import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCurrentUser } from '../store/actions/actionUser';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundImage: "url('https://images.unsplash.com/photo-1456953180671-730de08edaa7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    textAlign: 'center',
    color: 'white',
  },
};

const HomePage = () => {
  const { user } = useSelector(state => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [])

  return (
    <div style={styles.container}>
      <div style={styles.overlay}>
        <div style={styles.content}>
          <h1 className='text-light'>Welcome, {user?.name}!</h1>
          <h5 className='text-light'>You are logged in as {user?.role}</h5>
          <div className='mt-3'>
            <Button variant="primary" type="button" className='me-3' onClick={() => navigate('/ebooks')}>
              E-Book
            </Button>
            <Button variant="primary" type="button" onClick={() => navigate('/ebooks')}>
              Upload
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
