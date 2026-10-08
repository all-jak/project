/* Europe Work Visa Guide 2026 — renders the data in data.js.
   No build step and no libraries: plain DOM, HTML/CSS bars, one shared tooltip. */
(function () {
  "use strict";

  var G = window.GUIDE;
  if (!G) return;

  var byIso = {};
  G.countries.forEach(function (c) { byIso[c.iso] = c; });

  /* ---------- small helpers ---------- */
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  // Builds an element. Text always goes in through text nodes (never innerHTML).
  function el(tag, attrs) {
    var node = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        var v = attrs[k];
        if (v === null || v === undefined || v === false) return;
        if (k === "class") node.className = v;
        else if (k === "style") node.setAttribute("style", v);
        else node.setAttribute(k, v === true ? "" : String(v));
      });
    }
    for (var i = 2; i < arguments.length; i++) append(node, arguments[i]);
    return node;
  }
  function append(node, kid) {
    if (kid === null || kid === undefined || kid === false) return;
    if (Array.isArray(kid)) { kid.forEach(function (k) { append(node, k); }); return; }
    node.appendChild(kid.nodeType ? kid : document.createTextNode(String(kid)));
  }
  // Replaces a node's children, skipping null/false (replaceChildren would print "null").
  function setKids(node) {
    node.replaceChildren();
    for (var i = 1; i < arguments.length; i++) append(node, arguments[i]);
  }
  function ext(label, url, cls) {
    return el("a", { href: url, target: "_blank", rel: "noopener", "class": cls || null }, label);
  }

  var store = {
    get: function (key, fallback) {
      try { var v = window.localStorage.getItem(key); return v === null ? fallback : JSON.parse(v); }
      catch (e) { return fallback; }
    },
    set: function (key, value) {
      try { window.localStorage.setItem(key, JSON.stringify(value)); } catch (e) { /* storage unavailable */ }
    }
  };

  function levelLabel(lvl) { return G.levels[String(lvl)].label; }

  /* ---------- tooltip (hover + keyboard focus) ---------- */
  var tip = $("#tip");
  function showTip(parts, x, y) {
    setKids(tip,
      el("strong", null, parts.value),
      el("span", null, parts.label),
      parts.note ? el("span", { "class": "tip-n" }, parts.note) : null
    );
    tip.hidden = false;
    moveTip(x, y);
  }
  function moveTip(x, y) {
    if (tip.hidden) return;
    var r = tip.getBoundingClientRect();
    var left = x + 14, top = y + 14;
    if (left + r.width > window.innerWidth - 8) left = x - r.width - 14;
    if (left < 8) left = 8;
    if (top + r.height > window.innerHeight - 8) top = y - r.height - 14;
    if (top < 8) top = 8;
    tip.style.left = left + "px";
    tip.style.top = top + "px";
  }
  function hideTip() { tip.hidden = true; }
  function attachTip(node, parts, anchor) {
    node.addEventListener("pointerenter", function (e) { if (e.pointerType === "mouse") showTip(parts, e.clientX, e.clientY); });
    node.addEventListener("pointermove", function (e) {
      if (e.pointerType !== "mouse") return;
      if (tip.hidden) showTip(parts, e.clientX, e.clientY); else moveTip(e.clientX, e.clientY);
    });
    node.addEventListener("pointerleave", hideTip);
    node.addEventListener("focus", function () {
      var r = (anchor ? anchor(node) : node).getBoundingClientRect();
      showTip(parts, r.right, r.top);
    });
    node.addEventListener("blur", hideTip);
  }
  window.addEventListener("scroll", hideTip, { passive: true });

  /* ---------- horizontal bar chart (HTML/CSS) ---------- */
  function niceStep(raw) {
    var p = Math.pow(10, Math.floor(Math.log10(raw)));
    var n = raw / p;
    return (n <= 1 ? 1 : n <= 2 ? 2 : n <= 2.5 ? 2.5 : n <= 5 ? 5 : 10) * p;
  }

  // opts: title, sub, rows, fmt(value)->bar label, tick(value)->axis label,
  //       legend: [emphasisLabel, contextLabel, referenceLabel?] or null, foot: [text, [label,url]...],
  //       col: header for the value column in the table view
  // A row with ref: true is a benchmark (outlined bar), not a threshold.
  function barChart(mount, opts) {
    if (!mount) return;
    var rows = opts.rows;
    var max = Math.max.apply(null, rows.map(function (r) { return r.value; }));
    var step = niceStep(max / (opts.ticks || 4));
    var n = Math.ceil(max / step);
    var axisMax = step * n;
    var emphasis = rows.some(function (r) { return r.plan; });
    var hasRef = rows.some(function (r) { return r.ref; });

    var fig = el("figure", { "class": "chart card" });
    var cap = el("figcaption", null, el("h3", null, opts.title), opts.sub ? el("p", { "class": "sub" }, opts.sub) : null);
    fig.appendChild(cap);

    if (emphasis && opts.legend) {
      fig.appendChild(el("div", { "class": "legend" },
        el("span", null, el("i", { "aria-hidden": "true" }), opts.legend[0]),
        el("span", null, el("i", { "class": "ctx", "aria-hidden": "true" }), opts.legend[1]),
        hasRef && opts.legend[2] ? el("span", null, el("i", { "class": "refbox", "aria-hidden": "true" }), opts.legend[2]) : null));
    }

    var plot = el("div", { "class": "hb", role: "list", style: "--n:" + n + (opts.labelWidth ? ";--label:" + opts.labelWidth : "") });
    rows.forEach(function (r) {
      var w = (r.value / axisMax) * 100;
      var row = el("div", {
        "class": "hb-row" + (r.ref ? " is-ref" : emphasis && !r.plan ? " is-context" : ""),
        role: "listitem",
        tabindex: "0",
        "aria-label": r.label + ": " + r.shown + (r.note ? ". " + r.note : "")
      },
        el("span", { "class": "hb-label" }, r.label),
        el("span", { "class": "hb-plot" },
          el("span", { "class": "hb-bar", style: "width:" + w.toFixed(2) + "%" }),
          el("span", { "class": "hb-val", style: "left:calc(" + w.toFixed(2) + "% + 6px)" }, opts.fmt(r.value))));
      attachTip(row, { value: r.shown, label: r.label, note: r.note }, function (n2) { return $(".hb-bar", n2); });
      plot.appendChild(row);
    });
    var ticks = [];
    for (var i = 0; i <= n; i++) {
      ticks.push(el("span", { "class": "hb-tick", style: i === 0 ? "left:0" : "left:" + ((i / n) * 100).toFixed(2) + "%" }, opts.tick(i * step)));
    }
    plot.appendChild(el("div", { "class": "hb-row hb-axis", "aria-hidden": "true" }, el("span"), el("span", { "class": "hb-plot" }, ticks)));
    fig.appendChild(plot);
    if (opts.after) fig.appendChild(opts.after());

    // table view: the accessible twin of the chart
    var tableWrap = el("div", { "class": "tbl-wrap", hidden: true });
    var table = el("table", null,
      el("thead", null, el("tr", null, el("th", null, "Item"), el("th", null, opts.col || "Value"), el("th", null, "Note"))),
      el("tbody", null, rows.map(function (r) {
        return el("tr", null, el("td", null, r.label), el("td", { "class": "num" }, r.shown), el("td", null, r.note || ""));
      })));
    tableWrap.appendChild(table);
    var btn = el("button", { type: "button", "class": "linkbtn", "aria-expanded": "false" }, "Show table");
    btn.addEventListener("click", function () {
      tableWrap.hidden = !tableWrap.hidden;
      btn.setAttribute("aria-expanded", String(!tableWrap.hidden));
      btn.textContent = tableWrap.hidden ? "Show table" : "Hide table";
    });
    fig.appendChild(tableWrap);

    var foot = el("div", { "class": "chart-foot" });
    var srcSpan = el("span");
    (opts.foot || []).forEach(function (f, idx) {
      if (idx) srcSpan.appendChild(document.createTextNode(" · "));
      srcSpan.appendChild(Array.isArray(f) ? ext(f[0], f[1]) : document.createTextNode(f));
    });
    foot.appendChild(srcSpan);
    foot.appendChild(btn);
    fig.appendChild(foot);
    mount.replaceChildren(fig);
  }

  var eurK = function (v) { return "€" + (v / 1000).toFixed(1) + "k"; };
  var eurTick = function (v) { return v === 0 ? "0" : "€" + Math.round(v / 1000) + "k"; };
  var eur = function (v) { return "€" + Math.round(v).toLocaleString("en-US"); };
  var num = function (v) { return Math.round(v).toLocaleString("en-US"); };
  var pct = function (v) { return (Math.round(v * 10) / 10) + "%"; };

  function renderCharts() {
    barChart($("#chart-tech"), {
      title: "What a tech job must pay for your visa",
      sub: "Minimum yearly salary where no degree is required, in countries that use the euro. Blue bars are Plan A targets.",
      rows: G.techFloors, fmt: eurK, tick: eurTick, col: "Official threshold", labelWidth: "minmax(9rem, 19rem)",
      legend: ["Plan A targets", "Other routes"],
      after: function () {
        return el("div", { "class": "other-cur" },
          el("p", { "class": "eyebrow" }, "Countries with their own currency"),
          el("ul", null, G.otherFloors.map(function (r) {
            return el("li", { "class": r.plan ? "is-plan" : null },
              el("span", { "class": "oc-l" }, r.label), el("b", null, r.shown), el("span", { "class": "oc-n" }, r.note));
          })));
      },
      foot: [["IND", "https://ind.nl/en/public-register-recognised-sponsors/public-register-work"], ["MRCI", "https://www.mrci.ie/2026/03/06/new-employment-permit-salary-thresholds-from-1-march-2026/"], ["Migrationsverket", "https://www.migrationsverket.se/en/employers/news-archive-for-employers/news/2026-06-16-new-median-salary-affects-the-salary-requirement-for-work-permits.html"], ["Hunt UK Visa Sponsors", "https://huntukvisasponsors.com/uk-visa-occupation-eligibility/2134-programmers-and-software-development-professionals"]]
    });
    barChart($("#chart-remote"), {
      title: "Remote income you must show each month",
      sub: "Digital-nomad visa minimums for one person, 2026. Spain is highlighted because it accepts experience instead of a degree.",
      rows: G.remoteFloors, fmt: eur, tick: eur, col: "Official minimum", labelWidth: "minmax(4.5rem, 6.5rem)",
      legend: ["Best fit for you", "Other countries"],
      foot: [["Moving to Spain", "https://movingtospain.com/spain-digital-nomad-visa/"], ["Portugalist", "https://www.portugalist.com/portugal-digital-nomad-visa/"], ["Remote Work Europe", "https://remoteworkeurope.eu/insights/digital-nomad-visas-europe-complete-guide/"]]
    });
    barChart($("#chart-share"), {
      title: "Europe is a small door with big pay",
      sub: "Europe's share of Bangladesh's overseas jobs and of its remittances, first half of 2026.",
      rows: G.europeShare, fmt: pct, tick: pct, ticks: 5, col: "Share", labelWidth: "minmax(8.5rem, 12rem)",
      foot: [["TBS", "https://www.tbsnews.net/world/europe-job-migration-surges-46-h1-amid-gulf-slump-1475796"]]
    });
    barChart($("#chart-croatia"), {
      title: "Croatia hires far more Nepalis than Bangladeshis",
      sub: "Residence and work permits issued January–November 2025, out of 160,000+ in total.",
      rows: G.croatia, fmt: num, tick: num, col: "Permits", labelWidth: "minmax(6rem, 9rem)",
      legend: ["Bangladesh", "Other countries"],
      foot: [["Croatia Week", "https://www.croatiaweek.com/foreign-workers-in-croatia-160000-permits-in-2025-where-they-come-from/"]]
    });
    barChart($("#chart-quotas"), {
      title: "Work-permit caps announced for 2026",
      sub: "Non-EU workers. Italy counts every work entry; Greece counts seasonal workers; Switzerland takes highly qualified people only. Hungary set 35,000 guest-worker places, then closed the route on 6 June.",
      rows: G.quotas, fmt: function (v) { return v >= 10000 ? Math.round(v / 1000) + "k" : num(v); }, tick: function (v) { return v === 0 ? "0" : Math.round(v / 1000) + "k"; }, col: "Permits", labelWidth: "minmax(7rem, 11rem)",
      foot: [["Immigrazione Bologna", "https://www.immigrazionebologna.it/en/2025/10/22/flows-decree-2026-2028/"], ["Romania Journal", "https://www.romaniajournal.ro/society-people/government-to-reduce-number-of-foreign-workers-in-2026/"], ["Swiss Federal Council", "https://www.admin.ch/en/newnsb/7HwBjdg5HpBA"]]
    });
  }

  /* ---------- map ---------- */
  var DEFAULT_PICK = { you: "DEU", nonskilled: "ROU", skilled: "DEU" };
  var track = store.get("euvg-track", "you");
  if (!DEFAULT_PICK[track]) track = "you";
  var picked = DEFAULT_PICK[track];

  function renderLegend() {
    var ramp = el("span", { "class": "ramp" }, "Harder",
      [1, 2, 3, 4, 5].map(function (l) { return el("i", { "class": "sw", "data-lvl": String(l), title: levelLabel(l), "aria-hidden": "true" }); }),
      "Easier");
    $("#maplegend").replaceChildren(
      ramp,
      el("span", { "class": "ramp" }, el("i", { "class": "sw", "data-lvl": "0", "aria-hidden": "true" }), "Closed or on hold"),
      el("span", { "class": "ramp" }, el("i", { "class": "sw", "data-lvl": "-1", "aria-hidden": "true" }), "Not covered"));
  }

  function renderTiles() {
    var grid = $("#tilegrid");
    grid.replaceChildren();
    G.countries.forEach(function (c) {
      var t = c[track];
      var b = el("button", {
        type: "button",
        "class": "tile",
        "data-lvl": String(t.lvl),
        "aria-pressed": String(c.iso === picked),
        "aria-label": c.name + ": " + levelLabel(t.lvl),
        style: "grid-column:" + (c.x + 1) + ";grid-row:" + (c.y + 1)
      }, c.iso);
      b.addEventListener("click", function () { pick(c.iso); });
      attachTip(b, { value: c.name, label: levelLabel(t.lvl), note: track === "you" ? G.routes[t.route] : null });
      grid.appendChild(b);
    });
  }

  function renderDetail() {
    var c = byIso[picked];
    var t = c[track];
    var box = $("#detail");
    var trackName = { you: "For you", nonskilled: "Non-skilled workers", skilled: "Skilled workers" }[track];
    setKids(box,
      el("p", { "class": "eyebrow" }, trackName),
      el("h3", null, c.name),
      el("span", { "class": "pill", "data-lvl": String(t.lvl) }, el("i", { "class": "sw", "aria-hidden": "true" }), levelLabel(t.lvl)),
      track === "you" ? el("p", { "class": "route" }, G.routes[t.route]) : null,
      el("p", null, t.text),
      el("div", { "class": "kv" }, el("span", null, "Where you submit the visa"), el("span", null, c.apply)),
      el("p", { "class": "small" }, "Official info: ", ext(c.link[0], c.link[1])));
  }

  function renderMapTable() {
    var rows = G.countries.slice().sort(function (a, b) {
      return (b[track].lvl - a[track].lvl) || a.name.localeCompare(b.name);
    });
    var table = el("table", null,
      el("thead", null, el("tr", null, el("th", null, "Country"), el("th", null, "Rating"), el("th", null, "Why"), el("th", null, "Visa submitted in"))),
      el("tbody", null, rows.map(function (c) {
        var t = c[track];
        return el("tr", null,
          el("td", { "class": "cname" }, c.name),
          el("td", null, el("span", { "class": "pill", "data-lvl": String(t.lvl) }, el("i", { "class": "sw", "aria-hidden": "true" }), levelLabel(t.lvl))),
          el("td", null, (track === "you" && t.route !== "none" ? G.routes[t.route] + ". " : "") + t.text),
          el("td", null, c.apply));
      })));
    $("#maptable").replaceChildren(table);
  }

  function pick(iso) {
    picked = iso;
    $$(".tile", $("#tilegrid")).forEach(function (b, i) {
      b.setAttribute("aria-pressed", String(G.countries[i].iso === iso));
    });
    renderDetail();
  }

  function setTrack(next) {
    track = next;
    store.set("euvg-track", next);
    $$("[data-track]").forEach(function (b) { b.setAttribute("aria-pressed", String(b.getAttribute("data-track") === next)); });
    renderTiles();
    renderDetail();
    renderMapTable();
  }

  function initMap() {
    renderLegend();
    $$("[data-track]").forEach(function (b) {
      b.addEventListener("click", function () { setTrack(b.getAttribute("data-track")); });
    });
    var btn = $("#maptable-btn"), box = $("#maptable");
    btn.addEventListener("click", function () {
      box.hidden = !box.hidden;
      btn.setAttribute("aria-expanded", String(!box.hidden));
      btn.textContent = box.hidden ? "Show the map as a table" : "Hide the table";
    });
    setTrack(track);
  }

  /* ---------- ranking tables + notes ---------- */
  function diffToLevel(d) {
    if (d === "closed" || d === "hold") return 0;
    if (d <= 2) return 5;
    if (d <= 3) return 4;
    if (d <= 3.5) return 3;
    if (d <= 4) return 2;
    return 1;
  }
  function diffText(d) {
    if (d === "closed") return "Closed";
    if (d === "hold") return "On hold";
    return levelLabel(diffToLevel(d)) + " · " + d;
  }
  function rankTable(mount, rows) {
    var rank = 0;
    var table = el("table", null,
      el("thead", null, el("tr", null, el("th", null, "#"), el("th", null, "Country"), el("th", null, "Difficulty"), el("th", null, "Why"), el("th", null, "Where you submit the visa"))),
      el("tbody", null, rows.map(function (r) {
        var c = byIso[r[0]];
        var numeric = typeof r[1] === "number";
        if (numeric) rank += 1;
        return el("tr", null,
          el("td", { "class": "num" }, numeric ? String(rank) : "—"),
          el("td", { "class": "cname" }, el("span", { "class": "code" }, c.iso), c.name),
          el("td", null, el("span", { "class": "pill", "data-lvl": String(diffToLevel(r[1])) }, el("i", { "class": "sw", "aria-hidden": "true" }), diffText(r[1]))),
          el("td", null, r[2]),
          el("td", null, r[3]));
      })));
    mount.replaceChildren(el("div", { "class": "tbl-wrap" }, table));
  }
  function notes(mount, obj) {
    mount.replaceChildren();
    Object.keys(obj).forEach(function (iso) {
      var c = byIso[iso];
      mount.appendChild(el("details", { "class": "note" },
        el("summary", null, el("span", { "class": "code" }, iso), c.name),
        el("ul", null, obj[iso].map(function (item) {
          return el("li", null, item[0] + " ", el("span", { "class": "src" }, "(", ext(item[1][0], item[1][1]), ")"));
        }))));
    });
  }
  function lookList(mount, audience, types) {
    var items = G.portals.filter(function (p) { return p.for.indexOf(audience) !== -1 && types.indexOf(p.type) !== -1; });
    mount.replaceChildren.apply(mount, items.map(function (p) {
      return el("li", null, ext(p.name, p.url), el("span", null, " · " + p.where + " — "), p.text);
    }));
  }

  /* ---------- numbers ---------- */
  var KIND = { easier: ["▲", "Easier"], tighter: ["▼", "Tighter"], closed: ["✕", "Closed"], mixed: ["◆", "Mixed"] };
  function renderTimeline(mount, rows) {
    mount.replaceChildren.apply(mount, rows.map(function (e) {
      var k = KIND[e.kind];
      return el("li", null,
        el("span", { "class": "date" }, e.date),
        el("span", { "class": "kind " + e.kind }, el("b", { "aria-hidden": "true" }, k[0]), k[1]),
        el("span", { "class": "what" }, el("span", { "class": "where" }, e.where + ". "), e.text));
    }));
  }
  function renderPlaces() {
    function list(mount, rows) {
      mount.replaceChildren.apply(mount, rows.map(function (r) { return el("li", null, el("span", null, r[0]), el("span", null, r[1])); }));
    }
    list($("#dhaka"), G.dhaka);
    list($("#delhi"), G.delhi);
  }

  /* ---------- portal directory ---------- */
  var pFor = store.get("euvg-pfor", "all");
  var pType = "all";
  var pQuery = "";
  function renderPortalFilters() {
    var chips = $("#ptype");
    var types = [["all", "All types"]].concat(Object.keys(G.portalTypes).map(function (k) { return [k, G.portalTypes[k]]; }));
    chips.replaceChildren.apply(chips, types.map(function (t) {
      var b = el("button", { type: "button", "aria-pressed": String(t[0] === pType), "data-type": t[0] }, t[1]);
      b.addEventListener("click", function () { pType = t[0]; renderPortalFilters(); renderPortals(); });
      return b;
    }));
    $$("#pfor button").forEach(function (b) { b.setAttribute("aria-pressed", String(b.getAttribute("data-for") === pFor)); });
  }
  function renderPortals() {
    var q = pQuery.trim().toLowerCase();
    var list = G.portals.filter(function (p) {
      return (pFor === "all" || p.for.indexOf(pFor) !== -1) &&
        (pType === "all" || p.type === pType) &&
        (!q || (p.name + " " + p.where + " " + p.text).toLowerCase().indexOf(q) !== -1);
    });
    $("#pcount").textContent = list.length === 1 ? "1 portal" : list.length + " portals";
    var groups = Object.keys(G.portalTypes).map(function (type) {
      var items = list.filter(function (p) { return p.type === type; });
      if (!items.length) return null;
      return el("div", { "class": "pgroup" },
        el("h3", null, G.portalTypes[type], el("small", null, String(items.length))),
        el("ul", { "class": "plist" }, items.map(function (p) {
          return el("li", { "class": "card" }, el("span", { "class": "where" }, p.where), ext(p.name, p.url), el("p", null, p.text));
        })));
    }).filter(Boolean);
    var box = $("#plist");
    if (!groups.length) {
      box.replaceChildren(el("p", { "class": "small" }, "No portals match. Clear the search or pick another type."));
    } else {
      box.replaceChildren.apply(box, groups);
    }
  }
  function initPortals() {
    $$("#pfor button").forEach(function (b) {
      b.addEventListener("click", function () {
        pFor = b.getAttribute("data-for");
        store.set("euvg-pfor", pFor);
        renderPortalFilters();
        renderPortals();
      });
    });
    $("#psearch").addEventListener("input", function (e) { pQuery = e.target.value; renderPortals(); });
    renderPortalFilters();
    renderPortals();
  }

  /* ---------- checklists ---------- */
  function checklist(listSel, progressSel, key, items) {
    var state = store.get(key, {});
    var list = $(listSel);
    function progress() {
      var done = items.filter(function (_, i) { return state[i]; }).length;
      var bar = el("span", { style: "width:" + Math.round((done / items.length) * 100) + "%" });
      var reset = el("button", { type: "button", "class": "linkbtn" }, "Clear");
      reset.addEventListener("click", function () { state = {}; store.set(key, state); draw(); });
      setKids($(progressSel), el("span", null, done + " of " + items.length + " done"), el("span", { "class": "meter", "aria-hidden": "true" }, bar), done ? reset : null);
    }
    function draw() {
      list.replaceChildren.apply(list, items.map(function (text, i) {
        var id = key + "-" + i;
        var box = el("input", { type: "checkbox", id: id });
        box.checked = !!state[i];
        box.addEventListener("change", function () { state[i] = box.checked; store.set(key, state); progress(); });
        return el("li", null, el("label", { "for": id }, box, el("span", null, text)));
      }));
      progress();
    }
    draw();
  }

  /* ---------- safety + sources ---------- */
  function renderRisk() {
    var t = $("#risk");
    t.replaceChildren(
      el("thead", null, el("tr", null, el("th", null, "Country or route"), el("th", null, "Status"), el("th", null, "Source"))),
      el("tbody", null, G.closedList.map(function (r) {
        return el("tr", null, el("td", null, r[0]), el("td", null, r[1]), el("td", null, ext(r[2][0], r[2][1])));
      })));
  }
  function renderSources() {
    var box = $("#srclist");
    box.replaceChildren.apply(box, G.sources.map(function (g) {
      return el("div", null, el("h3", null, g[0]), el("ul", null, g[1].map(function (s) { return el("li", null, ext(s[0], s[1])); })));
    }));
  }

  /* ---------- costs ---------- */

  // Floating range bars (low–high) with an optional benchmark mark and one
  // reference line. Same row grid, gridlines and tooltips as barChart.
  // opts.cols: [first column, value column] headers for the table view.
  function rangeChart(mount, opts) {
    if (!mount) return;
    var rows = opts.rows;
    var max = Math.max.apply(null, rows.map(function (r) { return r.high; }));
    var step = niceStep(max / (opts.ticks || 4));
    var n = Math.ceil(max / step);
    if (step * n <= max) n += 1; // headroom so the longest bar never touches the edge
    var axisMax = step * n;
    var pctOf = function (v) { return ((v / axisMax) * 100).toFixed(2) + "%"; };
    var hasBench = rows.some(function (r) { return r.bench; });
    var cols = opts.cols || ["Country", "What people pay"];

    var fig = el("figure", { "class": "chart card" });
    fig.appendChild(el("figcaption", null, el("h3", null, opts.title), el("p", { "class": "sub" }, opts.sub)));
    fig.appendChild(el("div", { "class": "legend" },
      el("span", null, el("i", { "aria-hidden": "true" }), opts.legend[0]),
      hasBench ? el("span", null, el("i", { "class": "bench", "aria-hidden": "true" }), opts.legend[1]) : null,
      opts.ref ? el("span", null, el("i", { "class": "refkey", "aria-hidden": "true" }), opts.ref.text) : null));

    var plot = el("div", { "class": "hb", role: "list", style: "--n:" + n + ";--room:7.5rem" + (opts.labelWidth ? ";--label:" + opts.labelWidth : "") });
    rows.forEach(function (r) {
      var marks = [
        opts.ref ? el("span", { "class": "rg-ref", style: "left:" + pctOf(opts.ref.value) }) : null,
        r.bench ? el("span", { "class": "rg-bench", style: "left:" + pctOf(r.bench[0]) + ";width:max(8px, calc(" + pctOf(r.bench[1] - r.bench[0]) + "))" }) : null,
        el("span", { "class": "rg-bar", style: "left:" + pctOf(r.low) + ";width:" + pctOf(r.high - r.low) }),
        el("span", { "class": "hb-val", style: "left:calc(" + pctOf(r.high) + " + 6px)" }, r.shown)
      ];
      var row = el("div", { "class": "hb-row", role: "listitem", tabindex: "0",
        "aria-label": r.label + ": " + r.shown + (r.benchText ? ". " + r.benchText : "") + ". " + r.note },
        el("span", { "class": "hb-label" }, r.label),
        el("span", { "class": "hb-plot" }, marks));
      attachTip(row, { value: r.shown, label: r.label, note: (r.benchText ? r.benchText + ". " : "") + r.note },
        function (n2) { return $(".rg-bar", n2); });
      plot.appendChild(row);
    });
    var ticks = [];
    for (var i = 0; i <= n; i++) {
      ticks.push(el("span", { "class": "hb-tick", style: i === 0 ? "left:0" : "left:" + ((i / n) * 100).toFixed(2) + "%" }, opts.tick(i * step)));
    }
    plot.appendChild(el("div", { "class": "hb-row hb-axis", "aria-hidden": "true" }, el("span"), el("span", { "class": "hb-plot" }, ticks)));
    fig.appendChild(plot);

    var tableWrap = el("div", { "class": "tbl-wrap", hidden: true },
      el("table", null,
        el("thead", null, el("tr", null, el("th", null, cols[0]), el("th", null, cols[1]), hasBench ? el("th", null, "Benchmark") : null, el("th", null, "Details"))),
        el("tbody", null, rows.map(function (r) {
          return el("tr", null, el("td", { "class": "cname" }, r.label), el("td", { "class": "num" }, r.shown), hasBench ? el("td", null, r.benchText || "—") : null, el("td", null, r.note));
        }))));
    var btn = el("button", { type: "button", "class": "linkbtn", "aria-expanded": "false" }, "Show table");
    btn.addEventListener("click", function () {
      tableWrap.hidden = !tableWrap.hidden;
      btn.setAttribute("aria-expanded", String(!tableWrap.hidden));
      btn.textContent = tableWrap.hidden ? "Show table" : "Hide table";
    });
    fig.appendChild(tableWrap);
    var src = el("span");
    opts.foot.forEach(function (f, idx) {
      if (idx) src.appendChild(document.createTextNode(" · "));
      src.appendChild(ext(f[0], f[1]));
    });
    fig.appendChild(el("div", { "class": "chart-foot" }, src, btn));
    mount.replaceChildren(fig);
  }

  function srcLink(src, isEstimate) {
    if (isEstimate) return el("span", { "class": "est" }, "estimate");
    return src ? el("span", { "class": "src" }, ext(src[0], src[1])) : null;
  }

  // One plan's itemised budget. item = [what, amount, source or null, "estimate"?]
  function budgetCard(p) {
    return el("article", { "class": "plan budget card" },
      el("div", { "class": "plan-top" }, el("span", { "class": "plan-letter" }, p.letter), el("h3", null, p.title), el("span", { "class": "tag" }, p.tag)),
      p.groups.map(function (g) {
        return el("div", { "class": "bgroup" },
          el("p", { "class": "eyebrow" }, g.head),
          el("ul", { "class": "lines" }, g.items.map(function (it) {
            var sub = it[0].indexOf("…of which") === 0;
            return el("li", { "class": sub ? "sub" : null },
              el("span", { "class": "what" }, it[0], " ", srcLink(it[2], it[3] === "estimate")),
              el("span", { "class": "amt" }, it[1]));
          })),
          g.total ? el("p", { "class": "btotal" }, el("span", null, "Subtotal"), el("b", null, g.total)) : null);
      }),
      el("p", { "class": "small" }, p.note));
  }

  function kpiCards(mount, rows) {
    mount.replaceChildren.apply(mount, rows.map(function (k) {
      return el("div", { "class": "kpi card" },
        el("span", { "class": "v" }, k.value),
        el("span", { "class": "l" }, k.label),
        k.delta ? el("span", { "class": "d " + k.dir }, (k.dir === "up" ? "▲ " : "▼ ") + k.delta) : null,
        el("span", { "class": "s" }, "Source: ", ext(k.src[0], k.src[1])));
    }));
  }

  function dataTable(sel, head, rows, cells) {
    var t = $(sel);
    t.replaceChildren(
      el("thead", null, el("tr", null, head.map(function (h) { return el("th", null, h); }))),
      el("tbody", null, rows.map(function (r) { return el("tr", null, cells(r)); })));
  }

  // [title, text, [label,url]] -> highlighted list items
  function ruleList(sel, rows) {
    var ul = $(sel);
    ul.replaceChildren.apply(ul, rows.map(function (r) {
      return el("li", null, el("b", null, r[0] + ". "), r[1] + " ", el("span", { "class": "src" }, "(", ext(r[2][0], r[2][1]), ")"));
    }));
  }

  function accountCards(mount, rows) {
    mount.replaceChildren.apply(mount, rows.map(function (a) {
      return el("figure", { "class": "account card" },
        el("span", { "class": "where" }, a.where),
        el("span", { "class": "amount" }, a.amount),
        el("blockquote", null, el("p", null, a.text)),
        el("figcaption", null, "Source: ", ext(a.src[0], a.src[1])));
    }));
  }

  function renderCosts() {
    var C = G.costs;
    kpiCards($("#cost-kpis"), C.kpis);

    var b = $("#budgets");
    b.replaceChildren.apply(b, C.plans.map(budgetCard));

    rangeChart($("#chart-agency"), {
      title: "Agency routes: what they should cost vs what people pay",
      sub: "Lakh taka, all-in. Blue bars span 2026 agency ads and what workers reported paying; grey marks show the official benchmark where one exists.",
      rows: C.agencyRanges,
      legend: ["What people pay (ads and worker reports)", "Official benchmark"],
      ref: { value: C.average.value, text: C.average.text },
      tick: function (v) { return v === 0 ? "0" : v + " lakh"; },
      labelWidth: "minmax(7rem, 10rem)",
      foot: [["TBS", "https://www.tbsnews.net/bangladesh/migration/record-bangladeshis-hired-italy-year-800m-sent-home-706554"], ["InfoMigrants", "https://www.infomigrants.net/en/post/44251/bangladeshi-migrants-in-romania-from-regular-to-undocumented-part-1-of-2"], ["Probash Guide", "https://probashguide.com/croatia-visa-update-bangladesh/"], ["Reelpen", "https://www.reelpen.org/how-much-does-it-cost-to-go-to-romania/"]]
    });

    barChart($("#chart-movein"), {
      title: "Cash to move into a flat",
      sub: "First month's rent plus the largest deposit the law allows, in euros, 2026.",
      rows: C.moveIn, fmt: eur, tick: eurTick, col: "Move-in cash", labelWidth: "minmax(8rem, 14rem)",
      legend: ["Your Plan A start", "Other options"],
      foot: [["WG Lotse", "https://wglotse.de/en/find-a-wg/berlin/"], ["Global Property Guide", "https://www.globalpropertyguide.com/europe/germany/rent"], ["Numbeo", "https://www.numbeo.com/cost-of-living/city_price_rankings?itemId=26"], ["Nordic Expat", "https://nordicexpat.com/europe/cost-of-living/average-rent-european-cities-2026"], ["Government.nl", "https://www.government.nl/topics/housing/rented-housing/step-by-step-plan-for-tenants"], ["Threshold", "https://threshold.ie/advocacy-campaign/singlepeople/"]]
    });

    accountCards($("#accounts"), C.accounts);

    dataTable("#ads", ["Country", "Advertised", "What the ad says", "Source"], C.ads, function (r) {
      return [el("td", { "class": "cname" }, r[0]), el("td", { "class": "num" }, r[1]), el("td", null, r[2]), el("td", null, ext(r[3][0], r[3][1]))];
    });
    dataTable("#bdcosts", ["Item", "Cost", "Source"], C.bd, function (r) {
      return [el("td", null, r[0]), el("td", { "class": "num" }, r[1]), el("td", null, srcLink(r[2], r[3] === "estimate"))];
    });
    dataTable("#fees", ["Route", "Fees (in the country's currency)", "Who usually pays", "Source"], C.fees, function (r) {
      return [el("td", { "class": "cname" }, r[0]), el("td", null, r[1]), el("td", null, r[2]), el("td", null, ext(r[3][0], r[3][1]))];
    });
    ruleList("#rules", C.rules);
    ruleList("#deposits", C.deposits);
  }

  /* ---------- New Zealand ---------- */
  var nzd = function (v) { return "NZ$" + v.toFixed(2); };
  var nzTick = function (v) { return v === 0 ? "0" : "$" + v; };

  function renderNZ() {
    var N = G.nz;
    kpiCards($("#nz-kpis"), N.kpis);
    renderTimeline($("#nz-timeline"), N.timeline);

    barChart($("#chart-nzwage"), {
      title: "What New Zealand pay unlocks",
      sub: "NZ$ an hour before tax, from 9 March 2026. The blue bar is your realistic target; the outlined bar is what a mid-career developer earns on average.",
      rows: N.wages, fmt: nzd, tick: nzTick, ticks: 5, col: "NZ$ an hour", labelWidth: "minmax(8.5rem, 13rem)",
      legend: ["Your target", "Other thresholds", "Typical developer pay"],
      foot: [["INZ", "https://www.immigration.govt.nz/about-us/news-centre/final-details-about-changes-to-the-skilled-migrant-category-resident-visa-and-work-to-residence-visa/"], ["Envoy", "https://www.envoyglobal.com/news-alert/new-zealand-adds-new-occupations-to-national-occupation-list-and-increases-median-wage/"], ["MBIE", "https://www.mbie.govt.nz/about/news/minimum-wage-set-for-2026"], ["Payscale", "https://www.payscale.com/research/NZ/Job=Software_Developer/Salary/fb624084/Mid-Career"]]
    });

    $("#nz-budget").replaceChildren(budgetCard(N.budget));
    dataTable("#nz-fees", ["Fee", "Amount", "Who pays", "Source"], N.fees, function (r) {
      return [el("td", { "class": "cname" }, r[0]), el("td", null, r[1]), el("td", null, r[2]), el("td", null, ext(r[3][0], r[3][1]))];
    });
    ruleList("#nz-tenancy", N.tenancy);

    rangeChart($("#chart-nzrent"), {
      title: "Weekly rent in Auckland and Wellington",
      sub: "NZ$ a week, 2026. A room in a shared flat is the usual start; whole homes are shown for comparison.",
      rows: N.rents, cols: ["Place", "Weekly rent"],
      legend: ["Usual weekly rent"],
      tick: nzTick, labelWidth: "minmax(8.5rem, 12rem)",
      foot: [["Cities Insider (Auckland)", "https://citiesinsider.com/country/new-zealand/auckland/flatting-and-shared-housing/en"], ["Cities Insider (Wellington)", "https://citiesinsider.com/country/new-zealand/wellington/flatting-guide/en"], ["Trade Me", "https://www.trademe.co.nz/c/property/news/rental-price-index"]]
    });

    accountCards($("#nz-accounts"), N.accounts);
    ruleList("#nz-rules", N.rules);
    var pl = $("#nz-portals");
    pl.replaceChildren.apply(pl, N.portals.map(function (p) {
      return el("li", { "class": "card" }, el("span", { "class": "where" }, p.where), ext(p.name, p.url), el("p", null, p.text));
    }));
    initNzCalc();
  }

  // Skilled Migrant Category check. Points: pay 1.5×/2×/3× median = 3/4/6;
  // New Zealand work 12/18/24 months = 1/2/3 (from 24 August 2026).
  // Skilled Work Experience pathway: 5 years in total, 2 in New Zealand at
  // 1.1× median; amber-list jobs need all 5 in New Zealand at 1.2×.
  var NZ_MEDIAN = 35;
  function initNzCalc() {
    var saved = store.get("nzvg-calc", null) || {};
    var state = {
      pay: typeof saved.pay === "number" ? saved.pay : 42,
      nz: typeof saved.nz === "number" ? saved.nz : 0,
      tot: typeof saved.tot === "number" ? saved.tot : 0,
      job: saved.job === "amber" ? "amber" : "dev"
    };
    var slider = $("#nz-pay");
    slider.value = String(state.pay);
    slider.addEventListener("input", function () { state.pay = Number(slider.value); draw(); });
    [["#nz-yrs", "nz"], ["#nz-tot", "tot"], ["#nz-job", "job"]].forEach(function (g) {
      $$(g[0] + " button").forEach(function (b) {
        b.addEventListener("click", function () {
          var v = b.getAttribute("data-v");
          state[g[1]] = g[1] === "job" ? v : Number(v);
          draw();
        });
      });
    });

    function draw() {
      store.set("nzvg-calc", state);
      [["#nz-yrs", "nz"], ["#nz-tot", "tot"], ["#nz-job", "job"]].forEach(function (g) {
        $$(g[0] + " button").forEach(function (b) {
          var v = b.getAttribute("data-v");
          b.setAttribute("aria-pressed", String(String(state[g[1]]) === v));
        });
      });
      var pay = state.pay;
      var nzYears = state.nz;
      var total = Math.max(state.tot, nzYears);
      var skilled = pay >= NZ_MEDIAN;
      $("#nz-pay-out").textContent = nzd(pay) + " an hour · about NZ$" + Math.round(pay * 2080).toLocaleString("en-US") + " a year";

      var payPts = pay >= 3 * NZ_MEDIAN ? 6 : pay >= 2 * NZ_MEDIAN ? 4 : pay >= 1.5 * NZ_MEDIAN ? 3 : 0;
      var nzPts = !skilled ? 0 : nzYears >= 2 ? 3 : nzYears >= 1.5 ? 2 : nzYears >= 1 ? 1 : 0;
      var pts = payPts + nzPts;
      var cells = [];
      for (var i = 0; i < 6; i++) {
        cells.push(el("i", { "class": i < payPts ? "inc" : i < pts ? "exp" : null }));
      }

      var amber = state.job === "amber";
      var needPay = amber ? 1.2 * NZ_MEDIAN : 1.1 * NZ_MEDIAN;
      var checks = [
        [pay >= needPay, "Pay of at least " + nzd(needPay) + " an hour (" + (amber ? "1.2" : "1.1") + " × median)"],
        [amber ? nzYears >= 5 : nzYears >= 2, amber ? "All 5 years of that work in New Zealand" : "2 years of that work in New Zealand"],
        [total >= 5, "5 years' relevant experience in total"]
      ];
      var pathway = checks.every(function (c) { return c[0]; });

      setKids($("#nz-out"),
        !skilled ? el("p", { "class": "verdict" }, "Below the NZ$35.00 median, a job cannot support a Skilled Migrant application, and the time does not count as skilled work.") : null,
        el("div", { "class": "calc-block" },
          el("p", { "class": "eyebrow" }, "6-point route"),
          el("div", { "class": "pts", role: "img", "aria-label": pts + " of 6 points" }, cells),
          el("p", { "class": "pts-key" },
            el("span", null, el("i", { "class": "inc", "aria-hidden": "true" }), "Pay " + payPts),
            el("span", null, el("i", { "class": "exp", "aria-hidden": "true" }), "New Zealand work " + nzPts)),
          el("p", { "class": "verdict" + (pts >= 6 ? " ok" : "") },
            pts >= 6 ? "✓ " + pts + " points: you can send an Expression of Interest." : pts + " of 6 points. " + (6 - pts) + " more needed.")),
        el("div", { "class": "calc-block" },
          el("p", { "class": "eyebrow" }, "Skilled Work Experience pathway"),
          el("ul", { "class": "checks" }, checks.map(function (c) {
            return el("li", { "class": c[0] ? "yes" : "no" }, el("b", { "aria-hidden": "true" }, c[0] ? "✓" : "✗"), el("span", null, (c[0] ? "" : "Not yet: ") + c[1]));
          })),
          el("p", { "class": "verdict" + (pathway ? " ok" : "") }, pathway ? "✓ You meet this pathway." : "Not yet.")));
    }
    draw();
  }

  /* ---------- boot ---------- */
  renderCharts();
  renderCosts();
  renderNZ();
  initMap();
  renderPlaces();
  rankTable($("#rank-ns"), G.rankNonSkilled);
  rankTable($("#rank-sk"), G.rankSkilled);
  notes($("#notes-ns"), G.notesNonSkilled);
  notes($("#notes-sk"), G.notesSkilled);
  lookList($("#look-ns"), "nonskilled", ["bd", "country", "eu"]);
  lookList($("#look-sk"), "skilled", ["country", "board", "register", "eu"]);
  kpiCards($("#kpis"), G.kpis);
  renderTimeline($("#timeline"), G.timeline);
  initPortals();
  checklist("#week", "#week-progress", "euvg-week", [
    "Ask past employers and clients for experience letters (dates, job title, tech stack).",
    "Gather payslips, bank statements, tax returns and freelance invoices.",
    "Update GitHub and put 2–3 projects live.",
    "Book an IELTS test.",
    "Write a one-page English CV (or use Europass).",
    "Register on BMET's Overseas Employment Platform.",
    "Apply to 10 visa-sponsorship jobs."
  ]);
  checklist("#safe", "#safe-progress", "euvg-safe", [
    "I checked the agency's RL number on oep.gov.bd/agencies and its status is Active.",
    "I have not paid anyone for a job offer, work permit or nulla osta.",
    "I found the employer's website, address and business registration.",
    "My contract is in a language I understand and states salary, hours, housing and who pays the flight.",
    "The permit is real: the employer is on the official system (for example WorkinRomania.gov.ro) or the embassy accepted it.",
    "I will keep my own passport. No employer or agent may hold it.",
    "I am not travelling on a visit visa to switch to work, or using Serbia or Bosnia as a stepping stone.",
    "I will get BMET clearance and do the pre-departure training before I fly."
  ]);
  checklist("#nz-safe", "#nz-safe-progress", "nzvg-safe", [
    "The employer is accredited: it is on INZ's list, or it showed me its accreditation and job check.",
    "The job token came from the employer, and I applied on INZ's own website and paid INZ directly.",
    "I paid nobody for the job offer. Recruitment is the employer's cost.",
    "My adviser is on the IAA register, or is a New Zealand lawyer.",
    "My contract shows the job title, the pay and at least 30 hours a week.",
    "I will get BMET clearance before I fly."
  ]);
  renderRisk();
  renderSources();
})();
