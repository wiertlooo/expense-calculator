import ReactDOM from "react-dom";

function Modal({ children }) {
  //using portal, so I can apply positioning classes on parents without issues
  return ReactDOM.createPortal(
    <div>
      <div className="absolute inset-0 bg-gray-300 opacity-80"></div>
      <div className="absolute inset-40 p-5">{children}</div>
    </div>,
    document.querySelector(".modal-container")
  );
}

export default Modal;
