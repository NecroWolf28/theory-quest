const quizData = {
    Keys: [
        { question: "What is the relative minor of C Major?", options: ["A minor", "E minor", "D minor", "B minor"], answer: "A minor", difficulty: 1 },
        { question: "What is the relative minor of Eb Major?", options: ["C minor", "Bb minor", "D minor", "G minor"], answer: "C minor", difficulty: 2 },
        { question: "How many sharps are in the key of G Major?", options: ["0", "1", "2", "3", "4"], answer: "1", difficulty: 1 },
        { question: "How many sharps are in the key of A Major?", options: ["0", "1", "2", "3", "4"], answer: "3", difficulty: 1 },
        { question: "How many flats are in the key of D Minor?", options: ["0", "1", "2", "3", "4"], answer: "1", difficulty: 1 },
        { question: "What is the key of the image shown?", options: ["E Major", "E Minor", "A Major", "G Minor"], answer: "E Major", image: "e major.png", difficulty: 3 },
        { question: "What is the key of the image shown?", options: ["Eb Major", "Bb Minor", "A Major", "F Minor"], answer: "F Minor", image: "Ab major.svg", difficulty: 3 },
    ],
    Intervals: [
        { question: "What is the dominant of the D major chord?", options: ["A", "B", "C#", "F#"], answer: "A", difficulty: 1 },
        { question: "What is the subdominant of the G major scale?", options: ["D", "G", "C", "F#"], answer: "C", difficulty: 1 },
        { question: "Which degree of the G Major scale is E?", options: ["5th", "6th", "7th", "3rd"], answer: "6th", difficulty: 2 },
        { question: "Which of the following notes are the Major 6th of Bb?", options: ["G", "Gb", "Ab", "F"], answer: "G", difficulty: 2 },
        { question: "What is the following interval?", options: ["Augmented 4th", "Diminished 5th", "Major 3rd", "Perfect 4th"], answer: "Augmented 4th", image: "tritone.png", difficulty: 3 },
    ],
    Rhythm: [
        { question: "How many counts is a semibreve worth?", options: ["2", "4", "6", "8"], answer: "4", difficulty: 1 },
        { question: "How many semiquavers are there in a dotted minim?", options: ["10", "12", "13", "14"], answer: "12", difficulty: 2 },
        { question: "The following time signature means 6 semiquaver beats in a bar.", options: ["True", "False"], answer: "False", image: "68-Signature.webp", difficulty: 2 },
        { question: "How many quavers are there in a semibreve?", options: ["10", "8", "7", "6"], answer: "8", difficulty: 1 },
    ],
    Terms: [
        { question: "What does Allegro mean?", options: ["Slow", "Accented", "Lively", "Solemn"], answer: "Lively", difficulty: 1 },
        { question: "Which of the following terms means 'at a walking pace'?", options: ["Vivace", "Andante", "Grave", "Dolce"], answer: "Andante", difficulty: 2 },
        { question: "'Con sordini' is only applicable to Stringed instruments.", options: ["True", "False"], answer: "False", difficulty: 2 },
        { question: "Which of the following terms means 'sweet'?", options: ["Dolce", "Cantabile", "Grandioso", "Scherzo"], answer: "Dolce", difficulty: 1 },
    ],
    Mixed: []
};

quizData.Mixed = [
    ...quizData.Keys,
    ...quizData.Intervals,
    ...quizData.Rhythm,
    ...quizData.Terms
];

export default quizData;
