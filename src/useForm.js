import { useState } from 'react';

export const useForm = (initialValues) => {
  const { email, setEmail } = useState(initialValues);
}