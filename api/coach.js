const BACKEND_URL_KEY = "fitness_coach_backend_url";

function $(id) {
  return document.getElementById(id);
}

document.addEventListener("DOMContentLoaded", () => {
  const backendInput = $("coachBackendUrl");
  const saveBtn = $("saveCoachUrl");
  const askBtn = $("askCoachBtn");
  const questionInput = $("coachQuestion");
  const answerBox = $("coachAnswer");

  const savedUrl =
    localStorage.getItem(BACKEND_URL_KEY) ||
    "https://program-fit-version2.vercel.app/api/coach";

  if (backendInput) {
    backendInput.value = savedUrl;
  }

  if (saveBtn) {
    saveBtn.addEventListener("click", () => {
      const url = backendInput.value.trim();
      localStorage.setItem(BACKEND_URL_KEY, url);
      answerBox.textContent = "Backend-URL gespeichert.";
    });
  }

  if (askBtn) {
    askBtn.addEventListener("click", frageCoach);
  }

  async function frageCoach() {
    const backendUrl = backendInput.value.trim();
    const question = questionInput.value.trim() || "Hallo Coach";

    answerBox.textContent = "Coach denkt nach ...";

    try {
      const response = await fetch(backendUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: question,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        answerBox.textContent =
          "Fehler: " + (data.error || "Unbekannter Serverfehler");
        return;
      }

      answerBox.textContent = data.answer || "Keine Antwort erhalten.";
    } catch (error) {
      answerBox.textContent = "Fehler: " + error.message;
    }
  }

  window.coachQuickQuestion = function (text) {
    if (questionInput) {
      questionInput.value = text;
    }
    frageCoach();
  };
});
