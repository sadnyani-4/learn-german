import React, { useState, useEffect, useCallback } from 'react';
import { vocabData } from '../data';
import { speak } from '../utils/tts'; 

// Utility to shuffle an array
const shuffleArray = (array) => {
    let currentIndex = array.length, randomIndex;
    let newArray = [...array];

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [newArray[currentIndex], newArray[randomIndex]] = [
            newArray[randomIndex], newArray[currentIndex]];
    }
    return newArray;
};

const VocabMatch = ({ onMatchComplete }) => {
    const [germanWords, setGermanWords] = useState([]);
    const [englishTranslations, setEnglishTranslations] = useState([]);
    const [selectedGerman, setSelectedGerman] = useState(null);
    const [selectedEnglish, setSelectedEnglish] = useState(null);
    const [matchedIds, setMatchedIds] = useState(new Set());
    const [feedback, setFeedback] = useState(null);

    // Initialization: Shuffle lists on load
    useEffect(() => {
        const shuffledGerman = shuffleArray(vocabData.map(v => ({ id: v.id, word: v.german })));
        const shuffledEnglish = shuffleArray(vocabData.map(v => ({ id: v.id, word: v.english })));
        setGermanWords(shuffledGerman);
        setEnglishTranslations(shuffledEnglish);
    }, []);

    // Matching logic
    const handleGermanClick = (item) => {
        if (matchedIds.has(item.id)) return;
        setFeedback(null);
        if (selectedGerman && selectedGerman.id === item.id) {
            setSelectedGerman(null); // Deselect if clicked again
        } else {
            setSelectedGerman(item);
        }
    };

    const handleEnglishClick = useCallback((item) => {
        if (matchedIds.has(item.id)) return;
        setFeedback(null);
        setSelectedEnglish(item);
    }, [matchedIds]);
    
    // Check match when both are selected
    useEffect(() => {
        if (selectedGerman && selectedEnglish) {
            if (selectedGerman.id === selectedEnglish.id) {
                // Correct Match
                setFeedback({ type: 'correct', message: 'Korrektes Paar! ✅' });
                setMatchedIds(prev => new Set(prev).add(selectedGerman.id));
                speak(selectedGerman.word);
            } else {
                // Incorrect Match
                setFeedback({ type: 'incorrect', message: 'Falsch. Versuche es erneut. ❌' });
            }
            // Clear selections after check (with slight delay for visual feedback)
            const timeout = setTimeout(() => {
                setSelectedGerman(null);
                setSelectedEnglish(null);
            }, 500);
            return () => clearTimeout(timeout);
        }
    }, [selectedGerman, selectedEnglish]);

    // Check for overall quiz completion
    useEffect(() => {
        if (matchedIds.size === vocabData.length) {
            setFeedback({ type: 'final', message: 'Alle Vokabeln gemeistert! Weiter zu den Sätzen.' });
            setTimeout(onMatchComplete, 1500);
        }
    }, [matchedIds, onMatchComplete]);


    const isGermanSelected = (id) => selectedGerman && selectedGerman.id === id;
    const isEnglishSelected = (id) => selectedEnglish && selectedEnglish.id === id;

    return (
        <div className="vocab-section">
            <h2>📖 2. C1 Vokabeln: Match the Following</h2>
            <p>Finde das passende englische Äquivalent für jedes deutsche Wort. ({matchedIds.size}/{vocabData.length})</p>
            
            <div className="match-container">
                <div className="match-column">
                    <h3>Deutsch</h3>
                    {germanWords.map((item) => (
                        <button 
                            key={item.id}
                            onClick={() => handleGermanClick(item)}
                            className={`match-item ${matchedIds.has(item.id) ? 'matched' : ''} ${isGermanSelected(item.id) ? 'selected' : ''}`}
                            disabled={matchedIds.has(item.id)}
                        >
                            {item.word}
                            <span className="audio-icon" onClick={(e) => {e.stopPropagation(); speak(item.word);}}>🔊</span>
                        </button>
                    ))}
                </div>
                <div className="match-column">
                    <h3>English</h3>
                    {englishTranslations.map((item) => (
                        <button 
                            key={item.id}
                            onClick={() => handleEnglishClick(item)}
                            className={`match-item ${matchedIds.has(item.id) ? 'matched' : ''} ${isEnglishSelected(item.id) ? 'selected' : ''}`}
                            disabled={matchedIds.has(item.id)}
                        >
                            {item.word}
                        </button>
                    ))}
                </div>
            </div>

            {feedback && (
                <div className={`match-feedback ${feedback.type}`}>{feedback.message}</div>
            )}
        </div>
    );
};

export default VocabMatch;