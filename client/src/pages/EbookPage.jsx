import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchEbooks } from '../store/actions/actionEbook';
import EbookCard from '../components/EbookCard';
import UploadModal from '../components/UploadModal';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { baseUrl } from '../config';
import ViewSDKClient from '../components/ViewSDKClient';
import PdfPreviewModal from '../components/PdfPreviewModal';

const EbookPage = () => {
  const [uploadModal, setUploadModal] = useState(false);
  const [pdfModal, setPdfModal] = useState(false);
  const dispatch = useDispatch();
  const { ebooks } = useSelector(state => state.ebooks);

  useEffect(() => {
    dispatch(fetchEbooks());
  }, [])

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

      annotationManager.registerEventListener(
        event => {
          if (event.type === "ANNOTATION_ADDED") {
            console.log("New annotation created:", event.data);
          } else if (event.type === "ANNOTATIONS_LOADED") {
            console.log("Annotations loaded:", event.data);
          } else if (event.type === "ANNOTATION_UPDATED") {
            console.log("Annotation updated:", event.data);
          } else if (event.type === "ANNOTATION_DELETED") {
            console.log("Annotation deleted:", event.data);
          }
        },
        {
          listenOn: [
            "ANNOTATIONS_LOADED",
            "ANNOTATION_ADDED",
            "ANNOTATION_UPDATED",
            "ANNOTATION_DELETED"
          ]
        }
      );
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
      />
    </div>
  )
}

export default EbookPage
