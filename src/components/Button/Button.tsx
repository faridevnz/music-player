import React from "react";
import './Button.scss';

interface IButton {
    onClick: () => void;
}

export const Button: React.FC<IButton> = ({ onClick, children }) => {
    return (
        <button className="button button-shadow" onClick={onClick}>
            <span>{ children }</span>
        </button>
    );
}