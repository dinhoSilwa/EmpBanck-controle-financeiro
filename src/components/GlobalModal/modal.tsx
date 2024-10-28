import { ReactNode } from "react";
import ReactDOM from "react-dom";

interface ModalPortalProps {
  children: ReactNode;
}

export const BackgroundModal = ({ children }: ModalPortalProps) => {
  const modalPortalRoot = document.getElementById("modal");

  if (!modalPortalRoot) return null;
  return ReactDOM.createPortal(
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "absolute",
        top: "0",
        left: "0",
      }}
    >
      <div>{children}</div>
    </div>,
    modalPortalRoot
  );
};
