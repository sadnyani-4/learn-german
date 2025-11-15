import React, { useState } from 'react';
import Kj2Quiz from './components/Kj2Quiz';
import VocabMatch from './components/VocabMatch'; // <-- NEW IMPORT
import SentenceReview from './components/SentenceReview';
import './App.css';

const App = () => {
    // 0: Kj2 Quiz, 1: Vocab Match, 2: Sentence Review, 3: Completed
    const [currentStep, setCurrentStep] = useState(0); 

    const handleQuizComplete = () => {
        setCurrentStep(1);
    };
    
    // NEW: Function called when all matches are made
    const handleMatchComplete = () => {
        setCurrentStep(2);
    };

    return (
        <div className="container">
            <h1>🔥 C1 Goethe Day 1 Trainer</h1>
            <p className="step-tracker">
                <span className={currentStep === 0 ? 'active' : ''}>1. Konjunktiv II</span>
                <span className={currentStep === 1 ? 'active' : ''}>2. Vokabel Match</span>
                <span className={currentStep === 2 ? 'active' : ''}>3. Sätze</span>
            </p>

            <div className="lesson-container">
                {currentStep === 0 && <Kj2Quiz onQuizComplete={handleQuizComplete} />}
                
                {currentStep === 1 && <VocabMatch onMatchComplete={handleMatchComplete} />}
                
                {currentStep === 2 && <SentenceReview />}
            </div>

            {currentStep === 2 && (
                <div className="action-footer completed-message">
                    <h2>🎉 Tag 1 abgeschlossen!</h2>
                    <p>Du hast Konjunktiv II, Kausal-/Konzessivsätze und C1-Vokabeln gemeistert. Bereit für Tag 2?</p>
                </div>
            )}
        </div>
    );
};

export default App;