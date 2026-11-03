/* Settings markup is shared between desktop and mobile. */
const footer = `
<footer class="footer">
  <div class="wrap">
    <span>DEADALUS // PARAMETRIC WINGS</span>
    <span>Latest Version: v0.4</span>
  </div>
</footer>
  `;

document.querySelector("body").insertAdjacentHTML("afterend", footer);