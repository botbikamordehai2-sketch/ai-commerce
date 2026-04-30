# PROJECT_CONTEXT — ai-commerce
**הדבק את זה בתחילת כל שיחה עם Cline / ChatGPT / Claude Web**
עדכון אחרון: 29/04/2026

---

## מה זה הפרויקט
אתר e-commerce חכם מבוסס AI, בנוי HTML + CSS + JavaScript טהורים (ללא framework).
שפה: עברית, RTL, Dark Mode.

## נתיב מקומי
```
C:\Users\gfdh5555\Desktop\projects\ai-commerce\
```
(או היכן שהורדת את הקבצים)

## קבצים
| קובץ | תפקיד |
|---|---|
| `index.html` | מבנה כל הדף |
| `styles.css` | עיצוב מלא (dark theme, animations, responsive) |
| `app.js` | כל הלוגיקה (מוצרים, עגלה, חיפוש, modal, מועדפים, AI chat) |
| `PROJECT_CONTEXT.md` | הקובץ הזה |

## פיצ'רים קיימים
- Hero עם אנימציות וכרטיסים מרחפים
- 6 קטגוריות + סינון מוצרים
- 12 מוצרים עם AI Pick badges
- עגלת קניות (drawer) + localStorage
- חיפוש חי (Ctrl+K)
- מודל מוצר עם תיאור מלא
- מועדפים (❤️) + localStorage
- צ'אט AI עם תגובות לפי keywords
- אנימציות scroll (IntersectionObserver)
- רספונסיבי מלא (מובייל + דסקטופ)

## Git
- Branch: `claude/build-website-2foAE`
- Remote: `https://github.com/botbikamordehai2-sketch/ai-commerce`
- סטטוס: 2 commits מקומיים, push ממתין להרשאות

## הרצה מקומית
```bash
python3 -m http.server 8000
# ואז http://localhost:8000
```

## מה עוד לא נעשה
- [ ] Push לגיטהאב (נכשל 403 — צריך הרשאות)
- [ ] פריסה ב-Vercel / GitHub Pages
- [ ] עמוד checkout אמיתי
- [ ] Backend / API אמיתי
- [ ] אינטגרציה עם Claude API לצ'אט חכם אמיתי

## הצעד הבא המומלץ
1. תקן הרשאות GitHub → `git push -u origin claude/build-website-2foAE`
2. חבר ל-Vercel → פריסה אוטומטית בכל push
3. החלף את צ'אט ה-keywords בחיבור אמיתי ל-Claude API
