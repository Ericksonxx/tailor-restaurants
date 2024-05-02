import React from 'react';
import './loader.css';

export default function Loader() {
    return (
        <div>
            <svg className="loader-svg" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="3" />
                <g className="spinner-group">
                    <circle cx="4" cy="12" r="3" />
                    <circle cx="20" cy="12" r="3" />
                </g>
            </svg>
        </div>
    );
}
