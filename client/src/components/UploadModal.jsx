import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { baseUrl } from '../config';
import { useDispatch } from 'react-redux';
import { fetchEbooks } from '../store/actions/actionEbook';

const UploadModal = (props) => {
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('file', file);
      const { data } = await axios.post(`${baseUrl}/ebooks/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          access_token: localStorage.access_token
        }
      });
      dispatch(fetchEbooks());
      console.log(data);
    } catch (error) {
      console.log(error.response.data.message);
    }

    props.onHide();
  };

  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Upload E-Book
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Control type="file" onChange={handleFileChange} />
          </Form.Group>
          <div className='d-flex justify-content-center my-3'>
            <Button variant="primary" type="submit" className='w-100'>
              Upload
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  )
}

export default UploadModal