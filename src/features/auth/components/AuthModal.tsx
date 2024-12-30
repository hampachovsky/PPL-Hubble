import { XMarkIcon } from "@heroicons/react/20/solid";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { useSearchParams } from "react-router";
import { authPaths } from "../constants";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";

Modal.setAppElement("#root");

const modalComponents: { [key: string]: React.FC } = {
  [authPaths.login]: LoginForm,
  [authPaths.register]: RegisterForm,
};

export const AuthModal: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const modal = searchParams.get("modal");
  const [modalIsOpen, setModalIsOpen] = useState(true /* !!modal */);

  useEffect(() => {
    setModalIsOpen(!!modal);
  }, [modal]);

  const closeModal = () => {
    searchParams.delete("modal");
    searchParams.delete("authOption");
    setSearchParams(searchParams);
  };

  const ModalContent = modal ? modalComponents[modal] : null;
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Authentication"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
        className="relative w-full max-w-md rounded-lg bg-stone-800 p-6 text-white shadow-lg"
      >
        {ModalContent ? <ModalContent /> : "No content available"}
        <button
          onClick={closeModal}
          className="absolute right-2 top-2 text-gray-500 hover:text-gray-100"
          aria-label="Close"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>
      </Modal>
    </div>
  );
};
