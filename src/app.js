import {
  initializeScoreboard, addToScoreBoard, setDisabledState, clearInput,
} from './functions.js';

export default () => {
  const refreshBtn = document.getElementById('refresh-btn');
  refreshBtn.addEventListener('click', initializeScoreboard);
  refreshBtn.click();

  const formElem = document.querySelector('form');
  const userInput = document.getElementById('name');
  const scoreInput = document.getElementById('score');
  formElem.addEventListener('submit', async (e) => {
    e.preventDefault();
    const submitInput = formElem.querySelector('input[type=submit]');
    setDisabledState(submitInput, true);
    const success = await addToScoreBoard(userInput.value, scoreInput.value);
    if (success) initializeScoreboard();
    clearInput(userInput, scoreInput);
    setDisabledState(submitInput, false);
  });
};