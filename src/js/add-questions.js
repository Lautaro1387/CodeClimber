let gameData = {
  "questions": []
};

function addQuestion(question, options) {
  const newQuestion = {
    "question": question,
    "options": []
  };

  for (const option of options) {
    newQuestion.options.push({ "option": option[0], "correct": option[1] });
  }

  gameData.questions.push(newQuestion);
}



addQuestion("What does HTML stand for?", [
  ["HyperText Markup Language", true],
  ["Berlín", false],
  ["Roma", false],
  ["Londres", false]
]);

addQuestion("How can you start an HTML file?", [
  ["<html>", false],
  ["<htmlll>", false],
  ["<!DOCTYPE>", true],
  ["aaahah", false]
]);

fetch("localhost:8000/api/quiz", {
  method: "POST",
  headers: {
    "Content-Type": "localhost:8000/api/quiz"
  },
  body: JSON.stringify(gameData)
})
  .then(response => response.json())
  .then(data => {
    console.log("El archivo JSON se ha guardado en el servidor:", data);
  })
  .catch(error => {
    console.error("Error al guardar el archivo JSON en el servidor:", error);
  });