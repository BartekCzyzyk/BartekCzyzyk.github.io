:root {
    --bg: #0d1117;
    --card: #161b22;
    --border: #30363d;
    --text: #e6edf3;
    --muted: #8b949e;
    --accent: #58a6ff;
    --green: #3fb950;
    --red: #f85149;
    --gold: #d29922;
}
* { box-sizing: border-box; margin: 0; padding: 0; }
body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    background-color: var(--bg);
    color: var(--text);
    line-height: 1.6;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}
.container {
    max-width: 720px;
    width: 100%;
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 28px;
    box-shadow: 0 8px 24px rgba(0,0,0,0.4);
}
.header {
    border-bottom: 1px solid var(--border);
    padding-bottom: 16px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
}
.badge {
    background: rgba(210, 153, 34, 0.15);
    color: var(--gold);
    border: 1px solid var(--gold);
    padding: 4px 10px;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: bold;
}
h1 { font-size: 1.4rem; color: var(--accent); }
.progress-bar {
    width: 100%;
    height: 8px;
    background: var(--bg);
    border-radius: 4px;
    overflow: hidden;
    margin-bottom: 20px;
}
.progress-fill {
    height: 100%;
    background: var(--accent);
    width: 0%;
    transition: width 0.3s ease;
}
.question-meta {
    color: var(--muted);
    font-size: 0.9rem;
    margin-bottom: 8px;
}
.question-text {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 20px;
}
.options {
    display: flex;
    flex-direction: column;
    gap: 12px;
}
.option-btn {
    background: var(--bg);
    color: var(--text);
    border: 1px solid var(--border);
    padding: 14px 18px;
    border-radius: 8px;
    text-align: left;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.2s;
}
.option-btn:hover:not(:disabled) {
    border-color: var(--accent);
    background: #1c2128;
}
.option-btn.correct {
    background: rgba(63, 185, 80, 0.2);
    border-color: var(--green);
    color: #aff5b4;
    font-weight: bold;
}
.option-btn.wrong {
    background: rgba(248, 81, 73, 0.2);
    border-color: var(--red);
    color: #ffdcd7;
}
.feedback {
    margin-top: 18px;
    padding: 14px;
    border-radius: 8px;
    background: rgba(88, 166, 255, 0.1);
    border-left: 4px solid var(--accent);
    display: none;
    font-size: 0.95rem;
}
.controls {
    margin-top: 22px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.btn {
    background: var(--accent);
    color: #0d1117;
    border: none;
    padding: 10px 20px;
    border-radius: 6px;
    font-weight: bold;
    font-size: 1rem;
    cursor: pointer;
    text-decoration: none;
    display: inline-block;
}
.btn:hover { opacity: 0.9; }
.btn-secondary {
    background: transparent;
    color: var(--muted);
    border: 1px solid var(--border);
}
.result-box { text-align: center; display: none; }
.score-big {
    font-size: 3rem;
    font-weight: bold;
    color: var(--green);
    margin: 15px 0;
}
