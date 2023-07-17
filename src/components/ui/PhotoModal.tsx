import { FaWindowClose } from 'react-icons/fa';
import { useEffect, useCallback, useRef } from 'react';
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

  const handleCloseImg = useCallback(() => {
    setShowModal(false);
    document.body.style.overflow = 'auto';
  }, [setShowModal]);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'Escape':
          handleCloseImg();
          break;
        case 'ArrowRight':
          handleNextImg();
          break;
        case 'ArrowLeft':
          handlePrevImg();
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleNextImg, handlePrevImg, handleCloseImg]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const imageRef = useRef<any>(null);

  const openFullscreen = () => {
    const element = imageRef.current;
    if (element && element.requestFullscreen) {
      element.requestFullscreen();
    }
  };
  return (
    <div className={styles.popup}>
      <button
        type="button"
        className={styles.popup__close}
        onClick={() => {
          handleCloseImg();
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
      {img && (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
        <img
          src={img[imgN]}
          alt="car"
          ref={imageRef}
          onClick={openFullscreen}
        />
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
