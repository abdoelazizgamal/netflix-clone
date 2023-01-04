import { useEffect } from "react";
import Modal from "react-modal";
import YouTube from "react-youtube";
const TrailerModal = ({ modalIsOpen, setIsOpen, movie }) => {
  function closeModal() {
    setIsOpen(false);
  }

  let Videos = movie?.videos?.results?.filter((vid) => vid?.type === "Trailer");
  const trailer = Videos?.slice(0, 1);

  const onPlayerReady = (e) => {
    e.target.pauseVideo();
  };
  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  useEffect(() => {
    if (modalIsOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [modalIsOpen]);

  return (
    <>
      {/* <button onClick={openModal}>Open Modal</button> */}
      <Modal
        ariaHideApp={false}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <button className="close-modal-btn" onClick={closeModal}>
          ❌
        </button>
        <div className="youtube-video">
          {movie?.videos.results.length === 0 ? (
            <p>There is No Trailer Video For This Movie</p>
          ) : null}
          {trailer?.length > 0 && (
            <YouTube
              className="youtube-video"
              videoId={trailer?.[0].key}
              opts={opts}
              onReady={onPlayerReady}
            />
          )}
        </div>
      </Modal>
    </>
  );
};

export default TrailerModal;
