// Search, filters and deep links of the rule page. Without script every rule is still listed and can be opened.
(function () {
  "use strict";
  document.documentElement.classList.add("js");

  function start() {
    var rules = Array.prototype.slice.call(document.querySelectorAll(".rule"));
    var search = document.getElementById("search");
    var group = document.getElementById("filter-group");
    var severity = document.getElementById("filter-severity");
    var target = document.getElementById("filter-target");
    var count = document.getElementById("count");
    var noMatch = document.getElementById("no-match");
    var languages = document.querySelectorAll(".languages a");

    function apply() {
      var words = search.value.toLowerCase().split(/\s+/).filter(Boolean);
      var shown = 0;
      rules.forEach(function (rule) {
        var match = (!group.value || rule.dataset.group === group.value)
          && (!severity.value || rule.dataset.severity === severity.value)
          && (!target.value || rule.dataset.target === target.value)
          && words.every(function (word) { return rule.dataset.search.indexOf(word) >= 0; });
        rule.hidden = !match;
        if (match) { shown++; }
      });
      count.textContent = count.dataset.template.replace("{shown}", shown).replace("{total}", rules.length);
      noMatch.classList.toggle("shown", shown === 0);
    }

    function openFromHash() {
      var rule = location.hash.length > 1 ? document.getElementById(decodeURIComponent(location.hash.slice(1))) : null;
      if (rule && rule.classList.contains("rule")) {
        rule.hidden = false;
        rule.open = true;
        rule.scrollIntoView();
      }
      languages.forEach(function (link) { link.href = link.getAttribute("href").split("#")[0] + location.hash; });
    }

    [search, group, severity, target].forEach(function (control) {
      control.addEventListener("input", apply);
    });
    document.getElementById("expand-all").addEventListener("click", function () {
      rules.forEach(function (rule) { if (!rule.hidden) { rule.open = true; } });
    });
    document.getElementById("collapse-all").addEventListener("click", function () {
      rules.forEach(function (rule) { rule.open = false; });
    });
    languages.forEach(function (link) {
      link.addEventListener("click", function () {
        try { localStorage.setItem("sunimori.language", link.lang); } catch (ignore) { /* The page works without storage. */ }
      });
    });
    window.addEventListener("hashchange", openFromHash);
    apply();
    openFromHash();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
}());
