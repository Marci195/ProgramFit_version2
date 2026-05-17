async function frageCoach() {
  const frage = document.getElementById("questionInput").value;
  const antwortBox = document.getElementById("coachAnswer");

  antwortBox.innerText = "Coach denkt kurz nach ...";

  try {
    const response = await fetch(
      "https://program-fit-version2.vercel.app/api/coach",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: frage,
        }),
      }
    );

    const data = await response.json();

    console.log(data);

    if (data.answer) {
      antwortBox.innerText = data.answer;
    } else {
      antwortBox.innerText =
        "Fehler: " + (data.error || "Unbekannter Fehler");
    }
  } catch (error) {
    console.error(error);

    antwortBox.innerText =
      "Fehler beim KI-Coach: " + error.message;
  }
}
