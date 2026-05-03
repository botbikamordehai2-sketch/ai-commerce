# 🛡️ ארכיטקטורת ניהול מבוזרת (Agentic Orchestration)
## עדכון 03/05/2026

הצוות פועל בסינרגיה דרך קובץ הזיכרון המשותף (MASTER_CONTEXT.md).
כל פעולה בקוד מתועדת ב-Git ומפורסת אוטומטית ל-GitHub Pages.

## 👥 צוות AI — תפקידים

| מודל | תפקיד במערכת | קבצי ליבה | Floor |
|------|-------------|----------|:---:|
| **Claude Code** | אסטרטגיה, Deep Think, ארכיטקטורה | `.claude.json` | 4 |
| **Gemini Enterprise** | מחקר שוק, יצירת נכסים, סריקה | `research_scanner.py` | 2 |
| **GPT-5.3** | לוגיקת קוד, Debugging, SEO | `seo_engine.py` | 3 |
| **Cline (VS Code)** | ביצוע מקומי, Pipeline, Task Scheduler | `setup_pipeline.bat` | 4 |

## 🔄 CI/CD — GitHub Actions

- **Trigger:** כל Push ל-Main מפעיל Linting + פריסה אוטומטית ל-gh-pages
- **Secrets:** Tokens מאוחסנים ב-GitHub Secrets, מוזרקים בזמן ריצה
- **Environment:** `gh-pages` branch = דאשבורדים חיים

## 🤖 Pipeline אוטונומי

| רכיב | פונקציה | סטטוס |
|------|---------|--------|
| `welcome_bot.py` | זיהוי הצטרפות, הודעות מותאמות, Role assignment | 🟢 Ready |
| `vip_funnel.py` | 10 פוסטים יומיים: Proof → Urgency → CTA | 🟢 Ready |
| `gsc_indexer.py` | Google Indexing API — אינדוקס מיידי | ✅ LIVE |
| `setup_pipeline.bat` | 4 Tasks ב-Task Scheduler | ✅ LIVE |
| `wp_auto_poster.py` | WordPress REST API upload | ✅ LIVE |

## 🛡️ Compliance — EU AI Act

- **Article 50:** גילוי נאות AI מוטמע בכל פלטפורמה
- **Article 12:** לוגים של מערכת המסחר נשמרים ל-6 חודשים

## 📐 Kelly Criterion — Risk Management

```
f* = (bp - q) / b
p = סיכוי הצלחה (0.50-0.65 Silver Bullet)
q = 1 - p
b = RR Ratio
```

## 💰 Profit Tracks — Performance Metrics

| Track | סטטוס | Metric | Target |
|-------|--------|--------|--------|
| 1. Prop Firm | 🟡 Needs F7 | Win Rate 50-65% | $5K-$10K |
| 2. Telegram VIP | 🟢 Ready | CR 14.6% | $29/משתמש |
| 3. Etsy / Canva | 🟢 Ready | High Margin | טמפלט פרימיום |
| 4. Affiliate | 🟢 Ready | 8%-20% Comm | Global Footer |
| 5. Bet Scanner | 🟢 Ready | +9.30% EV | ODDS API |

## 📋 WORKFLOW — Monday.com
- **Team:** `botbikamordehai2s-team`
- **Board:** `ai_workflows`
- **URL:** `https://botbikamordehai2s-team.monday.com/ai_workflows`
- **Purpose:** מעקב משימות, סטטוס פרויקטים, Revenue Track milestones

## 🔗 מקורות

- MASTER_CONTEXT.md: `https://github.com/botbikamordehai2-sketch/ai-commerce/blob/claude/build-website-2foAE/MASTER_CONTEXT.md`
- Google Drive: `https://docs.google.com/document/d/1AyBIilPGavE9LZPQor8ZwC2dNVhyFDVYhQrdKLl6U_M`
- Monday.com: `https://botbikamordehai2s-team.monday.com/ai_workflows`
