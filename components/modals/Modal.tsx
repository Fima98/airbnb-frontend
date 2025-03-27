"use client";

import { useCallback, useEffect, useState } from "react";
import React from "react";

interface ModalProps {
  label: string;
  close: () => void;
  content: React.ReactElement | null;
  isOpen: boolean;
}

const Modal: React.FC<ModalProps> = ({ label, content, isOpen, close }) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    setShowModal(false);
    setTimeout(() => {
      close();
    }, 200);
  }, [close]);

  if (!isOpen) {
    return null;
  }
  return (
    <div className="flex items-center justify-center fixed inset-0 z-50 bg-black bg-black/50">
      <div className="relative w-[90%] md:w-[80%] lg:w-[700px] my-6 h-auto mx-auto">
        <div
          className={`translate duration-500 h-full ${
            showModal
              ? "translate-y-0 opacity-100"
              : "translate-y-full opacity-10"
          } `}
        >
          <div className="w-full h-auto rounded-xl flex flex-col bg-white">
            {/* Header */}
            <header className="flex items-center justify-center p-6 rounded-t border-b relative">
              <div
                className="p-3 absolute left-3 hover:bg-gray-100 transition rounded-full cursor-pointer"
                onClick={() => handleClose()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <h2 className="text-lg font-semibold">{label}</h2>
            </header>

            {/* Content */}
            <section className="p-6">{content}</section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
