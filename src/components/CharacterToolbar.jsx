import React from 'react';

const CharacterToolbar = ({ inputRef, onInsert }) => {
    const chars = ['ä', 'ö', 'ü', 'ß', 'Ä', 'Ö', 'Ü'];

    const handleInsert = (char) => {
        if (inputRef.current) {
            const input = inputRef.current;
            const start = input.selectionStart;
            const end = input.selectionEnd;
            const value = input.value;

            // Insert character at cursor position
            const newValue = value.substring(0, start) + char + value.substring(end);
            
            onInsert(newValue);
            
            // Focus and set cursor position after insertion
            setTimeout(() => {
                input.focus();
                input.selectionStart = input.selectionEnd = start + char.length;
            }, 0);
        }
    };

    return (
        <div className="char-toolbar">
            {chars.map((char) => (
                <button 
                    key={char} 
                    className="char-button"
                    onClick={() => handleInsert(char)}
                >
                    {char}
                </button>
            ))}
        </div>
    );
};

export default CharacterToolbar;