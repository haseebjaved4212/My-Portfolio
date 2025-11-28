import { createContext, useContext, useState } from 'react';

const ContactFormContext = createContext();

export const useContactForm = () => {
  const context = useContext(ContactFormContext);
  if (!context) {
    throw new Error('useContactForm must be used within ContactFormProvider');
  }
  return context;
};

export const ContactFormProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openForm = () => setIsOpen(true);
  const closeForm = () => setIsOpen(false);

  return (
    <ContactFormContext.Provider value={{ isOpen, openForm, closeForm }}>
      {children}
    </ContactFormContext.Provider>
  );
};

