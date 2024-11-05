import React, { ReactNode } from "react";
import ReactDOM from "react-dom";

interface ModalPortalProps {
  children: ReactNode;
}

export const BackgroundModal: React.FC<ModalPortalProps> = ({ children }) => {
  const modalPortalRoot = document.getElementById("modal");

  if (!modalPortalRoot) return null;
  return ReactDOM.createPortal(
    <div className="w-screen h-screen fixed top-0 left-0 bg-zinc-900/25 backdrop-blur-sm z-50">
      <div>{children}</div>
    </div>,
    modalPortalRoot
  );
};
