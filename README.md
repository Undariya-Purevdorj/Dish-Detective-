# Dish-Detective-

**Project Description:**
Dish Detective is an interactive guess-that-food quiz trivia game that challenges the user's knowledge of different popular dishes worldwide. A user is presented with 3-4 multiple choice questions, and they must guess the correct answer based on detailed hints such as the dish's appearance, ingredients, cultural origin, etc. The options will be displayed as text-based answers while the question will be an image or a text-based one. There is one standard difficulty level. The overall objective is to provide a fun and challenging learning experience for people who like yummy foods!

**10-15 Functional Requirements:**

<ins>Display, questions, & options:</ins>
- Quiz must display a series of multiple-choice questions to user
- Each question must include a prompt with a description and optional further hint about a dish
- User will be presented with 4 text-based answer choices for each question
- The question can be: An image of a food or culinary tool or A text-based question

<ins>Handle user input:</ins>
- User must be able to select only 1 answer from options
- Quiz should check if answer is correct or incorrect upon click
- User click should trigger an immediate (positive or negative) response and feedback

<ins>Immediate feedback:</ins>
- Answering correctly should cause message pop up with positive words (“yummy!”, “bon appetit”, etc).
- Answering incorrectly should result in message pop up with negative words (“aww…”, “dang!”, etc).
- The pop-up messages will appear for only a limited number of questions.
- No response should result in a “times up!” message display

<ins>Score tracking:</ins>
- Quiz records user’s score based on number of correct answers
- Final score should be displayed at the end of quiz attempt
  
<ins>A countdown timer:</ins>
- Each round should have a countdown timer placed demurely in the upper right corner of screen (time given will be decided upon testing)
- Timer reaching zero results in an automatic incorrect recording, and the next question should appear
- Timer should reset for each new question

<ins>Hints:</ins>
- One (optional) additional piece of information related to the current round's answer can be given by clicking a “hint” button (displayed how?)
- The hints will appear for only a limited number of questions.
- 
<ins>Show correct answer:</ins>
- After answering (or timer running out), the correct answer should always be highlighted to user

<ins>End of game summary:</ins>
- After the final question, the user should see a summary screen with their total score.
- A message like "You answered X out of Y questions correctly!" should be displayed.
- After the user completes the quiz, the final score should be displayed along with a message like "Well done!" or "Better luck next time!" depending on their performance.
- A call to action like "Try again".

<ins>**Randomizations**</ins>
- Each time the quiz starts, the questions should be presented in random order to keep the quiz fresh.
- The answer options should also be randomized for each question to avoid memorization.

<ins>Achievement system (optional) to explore API’s:</ins>
- A recipe finder feature allows users to explore how to make each dish that user has learned so far or some sort of reward system
- BUT The priority is the core functionality of the game. If time allows, I may add this (recipe finder API), but it is unlikely.

