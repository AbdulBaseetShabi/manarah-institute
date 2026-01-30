"use client";
import React from "react";
import { X } from "lucide-react";
import { Message } from "./types";
import { LeftSlider } from "./animation";

interface AlertModalProps {
    message: Message;
    type?: "success" | "error" | "info" | "warning";
    handleClose: () => void;
}

const typeStyles: Record<string, string> = {
    success: "bg-green-100 border-green-400 text-green-800",
    error: "bg-red-100 border-red-400 text-red-800",
    info: "bg-white border-gray-400 text-gray-800",
    warning: "bg-yellow-100 border-yellow-400 text-yellow-800",
};

const AlertModal: React.FC<AlertModalProps> = ({ message, type = "info", handleClose }) => {
    return (
        <div className={`fixed inset-0 flex items-center justify-center z-50`}>
            <div className="fixed inset-0 bg-black opacity-30" onClick={handleClose}></div>
            <LeftSlider className="z-10 relative" delay={0.2}>
                <div className={`border rounded-lg shadow-lg p-6 w-full mx-2 max-w-md ${typeStyles[type]} relative box-border`}>
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-bold">{message.title}</h3>
                        <button
                            className="text-xl font-bold text-gray-500 hover:text-gray-700"
                            onClick={handleClose}
                            aria-label="Close"
                        >
                            <X size={20} />
                        </button>
                    </div>
                    <div className="text-base">{message.description}</div>
                </div>
            </LeftSlider>
        </div>
    );
};

export default AlertModal;
