/* eslint-disable-next-line import/prefer-default-export */
export const initializePageHTML = () => {
  const initialHTML = `
  <header>
    <h1>Leaderboard</h1>
  </header>
  <main>
    <section class="leaderboard">
      <div class="header">
        <h2>Recent scores</h2>
        <button type="button">Refresh</button>
      </div>
      <ul class="scores">
        <li>Player 1: 57</li>
        <li>Player 2: 405</li>
        <li>Player 3: 98</li>
        <li>Player 4: 86</li>
        <li>Player 5: 55</li>
      </ul>
    </section>
    <section class="add-score">
      <div class="header">
        <h2>Add your Current score</h2>
      </div>
      <form action="#">
        <input type="text" name="name" id="name" placeholder="Your name">
        <input type="number" name="score" id="score" placeholder="Your score">
        <input type="submit" value="Submit">
      </form>
    </section>
  </main>
  `;
  document.body.innerHTML = initialHTML;
};