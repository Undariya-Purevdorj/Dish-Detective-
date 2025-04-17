const request = require('supertest');
const app = require('./server');

describe('Backend API Endpoints', () => {
    test('GET /api/questions should return a shuffled list of questions', async () => {
        const response = await request(app).get('/api/questions');
        expect(response.status).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
        expect(response.body.length).toBeGreaterThan(0); // Fixed typo
        expect(response.body[0]).toHaveProperty('question');
        expect(response.body[0]).toHaveProperty('options');
        expect(response.body[0]).toHaveProperty('correct');
    });

    test('GET /api/question/:index should return a specific question', async () => {
        const response = await request(app).get('/api/question/0');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('question', "Which of these grains is gluten-free?");
        expect(response.body.options).toContain("C) Quinoa");
        expect(response.body.correct).toBe("C) Quinoa");

        const invalidResponse = await request(app).get('/api/question/999');
        expect(invalidResponse.status).toBe(404);
        expect(invalidResponse.body).toHaveProperty('error', 'Question not found');
    });

    test('POST /api/validate should validate an answer', async () => {
        const correctResponse = await request(app)
            .post('/api/validate')
            .send({ questionIndex: 0, selectedAnswer: "C) Quinoa" });
        expect(correctResponse.status).toBe(200);
        expect(correctResponse.body.isCorrect).toBe(true);
        expect(correctResponse.body.correctAnswer).toBe("C) Quinoa");

        const incorrectResponse = await request(app)
            .post('/api/validate')
            .send({ questionIndex: 0, selectedAnswer: "A) Wheat" });
        expect(incorrectResponse.status).toBe(200);
        expect(incorrectResponse.body.isCorrect).toBe(false);
        expect(incorrectResponse.body.correctAnswer).toBe("C) Quinoa");

        const invalidResponse = await request(app)
            .post('/api/validate')
            .send({ questionIndex: 999, selectedAnswer: "A) Wheat" });
        expect(invalidResponse.status).toBe(400);
        expect(invalidResponse.body).toHaveProperty('error', 'Invalid question index');
    });
});