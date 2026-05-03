# 📋 Monday.com WORKFLOW — Setup Guide
## 03/05/2026

### 🔗 Board URL
`https://botbikamordehai2s-team.monday.com/ai_workflows`

---

## 📦 3 CSV Files Ready for Import

| # | File | Rows | Purpose |
|---|------|:---:|---------|
| 1 | `monday_workflow_revenue_tracks.csv` | 7 | 7 Revenue Tracks — Status, API, Revenue, Block |
| 2 | `monday_workflow_projects.csv` | 12 | 12 Projects — Status, Pipeline, Priority |
| 3 | `monday_workflow_bots.csv` | 9 | 9 MT5 Bots — Strategy, Asset, Win Rate |

---

## 🚀 How to Import into Monday.com

### For each CSV:
1. Open `https://botbikamordehai2s-team.monday.com/ai_workflows`
2. Click **+ Add** → **New Board** (or use existing groups)
3. Click **...** menu → **Import items** → **CSV**
4. Select the CSV file → Map columns to board columns
5. Done — all data populates automatically

### Suggested Board Structure
```
Board: ai_workflows
├── Group 1: 💰 Revenue Tracks (monday_workflow_revenue_tracks.csv)
├── Group 2: 📁 Projects (monday_workflow_projects.csv)
└── Group 3: 🤖 Bots (monday_workflow_bots.csv)
```

---

## 🎯 Priority View (Status Column)

| 🔴 BLOCK 1 | Critical |
|-------------|----------|
| MetaEditor F7 → 8 bots | Blocks 4 revenue tracks |

| 🔴 BLOCK 2 | Today |
|-------------|-------|
| vip_funnel.py ✅ | Post 1-3 sent |
| WhatsApp contacts | 3-5 people |
| welcome_bot.py | Onboard first VIP |
| Etsy upload | 10 listings |
| HIBP API Key | $3.50 |

| 🟡 BLOCK 3 | This Week |
|-------------|-----------|
| Bet Scanner | scan_loop.py |
| Dark Web Monitor | darkweb_monitor.py |
| WordPress Home | Settings fix |
| Affiliate IDs | Update links |

---

## 🔄 Automation Ideas (Future)

1. **GitHub Actions → Monday.com** — Push = auto-update status
2. **Telegram Bot → Monday.com** — New VIP subscriber = update revenue column
3. **MT5 → Monday.com** — Win rate, DD auto-refresh from EA logs
4. **Daily Cron → Monday.com** — 08:00 research scanner results to board

---

## 📊 Quick Status (03/05/2026 05:00)

| Metric | Value |
|--------|-------|
| Total Projects | 13 |
| LIVE | 7 |
| Ready | 6 |
| Revenue | $0 |
| Potential | $2,100-$8,500/mo |
| Critical Blocker | MetaEditor F7 |