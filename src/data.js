export const kj2Questions = [
    { id: 1, fact: "Ich habe kein Auto.", answer: "Ich hätte gern ein Auto.", translation: "I would like to have a car." },
    { id: 2, fact: "Wir sprechen fließend Chinesisch.", answer: "Wir würden fließend Chinesisch sprechen.", translation: "We would speak fluent Chinese." },
    { id: 3, fact: "Das Projekt ist zu teuer.", answer: "Das Projekt wäre nicht zu teuer.", translation: "The project would not be too expensive." },
    { id: 4, fact: "Er kann uns nicht besuchen.", answer: "Er könnte uns besuchen.", translation: "He could visit us." },
    { id: 5, fact: "Sie muss heute arbeiten.", answer: "Sie müsste heute nicht arbeiten.", translation: "She would not have to work today." }
];

export const vocabData = [
    { id: 101, german: "die Auseinandersetzung", english: "the dispute/discussion/confrontation" },
    { id: 102, german: "die Herausforderung", english: "the challenge" },
    { id: 103, german: "unumgänglich", english: "unavoidable/indispensable" },
    { id: 104, german: "die Zielsetzung", english: "the objective/goal setting" },
    { id: 105, german: "der Anspruch", english: "the claim/demand/standard" },
    { id: 106, german: "die Errungenschaft", english: "the achievement/accomplishment" },
    { id: 107, german: "nachhaltig", english: "sustainable/lasting" },
    { id: 108, german: "beträchtlich", english: "considerable/significant" },
    { id: 109, german: "die Verpflichtung", english: "the obligation/commitment" },
    { id: 110, german: "die Annahme", english: "the assumption/acceptance" },
    { id: 111, german: "die Befugnis", english: "the authority/power" },
    { id: 112, german: "die Grundlage", english: "the basis/foundation" },
    { id: 113, german: "das Vorhaben", english: "the plan/project/intention" },
    { id: 114, german: "die Voraussetzung", english: "the prerequisite/condition" },
    { id: 115, german: "die Gewissheit", english: "the certainty/assurance" },
    { id: 116, german: "der Konsens", english: "the consensus/agreement" },
    { id: 117, german: "die Umsetzung", english: "the implementation/realization" },
    { id: 118, german: "veranschaulichen", english: "to illustrate/clarify" },
    { id: 119, german: "verharren", english: "to remain/persist/dwell on" },
    { id: 120, german: "die Gegebenheit", english: "the circumstance/fact/condition" }
];

export const finalSentences = [
    { 
        id: 201,
        sentence: "Da die **Umsetzung** der neuen Strategie **beträchtliche** Ressourcen erfordert, **hätten** wir das **Vorhaben** sorgfältiger planen **müssen**.",
        translation: "Since the implementation of the new strategy requires considerable resources, we should have planned the project more carefully.",
        kj2: "hätten... müssen",
        nebensatz: "Da die Umsetzung der neuen Strategie beträchtliche Ressourcen erfordert",
        vocab: ["Umsetzung", "beträchtliche", "Vorhaben"]
    },
    { 
        id: 202,
        sentence: "**Obwohl** das Forschungsteam eine bahnbrechende **Errungenschaft** erzielt hat, **würde** die **Auseinandersetzung** über die finanziellen **Ansprüche** der Beteiligten wohl noch länger **dauern**.",
        translation: "Although the research team has achieved a groundbreaking accomplishment, the dispute over the financial claims of those involved would probably still take longer.",
        kj2: "würde... dauern",
        nebensatz: "Obwohl das Forschungsteam eine bahnbrechende Errungenschaft erzielt hat",
        vocab: ["Errungenschaft", "Auseinandersetzung", "Ansprüche"]
    },
    { 
        id: 203,
        sentence: "Die **Zielsetzung** des Unternehmens **wäre** realistischer, **weil** die aktuellen **Gegebenheiten** eine komplette Marktführerschaft **unumgänglich** machen.",
        translation: "The objective of the company would be more realistic because the current circumstances make complete market leadership unavoidable.",
        kj2: "wäre",
        nebensatz: "weil die aktuellen Gegebenheiten eine komplette Marktführerschaft unumgänglich machen",
        vocab: ["Zielsetzung", "Gegebenheiten", "unumgänglich"]
    },
    { 
        id: 204,
        sentence: "Wenn die Regierung die **Voraussetzung** für eine **nachhaltige** Entwicklung geschaffen **hätte**, **wären** die Bürger heute keine so große **Verpflichtung** eingegangen.",
        translation: "If the government had created the prerequisite for sustainable development, the citizens would not have entered into such a major obligation today.",
        kj2: "hätte / wären",
        nebensatz: "Wenn die Regierung die Voraussetzung für eine nachhaltige Entwicklung geschaffen hätte",
        vocab: ["Voraussetzung", "nachhaltige", "Verpflichtung"]
    },
    { 
        id: 205,
        sentence: "**Trotzdem** die **Herausforderung** riesig ist, **würden** wir im Stillstand nicht **verharren**, **obwohl** die notwendigen **Befugnisse** noch nicht erteilt **wurden**.",
        translation: "Nevertheless, we would not remain in stasis, even though the necessary authorities have not yet been granted.",
        kj2: "würden... verharren",
        nebensatz: "obwohl die notwendigen Befugnisse noch nicht erteilt wurden",
        vocab: ["Herausforderung", "verharren", "Befugnisse"]
    }
];