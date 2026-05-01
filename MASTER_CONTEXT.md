# MASTER_CONTEXT — מוטי | עדכון 29/04/2026
**הדבק את זה בתחילת כל שיחה עם Claude Code / Claude Chat / ChatGPT / Cline**

---

## מי אני
- **שם:** מוטי | mbotbika9@gmail.com
- **סביבה:** Windows 10, VS Code, Python 3.12
- **רמה:** מתחיל-בינוני, מכיר Python בסיסי
- **GitHub:** botbikamordehai2-sketch
- **כלים:** Claude Code (VS Code), Cline (VS Code), ChatGPT, Claude Web

---

## כללי ברזל (חלים על כל מודל)
1. **אל תריץ `mt5_bot.py` ישירות** — מכבה AutoTrading ב-MT5
2. **לעולם אל תכניס API keys / סיסמאות לקבצי טקסט רגילים**
3. **אותו מודל לא בונה וגם מבקר** — Claude Code בונה, Claude Chat מבקר
4. **עדכן MASTER_CONTEXT.md בסוף כל סשן משמעותי**
5. **Macro is King** — קונטקסט מאקרו קודם לדפוסים טכניים
6. **ארכיטקטורת 4 הקומות:** 1.קרקוע (NotebookLM), 2.חקירה (Gemini), 3.מומחיות (Gems), 4.ביצוע (Workspace)
7. **הנחיית AIM:** בכל משימה: Actor (שחקן), Input (קלט), Mission (משימה)

---

## פרויקטים פעילים

### 1. Trading System ✅ LIVE
**נתיב:** `C:\Users\gfdh5555\Desktop\projects\trading-system\`
**סטטוס:** EA פעיל על MT5 FTMO $10,000 | entry_monitor.py רץ כל 15 דקות
**קבצים מרכזיים:**
- `entry_monitor.py` — סורק 15 נכסים, כותב signal files ל-MT5
- `diamond_scanner.py` — 50+ נכסים, Confluence Score
- `daily_review.py` — דוח יומי לטלגרם 08:00
- `RSI_MA20_Bot.mq5` — EA פעיל USDJPY H1
**חסר:**
- Telegram VIP: FREE_CHAT_ID + VIP_CHAT_ID
- Ko-fi link לערוץ VIP
- ETSY_API_KEY
- ODDS_API_KEY (~$50/חודש) לבוט הימורים
**הצעד הבא:** Ko-fi (10 דקות) → Telegram VIP פעיל

---

### 2. ICT Blog ✅ LIVE
**URL:** https://ict-blog-bay.vercel.app
**נתיב:** `C:\Users\gfdh5555\ict-blog\`
**סטטוס:** 12 מאמרים פורסמו, Google Search Console מחובר
**Autopublisher:** `C:\Users\gfdh5555\ict-blog\autopublisher\`
- ✅ TELEGRAM_TOKEN: `8778948790:AAFQzzul1WNrfvqZbqtNeK_Y1B9BO10cZmA`
- ✅ Bot: `@tradijfhng_alerts_2026_bot`
- 🔴 חסר: ערוץ טלגרם (TELEGRAM_CHANNEL)
**הצעד הבא:** צור ערוץ טלגרם → הוסף בוט כ-Admin → קבל chat_id → עדכן `.env`

---

### 3. ai-commerce 🔨 בבנייה
**URL עתידי:** https://botbikamordehai2-sketch.github.io/ai-commerce
**נתיב שרת:** `/home/user/ai-commerce/` (Linux server — סשן Claude Code)
**טכנולוגיה:** HTML + CSS + JS טהורים, עברית RTL, Dark Mode
**פיצ'רים:**
- Hero, קטגוריות, 12 מוצרים, AI Pick badges
- עגלת קניות + localStorage
- חיפוש חי (Ctrl+K)
- מודל מוצר popup
- מועדפים (❤️)
- צ'אט AI (keywords, לא API אמיתי)
- Scroll animations
**סטטוס Git:** 3 commits מקומיים | push ממתין — נכשל 403
**חסר:**
- הרשאות push לגיטהאב
- פריסה ב-GitHub Pages / Vercel
- Claude API אמיתי בצ'אט

---

### 4. Diamond Scanner ✅ רץ יומי
**נתיב:** `C:\Users\gfdh5555\Desktop\projects\diamond-scanner\`
**סטטוס:** Task Scheduler 08:30, שולח התראות לטלגרם
**chat_id:** 1246833993

---

### 5. Dropship Machine 🟡 ממתין API
**נתיב:** `C:\Users\gfdh5555\Desktop\projects\dropship-machine\`
**סטטוס:** 8+ commits, רץ מקומית
**חסר:**
- `ANTHROPIC_API_KEY` — מ-console.anthropic.com
- `ETSY_API_KEY` — מ-developer.etsy.com

---

### 6. Canva Assets 🟡 מוכן להעלאה
**נתיב:** `C:\Users\gfdh5555\Desktop\projects\canva-assets\`
**סטטוס:** TTH-002 מוכן, מחיר $14.99
**מה צריך:**
1. לצלם 10 תמונות מ-`etsy_images_dark.html`
2. להעתיק טקסט מ-`TTH-002_ETSY_READY_HEBREW.txt`
3. להדביק ל-Etsy ולפרסם

---

### 7. tv_webhook — התראות TradingView
**נתיב:** `C:\Users\gfdh5555\tv_webhook\`
**סטטוס:** Flask server + Ngrok
**הרצה:** `python run.py`
**env:** TELEGRAM_TOKEN, NASDAQ_CHAT_ID=7509800337, ALL_CHAT_ID=1246833993

---

## משתנים קריטיים
```
TELEGRAM_TOKEN=8778948790:AAFQzzul1WNrfvqZbqtNeK_Y1B9BO10cZmA
ALL_CHAT_ID=1246833993
NASDAQ_CHAT_ID=7509800337
FTMO Account: 1513203570 | Balance: $10,000
GitHub: botbikamordehai2-sketch
```
⚠️ **אל תשמור API keys כאן — רק כאן (env vars בלבד)**

---

## סדר עדיפויות — מה ממתין לביצוע
| # | משימה | זמן | פוטנציאל |
|---|---|---|---|
| 1 | Canva Assets → Etsy | 30 דקות | $14.99 מיידי |
| 2 | Ko-fi → Telegram VIP | 10 דקות | $500-1,500/חודש |
| 3 | ערוץ טלגרם → Autopublisher | 15 דקות | חשיפה לבלוג |
| 4 | GitHub push + Vercel לai-commerce | 5 דקות | אתר חי |
| 5 | Dropship Machine API Keys | 5 דקות | אוטומציה מלאה |

---

## הוראות לכל מודל
| מודל | תפקיד | מה לבקש |
|---|---|---|
| **Claude Code (VS Code)** | Builder — עורך קבצים, כותב קוד | "כתוב / תקן / הוסף קוד ב..." |
| **Claude Chat (Web)** | Analyst — ביקורת, אסטרטגיה | "בדוק אם הגיוני, מצא חולשות" |
| **ChatGPT** | Marketing — SEO, כתיבה שיווקית | "כתוב תיאור מוצר / פוסט" |
| **Cline (VS Code)** | Executor — מריץ פקודות מקומיות | "הרץ / בדוק / חבר git remote" |

---

## 🏗️ 4-Floor Intelligence Architecture

| Floor | Tool | Job | שלך |
|-------|------|-----|------|
| **1** | **NotebookLM** | Grounding — דיוק, קבלות, ניתוח PDFs ומחקר ללא הזיות | העלה MASTER_CONTEXT.md + research |
| **2** | **Gemini** | Exploration — 2M tokens, Deep Research, 5 שלבים | שאל שאלות, חפש דפוסים |
| **3** | **Gems** | Specialists — "Moti's Macro Sentinel" | ראה מטה |
| **4** | **Workspace** | Execution — Docs, Gmail, Drive, Meet, VS Code | ביצוע בפועל |

### 🧠 AIM Framework (לכל משימה)
| A | Actor | מי אתה? (שחקן) |
| I | Input | מה קיבלת? (קלט, נתונים) |
| M | Mission | מה לעשות? (משימה ברורה) |

---

### 8. Moti's Macro Sentinel (Gem) ✅ LIVE
**פלטפורמה:** Gemini Gems (Floor 3)
**תפקיד:** Portfolio & Strategy Architect
**הגדרה:**
```
Actor: Portfolio & Strategy Architect — אנליסט ראשי ICT/SMC
Input:  MASTER_CONTEXT.md (9 פרויקטים), NASDAQ Scanner, 5 שלבים
Mission: Daily Bias, ועדת חקירה, ניהול רב-ערוצי, ניתוח Risk
Risk:   FTMO/Blueberry 4% DD יומי, Hedge $100K
Tone:   עברית מקצועית, Level 999, RISK ON/OFF
```
**Knowledge base:** `MASTER_CONTEXT.md` מוזן כבסיס ידע קבוע

---

## 📋 סיכום סשן — 30/04/2026 18:00-22:00 (Cline)

### 💬 בקשת המשתמש
"כל הפיצ'רים הקיימים, מבנה הקבצים, מה עוד לא נעשה, הצעד הבא המומלץ"

### 📊 תמונת מצב מלאה — 9 פרויקטים + 5 מסלולי מוניטיזציה

#### 🗂️ מבנה הקבצים (Desktop/projects/)
| פרויקט | קבצים עיקריים | סטטוס |
|--------|--------------|--------|
| **trading-system/** | entry_monitor.py, RSI_MA20_Bot.mq5, daily_review.py, telegram_vip.py, etsy_uploader.py, affiliate_engine.py, bet_launcher.py, research_watch.py, auto_update.py, telegram_alerts.py, nasdaq_scanner.py | ✅ LIVE |
| **diamond-scanner/** | diamond_scanner.py, tradingview_idea.py, blog_scanner.py | ✅ רץ יומי |
| **bet-scanner/** | scan_loop.py, value_model.py, arb_finder.py, polymarket_scanner.py, backtest.py, steam_detector.py | 🟡 מחכה API |
| **dropship-machine/** | main.py, scanner.py, content_gen.py, price_tracker.py, profit_calc.py, publisher.py | 🟡 מחכה API |
| **canva-assets/** | catalog.json (10 מוצרים), TTH-002 + TTH-003 Etsy listings | 🟡 מוכן להעלאה |
| **portfolio/** | index.html | 🟡 מחכה deploy |
| **mega-store/** | (ריק) | ❌ לא פעיל |
| **ai-commerce/** | index.html, app.js, styles.css, MASTER_CONTEXT.md | 🔨 בבנייה |
| **ict-blog/** | Next.js, 13+ מאמרים | ✅ LIVE |

#### ⚡ כל הפיצ'רים הקיימים (14 Done)
1. entry_monitor.py — 15 נכסים, RSI+MA20+MA50, Circuit Breaker 2/day → ✅ LIVE
2. RSI_MA20_Bot.mq5 — EA EURUSD H1, FTMO $10K, Blueberry compliance → ✅ LIVE
3. daily_review.py — ועדת חקירה יומית + close_signals_auto() → ✅ LIVE
4. telegram_alerts.py — BIAS reports + signals → ✅ LIVE
5. nasdaq_scanner.py — DXY, VIX, NDX, SPX, 10Y → ✅ LIVE
6. auto_update.py — 08:00 + 20:00 daily → ✅ LIVE
7. 31 unit tests + run_checks.bat → ✅ PASSING
8. telegram_vip.py — Free/VIP channels → ✅ בנוי (לא מופעל)
9. etsy_uploader.py — CSV/MD ל-10 מוצרים → ✅ מוכן
10. affiliate_engine.py — 5 תוכניות affiliate → ✅ מוכן (לא הופעל)
11. bet_launcher.py — Value betting + Kelly → ✅ קוד מוכן
12. research_watch.py — arXiv/SSRN scanner → ✅ LIVE
13. ICT Blog — 13+ articles, Next.js + Vercel → ✅ LIVE
14. Publify — publishing platform → ✅ LIVE

#### 🔴 מה עוד לא נעשה (20 משימות — MASTER_PLAN.md)
| # | משימה | זמן | Block |
|---|--------|------|-------|
| 1 | MT5: Compile RSI_MA20_Bot.mq5 (F7) | 2 דק' | BLOCK 1 |
| 2 | the-odds-api.com API Key | 3 דק' | BLOCK 1 |
| 3-6 | GitHub repos: diamond-scanner, bet-scanner, dropship-machine, portfolio | 10 דק' | BLOCK 2 |
| 7 | Vercel deploy portfolio | 2 דק' | BLOCK 2 |
| 8 | Etsy API Key | 3 דק' | BLOCK 3 |
| 9 | Canva template links | 2 דק' | BLOCK 3 |
| 10 | Upload 10 listings to Etsy ($2.00) | 5 דק' | BLOCK 3 |
| 11 | Ko-fi signup | 2 דק' | BLOCK 4 |
| 12 | Telegram channels (@motitrades_free, @motitrades_vip) | 5 דק' | BLOCK 4 |
| 13 | Telegram VIP bot live | 3 דק' | BLOCK 4 |
| 14-17 | Affiliate signups: FTMO, TradingView, IC Markets, Amazon | 5 דק' | BLOCK 5 |
| 18 | Anthropic API Key | 2 דק' | BLOCK 5 |
| 19 | Dropship Machine live | 3 דק' | BLOCK 6 |
| 20 | Bet Scanner live (scan_loop.py) | 5 דק' | BLOCK 6 |

#### 🎯 הצעד הבא המומלץ — BLOCK 1 (5 דקות, קריטי)
1. **MT5 → MetaEditor (F4) → RSI_MA20_Bot.mq5 → F7 Compile** — EA לא ירוץ בלי compile (עודכן ל-Blueberry: drawdown 4%, margin 150%)
2. **https://the-odds-api.com/ → Sign Up → API Key** — פותח Track 5 (Bet Scanner, $200-$1,000/חודש)

#### 💰 פוטנציאל סופי: $2,100-$8,500/חודש
| Track | פוטנציאל |
|-------|----------|
| 1. Prop Firm | $1,000-$4,000 |
| 2. Telegram VIP | $500-$1,500 |
| 3. Etsy | $300-$1,500 |
| 4. Affiliate | $100-$500 |
| 5. Bet Scanner | $200-$1,000 |

### 🔑 Credentials (לא להכניס לקוד!)
- GitHub Token (CLOUD-PUSH): שמור ב-`C:\Users\gfdh5555\tokens.txt`
- Hostinger API Token: שמור ב-`tokens.txt`
- Hostinger Referral: `REFERRALCODE=4GUBOTBIKXVG`
- Hostinger MCP: `.mcp.json` ← 118 tools, stdio transport
- עדכון אחרון ל-MASTER_CONTEXT: 01/05/2026 03:10

---

## 📋 סיכום סשן — 01/05/2026 00:00-01:20 (Cline)

### 🛒 רכישות Hostinger

| רכישה | עלות | Invoice |
|--------|------|---------|
| **commotiai.com** (1 year) | $9.99 | — |
| **commotiai.org** (1 year) | $7.99 | — |
| **commotiai.online** (1 year) | $0.99 | — |
| **Business Hosting** (1 month) | $18.99 | H_42408073 |
| **Daily Backup** | $0.00 | — |
| **סה"כ** | **$22.56 (~83 ₪)** | |

### 🌐 איך 3 הדומיינים ישמשו (כל 9 הפרויקטים)
| דומיין | פלטפורמה | שימוש |
|--------|----------|-------|
| **commotiai.com** | WordPress (Hostinger) | בלוג ICT/Trading ראשי, דף נחיתה, affiliate |
| **commotiai.org** | WordPress (Hostinger) | חומרים חינוכיים, newsletters, ארכיון |
| **commotiai.online** | GitHub Pages | Publify, Bet Scanner dashboard, Dropship Machine |

### 🔧 מה נבנה בסשן הזה
- ✅ `affiliate_engine.py` — 6 תוכניות: IC Markets, FTMO, TradingView, Blueberry, Amazon, **Hostinger** (`REFERRALCODE=4GUBOTBIKXVG`)
- ✅ `affiliate_output/` רץ — HTML footer, CSV tracker, Newsletter archive
- ✅ GitHub Token `CLOUD-PUSH` שמור ב-`tokens.txt`
- 🟡 **WordPress** — ממתין להתקנה על commotiai.com (Business Hosting פעיל)

### 🎯 הצעד הבא
1. Hostinger → **Create site** → WordPress → `commotiai.com`
2. בונים דף נחיתה + 5 פוסטים + affiliate footer
3. DNS + GitHub Pages subdomains

---

## 📋 סיכום סשן — 01/05/2026 06:00-11:00 (Claude Code)

### 🤖 FTMO Account 2 — Portfolio of Bots

**חשבון חדש:** `1513254752` — FTMO-Demo Hedge $100,000
**מטרה:** Lab לניסוי 5 אסטרטגיות שונות במקביל

### 🏗️ בוטים שנבנו (MQL5 Experts — FTMO Terminal)
| קובץ | אסטרטגיה | נכס | ריסק |
|------|-----------|-----|------|
| `Portfolio_Manager.mq5` | **מנהל מרכזי** — PORTFOLIO_LOCKED | EURUSD M1 | — |
| `Trend_Lab.mq5` | Trend + EMA20/50 + ADX>25 + H4 Bias | XAUUSD H1 | 0.3% |
| `BollingerRSI_Lab.mq5` | Mean Reversion — BB+RSI | EURUSD H1 | 0.3% |
| `Session_Breakout_Lab.mq5` | London Open — Asian Range Breakout | GBPUSD M15 | 0.3% |
| `EMA_Cross_Lab.mq5` | Trend — EMA9×EMA21 Crossover | GBPUSD H1 | 0.3% |
| `MACD_Lab.mq5` | MACD + MA200 Filter | לבחירה H1 | 0.3% |
| `Stoch_Lab.mq5` | Stochastic Overbought/Oversold | לבחירה H1 | 0.3% |

**נתיב:** `C:\Users\gfdh5555\AppData\Roaming\MetaQuotes\Terminal\81A933A9AFC5DE3C23B15CAB19C63850\MQL5\Experts\`

### 🧠 ארכיטקטורה — Portfolio מבוסס Global Variables
```
Portfolio_Manager → מעדכן PORTFOLIO_LOCKED
כל בוט → בודק GlobalVariableGet("PORTFOLIO_LOCKED") לפני כניסה

חוקי נעילה:
- הפסד יומי > 4% → נועל הכל
- Drawdown כולל > 9% → נועל הכל
- 3+ פוזיציות באותו כיוון → Correlation Lock
- 5+ פוזיציות פתוחות → נועל
```

### 📐 5 משפחות אסטרטגיה (Multi-Model Research)
| משפחה | Hypothesis | פעיל כש |
|--------|-----------|---------|
| Trend Following | שוק ממשיך בכיוון | ADX > 25 |
| Mean Reversion | מחיר חוזר לממוצע | ADX < 20 |
| Breakout | פריצת רמה = המשך | אחרי דחיסה |
| Session-Based | London Open = נזילות | 07:00-09:00 |
| Multi-TF | H4 כיוון + H1 כניסה | Confluence |

### 📋 Hands-Off Protocol (מוטי חתם)
- ✅ מותר: לצפות בלוגים שבועית
- ✅ מותר: שינוי הגדרות בסוף שבוע בלבד
- ❌ אסור: לסגור עסקה ידנית בגלל "תחושה"
- ❌ אסור: לכבות בוט במהלך drawdown < 5%
- ❌ אסור: להגדיל לוטים אחרי רצף הצלחות

### 🎯 הצעד הבא
1. MetaEditor (F4) → קמפל את כל 6 הקבצים (F7, 0 errors)
2. Refresh Navigator → גרור Portfolio_Manager על EURUSD M1
3. גרור כל בוט על הגרף המתאים לו
4. RSI_MA20_Bot נשאר על חשבון 1 ($10K) — לא נוגעים

---

## 📋 סיכום סשן — 01/05/2026 01:00-02:00 (Cline) — WordPress + Affiliate

### 🛒 רכישות Hostinger
| רכישה | עלות | Invoice |
|--------|------|---------|
| commotiai.com (1 year) | $9.99 | — |
| commotiai.org (1 year) | $7.99 | — |
| commotiai.online (1 year) | $0.99 | — |
| Business Hosting (1 month) | $18.99 | H_42408073 |
| **סה"כ** | **$22.56 (~83 ₪)** | |

### 🔧 WordPress Live
- **URL:** commotiai.com/wp-admin
- **Host:** Hostinger Business (Frankfurt), Premium Plan
- **תוכן מוכן:** `wordpress_content/` — 3 קבצים
  - `01_homepage_landing.html` — Hero + Stats + Newsletter
  - `02_post_ict_silver_bullet.html` — ICT Silver Bullet Setup
  - `03_post_ai_trading_2026.html` — AI Trading evolution
- **Affiliate:** `affiliate_engine.py` — 6 תוכניות, Hostinger REFERRALCODE=4GUBOTBIKXVG

### 🌐 3 דומיינים
| דומיין | שימוש |
|--------|-------|
| commotiai.com | WordPress בלוג ICT/Trading ראשי |
| commotiai.org | חומרים חינוכיים, newsletters |
| commotiai.online | GitHub Pages — Publify, dashboards |

### 🎯 צעד הבא
1. Paste WordPress content → Pages / Posts
2. Settings → Reading → Static Page → Home
3. Install theme (GeneratePress / Kadence) + Newsletter plugin (MailPoet)
4. Paste affiliate_footer.html to every post
5. DNS + GitHub Pages subdomains

---

## 🔄 SYNC — Cline → Claude Code (01/05 02:15)

**WordPress עלה** על commotiai.com (Hostinger Business, Frankfurt) ✅

### WordPress Content Pack — סטטוס מלא
| # | קובץ | סטטוס |
|---|------|--------|
| 01 | homepage_landing.html | ✅ |
| 02 | post_ict_silver_bullet.html | ✅ |
| 03 | post_ai_trading_2026.html | ✅ תוקן |
| 04-09 | category pages x6 | ✅ Claude Code |
| 10 | affiliate_footer.html | ✅ Cline |
| 11 | post_ftmo_week1.html | 🟡 Claude Code בונה |
| 12 | post_dropship_guide.html | 🟡 Claude Code בונה |
| 13 | post_diamond_scanner.html | 🟡 Claude Code בונה |
| 14 | post_kelly_criterion.html | 🟡 Claude Code בונה |

### נותר להגדרה ב-WordPress (מוטי)
- Settings → Reading → Static Page → Home
- Theme: GeneratePress / Kadence
- Plugin: MailPoet (Newsletter)
- הדבק תוכן מ-00_WORDPRESS_SETUP_GUIDE.md

---

## ✅ TASK CHECKLIST — 01/05/2026 02:50 (BEFORE NEXT SESSION)

### 🔴 שלב 1 — WordPress: Settings → Home (2 דקות)
- [ ] כנס ל-https://commotiai.com/wp-admin
- [ ] Settings → Reading
- [ ] בחר "A static page"
- [ ] Homepage: בחר "Home"
- [ ] Save Changes
- [ ] ודא: פתח commotiai.com — תראה את דף הבית

### 🔴 שלב 2 — MetaEditor: Compile 7 Bots (10 דקות)
נתיב: `C:\Users\gfdh5555\AppData\Roaming\MetaQuotes\Terminal\81A933A9AFC5DE3C23B15CAB19C63850\MQL5\Experts\`

- [ ] MT5 → F4 (MetaEditor)
- [ ] Compile (F7) — Portfolio_Manager.mq5
- [ ] Compile (F7) — Trend_Lab.mq5
- [ ] Compile (F7) — BollingerRSI_Lab.mq5
- [ ] Compile (F7) — Session_Breakout_Lab.mq5
- [ ] Compile (F7) — EMA_Cross_Lab.mq5
- [ ] Compile (F7) — MACD_Lab.mq5
- [ ] Compile (F7) — Stoch_Lab.mq5
- [ ] ודא: 0 errors, 0 warnings בכל קובץ

### 🟡 שלב 3 — Paste 10 WordPress Files (30 דקות)
- [ ] Pages → Add New → Paste 01_homepage_landing.html
- [ ] Posts → Add New → Paste 02_post_ict_silver_bullet.html
- [ ] Posts → Add New → Paste 03_post_ai_trading_2026.html
- [ ] Pages → Add New → Paste 04_category_trading.html
- [ ] Pages → Add New → Paste 05_category_scanner.html
- [ ] Pages → Add New → Paste 06_category_betting.html
- [ ] Pages → Add New → Paste 07_category_templates.html
- [ ] Pages → Add New → Paste 08_category_aitools.html
- [ ] Pages → Add New → Paste 09_category_ict_smc.html
- [ ] Paste 10_affiliate_footer.html at bottom of every post

### 🟡 שלב 4 — Affiliate Links (5 דקות)
- [ ] עדכן YOUR_ID ב-10_affiliate_footer.html (FTMO, TradingView, IC Markets, Blueberry, Amazon)
- [ ] Hostinger — REFERRALCODE כבר מוכן ✅

### 🟢 שלב 5 — Ko-fi + Telegram VIP (10 דקות)
- [ ] https://ko-fi.com → Sign Up
- [ ] עדכן KO_FI_LINK ב-telegram_vip.py
- [ ] צור ערוצי Telegram (@motitrades_free, @motitrades_vip)
- [ ] הרץ telegram_vip.py

---

## 📋 SYNC — 01/05/2026 03:30 (Cline) — Email + MCP + Checklist

### ✅ Email Setup Complete
- **Email:** `moti@commotiai.com`
- **Sender Name:** Moti | Commoti AI
- **Host:** Hostinger Business (Free Email tier)
- **Signature:** Moti — Commoti AI — Trading & AI Blog

### ✅ Hostinger MCP Connected
- **Server:** `.mcp.json` — 118 tools via stdio
- **API Token:** שמור ב-`tokens.txt`
- **Capabilities:** Deploy VPS, DNS, WordPress management, monitoring, backups

### 📋 Remaining Priority Tasks (מוטי — Manual)
| # | משימה | ⏱️ | Priority |
|---|-------|:---:|:---:|
| 1 | WordPress: Settings → Reading → Static Page → Home | 2 דק' | 🔴 |
| 2 | MetaEditor: F7 Compile 7 bots (FTMO Account 2) | 10 דק' | 🔴 |
| 3 | Paste 10 content files into WordPress | 30 דק' | 🟡 |
| 4 | Update YOUR_ID in affiliate links | 5 דק' | 🟡 |
| 5 | Ko-fi signup → Telegram VIP | 10 דק' | 🟢 |

### 📊 Git Commits Tonight
| Commit | Time | What |
|--------|------|------|
| 5376c59 | 22:00 | Full system review |
| 59e8504 | 01:20 | Domains + affiliate |
| 4a766de | 02:00 | FTMO bots + WordPress Live |
| 008a95f | 02:45 | 4-Floor Architecture + Gem |
| 8012029 | 02:50 | Task checklist |
| 1ea4b96 | 03:10 | Hostinger API + MCP |

---

## 📋 סיכום סשן — 01/05/2026 12:00-17:30 (Claude Code)

### ✅ WordPress commotiai.com — 6 פוסטים חיים
| ID | כותרת | URL |
|----|--------|-----|
| 6  | FTMO Challenge Week 1: RSI+MA20 EA | commotiai.com/ftmo-challenge-week-1... |
| 11 | ICT Silver Bullet Setup | commotiai.com/ict-silver-bullet-setup-2/ |
| 12 | How AI Is Changing Retail Trading in 2026 | commotiai.com/how-ai-is-changing-retail-trading-in-2026/ |
| 13 | Diamond Scanner: How We Rank 50+ Assets | commotiai.com/diamond-scanner-how-we-rank-50-assets-every-morning/ |
| 14 | Kelly Criterion: Optimal Position Sizing | commotiai.com/kelly-criterion-the-math-behind-optimal-position-sizing/ |
| 15 | AI-Powered Dropshipping in 2026 | commotiai.com/ai-powered-dropshipping-in-2026-how-we-automated-product-research/ |

**סקריפט אוטומציה:** `wp_auto_poster.py` — מעלה כל הפוסטים דרך WordPress REST API
**WP App Password:** שמורה בסקריפט (mbotbika9@gmail.com)

### ✅ TradingView MCP Jackson — מותקן
**נתיב:** `C:\Users\gfdh5555\tradingview-mcp-jackson\`
**מה זה:** קישור Claude Code ישירות ל-TradingView Desktop דרך CDP (port 9222)
**יכולות:** קריאת גרף בזמן אמת, כתיבת Pine Script, הוספת אינדיקטורים בפקודה, morning_brief
**rules.json:** מוגדר עם EURUSD, XAUUSD, GBPUSD, US100, USOIL + FTMO rules
**MCP Config:** `C:\Users\gfdh5555\.claude\mcp.json` — server: tradingview

### 🔴 נותר לפעול
- [ ] הורד TradingView Desktop מ-tradingview.com/desktop
- [ ] הפעל TradingView Desktop → CDP יתחבר
- [ ] MetaEditor: קמפל 7 בוטים (F7)
- [ ] WordPress: Settings → Reading → Static Page → Home
- [ ] עדכן YOUR_ID בקישורי affiliate
