import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchEbookDetail, fetchEbooks } from '../store/actions/actionEbook';
import EbookCard from '../components/EbookCard';
import UploadModal from '../components/UploadModal';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { baseUrl } from '../config';
import ViewSDKClient from '../components/ViewSDKClient';
import PdfPreviewModal from '../components/PdfPreviewModal';

const EbookPage = () => {
  const [annotationManagerState, setAnnotationManagerState] = useState(null);
  const [ebookId, setEbookId] = useState(null);
  const [uploadModal, setUploadModal] = useState(false);
  const [pdfModal, setPdfModal] = useState(false);
  const dispatch = useDispatch();
  const { ebooks } = useSelector(state => state.ebooks);

  useEffect(() => {
    dispatch(fetchEbooks());
  }, [])

  const saveAnnotation = async () => {
    try {
      const result = await annotationManagerState.getAnnotations();
      const annotations = {
        data: JSON.stringify(result),
        EbookId: ebookId
      }
      await axios.post(`${baseUrl}/annotations/`, annotations, {
        headers: {
          access_token: localStorage.access_token
        }
      });
      setPdfModal(false);
    } catch (error) {
      console.log(error);
    }
  }

  const handleOpenPDF = async (book) => {
    try {
      const { data } = await axios.get(`${baseUrl}/ebooks/download/${book.id}`, {
        responseType: 'blob',
        headers: {
          access_token: localStorage.access_token
        }
      });
      const file = new Blob([data]);
      const filePromise = Promise.resolve(file.arrayBuffer());
      const viewSDKClient = new ViewSDKClient();
      await viewSDKClient.ready();
      const adobeViewer = await viewSDKClient.previewFileUsingFilePromise('pdf-div', filePromise, book.originalName, book.fileName, {
        enableAnnotationAPIs: true,
      });
      const annotationManager = await adobeViewer.getAnnotationManager();
      setAnnotationManagerState(annotationManager);
      setEbookId(book.id);

      dispatch(fetchEbookDetail(book.id))
        .then(ebook => {
          if (ebook.Annotation) {
            const annotations = JSON.parse(ebook.Annotation.data);
            annotationManager.addAnnotations(annotations)
              .then(() => {
                console.log("Annotations added through API successfully");
              })
              .catch(error => {
                console.log(error);
              });
          }
        })
  
    } catch (error) {
      console.log(error);
    }
  }

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
            <EbookCard key={book.id} book={book} handleOpenPDF={handleOpenPDF} setPdfModal={setPdfModal} />
          ))
        }
      </div>
      <UploadModal
        show={uploadModal}
        onHide={() => setUploadModal(false)}
      />
      <PdfPreviewModal
        show={pdfModal}
        onHide={() => setPdfModal(false)}
        saveAnnotation={saveAnnotation}
      />
    </div>
  )
}

export default EbookPage
