import useAccordionContext from './useAccordionContext';

const useAccordionClick = (eventKey, onClick) => {
    const { onToggle, activeEventKey } = useAccordionContext();
    return (event) => {

        onToggle(eventKey === activeEventKey ? null : eventKey);

        if (onClick) {
            onClick(event);
        }
    };
}; 

export default useAccordionClick;