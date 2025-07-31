import { useState } from "react";

export const toast = ({ title, description, variant = "default" }) => {
  // This is a simplified toast implementation
  console.log(`Toast: ${title} - ${description} (${variant})`);
};

export const useToast = () => {
  const [toasts, setToasts] = useState([]);

  const addToast = (toast) => {
    const id = Math.random().toString(36).substring(7);
    const newToast = { id, ...toast };
    setToasts((prev) => [...prev, newToast]);
    
    // Auto-remove toast after 5 seconds
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 5000);
  };

  return {
    toast: addToast,
    toasts,
    dismiss: (id) => setToasts((prev) => prev.filter((t) => t.id !== id)),
  };
};