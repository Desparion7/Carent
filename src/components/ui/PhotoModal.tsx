import { FaWindowClose } from 'react-icons/fa';
import { useState, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';
import styles from './PhotoModal.module.scss';

interface ModalPropsType {
  img: string[] | undefined;
  imgN: number;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setPhotoNumber: React.Dispatch<React.SetStateAction<number>>;
}

export const Backdrop = () => {
  return <div className={styles.backdrop} />;
};

const Popup = ({ img, imgN, setShowModal, setPhotoNumber }: ModalPropsType) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleNextImg = useCallback(() => {
    const imgLength = img?.length as number;
    if (imgN === imgLength - 1) {
      setPhotoNumber(1);
    } else {
      setPhotoNumber(imgN + 1);
    }
  }, [img, imgN, setPhotoNumber]);

  const handlePrevImg = useCallback(() => {
    const imgLength = img?.length as number;
    if (imgN === 1 && img) {
      setPhotoNumber(imgLength - 1);
    } else {
      setPhotoNumber(imgN - 1);
    }
  }, [img, imgN, setPhotoNumber]);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setShowModal(false);
      } else if (event.key === 'ArrowRight') {
        handleNextImg();
      } else if (event.key === 'ArrowLeft') {
        handlePrevImg();
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [setShowModal, handleNextImg, handlePrevImg]);

  useEffect(() => {
    const handleOrientationChange = () => {
      const isLandscape = window.matchMedia('(orientation: landscape)').matches;
      setIsFullscreen(isLandscape);
    };

    window.addEventListener('orientationchange', handleOrientationChange);

    return () => {
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, []);

  return (
    <div className={styles.popup}>
      <button
        type="button"
        className={styles.popup__close}
        onClick={() => {
          setShowModal(false);
        }}
      >
        <FaWindowClose />
      </button>
      <button
        type="button"
        className={styles.popup__next}
        onClick={handleNextImg}
      >
        &rarr;
      </button>
      <button
        type="button"
        className={styles.popup__prev}
        onClick={handlePrevImg}
      >
        &larr;
      </button>
      {img && !isFullscreen && <img src={img[imgN]} alt="car" />}
      {isFullscreen && img && (
        <div className="fullscreen-overlay">
          <img src={img[imgN]} alt="car" className="fullscreen-image" />
        </div>
      )}
    </div>
  );
};

const PhotoModal = ({
  img,
  imgN,
  setShowModal,
  setPhotoNumber,
}: ModalPropsType) => {
  const backdropRoot = document.getElementById('backdrop-root');
  const popupRoot = document.getElementById('popup-root');
  return (
    <div className={styles.modal}>
      {backdropRoot && ReactDOM.createPortal(<Backdrop />, backdropRoot)}
      {popupRoot &&
        ReactDOM.createPortal(
          <Popup
            img={img}
            imgN={imgN}
            setShowModal={setShowModal}
            setPhotoNumber={setPhotoNumber}
          />,
          popupRoot
        )}
    </div>
  );
};

export default PhotoModal;
