import React from 'react';
import Modal from 'react-bootstrap/Modal';

const PdfPreviewModal = (props) => {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      fullscreen
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Sei-Ebook
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div id='pdf-div'></div>
      </Modal.Body>
    </Modal>
  )
}

export default PdfPreviewModal