const quizData = {
    Keys: [
        { question: "What is the relative minor of C Major?", options: ["A minor", "E minor", "D minor", "B minor"], answer: "A minor", grade: 1 },
        { question: "What is the relative minor of Eb Major?", options: ["C minor", "Bb minor", "D minor", "G minor"], answer: "C minor", grade: 2 },
        { question: "How many sharps are in the key of G Major?", options: ["0", "1", "2", "3", "4"], answer: "1", grade: 1 },
        { question: "How many sharps are in the key of A Major?", options: ["0", "1", "2", "3", "4"], answer: "3", grade: 1 },
        { question: "How many flats are in the key of D Minor?", options: ["0", "1", "2", "3", "4"], answer: "1", grade: 1 },
        { question: "What is the key of the image shown?", options: ["E Major", "E Minor", "A Major", "G Minor"], answer: "E Major", image: "e major.png", grade: 3 },
        { question: "What is the key of the image shown?", options: ["Eb Major", "Bb Minor", "A Major", "F Minor"], answer: "F Minor", image: "Ab major.svg", grade: 3 },
    ],
    Intervals: [
        { question: "What is the dominant of the D major chord?", options: ["A", "B", "C#", "F#"], answer: "A", grade: 1 },
        { question: "What is the subdominant of the G major scale?", options: ["D", "G", "C", "F#"], answer: "C", grade: 1 },
        { question: "Which degree of the G Major scale is E?", options: ["5th", "6th", "7th", "3rd"], answer: "6th", grade: 2 },
        { question: "Which of the following notes are the Major 6th of Bb?", options: ["G", "Gb", "Ab", "F"], answer: "G", grade: 2 },
        { question: "What is the following interval?", options: ["Augmented 4th", "Diminished 5th", "Major 3rd", "Perfect 4th"], answer: "Augmented 4th", image: "tritone.png", grade: 3 },
    ],
    Rhythm: [
        { question: "How many counts is a semibreve worth?", options: ["2", "4", "6", "8"], answer: "4", grade: 1 },
        { question: "How many semiquavers are there in a dotted minim?", options: ["10", "12", "13", "14"], answer: "12", grade: 2 },
        { question: "The following time signature means 6 semiquaver beats in a bar.", options: ["True", "False"], answer: "False", image: "68-Signature.webp", grade: 2 },
        { question: "How many quavers are there in a semibreve?", options: ["10", "8", "7", "6"], answer: "8", grade: 1 },
    ],
    Terms: [
        { question: "What does allegro mean?", options: ["Slow", "Accented", "Quick", "Solemn"], answer: "Quick", grade: 1 },
        { question: "Which of the following terms means 'at a walking pace'?", options: ["Vivace", "Andante", "Grave", "Dolce"], answer: "Andante", grade: 2 },
        { question: "'Con sordini' is only applicable to Stringed instruments.", options: ["True", "False"], answer: "False", grade: 2 },
        { question: "Which of the following terms means 'sweet'?", options: ["Dolce", "Cantabile", "Grandioso", "Scherzo"], answer: "Dolce", grade: 1 },
    ],
    Symbols: [
        { question: "What does this mean?", options: ["112 crotchet beats per minute", "112 quaver beats per minute", "112 crotchet beats per bar", "112 quaver beats per bar"], answer: "112 crotchet beats per minute", image: "G1/112bpm.svg", grade: 1 },
        { question: "What does this symbol mean?", options: ["Getting louder", "Getting quieter", "Getting faster", "Getting slower"], answer: "Getting louder", image: "G1/crescendo.svg", grade: 1 },
        { question: "What does this symbol mean and how do you play the notes?", options: ["Slur; perform smoothly", "Slur; detached", "Tie; smoothly", "Tie; detached"], answer: "Slur; perform smoothly", image: "G1/slur.svg", grade: 1 },
        { question: "What does this symbol mean and how do you play the notes?", options: ["Tie; hold for value of both notes", "Slur; detached", "Tie; perform smoothly", "Slur; perform smoothly"], answer: "Tie; hold for value of both notes", image: "G1/tie.svg", grade: 1 },
        { question: "What is this symbol?", options: ["Repeat mark", "The end", "Bar line", "Clef"], answer: "Repeat mark", image: "G1/repeat.svg", grade: 1 },
        { question: "What does this symbol mean and how do you play the notes?", options: ["Slur; perform smoothly", "Slur; detached", "Tie; smoothly", "Tie; detached"], answer: "Slur; perform smoothly", image: "G1/slur.svg", grade: 1 },
        { question: "What does this mean?", options: ["Staccato; detached", "Accent the notes", "Legato; detached", "Play lightly"], answer: "Accent the notes", image: "G1/accent.svg", grade: 1 },
    ],
    Mixed: []
};

quizData.Mixed = [
    ...quizData.Keys,
    ...quizData.Intervals,
    ...quizData.Rhythm,
    ...quizData.Terms,
    ...quizData.Symbols
];

export default quizData;
