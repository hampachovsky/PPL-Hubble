import { useAuthModal, useEmailAuth, useUser } from "@/features/auth";
import { ArrowLeftIcon, XMarkIcon } from "@heroicons/react/20/solid";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { authPaths } from "../constants";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";

Modal.setAppElement("#root");

const modalComponents: { [key: string]: React.FC } = {
  [authPaths.login]: LoginForm,
  [authPaths.register]: RegisterForm,
};

export const AuthModal: React.FC = () => {
  const { currentModal, closeAuthModal } = useAuthModal();
  const { emailAuth, handleBack } = useEmailAuth();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { isAuth, isPending } = useUser();

  const isAuthModal =
    currentModal &&
    (Object.values(authPaths) as string[]).includes(currentModal);

  useEffect(() => {
    setModalIsOpen(!!isAuthModal && !isAuth && !isPending);
  }, [isAuthModal, isAuth, isPending]);

  const ModalContent = isAuthModal ? modalComponents[currentModal] : null;

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeAuthModal}
        contentLabel="Authentication"
        overlayClassName="fixed inset-0  bg-black bg-opacity-60 z-60 flex justify-center items-center pointer-events-auto"
        className="relative w-full max-w-md rounded-lg bg-stone-800 p-6 text-white shadow-lg outline-none"
      >
        {emailAuth && (
          <button
            onClick={handleBack}
            className="absolute left-2 top-2 text-gray-500 hover:text-gray-100"
            aria-label="Back"
          >
            <ArrowLeftIcon className="h-6 w-6" />
          </button>
        )}
        {ModalContent ? <ModalContent /> : "No content available"}
        <button
          onClick={closeAuthModal}
          className="absolute right-2 top-2 text-gray-500 hover:text-gray-100"
          aria-label="Close"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>
      </Modal>
    </div>
  );
};
