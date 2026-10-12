// DATA DEFINITIONS & DATABASE

// Blood type specific profiles
const BLOOD_TYPE_PROFILES = {
  O: {
    title: "סוג O - 'הצייד הפעיל'",
    desc: "מערכת עיכול חזקה וחומציות קיבה טובה המפרקת חלבון מן החי בצורה מיטבית. רגישות מוגברת לגלוטן וחיטה.",
    traits: ["עשיר בחלבון ודגים", "רגישות לגלוטן ותירס", "פעילות אירובית נמרצת", "חילוף חומרים יעיל בבשר רזה"],
    keyAvoid: ["חיטה מלאה", "תירס", "שעועית כליה", "כרובית", "בוטנים"]
  },
  A: {
    title: "סוג A - 'החקלאי הצמחוני'",
    desc: "מתאים במיוחד לתזונה מבוססת צומח, קטניות עדינות, דגנים וירקות שורש. חומציות קיבה נמוכה יותר המקשה על פירוק בשר אדום.",
    traits: ["מומלץ ירקות וקטניות", "מוצרי סויה ודגנים מלאים", "פעילות מתונה (יוגה, הליכה)", "להפחית בשר אדום ומוצרי חלב פרה"],
    keyAvoid: ["בשר בקר", "מוצרי חלב פרה שמנים", "עגבניות", "חצילים", "תפוחי אדמה"]
  },
  B: {
    title: "סוג B - 'הנווד המאוזן'",
    desc: "מערכת עיכול גמישה המסתדרת מצוין עם מוצרי חלב איכותיים, בשרים מסוימים (כבש, הודו) וירקות ירוקים.",
    traits: ["סובלנות למוצרי חלב", "תזונה מגוונת ומאוזנת", "רגישות לעוף ותירס", "איזון פיזי ומנטלי"],
    keyAvoid: ["עוף (מומלץ להחליף בהודו)", "תירס", "עדשים", "שומשום וטחינה", "עגבניות"]
  },
  AB: {
    title: "סוג AB - 'המעורב והנדיר'",
    desc: "שילוב נדיר ומורכב בין תכונות סוג A לסוג B. נהנה מדגים, טופו, מוצרי חלב עיזים וירקות עליים.",
    traits: ["מאכלי ים וסויה", "ירקות ירוקים ופירות יער", "ארוחות קטנות ומדודות", "מתח מאוזן דרך מדיטציה והליכה"],
    keyAvoid: ["בשר בקר ועוף", "תירס", "שעועית שחורה", "תפוזים", "בננות"]
  }
};

// Rich food database with blood type compatibility and calories
const FOOD_DATABASE = [
  { name: "חזה עוף מבושל / צלוי (100 גר')", kcal: 165, portion: "100 גרם", comp: { O: "neutral", A: "avoid", B: "avoid", AB: "avoid" } },
  { name: "הודו צלוי (100 גר')", kcal: 145, portion: "100 גרם", comp: { O: "beneficial", A: "neutral", B: "beneficial", AB: "beneficial" } },
  { name: "סלמון אפוי (100 גר')", kcal: 205, portion: "100 גרם", comp: { O: "beneficial", A: "beneficial", B: "beneficial", AB: "beneficial" } },
  { name: "דג אמנון / מושט (100 גר')", kcal: 128, portion: "100 גרם", comp: { O: "neutral", A: "neutral", B: "neutral", AB: "neutral" } },
  { name: "בשר בקר רזה (100 גר')", kcal: 210, portion: "100 גרם", comp: { O: "beneficial", A: "avoid", B: "beneficial", AB: "avoid" } },
  { name: "ביצה קשה L", kcal: 78, portion: "יחידה אחת", comp: { O: "neutral", A: "neutral", B: "beneficial", AB: "beneficial" } },
  { name: "טופו טבעי (100 גר')", kcal: 76, portion: "100 גרם", comp: { O: "avoid", A: "beneficial", B: "neutral", AB: "beneficial" } },
  
  // Grains & Carbs
  { name: "חלה קלועה מסורתית", kcal: 140, portion: "פרוסה (כ-45 גרם)", comp: { O: "avoid", A: "neutral", B: "avoid", AB: "neutral" } },
  { name: "חלת כוסמין מלא", kcal: 110, portion: "פרוסה (כ-40 גרם)", comp: { O: "neutral", A: "beneficial", B: "neutral", AB: "beneficial" } },
  { name: "קינואה מבושלת (כוס)", kcal: 220, portion: "כוס מבושלת", comp: { O: "neutral", A: "neutral", B: "neutral", AB: "neutral" } },
  { name: "אורז בסמטי / מלא (כוס מבושל)", kcal: 180, portion: "כוס מבושלת", comp: { O: "neutral", A: "beneficial", B: "beneficial", AB: "beneficial" } },
  { name: "שיבולת שועל (דייסה מ-40 גרם)", kcal: 155, portion: "קערית בינונית", comp: { O: "neutral", A: "beneficial", B: "beneficial", AB: "beneficial" } },
  
  // Shabbat Specials
  { name: "חמין / טשולנט מסורתי עשיר", kcal: 480, portion: "מנה בינונית", comp: { O: "neutral", A: "avoid", B: "neutral", AB: "avoid" } },
  { name: "חמין קל (עוף, חיטה/כוסמין, ירקות)", kcal: 320, portion: "מנה בינונית", comp: { O: "beneficial", A: "neutral", B: "beneficial", AB: "neutral" } },
  { name: "גפילטע פיש ביתי עם חזרת", kcal: 120, portion: "קציצה אחת", comp: { O: "neutral", A: "beneficial", B: "beneficial", AB: "beneficial" } },
  { name: "סלט מטבוחה ביתית בשמן זית", kcal: 70, portion: "2 כפות", comp: { O: "neutral", A: "avoid", B: "avoid", AB: "neutral" } },
  { name: "טחינה גולמית משומשום מלא (כף)", kcal: 90, portion: "כף אחת", comp: { O: "neutral", A: "beneficial", B: "avoid", AB: "neutral" } },
  { name: "יין קידוש יבש (כוסית 86 מ\"ל)", kcal: 70, portion: "כוסית קידוש", comp: { O: "neutral", A: "beneficial", B: "neutral", AB: "beneficial" } },
  { name: "מיץ ענבים לקידוש (כוסית 86 מ\"ל)", kcal: 65, portion: "כוסית קידוש", comp: { O: "avoid", A: "neutral", B: "beneficial", AB: "neutral" } },
  { name: "סלט כרוב וגזר רענן בלי מיונז", kcal: 45, portion: "קערית אישית", comp: { O: "neutral", A: "beneficial", B: "beneficial", AB: "beneficial" } },

  // Veggies & Fruits
  { name: "תרד ועלים ירוקים (טריים)", kcal: 25, portion: "קערה גדולה", comp: { O: "beneficial", A: "beneficial", B: "beneficial", AB: "beneficial" } },
  { name: "ברוקולי מאודה (כוס)", kcal: 35, portion: "כוס", comp: { O: "beneficial", A: "beneficial", B: "beneficial", AB: "beneficial" } },
  { name: "עגבנייה טרייה", kcal: 22, portion: "יחידה בינונית", comp: { O: "neutral", A: "avoid", B: "avoid", AB: "neutral" } },
  { name: "מלפפון ירוק", kcal: 15, portion: "יחידה", comp: { O: "neutral", A: "neutral", B: "neutral", AB: "neutral" } },
  { name: "תפוח עץ ירוק", kcal: 80, portion: "יחידה בינונית", comp: { O: "neutral", A: "neutral", B: "neutral", AB: "neutral" } },
  { name: "אוכמניות ופירות יער (100 גר')", kcal: 57, portion: "חצי כוס", comp: { O: "beneficial", A: "beneficial", B: "beneficial", AB: "beneficial" } },
  { name: "שמן זית כתית טהור (כף)", kcal: 119, portion: "כף אחת", comp: { O: "beneficial", A: "beneficial", B: "beneficial", AB: "beneficial" } },
  { name: "אגוזי מלך (30 גרם)", kcal: 195, portion: "חופן (7 חצאים)", comp: { O: "beneficial", A: "beneficial", B: "beneficial", AB: "beneficial" } }
];

// Shabbat quick-add items
const SHABBAT_QUICK_PRESETS = [
  { name: "כזית חלה לברכה", kcal: 85, meal: "dinner", portion: "פרוסה קטנה (30 גרם)", comp: "neutral" },
  { name: "כוסית יין קידוש יבש", kcal: 70, meal: "dinner", portion: "כוסית (86 מ\"ל)", comp: "beneficial" },
  { name: "מנת סלמון אפוי שבת", kcal: 210, meal: "dinner", portion: "נתח פילה", comp: "beneficial" },
  { name: "מנת חמין מאוזן", kcal: 350, meal: "lunch", portion: "צלחת בינונית", comp: "beneficial" },
  { name: "ביצה קשה של חמין", kcal: 78, meal: "lunch", portion: "ביצה אחת", comp: "neutral" },
  { name: "טחינה ירוקה ביתית (2 כפות)", kcal: 110, meal: "lunch", portion: "2 כפות", comp: "neutral" },
  { name: "דג טונה לסעודה שלישית", kcal: 130, meal: "dinner", portion: "חצי קופסה במים", comp: "beneficial" }
];

// Uplifting Quotes Database
const ENCOURAGING_QUOTES = [
  { text: "ונשמרתם מאד לנפשותיכם – שמירת הגוף ובריאותו היא עבודת ה' עמוקה ומבורכת.", source: "דברים ד' ט\"ו / הרמב\"ם" },
  { text: "השבת אינה מבחן של הגבלה, אלא הזדמנות לעונג פנימי ואכילה של כבוד ושובע בנחת.", source: "חוכמת השבת" },
  { text: "כל יום הוא דף חדש ונקי. נפילה קטנה אינה שוברת את הדרך – היא קריאה לחזור בעדינות.", source: "חיזוק יומי" },
  { text: "מי שאוכל מתוך יישוב הדעת והודיה, גופו מקבל את המזון כברכה ולא כמעמסה.", source: "מאור עיניים" },
  { text: "הניצחון האמיתי הוא לא צום וסבל, אלא שלווה ושליטה מתוקה בבחירות שלך.", source: "פסיכולוגיה חיובית" },
  { text: "יהי מזונך תרופתך – כשאוכלים לפי טיב הגוף וטבעו, הנפש מאירה בשמחה.", source: "הלכות דעות, הרמב\"ם" },
  { text: "סעודת שבת מזינה את הנשמה היתרה. אכול ברוגע, לעס לאט ושמח במתנת החיים.", source: "שולחן ערוך הלב" }
];

// State Management
const STATE = {
  currentDate: new Date(),
  bloodType: "A",
  goal: "loss",
  weight: 75,
  baseKcal: 1800,
  shabbatModeEnabled: true,
  waterGlasses: 0,
  meals: {
    breakfast: [],
    lunch: [],
    dinner: [],
    snacks: []
  },
  allDaysHistory: {} // key format: YYYY-MM-DD
};

// Initialize App
document.addEventListener("DOMContentLoaded", () => {
  loadFromLocalStorage();
  initDateBar();
  initTabs();
  initBloodTypeView();
  initShabbatView();
  initCalorieTracker();
  initInspirationView();
  initModals();
  renderAll();
});

// Storage Helpers
function getTodayKey(date = STATE.currentDate) {
  const d = new Date(date);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function saveToLocalStorage() {
  const dayKey = getTodayKey();
  if (!STATE.allDaysHistory[dayKey]) {
    STATE.allDaysHistory[dayKey] = {};
  }
  STATE.allDaysHistory[dayKey] = {
    meals: STATE.meals,
    waterGlasses: STATE.waterGlasses
  };

  const payload = {
    bloodType: STATE.bloodType,
    goal: STATE.goal,
    weight: STATE.weight,
    baseKcal: STATE.baseKcal,
    shabbatModeEnabled: STATE.shabbatModeEnabled,
    allDaysHistory: STATE.allDaysHistory
  };
  localStorage.setItem("shabbat_blood_diet_state", JSON.stringify(payload));
}

function loadFromLocalStorage() {
  const raw = localStorage.getItem("shabbat_blood_diet_state");
  if (raw) {
    try {
      const data = JSON.parse(raw);
      STATE.bloodType = data.bloodType || "A";
      STATE.goal = data.goal || "loss";
      STATE.weight = data.weight || 75;
      STATE.baseKcal = data.baseKcal || 1800;
      STATE.shabbatModeEnabled = data.shabbatModeEnabled !== undefined ? data.shabbatModeEnabled : true;
      STATE.allDaysHistory = data.allDaysHistory || {};
    } catch (e) {
      console.error("Storage error:", e);
    }
  }
  loadDayState(STATE.currentDate);
}

function loadDayState(date) {
  const key = getTodayKey(date);
  if (STATE.allDaysHistory[key]) {
    STATE.meals = STATE.allDaysHistory[key].meals || { breakfast: [], lunch: [], dinner: [], snacks: [] };
    STATE.waterGlasses = STATE.allDaysHistory[key].waterGlasses || 0;
  } else {
    STATE.meals = { breakfast: [], lunch: [], dinner: [], snacks: [] };
    STATE.waterGlasses = 0;
  }
}

// Calorie & Shabbat Logic
function isDayShabbat(date = STATE.currentDate) {
  const day = date.getDay(); // 0 is Sunday, 5 is Friday, 6 is Saturday
  return day === 5 || day === 6; // Friday or Shabbat
}

function getDayTargetKcal() {
  let target = STATE.baseKcal;
  if (!STATE.shabbatModeEnabled) {
    return target;
  }
  const isWeekend = isDayShabbat();
  if (isWeekend) {
    // Weekend gets the weekly bonus! 5 weekdays save 200 each = 1,000 total bonus / 2 days = +500 kcal per day
    return target + 500;
  } else {
    // Weekdays save 200 kcal for Shabbat buffer
    return Math.max(1300, target - 200);
  }
}

// Tab Switching
function initTabs() {
  const tabButtons = document.querySelectorAll(".tab-btn");
  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      tabButtons.forEach(b => b.classList.remove("active"));
      document.querySelectorAll(".tab-pane").forEach(pane => pane.classList.remove("active"));
      btn.classList.add("active");
      const target = btn.dataset.tab;
      document.getElementById(`tab-${target}`).classList.add("active");
    });
  });
}

// Date Navigation
function initDateBar() {
  document.getElementById("prevDayBtn").addEventListener("click", () => {
    saveToLocalStorage();
    STATE.currentDate.setDate(STATE.currentDate.getDate() - 1);
    loadDayState(STATE.currentDate);
    renderAll();
  });

  document.getElementById("nextDayBtn").addEventListener("click", () => {
    saveToLocalStorage();
    STATE.currentDate.setDate(STATE.currentDate.getDate() + 1);
    loadDayState(STATE.currentDate);
    renderAll();
  });
}

function updateDateDisplay() {
  const days = ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת"];
  const d = STATE.currentDate;
  const isToday = getTodayKey(d) === getTodayKey(new Date());
  const prefix = isToday ? "היום, " : "";
  const label = `${prefix}יום ${days[d.getDay()]}, ${d.getDate()}/${d.getMonth() + 1}`;
  document.getElementById("displayDateLabel").textContent = label;

  const shabbatPill = document.getElementById("shabbatNoticeTag");
  if (STATE.shabbatModeEnabled) {
    shabbatPill.classList.remove("hidden");
    if (isDayShabbat(d)) {
      shabbatPill.textContent = "🍷 עונג שבת: תוספת קלוריות חגיגית!";
      shabbatPill.style.background = "#fef3c7";
      shabbatPill.style.color = "#b45309";
    } else {
      shabbatPill.textContent = "✨ חיסכון לשבת: -200 קל' מוקדשות לסעודות";
      shabbatPill.style.background = "#ecfdf5";
      shabbatPill.style.color = "#047857";
    }
  } else {
    shabbatPill.classList.add("hidden");
  }
}

// Calorie Tracker Renderer
function renderCalorieTracker() {
  updateDateDisplay();

  // Sum calories
  let totalConsumed = 0;
  ["breakfast", "lunch", "dinner", "snacks"].forEach(mealKey => {
    const listEl = document.getElementById(`${mealKey}List`);
    const countBadge = document.getElementById(`${mealKey}Kcal`);
    const items = STATE.meals[mealKey] || [];
    
    let mealTotal = 0;
    listEl.innerHTML = "";

    if (items.length === 0) {
      listEl.innerHTML = `<div class="empty-meal-hint">עדיין לא נרשם מאכל לארוחה זו</div>`;
    } else {
      items.forEach((item, index) => {
        mealTotal += item.kcal;
        const itemEl = document.createElement("div");
        itemEl.className = "meal-item";
        
        let bloodBadge = "";
        if (item.comp) {
          const compClass = item.comp === "beneficial" ? "blood-match-beneficial" : (item.comp === "avoid" ? "blood-match-avoid" : "blood-match-neutral");
          const compText = item.comp === "beneficial" ? "🌟 מועיל" : (item.comp === "avoid" ? "⛔ להימנע" : "⚪ ניטרלי");
          bloodBadge = `<span class="blood-match-badge ${compClass}">${compText}</span>`;
        }

        itemEl.innerHTML = `
          <div class="meal-item-info">
            <span><strong>${item.name}</strong> (${item.portion || "מנה"})</span>
            ${bloodBadge}
          </div>
          <div class="meal-item-actions">
            <span><strong>${item.kcal}</strong> קל'</span>
            <button class="delete-item-btn" data-meal="${mealKey}" data-index="${index}" title="מחק מאכל">&times;</button>
          </div>
        `;
        listEl.appendChild(itemEl);
      });
    }

    countBadge.textContent = `${mealTotal} קל'`;
    totalConsumed += mealTotal;
  });

  // Calculate target and remaining
  const targetKcal = getDayTargetKcal();
  const remaining = targetKcal - totalConsumed;

  document.getElementById("consumedKcal").textContent = totalConsumed.toLocaleString();
  document.getElementById("targetKcal").textContent = targetKcal.toLocaleString();
  
  const remainingEl = document.getElementById("remainingKcal");
  remainingEl.textContent = remaining.toLocaleString();
  if (remaining < 0) {
    remainingEl.style.color = "#dc2626"; // warning
  } else {
    remainingEl.style.color = "#047857";
  }

  const isWeekend = isDayShabbat();
  document.getElementById("targetModeLabel").textContent = isWeekend ? "יעד מורחב לשבת" : "יעד יומי מאוזן";

  // Calorie SVG Ring Animation
  const ring = document.getElementById("calorieProgressRing");
  const circumference = 339.29; // 2 * PI * 54
  let percent = targetKcal > 0 ? (totalConsumed / targetKcal) : 0;
  if (percent > 1) percent = 1;
  const offset = circumference - (percent * circumference);
  ring.style.strokeDashoffset = offset;

  // Shabbat Bank info in tracker
  const bankCard = document.getElementById("shabbatBankQuickView");
  if (STATE.shabbatModeEnabled) {
    bankCard.classList.remove("hidden");
    const bonusText = isWeekend ? "מיושם היום במלואו בעונג שבת!" : "נצברו 1,000 קל' תוספת לסעודות שישי ושבת!";
    document.getElementById("bankAccumulatedKcal").textContent = isWeekend ? "500 קל' נוספות" : "1,000";
  } else {
    bankCard.classList.add("hidden");
  }

  // Delete food handlers
  document.querySelectorAll(".delete-item-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const meal = e.currentTarget.dataset.meal;
      const idx = parseInt(e.currentTarget.dataset.index, 10);
      STATE.meals[meal].splice(idx, 1);
      saveToLocalStorage();
      renderCalorieTracker();
      showToast("המאכל הוסר מיומן האכילה.");
    });
  });

  renderWaterCups();
}

// Water Tracker
function renderWaterCups() {
  const container = document.getElementById("waterCupsContainer");
  container.innerHTML = "";
  document.getElementById("waterCount").textContent = STATE.waterGlasses;

  for (let i = 1; i <= 8; i++) {
    const cup = document.createElement("button");
    cup.className = `cup-btn ${i <= STATE.waterGlasses ? "filled" : ""}`;
    cup.innerHTML = i <= STATE.waterGlasses ? "🥤" : "💧";
    cup.title = `כוס ${i}`;
    cup.addEventListener("click", () => {
      STATE.waterGlasses = i === STATE.waterGlasses ? i - 1 : i;
      saveToLocalStorage();
      renderWaterCups();
      if (STATE.waterGlasses === 8) {
        showToast("כל הכבוד! השלמת 8 כוסות מים מרוות היום! 💧✨");
      }
    });
    container.appendChild(cup);
  }
}

// Blood Type Tab Logic
function initBloodTypeView() {
  // Blood type chips selector
  const chips = document.querySelectorAll(".type-chip");
  chips.forEach(chip => {
    chip.addEventListener("click", () => {
      chips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      STATE.bloodType = chip.dataset.type;
      renderBloodTypeProfile();
      renderBloodFoodList();
      saveToLocalStorage();
    });
  });

  // Category filter pills
  const catPills = document.querySelectorAll(".cat-pill");
  catPills.forEach(pill => {
    pill.addEventListener("click", () => {
      catPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      renderBloodFoodList();
    });
  });

  // Search input
  document.getElementById("foodSearchInput").addEventListener("input", () => {
    renderBloodFoodList();
  });
}

function renderBloodTypeProfile() {
  const prof = BLOOD_TYPE_PROFILES[STATE.bloodType] || BLOOD_TYPE_PROFILES.A;
  const card = document.getElementById("typeProfileCard");
  
  // Sync active chip
  document.querySelectorAll(".type-chip").forEach(c => {
    if (c.dataset.type === STATE.bloodType) c.classList.add("active");
    else c.classList.remove("active");
  });

  card.innerHTML = `
    <div class="type-title-row">
      <h3 style="color:#047857">${prof.title}</h3>
      <span style="font-weight:700; color:#059669; font-size:0.9rem">סוג הדם הנבחר שלך</span>
    </div>
    <p style="font-size:0.88rem; color:#334155;">${prof.desc}</p>
    <div class="type-traits">
      ${prof.traits.map(t => `<span class="trait-tag">${t}</span>`).join("")}
    </div>
  `;
}

function renderBloodFoodList() {
  const listEl = document.getElementById("bloodFoodList");
  const query = (document.getElementById("foodSearchInput").value || "").trim().toLowerCase();
  const activeCatPill = document.querySelector(".cat-pill.active");
  const activeFilter = activeCatPill ? activeCatPill.dataset.cat : "all";

  listEl.innerHTML = "";

  const filtered = FOOD_DATABASE.filter(f => {
    const matchQuery = !query || f.name.toLowerCase().includes(query);
    const itemComp = f.comp[STATE.bloodType] || "neutral";
    const matchFilter = activeFilter === "all" || itemComp === activeFilter;
    return matchQuery && matchFilter;
  });

  if (filtered.length === 0) {
    listEl.innerHTML = `<div style="text-align:center; padding:20px; color:#64748b;">לא נמצאו מאכלים תואמים לחיפוש שלך.</div>`;
    return;
  }

  filtered.forEach(food => {
    const comp = food.comp[STATE.bloodType] || "neutral";
    const compClass = comp === "beneficial" ? "blood-match-beneficial" : (comp === "avoid" ? "blood-match-avoid" : "blood-match-neutral");
    const compText = comp === "beneficial" ? "🌟 מועיל לגופך" : (comp === "avoid" ? "⛔ מומלץ להימנע" : "⚪ ניטרלי");

    const row = document.createElement("div");
    row.className = "food-card-row";
    row.innerHTML = `
      <div>
        <div class="food-title">${food.name}</div>
        <div class="food-meta">${food.portion} • כ-${food.kcal} קלוריות</div>
      </div>
      <div class="food-actions-right">
        <span class="blood-match-badge ${compClass}">${compText}</span>
        <button class="btn btn-secondary btn-xs quick-add-to-log" title="הוסף ליומן של היום">+ ליומן</button>
      </div>
    `;

    row.querySelector(".quick-add-to-log").addEventListener("click", () => {
      openAddFoodWithItem(food);
    });

    listEl.appendChild(row);
  });
}

// Shabbat Mode Details
function initShabbatView() {
  const toggle = document.getElementById("shabbatModeToggle");
  toggle.checked = STATE.shabbatModeEnabled;
  toggle.addEventListener("change", (e) => {
    STATE.shabbatModeEnabled = e.target.checked;
    saveToLocalStorage();
    renderCalorieTracker();
    showToast(STATE.shabbatModeEnabled ? "מצב שבת הופעל! קלוריות ימות החול עודכנו לאפשר עונג שבת." : "מצב שבת כובה; היעד אחיד בכל ימות השבוע.");
  });

  // Render Shabbat quick-add foods
  const container = document.getElementById("shabbatQuickFoods");
  container.innerHTML = "";
  SHABBAT_QUICK_PRESETS.forEach(item => {
    const btn = document.createElement("div");
    btn.className = "shabbat-food-btn";
    btn.innerHTML = `
      <div>
        <strong style="font-size:0.88rem; display:block;">${item.name}</strong>
        <small style="color:#64748b;">${item.portion}</small>
      </div>
      <div style="text-align:left;">
        <span style="font-weight:700; color:#047857; font-size:0.85rem">${item.kcal} קל'</span>
        <span style="display:block; font-size:0.7rem; color:#b45309;">+ הוסף</span>
      </div>
    `;
    btn.addEventListener("click", () => {
      STATE.meals[item.meal].push({
        name: item.name,
        kcal: item.kcal,
        portion: item.portion,
        comp: item.comp
      });
      saveToLocalStorage();
      renderCalorieTracker();
      showToast(`נוסף ליומן: ${item.name} בהצלחה! תיהנו בשמחה! 🍷`);
    });
    container.appendChild(btn);
  });
}

// Encouragement & Inspiration
function initInspirationView() {
  document.getElementById("newQuoteBtn").addEventListener("click", rotateDailyQuote);
  document.getElementById("drawCardBtn").addEventListener("click", drawInspirationCard);

  // Render Quotes Feed
  const feed = document.getElementById("inspirationFeed");
  feed.innerHTML = "";
  ENCOURAGING_QUOTES.forEach(q => {
    const item = document.createElement("div");
    item.className = "feed-quote-item";
    item.innerHTML = `
      <p>"${q.text}"</p>
      <span>${q.source}</span>
    `;
    feed.appendChild(item);
  });

  rotateDailyQuote();
}

function rotateDailyQuote() {
  const randomQ = ENCOURAGING_QUOTES[Math.floor(Math.random() * ENCOURAGING_QUOTES.length)];
  document.getElementById("quoteBannerText").textContent = `"${randomQ.text}"`;
}

function drawInspirationCard() {
  const oracleQuotes = [
    { text: "עונג שבת איננו הפקרות – הוא אכילה מתוך רוממות, נחת ושמחה אמיתית בטוב הבורא.", src: "~ כוח השבת" },
    { text: "הגוף שלך הוא יצירת מופת. התייחס אליו ברכות ובאהבה, לא בענישה.", src: "~ שלום עם עצמך" },
    { text: "לאט זה מהר. שינוי שמחזיק מעמד נבנה מצעדים קטנים ובחירות טובות בכל רגע.", src: "~ חוכמת האיזון" },
    { text: "המתח אוכל את הנשמה יותר מכל מאכל. נשמו עמוק, שחררו את רגשות האשמה והמשיכו קדימה.", src: "~ בריאות הנפש" },
    { text: "סוג הדם שלך הוא המפה הייחודית שלך. כשאתה מכבד את ביולוגיית הגוף, הכוחות שבים אליך.", src: "~ הקשבה לגוף" }
  ];
  const q = oracleQuotes[Math.floor(Math.random() * oracleQuotes.length)];
  const box = document.getElementById("oracleCardBox");
  box.style.opacity = "0";
  setTimeout(() => {
    document.getElementById("oracleQuote").textContent = `"${q.text}"`;
    document.getElementById("oracleSource").textContent = q.src;
    box.style.opacity = "1";
    showToast("קלף חיזוק חדש נשלף בהצלחה! 💖");
  }, 200);
}

// Modals Setup
function initModals() {
  const addModal = document.getElementById("addFoodModal");
  const profModal = document.getElementById("profileModal");

  // Open add food modal
  document.getElementById("openAddFoodModalBtn").addEventListener("click", () => {
    addModal.classList.add("open");
    renderModalFoodSuggestions();
  });

  document.getElementById("closeAddFoodModalBtn").addEventListener("click", () => addModal.classList.remove("open"));
  document.getElementById("cancelAddFoodBtn").addEventListener("click", () => addModal.classList.remove("open"));

  // Open profile modal
  document.getElementById("openProfileBtn").addEventListener("click", () => {
    document.getElementById("profBloodType").value = STATE.bloodType;
    document.getElementById("profGoal").value = STATE.goal;
    document.getElementById("profWeight").value = STATE.weight;
    document.getElementById("profBaseKcal").value = STATE.baseKcal;
    document.getElementById("profShabbatDeduction").checked = STATE.shabbatModeEnabled;
    profModal.classList.add("open");
  });

  document.getElementById("closeProfileModalBtn").addEventListener("click", () => profModal.classList.remove("open"));

  document.getElementById("saveProfileBtn").addEventListener("click", () => {
    STATE.bloodType = document.getElementById("profBloodType").value;
    STATE.goal = document.getElementById("profGoal").value;
    STATE.weight = parseFloat(document.getElementById("profWeight").value) || 75;
    STATE.baseKcal = parseInt(document.getElementById("profBaseKcal").value, 10) || 1800;
    STATE.shabbatModeEnabled = document.getElementById("profShabbatDeduction").checked;
    
    saveToLocalStorage();
    renderAll();
    profModal.classList.remove("open");
    showToast("הגדרות הפרופיל והתזונה נשמרו בהצלחה! ✨");
  });

  // Modal food search suggestions
  document.getElementById("modalFoodSearch").addEventListener("input", (e) => {
    renderModalFoodSuggestions(e.target.value);
  });

  // Confirm custom add food
  document.getElementById("confirmAddFoodBtn").addEventListener("click", () => {
    const meal = document.getElementById("modalMealSelect").value;
    const name = document.getElementById("customFoodName").value.trim();
    const kcal = parseInt(document.getElementById("customFoodKcal").value, 10);
    const comp = document.getElementById("customFoodBloodComp").value;
    const portion = document.getElementById("customFoodPortion").value.trim() || "מנה";

    if (!name || isNaN(kcal)) {
      alert("אנא מלאו שם מאכל וכמות קלוריות תקינה.");
      return;
    }

    STATE.meals[meal].push({ name, kcal, comp, portion });
    saveToLocalStorage();
    renderCalorieTracker();

    // Reset inputs
    document.getElementById("customFoodName").value = "";
    document.getElementById("customFoodKcal").value = "";
    document.getElementById("customFoodPortion").value = "";
    addModal.classList.remove("open");

    showToast(`נרשם בהצלחה: ${name} (${kcal} קלוריות) ✨`);
  });

  // Reset Water
  document.getElementById("resetWaterBtn").addEventListener("click", () => {
    STATE.waterGlasses = 0;
    saveToLocalStorage();
    renderWaterCups();
  });
}

function renderModalFoodSuggestions(query = "") {
  const container = document.getElementById("modalFoodSuggestions");
  container.innerHTML = "";
  const q = query.trim().toLowerCase();

  const filtered = FOOD_DATABASE.filter(f => !q || f.name.toLowerCase().includes(q)).slice(0, 8);

  filtered.forEach(food => {
    const comp = food.comp[STATE.bloodType] || "neutral";
    const compLabel = comp === "beneficial" ? "🌟 מועיל" : (comp === "avoid" ? "⛔ להימנע" : "⚪ ניטרלי");
    const item = document.createElement("div");
    item.className = "sugg-item";
    item.innerHTML = `
      <span>${food.name} <small style="color:#64748b;">(${compLabel})</small></span>
      <strong>${food.kcal} קל'</strong>
    `;
    item.addEventListener("click", () => {
      document.getElementById("customFoodName").value = food.name;
      document.getElementById("customFoodKcal").value = food.kcal;
      document.getElementById("customFoodPortion").value = food.portion;
      document.getElementById("customFoodBloodComp").value = comp;
    });
    container.appendChild(item);
  });
}

function openAddFoodWithItem(food) {
  const addModal = document.getElementById("addFoodModal");
  addModal.classList.add("open");
  document.getElementById("customFoodName").value = food.name;
  document.getElementById("customFoodKcal").value = food.kcal;
  document.getElementById("customFoodPortion").value = food.portion;
  document.getElementById("customFoodBloodComp").value = food.comp[STATE.bloodType] || "neutral";
}

// Toast notification helper
function showToast(msg) {
  const toast = document.getElementById("toastNotification");
  const msgEl = document.getElementById("toastMessage");
  msgEl.textContent = msg;
  toast.classList.remove("hidden");
  setTimeout(() => {
    toast.classList.add("hidden");
  }, 3400);
}

// Master Render
function renderAll() {
  renderCalorieTracker();
  renderBloodTypeProfile();
  renderBloodFoodList();
}
