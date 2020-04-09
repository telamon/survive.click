<script>
export let shareMsg
export let vote
export let motion // default shareMsg
export let motd
export let links
let mood // not used really. quite annoying.
const voteChange = e => {
  vote.set(e.target.value)
}

</script>

<main class="grid1">
  <form id="poll" class="colc">
    <fieldset>
      <legend id="motd">{motd}</legend>
      <h3><small>1.</small> Pick A Pebble</h3>
      <section id="options">
        <div>
          <input type=radio id="c0" bind:group={mood} value={3} on:click={voteChange}>
          <label for="c0"><span class="r">:D</span></label>
        </div>

        <div>
          <input type=radio id="c1" bind:group={mood} value={2} on:click={voteChange}>
          <label for="c1"><span class="r">:)</span></label>
        </div>

        <div>
          <input type=radio id="c2" bind:group={mood} value={1} on:click={voteChange}>
          <label for="c2">:<small>&gt;</small></label>
        </div>

        <div>
          <input type=radio id="c3" bind:group={mood} value={-1} on:click={voteChange}>
          <label for="c3">:<small>\</small></label>
        </div>

        <div>
          <input type=radio id="c4" bind:group={mood} value={-2} on:click={voteChange}>
          <label for="c4">:<small>c</small></label>
        </div>

        <div>
          <input type=radio id="c5" bind:group={mood} value={-3} on:click={voteChange}>
          <label for="c5">D:</label>
        </div>
      </section>
      <section id="replicate">
        <h3><small>2.</small> Hide it in plain sight</h3>
        <div class="motionContainer">
          <small class="subl">customize message</small><br/>
          <textarea id="motion" placeholder={motion} bind:value={$shareMsg}></textarea>
          <!--
          <input id="encryptText" type="checkbox"/>
          <label for="encryptText"><small class="subl">E?</small></label>
          <br/>-->
          <code>{($shareMsg ? $shareMsg.length : 0)} / 100</code>
        </div>
        <p id="social">
          <a href={$links.tw} id="aTw">Twyttr</a>
          <a href={$links.fb} id="aFb">Fäcebook</a>
          <a href={$links.vk} id="aVk">vKontrakte</a>
          <!-- We don't have a telegram-bot witness yet,
            and regardless each ballot needs to be sent in public
            in order to verify the validity of the witness' dataset.
          <a id="aTg" href="#">Telegram</a>
          -->
        </p>
        <p>
        <a href={$links.direct} id="pickleLink">🥒pebblelink</a>
          <br/>
          <small class="subl">(or plant your pebblelink anywhere 🤖 can see)</small>
          <br/>
          <input type="text" id="pickleInput" value={$links.direct}>
        </p>
      </section>
    </fieldset>
  </form>
  <footer class="colc">
    <code>v1.1.0
      <a href="https://github.com/telamon/survive.click">Source</a>
      <a href="https://github.com/telamon/survive.click/issues">Issues</a>
      <a href="https://github.com/telamon/survive.click/blob/master/LICENSE">License</a>
      <a href="nag" id="panicButton">Panic!</a>
    </code>
    <code class="subl">Copyleft<span class="fliph">©</span>2020 <a style="color: #888" href="http://decentlabs.se">DecentLabs</a></code>
  </footer>
</main>

<style>
  .fliph { display: inline-block; transform: scaleX(-1.0); }
  /*
main {
  text-align: center;
padding: 1em;
         max-width: 240px;
margin: 0 auto;
}

h1 {
  color: #ff3e00;
  text-transform: uppercase;
  font-size: 4em;
  font-weight: 100;
}

@media (min-width: 640px) {
  main {
    max-width: none;
  }
}*/
</style>
