import React from 'react';
import ReactModal from 'react-modal';

import logo from '../../assets/validationPoint.svg';

import './styles.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    border: 0,
    background: '#0E0A14',
    opacity: 0.95
  },
  overlay: {
    zIndex: 1000,
    background: '#0E0A14',
    opacity: 0.95
  },
};

interface Props {
  show: boolean;
}

ReactModal.setAppElement('body');

const ValidationModal: React.FC<Props> = ({ show = false }) => {
  return (
    <div>
      <ReactModal
        isOpen={show}
        contentLabel='Minimal Modal Example'
        style={customStyles}
      >
        <div className='success-message'>
            <img src={logo} alt=''/>
          <p>Cadastro concluído!</p>
        </div>
      </ReactModal>
    </div>
  );
};

export default ValidationModal;
