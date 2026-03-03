import React from 'react';
import PropTypes from 'prop-types';

export default function Topic({ downloadUrl, downloadText }) {
  return (
    <div className="topicHeader" style={{ marginBottom: '1rem' }}>
      {downloadUrl && (
        <a
          href={downloadUrl}
          download
          style={{
            display: 'inline-block',
            padding: '0.5rem 1rem',
            backgroundColor: '#0070f3',
            color: '#fff',
            textDecoration: 'none',
            borderRadius: '5px',
            transition: 'background-color 0.2s',
          }}
          onMouseOver={e => (e.currentTarget.style.backgroundColor = '#005bb5')}
          onMouseOut={e => (e.currentTarget.style.backgroundColor = '#0070f3')}
        >
          {downloadText || 'Descargar'}
        </a>
      )}
    </div>
  );
}

Topic.propTypes = {
  downloadUrl: PropTypes.string,
  downloadText: PropTypes.string,
};