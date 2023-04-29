import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const EbookCard = ({ book }) => {
  return (
    <div className='pe-3'>
      <Card style={{ width: '10rem' }}>
        <div
          style={{
            position: 'relative',
            paddingTop: '56.25%',
            marginTop: '1rem',
            backgroundImage: `url("https://cdn.discordapp.com/attachments/1095770280229605416/1101689492697530428/pdf-icon.png")`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        >
        </div>
        <Card.Body>
          <Card.Text style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {book?.originalName}
          </Card.Text>
          <div className='d-flex justify-content-between'>
            <Button variant="primary" className='px-3'>
              Open
            </Button>
            <Button variant="primary">
              <i className="bi bi-download"></i>
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default EbookCard;
