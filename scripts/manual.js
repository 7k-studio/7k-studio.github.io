const $ = (s, root = document) => root.querySelector(s);
const $$ = (s, root = document) => [...root.querySelectorAll(s)];
const groups = [...new Set(chapters.map(c => c.group))];

function prepareSubsections(chapter) {
  const template = document.createElement("template");
  template.innerHTML = chapter.body;

  const usedIds = new Set(
    [...template.content.querySelectorAll("[id]")].map(element => element.id)
  );
  const subsections = [...template.content.querySelectorAll("h2")].map(
    heading => {
      if (!heading.id) {
        const baseId = heading.textContent.trim().toLowerCase()
          .replace(/&/g, " and ")
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-|-$/g, "") || "section";
        let id = baseId;
        let suffix = 2;
        while (usedIds.has(id)) id = `${baseId}-${suffix++}`;
        heading.id = id;
        usedIds.add(id);
      }

      return { id: heading.id, title: heading.textContent.trim() };
    }
  );

  chapter.body = template.innerHTML;
  return subsections;
}

chapters.forEach(chapter => {
  chapter.subsections = prepareSubsections(chapter);
});

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
      const chapterItem = document.createElement("div");
      chapterItem.className = "tree-chapter";

      const link = document.createElement("a");
      link.className = "tree-link";
      link.href = "#manual/" + chapter.id;
      link.dataset.chapter = chapter.id;
      link.textContent = chapter.title;
      link.addEventListener("click", event => {
        if (location.hash === link.getAttribute("href")) {
          event.preventDefault();
          renderChapter(chapter.id, null, true);
        }
      });
      const chapterHeading = document.createElement("div");
      chapterHeading.className = "tree-chapter-heading";
      chapterHeading.append(link);

      if (chapter.subsections.length) {
        const subsectionList = document.createElement("div");
        subsectionList.className = "tree-subsections";
        subsectionList.hidden = true;

        const subsectionToggle = document.createElement("button");
        subsectionToggle.className = "tree-sub-toggle";
        subsectionToggle.type = "button";
        subsectionToggle.setAttribute("aria-expanded", "false");
        subsectionToggle.setAttribute(
          "aria-label",
          `Show sections in ${chapter.title}`
        );
        subsectionToggle.textContent = "+";
        subsectionToggle.addEventListener("click", () => {
          const expanded =
            subsectionToggle.getAttribute("aria-expanded") === "true";
          subsectionToggle.setAttribute("aria-expanded", String(!expanded));
          subsectionToggle.setAttribute(
            "aria-label",
            `${expanded ? "Show" : "Hide"} sections in ${chapter.title}`
          );
          subsectionToggle.textContent = expanded ? "+" : "−";
          subsectionList.hidden = expanded;
        });

        chapter.subsections.forEach(subsection => {
          const subsectionLink = document.createElement("a");
          subsectionLink.className = "tree-sub-link";
          subsectionLink.href =
            `#manual/${chapter.id}/${subsection.id}`;
          subsectionLink.dataset.chapter = chapter.id;
          subsectionLink.dataset.subsection = subsection.id;
          subsectionLink.textContent = subsection.title;
          subsectionList.append(subsectionLink);
        });

        chapterHeading.append(subsectionToggle);
        chapterItem.append(chapterHeading, subsectionList);
      } else {
        chapterItem.append(chapterHeading);
      }

      children.append(chapterItem);
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

/* Settings markup is shared between desktop and mobile. */
function settingsMarkup() {
  return `
    <section class="setting">
      <span class="setting-title">Page background</span>
      <div class="swatches" data-setting="theme">
        <button class="swatch" data-value="paper" aria-pressed="true">
          <span class="swatch-sample" style="background:#f2f0e8"></span>
          Paper
        </button>
        <button class="swatch" data-value="white" aria-pressed="false">
          <span class="swatch-sample" style="background:#fff"></span>
          White
        </button>
        <button class="swatch" data-value="dark" aria-pressed="false">
          <span class="swatch-sample" style="background:#191e1a"></span>
          Dark
        </button>
      </div>
    </section>

    <section class="setting">
      <span class="setting-title">Text size</span>
      <div class="segmented" data-setting="size">
        <button data-value="small" aria-pressed="false">Small</button>
        <button data-value="regular" aria-pressed="true">Regular</button>
        <button data-value="huge" aria-pressed="false">Huge</button>
      </div>
    </section>

    <section class="setting">
      <label class="setting-title" for="line-range">
        Line spacing <span class="range-value" data-value-label="line">1.85</span>
      </label>
      <input id="line-range" data-setting="line" type="range"
             min="1.4" max="2.2" step="0.1" value="1.85">
    </section>

    <section class="setting">
      <label class="setting-title" for="width-range">
        Reading width <span class="range-value" data-value-label="width">100%</span>
      </label>
      <input id="width-range" data-setting="width" type="range"
             min="65" max="100" step="5" value="100">
    </section>

    <section class="setting">
      <label class="check-setting">
        <input type="checkbox" data-setting="contrast">
        <span>High contrast text</span>
      </label>
      <label class="check-setting">
        <input type="checkbox" data-setting="reducedMotion">
        <span>Reduce interface animations</span>
      </label>
    </section>

    <button class="reset" type="button" data-action="reset">
      RESET READING SETTINGS
    </button>
  `;
}

$("#desktop-settings").innerHTML = settingsMarkup();
$("#mobile-settings").innerHTML = settingsMarkup();

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
function renderChapter(id, subsectionId = null, expandSubsections = false) {
  const index = chapters.findIndex(c => c.id === id);
  if (index < 0) return;

  const chapter = chapters[index];
  currentChapter = id;
  $("#article-content").innerHTML = chapter.body;
  if (!$("#article-content h1")) {
    const articleTitle = document.createElement("h1");
    articleTitle.textContent = chapter.title;
    const articleMeta = $(".article-meta", $("#article-content"));
    if (articleMeta) articleMeta.after(articleTitle);
    else $("#article-content").prepend(articleTitle);
  }

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

      const chapterItem = link.closest(".tree-chapter");
      const subsectionList = $(".tree-subsections", chapterItem);
      const subsectionToggle = $(".tree-sub-toggle", chapterItem);
      if (subsectionList && subsectionToggle) {
        const expanded = expandSubsections && active;
        subsectionList.hidden = !expanded;
        subsectionToggle.setAttribute("aria-expanded", String(expanded));
        subsectionToggle.setAttribute(
          "aria-label",
          `${expanded ? "Hide" : "Show"} sections in ${link.textContent}`
        );
        subsectionToggle.textContent = expanded ? "−" : "+";
      }
    }
  });

  $$(".tree-sub-link").forEach(link => {
    const active = link.dataset.chapter === id &&
      link.dataset.subsection === subsectionId;
    link.classList.toggle("active", active);
    if (active) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
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

  const subsection = subsectionId &&
    chapter.subsections.find(section => section.id === subsectionId);
  if (subsection) {
    $("#" + subsection.id, $("#article-content")).scrollIntoView({
      block: "start",
      behavior: "instant"
    });
  }
}

const pageIds = [
  "home", "airfoil", "wing", "resources", "manual"
];

function showPage(page) {
  pageIds.forEach(id => {
    const section = $("#" + id);
    if (section) section.hidden = id !== page;
  });

  $$("[data-page]").forEach(link => {
    const active = link.dataset.page === page;
    link.classList.toggle("active", active);
    if (active) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });

  window.scrollTo(0, 0);
}

function route() {
  const [page, chapter, subsection] = location.hash.slice(1).split("/");
  const target = pageIds.includes(page) && $("#" + page) ? page : "manual";
  showPage(target);

  if (target === "manual") {
    const selectedChapter = chapters.find(c => c.id === chapter);
    const id = selectedChapter ? selectedChapter.id : currentChapter;
    const sectionId = selectedChapter?.subsections.some(
      section => section.id === subsection
    ) ? subsection : null;
    renderChapter(id, sectionId, Boolean(selectedChapter));
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
      const chapterItem = link.closest(".tree-chapter");
      const subsectionList = $(".tree-subsections", chapterItem);
      const subsectionToggle = $(".tree-sub-toggle", chapterItem);
      if (subsectionList) {
        subsectionList.hidden = !match || (
          q
            ? false
            : subsectionToggle.getAttribute("aria-expanded") !== "true"
        );
      }
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
