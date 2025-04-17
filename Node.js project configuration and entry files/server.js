const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
app.use(express.json());
app.use(express.static(__dirname));

const questions = [
    { 
        question: "Which of these grains is gluten-free?", 
        options: ["A) Wheat", "B) Barley", "C) Quinoa", "D) Rye"], 
        correct: "C) Quinoa" 
    },
    { 
        question: "What gas, produced by yeast, makes bread dough rise?", 
        options: ["A) Oxygen", "B) Nitrogen", "C) Carbon Dioxide", "D) Helium"], 
        correct: "C) Carbon Dioxide" 
    },
    { 
        question: "Which animal's milk is used to make authentic Roquefort cheese?", 
        image: "images/roquefortCheese.jpg", 
        options: ["A) Goat", "B) Sheep", "C) Horse", "D) Donkey"], 
        correct: "B) Sheep" 
    },
    { 
        question: "What is the main ingredient in the Middle Eastern dip hummus?", 
        options: ["A) Kabuli", "B) Sierra", "C) Lima Beans", "D) Chickpeas"], 
        correct: "D) Chickpeas" 
    },
    { 
        question: "What is the base liquid in a classic martini?", 
        options: ["A) Tequila", "B) Vodka", "C) Rum", "D) Brandy"], 
        correct: "B) Vodka" 
    },
    { 
        question: "What is the main ingredient in meringue?", 
        image: "images/meringue.webp", 
        options: ["A) Egg yolks", "B) Egg whites", "C) Flour", "D) Butter"], 
        correct: "B) Egg whites" 
    },
    { 
        question: "What spice gives curry its yellow color?", 
        options: ["A) Cumin", "B) Paprika", "C) Turmeric", "D) Coriander"], 
        correct: "C) Turmeric" 
    },
    { 
        question: "Which sugar, less sweet than sucrose, is naturally present in milk?", 
        options: ["A) Glucose", "B) Fructose", "C) Maltose", "D) Lactose"], 
        correct: "D) Lactose" 
    },
    { 
        question: "What tropical fruit is the most produced fruit globally by weight?", 
        options: ["A) Banana", "B) Mango", "C) Pineapple", "D) Papaya"], 
        correct: "A) Banana" 
    },
    { 
        question: "What spice comes from the bark of a tree?", 
        options: ["A) Ginger", "B) Cinnamon", "C) Saffron", "D) Cardamom"], 
        correct: "B) Cinnamon" 
    },
    { 
        question: "What is the base ingredient of marshmallows?", 
        options: ["A) Flour", "B) Yeast", "C) Cocoa", "D) Gelatin"], 
        correct: "D) Gelatin" 
    },
    { 
        question: "What do you call ramen noodles that use soup made from pork bones?", 
        image: "images/tonkotsu.webp", 
        options: ["A) Tonjiru ramen", "B) Butabara ramen", "C) Tonkotsu ramen", "D) Butabone ramen"], 
        correct: "C) Tonkotsu ramen" 
    },
    { 
        question: "Which vegetable is the base of a classic French ratatouille?", 
        options: ["A) Cucumber", "B) Eggplant", "C) Potato", "D) Broccoli"], 
        correct: "B) Eggplant" 
    },
    { 
        question: "Which leaf is used to make green tea?", 
        options: ["A) Camellia sinensis", "B) Mint", "C) Sage", "D) Basil"], 
        correct: "A) Camellia sinensis" 
    },
];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

app.get('/api/questions', (req, res) => {
    const shuffledQuestions = shuffle([...questions]);
    res.json(shuffledQuestions);
});

app.get('/api/question/:index', (req, res) => {
    const index = parseInt(req.params.index);
    if (index >= 0 && index < questions.length) {
        res.json(questions[index]);
    } else {
        res.status(404).json({ error: 'Question not found' });
    }
});

app.post('/api/validate', (req, res) => {
    const { questionIndex, selectedAnswer } = req.body;
    if (questionIndex >= 0 && questionIndex < questions.length) {
        const correctAnswer = questions[questionIndex].correct;
        const isCorrect = selectedAnswer === correctAnswer;
        res.json({ isCorrect, correctAnswer });
    } else {
        res.status(400).json({ error: 'Invalid question index' });
    }
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dishDetective.html'));
});

// Only start the server if this file is run directly (not imported)
if (require.main === module) {
    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
    });
}

module.exports = app;