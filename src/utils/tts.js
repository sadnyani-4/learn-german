// Function for Text-to-Speech (TTS)
export const speak = (text) => {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel(); 
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'de-DE';
        utterance.rate = 0.85; 
        window.speechSynthesis.speak(utterance);
    } else {
        console.error('Text-to-Speech not supported in this browser.');
    }
};