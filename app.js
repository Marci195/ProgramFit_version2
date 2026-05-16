const exercises = {
  squat: {
    name: 'Kniebeuge ohne Gewicht',
    focus: 'Beine, Po, Kreislauf',
    video: 'https://www.youtube.com/embed/aclHkVaku9U',
    short: 'Füße hüftbreit, Rücken neutral, langsam nach unten und kontrolliert hoch.',
    steps: [
      'Füße hüft- bis schulterbreit aufstellen.',
      'Bauch leicht anspannen, Brustbein aufrecht halten.',
      'Hüfte nach hinten schieben, Knie folgen den Zehen.',
      'Nur so tief gehen, wie es sauber und schmerzfrei möglich ist.',
      'Über die Fersen wieder hochdrücken.'
    ],
    backSafe: 'Für Bandscheibe: kleinere Bewegung, langsames Tempo, kein Gewicht, kein Rundrücken.'
  },
  lunge: {
    name: 'Ausfallschritt rückwärts',
    focus: 'Beine, Po, Gleichgewicht',
    video: 'https://www.youtube.com/embed/QOVaHwm-Q6U',
    short: 'Einen Schritt zurück, vorderes Knie stabil, Oberkörper aufrecht.',
    steps: ['Aufrecht stehen.', 'Einen Fuß kontrolliert nach hinten setzen.', 'Beide Knie beugen, vorderes Knie bleibt stabil.', 'Zurück in den Stand drücken.', 'Seiten abwechseln.'],
    backSafe: 'Bei Rückenproblemen lieber kleine Schritte oder Split Squat mit Festhalten machen.'
  },
  pushup: {
    name: 'Liegestütz erhöht',
    focus: 'Brust, Schultern, Arme, Core',
    video: 'https://www.youtube.com/embed/IODxDxX7oi4',
    short: 'Hände auf Bank/Tisch, Körper bildet eine Linie, langsam beugen und drücken.',
    steps: ['Hände erhöht auf Bank, Tisch oder Mauer.', 'Bauch und Po leicht anspannen.', 'Ellbogen kontrolliert beugen.', 'Brust Richtung Unterlage führen.', 'Wieder wegdrücken, ohne ins Hohlkreuz zu fallen.'],
    backSafe: 'Erhöhte Variante ist rückenfreundlicher. Keine durchhängende Hüfte.'
  },
  bridge: {
    name: 'Glute Bridge / Hüftheben',
    focus: 'Po, hintere Kette, Rückenstabilität',
    video: 'https://www.youtube.com/embed/wPM8icPu6H8',
    short: 'Rückenlage, Füße aufstellen, Hüfte anheben, Po oben kurz anspannen.',
    steps: ['Auf den Rücken legen, Füße hüftbreit aufstellen.', 'Bauch leicht aktivieren.', 'Hüfte langsam anheben.', 'Oben Po anspannen, nicht ins Hohlkreuz überstrecken.', 'Langsam absenken.'],
    backSafe: 'Sehr gut als rückenfreundliche Po-Übung. Nur schmerzfrei ausführen.'
  },
  row: {
    name: 'Rudern mit Widerstandsband',
    focus: 'Rücken, Haltung, Arme',
    video: 'https://www.youtube.com/embed/xQNrFHEMhI4',
    short: 'Band fixieren, Ellbogen nach hinten ziehen, Schulterblätter zusammenführen.',
    steps: ['Band sicher befestigen.', 'Aufrecht stehen oder sitzen.', 'Band Richtung Rippen ziehen.', 'Schulterblätter sanft zusammenziehen.', 'Langsam zurückführen.'],
    backSafe: 'Neutraler Rücken, keine ruckartigen Bewegungen.'
  },
  plank: {
    name: 'Plank auf Knien oder Unterarmen',
    focus: 'Core-Stabilität',
    video: 'https://www.youtube.com/embed/pSHjTRCQxIw',
    short: 'Körper stabil halten, Bauch aktiv, ruhig atmen.',
    steps: ['Unterarme auflegen.', 'Knie oder Zehen am Boden.', 'Bauch leicht einziehen.', 'Körper ruhig halten.', 'Abbrechen, sobald Rücken durchhängt.'],
    backSafe: 'Für Bandscheibe: kurze Haltezeit, lieber auf Knien starten.'
  },
  birddog: {
    name: 'Bird Dog',
    focus: 'Rückenstabilität, Core, Koordination',
    video: 'https://www.youtube.com/embed/wiFNA3sqjCA',
    short: 'Vierfüßlerstand, Arm und Gegenbein langsam strecken, Becken stabil.',
    steps: ['Vierfüßlerstand einnehmen.', 'Bauch leicht anspannen.', 'Rechten Arm und linkes Bein langsam strecken.', 'Kurz halten, ohne Becken zu drehen.', 'Seite wechseln.'],
    backSafe: 'Top-Übung bei Rückenstabilisation. Langsam und kontrolliert.'
  },
  deadbug: {
    name: 'Dead Bug',
    focus: 'Bauch, Core, Wirbelsäulenstabilität',
    video: 'https://www.youtube.com/embed/g_BYB0R-4Ws',
    short: 'Rückenlage, Arme/Beine kontrolliert bewegen, Rücken bleibt stabil.',
    steps: ['Auf den Rücken legen.', 'Arme hoch, Beine angewinkelt.', 'Gegenarm und Gegenbein langsam senken.', 'Rücken bleibt neutral am Boden.', 'Zurück und Seite wechseln.'],
    backSafe: 'Keine Sit-ups. Dead Bug ist deutlich rückenfreundlicher.'
  },
  stepup: {
    name: 'Step-Ups auf Stufe',
    focus: 'Beine, Po, Alltagstauglichkeit',
    video: 'https://www.youtube.com/embed/dQqApCGd5Ss',
    short: 'Auf stabile Stufe steigen, kontrolliert hoch und langsam zurück.',
    steps: ['Stabile Stufe wählen.', 'Ganzer Fuß auf die Stufe.', 'Kontrolliert hochdrücken.', 'Langsam absteigen.', 'Seite wechseln.'],
    backSafe: 'Niedrige Stufe wählen, festhalten erlaubt.'
  },
  walk: {
    name: 'Zügiges Gehen / Intervall Walk',
    focus: 'Fettverbrennung, Herz-Kreislauf',
    video: 'https://www.youtube.com/embed/enYITYwvPAQ',
    short: '30–60 Minuten zügig gehen. Ihr sollt reden können, aber leicht außer Atem sein.',
    steps: ['5 Minuten locker starten.', '20–45 Minuten zügig gehen.', 'Optional: 1 Minute schneller, 2 Minuten normal.', '5 Minuten locker auslaufen.', 'Danach Hüfte/Waden leicht dehnen.'],
    backSafe: 'Gehen ist meist gut verträglich. Bei ausstrahlenden Schmerzen abbrechen.'
  }
};

const plan = [
  { day: 'Tag 1', title: 'Ganzkörper Kraft', duration: '45–60 Min', exercises: [['squat','12–15'], ['pushup','8–12'], ['bridge','15'], ['row','12–15'], ['plank','20–40 Sek.']] },
  { day: 'Tag 2', title: 'Cardio draußen', duration: '45–60 Min', exercises: [['walk','30–60 Min'], ['birddog','8 je Seite'], ['deadbug','8 je Seite']] },
  { day: 'Tag 3', title: 'Oberkörper & Core', duration: '40–55 Min', exercises: [['row','12–15'], ['pushup','8–12'], ['birddog','10 je Seite'], ['deadbug','10 je Seite'], ['plank','20–40 Sek.']] },
  { day: 'Tag 4', title: 'Unterkörper & Ausdauer', duration: '45–60 Min', exercises: [['stepup','10 je Seite'], ['lunge','8–10 je Seite'], ['bridge','15–20'], ['walk','20–30 Min']] }
];

let selectedSeconds = 45;
let timerInterval = null;

function $(id){ return document.getElementById(id); }

function switchView(view){
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active-view'));
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  $(view).classList.add('active-view');
  document.querySelector(`.tab[data-view="${view}"]`).classList.add('active');
}

document.querySelectorAll('.tab').forEach(btn => btn.addEventListener('click', () => switchView(btn.dataset.view)));

function renderPlan(){
  const wrap = $('planCards');
  wrap.innerHTML = plan.map((p, idx) => `
    <article class="card">
      <div class="day-title">
        <div><span class="badge">${p.day}</span><h3>${p.title}</h3><p class="hint">${p.duration} · 3 Runden, sauber statt schnell</p></div>
        <button class="primary" onclick="markDone(${idx})">Erledigt</button>
      </div>
      <div class="danger"><strong>Rückenregel:</strong> Schmerzfrei bleiben, kein Hohlkreuz, keine ruckartigen Bewegungen.</div>
      ${p.exercises.map(([key,reps]) => {
        const e = exercises[key];
        return `<div class="exercise-row"><div><strong>${e.name}</strong><p>${reps} · ${e.focus}</p></div><button class="secondary" onclick="openExercise('${key}')">Anleitung</button></div>`;
      }).join('')}
    </article>
  `).join('');
}

function renderLibrary(){
  $('exerciseList').innerHTML = Object.entries(exercises).map(([key,e]) => `
    <article class="card">
      <h3>${e.name}</h3>
      <p>${e.short}</p>
      <p class="hint"><strong>Fokus:</strong> ${e.focus}</p>
      <button class="primary" onclick="openExercise('${key}')">Video & Anleitung öffnen</button>
    </article>
  `).join('');
}

function openExercise(key){
  const e = exercises[key];
  $('modalBody').innerHTML = `
    <h2>${e.name}</h2>
    <p class="hint">${e.focus}</p>
    <div class="video-box"><iframe src="${e.video}" title="${e.name}" allowfullscreen></iframe></div>
    <p><strong>Kurz:</strong> ${e.short}</p>
    <h3>Schritte</h3>
    <ol class="steps">${e.steps.map(s => `<li>${s}</li>`).join('')}</ol>
    <div class="danger"><strong>Rückenfreundliche Variante:</strong> ${e.backSafe}</div>
  `;
  $('modal').classList.remove('hidden');
}

$('closeModal').addEventListener('click', () => $('modal').classList.add('hidden'));
$('modal').addEventListener('click', e => { if(e.target.id === 'modal') $('modal').classList.add('hidden'); });

function markDone(idx){
  const today = new Date().toLocaleDateString('de-AT');
  localStorage.setItem('lastDone', JSON.stringify({date: today, workout: plan[idx].title}));
  updateToday();
  alert('Stark! Training gespeichert.');
}

function updateToday(){
  const saved = JSON.parse(localStorage.getItem('lastDone') || 'null');
  if(saved){ $('todayText').textContent = `Letztes erledigtes Training: ${saved.workout} am ${saved.date}.`; }
  else { $('todayText').textContent = 'Heute wäre ein guter Tag für Tag 1 oder den nächsten offenen Trainingstag.'; }
}

$('startRecommended').addEventListener('click', () => switchView('plan'));
$('resetToday').addEventListener('click', () => { localStorage.removeItem('lastDone'); updateToday(); });

document.querySelectorAll('[data-seconds]').forEach(btn => btn.addEventListener('click', () => {
  selectedSeconds = Number(btn.dataset.seconds);
  $('timerDisplay').textContent = formatTime(selectedSeconds);
}));
$('startTimer').addEventListener('click', () => startTimer(selectedSeconds));
function formatTime(sec){ return `${String(Math.floor(sec/60)).padStart(2,'0')}:${String(sec%60).padStart(2,'0')}`; }
function startTimer(sec){
  clearInterval(timerInterval);
  let left = sec;
  $('timerDisplay').textContent = formatTime(left);
  timerInterval = setInterval(() => {
    left--;
    $('timerDisplay').textContent = formatTime(left);
    if(left <= 0){ clearInterval(timerInterval); navigator.vibrate?.(300); alert('Pause vorbei! Weiter geht’s.'); }
  }, 1000);
}

$('saveProgress').addEventListener('click', () => {
  const entries = JSON.parse(localStorage.getItem('progressEntries') || '[]');
  entries.unshift({
    date: new Date().toLocaleString('de-AT'),
    weight: $('weightInput').value,
    waist: $('waistInput').value,
    note: $('noteInput').value
  });
  localStorage.setItem('progressEntries', JSON.stringify(entries));
  $('weightInput').value = ''; $('waistInput').value = ''; $('noteInput').value = '';
  renderProgress();
});
function renderProgress(){
  const entries = JSON.parse(localStorage.getItem('progressEntries') || '[]');
  $('progressEntries').innerHTML = entries.length ? entries.map(e => `<div class="entry"><strong>${e.date}</strong><br>Gewicht: ${e.weight || '-'} kg · Bauch: ${e.waist || '-'} cm<br>${e.note || ''}</div>`).join('') : '<p class="hint">Noch keine Einträge.</p>';
}


// KI-Coach
const defaultCoachContext = () => {
  const lastDone = localStorage.getItem('lastDone') || 'kein abgeschlossenes Training gespeichert';
  const progress = localStorage.getItem('progressEntries') || '[]';
  return {
    goal: 'Abnehmen und Muskelaufbau, 4x pro Woche, zuhause und draußen',
    warning: 'Eine Person hatte vor ca. 2 Jahren einen Bandscheibenvorfall. Keine medizinische Diagnose geben. Bei Schmerzen, Kribbeln, Taubheit oder Ausstrahlung ärztlich/physiotherapeutisch abklären.',
    plan: plan.map(p => ({title: p.title, type: p.type, exercises: p.exercises || []})),
    lastDone,
    recentProgress: JSON.parse(progress).slice(0, 5)
  };
};

function loadCoachEndpoint(){
  const saved = localStorage.getItem('coachEndpoint') || '';
  const input = $('coachEndpoint');
  if(input) input.value = saved;
}

async function askCoachWithPrompt(promptText){
  const endpoint = localStorage.getItem('coachEndpoint');
  if(!endpoint){
    $('coachAnswer').textContent = 'Bitte zuerst die Backend-URL speichern, z.B. https://dein-projekt.vercel.app/api/coach';
    return;
  }
  $('coachAnswer').textContent = 'Coach denkt kurz nach ...';
  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        question: promptText,
        context: defaultCoachContext()
      })
    });
    const data = await res.json();
    if(!res.ok) throw new Error(data.error || 'Fehler beim KI-Coach');
    $('coachAnswer').textContent = data.answer || 'Keine Antwort erhalten.';
  } catch (err){
    $('coachAnswer').textContent = 'Fehler: ' + err.message;
  }
}

const saveEndpointBtn = $('saveCoachEndpoint');
if(saveEndpointBtn){
  loadCoachEndpoint();
  saveEndpointBtn.addEventListener('click', () => {
    localStorage.setItem('coachEndpoint', $('coachEndpoint').value.trim());
    $('coachAnswer').textContent = 'Backend-URL gespeichert.';
  });
  $('askCoach').addEventListener('click', () => {
    const q = $('coachQuestion').value.trim();
    if(!q) return;
    askCoachWithPrompt(q);
  });
  document.querySelectorAll('.coachQuick').forEach(btn => {
    btn.addEventListener('click', () => {
      $('coachQuestion').value = btn.dataset.prompt;
      askCoachWithPrompt(btn.dataset.prompt);
    });
  });
}


renderPlan(); renderLibrary(); renderProgress(); updateToday();
