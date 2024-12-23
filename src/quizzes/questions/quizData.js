const quizData = {
    Rhythm: [
        { question: "What is the time signature of this bar?", options: ["4<br>4", "3<br>4", "2<br>4", "6<br>8"], answer: "4<br>4", image: "G1/44 bar 1.png", grade: 1 },
        { question: "How many crotchets is a semibreve worth?", options: ["2", "4", "6", "8"], answer: "4", grade: 1 },
        { question: "How many semiquavers are there in a dotted minim?", options: ["10", "12", "13", "14"], answer: "12", grade: 2 },
        { question: "The following time signature means 6 semiquaver beats in a bar.", options: ["True", "False"], answer: "False", image: "68-Signature.webp", grade: 2 },
        { question: "What is the time signature of this bar?", options: ["6<br>4", "9<br>8", "12<br>8", "6<br>8"], answer: "9<br>8", image: "G5/98 bar 1.png", grade: 5 },
    ],
    Pitch: [
        { question: "What is the name of this note?", options: ["A", "B", "C", "G", "F"], answer: "A", image: "G5/tenorclef1.png", grade: 5 },
    ],
    Keys: [
        { question: "Which line correctly shows a G Major scale?", options: ["1st", "2nd", "3rd", "None of the above"], answer: "3rd", image: "G1/gmajorscale.png", grade: 1 },
        { question: "What is the relative minor of C Major?", options: ["A minor", "E minor", "D minor", "B minor"], answer: "A minor", grade: 1 },
        { question: "What is the relative minor of Eb Major?", options: ["C minor", "Bb minor", "D minor", "G minor"], answer: "C minor", grade: 2 },
        { question: "How many sharps are in the key of G Major?", options: ["0", "1", "2", "3", "4"], answer: "1", grade: 1 },
        { question: "How many sharps are in the key of A Major?", options: ["0", "1", "2", "3", "4"], answer: "3", grade: 1 },
        { question: "How many flats are in the key of D Minor?", options: ["0", "1", "2", "3", "4"], answer: "1", grade: 1 },
        { question: "Which degree of the G Major scale is E?", options: ["5th", "6th", "7th", "3rd"], answer: "6th", grade: 2 },
        { question: "What is the subdominant of the G major scale?", options: ["D", "G", "C", "F#"], answer: "C", grade: 1 },
        { question: "What is the key of the image shown?", options: ["E Major", "E Minor", "A Major", "G Minor"], answer: "E Major", image: "e major.png", grade: 3 },
        { question: "What is the key of the image shown?", options: ["Eb Major", "Bb Minor", "A Major", "F Minor"], answer: "F Minor", image: "Ab major.svg", grade: 3 },
    ],
    Intervals: [
        { question: "Which of the following notes are the Major 6th of Bb?", options: ["G", "Gb", "Ab", "F"], answer: "G", grade: 2 },
        { question: "What is the following interval?", options: ["Augmented 4th", "Diminished 5th", "Major 3rd", "Perfect 4th"], answer: "Augmented 4th", image: "tritone.png", grade: 3 },
    ],
    Chords: [
        { question: "What is the dominant of the D major chord?", options: ["A", "B", "C#", "F#"], answer: "A", grade: 1 },
    ],
    Terms: [
        { question: "What does <i>allegro</i> mean?", options: ["Slow", "Accented", "Quick", "Solemn"], answer: "Quick", grade: 1 },
        { question: "What does <i>mp</i> mean?", options: ["Moderately loud", "Moderately quiet", "Quiet", "Very quiet"], answer: "Moderately quiet", grade: 1 },
        { question: "Which of the following terms means 'at a walking pace'?", options: ["Vivace", "Andante", "Grave", "Dolce"], answer: "Andante", grade: 2 },
        { question: "<i>'Con sordini'</i> is only applicable to Stringed instruments.", options: ["True", "False"], answer: "False", grade: 2 },
        { question: "Which of the following terms means 'sweet'?", options: ["<i>dolce</i>", "<i>cantabile</i>", "<i>grandioso</i>", "<i>scherzo</i>"], answer: "<i>dolce</i>", grade: 1 },
    ],
    Signs: [
        { question: "What does this mean?", options: ["112 crotchet beats per minute", "112 quaver beats per minute", "112 crotchet beats per bar", "112 quaver beats per bar"], answer: "112 crotchet beats per minute", image: "G1/112bpm.svg", grade: 1 },
        { question: "What does this sign mean?", options: ["Getting louder", "Getting quieter", "Getting faster", "Getting slower"], answer: "Getting louder", image: "G1/crescendo.svg", grade: 1 },
        { question: "What does this sign mean and how do you play the notes?", options: ["Slur; perform smoothly", "Slur; detached", "Tie; perform smoothly", "Tie; detached"], answer: "Slur; perform smoothly", image: "G1/slur.svg", grade: 1 },
        { question: "What does this sign mean and how do you play the notes?", options: ["Tie; hold for value of both notes", "Slur; detached", "Tie; perform smoothly", "Slur; perform smoothly"], answer: "Tie; hold for value of both notes", image: "G1/tie.svg", grade: 1 },
        { question: "What is this sign?", options: ["Repeat mark", "The end", "Bar line", "Clef"], answer: "Repeat mark", image: "G1/repeat.svg", grade: 1 },
        { question: "What does this mean?", options: ["Staccato; detached", "Accent the notes", "Legato; detached", "Play lightly"], answer: "Accent the notes", image: "G1/accent.svg", grade: 1 },
    ],
    Mixed: []
};

quizData.Mixed = [
    ...quizData.Rhythm,
    ...quizData.Pitch,
    ...quizData.Keys,
    ...quizData.Intervals,
    ...quizData.Chords,
    ...quizData.Terms,
    ...quizData.Signs
];

export default quizData;
