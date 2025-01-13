// Vragenlijst en modules
const questions = [
    {
        question: "Wat is uw belangrijkste reden om AI te overwegen?",
        answers: [
            { text: "Tijd besparen bij juridisch onderzoek", module: "Module 1: AI-Research", score: 1 },
            { text: "Documenten consistent analyseren en verbeteren", module: "Module 2: AI-Analyse", score: 1 },
            { text: "Efficiënt juridische documenten genereren", module: "Module 3: Document Generatie", score: 1 },
            { text: "Een veelzijdige AI-assistent voor dagelijkse ondersteuning", module: "Module 4: AI-Assistent", score: 1 }
        ]
    },
    {
        question: "Hoe vaak werkt u met grote hoeveelheden juridische informatie die u snel moet onderzoeken?",
        answers: [
            { text: "Dagelijks", module: "Module 1: AI-Research", score: 1 },
            { text: "Wekelijks", module: "Module 1: AI-Research", score: 1 },
            { text: "Zelden", module: null, score: 0 }
        ]
    },
    // Module 1 specifieke vragen
    {
        question: "Heeft u regelmatig behoefte aan een tool om snel juridische informatie uit externe en interne bronnen te halen?",
        answers: [
            { text: "Ja, cruciaal", module: "Module 1: AI-Research", score: 2 },
            { text: "Af en toe", module: "Module 1: AI-Research", score: 1 },
            { text: "Nee", module: "Module 1: AI-Research", score: 0 }
        ]
    },
    {
        question: "Is toegang tot betrouwbare bronnen zoals rechtspraak.nl of wetten.nl essentieel voor uw werk?",
        answers: [
            { text: "Ja, absoluut nodig", module: "Module 1: AI-Research", score: 1 },
            { text: "Nee, niet cruciaal", module: "Module 1: AI-Research", score: 0 }
        ]
    },
    {
        question: "Zoekt u vaak juridische informatie in Europese of internationale bronnen?",
        answers: [
            { text: "Ja", module: "Module 1: AI-Research", score: 1, extra: "Internationale uitbreiding is aanbevolen." },
            { text: "Nee", module: "Module 1: AI-Research", score: 0 }
        ]
    },
    {
        question: "Hoe belangrijk is het om snel te kunnen filtreren op relevante uitspraken en artikelen?",
        answers: [
            { text: "Zeer belangrijk", module: "Module 1: AI-Research", score: 1 },
            { text: "Minder belangrijk", module: "Module 1: AI-Research", score: 0 }
        ]
    },
    // Module 2 specifieke vragen
    {
        question: "Heeft u vaak documenten nodig die consistent zijn met de schrijfstijl en normen van uw kantoor?",
        answers: [
            { text: "Ja, zeer belangrijk", module: "Module 2: AI-Analyse", score: 1 },
            { text: "Nee", module: "Module 2: AI-Analyse", score: 0 }
        ]
    },
    {
        question: "Wilt u dat de AI documenten analyseert en suggesties doet voor verbetering in stijl en inhoud?",
        answers: [
            { text: "Ja, regelmatig nodig", module: "Module 2: AI-Analyse", score: 2 },
            { text: "Ja, af en toe", module: "Module 2: AI-Analyse", score: 1 },
            { text: "Nee", module: "Module 2: AI-Analyse", score: 0 }
        ]
    },
    {
        question: "Hoe belangrijk is het dat de AI fouten in de juridische documenten kan opsporen en verbeteren?",
        answers: [
            { text: "Cruciaal", module: "Module 2: AI-Analyse", score: 1 },
            { text: "Minder belangrijk", module: "Module 2: AI-Analyse", score: 0 }
        ]
    },
    {
        question: "Gebruikt u vaak standaardbrieven of -documenten die geanalyseerd en aangepast moeten worden?",
        answers: [
            { text: "Ja, regelmatig", module: "Module 2: AI-Analyse", score: 1 },
            { text: "Nee", module: "Module 2: AI-Analyse", score: 0 }
        ]
    },
    // Module 3 specifieke vragen
    {
        question: "Heeft u behoefte aan een tool die juridische documenten, zoals contracten en overeenkomsten, voor u genereert?",
        answers: [
            { text: "Ja, vaak nodig", module: "Module 3: Document Generatie", score: 2 },
            { text: "Af en toe handig", module: "Module 3: Document Generatie", score: 1 },
            { text: "Nee", module: "Module 3: Document Generatie", score: 0 }
        ]
    },
    {
        question: "Hoe belangrijk is het dat de gegenereerde documenten automatisch voldoen aan de kantoorstandaarden?",
        answers: [
            { text: "Zeer belangrijk", module: "Module 3: Document Generatie", score: 1 },
            { text: "Minder belangrijk", module: "Module 3: Document Generatie", score: 0 }
        ]
    },
    {
        question: "Wilt u sjablonen kunnen gebruiken voor veelgebruikte documenten?",
        answers: [
            { text: "Ja, essentieel", module: "Module 3: Document Generatie", score: 1 },
            { text: "Nee", module: "Module 3: Document Generatie", score: 0 }
        ]
    },
    {
        question: "Zou een tool die klantbrieven of notities kan genereren een groot verschil maken in uw werk?",
        answers: [
            { text: "Ja, absoluut nodig", module: "Module 3: Document Generatie", score: 1 },
            { text: "Nee, niet noodzakelijk", module: "Module 3: Document Generatie", score: 0 }
        ]
    },
    // Module 4 specifieke vragen
    {
        question: "Wilt u dat de AI complexe vragen kan beantwoorden en advies kan geven?",
        answers: [
            { text: "Ja, regelmatig nodig", module: "Module 4: AI-Assistent", score: 1 },
            { text: "Nee", module: "Module 4: AI-Assistent", score: 0 }
        ]
    },
    {
        question: "Heeft u behoefte aan een AI die prompts optimaliseert en specifieke bronnen raadpleegt?",
        answers: [
            { text: "Ja, belangrijk", module: "Module 4: AI-Assistent", score: 1 },
            { text: "Nee, niet noodzakelijk", module: "Module 4: AI-Assistent", score: 0 }
        ]
    },
    {
        question: "Hoe belangrijk is het dat de AI geïntegreerd kan worden in tools zoals Microsoft Word?",
        answers: [
            { text: "Zeer belangrijk", module: "Module 4: AI-Assistent", score: 1 },
            { text: "Minder belangrijk", module: "Module 4: AI-Assistent", score: 0 }
        ]
    },
    {
        question: "Maakt u regelmatig gebruik van tools die taken zoals herschrijven, samenvatten en vertalen ondersteunen?",
        answers: [
            { text: "Ja, dagelijks", module: "Module 4: AI-Assistent", score: 2 },
            { text: "Ja, af en toe", module: "Module 4: AI-Assistent", score: 1 },
            { text: "Nee", module: "Module 4: AI-Assistent", score: 0 }
        ]
    },
    // Afsluitende vragen
    {
        question: "Hoeveel tijd wilt u investeren in het leren werken van een nieuwe AI-tool?",
        answers: [
            { text: "Minimaal, ik zoek iets gebruiksvriendelijk", module: "Module 4: AI-Assistent", score: 1, extra: "Module 4 biedt uitgebreide ondersteuning." },
            { text: "Ik ben bereid een training te volgen", module: null, score: 1 }
        ]
    },
    {
        question: "Welke mate van maatwerk verwacht u van de AI-tool?",
        answers: [
            { text: "Ik wil volledige controle over instellingen en sjablonen", modules: ["Module 2: AI-Analyse", "Module 3: Document Generatie"], score: 1 },
            { text: "Een standaardpakket voldoet aan mijn behoefte", module: null, score: 0 }
        ]
    }
];

// Modules en hun scores
const modules = {
    "Module 1: AI-Research": 0,
    "Module 2: AI-Analyse": 0,
    "Module 3: Document Generatie": 0,
    "Module 4: AI-Assistent": 0
};

// Vraagweergave
let currentQuestionIndex = 0;
const questionText = document.getElementById("questionText");
const answerContainer = document.getElementById("answerContainer");
const chartContainer = document.getElementById("chartContainer");
const questionContainer = document.getElementById("questionContainer");

function showQuestion() {
    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        questionText.textContent = currentQuestion.question;
        answerContainer.innerHTML = "";

        currentQuestion.answers.forEach(answer => {
            const button = document.createElement("button");
            button.textContent = answer.text;
            button.onclick = () => recordAnswer(answer);
            answerContainer.appendChild(button);
        });
    } else {
        displayResults();
    }
}

function recordAnswer(answer) {
    if (answer.module) {
        modules[answer.module] += answer.score;
    }
    if (answer.modules) {
        answer.modules.forEach(module => {
            modules[module] += answer.score;
        });
    }
    currentQuestionIndex++;
    showQuestion();
}

function displayResults() {
    // Verberg de vragen en antwoorden
    questionContainer.style.display = "none";

    // Toon de grafieken
    chartContainer.style.display = "block";
    const moduleNames = Object.keys(modules);
    const totalScore = 10; // Maximaal score per module

    // Maak een array van de scores en percentages
    const chartData = moduleNames.map(module => {
        const score = modules[module];
        const percentage = (score / totalScore) * 100;
        return { module, score, percentage };
    });

    // Zoek de module(s) met de hoogste score
    const maxScore = Math.max(...chartData.map(data => data.score));
    const topModules = chartData
        .filter(data => data.score === maxScore && maxScore > 0)
        .map(data => data.module);

    // Voeg de samenvattende tekst toe
    const summaryText = document.getElementById("summaryText");
    if (topModules.length > 0) {
        summaryText.textContent = Uit deze kieswijzer is voortgekomen dat ${topModules.length > 1 ? 's' : ''} ${topModules.join(' en ')} het meest bij u past.;
    } else {
        summaryText.textContent = "Er is geen duidelijke voorkeur voor een module vastgesteld.";
    }

    // Maak de grafieken
    chartData.forEach((data, index) => {
        const ctx = document.getElementById(chart${index + 1}).getContext("2d");

        new Chart(ctx, {
            type: "doughnut",
            data: {
                labels: [${data.module} - ${data.percentage.toFixed(1)}%, "Resterend"],
                datasets: [
                    {
                        data: [data.score, totalScore - data.score],
                        backgroundColor: ["#36A2EB", "#CCCCCC"]
                    }
                ]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: true,
                        position: "bottom"
                    },
                    tooltip: {
                        callbacks: {
                            label: function(tooltipItem) {
                                const percentage = ((tooltipItem.raw / totalScore) * 100).toFixed(1);
                                return ${tooltipItem.label}: ${percentage}%;
                            }
                        }
                    }
                }
            }
        });
    });
}

showQuestion();
