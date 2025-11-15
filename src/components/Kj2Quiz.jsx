import React, { useState, useRef, useEffect } from 'react';
import { kj2Questions } from '../data';
import CharacterToolbar from './CharacterToolbar';
import { speak } from '../utils/tts'; // Importing the TTS utility

const Kj2QuizItem = ({ question, index, onCorrect }) => {
    const [input, setInput] = useState('');
    const [feedback, setFeedback] = useState(null);
    const [isLocked, setIsLocked] = useState(false);
    const inputRef = useRef(null); 

    const checkAnswer = () => {
        if (isLocked) return;
        
        // 1. Get the model answer and clean it: lowercase, trim, remove non-essential punctuation
        // This allows for case-insensitivity but enforces strict content and umlauts.
        const cleanedCorrect = question.answer.toLowerCase()
            .replace(/[.,!?:;]/g, '') // Remove common punctuation
            .replace(/\s+/g, ' ') // Replace multiple spaces with a single space
            .trim();
        
        // 2. Get the user input and clean it the same way
        const cleanedUser = input.toLowerCase()
            .replace(/[.,!?:;]/g, '')
            .replace(/\s+/g, ' ') 
            .trim();

        // 3. Strict Check: The cleaned strings must match exactly.
        const isCorrect = (cleanedUser === cleanedCorrect);

        if (isCorrect) {
            setFeedback('correct');
            setIsLocked(true);
            onCorrect(question.id); // Notify parent component
        } else {
            setFeedback('incorrect');
        }
        speak(question.answer);
    };

    return (
        <div className={`question-card ${isLocked ? 'completed' : ''}`}>
            <h3>Frage {index + 1}:</h3>
            <p><strong>Fakt:</strong> {question.fact}</p>
            <button className="audio-btn" onClick={() => speak(question.fact)} disabled={isLocked}>🔊 Fakt anhören</button>
            
            {!isLocked && <CharacterToolbar inputRef={inputRef} onInsert={setInput} />}
            
            <p><strong>Hypothetisch (K II):</strong></p>
            <div className="input-group">
                <input 
                    type="text" 
                    value={input} 
                    onChange={(e) => setInput(e.target.value)} 
                    placeholder="Deine Antwort hier..."
                    ref={inputRef}
                    disabled={isLocked}
                />
                <button onClick={checkAnswer} disabled={isLocked}>Prüfen</button>
            </div>
            
            {feedback && (
                <div className={`feedback ${feedback}`}>
                    {feedback === 'correct' ? 'Korrekt! ✅ Übung abgeschlossen.' : 'Falsch. ❌ Versuche es noch einmal.'}
                </div>
            )}
            
            {isLocked && (
                <div className="translation">
                    <strong>Korrekte Antwort:</strong> {question.answer} <em>({question.translation})</em>
                </div>
            )}
        </div>
    );
};

const Kj2Quiz = ({ onQuizComplete }) => {
    const [completedQuestions, setCompletedQuestions] = useState(new Set());
    const totalQuestions = kj2Questions.length;

    const handleCorrectAnswer = (questionId) => {
        setCompletedQuestions(prev => {
            const newSet = new Set(prev);
            newSet.add(questionId);
            return newSet;
        });
    };

    // Check for overall completion
    useEffect(() => {
        if (completedQuestions.size === totalQuestions) {
            setTimeout(onQuizComplete, 1000); // Wait a moment before proceeding
        }
    }, [completedQuestions, totalQuestions, onQuizComplete]);

    return (
        <div className="quiz-section">
            <h2>🧠 1. Konjunktiv II Training (Gegenwart)</h2>
            <p>Verwandle die Fakten in hypothetische Sätze. **Strenge Genauigkeit ist erforderlich.** ({completedQuestions.size}/{totalQuestions})</p>
            <div id="kj2-quiz">
                {kj2Questions.map((q, index) => (
                    <Kj2QuizItem 
                        key={q.id} 
                        question={q} 
                        index={index} 
                        onCorrect={handleCorrectAnswer}
                    />
                ))}
            </div>
        </div>
    );
};

export default Kj2Quiz;