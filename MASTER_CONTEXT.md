# MASTER_CONTEXT.md — Trinity OS
# מקור האמת הראשי של מוטי | עדכון: 27/05/2026
# ⚠️ לא לשמור tokens/passwords בקובץ זה

---

## זהות
- **שם:** מוטי (Mordechai Botbika)
- **אימייל:** mbotbika9@gmail.com
- **GitHub:** botbikamordehai2-sketch
- **סביבה:** Windows 11, VS Code, Python 3.14
- **רמה:** מתחיל-בינוני (Python), מתקדם (strategy)

---

## Revenue Tracks — 6 נתיבים

| # | Track | סטטוס | פוטנציאל/חודש |
|---|-------|--------|---------------|
| 1 | Prop Firm (FTMO) | ✅ LIVE — RSI_MA20_Bot רץ, CB=2/day | $1K–$4K |
| 2 | Telegram VIP | ✅ LIVE — @commotiai_free + VIP ערוצים | $500–$1.5K |
| 3 | Etsy/Canva | 🟡 10 templates מוכנים, ממתין קמפיין | $300–$1.5K |
| 4 | Affiliate | 🟡 ממתין Campaign IDs | $100–$500 |
| 5 | Bet Scanner | ✅ LIVE — arb_finder.py, 24 ARB + 117 VALUE | $200–$1K |
| 6 | Dark Web Monitor | 🟡 ממתין HIBP API ($3.50/mo) | $50–$750 |

**הכנסה נוכחית: $0 (כל המערכות בנויות, לא הופעלו מסחרית)**

---

## פרויקטים פעילים

| פרויקט | נתיב | סטטוס |
|--------|-------|--------|
| Trading System | `signalforge-local\` | ✅ entry_monitor רץ |
| ICT Blog + WordPress | commotiai.com | ✅ 16+ פוסטים |
| Commerce Pipeline | `trinity-trading\` | ✅ Task Scheduler פעיל |
| Cockpit Dashboard | `trinity-trading\project_dashboard.html` | ✅ 12 תצוגות, ngrok LIVE |
| Telegram VIP | @commotiai_free + VIP | ✅ Posts 1-7 נשלחו |
| Bet Scanner | `bet-scanner\arb_finder.py` | ✅ pre-match filter |
| Job Scout | `trinity-trading\job_scout_scanner.py` | ✅ Remotive + RemoteOK |
| AgentRouter | `trinity-trading\agents\router.py` | ✅ Perplexity + Gemini |
| Memory Journal | `trinity-trading\memory_journal.py` | ✅ כותב ל-GitHub API |

---

## תשתית טכנית

| שירות | פרטים |
|--------|--------|
| Hosting | Hostinger Business ($18.99/mo) |
| DB | SQLite (trinity_state.db) מקומי + Cloud SQL (GCP) עתידי |
| API | FastAPI + Uvicorn על localhost:8000 |
| Tunnel | Ngrok (Free — URL משתנה בהפעלה) |
| Domains | commotiai.com + .org + .online |
| Automation | Windows Task Scheduler |

---

## AI Team — חלוקת תפקידים

| מודל | אחריות | חוזקה |
|------|---------|--------|
| **Claude Code** | שיפוץ + ארכיטקטורה | קוד נקי, security, design |
| **OpenAI (GPT)** | תזמור + חשיבה | orchestration, planning |
| **Gemini** | מהירות יישום | UI, bulk, 2M context |
| **DeepSeek** | כמות + SEO | content, strategy, copy |
| **Perplexity** | מחקר + אמת | real-time web search |
| **Cline** | עריכה אוטונומית | large refactor, file ops |
| **מורדכי** | אופרטור + החלטות | strategy, final call |

**כלל חתימה:** כל מודל חותם בסוף צ'אט בשמו.
**כלל זיכרון:** קרא MASTER_CONTEXT לפני כל פעולה. עדכן אחרי.

---

## משימות ממתינות

| עדיפות | משימה | מצב |
|--------|--------|------|
| 🔴 CRITICAL | MetaEditor F7 → Compile 8 בוטים (FTMO Account 2) | ממתין ידני |
| 🟡 HIGH | VIP Posts 8-10: `py send_vip_posts.py --posts 8-10` | מחר 27/05 |
| 🟡 HIGH | Import daily_cadence_task.xml → Task Scheduler | ממתין |
| 🟠 MEDIUM | Cloud Run deploy: `bash scripts/deploy_cockpit.sh` | ממתין |
| 🟠 MEDIUM | HIBP API Key ($3.50/חודש) | אופציונלי |
| ⚪ LOW | Ngrok Pro לURL קבוע ($10/mo) | אופציונלי |

**BLOCKED:** Meta (Facebook/Instagram) — אימות טלפוני חסום. דורש SIM אחר.

---

## פקודות שימוש יומי

```powershell
# הפעל Cockpit
cd C:\Users\User\Desktop\trinity-trading
py cockpit_api.py

# הפעל Ngrok (טרמינל נפרד)
ngrok http 8000

# Job Scout — סרוק משרות
py job_scout_scanner.py

# יומן זיכרון — הוסף סיכום
py memory_journal.py --log "סיכום המפגש"

# VIP Posts
py send_vip_posts.py --posts 8-10
```

---

## יומן סיכומים
- **26/05/2026 05:24** — Cockpit LIVE
- **26/05/2026 05:45** — 25/05 — entry_monitor תוקן. VIP Posts 1-3 נשלחו. daily_cadence + funnel_metrics + log_conversion נבנו
- **26/05/2026 05:45** — 26/05 — Bet Scanner LIVE: 24 ARB + 117 VALUE. VIP Posts 4-7 נשלחו. Dashboard 12 תצוגות
- **26/05/2026 05:45** — 27/05 — Ngrok + cockpit_api LIVE. AgentRouter (Perplexity+Gemini). memory_journal כותב ל-GitHub. MASTER_CONTEXT שוכתב לעברית
- **26/05/2026 06:00** — 27/05 — VIP Posts 8-10 נשלחו. כל 10 פוסטי הפאנל הושלמו. Track 2 Telegram VIP — פאנל מלא LIVE
- **26/05/2026 06:01** — 27/05 09:xx — HANDOFF: מוטי יוצא מהבית. מצב: VIP Posts 1-10 הושלמו. Cockpit+ngrok פעיל. AgentRouter LIVE. משימה הבאה: MetaEditor F7 Compile 8 בוטים (ידני). אין משימות AI ממתינות דחופות.
- **26/05/2026 11:22** — Private AI Hub: הוספת צוות ה-AI (OpenAI, Claude, Gemini, DeepSeek) וחיבור ל-PostgreSQL לשמירה וטעינה של היסטוריית שיחות באופן היררכי.