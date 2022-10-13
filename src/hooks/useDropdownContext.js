import { useContext } from 'react';
import DropdownContext from '../context/DropdownContext';

const useDropdownContext = () => {

  const context = useContext(DropdownContext);
  
  if (!context) {
    throw new Error (
      'Dropdown components are compound component. Must be used inside Dropdown.'
    );
  }
  return context;
};

export default useDropdownContext;
