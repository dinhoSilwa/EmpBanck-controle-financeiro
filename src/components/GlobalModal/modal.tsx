import { ReactNode } from "react";
import ReactDOM from "react-dom";

interface ModalPortalProps {
  children: ReactNode;
}

export const BackgroundModal = ({ children }: ModalPortalProps) => {
  const modalPortalRoot = document.getElementById("modal");

  if (!modalPortalRoot) return null;
  return ReactDOM.createPortal(
    <div className="w-screen h-screen fixed top-0 left-0 bg-zinc-900/25 backdrop-blur-sm">
      <div>{children}</div>
    </div>,
    modalPortalRoot
  );
};
