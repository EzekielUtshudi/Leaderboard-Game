export default `
  <header>
    <h1>Leaderboard-Game-Score</h1>
  </header>
  <main>
    <section class="leaderboard">
      <div class="header">
        <h2>Recent scores</h2>
        <button id="refresh-btn" type="button">Refresh</button>
      </div>
      <div id="scoreboard">
        <ul class="content"></ul>
        <div class="overlay">
          <div class="overlay-content">
            <div class="boxes">
              <div class="box"></div>
              <div class="box"></div>
              <div class="box"></div>
              <div class="box"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="add-score">
      <div class="header">
        <h2>Add your score</h2>
      </div>
      <form action="#">
        <label>
          <span>username</span>
          <input type="text" name="name" id="name" required autocomplete="off">
        </label>
        <label>
          <span>score</span>
          <input type="number" name="score" id="score" required autocomplete="off">
        </label>
        <input type="submit" value="Submit">
      </form>
    </section>
  </main>
  `;