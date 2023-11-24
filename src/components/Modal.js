import ReactDOM from "react-dom";
import { useEffect } from "react";

function Modal({ children, onClose }) {
  //disabling scrolling when modal is open
  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    //enabling scrolling on modal close
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  //using portal, so I can apply positioning classes on parents without issues
  return ReactDOM.createPortal(
    <div>
      <div
        onClick={onClose}
        className="fixed inset-0 bg-gray-300 opacity-80"
      ></div>
      <div className="fixed inset-40 p-5">{children}</div>
    </div>,
    document.querySelector(".modal-container")
  );
}

export default Modal;
