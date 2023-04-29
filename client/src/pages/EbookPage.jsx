import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchEbooks } from '../store/actions/actionEbook';
import EbookCard from '../components/EbookCard';

const EbookPage = () => {
  const dispatch = useDispatch();
  const { ebooks } = useSelector(state => state.ebooks);

  useEffect(() => {
    dispatch(fetchEbooks());
  }, [])

  return (
    <div className='container mt-3'>
      <h1>Ebook</h1>
      <div className='d-flex mt-3'>
        {
          ebooks?.map(book => (
            <EbookCard key={book.id} book={book} />
          ))
        }
      </div>
    </div>
  )
}

export default EbookPage
