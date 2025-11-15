import React from 'react';
import { finalSentences } from '../data';
import { speak } from '../utils/tts'; // Assuming a utility file for speak

const SentenceReviewItem = ({ item, index }) => {
    // Regex for highlighting.
    const createMarkup = (sentence) => {
        let highlighted = sentence;
        
        // Use a placeholder for the Konjunktiv II parts (red)
        highlighted = highlighted.replace(/\*\*(.*?)\*\*/g, (match, p1) => 
            `<span class="highlight-kj2">${p1}</span>`
        );

        // Highlight the Nebensatz structure keywords (blue)
        const nebensatzKeywords = ["Da ", "Obwohl ", "weil ", "Wenn ", "Trotzdem "];
        nebensatzKeywords.forEach(keyword => {
            highlighted = highlighted.replace(new RegExp(keyword, 'g'), `<span class="highlight-nebensatz">${keyword}</span>`);
        });

        // Highlight the Vocab words (green underline) - assumes words match exactly
        item.vocab.forEach(word => {
            const regex = new RegExp(`(?<!<span class="highlight-vocab">)(?<!\>)(${word})`, 'g');
            highlighted = highlighted.replace(regex, `<span class="highlight-vocab">$1</span>`);
        });

        return { __html: highlighted };
    };

    return (
        <div className="sentence-box">
            <p><strong>Satz {index + 1} (DE):</strong> <span dangerouslySetInnerHTML={createMarkup(item.sentence)} /></p>
            <p className="sentence-translation"><strong>Translation (EN):</strong> <em>{item.translation}</em></p>
            <p className="sentence-breakdown">
                Elemente: K II: <span className="highlight-kj2">{item.kj2}</span>, 
                Nebensatz: <span className="highlight-nebensatz">{item.nebensatz}</span>, 
                Vokabeln: <span className="highlight-vocab">{item.vocab.join(', ')}</span>
            </p>
            <button className="audio-btn" onClick={() => speak(item.sentence.replace(/\*\*/g, ''))}>🔊 Satz anhören</button>
        </div>
    );
};

const SentenceReview = () => (
    <div className="sentence-section">
        <h2>✅ 3. Deine C1-Meisterwerke (Review)</h2>
        <p>Die fünf fertigen C1-Sätze mit deutscher und englischer Übersetzung zur Kontrolle.</p>
        <div id="final-sentences">
            {finalSentences.map((item, index) => (
                <SentenceReviewItem key={item.id} item={item} index={index} />
            ))}
        </div>
    </div>
);

export default SentenceReview;