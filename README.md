# Dish-Detective-

**Project Description:**

Dish Detective is an interactive guess-that-food quiz trivia game that challenges the user's knowledge of different popular dishes worldwide. A user is presented with multiple choice questions, and they must guess the correct answer based on detailed hints such as the dish's appearance, ingredients, cultural origin, etc. The options will be displayed as text-based answers while the question will be an image or a text-based one. There is one standard difficulty level. The overall objective is to provide a fun and challenging learning experience for people who like yummy foods!

**10-15 Functional Requirements:**

<ins>Display, questions, & options:</ins>
- Show a series of multiple-choice questions (image or text-based).
- Each question includes a prompt and optional hint.
- Display 4 text-based answer choices.

<ins>Handle user input:</ins>
- User selects 1 answer per question.
- Click triggers immediate feedback (correct/incorrect).

<ins>Immediate feedback:</ins>
- Correct = positive message ("Yummy!", "Bon Appétit!")
- Incorrect = negative message ("Aww...", "Dang!")
- No answer = "Time's up!"
- Feedback shown for limited questions only.

<ins>Score tracking:</ins>
- Track correct answers.
- Show final score at the end.
  
<ins>A countdown timer:</ins>
- Timer shown top-right; resets each question.
- Time-out = auto-wrong + move to next question.

<ins>Hints:</ins>
- Optional “Hint” button reveals extra clue (limited use).

<ins>Show correct answer:</ins>
- Always show correct answer after response or timeout.

<ins>End of game summary:</ins>
- Show total score with message:
- "You answered X out of Y!" + Encouraging message + “Try again” button.

<ins>**Randomizations**</ins>
- Randomize question and answer order on each playthrough.

<ins>Achievement system (optional) to explore API’s:</ins>
- Recipe finder or reward system (low priority).
