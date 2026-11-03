//get the pathname from the current url
const path = window.location.pathname
const siteUrl = new URL("../", document.currentScript.src);
const assetsUrl = new URL("assets/", siteUrl);
const homeUrl = new URL("index.html", siteUrl);
const manualUrl = new URL("pages/manual.html", siteUrl);

/* Settings markup is shared between desktop and mobile. */
const header = `
<header class="dock-wrap">
  <nav class="dock" aria-label="Main navigation">
    <a class="brand" href="${homeUrl}">
      <img src="${new URL("logo.png", assetsUrl)}" alt="Daedalus Logo" style="display:flex; justify-content: center; width: 32px; filter: drop-shadow(0px 1px 1px var(--amber));">
      <span>DAEDALUS</span>
    </a>
    <a class="nav-link" href="${homeUrl}">
      <img src="${new URL("icons/home-svgrepo-com.svg", assetsUrl)}" height="20px"><span class="nav-label">HOME</span>
    </a>
    <a class="nav-link" href="https://github.com/7k-studio/Daedalus/releases"> <!--data-page="download"-->
      <img src="${new URL("icons/download-svgrepo-com.svg", assetsUrl)}" height="20px"><span class="nav-label">DOWNLOAD</span>
    </a>
    <!--<a class="nav-link" href="#news" data-page="news"><img src="${new URL("icons/news-svgrepo-com.svg", assetsUrl)}" height="20px"><span class="nav-label">NEWS</span></a>-->
    <a class="nav-link" href="${manualUrl}">
      <img src="${new URL("icons/wiki-svgrepo-com.svg", assetsUrl)}" height="20px"><span class="nav-label">MANUAL</span>
    </a>
    <a class="nav-link" href="https://github.com/7k-studio/Daedalus">
      <span class="nav-icon"><img src="${new URL("GitHub_Logos/GitHub Logos/SVG/GitHub_Invertocat_Black_Clearspace.svg", assetsUrl)}" alt="GitHub" height="24px"></span><span class="nav-label">GITHUB</span>
    </a>
  </nav>
</header>
  `;

document.querySelector("body").insertAdjacentHTML("afterbegin", header);

//add the active class to the anchor tag with the href === path
document.querySelector(`[href='${path}']`).classList.add(`active`)