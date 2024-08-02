import { FC } from 'react';
import Modal from 'react-modal';
import Auth from './Auth';
import Film from './Film';

interface ShowModalProps {
    isOpen: boolean;
    onClose: () => void;
    type: 'auth' | 'film';
    trailerYouTubeId?: string;
}

const AuthModal: FC<ShowModalProps> = ({ isOpen, onClose, type, trailerYouTubeId = '' }) => {
  Modal.setAppElement('#root');
  return (
    <Modal
      id='modal'
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName="modal-overlay" 
      className="modal py-16 md:px-10 bg-[var(--whiteCustom)] dark:bg-[var(--blackCustom)] w-auto h-auto"
      shouldCloseOnOverlayClick={false}
      shouldCloseOnEsc={false}
      style={{content: {
        position: 'fixed',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        // padding: '64px 40px',
        borderRadius: '24px',
        transform: 'translate(-50%, -50%)',
        zIndex: 9999,
      }}}
    >
      {type === 'auth' ? <Auth btnClose={onClose} /> : type === 'film' ? <Film btnClose={onClose} trailerYouTubeId={trailerYouTubeId} /> : null}
    </Modal>
  );
};

export default AuthModal