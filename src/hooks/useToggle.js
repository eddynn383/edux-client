import { useState } from 'react';

const useToggle = (defaultValue) => {
    const [value, setValue] = useState(defaultValue)

    const toggleValue = (value) => {
        setValue(currentValue => value ? value : !currentValue)
    }

    return [value, toggleValue]
}

export default useToggle;