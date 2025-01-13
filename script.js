<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kieswijzer Modules Lexgen AI</title>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <style>
        body {
            background-color: #001f3d; /* Donkerblauwe kleur */
            font-family: Arial, sans-serif;
            text-align: center;
            margin: 20px;
            color: white; /* Tekstkleur wit */
        }
        h1 {
            font-size: 24px;
            margin-bottom: 20px;
            color: white; /* H1 tekstkleur wit */
        }
        #answerContainer button {
            margin: 10px;
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
        }
        #chartContainer {
            display: none;
            margin-top: 20px;
        }
        .chart-container {
            display: flex;
            justify-content: space-evenly;
            gap: 20px;
            flex-wrap: wrap;
            max-width: 1200px;
            margin: 0 auto;
        }
        .chart {
            flex: 1;
            max-width: 23%;
            height: 50%;
        }
        #questionContainer {
            margin-top: 30px;
        }
        #summaryText {
            margin-top: 10px;
            margin-bottom: 20px; /* Ruimte tussen tekst en grafieken */
            font-size: 30px;
            font-weight: bold;
            color: white; /* Samenvattende tekst wit */
            text-align: center;
        }
        #footerText {
            margin-top: 20px;
            font-size: 14px;
            color: white; /* Tekst wit onderaan */
            text-align: center;
        }
    </style>
</head>
<body>
    <h1>Kieswijzer Modules Lexgen AI</h1>
    <div id="questionContainer">
        <p id="questionText"></p>
        <div id="answerContainer"></div>
    </div>
    <div id="chartContainer">
        <h2>Resultaten</h2>
        <p id="summaryText"></p> <!-- Samenvattende tekst boven de grafieken -->
        <div class="chart-container">
            <canvas id="chart1" class="chart"></canvas>
            <canvas id="chart2" class="chart"></canvas>
            <canvas id="chart3" class="chart"></canvas>
            <canvas id="chart4" class="chart"></canvas>
        </div>
        <p id="footerText">Bedankt voor het gebruik van de Kieswijzer Modules Lexgen AI!</p>
    </div>
    <script>
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
            // ... De rest van de vragenlijst
        ];

        const modules = {
            "Module 1: AI-Research": 0,
            "Module 2: AI-Analyse": 0,
            "Module 3: Document Generatie": 0,
            "Module 4: AI-Assistent": 0
        };

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
            questionContainer.style.display = "none";
            chartContainer.style.display = "block";

            const moduleNames = Object.keys(modules);
            const totalScore = 10; 

            const chartData = moduleNames.map(module => {
                const score = modules[module];
                const percentage = (score / totalScore) * 100;
                return { module, score, percentage };
            });

            const maxScore = Math.max(...chartData.map(data => data.score));
            const topModules = chartData
                .filter(data => data.score === maxScore && maxScore > 0)
                .map(data => data.module);

            const summaryText = document.getElementById("summaryText");
            if (topModules.length > 0) {
                summaryText.textContent = `Uit deze kieswijzer is voortgekomen dat ${topModules.join(' en ')} het meest bij u past.`;
            } else {
                summaryText.textContent = "Er is geen duidelijke voorkeur voor een module vastgesteld.";
            }

            chartData.forEach((data, index) => {
                const ctx = document.getElementById(`chart${index + 1}`).getContext("2d");

                new Chart(ctx, {
                    type: "doughnut",
                    data: {
                        labels: [`${data.module} - ${data.percentage.toFixed(1)}%`, "Resterend"],
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
                                        return `${tooltipItem.label}: ${percentage}%`;
                                    }
                                }
                            }
                        }
                    }
                });
            });
        }

        showQuestion();
    </script>
</body>
</html>
