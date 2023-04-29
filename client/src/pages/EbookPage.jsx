import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchEbooks } from '../store/actions/actionEbook';
import EbookCard from '../components/EbookCard';
import UploadModal from '../components/UploadModal';
import Button from 'react-bootstrap/Button';

const EbookPage = () => {
  const [uploadModal, setUploadModal] = useState(false);
  const dispatch = useDispatch();
  const { ebooks } = useSelector(state => state.ebooks);

  useEffect(() => {
    dispatch(fetchEbooks());
  }, [])

  return (
    <div className='container mt-3'>
      <div className='d-flex justify-content-between align-items-center'>
        <h1>Ebook</h1>
        <Button variant="primary" type="button" className='h-100' onClick={() => setUploadModal(true)}>
          Upload
        </Button>
      </div>
      <div className='d-flex mt-3'>
        {
          ebooks?.map(book => (
            <EbookCard key={book.id} book={book} />
          ))
        }
      </div>
      <UploadModal
        show={uploadModal}
        onHide={() => setUploadModal(false)}
      />
    </div>
  )
}

export default EbookPage
