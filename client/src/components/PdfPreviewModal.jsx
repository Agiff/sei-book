import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const PdfPreviewModal = ({ show, onHide, saveAnnotation }) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      fullscreen
    >
      <Modal.Header>
        <div className='d-flex w-100 justify-content-between'>
          <Modal.Title id="contained-modal-title-vcenter">
            Sei-Ebook
          </Modal.Title>
          <div>
            <Button className='me-3' variant="primary" type="submit" onClick={saveAnnotation}>
              Save
            </Button>
            <Button variant="secondary" type="submit" onClick={onHide}>
              Back
            </Button>
          </div>
        </div>
      </Modal.Header>
      <Modal.Body>
        <div id='pdf-div'></div>
      </Modal.Body>
    </Modal>
  )
}

export default PdfPreviewModal