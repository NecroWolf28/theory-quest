const quizData = {
    Rhythm: [
        { question: "What is the time signature of this bar?", options: ["4<br>4", "3<br>4", "2<br>4", "6<br>8"], answer: "4<br>4", image: "G1/44 bar 1.png", grade: 1 },
        { question: "What is the time signature of this bar?", options: ["3<br>8", "3<br>4", "2<br>4", "6<br>4"], answer: "3<br>4", image: "G1/34 bar 1.png", grade: 1 },
        { question: "How many crotchets is a semibreve worth?", options: ["2", "4", "6", "8"], answer: "4", grade: 1 },
        { question: "How many quavers are there in a dotted minim?", options: ["5", "6", "4", "3"], answer: "6", grade: 1 },

        { question: "What is the time signature of this bar?", options: ["4<br>2", "4<br>4", "2<br>2", "6<br>4"], answer: "4<br>2", image: "G2/42 bar 1.png", grade: 2 },
        { question: "What is the time signature of this bar?", options: ["4<br>4", "3<br>4", "2<br>4", "6<br>8"], answer: "3<br>4", image: "G2/34 bar 1.png", grade: 2 },
        { question: "What is the time signature of this bar?", options: ["2<br>4", "3<br>8", "3<br>4", "6<br>8"], answer: "3<br>8", image: "G2/38 bar 1.png", grade: 2 },
        { question: "How many semiquavers are there in a dotted crotchet?", options: ["5", "6", "7", "8"], answer: "6", grade: 2 },
        { question: "How many crotchets are there in a semibreve?", options: ["2", "6", "8", "4"], answer: "4", grade: 2 },

        { question: "The following time signature means 6 semiquaver beats in a bar.", options: ["True", "False"], answer: "False", image: "68-Signature.webp", grade: 3 },

        { question: "What is the time signature of this bar?", options: ["6<br>4", "9<br>8", "12<br>8", "6<br>8"], answer: "9<br>8", image: "G5/98 bar 1.png", grade: 5 },
        { question: "What is the time signature of this bar?", options: ["4<br>4", "3<br>4", "5<br>4", "12<br>8"], answer: "4<br>4", image: "G5/44 bar 1.png", grade: 5 },
        { question: "What is the time signature of this bar?", options: ["3<br>4", "9<br>8", "7<br>8", "6<br>8"], answer: "7<br>8", image: "G5/78 bar 1.png", grade: 5 },
        { question: "Is this bar in simple or compound time?", options: ["Unable to determine", "Simple time", "Compound time"], answer: "Compound time", image: "G5/98 bar 1.png", grade: 5 },
        { question: "The rests in this bar are grouped correctly.", options: ["True", "False"], answer: "True", image: "G5/98 bar 1.png", grade: 5 },
        { question: "Choose T for correct, or F for incorrect, for each group of rests.", options: ["F F T", "T F F", "T T F", "T F T"], answer: "T F T", image: "G5/correct rests.png", grade: 5 },
    ],
    Pitch: [
        { question: "What is the name of this note?", options: ["A", "D#", "C#", "B", "E"], answer: "C#", image: "G1/trebleclef1.png", grade: 1 },
        { question: "What is the name of this note?", options: ["A", "F#", "D#", "G", "E"], answer: "F#", image: "G1/bassclef1.png", grade: 1 },
        { question: "Which note is lower, left or right?", options: ["Left", "Right"], answer: "Left", image: "G1/lower1.png", grade: 1 },
        { question: "Which note is higher, left or right?", options: ["Left", "Right"], answer: "Right", image: "G1/higher1.png", grade: 1 },

        { question: "What is the name of this note?", options: ["Dd", "Eb", "Ab", "Bb", "B"], answer: "Bb", image: "G2/trebleclef1.png", grade: 2 },
        { question: "What is the name of this note?", options: ["A", "F", "Bb", "Ab", "B"], answer: "A", image: "G2/bassclef1.png", grade: 2 },
        { question: "The first note sounds <b>lower</b> than the second note.", options: ["False", "True"], answer: "True", image: "G2/lower1.png", grade: 2 },
        { question: "The second note sounds <b>lower</b> than the first note.", options: ["False", "True"], answer: "False", image: "G2/lower2.png", grade: 2 },
        { question: "The second note sounds <b>higher</b> than the first note.", options: ["False", "True"], answer: "True", image: "G2/higher1.png", grade: 2 },

        { question: "What is the name of this note?", options: ["A", "B", "C", "G", "F"], answer: "A", image: "G5/tenorclef1.png", grade: 5 },
        { question: "What is the enharmonic equivalent of this note?", options: ["D#", "E", "Gb", "Fb"], answer: "Fb", image: "G5/E.png", grade: 5 },
    ],
    Keys: [
        { question: "Which line correctly shows a G major scale?", options: ["1st", "2nd", "3rd", "None of the above"], answer: "3rd", image: "G1/gmajorscale.png", grade: 1 },
        { question: "What is the relative minor of C major?", options: ["A minor", "E minor", "D minor", "B minor"], answer: "A minor", grade: 1 },
        { question: "How many sharps are in the key of G major?", options: ["0", "1", "2", "3", "4"], answer: "1", grade: 1 },
        { question: "How many sharps are in the key of A major?", options: ["0", "1", "2", "3", "4"], answer: "3", grade: 1 },
        { question: "How many flats are in the key of D minor?", options: ["0", "1", "2", "3", "4"], answer: "1", grade: 1 },
        { question: "What is the subdominant of the G major scale?", options: ["D", "G", "C", "F#"], answer: "C", grade: 1 },
        { question: "This shows the correct F major key signature.", options: ["False", "True"], answer: "False", image: "G1/f major false.png", grade: 1 },
        { question: "This shows the correct D major key signature.", options: ["False", "True"], answer: "True", image: "G1/d major true.png", grade: 1 },

        { question: "What is the relative minor of Eb major?", options: ["C minor", "Bb minor", "D minor", "G minor"], answer: "C minor", grade: 2 },
        { question: "Which degree of the G major scale is E?", options: ["5th", "6th", "7th", "3rd"], answer: "6th", grade: 2 },
        { question: "What is the key of this melody?", options: ["E major", "E minor", "A major", "D major", "B minor"], answer: "E minor", image: "G2/e minor melody.png", grade: 2 },
        { question: "What is the key of this melody?", options: ["Eb major", "F minor", "F major", "D minor", "Bb major"], answer: "F major", image: "G2/f major melody.png", grade: 2 },


        { question: "What is the key of the image shown?", options: ["E major", "E minor", "A major", "G minor"], answer: "E major", image: "e major.png", grade: 3 },
        { question: "What is the key of the image shown?", options: ["Eb major", "Bb minor", "A major", "F minor"], answer: "F minor", image: "Ab major.svg", grade: 3 },

        { question: "This is the leading note in B major.", options: ["False", "True"], answer: "True", image: "G5/A#.png", grade: 5 },
        { question: "This is the submediant in F# harmonic minor.", options: ["False", "True"], answer: "True", image: "G5/D.png", grade: 5 },
        { question: "This is the key signature of B major.", options: ["False", "True"], answer: "False", image: "G5/b major false.png", grade: 5 },
        { question: "This is the key signature of B major.", options: ["False", "True"], answer: "False", image: "G5/b major false 2.png", grade: 5 },
        { question: "This is the key signature of Eb minor.", options: ["False", "True"], answer: "False", image: "G5/eb minor false.png", grade: 5 },
        { question: "This is the key signature of Eb minor.", options: ["False", "True"], answer: "True", image: "G5/eb minor true.png", grade: 5 },
        { question: "What key signature is this?", options: ["Gb major", "Eb major", "Bb minor", "C minor", "Db major"], answer: "Gb major", image: "G5/eb minor true.png", grade: 5 },
        { question: "What is the key of this melody?", options: ["A major", "F# minor", "D major", "B minor"], answer: "B minor", image: "G5/b minor melody.png", grade: 5 },
        { question: "What is the key of this melody?", options: ["A major", "G# minor", "E major", "B major"], answer: "B major", image: "G5/b major melody.png", grade: 5 },
        { question: "Which clef would make the following scale a minor scale?", options: ["Alto", "Tenor", "Treble", "Bass"], answer: "Bass", image: "G5/bass minor scale.png", grade: 5 },
        { question: "Which clef would make the following scale a minor scale?", options: ["Alto", "Tenor", "Treble", "Bass"], answer: "Tenor", image: "G5/tenor minor scale.png", grade: 5 },
    ],
    Intervals: [
        { question: "What is the following interval?", options: ["5th", "6th", "7th", "8ve"], answer: "7th", image: "G1/7th.png", grade: 1 },
        { question: "What is the following interval?", options: ["9th", "6th", "7th", "8ve"], answer: "8ve", image: "G1/8ve.png", grade: 1 },

        { question: "Which of the following notes are the major 6th of Bb?", options: ["G", "Gb", "Ab", "F"], answer: "G", grade: 2 },

        { question: "What is the following interval?", options: ["Augmented 4th", "Diminished 5th", "Major 3rd", "Perfect 4th"], answer: "Augmented 4th", image: "tritone.png", grade: 5 },
        { question: "What is the following interval?", options: ["Minor 9th", "Diminished 10th", "Major 9th", "Perfect 8ve", "Augmented 8ve"], answer: "Major 9th", image: "G5/treble 9th.png", grade: 5 },
        { question: "What is the following interval?", options: ["Augmented 6th", "Minor 6th", "Major 7th", "Major 6th"], answer: "Major 6th", image: "G5/bass 6th.png", grade: 5 },
        { question: "What is the following interval?", options: ["Diminished 8ve", "Minor 7th", "Diminished 7th", "Augmented 6th", "Major 7th"], answer: "Diminished 7th", image: "G5/treble 7th.png", grade: 5 },
        { question: "What is the following interval?", options: ["Compound diminished 4th", "Diminished 10th", "Compound perfect 4th", "Augmented 11th"], answer: "Compound perfect 4th", image: "G5/treble 11th.png", grade: 5 },
        { question: "What note is a minor 6th above this note?", options: ["C", "Bb", "B", "Cb"], answer: "C", image: "G5/E.png", grade: 5 },
        { question: "What note is a major 3rd above this note?", options: ["G#", "G", "Ab", "A"], answer: "G#", image: "G5/E.png", grade: 5 },
        { question: "What note is an augmented 6th above this note?", options: ["B#", "B", "C", "A#"], answer: "B#", image: "G5/D.png", grade: 5 },
        { question: "What note is a diminished 4th above this note?", options: ["G", "Gb", "F#", "G#"], answer: "Gb", image: "G5/D.png", grade: 5 },
        { question: "What note is a minor 9th above this note?", options: ["Eb", "D#", "E", "D"], answer: "Eb", image: "G5/D.png", grade: 5 },
    ],
    Chords: [
        { question: "This is the tonic triad of G major.", options: ["True", "False"], answer: "True", image: "G1/g major chord.png", grade: 1 },
        { question: "What is the dominant of the D major chord?", options: ["A", "B", "C#", "F#"], answer: "A", grade: 1 },

        { question: "What is cadence indicated by the bracket?", options: ["Perfect", "Plagal", "Imperfect"], answer: "Plagal", image: "G5/plagal 1.png", grade: 5 },
        { question: "What is cadence indicated by the bracket?", options: ["Perfect", "Plagal", "Imperfect"], answer: "Perfect", image: "G5/perfect 1.png", grade: 5 },
        { question: "The key is C minor. What is the name of the chord marked 'A'?", options: ["Va", "IVa", "Vb", "Ib", "Ic"], answer: "Ic", image: "G5/1c chord 1.png", grade: 5 },
    ],
    Terms: [
        { question: "What does <i>allegro</i> mean?", options: ["Slow", "Accented", "Quick", "Solemn"], answer: "Quick", grade: 1 },
        { question: "What does <i>mp</i> mean?", options: ["Moderately loud", "Moderately quiet", "Quiet", "Very quiet"], answer: "Moderately quiet", grade: 1 },
        { question: "Which of the following terms means 'sweet'?", options: ["<i>dolce</i>", "<i>cantabile</i>", "<i>grandioso</i>", "<i>scherzo</i>"], answer: "<i>dolce</i>", grade: 1 },

        { question: "Which of the following terms means 'at a walking pace'?", options: ["<i>Vivace</i>", "<i>Andante</i>", "<i>Grave</i>", "<i>Dolce</i>"], answer: "<i>Andante</i>", grade: 2 },
        { question: "<i>Con sordini</i> is only applicable to Stringed instruments.", options: ["True", "False"], answer: "False", grade: 2 },
        // { question: "<div style=\"font-family: 'Bravura'; color: red;\">Con sordini</div> is only applicable to Stringed instruments.", options: ["True", "False"], answer: "False", grade: 2 },


        { question: "What does <i>ruhig</i> mean?", options: ["Peaceful", "Tenderly", "Simple", "Grand"], answer: "Peaceful", grade: 5 },
        { question: "What does <i>ad libitum</i> mean?", options: ["At choice", "In the style of", "In the same way", "With a minim beat"], answer: "At choice", grade: 5 },
        { question: "What does <i>con dolore</i> mean?", options: ["With grief", "Without movement", "Without force", "With vigour"], answer: "With grief", grade: 5 },
        { question: "What does <b>schnell</b> mean?", options: ["Fast", "Getting faster", "Moderately", "Gradually getting slower"], answer: "Fast", grade: 5 },
        { question: "What does alla marcia mean?", options: ["More movement", "Not too much", "Broadening", "In the style of a march"], answer: "In the style of a march", grade: 5 },
        { question: "What does <b>lebhaft</b> mean?", options: ["Slow", "Smoothly", "Always", "Lively"], answer: "Lively", grade: 5 },
        { question: "What does <i>rinf.</i> mean?", options: ["Resembling", "Very loud", "Reinforcing", "Gradually getting louder"], answer: "Reinforcing", grade: 5 },
        { question: "What does attaca mean?", options: ["Emphatic, accented", "Resonant, with rich tone", "Agitated", "Go straight on"], answer: "Go straight on", grade: 5 },
        { question: "What does <i>smorz.</i> mean?", options: ["Dying away", "With passion", "Tenderly", "Playful, joking"], answer: "Dying away", grade: 5 },
        { question: "What does <i>rinforzando</i> mean?", options: ["Resembling", "Very loud", "Reinforcing", "Gradually getting louder"], answer: "Reinforcing", grade: 5 },
        { question: "What does <i>perdendosi</i> mean?", options: ["Playful, merry", "Dying away", "Agitated", "Tenderly"], answer: "Dying away", grade: 5 },
        { question: "What does <i>morendo</i> mean?", options: ["Playful, merry", "Dying away", "Agitated", "Gradually getting louder"], answer: "Dying away", grade: 5 },
        { question: "What does <b>largamente</b> mean?", options: ["Broadly", "Expressive", "Majestic", "Very slow, solemn"], answer: "Broadly", grade: 5 },
        { question: "What does <i>cantando</i> mean?", options: ["Singing", "Rhythmically", "Calm", "Dying away"], answer: "Singing", grade: 5 },
        { question: "What does <i>quasi</i> mean?", options: ["As if, resembling", "As before", "Always", "Nothing"], answer: "As if, resembling", grade: 5 },
        { question: "What does <i>a niente</i> mean?", options: ["To nothing", "Always", "More", "At choice"], answer: "To nothing", grade: 5 },
    ],
    Signs: [
        { question: "What does this mean?", options: ["112 crotchet beats per minute", "112 quaver beats per minute", "112 crotchet beats per bar", "112 quaver beats per bar"], answer: "112 crotchet beats per minute", image: "G1/112bpm.svg", grade: 1 },
        { question: "What does this sign mean?", options: ["Getting louder", "Getting quieter", "Getting faster", "Getting slower"], answer: "Getting louder", image: "G1/crescendo.svg", grade: 1 },
        { question: "What does this sign mean and how do you play the notes?", options: ["Slur; perform smoothly", "Slur; detached", "Tie; perform smoothly", "Tie; detached"], answer: "Slur; perform smoothly", image: "G1/slur.svg", grade: 1 },
        { question: "What does this sign mean and how do you play the notes?", options: ["Tie; hold for value of both notes", "Slur; detached", "Tie; perform smoothly", "Slur; perform smoothly"], answer: "Tie; hold for value of both notes", image: "G1/tie.svg", grade: 1 },
        { question: "What is this sign?", options: ["Repeat mark", "The end", "Bar line", "Clef"], answer: "Repeat mark", image: "G1/repeat.svg", grade: 1 },
        { question: "What does this mean?", options: ["Staccato; detached", "Accent the notes", "Legato; detached", "Play lightly"], answer: "Accent the notes", image: "G1/accent.svg", grade: 1 },

        { question: "What does <i>fp</i> mean?", options: ["Loud, then immediately soft", "Loud, gradually getting quieter", "Soft, then immediately loud", "Soft, gradually getting louder"], answer: "Loud, then immediately soft", grade: 2 },

        { question: "Which written-out ornament is marked with brackets?", options: ["Appoggiatura", "Upper mordent", "Trill", "Upper turn", "Lower turn", "Acciaccatura"], answer: "Trill", image: "G5/trill.png", grade: 5 },
        { question: "Which written-out ornament is marked with brackets?", options: ["Appoggiatura", "Upper mordent", "Trill", "Upper turn", "Lower mordent", "Acciaccatura"], answer: "Upper turn", image: "G5/upper turn.png", grade: 5 },

    ],
    Instruments: [
        { question: "The flute usually plays at a higher pitch than the bassoon.", options: ["True", "False"], answer: "True", grade: 5 },
        { question: "The trumpet is a woodwind instrument.", options: ["True", "False"], answer: "False", grade: 5 },
        { question: "Cymbals produce sounds of definite pitch.", options: ["True", "False"], answer: "False", grade: 5 },
        { question: "A mezzo-soprano voice has a lower range than a soprano voice.", options: ["True", "False"], answer: "True", grade: 5 },
        { question: "The horn uses a double reed.", options: ["True", "False"], answer: "False", grade: 5 },
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
    ...quizData.Instruments,
    ...quizData.Signs
];

export default quizData;
