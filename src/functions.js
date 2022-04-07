import { getScores, addScore } from './app-api.js';
import initialHTML from './content.js';
import { showOverlay, hideOverlay } from './overlay.js';

export const initializePageHTML = () => {
  document.body.innerHTML = initialHTML;
};

export const createScoreCardElement = (user, score) => {
  const scoreLi = document.createElement('li');

  const innerHTML = `
    <div>
      <div class="details">
        <span class="name">${user}</span>
        <span class="name">${score}</span>
      </div>
      <div class="progress"></div>
    </div>
  `;

  scoreLi.classList.add('score-card');
  // scoreLi.classList.add('active');
  scoreLi.innerHTML = innerHTML;
  return scoreLi;
};

export const initializeScoreboard = async () => {
  const scoreboard = document.getElementById('scoreboard');
  showOverlay(scoreboard);
  const scoreboardContent = scoreboard.querySelector('.content');
  scoreboardContent.innerHTML = '';
  const scores = await getScores();
  await new Promise((resolve) => setTimeout(resolve, 1200));
  scores.result.sort((a, b) => b.score - a.score);

  const maxScore = scores.result[0].score;

  scores.result.forEach(({ user, score }) => {
    const scoreCard = createScoreCardElement(user, score);
    scoreboardContent.appendChild(scoreCard);
    scoreboardContent.getBoundingClientRect(); // NOTE: neccessary for transition to work

    scoreCard.querySelector('.progress').style.width = `${(score / maxScore) * 100}%`;
    scoreCard.querySelector('.progress').classList.add('active');
  });
  hideOverlay(scoreboard);
};

export const addToScoreBoard = async (usernameValue, scoreValue) => {
  const username = usernameValue.trim();
  const score = parseInt(scoreValue.trim(), 10);
  if (!username || !score) return false;
  const response = await addScore(username, score);
  if (response.message) return false;
  return true;
};

export const setDisabledState = (element, state) => {
  element.disabled = !!state;
};

export const clearInput = (...inputs) => inputs.forEach((input) => { input.value = ''; });