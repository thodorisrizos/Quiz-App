# 🚀 JavaScript Quiz App

A simple interactive quiz application built using **HTML**, **CSS**, and **Vanilla JavaScript**. It dynamically displays questions, handles user input, tracks the score, and shows the final result with feedback based on performance.

## 🧠 Features

- Multiple choice questions
- Real-time score tracking
- Progress bar
- Immediate visual feedback (correct/incorrect)
- Final score screen with performance message
- Option to restart the quiz

## 📸 Screenshot

![Quiz Screenshot](img/screenshot.png)

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript

## 🚦 How to Use

1. Clone or download the repository.
2. Open `index.html` in your web browser.
3. Click **Start Quiz** to begin.
4. Select an answer. You’ll get instant feedback.
5. At the end, view your score and try again if you like.

## ✨ Customization

To modify the quiz questions, update the `questions` array in `script.js`:

```js
const questions = [
  {
    question: 'Your question here',
    options: ['Option1', 'Option2', 'Option3', 'Option4'],
    answer: 'Correct Option'
  },
  ...
];

