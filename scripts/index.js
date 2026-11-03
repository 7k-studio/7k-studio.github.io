
const $ = (s, root = document) => root.querySelector(s);
const $$ = (s, root = document) => [...root.querySelectorAll(s)];
const groups = [...new Set(chapters.map(c => c.group))];

let currentChapter = chapters[0].id;
let currentSettings = {
  theme: "paper",
  size: "regular",
  line: 1.85,
  width: 100,
  contrast: false,
  reducedMotion: false
};

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, c => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;",
    '"': "&quot;", "'": "&#39;"
  })[c]);
}

function buildTree(root) {
  root.innerHTML = "";

  groups.forEach(group => {
    const section = document.createElement("section");
    section.className = "tree-group";

    const toggle = document.createElement("button");
    toggle.className = "tree-toggle";
    toggle.type = "button";
    toggle.setAttribute("aria-expanded", "true");
    toggle.innerHTML =
      `<span>${escapeHTML(group)}</span><span class="symbol">−</span>`;

    const children = document.createElement("div");
    children.className = "tree-children";

    chapters.filter(c => c.group === group).forEach(chapter => {
      const link = document.createElement("a");
      link.className = "tree-link";
      link.href = "#manual/" + chapter.id;
      link.dataset.chapter = chapter.id;
      link.textContent = chapter.title;
      children.append(link);
    });

    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      toggle.querySelector(".symbol").textContent = open ? "+" : "−";
      children.hidden = open;
    });

    section.append(toggle, children);
    root.append(section);
  });
}

buildTree($("#desktop-tree"));
buildTree($("#mobile-tree"));

function applySettings() {
  const reader = $("#reader");
  reader.classList.remove("theme-paper", "theme-white", "theme-dark");
  reader.classList.add("theme-" + currentSettings.theme);
  reader.classList.toggle("high-contrast", currentSettings.contrast);

  const sizes = { small: "14px", regular: "16px", huge: "20px" };
  reader.style.setProperty("--reader-size", sizes[currentSettings.size]);
  reader.style.setProperty("--reader-line", currentSettings.line);
  reader.style.setProperty("--reader-width", currentSettings.width + "%");

  document.body.classList.toggle(
    "reduced-motion", currentSettings.reducedMotion
  );

  $$("[data-setting='theme']").forEach(container => {
    $$("button", container).forEach(button => {
      button.setAttribute("aria-pressed",
        String(button.dataset.value === currentSettings.theme));
    });
  });

  $$("[data-setting='size']").forEach(container => {
    $$("button", container).forEach(button => {
      button.setAttribute("aria-pressed",
        String(button.dataset.value === currentSettings.size));
    });
  });

  $$("[data-setting='line']").forEach(input => {
    input.value = currentSettings.line;
  });
  $$("[data-setting='width']").forEach(input => {
    input.value = currentSettings.width;
  });

  $$("[data-value-label='line']").forEach(label => {
    label.textContent = Number(currentSettings.line).toFixed(2);
  });
  $$("[data-value-label='width']").forEach(label => {
    label.textContent = currentSettings.width + "%";
  });

  $$("[data-setting='contrast']").forEach(input => {
    input.checked = currentSettings.contrast;
  });
  $$("[data-setting='reducedMotion']").forEach(input => {
    input.checked = currentSettings.reducedMotion;
  });
}

function resetSettings() {
  currentSettings = {
    theme: "paper",
    size: "regular",
    line: 1.85,
    width: 100,
    contrast: false,
    reducedMotion: false
  };
  applySettings();
}

/* Event delegation supports both desktop and mobile settings panels. */
document.addEventListener("click", event => {
  const button = event.target.closest(
    "#desktop-settings button, #mobile-settings button"
  );
  if (!button) return;

  const container = button.closest("[data-setting]");
  if (container) {
    const setting = container.dataset.setting;
    const value = button.dataset.value;
    if (setting === "theme") currentSettings.theme = value;
    if (setting === "size") currentSettings.size = value;
    applySettings();
  }

  if (button.dataset.action === "reset") resetSettings();
});

document.addEventListener("input", event => {
  const input = event.target;
  const setting = input.dataset.setting;
  if (!setting) return;

  if (setting === "line") currentSettings.line = Number(input.value);
  if (setting === "width") currentSettings.width = Number(input.value);
  if (setting === "contrast") currentSettings.contrast = input.checked;
  if (setting === "reducedMotion") {
    currentSettings.reducedMotion = input.checked;
  }
  applySettings();
});

/* Chapter renderer */
function renderChapter(id) {
  const index = chapters.findIndex(c => c.id === id);
  if (index < 0) return;

  const chapter = chapters[index];
  currentChapter = id;
  $("#article-content").innerHTML = chapter.body;

  $("#breadcrumbs").innerHTML = `
    <span>WIKI</span><span>/</span>
    <span>${escapeHTML(chapter.group.toUpperCase())}</span><span>/</span>
    <span>${escapeHTML(chapter.title)}</span>`;

  $$(".tree-link").forEach(link => {
    const active = link.dataset.chapter === id;
    link.classList.toggle("active", active);

    if (active) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");

    if (active) {
      const section = link.closest(".tree-group");
      const toggle = $(".tree-toggle", section);
      const children = $(".tree-children", section);
      toggle.setAttribute("aria-expanded", "true");
      toggle.querySelector(".symbol").textContent = "−";
      children.hidden = false;
    }
  });

  const prev = chapters[index - 1];
  const next = chapters[index + 1];

  $("#previous").hidden = !prev;
  $("#next").hidden = !next;

  if (prev) {
    $("#previous").href = "#manual/" + prev.id;
    $("#previous").textContent = "← " + prev.title;
  }
  if (next) {
    $("#next").href = "#manual/" + next.id;
    $("#next").textContent = next.title + " →";
  }

  $("#search").value = "";
  filterChapters("");
  applySettings();
}

const pageIds = [
  "home", "airfoil", "wing", "resources", "manual"
];

function showPage(page) {
  pageIds.forEach(id => $("#" + id).hidden = id !== page);

  $$("[data-page]").forEach(link => {
    const active = link.dataset.page === page;
    link.classList.toggle("active", active);
    if (active) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });

  window.scrollTo(0, 0);
}

function route() {
  const [page, chapter] = location.hash.slice(1).split("/");
  const target = pageIds.includes(page) ? page : "home";
  showPage(target);

  if (target === "manual") {
    const id = chapters.some(c => c.id === chapter)
      ? chapter : currentChapter;
    renderChapter(id);
  }
}

$$("[data-page]").forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    location.hash = link.getAttribute("href").slice(1);
  });
});

function filterChapters(query) {
  const q = query.trim().toLowerCase();
  let matches = 0;

  $$(".tree-group").forEach(group => {
    let groupMatches = 0;

    $$(".tree-link", group).forEach(link => {
      const chapter = chapters.find(c => c.id === link.dataset.chapter);
      const text = (
        chapter.group + " " + chapter.title + " " +
        chapter.body.replace(/<[^>]*>/g, " ")
      ).toLowerCase();

      const match = !q || text.includes(q);
      link.hidden = !match;
      if (match) groupMatches++;
    });

    group.hidden = groupMatches === 0;
    matches += groupMatches;

    if (q) {
      const children = $(".tree-children", group);
      const toggle = $(".tree-toggle", group);
      children.hidden = false;
      toggle.setAttribute("aria-expanded", "true");
      $(".symbol", toggle).textContent = "−";
    }
  });

  $$(".empty-search").forEach(el => el.remove());

  if (q && matches === 0) {
    ["#desktop-tree", "#mobile-tree"].forEach(selector => {
      const message = document.createElement("div");
      message.className = "empty-search";
      message.textContent = "NO MATCHING CHAPTERS";
      $(selector).append(message);
    });
  }
}

$("#search").addEventListener("input", event => {
  filterChapters(event.target.value);
});

document.addEventListener("keydown", event => {
  const target = event.target;
  const typing = target instanceof HTMLInputElement ||
    target instanceof HTMLTextAreaElement || target.isContentEditable;

  if (event.key === "/" && !typing && !$("#manual").hidden) {
    event.preventDefault();
    $("#search").focus();
  }

  if (event.key === "Escape") $("#search").blur();
});

$("#article-content").addEventListener("click", async event => {
  const button = event.target.closest(".copy");
  if (!button) return;

  const code = $("code", button.closest(".code"));
  try {
    await navigator.clipboard.writeText(code.innerText);
    button.textContent = "COPIED";
  } catch {
    button.textContent = "COPY UNAVAILABLE";
  }

  setTimeout(() => button.textContent = "COPY CODE", 1500);
});

window.addEventListener("hashchange", route);

resetSettings();
route();
