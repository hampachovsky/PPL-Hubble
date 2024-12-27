import { XMarkIcon } from "@heroicons/react/20/solid";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { useSearchParams } from "react-router";

Modal.setAppElement("#root");

export const AuthModal: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const modal = searchParams.get("modal");
  const [modalIsOpen, setModalIsOpen] = useState(!!modal);

  useEffect(() => {
    setModalIsOpen(!!modal);
  }, [modal]);

  const closeModal = () => {
    searchParams.delete("modal");
    setSearchParams(searchParams);
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Authentication"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
        className="relative w-full max-w-md rounded-lg bg-stone-800 p-6 text-white shadow-lg"
      >
        <h2 className="mb-4 text-lg font-bold">Auth</h2>

        <div className="flex flex-col gap-4">
          <button className="w-full rounded-md bg-cyan-600 px-4 py-2">
            Sign in with Google
          </button>
          <button className="w-full rounded-md bg-slate-700 px-4 py-2">
            Sign in with Email
          </button>
        </div>

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
