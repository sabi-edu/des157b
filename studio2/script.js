/* have a div, in the div, each point represents a div, height of the div determined by # of hours, the mouse moves and shows a diferent number of data points, or clicking a div shows an img/desc */

(function(){
    'use strict';
    console.log('reading js');

    const gameData = {
    "Week 1": { valorant: 0,  terraria: 0, tomodachi: 0  },
    "Week 2": { valorant: 0,  terraria: 0, tomodachi: 0  },
    "Week 3": { valorant: 0,  terraria: 0, tomodachi: 0  },
    "Week 4": { valorant: 16, terraria: 0, tomodachi: 0  },
    "Week 5": { valorant: 29, terraria: 0, tomodachi: 0  },
    "Week 6": { valorant: 15, terraria: 4, tomodachi: 0  },
    "Week 7": { valorant: 11, terraria: 0, tomodachi: 10 },
    "Week 8": { valorant: 12, terraria: 0, tomodachi: 30 }
    };

    // --- Tooltip ---
    const tooltip = document.createElement("div");
    tooltip.style.cssText = `
    position: fixed;
    background: rgba(30, 20, 35, 0.95);
    color: white;
    border: 1px solid rgba(255,255,255,0.2);
    border-radius: 6px;
    padding: 8px 12px;
    font-family: "Pixelify Sans", sans-serif;
    font-size: 0.85em;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.15s;
    line-height: 1.8;
    z-index: 999;
    `;
    document.body.appendChild(tooltip);

    // --- Build bars ---
    const weeks = Object.keys(gameData);

    weeks.forEach(function(weekName, index) {
    const games = gameData[weekName];
    const total = games.valorant + games.terraria + games.tomodachi;

    const bar = document.querySelector("#wk" + (index + 1));

    bar.style.height = total > 0 ? total * 4 + "px" : "4px";
    bar.style.overflow = "hidden";
    bar.style.backgroundColor = "transparent";

    const segments = [
        { game: "Valorant", hours: games.valorant,  color: "rgb(187, 154, 255)" },
        { game: "Terraria", hours: games.terraria,  color: "rgb(154, 246, 175)" },
        { game: "Tomodachi Life", hours: games.tomodachi, color: "rgb(255, 165, 249)" }
    ];

    segments.forEach(function(segment) {
        if (segment.hours === 0) return;
        const div = document.createElement("div");
        div.style.height = segment.hours * 4 + "px";
        div.style.backgroundColor = segment.color;
        bar.appendChild(div);
    });

    // --- Hover events ---
    bar.addEventListener("mousemove", function(e) {
        if (total === 0) return;

        let lines = `<strong>${weekName}</strong> — ${total} hrs total<br>`;
        segments.forEach(function(segment) {
        if (segment.hours === 0) return;
        const pct = Math.round((segment.hours / total) * 100);
        lines += `<span style="color:${segment.color}">■</span> ${segment.game}: ${segment.hours}h (${pct}%)<br>`;
        });

        tooltip.innerHTML = lines;
        tooltip.style.opacity = "1";
        tooltip.style.left = e.clientX + 14 + "px";
        tooltip.style.top  = e.clientY - 10 + "px";
    });

        bar.addEventListener("mouseleave", function() {
            tooltip.style.opacity = "0";
        });
    });

    // Keep tooltip following the mouse globally in case it drifts
    document.addEventListener("mousemove", function(e) {
        if (tooltip.style.opacity === "1") {
            tooltip.style.left = e.clientX + 14 + "px";
            tooltip.style.top  = e.clientY - 10 + "px";
        }
    });

})();