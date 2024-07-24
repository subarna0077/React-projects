import React, {useRef, forwardRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(function Modal( {children}:any, ref:React.ForwardedRef<any>) {
  const dialog:React.MutableRefObject<undefined> = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return (

    createPortal(
        <dialog 
          ref={dialog}
          className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
        >
            {children}
          <form method="dialog" className="mt-4 text-right">
            <button className="bg-red-800 text-white px-4 py-2 rounded-lg">Close</button>
          </form>
        </dialog>, document.getElementById('modal'))

  );
});

export default Modal;
