import { useState } from "react";

export function useForm<T>(initial: T&{ id?: string }) {
  const [formData, setFormData] = useState<T>(initial);
  const [errors, setErrors] = useState({});

  const reset = () => setFormData(initial);

  return {
    formData,
    setFormData,
    errors,
    setErrors,
    reset,
  };
}