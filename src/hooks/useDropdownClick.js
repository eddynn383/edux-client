import useDropdownContext from './useDropdownContext';

const useDropdownClick = (eventKey, onClick) => {
    const { onToggle, activeEventKey } = useDropdownContext();
    return (event) => {

        onToggle(eventKey === activeEventKey ? null : eventKey);

        if (onClick) {
            onClick(event);
        }
    };
}; 

export default useDropdownClick;