import React from 'react';

interface Props {
    isNavigating: boolean,
    toggleNavigation: () => void
}

const ToggleMenuButton = ({ isNavigating, toggleNavigation }: Props) => {
    return (
        <button onClick={toggleNavigation}>{isNavigating ? '=' : '||'}</button>
    )
}

export default ToggleMenuButton;
