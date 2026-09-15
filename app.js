/* =========================================================
   TGEN-AI
   Complete Main Application
   ========================================================= */

"use strict";

/* =========================================================
   1. SUBJECT DATA
   ========================================================= */

const tradeSubjects = [
  "Solar Photovoltaic installation and maintenance",
  "Fashion design and garment making",
  "Livestock farming / Animal Husbandry",
  "Beauty and cosmetology",
  "Computer hardware and GSM repairs",
  "Horticulture and crop production"
];

const coreSubjects = [
  "English Language",
  "General Mathematics",
  "Citizenship and Heritage Studies",
  "Digital Technologies"
];

const departments = {
  General: {
    icon: "📚",
    subjects: [
      ...coreSubjects,
      ...tradeSubjects
    ]
  },

  Science: {
    icon: "🔬",
    subjects: [
      ...coreSubjects,
      "Biology",
      "Chemistry",
      "Physics",
      "Agricultural Science",
      "Further Mathematics",
      "Geography",
      "Physical and Health Education",
      "Foods and Nutrition",
      "Technical Drawing",
      ...tradeSubjects
    ]
  },

  Arts: {
    icon: "🎨",
    subjects: [
      ...coreSubjects,
      "Literature-in-English",
      "Government",
      "Nigerian History",
      "Christian Religious Studies",
      "Nigerian Languages",
      "French",
      "Arabic",
      "Visual Arts",
      "Music",
      ...tradeSubjects
    ]
  },

  Commercial: {
    icon: "💼",
    subjects: [
      ...coreSubjects,
      "Economics",
      "Financial Accounting",
      "Commerce",
      "Marketing",
      ...tradeSubjects
    ]
  }
};

const profileSubjectGroups = Object.fromEntries(
  Object.entries(departments).map(
    ([name, data]) => [name, data.subjects]
  )
);

/* =========================================================
   2. TOPICS
   ========================================================= */

const subjectTopics = {

  "English Language": [
    "Comprehension",
    "Grammar",
    "Parts of Speech",
    "Vocabulary",
    "Summary Writing",
    "Essay Writing",
    "Oral English"
  ],

  "General Mathematics": [
    "Number Bases",
    "Indices",
    "Logarithms",
    "Algebra",
    "Quadratic Equations",
    "Sets",
    "Sequences",
    "Statistics",
    "Probability",
    "Trigonometry",
    "Geometry"
  ],

  "Citizenship and Heritage Studies": [
    "Citizenship",
    "National Values",
    "Human Rights",
    "Responsibilities of Citizens",
    "Democracy",
    "National Identity",
    "Culture and Heritage"
  ],

  "Digital Technologies": [
    "Computer Hardware",
    "Software",
    "Digital Literacy",
    "Programming",
    "Algorithms",
    "Databases",
    "Internet and Networking",
    "Data Representation"
  ],

  Biology: [
    "The Cell",
    "Nutrition",
    "Classification",
    "Ecology",
    "Genetics",
    "Evolution",
    "Reproduction",
    "Transport",
    "Respiration",
    "Excretion"
  ],

  Chemistry: [
    "Matter",
    "Atomic Structure",
    "Elements",
    "Compounds",
    "Mixtures",
    "Chemical Reactions",
    "Periodic Table",
    "Chemical Bonding",
    "Acids and Bases",
    "Organic Chemistry"
  ],

  Physics: [
    "Measurement",
    "Motion",
    "Force",
    "Energy",
    "Work",
    "Power",
    "Electricity",
    "Waves",
    "Heat",
    "Light",
    "Magnetism"
  ],

  "Agricultural Science": [
    "Soil Science",
    "Crop Production",
    "Animal Production",
    "Farm Tools",
    "Farm Management",
    "Agricultural Economics"
  ],

  "Further Mathematics": [
    "Algebra",
    "Functions",
    "Matrices",
    "Vectors",
    "Calculus",
    "Probability",
    "Statistics"
  ],

  Geography: [
    "Map Reading",
    "Weather",
    "Climate",
    "Rocks",
    "Population",
    "Agriculture",
    "Environmental Resources"
  ],

  "Physical and Health Education": [
    "Physical Fitness",
    "Health Education",
    "Nutrition",
    "Safety",
    "Games and Sports",
    "Personal Hygiene"
  ],

  "Foods and Nutrition": [
    "Food Nutrients",
    "Meal Planning",
    "Food Preparation",
    "Food Preservation",
    "Kitchen Safety",
    "Nutrition and Health"
  ],

  "Technical Drawing": [
    "Drawing Instruments",
    "Geometric Construction",
    "Orthographic Projection",
    "Isometric Drawing",
    "Dimensioning",
    "Technical Symbols"
  ],

  "Literature-in-English": [
    "Prose",
    "Poetry",
    "Drama",
    "Literary Devices",
    "Themes",
    "Characterisation"
  ],

  Government: [
    "Constitution",
    "Democracy",
    "Political Parties",
    "Legislature",
    "Executive",
    "Judiciary"
  ],

  "Nigerian History": [
    "Pre-colonial Nigeria",
    "Colonial Rule",
    "Nationalism",
    "Independence",
    "Post-independence Nigeria",
    "Important Historical Events"
  ],

  "Christian Religious Studies": [
    "Creation",
    "The Life of Jesus",
    "Christian Values",
    "Parables",
    "The Early Church",
    "Christian Living"
  ],

  "Nigerian Languages": [
    "Vocabulary",
    "Grammar",
    "Reading",
    "Writing",
    "Oral Literature",
    "Culture"
  ],

  French: [
    "Greetings",
    "Vocabulary",
    "Grammar",
    "Conversation",
    "Reading",
    "Writing"
  ],

  Arabic: [
    "Alphabet",
    "Vocabulary",
    "Grammar",
    "Reading",
    "Writing",
    "Conversation"
  ],

  "Visual Arts": [
    "Drawing",
    "Painting",
    "Colour",
    "Design",
    "Sculpture",
    "Art History"
  ],

  Music: [
    "Musical Notation",
    "Rhythm",
    "Melody",
    "Harmony",
    "Musical Instruments",
    "Music History"
  ],

  Economics: [
    "Basic Economic Concepts",
    "Demand and Supply",
    "Production",
    "Markets",
    "National Income",
    "Money and Banking"
  ],

  "Financial Accounting": [
    "Accounting Concepts",
    "Source Documents",
    "Ledger Accounts",
    "Trial Balance",
    "Final Accounts",
    "Bank Reconciliation"
  ],

  Commerce: [
    "Trade",
    "Business Units",
    "Retail Trade",
    "Wholesale Trade",
    "Transport",
    "Communication"
  ],

  Marketing: [
    "Marketing Concepts",
    "Market Research",
    "Product",
    "Pricing",
    "Promotion",
    "Distribution"
  ],

  "Solar Photovoltaic installation and maintenance": [
    "Solar Energy",
    "Solar Panels",
    "Batteries",
    "Charge Controllers",
    "Inverters",
    "System Maintenance"
  ],

  "Fashion design and garment making": [
    "Fashion Tools",
    "Body Measurements",
    "Pattern Making",
    "Fabric Selection",
    "Sewing",
    "Garment Finishing"
  ],

  "Livestock farming / Animal Husbandry": [
    "Animal Nutrition",
    "Animal Breeds",
    "Housing",
    "Animal Health",
    "Breeding",
    "Farm Management"
  ],

  "Beauty and cosmetology": [
    "Personal Care",
    "Skin Care",
    "Hair Care",
    "Nail Care",
    "Beauty Tools",
    "Salon Safety"
  ],

  "Computer hardware and GSM repairs": [
    "Computer Components",
    "Troubleshooting",
    "Mobile Devices",
    "Basic Repairs",
    "Safety",
    "Maintenance"
  ],

  "Horticulture and crop production": [
    "Crop Types",
    "Soil Preparation",
    "Planting",
    "Crop Maintenance",
    "Harvesting",
    "Crop Storage"
  ]
};

/* =========================================================
   3. CLASS DATA
   ========================================================= */

const classData = {
  SS1: {
    name: "SS1",
    icon: "📘",
    badge: "Senior Secondary 1"
  },

  SS2: {
    name: "SS2",
    icon: "📗",
    badge: "Senior Secondary 2"
  },

  SS3: {
    name: "SS3",
    icon: "📕",
    badge: "Senior Secondary 3"
  }
};

/* Give every class every possible subject. */
const allSubjects = [
  ...new Set(
    Object.values(departments)
      .flatMap(department => department.subjects)
  )
];

for (const className of Object.keys(classData)) {
  classData[className].subjects =
    allSubjects.map(subject => ({
      name: subject,
      icon: getSubjectIcon(subject),
      topics:
        subjectTopics[subject] ||
        [
          "Introduction",
          "Key Concepts",
          "Examples",
          "Practice",
          "Revision"
        ]
    }));
}

/* =========================================================
   4. PROFILE STATE
   ========================================================= */

let selectedClass = "SS1";
let selectedDepartment = "General";
let selectedSubject = null;
let selectedTopic = null;

let userProfile = null;

try {
  userProfile = JSON.parse(
    localStorage.getItem("tgen-ai-profile") || "null"
  );
} catch {
  userProfile = null;
}

if (userProfile) {
  selectedClass =
    userProfile.class || "SS1";

  selectedDepartment =
    userProfile.department || "General";
}

/* =========================================================
   5. HELPERS
   ========================================================= */

function escapeHTML(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function escapeAttribute(value) {
  return escapeHTML(value);
}

function updateElement(id, value) {
  const element =
    document.getElementById(id);

  if (element) {
    element.textContent = value;
  }
}

function getStoredNumber(key) {
  const value =
    Number(localStorage.getItem(key) || 0);

  return Number.isFinite(value)
    ? value
    : 0;
}

function setStoredNumber(key, value) {
  localStorage.setItem(
    key,
    String(Math.max(0, Number(value) || 0))
  );
}

function getStoredArray(key) {
  try {
    const value = JSON.parse(
      localStorage.getItem(key) || "[]"
    );

    return Array.isArray(value)
      ? value
      : [];
  } catch {
    return [];
  }
}

function setStoredArray(key, value) {
  localStorage.setItem(
    key,
    JSON.stringify(value)
  );
}

function getSubjectIcon(subject) {

  const icons = {
    "English Language": "📖",
    "General Mathematics": "📐",
    "Citizenship and Heritage Studies": "🇳🇬",
    "Digital Technologies": "💻",
    Biology: "🧬",
    Chemistry: "⚗️",
    Physics: "⚡",
    "Agricultural Science": "🌱",
    "Further Mathematics": "📊",
    Geography: "🌍",
    "Physical and Health Education": "🏃",
    "Foods and Nutrition": "🍎",
    "Technical Drawing": "📏",
    "Literature-in-English": "📚",
    Government: "🏛️",
    "Nigerian History": "🇳🇬",
    "Christian Religious Studies": "✝️",
    "Nigerian Languages": "🗣️",
    French: "🇫🇷",
    Arabic: "🕌",
    "Visual Arts": "🎨",
    Music: "🎵",
    Economics: "📈",
    "Financial Accounting": "💰",
    Commerce: "🏪",
    Marketing: "📣",
    "Solar Photovoltaic installation and maintenance": "☀️",
    "Fashion design and garment making": "🧵",
    "Livestock farming / Animal Husbandry": "🐄",
    "Beauty and cosmetology": "💄",
    "Computer hardware and GSM repairs": "🔧",
    "Horticulture and crop production": "🌿"
  };

  return icons[subject] || "📚";
}

/* =========================================================
   6. PROFILE SUBJECTS
   ========================================================= */

function renderProfileSubjects() {

  const container =
    document.getElementById("profileSubjects");

  const classSelect =
    document.getElementById("profileClass");

  const departmentSelect =
    document.getElementById("profileDepartment");

  if (!container || !classSelect) {
    return;
  }

  if (!classSelect.value) {

    container.innerHTML = `
      <p style="color:#64748b;">
        Select your class first.
      </p>
    `;

    return;
  }

  const department =
    departmentSelect?.value || "";

  if (!department) {

    container.innerHTML = `
      <p style="color:#64748b;">
        Select your department to see the
        subjects you can choose.
      </p>
    `;

    return;
  }

  const selected =
    new Set(userProfile?.subjects || []);

  const subjects =
    profileSubjectGroups[department] || [];

  container.innerHTML =
    subjects.map(subject => `

      <label style="
        display:flex;
        align-items:center;
        gap:10px;
        padding:13px 14px;
        border:1px solid #dbe3f0;
        border-radius:12px;
        cursor:pointer;
        background:#fff;
        margin-bottom:10px;
      ">

        <input
          type="checkbox"
          name="offeredSubject"
          value="${escapeAttribute(subject)}"
          ${selected.has(subject) ? "checked" : ""}
          style="
            width:18px;
            height:18px;
          "
        >

        <span>
          ${escapeHTML(subject)}
        </span>

      </label>

    `).join("");
}

/* =========================================================
   7. SAVE PROFILE
   ========================================================= */

function saveProfile() {

  const name =
    document.getElementById("profileName")
      ?.value.trim();

  const email =
    document.getElementById("profileEmail")
      ?.value.trim();

  const className =
    document.getElementById("profileClass")
      ?.value;

  const department =
    document.getElementById("profileDepartment")
      ?.value;

  const exam =
    document.getElementById("profileExam")
      ?.value || "";

  const subjects =
    [...document.querySelectorAll(
      'input[name="offeredSubject"]:checked'
    )].map(input => input.value);

  const error =
    document.getElementById("profileError");

  if (
    !name ||
    !email ||
    !className ||
    !department ||
    subjects.length === 0
  ) {

    if (error) {

      error.textContent =
        "Please enter your name, email, class, department, and select at least one subject.";

      error.style.display = "block";
    }

    return;
  }

  if (
    className === "SS3" &&
    !exam
  ) {

    if (error) {

      error.textContent =
        "Please choose what you are studying for.";

      error.style.display = "block";
    }

    return;
  }

  userProfile = {
    name,
    email,
    class: className,
    department,
    exam:
      className === "SS3"
        ? exam
        : "",
    subjects,
    createdAt:
      userProfile?.createdAt ||
      new Date().toISOString()
  };

  localStorage.setItem(
    "tgen-ai-profile",
    JSON.stringify(userProfile)
  );

  selectedClass = className;
  selectedDepartment = department;
  selectedSubject = null;
  selectedTopic = null;

  if (error) {
    error.style.display = "none";
  }

  updateLogoutButton();
  renderClasses();
  renderDepartmentSelector();
  renderSubjects();
  renderTopics();

  showScreen("subjects");
}

/* =========================================================
   8. LOAD PROFILE
   ========================================================= */

function loadProfile() {

  if (!userProfile) {
    return;
  }

  const nameInput =
    document.getElementById("profileName");

  const emailInput =
    document.getElementById("profileEmail");

  const classInput =
    document.getElementById("profileClass");

  const departmentInput =
    document.getElementById("profileDepartment");

  const examInput =
    document.getElementById("profileExam");

  if (nameInput) {
    nameInput.value =
      userProfile.name || "";
  }

  if (emailInput) {
    emailInput.value =
      userProfile.email || "";
  }

  if (classInput) {
    classInput.value =
      userProfile.class || "";
  }

  if (departmentInput) {
    departmentInput.value =
      userProfile.department || "";
  }

  if (examInput) {
    examInput.value =
      userProfile.exam || "";
  }

  selectedClass =
    userProfile.class || "SS1";

  selectedDepartment =
    userProfile.department || "General";

  renderProfileSubjects();
}

/* =========================================================
   9. NAVIGATION
   ========================================================= */

function showScreen(screenId) {

  const screens =
    document.querySelectorAll(".app-screen");

  screens.forEach(screen => {
    screen.classList.remove("active");
  });

  const target =
    document.getElementById(screenId);

  if (!target) {
    return;
  }

  target.classList.add("active");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  loadProgress();

  if (screenId === "quiz") {
    openQuiz();
  }
}

/* =========================================================
   10. CLASSES
   ========================================================= */

function renderClasses() {

  const grid =
    document.getElementById("classGrid");

  if (!grid) {
    return;
  }

  grid.innerHTML =
    Object.entries(classData)
      .map(([key, data]) => `

        <button
          type="button"
          class="class-card ${
            key === selectedClass
              ? "active"
              : ""
          }"
          onclick="selectClass('${key}')"
        >

          <div class="card-icon">
            ${data.icon}
          </div>

          <h3>
            ${escapeHTML(data.name)}
          </h3>

          <span class="card-badge">
            ${escapeHTML(data.badge)}
          </span>

          <span class="card-indicator">
            →
          </span>

        </button>

      `)
      .join("");
}

/* =========================================================
   11. DEPARTMENT SELECTOR
   ========================================================= */

function renderDepartmentSelector() {

  const subjectGrid =
    document.getElementById("subjectGrid");

  if (!subjectGrid) {
    return;
  }

  let selector =
    document.getElementById(
      "departmentSelector"
    );

  if (!selector) {

    selector =
      document.createElement("div");

    selector.id =
      "departmentSelector";

    selector.style.marginBottom =
      "24px";

    subjectGrid.parentNode.insertBefore(
      selector,
      subjectGrid
    );
  }

  selector.innerHTML = `

    <div style="
      display:flex;
      flex-wrap:wrap;
      gap:12px;
      align-items:center;
    ">

      <strong>
        Department:
      </strong>

      ${Object.entries(departments)
        .map(([name, data]) => `

          <button
            type="button"
            onclick="selectDepartment('${name}')"
            style="
              border:1px solid #dbe3f0;
              border-radius:12px;
              padding:10px 16px;
              cursor:pointer;
              background:${
                name === selectedDepartment
                  ? "#2e6fe8"
                  : "#ffffff"
              };
              color:${
                name === selectedDepartment
                  ? "#ffffff"
                  : "#1f2937"
              };
              font-weight:600;
            "
          >
            ${data.icon} ${name}
          </button>

        `)
        .join("")}

    </div>
  `;
}

function selectDepartment(department) {

  if (!departments[department]) {
    return;
  }

  selectedDepartment =
    department;

  selectedSubject = null;
  selectedTopic = null;

  renderDepartmentSelector();
  renderSubjects();
  renderTopics();
}

/* =========================================================
   12. SUBJECTS
   ========================================================= */

function renderSubjects() {

  const grid =
    document.getElementById("subjectGrid");

  if (!grid) {
    return;
  }

  if (
    !userProfile ||
    !Array.isArray(userProfile.subjects)
  ) {

    grid.innerHTML = `
      <div style="
        grid-column:1/-1;
        text-align:center;
        padding:30px;
      ">

        <h3>
          Create your profile first
        </h3>

        <button
          class="primary-btn"
          onclick="showScreen('profile')"
        >
          Create Profile →
        </button>

      </div>
    `;

    return;
  }

  const currentClass =
    classData[selectedClass];

  if (!currentClass) {
    grid.innerHTML = "";
    return;
  }

  const subjects =
    currentClass.subjects.filter(
      subject =>
        userProfile.subjects
          .includes(subject.name)
    );

  grid.innerHTML =
    subjects.length

      ? subjects.map(subject => `

          <button
            type="button"
            class="subject-card ${
              selectedSubject === subject.name
                ? "active"
                : ""
            }"
            onclick="selectSubject(${JSON.stringify(subject.name)})"
          >

            <div class="card-icon">
              ${subject.icon}
            </div>

            <h3>
              ${escapeHTML(subject.name)}
            </h3>

            <span class="card-indicator">
              →
            </span>

          </button>

        `).join("")

      : `
        <div style="
          grid-column:1/-1;
          text-align:center;
          padding:30px;
        ">

          <h3>
            No subjects selected
          </h3>

          <p>
            Edit your profile and choose
            the subjects you offer.
          </p>

        </div>
      `;
}

/* =========================================================
   13. TOPICS
   ========================================================= */

function renderTopics() {

  const grid =
    document.getElementById("topicGrid");

  if (!grid) {
    return;
  }

  if (!selectedSubject) {

    grid.innerHTML = `
      <div class="empty-state">

        <h3>
          Choose a subject first
        </h3>

        <p>
          Select a subject to see its topics.
        </p>

      </div>
    `;

    return;
  }

  const subject =
    classData[selectedClass]
      ?.subjects
      .find(
        item =>
          item.name === selectedSubject
      );

  if (!subject) {
    grid.innerHTML = "";
    return;
  }

  grid.innerHTML =
    subject.topics
      .map((topic, index) => `

        <button
          type="button"
          class="topic-card"
          onclick="selectTopic(${JSON.stringify(topic)})"
        >

          <div class="topic-number">
            ${String(index + 1).padStart(2, "0")}
          </div>

          <div class="topic-card-content">

            <h3>
              ${escapeHTML(topic)}
            </h3>

            <span>
              Start learning →
            </span>

          </div>

        </button>

      `)
      .join("");
}

/* =========================================================
   14. SELECTION
   ========================================================= */

function selectClass(className) {

  if (!classData[className]) {
    return;
  }

  selectedClass =
    className;

  selectedDepartment =
    userProfile?.department ||
    "General";

  selectedSubject = null;
  selectedTopic = null;

  renderClasses();
  renderDepartmentSelector();
  renderSubjects();
  renderTopics();

  updateElement(
    "subjectTitle",
    `${className} subjects`
  );

  showScreen("subjects");
}

function selectSubject(subjectName) {

  if (
    !userProfile?.subjects
      ?.includes(subjectName)
  ) {
    return;
  }

  selectedSubject =
    subjectName;

  selectedTopic = null;

  renderTopics();

  updateElement(
    "topicTitle",
    `${subjectName} topics`
  );

  showScreen("topics");
}

function selectTopic(topicName) {

  selectedTopic =
    topicName;

  trackTopic();
  renderStudyHeader();

  showScreen("study");
}

/* =========================================================
   15. STUDY
   ========================================================= */

function renderStudyHeader() {

  const title =
    document.getElementById("studyTitle");

  const badge =
    document.getElementById(
      "selectedTopicBadge"
    );

  if (title) {

    title.textContent =
      selectedTopic
        ? `${selectedSubject} Tutor`
        : "TGEN-AI Tutor";
  }

  if (badge) {

    badge.textContent =
      selectedTopic ||
      "Choose a topic";
  }
}

function trackTopic() {

  if (
    !selectedClass ||
    !selectedSubject ||
    !selectedTopic
  ) {
    return;
  }

  const key =
    `${selectedClass}:${selectedSubject}:${selectedTopic}`;

  const topics =
    getStoredArray("tgenTopicsList");

  if (!topics.includes(key)) {

    topics.push(key);

    setStoredArray(
      "tgenTopicsList",
      topics
    );

    setStoredNumber(
      "tgenTopicsCovered",
      topics.length
    );
  }

  updateStreak();
  loadProgress();
}

function updateStreak() {

  const today =
    new Date()
      .toISOString()
      .split("T")[0];

  const lastDate =
    localStorage.getItem(
      "tgenLastStudyDate"
    );

  let streak =
    getStoredNumber("tgenStreak");

  if (!lastDate) {

    streak = 1;

  } else if (lastDate !== today) {

    const previous =
      new Date(lastDate);

    const current =
      new Date(today);

    const difference =
      Math.floor(
        (current - previous) /
        86400000
      );

    if (difference === 1) {
      streak += 1;
    } else if (difference > 1) {
      streak = 1;
    }
  }

  localStorage.setItem(
    "tgenLastStudyDate",
    today
  );

  setStoredNumber(
    "tgenStreak",
    streak
  );
}

/* =========================================================
   16. DEFINITIONS / AI KNOWLEDGE
   ========================================================= */

const studyKnowledge = {

  "Number Bases":
    "A number base is a system used to represent numbers. Decimal uses base 10, while binary uses base 2.",

  Indices:
    "Indices are powers that show repeated multiplication. For example, 2³ means 2 × 2 × 2.",

  "Quadratic Equations":
    "A quadratic equation is an equation where the highest power of the variable is 2.",

  "The Cell":
    "The cell is the basic structural and functional unit of life.",

  Force:
    "Force is a push or pull that can change the motion or shape of an object.",

  Matter:
    "Matter is anything that has mass and occupies space.",

  "Atomic Structure":
    "Atoms contain protons, neutrons and electrons.",

  Algorithms:
    "An algorithm is a sequence of clear steps used to solve a problem or complete a task.",

  Probability:
    "Probability measures how likely an event is to happen.",

  Trigonometry:
    "Trigonometry studies relationships between angles and sides of triangles.",

  Genetics:
    "Genetics is the study of heredity and variation.",

  Power:
    "Power is the rate at which work is done.",

  Electrolysis:
    "Electrolysis uses electrical energy to cause a chemical change.",

  Databases:
    "A database is an organised collection of information that can be stored and managed.",

  Differentiation:
    "Differentiation is a mathematical process used to find rates of change.",

  Vectors:
    "A vector is a quantity that has both magnitude and direction.",

  Biotechnology:
    "Biotechnology uses biological systems or processes to develop useful products and technologies.",

  Polymers:
    "Polymers are large molecules made from many repeating smaller units called monomers."
};

function generateSmartResponse(question) {

  const input =
    question.toLowerCase();

  const topic =
    selectedTopic ||
    "your topic";

  const knowledge =
    studyKnowledge[selectedTopic];

  if (
    input.includes("what is") ||
    input.includes("define") ||
    input.includes("meaning") ||
    input.includes("explain")
  ) {

    if (knowledge) {

      return `
        <strong>
          ${escapeHTML(topic)}
        </strong>
        <br><br>
        ${escapeHTML(knowledge)}
      `;
    }

    return `
      <strong>
        ${escapeHTML(topic)}
      </strong>
      is an important
      ${escapeHTML(selectedSubject || "subject")}
      topic. Start with the definition,
      key concepts, examples and practice.
    `;
  }

  if (
    input.includes("example") ||
    input.includes("examples")
  ) {

    return `
      Here's a simple way to approach
      <strong>${escapeHTML(topic)}</strong>:
      understand the main idea first,
      then apply it to an example question.
    `;
  }

  if (
    input.includes("quiz") ||
    input.includes("question") ||
    input.includes("test")
  ) {

    return `
      Let's test your knowledge of
      <strong>${escapeHTML(topic)}</strong>.
      Open the Quiz section and start a
      practice quiz.
    `;
  }

  if (
    input.includes("help") ||
    input.includes("confused") ||
    input.includes("understand")
  ) {

    return `
      No worries. Let's break
      <strong>${escapeHTML(topic)}</strong>
      into smaller parts. Start with the
      definition, learn the main idea,
      then practise questions.
    `;
  }

  return `
    Good question. For
    <strong>${escapeHTML(topic)}</strong>,
    focus on definitions, key ideas,
    examples and practice questions.
  `;
}

/* =========================================================
   17. CHAT
   ========================================================= */

function renderChatMessage(
  message,
  sender = "ai"
) {

  const chatArea =
    document.getElementById("chatArea");

  if (!chatArea) {
    return;
  }

  const empty =
    chatArea.querySelector(".empty-chat");

  if (empty) {
    empty.remove();
  }

  const wrapper =
    document.createElement("div");

  wrapper.className =
    `chat-message ${
      sender === "user"
        ? "user-message"
        : "ai-message"
    }`;

  wrapper.innerHTML = `

    <div class="message-avatar">
      ${sender === "user" ? "U" : "✦"}
    </div>

    <div class="message-content">
      ${message}
    </div>

  `;

  chatArea.appendChild(wrapper);

  chatArea.scrollTop =
    chatArea.scrollHeight;
}

function addLoadingIndicator() {

  const chatArea =
    document.getElementById("chatArea");

  if (!chatArea) {
    return null;
  }

  const loading =
    document.createElement("div");

  loading.className =
    "chat-message ai-message loading-message";

  loading.innerHTML = `

    <div class="message-avatar">
      ✦
    </div>

    <div class="message-content">
      <span class="loading-dots">
        <i></i>
        <i></i>
        <i></i>
      </span>
    </div>

  `;

  chatArea.appendChild(loading);

  chatArea.scrollTop =
    chatArea.scrollHeight;

  return loading;
}

function buildStudyResponse() {

  const input =
    document.getElementById(
      "questionInput"
    );

  if (!input) {
    return;
  }

  const question =
    input.value.trim();

  if (!question) {
    return;
  }

  renderChatMessage(
    escapeHTML(question),
    "user"
  );

  input.value = "";

  const loading =
    addLoadingIndicator();

  setTimeout(() => {

    if (loading) {
      loading.remove();
    }

    renderChatMessage(
      generateSmartResponse(question),
      "ai"
    );

  }, 500);
}

function clearQuestion() {

  const input =
    document.getElementById(
      "questionInput"
    );

  if (input) {
    input.value = "";
    input.focus();
  }
}

function setQuestion(question) {

  const input =
    document.getElementById(
      "questionInput"
    );

  if (!input) {
    return;
  }

  input.value =
    question;

  input.focus();
}

/* =========================================================
   18. QUIZ QUESTION GENERATOR
   ========================================================= */

const questionTemplates = {

  "General Mathematics": [
    {
      q: "What is 2³?",
      options: ["4", "6", "8", "9"],
      answer: "8"
    },
    {
      q: "What is 5 × 6?",
      options: ["11", "25", "30", "36"],
      answer: "30"
    },
    {
      q: "What is the highest power in a quadratic equation?",
      options: ["1", "2", "3", "4"],
      answer: "2"
    },
    {
      q: "What is 10% of 200?",
      options: ["10", "20", "30", "40"],
      answer: "20"
    },
    {
      q: "What is the square of 5?",
      options: ["10", "15", "20", "25"],
      answer: "25"
    },
    {
      q: "What is 12 ÷ 3?",
      options: ["2", "3", "4", "6"],
      answer: "4"
    },
    {
      q: "Which number is prime?",
      options: ["4", "6", "7", "9"],
      answer: "7"
    },
    {
      q: "What is 3²?",
      options: ["6", "9", "12", "15"],
      answer: "9"
    },
    {
      q: "What is the probability of a certain event?",
      options: ["0", "0.5", "1", "2"],
      answer: "1"
    },
    {
      q: "How many degrees are in a right angle?",
      options: ["45°", "60°", "90°", "180°"],
      answer: "90°"
    }
  ],

  "English Language": [
    {
      q: "Which word is a noun?",
      options: ["Quickly", "School", "Run", "Beautiful"],
      answer: "School"
    },
    {
      q: "Which word is a verb?",
      options: ["Jump", "Blue", "Table", "Slowly"],
      answer: "Jump"
    },
    {
      q: "What is comprehension?",
      options: [
        "Understanding a passage",
        "Drawing pictures",
        "Writing numbers",
        "Memorising every word"
      ],
      answer: "Understanding a passage"
    },
    {
      q: "Which is an adjective?",
      options: ["Beautiful", "Run", "Quickly", "School"],
      answer: "Beautiful"
    },
    {
      q: "Which is a pronoun?",
      options: ["Table", "He", "Jump", "Blue"],
      answer: "He"
    },
    {
      q: "Which word is an adverb?",
      options: ["Quickly", "Boy", "Blue", "Run"],
      answer: "Quickly"
    },
    {
      q: "What is a synonym?",
      options: [
        "A word with similar meaning",
        "A word with opposite meaning",
        "A punctuation mark",
        "A sentence"
      ],
      answer: "A word with similar meaning"
    },
    {
      q: "What is an antonym?",
      options: [
        "A word with opposite meaning",
        "A noun",
        "A paragraph",
        "A vowel"
      ],
      answer: "A word with opposite meaning"
    },
    {
      q: "Which is a punctuation mark?",
      options: [".", "A", "Cat", "Run"],
      answer: "."
    },
    {
      q: "What should good exam preparation include?",
      options: [
        "Practice and revision",
        "Ignoring mistakes",
        "Avoiding questions",
        "Never reviewing"
      ],
      answer: "Practice and revision"
    }
  ],

  Biology: [
    {
      q: "What is the basic unit of life?",
      options: ["Organ", "Cell", "Tissue", "System"],
      answer: "Cell"
    },
    {
      q: "Which organelle contains genetic material?",
      options: ["Nucleus", "Ribosome", "Vacuole", "Cell wall"],
      answer: "Nucleus"
    },
    {
      q: "Which process allows plants to make food?",
      options: ["Respiration", "Photosynthesis", "Digestion", "Excretion"],
      answer: "Photosynthesis"
    },
    {
      q: "Which gas do plants use in photosynthesis?",
      options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
      answer: "Carbon dioxide"
    },
    {
      q: "Which organ pumps blood?",
      options: ["Lung", "Heart", "Kidney", "Liver"],
      answer: "Heart"
    },
    {
      q: "What carries hereditary information?",
      options: ["Genes", "Water", "Minerals", "Starch"],
      answer: "Genes"
    },
    {
      q: "Which system controls body movement and responses?",
      options: [
        "Nervous system",
        "Digestive system",
        "Skeletal system",
        "Respiratory system"
      ],
      answer: "Nervous system"
    },
    {
      q: "Which organ is mainly responsible for filtering blood?",
      options: ["Heart", "Kidney", "Stomach", "Lung"],
      answer: "Kidney"
    },
    {
      q: "What is ecology the study of?",
      options: [
        "Organisms and their environment",
        "Atoms",
        "Electricity",
        "Numbers"
      ],
      answer: "Organisms and their environment"
    },
    {
      q: "What is genetics the study of?",
      options: [
        "Heredity and variation",
        "Weather",
        "Rocks",
        "Electricity"
      ],
      answer: "Heredity and variation"
    }
  ],

  Physics: [
    {
      q: "What is a force?",
      options: [
        "A push or pull",
        "A colour",
        "A type of matter",
        "A unit of time"
      ],
      answer: "A push or pull"
    },
    {
      q: "Which quantity is measured in seconds?",
      options: ["Mass", "Time", "Length", "Temperature"],
      answer: "Time"
    },
    {
      q: "What is the SI unit of force?",
      options: ["Joule", "Newton", "Watt", "Volt"],
      answer: "Newton"
    },
    {
      q: "What is the SI unit of power?",
      options: ["Watt", "Newton", "Joule", "Ohm"],
      answer: "Watt"
    },
    {
      q: "Which device measures temperature?",
      options: ["Barometer", "Thermometer", "Ammeter", "Voltmeter"],
      answer: "Thermometer"
    },
    {
      q: "What is speed?",
      options: [
        "Distance travelled per unit time",
        "Mass per volume",
        "Force per area",
        "Work per distance"
      ],
      answer: "Distance travelled per unit time"
    },
    {
      q: "Which is a form of energy?",
      options: ["Kinetic", "Length", "Mass", "Density"],
      answer: "Kinetic"
    },
    {
      q: "What does a magnet attract strongly?",
      options: ["Wood", "Plastic", "Iron", "Glass"],
      answer: "Iron"
    },
    {
      q: "Which wave can travel through a vacuum?",
      options: [
        "Sound wave",
        "Electromagnetic wave",
        "Water wave",
        "Seismic wave"
      ],
      answer: "Electromagnetic wave"
    },
    {
      q: "Which quantity is measured in joules?",
      options: ["Energy", "Time", "Current", "Temperature"],
      answer: "Energy"
    }
  ],

  Chemistry: [
    {
      q: "Which particle has a negative charge?",
      options: ["Proton", "Neutron", "Electron", "Nucleus"],
      answer: "Electron"
    },
    {
      q: "Which state of matter has a fixed shape?",
      options: ["Gas", "Liquid", "Solid", "Plasma"],
      answer: "Solid"
    },
    {
      q: "What is the chemical symbol for oxygen?",
      options: ["O", "Ox", "C", "N"],
      answer: "O"
    },
    {
      q: "What is H₂O?",
      options: ["Salt", "Water", "Oxygen", "Hydrogen"],
      answer: "Water"
    },
    {
      q: "Which particle has a positive charge?",
      options: ["Electron", "Proton", "Neutron", "Atom"],
      answer: "Proton"
    },
    {
      q: "What is a mixture?",
      options: [
        "Two or more substances physically combined",
        "One atom",
        "One element only",
        "A single proton"
      ],
      answer: "Two or more substances physically combined"
    },
    {
      q: "What does electrolysis use?",
      options: ["Electricity", "Sound", "Gravity only", "Light only"],
      answer: "Electricity"
    },
    {
      q: "What is the centre of an atom called?",
      options: ["Nucleus", "Electron", "Shell", "Ion"],
      answer: "Nucleus"
    },
    {
      q: "Which gas is needed for combustion?",
      options: ["Oxygen", "Nitrogen", "Helium", "Neon"],
      answer: "Oxygen"
    },
    {
      q: "What is an element?",
      options: [
        "A pure substance made of one type of atom",
        "A mixture",
        "A solution",
        "A compound only"
      ],
      answer: "A pure substance made of one type of atom"
    }
  ],

  "Digital Technologies": [
    {
      q: "What does an algorithm provide?",
      options: [
        "A sequence of steps",
        "A computer screen",
        "A keyboard",
        "A password"
      ],
      answer: "A sequence of steps"
    },
    {
      q: "Which language is commonly used to make websites interactive?",
      options: ["JavaScript", "Excel", "JPEG", "PDF"],
      answer: "JavaScript"
    },
    {
      q: "What is hardware?",
      options: [
        "Physical computer components",
        "A program",
        "A website",
        "A password"
      ],
      answer: "Physical computer components"
    },
    {
      q: "What is software?",
      options: [
        "Programs used by a computer",
        "A keyboard",
        "A monitor",
        "A cable"
      ],
      answer: "Programs used by a computer"
    },
    {
      q: "What does CPU stand for?",
      options: [
        "Central Processing Unit",
        "Computer Power Unit",
        "Central Program Utility",
        "Computer Processing User"
      ],
      answer: "Central Processing Unit"
    },
    {
      q: "Which device is used to type?",
      options: ["Keyboard", "Monitor", "Speaker", "Projector"],
      answer: "Keyboard"
    },
    {
      q: "What is a database?",
      options: [
        "An organised collection of information",
        "A keyboard",
        "A monitor",
        "A cable"
      ],
      answer: "An organised collection of information"
    },
    {
      q: "What does RAM store?",
      options: [
        "Data currently being used",
        "Printed documents",
        "Electricity",
        "Internet cables"
      ],
      answer: "Data currently being used"
    },
    {
      q: "Which is an input device?",
      options: ["Mouse", "Monitor", "Speaker", "Projector"],
      answer: "Mouse"
    },
    {
      q: "What is the internet?",
      options: [
        "A global network of connected computers",
        "A keyboard",
        "A single computer",
        "A printer"
      ],
      answer: "A global network of connected computers"
    }
  ]
};

/* =========================================================
   19. GENERIC QUESTIONS FOR OTHER SUBJECTS
   ========================================================= */

function createGenericQuestions(subject) {

  const topics =
    subjectTopics[subject] ||
    ["Introduction", "Key Concepts"];

  const questions = [];

  for (let i = 0; i < 10; i++) {

    const topic =
      topics[i % topics.length];

    const questionTypes = [
      {
        question: `Which topic is part of ${subject}?`,
        correct: topic
      },
      {
        question: `Which area should a student study in ${subject}?`,
        correct: topic
      },
      {
        question: `Which of these is related to ${subject}?`,
        correct: topic
      },
      {
        question: `Which topic belongs to ${subject}?`,
        correct: topic
      }
    ];

    const type =
      questionTypes[i % questionTypes.length];

    questions.push({
      question: type.question,

      options: shuffle([
        type.correct,
        "Unrelated Topic",
        "Random Topic",
        "Another Topic"
      ]),

      answer: type.correct
    });
  }

  return questions;
}
function getQuizQuestions() {

  if (!selectedSubject) {
    return [];
  }

  const existing =
    questionTemplates[selectedSubject] || [];

  const questions = [...existing];

  // Keep adding questions until there are exactly 10
  if (questions.length < 10) {

    const generated =
      createGenericQuestions(selectedSubject);

    for (
      let i = 0;
      questions.length < 10 && i < generated.length;
      i++
    ) {
      questions.push(generated[i]);
    }

  }

  return questions.slice(0, 10);
}
/* =========================================================
   20. SHUFFLE
   ========================================================= */

function shuffle(array) {

  const copy =
    [...array];

  for (
    let i = copy.length - 1;
    i > 0;
    i--
  ) {

    const j =
      Math.floor(
        Math.random() * (i + 1)
      );

    [
      copy[i],
      copy[j]
    ] = [
      copy[j],
      copy[i]
    ];
  }

  return copy;
}

/* =========================================================
   21. QUIZ STATE
   ========================================================= */

let quizStarted = false;
let quizSubmitted = false;
let currentQuizScore = 0;

/* =========================================================
   22. QUIZ
   ========================================================= */

function renderQuiz() {

  const quizList =
    document.getElementById("quizList");

  if (!quizList) {
    return;
  }

  if (!selectedSubject) {

    quizList.innerHTML = `
      <div class="quiz-item">

        <h3>
          Choose a subject first
        </h3>

        <p>
          Select a subject before starting
          a quiz.
        </p>

      </div>
    `;

    return;
  }

  const quizzes =
    getQuizQuestions();

  quizList.innerHTML =
    quizzes.map((quiz, index) => `

      <div
        class="quiz-item"
        id="quiz-${index}"
      >

        <p class="quiz-question-text">
          ${index + 1}.
          ${escapeHTML(quiz.question)}
        </p>

        <div class="quiz-options">

          ${quiz.options
            .map(option => `

              <label class="quiz-option">

                <input
                  type="radio"
                  name="quiz-${index}"
                  value="${escapeAttribute(option)}"
                >

                <span>
                  ${escapeHTML(option)}
                </span>

              </label>

            `)
            .join("")}

        </div>

      </div>

    `)
    .join("");

  updateElement(
    "questionCounter",
    `0 of ${quizzes.length} answered`
  );
}

function generateQuiz() {

  const quizList =
    document.getElementById(
      "quizList"
    );

  if (!quizList) {
    return;
  }

  if (!selectedSubject) {

    quizList.innerHTML = `
      <div class="quiz-item">
        <h3>
          Choose a subject first
        </h3>
      </div>
    `;

    return;
  }

  const quizzes =
    getQuizQuestions();

  quizStarted = true;
  quizSubmitted = false;
  currentQuizScore = 0;

  const result =
    document.getElementById(
      "quizResult"
    );

  if (result) {
    result.innerHTML = "";
    result.style.display = "none";
  }

  quizList.innerHTML =
    quizzes.map((quiz, index) => `

      <div
        class="quiz-item"
        id="quiz-${index}"
      >

        <p class="quiz-question-text">
          ${index + 1}.
          ${escapeHTML(quiz.question)}
        </p>

        <div class="quiz-options">

          ${quiz.options
            .map(option => `

              <label class="quiz-option">

                <input
                  type="radio"
                  name="quiz-${index}"
                  value="${escapeAttribute(option)}"
                >

                <span>
                  ${escapeHTML(option)}
                </span>

              </label>

            `)
            .join("")}

        </div>

      </div>

    `)
    .join("");

  const generateBtn =
    document.getElementById(
      "generateQuizBtn"
    );

  const submitBtn =
    document.getElementById(
      "submitQuizBtn"
    );

  const nextBtn =
    document.getElementById(
      "quizNextBtn"
    );

  if (generateBtn) {
    generateBtn.style.display =
      "none";
  }

  if (submitBtn) {
    submitBtn.style.display =
      "none";
  }

  if (nextBtn) {
    nextBtn.style.display =
      "none";
  }

  updateElement(
    "questionCounter",
    `0 of ${quizzes.length} answered`
  );

  quizList
    .querySelectorAll(
      'input[type="radio"]'
    )
    .forEach(input => {

      input.addEventListener(
        "change",
        updateQuizProgress
      );

    });
}

function updateQuizProgress() {

  if (quizSubmitted) {
    return;
  }

  const quizList =
    document.getElementById(
      "quizList"
    );

  if (!quizList) {
    return;
  }

  const quizzes =
    getQuizQuestions();

  const inputs =
    quizList.querySelectorAll(
      'input[type="radio"]'
    );

  const answered =
    new Set(
      Array.from(inputs)
        .filter(input => input.checked)
        .map(input => input.name)
    ).size;

  updateElement(
    "questionCounter",
    `${answered} of ${quizzes.length} answered`
  );

  const submitBtn =
    document.getElementById(
      "submitQuizBtn"
    );

  if (submitBtn) {

    submitBtn.style.display =
      answered === quizzes.length
        ? "inline-flex"
        : "none";
  }
}

function submitQuiz() {

  if (
    !quizStarted ||
    quizSubmitted
  ) {
    return;
  }

  const quizzes =
    getQuizQuestions();

  if (!quizzes.length) {
    return;
  }

  const inputs =
    document.querySelectorAll(
      "#quizList input[type='radio']"
    );

  const answered =
    new Set(
      Array.from(inputs)
        .filter(input => input.checked)
        .map(input => input.name)
    ).size;

  if (
    answered <
    quizzes.length
  ) {

    alert(
      "Please answer every question before submitting."
    );

    return;
  }

  let score = 0;

  quizzes.forEach(
    (quiz, index) => {

      const selected =
        document.querySelector(
          `input[name="quiz-${index}"]:checked`
        );

      const question =
        document.getElementById(
          `quiz-${index}`
        );

      if (
        selected &&
        selected.value ===
          quiz.answer
      ) {

        score++;

        if (question) {
          question.style.borderColor =
            "#86efac";
        }

      } else {

        if (question) {
          question.style.borderColor =
            "#fecaca";
        }
      }
    }
  );

  currentQuizScore =
    score;

  quizSubmitted =
    true;

  inputs.forEach(
    input => {
      input.disabled = true;
    }
  );

  const submitBtn =
    document.getElementById(
      "submitQuizBtn"
    );

  if (submitBtn) {
    submitBtn.style.display =
      "none";
  }

  const oldScore =
    getStoredNumber(
      "tgenScore"
    );

  setStoredNumber(
    "tgenScore",
    oldScore + score
  );

  const percentage =
    Math.round(
      (score / quizzes.length) *
      100
    );

  let message =
    "Keep practising — you've got this.";

  if (percentage >= 80) {
    message =
      "Excellent work! 🔥";
  } else if (percentage >= 60) {
    message =
      "Nice work! Keep building on it.";
  } else if (percentage >= 40) {
    message =
      "You're getting there. Keep practising.";
  }

  const result =
    document.getElementById(
      "quizResult"
    );

  if (result) {

    result.style.display =
      "block";

    result.innerHTML = `

      <h2>
        ${message}
      </h2>

      <p>
        You scored
        <strong>
          ${score}/${quizzes.length}
        </strong>
        (${percentage}%).
      </p>

      <button
        class="primary-btn small-btn"
        onclick="retakeQuiz()"
      >
        Retake Quiz
      </button>

    `;
  }

  const nextButton =
    document.getElementById(
      "quizNextBtn"
    );

  if (nextButton) {
    nextButton.style.display =
      "inline-flex";
  }

  updateElement(
    "quizSideScore",
    getStoredNumber("tgenScore")
  );

  updateElement(
    "questionCounter",
    `${score}/${quizzes.length} correct`
  );

  loadProgress();
}

function retakeQuiz() {

  quizStarted = false;
  quizSubmitted = false;
  currentQuizScore = 0;

  const result =
    document.getElementById(
      "quizResult"
    );

  const nextButton =
    document.getElementById(
      "quizNextBtn"
    );

  const generateButton =
    document.getElementById(
      "generateQuizBtn"
    );

  const submitButton =
    document.getElementById(
      "submitQuizBtn"
    );

  if (result) {
    result.innerHTML = "";
    result.style.display = "none";
  }

  if (nextButton) {
    nextButton.style.display =
      "none";
  }

  if (generateButton) {
    generateButton.style.display =
      "inline-flex";
  }

  if (submitButton) {
    submitButton.style.display =
      "none";
  }

  const quizList =
    document.getElementById(
      "quizList"
    );

  if (quizList) {

    quizList.innerHTML = `
      <div class="quiz-item">

        <h3>
          Ready to test yourself?
        </h3>

        <p>
          Click
          <strong>
            Generate Quiz
          </strong>
          to begin.
        </p>

      </div>
    `;
  }

  updateElement(
    "questionCounter",
    "Quiz not started"
  );
}

function openQuiz() {

  quizStarted = false;
  quizSubmitted = false;
  currentQuizScore = 0;

  retakeQuiz();
}

/* =========================================================
   23. PROGRESS
   ========================================================= */

function loadProgress() {

  const streak =
    getStoredNumber(
      "tgenStreak"
    );

  const score =
    getStoredNumber(
      "tgenScore"
    );

  const topics =
    getStoredNumber(
      "tgenTopicsCovered"
    );

  updateElement(
    "streakValue",
    streak
  );

  updateElement(
    "scoreValue",
    score
  );

  updateElement(
    "topicsCoveredValue",
    topics
  );

  updateElement(
    "previewStreak",
    streak
  );

  updateElement(
    "previewScore",
    score
  );

  updateElement(
    "dashboardStreak",
    streak
  );

  updateElement(
    "dashboardScore",
    score
  );

  updateElement(
    "dashboardTopics",
    topics
  );

  updateElement(
    "quizSideScore",
    score
  );

  updateDashboardProgress();
}

function updateDashboardProgress() {

  const topics =
    getStoredNumber(
      "tgenTopicsCovered"
    );

  const score =
    getStoredNumber(
      "tgenScore"
    );

  const percentage =
    Math.min(
      100,
      Math.round(
        Math.min(
          topics * 8,
          70
        ) +
        Math.min(
          score / 10,
          30
        )
      )
    );

  const bar =
    document.querySelector(
      ".big-progress span"
    );

  if (bar) {
    bar.style.width =
      `${percentage}%`;
  }

  const text =
    document.querySelector(
      ".progress-percent"
    );

  if (text) {
    text.textContent =
      `${percentage}%`;
  }
}

/* =========================================================
   24. LOGOUT
   ========================================================= */

function logout() {

  localStorage.removeItem(
    "tgen-ai-profile"
  );

  userProfile = null;

  selectedClass = "SS1";
  selectedDepartment = "General";
  selectedSubject = null;
  selectedTopic = null;

  const subjectGrid =
    document.getElementById(
      "subjectGrid"
    );

  const topicGrid =
    document.getElementById(
      "topicGrid"
    );

  if (subjectGrid) {
    subjectGrid.innerHTML = "";
  }

  if (topicGrid) {
    topicGrid.innerHTML = "";
  }

  updateLogoutButton();

  showScreen("home");
}

function updateLogoutButton() {

  let button =
    document.getElementById(
      "tgenLogoutBtn"
    );

  if (!button) {

    const nav =
      document.querySelector(
        ".main-nav"
      );

    if (!nav) {
      return;
    }

    button =
      document.createElement(
        "button"
      );

    button.id =
      "tgenLogoutBtn";

    button.type =
      "button";

    button.textContent =
      "Log out";

    button.onclick =
      logout;

    button.style.cssText = `
      margin-left:8px;
      border:1px solid #dbe3f0;
      border-radius:10px;
      padding:8px 12px;
      background:#fff;
      cursor:pointer;
      font-weight:600;
    `;

    nav.appendChild(button);
  }

  button.style.display =
    userProfile
      ? "inline-block"
      : "none";
}

/* =========================================================
   25. EVENT LISTENERS
   ========================================================= */

function setupEventListeners() {

  const profileClass =
    document.getElementById(
      "profileClass"
    );

  if (profileClass) {

    profileClass.addEventListener(
      "change",
      renderProfileSubjects
    );
  }

  const profileDepartment =
    document.getElementById(
      "profileDepartment"
    );

  if (profileDepartment) {

    profileDepartment.addEventListener(
      "change",
      renderProfileSubjects
    );
  }

  const saveProfileButton =
    document.getElementById(
      "saveProfileBtn"
    );

  if (saveProfileButton) {

    saveProfileButton.addEventListener(
      "click",
      saveProfile
    );
  }

  const askButton =
    document.getElementById(
      "generateStudyBtn"
    );

  if (askButton) {

    askButton.addEventListener(
      "click",
      buildStudyResponse
    );
  }

  const clearButton =
    document.getElementById(
      "clearQuestionBtn"
    );

  if (clearButton) {

    clearButton.addEventListener(
      "click",
      clearQuestion
    );
  }

  const input =
    document.getElementById(
      "questionInput"
    );

  if (input) {

    input.addEventListener(
      "keydown",
      event => {

        if (
          event.key === "Enter" &&
          !event.shiftKey
        ) {

          event.preventDefault();

          buildStudyResponse();
        }
      }
    );
  }

  const generateQuizButton =
    document.getElementById(
      "generateQuizBtn"
    );

  if (generateQuizButton) {

    generateQuizButton.addEventListener(
      "click",
      generateQuiz
    );
  }

  const submitButton =
    document.getElementById(
      "submitQuizBtn"
    );

  if (submitButton) {

    submitButton.addEventListener(
      "click",
      submitQuiz
    );
  }

  const nextButton =
    document.getElementById(
      "quizNextBtn"
    );

  if (nextButton) {

    nextButton.addEventListener(
      "click",
      () => {
        showScreen("progress");
      }
    );
  }

  const examClass =
    document.getElementById(
      "profileClass"
    );

  const examWrapper =
    document.getElementById(
      "examTargetWrapper"
    );

  if (examClass && examWrapper) {

    const updateExam =
      () => {

        examWrapper.style.display =
          examClass.value === "SS3"
            ? "block"
            : "none";
      };

    examClass.addEventListener(
      "change",
      updateExam
    );

    updateExam();
  }
}

/* =========================================================
   26. INITIALIZE
   ========================================================= */

function initializeApp() {

  loadProfile();

  renderClasses();

  renderDepartmentSelector();

  renderSubjects();

  renderTopics();

  renderStudyHeader();

  loadProgress();

  setupEventListeners();

  updateLogoutButton();

  if (
    "serviceWorker" in navigator
  ) {

    navigator.serviceWorker
      .register(
        "./service-worker.js"
      )
      .catch(() => {});
  }
}

/* =========================================================
   27. START
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  initializeApp
);
/* =========================================================
   TGEN-AI FINAL SUBJECT / TUTOR / QUIZ FIX
   ========================================================= */

/* ---------------------------------------------------------
   1. SUBJECT -> AI TUTOR
   --------------------------------------------------------- */

window.selectSubject = function(subjectName) {

  if (!selectedClass) {
    selectedClass = userProfile?.class || "SS1";
  }

  const currentClass = classData[selectedClass];

  if (!currentClass) return;

  const subject = currentClass.subjects.find(
    item => item.name === subjectName
  );

  if (!subject) return;

  selectedSubject = subjectName;

  /*
     Automatically select the first topic.
     This means the learner doesn't get stuck
     on an empty screen.
  */

  const topics =
    subject.topics ||
    subject.topicList ||
    [];

  selectedTopic = topics.length
    ? topics[0]
    : subjectName;

  renderStudyHeader();

  /*
     Update the tutor screen title.
  */

  const studyTitle =
    document.getElementById("studyTitle");

  if (studyTitle) {
    studyTitle.textContent =
      `${subjectName} Tutor`;
  }

  /*
     Open AI Tutor.
  */

  showScreen("study");

  /*
     Clear old chat.
  */

  const chatArea =
    document.getElementById("chatArea");

  if (chatArea) {

    chatArea.innerHTML = `
      <div class="empty-chat">

        <div class="empty-chat-icon">
          ✦
        </div>

        <h2>
          ${escapeHTML(selectedTopic)}
        </h2>

        <p>
          I'm ready to help you learn
          ${escapeHTML(selectedTopic)}.
        </p>

        <div class="suggestion-chips">

          <button
            onclick="setQuestion('Explain this topic to me simply')"
          >
            Explain this simply
          </button>

          <button
            onclick="setQuestion('Give me an example')"
          >
            Give me an example
          </button>

          <button
            onclick="setQuestion('Test me on this topic')"
          >
            Test me
          </button>

        </div>

      </div>
    `;

  }

  /*
     Automatically give the learner an explanation.
  */

  setTimeout(() => {

    renderChatMessage(
      getTgenExplanation(
        selectedTopic,
        selectedSubject
      ),
      "ai"
    );

  }, 250);

};


/* ---------------------------------------------------------
   2. BETTER TOPIC EXPLANATIONS
   --------------------------------------------------------- */

function getTgenExplanation(topic, subject) {

  const knowledge =
    studyKnowledge?.[topic];

  /*
     If we already have a proper explanation,
     use it.
  */

  if (knowledge) {

    return `
      <h3>
        ${escapeHTML(topic)}
      </h3>

      <p>
        ${escapeHTML(knowledge)}
      </p>

      <p>
        <strong>Want to go deeper?</strong>
        Ask me for an example, a step-by-step explanation,
        or practice questions.
      </p>
    `;

  }

  /*
     Some topics may not yet have a detailed
     knowledge entry. Give a useful explanation
     instead of showing "no information".
  */

  const topicWords =
    String(topic)
      .replace(/[-_/]/g, " ")
      .trim();

  return `
    <h3>
      ${escapeHTML(topic)}
    </h3>

    <p>
      ${escapeHTML(topicWords)} is a topic in
      <strong>${escapeHTML(subject || "your subject")}</strong>.
    </p>

    <p>
      To understand it properly, start with its definition,
      learn the main ideas and rules, then practise examples
      until you can apply the concept yourself.
    </p>

    <p>
      You can ask me:
      <strong>"What does ${escapeHTML(topic)} mean?"</strong>,
      <strong>"Give me an example"</strong>, or
      <strong>"Teach me step by step."</strong>
    </p>
  `;

}


/* ---------------------------------------------------------
   3. MAKE THE AI ACTUALLY EXPLAIN
   --------------------------------------------------------- */

window.generateSmartResponse = function(question) {

  const input =
    String(question || "").toLowerCase();

  const topic =
    selectedTopic ||
    selectedSubject ||
    "this topic";

  const subject =
    selectedSubject ||
    "your subject";

  const knowledge =
    studyKnowledge?.[topic];

  /*
     EXPLAIN
  */

  if (
    input.includes("explain") ||
    input.includes("what is") ||
    input.includes("define") ||
    input.includes("meaning") ||
    input.includes("teach me") ||
    input.includes("understand")
  ) {

    if (knowledge) {

      return `
        <h3>
          ${escapeHTML(topic)}
        </h3>

        <p>
          ${escapeHTML(knowledge)}
        </p>

        <p>
          <strong>Simple way to remember it:</strong>
          Focus on the main idea first, then practise
          applying it to questions.
        </p>

        <p>
          If you want, ask me for a worked example
          or a step-by-step explanation.
        </p>
      `;

    }

    return getTgenExplanation(
      topic,
      subject
    );

  }


  /*
     EXAMPLE
  */

  if (
    input.includes("example") ||
    input.includes("show me")
  ) {

    if (knowledge) {

      return `
        <h3>
          Example: ${escapeHTML(topic)}
        </h3>

        <p>
          Let's break the idea down into a simple example.
        </p>

        <p>
          Start by identifying what the question is asking,
          then apply the main rule or idea from
          <strong>${escapeHTML(topic)}</strong>.
        </p>

        <p>
          Ask me a specific question about
          ${escapeHTML(topic)} and I'll walk you through it
          step by step.
        </p>
      `;

    }

    return `
      <h3>
        Example: ${escapeHTML(topic)}
      </h3>

      <p>
        Think about the topic in a real situation.
        Identify the main concept, apply the rule,
        and then check your answer.
      </p>

      <p>
        Send me a specific question and I'll work through
        it with you.
      </p>
    `;

  }


  /*
     QUIZ REQUEST
  */

  if (
    input.includes("quiz") ||
    input.includes("test me") ||
    input.includes("test")
  ) {

    return `
      <h3>
        Ready for a challenge?
      </h3>

      <p>
        I'll test you on
        <strong>${escapeHTML(topic)}</strong>.
      </p>

      <button
        class="primary-btn"
        onclick="showScreen('quiz')"
      >
        Start Quiz →
      </button>
    `;

  }


  /*
     HOW TO
  */

  if (
    input.includes("how") ||
    input.includes("steps") ||
    input.includes("process")
  ) {

    return `
      <h3>
        Let's break it down
      </h3>

      <p>
        For <strong>${escapeHTML(topic)}</strong>,
        start with the basic definition.
      </p>

      <ol>
        <li>Understand the main idea.</li>
        <li>Learn the important rules or facts.</li>
        <li>Study a worked example.</li>
        <li>Try a question yourself.</li>
        <li>Check and correct your answer.</li>
      </ol>

      <p>
        You can ask me about any step you're confused about.
      </p>
    `;

  }


  /*
     DEFAULT RESPONSE
  */

  return `
    <h3>
      ${escapeHTML(topic)}
    </h3>

    <p>
      I'm here to help you with
      <strong>${escapeHTML(topic)}</strong>
      in ${escapeHTML(subject)}.
    </p>

    <p>
      Try asking:
    </p>

    <ul>
      <li>Explain this topic simply</li>
      <li>Give me an example</li>
      <li>Teach me step by step</li>
      <li>Test me</li>
    </ul>
  `;

};


/* ---------------------------------------------------------
   4. GENERATE A QUIZ FOR ANY SUBJECT
   --------------------------------------------------------- */

function buildTgenQuiz() {

  const currentClass =
    classData[selectedClass];

  if (!currentClass) return [];

  const subject =
    currentClass.subjects.find(
      item => item.name === selectedSubject
    );

  if (!subject) return [];

  const topics =
    subject.topics ||
    subject.topicList ||
    [];

  if (!topics.length) return [];


  /*
     First use questions from the existing quiz bank
     when available.
  */

  const existing =
    quizBank?.[selectedClass]?.[selectedSubject] || [];


  /*
     Create additional questions from the
     subject's topics so subjects don't show
     "No quiz available".
  */

  const questions = [];


  existing.forEach(question => {

    questions.push({
      question: question.question,
      options: [...question.options],
      answer: question.answer
    });

  });


  /*
     Question type 1:
     identify a topic belonging to the subject.
  */

  topics.forEach(topic => {

    if (questions.length >= 10) return;

    const otherTopics =
      topics.filter(item => item !== topic);

    let options = [
      topic,
      ...otherTopics.slice(0, 3)
    ];

    while (options.length < 4) {
      options.push(
        `${selectedSubject} concept`
      );
    }

    options = [...new Set(options)].slice(0, 4);

    if (options.length < 4) return;

    questions.push({
      question:
        `Which of the following is a topic studied in ${selectedSubject}?`,
      options: options,
      answer: topic
    });

  });


  /*
     Shuffle the questions.
  */

  for (
    let i = questions.length - 1;
    i > 0;
    i--
  ) {

    const j =
      Math.floor(Math.random() * (i + 1));

    [
      questions[i],
      questions[j]
    ] = [
      questions[j],
      questions[i]
    ];

  }


  /*
     Return about 10 questions.
  */

  return questions.slice(0, 10);

}


/* ---------------------------------------------------------
   5. REPLACE QUIZ GENERATOR
   --------------------------------------------------------- */

window.generateQuiz = function() {

  const quizList =
    document.getElementById("quizList");

  const generateBtn =
    document.getElementById("generateQuizBtn");

  const submitBtn =
    document.getElementById("submitQuizBtn");

  const result =
    document.getElementById("quizResult");

  const nextBtn =
    document.getElementById("quizNextBtn");

  const counter =
    document.getElementById("questionCounter");


  if (!quizList) return;


  const quizzes =
    buildTgenQuiz();


  if (!quizzes.length) {

    quizList.innerHTML = `
      <div class="quiz-item">

        <h3>
          Quiz unavailable
        </h3>

        <p>
          No topics are currently available
          for this subject.
        </p>

      </div>
    `;

    return;

  }


  quizStarted = true;
  quizSubmitted = false;
  currentQuizScore = 0;


  if (result) {

    result.innerHTML = "";
    result.style.display = "none";

  }


  if (nextBtn) {
    nextBtn.style.display = "none";
  }


  /*
     Render all questions.
  */

  quizList.innerHTML =
    quizzes.map((quiz, index) => `

      <div
        class="quiz-item"
        id="quiz-${index}"
      >

        <p class="quiz-question-text">

          ${index + 1}.
          ${escapeHTML(quiz.question)}

        </p>


        <div class="quiz-options">

          ${quiz.options.map(option => `

            <label class="quiz-option">

              <input
                type="radio"
                name="quiz-${index}"
                value="${escapeAttribute(option)}"
              />

              <span>
                ${escapeHTML(option)}
              </span>

            </label>

          `).join("")}

        </div>

      </div>

    `).join("");


  if (generateBtn) {
    generateBtn.style.display = "none";
  }


  if (submitBtn) {
    submitBtn.style.display = "none";
  }


  if (counter) {

    counter.textContent =
      `0 of ${quizzes.length} answered`;

  }


  /*
     IMPORTANT:
     Store the generated quiz so submitQuiz()
     can use the exact same questions.
  */

  window.currentTgenQuiz =
    quizzes;


  const inputs =
    quizList.querySelectorAll(
      'input[type="radio"]'
    );


  inputs.forEach(input => {

    input.addEventListener(
      "change",
      function() {

        const answered =
          new Set(
            Array.from(
              quizList.querySelectorAll(
                'input[type="radio"]:checked'
              )
            ).map(
              item => item.name
            )
          ).size;


        if (counter) {

          counter.textContent =
            `${answered} of ${quizzes.length} answered`;

        }


        if (
          submitBtn &&
          answered === quizzes.length
        ) {

          submitBtn.style.display =
            "inline-flex";

        } else if (submitBtn) {

          submitBtn.style.display =
            "none";

        }

      }
    );

  });

};


/* ---------------------------------------------------------
   6. REPLACE QUIZ SUBMISSION
   --------------------------------------------------------- */

window.submitQuiz = function() {

  if (
    !quizStarted ||
    quizSubmitted
  ) {
    return;
  }


  const quizzes =
    window.currentTgenQuiz ||
    buildTgenQuiz();


  if (!quizzes.length) return;


  const quizList =
    document.getElementById("quizList");


  if (!quizList) return;


  let score = 0;


  quizzes.forEach((quiz, index) => {

    const selected =
      quizList.querySelector(
        `input[name="quiz-${index}"]:checked`
      );


    const question =
      document.getElementById(
        `quiz-${index}`
      );


    if (!selected) return;


    if (
      selected.value ===
      quiz.answer
    ) {

      score++;

      if (question) {
        question.style.borderColor =
          "#86efac";
      }

    } else {

      if (question) {
        question.style.borderColor =
          "#fecaca";
      }

    }

  });


  currentQuizScore =
    score;

  quizSubmitted =
    true;


  /*
     Disable answers.
  */

  quizList
    .querySelectorAll(
      'input[type="radio"]'
    )
    .forEach(input => {
      input.disabled = true;
    });


  const submitBtn =
    document.getElementById(
      "submitQuizBtn"
    );


  if (submitBtn) {
    submitBtn.style.display = "none";
  }


  /*
     Save score.
  */

  const oldScore =
    getStoredNumber("tgenScore");


  setStoredNumber(
    "tgenScore",
    oldScore + score
  );


  /*
     Show result.
  */

  const percentage =
    Math.round(
      (score / quizzes.length) * 100
    );


  let message =
    "Keep practising — you're getting there.";


  if (percentage >= 80) {

    message =
      "Excellent work! 🔥";

  } else if (percentage >= 60) {

    message =
      "Nice work! Keep building on it.";

  } else if (percentage >= 40) {

    message =
      "You're getting there. Keep practising.";

  }


  const result =
    document.getElementById(
      "quizResult"
    );


  if (result) {

    result.style.display =
      "block";

    result.innerHTML = `

      <h2>
        ${message}
      </h2>

      <p>
        You scored
        <strong>
          ${score}/${quizzes.length}
        </strong>
        (${percentage}%).
      </p>

      <button
        class="primary-btn small-btn"
        onclick="generateQuiz()"
      >
        Try another quiz
      </button>

    `;

  }


  const nextButton =
    document.getElementById(
      "quizNextBtn"
    );


  if (nextButton) {
    nextButton.style.display =
      "inline-flex";
  }


  updateElement(
    "quizSideScore",
    getStoredNumber("tgenScore")
  );


  updateElement(
    "questionCounter",
    `${score}/${quizzes.length} correct`
  );


  loadProgress();

};


/* ---------------------------------------------------------
   7. MAKE QUIZ SCREEN KEEP THE SELECTED SUBJECT
   --------------------------------------------------------- */

window.openQuiz = function() {

  currentQuizScore = 0;
  quizStarted = false;
  quizSubmitted = false;
  window.currentTgenQuiz = [];


  const quizList =
    document.getElementById("quizList");

  const result =
    document.getElementById("quizResult");

  const generateBtn =
    document.getElementById("generateQuizBtn");

  const submitBtn =
    document.getElementById("submitQuizBtn");

  const nextButton =
    document.getElementById("quizNextBtn");

  const counter =
    document.getElementById("questionCounter");

  const header =
    document.getElementById("quizHeader");


  if (header) {

    header.textContent =
      selectedSubject
        ? `${selectedSubject} Quiz`
        : "Test your knowledge";

  }


  if (quizList) {

    quizList.innerHTML = `

      <div class="quiz-item">

        <h3>
          Ready to test yourself?
        </h3>

        <p>
          Your quiz will contain about
          10 questions based on
          <strong>
            ${escapeHTML(
              selectedSubject || "your subject"
            )}
          </strong>.
        </p>

      </div>

    `;

  }


  if (result) {

    result.innerHTML = "";
    result.style.display = "none";

  }


  if (generateBtn) {
    generateBtn.style.display =
      "inline-flex";
  }


  if (submitBtn) {
    submitBtn.style.display =
      "none";
  }


  if (nextButton) {
    nextButton.style.display =
      "none";
  }


  if (counter) {
    counter.textContent =
      "Quiz not started";
  }

};


/* ---------------------------------------------------------
   8. MAKE THE QUIZ BUTTON WORK EVEN AFTER THE OVERRIDE
   --------------------------------------------------------- */

document.addEventListener(
  "DOMContentLoaded",
  function() {

    const quizButton =
      document.getElementById(
        "generateQuizBtn"
      );

    if (quizButton) {

      quizButton.onclick =
        function(event) {

          event.preventDefault();
          generateQuiz();

        };

    }


    const submitButton =
      document.getElementById(
        "submitQuizBtn"
      );

    if (submitButton) {

      submitButton.onclick =
        function(event) {

          event.preventDefault();
          submitQuiz();

        };

    }

  }
);
/* =========================================================
   TGEN-AI PERSONAL PROFILE + DEPARTMENT UPGRADE
   ADDED TO THE EXISTING APP
   ========================================================= */

const TGEN_PROFILE_KEY = "tgen-ai-profile";

const TGEN_PROFILE_SUBJECTS = {
  General: [
    "English Language",
    "General Mathematics",
    "Citizenship and Heritage Studies",
    "Digital Technologies (Computer Studies)",
    "Biology",
    "Chemistry",
    "Physics",
    "Agricultural Science",
    "Further Mathematics",
    "Geography",
    "Physical and Health Education",
    "Foods and Nutrition",
    "Technical Drawing",
    "Literature-in-English",
    "Government",
    "Nigerian History",
    "Christian Religious Studies (CRS)",
    "Nigerian Languages (Yoruba/Igbo/Hausa)",
    "French",
    "Arabic",
    "Visual Arts",
    "Music",
    "Economics",
    "Financial Accounting",
    "Commerce",
    "Marketing",
    "Solar Photovoltaic installation and maintenance",
    "Fashion design and garment making",
    "Livestock farming / Animal Husbandry",
    "Beauty and cosmetology",
    "Computer hardware and GSM repairs",
    "Horticulture and crop production"
  ],

  Science: [
    "English Language",
    "General Mathematics",
    "Citizenship and Heritage Studies",
    "Digital Technologies (Computer Studies)",
    "Biology",
    "Chemistry",
    "Physics",
    "Agricultural Science",
    "Further Mathematics",
    "Geography",
    "Physical and Health Education",
    "Foods and Nutrition",
    "Technical Drawing",
    "Solar Photovoltaic installation and maintenance",
    "Fashion design and garment making",
    "Livestock farming / Animal Husbandry",
    "Beauty and cosmetology",
    "Computer hardware and GSM repairs",
    "Horticulture and crop production"
  ],

  Arts: [
    "English Language",
    "General Mathematics",
    "Citizenship and Heritage Studies",
    "Digital Technologies (Computer Studies)",
    "Literature-in-English",
    "Government",
    "Nigerian History",
    "Christian Religious Studies (CRS)",
    "Nigerian Languages (Yoruba/Igbo/Hausa)",
    "French",
    "Arabic",
    "Visual Arts",
    "Music",
    "Solar Photovoltaic installation and maintenance",
    "Fashion design and garment making",
    "Livestock farming / Animal Husbandry",
    "Beauty and cosmetology",
    "Computer hardware and GSM repairs",
    "Horticulture and crop production"
  ],

  Commercial: [
    "English Language",
    "General Mathematics",
    "Citizenship and Heritage Studies",
    "Digital Technologies (Computer Studies)",
    "Economics",
    "Financial Accounting",
    "Commerce",
    "Marketing",
    "Solar Photovoltaic installation and maintenance",
    "Fashion design and garment making",
    "Livestock farming / Animal Husbandry",
    "Beauty and cosmetology",
    "Computer hardware and GSM repairs",
    "Horticulture and crop production"
  ]
};


/* =========================================================
   SUBJECT TOPICS
   ========================================================= */

const TGEN_TOPICS = {

  "English Language": [
    "Parts of Speech",
    "Comprehension",
    "Summary Writing",
    "Essay Writing",
    "Figures of Speech",
    "Vocabulary",
    "Grammar",
    "Concord",
    "Tenses",
    "Oral English"
  ],

  "General Mathematics": [
    "Number Bases",
    "Indices",
    "Logarithms",
    "Algebraic Expressions",
    "Linear Equations",
    "Quadratic Equations",
    "Sets",
    "Probability",
    "Trigonometry",
    "Statistics"
  ],

  "Citizenship and Heritage Studies": [
    "Citizenship",
    "National Values",
    "Human Rights",
    "Responsibilities of Citizens",
    "Democracy",
    "Rule of Law",
    "National Identity",
    "Culture and Heritage",
    "Leadership",
    "Community Development"
  ],

  "Digital Technologies (Computer Studies)": [
    "Computer Hardware",
    "Computer Software",
    "Algorithms",
    "Data Representation",
    "Databases",
    "Computer Networks",
    "Cyber Safety",
    "Programming Basics",
    "Operating Systems",
    "Digital Citizenship"
  ],

  "Biology": [
    "The Cell",
    "Nutrition",
    "Transport System",
    "Respiration",
    "Excretion",
    "Reproduction",
    "Genetics",
    "Ecology",
    "Evolution",
    "Human Health"
  ],

  "Chemistry": [
    "Matter",
    "Atomic Structure",
    "Periodic Table",
    "Chemical Bonding",
    "Acids, Bases and Salts",
    "Mole Concept",
    "Chemical Reactions",
    "Electrolysis",
    "Organic Chemistry",
    "Chemical Equilibrium"
  ],

  "Physics": [
    "Measurement",
    "Motion",
    "Force",
    "Work, Energy and Power",
    "Heat",
    "Waves",
    "Light",
    "Electricity",
    "Magnetism",
    "Electromagnetic Waves"
  ],

  "Agricultural Science": [
    "Soil",
    "Farm Tools",
    "Crop Production",
    "Animal Production",
    "Farm Management",
    "Agricultural Economics",
    "Pests and Diseases",
    "Farm Records",
    "Fisheries",
    "Forestry"
  ],

  "Further Mathematics": [
    "Functions",
    "Sequences and Series",
    "Matrices",
    "Vectors",
    "Complex Numbers",
    "Differentiation",
    "Integration",
    "Coordinate Geometry",
    "Probability",
    "Statistics"
  ],

  "Geography": [
    "Map Reading",
    "Weather and Climate",
    "Rocks",
    "Landforms",
    "Population",
    "Settlement",
    "Agriculture",
    "Industry",
    "Transport",
    "Environmental Resources"
  ],

  "Physical and Health Education": [
    "Fitness",
    "Nutrition",
    "Personal Health",
    "First Aid",
    "Athletics",
    "Team Sports",
    "Safety",
    "Body Systems",
    "Recreation",
    "Healthy Living"
  ],

  "Foods and Nutrition": [
    "Food Nutrients",
    "Balanced Diet",
    "Meal Planning",
    "Food Preparation",
    "Food Preservation",
    "Kitchen Safety",
    "Food Hygiene",
    "Special Diets",
    "Consumer Education",
    "Nutrition and Health"
  ],

  "Technical Drawing": [
    "Drawing Instruments",
    "Geometric Construction",
    "Orthographic Projection",
    "Isometric Drawing",
    "Scale Drawing",
    "Dimensioning",
    "Sections",
    "Loci",
    "Building Drawing",
    "Engineering Drawing"
  ],

  "Literature-in-English": [
    "Prose",
    "Poetry",
    "Drama",
    "Literary Devices",
    "Characterisation",
    "Plot",
    "Theme",
    "Setting",
    "Point of View",
    "Literary Appreciation"
  ],

  "Government": [
    "Constitution",
    "Democracy",
    "Political Parties",
    "Elections",
    "Legislature",
    "Executive",
    "Judiciary",
    "Citizenship",
    "Public Administration",
    "International Relations"
  ],

  "Nigerian History": [
    "Pre-colonial Societies",
    "Trans-Saharan Trade",
    "European Contact",
    "Colonial Rule",
    "Nationalism",
    "Independence",
    "Post-Independence Nigeria",
    "Military Rule",
    "Civil Rule",
    "National Development"
  ],

  "Christian Religious Studies (CRS)": [
    "Creation",
    "The Patriarchs",
    "Moses",
    "The Prophets",
    "The Life of Jesus",
    "Parables",
    "Miracles",
    "The Early Church",
    "Christian Living",
    "Leadership and Service"
  ],

  "Nigerian Languages (Yoruba/Igbo/Hausa)": [
    "Alphabet and Sounds",
    "Vocabulary",
    "Grammar",
    "Comprehension",
    "Oral Literature",
    "Written Expression",
    "Proverbs",
    "Culture",
    "Translation",
    "Communication"
  ],

  "French": [
    "Greetings",
    "Introductions",
    "Numbers",
    "Family",
    "School",
    "Food",
    "Grammar",
    "Tenses",
    "Comprehension",
    "Conversation"
  ],

  "Arabic": [
    "Alphabet",
    "Vocabulary",
    "Greetings",
    "Numbers",
    "Grammar",
    "Reading",
    "Writing",
    "Comprehension",
    "Conversation",
    "Culture"
  ],

  "Visual Arts": [
    "Elements of Art",
    "Principles of Design",
    "Drawing",
    "Painting",
    "Sculpture",
    "Textiles",
    "Graphic Design",
    "Art History",
    "Craft",
    "Art Appreciation"
  ],

  "Music": [
    "Notation",
    "Rhythm",
    "Melody",
    "Harmony",
    "Scales",
    "Intervals",
    "Musical Instruments",
    "African Music",
    "Composition",
    "Performance"
  ],

  "Economics": [
    "Scarcity",
    "Opportunity Cost",
    "Demand",
    "Supply",
    "Market",
    "Production",
    "Costs",
    "National Income",
    "Inflation",
    "Unemployment"
  ],

  "Financial Accounting": [
    "Accounting Concepts",
    "Source Documents",
    "Ledger",
    "Trial Balance",
    "Cash Book",
    "Bank Reconciliation",
    "Depreciation",
    "Final Accounts",
    "Partnership",
    "Company Accounts"
  ],

  "Commerce": [
    "Trade",
    "Aids to Trade",
    "Retail Trade",
    "Wholesale Trade",
    "Transportation",
    "Warehousing",
    "Insurance",
    "Banking",
    "Advertising",
    "Business Communication"
  ],

  "Marketing": [
    "Marketing Concepts",
    "Market Research",
    "Product",
    "Price",
    "Promotion",
    "Place",
    "Consumer Behaviour",
    "Branding",
    "Advertising",
    "Sales"
  ],

  "Solar Photovoltaic installation and maintenance": [
    "Solar Energy",
    "PV Panels",
    "Charge Controllers",
    "Batteries",
    "Inverters",
    "System Sizing",
    "Wiring",
    "Installation Safety",
    "Maintenance",
    "Troubleshooting"
  ],

  "Fashion design and garment making": [
    "Fashion Design",
    "Body Measurements",
    "Pattern Drafting",
    "Cutting",
    "Sewing",
    "Textiles",
    "Garment Finishing",
    "Colour",
    "Fashion Illustration",
    "Entrepreneurship"
  ],

  "Livestock farming / Animal Husbandry": [
    "Animal Breeds",
    "Housing",
    "Feeds",
    "Nutrition",
    "Breeding",
    "Disease Prevention",
    "Poultry",
    "Cattle",
    "Goats and Sheep",
    "Farm Records"
  ],

  "Beauty and cosmetology": [
    "Skin Care",
    "Hair Care",
    "Nail Care",
    "Beauty Hygiene",
    "Makeup",
    "Salon Safety",
    "Cosmetology Tools",
    "Customer Care",
    "Product Knowledge",
    "Business Skills"
  ],

  "Computer hardware and GSM repairs": [
    "Computer Components",
    "Motherboards",
    "Power Supply",
    "Storage Devices",
    "Troubleshooting",
    "Mobile Hardware",
    "GSM Components",
    "Repair Tools",
    "Safety",
    "Diagnostics"
  ],

  "Horticulture and crop production": [
    "Plant Growth",
    "Soil Preparation",
    "Seeds",
    "Nursery",
    "Crop Management",
    "Irrigation",
    "Pests",
    "Diseases",
    "Harvesting",
    "Marketing"
  ]
};


/* =========================================================
   SUBJECT ICONS
   ========================================================= */

const TGEN_SUBJECT_ICONS = {
  "English Language": "📖",
  "General Mathematics": "📐",
  "Citizenship and Heritage Studies": "🇳🇬",
  "Digital Technologies (Computer Studies)": "💻",
  "Biology": "🧬",
  "Chemistry": "⚗️",
  "Physics": "⚡",
  "Agricultural Science": "🌱",
  "Further Mathematics": "📊",
  "Geography": "🌍",
  "Physical and Health Education": "🏃",
  "Foods and Nutrition": "🍎",
  "Technical Drawing": "📏",
  "Literature-in-English": "📚",
  "Government": "🏛️",
  "Nigerian History": "🗺️",
  "Christian Religious Studies (CRS)": "✝️",
  "Nigerian Languages (Yoruba/Igbo/Hausa)": "🗣️",
  "French": "🇫🇷",
  "Arabic": "🔤",
  "Visual Arts": "🎨",
  "Music": "🎵",
  "Economics": "💹",
  "Financial Accounting": "💰",
  "Commerce": "🛒",
  "Marketing": "📣",
  "Solar Photovoltaic installation and maintenance": "☀️",
  "Fashion design and garment making": "🧵",
  "Livestock farming / Animal Husbandry": "🐄",
  "Beauty and cosmetology": "💄",
  "Computer hardware and GSM repairs": "🔧",
  "Horticulture and crop production": "🌿"
};


const TGEN_TRADE_SUBJECTS = [
  "Solar Photovoltaic installation and maintenance",
  "Fashion design and garment making",
  "Livestock farming / Animal Husbandry",
  "Beauty and cosmetology",
  "Computer hardware and GSM repairs",
  "Horticulture and crop production"
];


/* =========================================================
   PROFILE SUBJECT RENDERING
   ========================================================= */

function renderProfileSubjects() {

  const box = document.getElementById("profileSubjects");
  const classSelect = document.getElementById("profileClass");
  const departmentSelect = document.getElementById("profileDepartment");

  if (!box) return;

  const cls =
    classSelect?.value ||
    userProfile?.class ||
    "";

  const dept =
    departmentSelect?.value ||
    userProfile?.department ||
    "";

  if (!cls || !dept) {

    box.innerHTML = `
      <p style="color:#64748b;">
        Select your class and department first.
      </p>
    `;

    return;
  }

  selectedClass = cls;
  selectedDepartment = dept;

  const savedSubjects =
    new Set(userProfile?.subjects || []);

  const subjects =
    TGEN_PROFILE_SUBJECTS[dept] || [];

  box.innerHTML =
    subjects.map(subject => `

      <label style="
        display:flex;
        align-items:center;
        gap:10px;
        padding:13px 14px;
        border:1px solid #dbe3f0;
        border-radius:12px;
        cursor:pointer;
        background:#fff;
        margin-bottom:10px;
      ">

        <input
          type="checkbox"
          name="offeredSubject"
          value="${escapeAttribute(subject)}"
          ${savedSubjects.has(subject) ? "checked" : ""}
          style="
            width:18px;
            height:18px;
          "
        >

        <span>
          ${escapeHTML(subject)}
        </span>

      </label>

    `).join("");
}


/* =========================================================
   LOAD PROFILE
   ========================================================= */

function loadProfile() {

  try {

    userProfile =
      JSON.parse(
        localStorage.getItem(TGEN_PROFILE_KEY) ||
        localStorage.getItem("tgen-ai-profile") ||
        "null"
      );

  } catch {

    userProfile = null;

  }

  window.userProfile = userProfile;

  if (!userProfile) return;

  selectedClass =
    userProfile.class ||
    userProfile.className ||
    "";

  selectedDepartment =
    userProfile.department ||
    "";

  selectedSubject = null;
  selectedTopic = null;

  const name =
    document.getElementById("profileName");

  const email =
    document.getElementById("profileEmail");

  const cls =
    document.getElementById("profileClass");

  const dept =
    document.getElementById("profileDepartment");

  const exam =
    document.getElementById("profileExam");

  if (name)
    name.value = userProfile.name || "";

  if (email)
    email.value = userProfile.email || "";

  if (cls)
    cls.value = selectedClass;

  if (dept)
    dept.value = selectedDepartment;

  if (exam)
    exam.value = userProfile.exam || "";

  const wrapper =
    document.getElementById("examTargetWrapper");

  if (wrapper) {

    wrapper.style.display =
      selectedClass === "SS3"
        ? "block"
        : "none";

  }

  renderProfileSubjects();
}


/* =========================================================
   SAVE PROFILE
   ========================================================= */

function saveProfile() {

  const name =
    document.getElementById("profileName")
      ?.value.trim();

  const email =
    document.getElementById("profileEmail")
      ?.value.trim();

  const className =
    document.getElementById("profileClass")
      ?.value;

  const department =
    document.getElementById("profileDepartment")
      ?.value;

  const exam =
    className === "SS3"
      ? document.getElementById("profileExam")?.value || ""
      : "";

  const subjects =
    [
      ...document.querySelectorAll(
        'input[name="offeredSubject"]:checked'
      )
    ].map(input => input.value);

  const error =
    document.getElementById("profileError");

  const fail = message => {

    if (error) {

      error.textContent = message;
      error.style.display = "block";

    }

  };

  if (!name)
    return fail("Please enter your name.");

  if (
    !email ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  ) {

    return fail(
      "Please enter a valid email address."
    );

  }

  if (!className)
    return fail("Please select your class.");

  if (!department)
    return fail("Please select your department.");

  if (className === "SS3" && !exam)
    return fail("Please choose what you are studying for.");

  if (!subjects.length)
    return fail("Select every subject you currently offer.");

  const hasTradeSubject =
    subjects.some(subject =>
      TGEN_TRADE_SUBJECTS.includes(subject)
    );

  if (!hasTradeSubject) {

    return fail(
      "Select at least one Trade / Entrepreneurship subject."
    );

  }

  userProfile = {

    name,
    email,

    class: className,

    department,

    exam,

    subjects,

    createdAt:
      userProfile?.createdAt ||
      new Date().toISOString()

  };

  selectedClass = className;
  selectedDepartment = department;
  selectedSubject = null;
  selectedTopic = null;

  localStorage.setItem(
    TGEN_PROFILE_KEY,
    JSON.stringify(userProfile)
  );

  localStorage.setItem(
    "tgen-ai-profile",
    JSON.stringify(userProfile)
  );

  window.userProfile = userProfile;

  if (error)
    error.style.display = "none";

  renderClasses();
  renderSubjects();
  renderTopics();

  showScreen("classes");
}


/* =========================================================
   CLASSES
   ========================================================= */

function renderClasses() {

  const grid =
    document.getElementById("classGrid");

  if (!grid) return;

  if (!userProfile) {

    grid.innerHTML = `

      <div style="
        grid-column:1/-1;
        text-align:center;
        padding:30px;
      ">

        <h3>
          Create your profile first
        </h3>

        <button
          class="primary-btn"
          onclick="showScreen('profile')"
        >
          Create Profile →
        </button>

      </div>

    `;

    return;
  }

  const icon =
    selectedClass === "SS1"
      ? "📘"
      : selectedClass === "SS2"
        ? "📗"
        : "📕";

  const count =
    userProfile.subjects?.length || 0;

  grid.innerHTML = `

    <button
      class="class-card active"
      onclick="showScreen('subjects')"
    >

      <div class="card-icon">
        ${icon}
      </div>

      <h3>
        ${escapeHTML(selectedClass)}
      </h3>

      <span class="card-badge">
        ${escapeHTML(selectedDepartment)}
        Department
      </span>

      <span class="card-indicator">
        →
      </span>

      <p style="margin-top:12px;">
        ${count}
        selected subject${count === 1 ? "" : "s"}
      </p>

    </button>

  `;
}


/* =========================================================
   SUBJECTS
   ========================================================= */

function renderSubjects() {

  const grid =
    document.getElementById("subjectGrid");

  if (!grid) return;

  if (!userProfile) {

    grid.innerHTML = `

      <div style="
        grid-column:1/-1;
        text-align:center;
        padding:30px;
      ">

        <h3>
          Create your profile first
        </h3>

        <button
          class="primary-btn"
          onclick="showScreen('profile')"
        >
          Create Profile →
        </button>

      </div>

    `;

    return;
  }

  const title =
    document.getElementById("subjectTitle");

  if (title) {

    title.textContent =
      `${selectedClass} • ${selectedDepartment} subjects`;

  }

  const subjects =
    userProfile.subjects || [];

  grid.innerHTML =
    subjects.map(subject => `

      <button
        class="subject-card ${
          selectedSubject === subject
            ? "active"
            : ""
        }"
        onclick='selectSubject(${JSON.stringify(subject)})'
      >

        <div class="card-icon">
          ${TGEN_SUBJECT_ICONS[subject] || "📚"}
        </div>

        <h3>
          ${escapeHTML(subject)}
        </h3>

        <p>
          ${
            (
              TGEN_TOPICS[subject] ||
              [
                "Introduction",
                "Key Concepts",
                "Examples",
                "Practice",
                "Revision"
              ]
            ).length
          }
          topics
        </p>

        <span class="card-indicator">
          →
        </span>

      </button>

    `).join("");
}


/* =========================================================
   TOPICS
   ========================================================= */

function renderTopics() {

  const grid =
    document.getElementById("topicGrid");

  if (!grid) return;

  if (!selectedSubject) {

    grid.innerHTML = `

      <div style="
        grid-column:1/-1;
        text-align:center;
        padding:30px;
      ">

        Choose a subject first.

      </div>

    `;

    return;
  }

  const topics =
    TGEN_TOPICS[selectedSubject] ||
    [
      "Introduction",
      "Key Concepts",
      "Examples",
      "Practice",
      "Revision"
    ];

  const title =
    document.getElementById("topicTitle");

  if (title) {

    title.textContent =
      `${selectedSubject} topics`;

  }

  grid.innerHTML =
    topics.map((topic, index) => `

      <button
        class="topic-card"
        onclick='selectTopic(${JSON.stringify(topic)})'
      >

        <span class="topic-number">
          ${String(index + 1).padStart(2, "0")}
        </span>

        <div>

          <h3>
            ${escapeHTML(topic)}
          </h3>

          <p>
            Define, explain, learn and practise
          </p>

        </div>

        <span>
          →
        </span>

      </button>

    `).join("");
}


/* =========================================================
   SELECTION
   ========================================================= */

function selectClass(className) {

  if (!userProfile) {

    showScreen("profile");
    return;

  }

  if (
    !["SS1", "SS2", "SS3"]
      .includes(className)
  ) return;

  selectedClass = className;

  selectedDepartment =
    userProfile.department ||
    "General";

  renderClasses();
  renderSubjects();

  showScreen("subjects");
}


function selectDepartment(department) {

  if (!TGEN_PROFILE_SUBJECTS[department])
    return;

  selectedDepartment =
    department;

  renderProfileSubjects();
}


function selectSubject(subjectName) {

  if (
    !userProfile ||
    !userProfile.subjects.includes(subjectName)
  ) return;

  selectedSubject =
    subjectName;

  selectedTopic = null;

  renderTopics();

  showScreen("topics");
}


function selectTopic(topicName) {

  selectedTopic =
    topicName;

  trackTopic();

  renderStudyHeader();

  const badge =
    document.getElementById(
      "selectedTopicBadge"
    );

  if (badge)
    badge.textContent = topicName;

  showScreen("study");
}


/* =========================================================
   NAVIGATION
   ========================================================= */

function showScreen(screenId) {

  if (
    !userProfile &&
    !["home", "profile"].includes(screenId)
  ) {

    screenId = "profile";

  }

  document
    .querySelectorAll(".app-screen")
    .forEach(screen => {

      screen.classList.remove("active");

    });

  const target =
    document.getElementById(screenId);

  if (!target) return;

  target.classList.add("active");

  if (screenId === "classes")
    renderClasses();

  if (screenId === "subjects")
    renderSubjects();

  if (screenId === "topics")
    renderTopics();

  if (screenId === "quiz")
    openQuiz();

  if (screenId === "progress")
    loadProgress();

  const account =
    document.getElementById("accountBtn");

  if (account) {

    account.style.display =
      userProfile
        ? "inline-flex"
        : "none";

  }

  window.userProfile =
    userProfile;

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


window.showScreen =
  showScreen;


/* =========================================================
   START LEARNING
   ========================================================= */

function startLearning() {

  showScreen(
    userProfile
      ? "classes"
      : "profile"
  );

}

window.startLearning =
  startLearning;


/* =========================================================
   LOGOUT
   ========================================================= */

function logout() {

  localStorage.removeItem(
    TGEN_PROFILE_KEY
  );

  localStorage.removeItem(
    "tgen-ai-profile"
  );

  userProfile = null;

  window.userProfile = null;

  selectedClass = "";
  selectedDepartment = "";
  selectedSubject = null;
  selectedTopic = null;

  [
    "classGrid",
    "subjectGrid",
    "topicGrid"
  ].forEach(id => {

    const node =
      document.getElementById(id);

    if (node)
      node.innerHTML = "";

  });

  const account =
    document.getElementById("accountBtn");

  if (account)
    account.style.display = "none";

  showScreen("home");
}

window.logout =
  logout;


/* =========================================================
   10-QUESTION QUIZ SYSTEM
   ========================================================= */

function tgenGetQuizQuestions() {

  const existing =
    quizBank?.[selectedClass]?.[selectedSubject] ||
    [];

  const topics =
    TGEN_TOPICS[selectedSubject] ||
    [];

  const questions =
    existing.slice(0, 10);

  /*
     Keep your existing quiz questions.

     If a subject does not yet have enough questions,
     the app fills the quiz to 10 questions using
     the subject's topic list.
  */

  for (
    let i = questions.length;
    i < 10;
    i++
  ) {

    const correct =
      topics[i % topics.length] ||
      "Key concepts";

    const choices = [
      correct
    ];

    for (
      let j = 1;
      choices.length < 4;
      j++
    ) {

      const candidate =
        topics[
          (i + j) % topics.length
        ] ||
        `Option ${j}`;

      if (
        !choices.includes(candidate)
      ) {

        choices.push(candidate);

      }

    }

    questions.push({

      question:
        `Which topic is part of ${selectedSubject}?`,

      options:
        choices,

      answer:
        correct

    });

  }

  return questions.slice(0, 10);
}


function renderQuiz() {

  const list =
    document.getElementById(
      "quizList"
    );

  if (!list) return;

  const questions =
    tgenGetQuizQuestions();

  list.innerHTML =
    questions.map(
      (quiz, index) => `

        <div
          class="quiz-item"
          id="quiz-${index}"
        >

          <p class="quiz-question-text">

            ${index + 1}.
            ${escapeHTML(
              quiz.question
            )}

          </p>

          <div class="quiz-options">

            ${quiz.options.map(
              option => `

                <label class="quiz-option">

                  <input
                    type="radio"
                    name="quiz-${index}"
                    value="${escapeAttribute(option)}"
                  >

                  <span>
                    ${escapeHTML(option)}
                  </span>

                </label>

              `
            ).join("")}

          </div>

        </div>

      `
    ).join("");

  updateElement(
    "questionCounter",
    `0 of ${questions.length} answered`
  );
}


function generateQuiz() {

  if (
    !userProfile ||
    !selectedSubject
  ) {

    alert(
      "Choose one of your subjects first."
    );

    return;

  }

  quizStarted = true;
  quizSubmitted = false;
  currentQuizScore = 0;

  const result =
    document.getElementById(
      "quizResult"
    );

  if (result) {

    result.style.display =
      "none";

    result.innerHTML = "";

  }

  const next =
    document.getElementById(
      "quizNextBtn"
    );

  if (next)
    next.style.display = "none";

  const generate =
    document.getElementById(
      "generateQuizBtn"
    );

  if (generate)
    generate.style.display = "none";

  renderQuiz();

  const submit =
    document.getElementById(
      "submitQuizBtn"
    );

  if (submit)
    submit.style.display = "none";

  document
    .querySelectorAll(
      '#quizList input[type="radio"]'
    )
    .forEach(input => {

      input.addEventListener(
        "change",
        updateQuizProgress
      );

    });
}


function updateQuizProgress() {

  if (quizSubmitted)
    return;

  const questions =
    tgenGetQuizQuestions();

  const answered =
    new Set(
      [
        ...document.querySelectorAll(
          '#quizList input[type="radio"]:checked'
        )
      ].map(
        input => input.name
      )
    ).size;

  updateElement(
    "questionCounter",
    `${answered} of ${questions.length} answered`
  );

  const submit =
    document.getElementById(
      "submitQuizBtn"
    );

  if (submit) {

    submit.style.display =
      answered === questions.length
        ? "inline-flex"
        : "none";

  }
}


function submitQuiz() {

  if (
    !quizStarted ||
    quizSubmitted
  ) return;

  const questions =
    tgenGetQuizQuestions();

  const answered =
    new Set(
      [
        ...document.querySelectorAll(
          '#quizList input[type="radio"]:checked'
        )
      ].map(
        input => input.name
      )
    ).size;

  if (
    answered <
    questions.length
  ) {

    alert(
      "Please answer every question before submitting."
    );

    return;

  }

  let score = 0;

  questions.forEach(
    (quiz, index) => {

      const selected =
        document.querySelector(
          `input[name="quiz-${index}"]:checked`
        );

      const item =
        document.getElementById(
          `quiz-${index}`
        );

      if (
        selected &&
        selected.value ===
        quiz.answer
      ) {

        score++;

        if (item)
          item.style.borderColor =
            "#86efac";

      } else {

        if (item)
          item.style.borderColor =
            "#fecaca";

      }

    }
  );

  quizSubmitted = true;

  currentQuizScore =
    score;

  document
    .querySelectorAll(
      '#quizList input[type="radio"]'
    )
    .forEach(
      input =>
        input.disabled = true
    );

  const submit =
    document.getElementById(
      "submitQuizBtn"
    );

  if (submit)
    submit.style.display = "none";

  const next =
    document.getElementById(
      "quizNextBtn"
    );

  if (next)
    next.style.display =
      "inline-flex";

  const oldScore =
    getStoredNumber(
      "tgenScore"
    );

  setStoredNumber(
    "tgenScore",
    oldScore + score
  );

  const percentage =
    Math.round(
      score /
      questions.length *
      100
    );

  const result =
    document.getElementById(
      "quizResult"
    );

  if (result) {

    result.style.display =
      "block";

    result.innerHTML = `

      <h2>

        ${
          percentage >= 80
            ? "Excellent work! 🔥"
            : percentage >= 60
              ? "Nice work!"
              : "Keep practising!"
        }

      </h2>

      <p>

        You scored

        <strong>
          ${score}/${questions.length}
        </strong>

        (${percentage}%).

      </p>

      <button
        class="primary-btn small-btn"
        onclick="retakeQuiz()"
      >
        Retake quiz
      </button>

    `;

  }

  updateElement(
    "questionCounter",
    `${score}/${questions.length} correct`
  );

  updateElement(
    "quizSideScore",
    getStoredNumber(
      "tgenScore"
    )
  );

  loadProgress();
}


function retakeQuiz() {

  openQuiz();

}


function openQuiz() {

  quizStarted = false;
  quizSubmitted = false;
  currentQuizScore = 0;

  const list =
    document.getElementById(
      "quizList"
    );

  if (list) {

    list.innerHTML = `

      <div class="quiz-item">

        <h3>
          Ready to test yourself?
        </h3>

        <p>
          Click <strong>
            Generate Quiz
          </strong>
          to begin a 10-question quiz
          for your selected subject.
        </p>

      </div>

    `;

  }

  const generate =
    document.getElementById(
      "generateQuizBtn"
    );

  if (generate)
    generate.style.display =
      "inline-flex";

  const submit =
    document.getElementById(
      "submitQuizBtn"
    );

  if (submit)
    submit.style.display =
      "none";

  const next =
    document.getElementById(
      "quizNextBtn"
    );

  if (next)
    next.style.display =
      "none";

  const result =
    document.getElementById(
      "quizResult"
    );

  if (result) {

    result.style.display =
      "none";

    result.innerHTML = "";

  }

  updateElement(
    "questionCounter",
    "Quiz not started"
  );

  updateElement(
    "quizHeader",
    selectedSubject
      ? `${selectedSubject} quiz`
      : "Test your knowledge"
  );
}


/* =========================================================
   CONNECT THE UPGRADE TO THE EXISTING APP
   ========================================================= */

function tgenInitializeUpgrade() {

  loadProfile();

  const classSelect =
    document.getElementById(
      "profileClass"
    );

  const departmentSelect =
    document.getElementById(
      "profileDepartment"
    );

  const examSelect =
    document.getElementById(
      "profileExam"
    );

  const examWrapper =
    document.getElementById(
      "examTargetWrapper"
    );

  if (classSelect) {

    classSelect.addEventListener(
      "change",
      () => {

        if (examWrapper) {

          examWrapper.style.display =
            classSelect.value === "SS3"
              ? "block"
              : "none";

        }

        if (
          classSelect.value !== "SS3" &&
          examSelect
        ) {

          examSelect.value = "";

        }

        renderProfileSubjects();

      }
    );

  }

  if (departmentSelect) {

    departmentSelect.addEventListener(
      "change",
      renderProfileSubjects
    );

  }

  const save =
    document.getElementById(
      "saveProfileBtn"
    );

  if (save) {

    save.addEventListener(
      "click",
      saveProfile
    );

  }

  if (!userProfile) {

    showScreen("profile");

  } else {

    renderClasses();
    renderSubjects();

  }

}


if (
  document.readyState ===
  "loading"
) {

  document.addEventListener(
    "DOMContentLoaded",
    tgenInitializeUpgrade
  );

} else {

  tgenInitializeUpgrade();

}
// ==========================================
// TGEN-AI — SUBJECT-SPECIFIC QUIZ UPGRADE
// ==========================================

const TGEN_QUIZ_BANK = {

  "English Language": [
    {
      q: "Which word is a noun?",
      options: ["Quickly", "Beautiful", "Teacher", "Run"],
      answer: "Teacher"
    },
    {
      q: "What is the opposite of 'ancient'?",
      options: ["Old", "Modern", "Historic", "Past"],
      answer: "Modern"
    },
    {
      q: "Which sentence is correctly punctuated?",
      options: [
        "What are you doing.",
        "What are you doing?",
        "what are you doing?",
        "What are you doing!"
      ],
      answer: "What are you doing?"
    },
    {
      q: "Which word is an adjective?",
      options: ["Beautiful", "Run", "Quickly", "Teacher"],
      answer: "Beautiful"
    },
    {
      q: "What is a synonym for 'happy'?",
      options: ["Sad", "Angry", "Joyful", "Tired"],
      answer: "Joyful"
    }
  ],

  "General Mathematics": [
    {
      q: "What is 12 × 8?",
      options: ["86", "96", "108", "112"],
      answer: "96"
    },
    {
      q: "What is 144 ÷ 12?",
      options: ["10", "11", "12", "14"],
      answer: "12"
    },
    {
      q: "What is 25% of 200?",
      options: ["25", "40", "50", "75"],
      answer: "50"
    },
    {
      q: "If x + 7 = 15, what is x?",
      options: ["6", "7", "8", "9"],
      answer: "8"
    },
    {
      q: "What is the square of 9?",
      options: ["18", "27", "72", "81"],
      answer: "81"
    }
  ],

  "Biology": [
    {
      q: "What is the basic unit of life?",
      options: ["Tissue", "Organ", "Cell", "System"],
      answer: "Cell"
    },
    {
      q: "Which organ pumps blood around the body?",
      options: ["Lung", "Heart", "Kidney", "Liver"],
      answer: "Heart"
    },
    {
      q: "Which process do green plants use to make food?",
      options: ["Respiration", "Digestion", "Photosynthesis", "Excretion"],
      answer: "Photosynthesis"
    },
    {
      q: "Which gas is needed for human respiration?",
      options: ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
      answer: "Oxygen"
    },
    {
      q: "Which part of a plant absorbs water from the soil?",
      options: ["Flower", "Leaf", "Root", "Fruit"],
      answer: "Root"
    }
  ],

  "Chemistry": [
    {
      q: "What is the chemical symbol for oxygen?",
      options: ["Ox", "O", "C", "Og"],
      answer: "O"
    },
    {
      q: "What is H₂O commonly known as?",
      options: ["Salt", "Water", "Hydrogen", "Oxygen"],
      answer: "Water"
    },
    {
      q: "Which particle has a negative charge?",
      options: ["Proton", "Neutron", "Electron", "Nucleus"],
      answer: "Electron"
    },
    {
      q: "What is the pH of a neutral solution?",
      options: ["0", "5", "7", "14"],
      answer: "7"
    },
    {
      q: "Which gas is most abundant in Earth's atmosphere?",
      options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
      answer: "Nitrogen"
    }
  ],

  "Physics": [
    {
      q: "What is the SI unit of force?",
      options: ["Joule", "Watt", "Newton", "Pascal"],
      answer: "Newton"
    },
    {
      q: "What is the speed of an object that travels 100 m in 10 s?",
      options: ["5 m/s", "10 m/s", "20 m/s", "100 m/s"],
      answer: "10 m/s"
    },
    {
      q: "Which force pulls objects toward Earth?",
      options: ["Friction", "Magnetism", "Gravity", "Tension"],
      answer: "Gravity"
    },
    {
      q: "What is the unit of electrical current?",
      options: ["Volt", "Ohm", "Ampere", "Watt"],
      answer: "Ampere"
    },
    {
      q: "Which form of energy is stored in a stretched rubber band?",
      options: [
        "Chemical energy",
        "Elastic potential energy",
        "Sound energy",
        "Light energy"
      ],
      answer: "Elastic potential energy"
    }
  ],

  "Economics": [
    {
      q: "What is economics mainly concerned with?",
      options: [
        "Unlimited resources",
        "Scarce resources and choices",
        "Weather",
        "Biology"
      ],
      answer: "Scarce resources and choices"
    },
    {
      q: "What is demand?",
      options: [
        "The amount producers want to sell",
        "The desire and ability to buy a good",
        "The cost of production",
        "Government spending"
      ],
      answer: "The desire and ability to buy a good"
    },
    {
      q: "Which is a factor of production?",
      options: ["Land", "Money only", "Prices", "Taxes"],
      answer: "Land"
    },
    {
      q: "What is inflation?",
      options: [
        "A fall in prices",
        "A general rise in prices",
        "An increase in rainfall",
        "A fall in population"
      ],
      answer: "A general rise in prices"
    },
    {
      q: "Which institution is responsible for monetary policy in Nigeria?",
      options: [
        "CBN",
        "INEC",
        "FRSC",
        "NIMASA"
      ],
      answer: "CBN"
    }
  ],

  "Government": [
    {
      q: "What is democracy?",
      options: [
        "Government by one person",
        "Government by the people",
        "Government by the military",
        "Government by judges"
      ],
      answer: "Government by the people"
    },
    {
      q: "What is a constitution?",
      options: [
        "A country's fundamental rules",
        "A school timetable",
        "A business plan",
        "A newspaper"
      ],
      answer: "A country's fundamental rules"
    },
    {
      q: "Which arm of government makes laws?",
      options: ["Executive", "Judiciary", "Legislature", "Civil service"],
      answer: "Legislature"
    },
    {
      q: "Which arm interprets laws?",
      options: ["Executive", "Judiciary", "Legislature", "Police"],
      answer: "Judiciary"
    },
    {
      q: "What is voting used for in a democracy?",
      options: [
        "Choosing representatives",
        "Writing laws alone",
        "Collecting taxes",
        "Running businesses"
      ],
      answer: "Choosing representatives"
    }
  ],

  "Financial Accounting": [
    {
      q: "What is an asset?",
      options: [
        "Something owned by a business",
        "A business debt",
        "A business loss",
        "An expense only"
      ],
      answer: "Something owned by a business"
    },
    {
      q: "What is a liability?",
      options: [
        "Money owed by a business",
        "Cash in hand",
        "Profit",
        "Stock owned"
      ],
      answer: "Money owed by a business"
    },
    {
      q: "What is the basic accounting equation?",
      options: [
        "Assets = Capital + Liabilities",
        "Assets = Sales − Expenses",
        "Capital = Sales + Expenses",
        "Profit = Assets + Liabilities"
      ],
      answer: "Assets = Capital + Liabilities"
    },
    {
      q: "Which document records goods sold on credit?",
      options: ["Invoice", "Receipt", "Cheque", "Voucher"],
      answer: "Invoice"
    },
    {
      q: "What is profit?",
      options: [
        "Revenue minus expenses",
        "Expenses minus revenue",
        "Assets minus cash",
        "Capital minus sales"
      ],
      answer: "Revenue minus expenses"
    }
  ]

};


// Make the quiz use the student's selected subject.
const oldTgenGetQuizQuestions = window.tgenGetQuizQuestions;

window.tgenGetQuizQuestions = function(subject, topic) {

  const subjectQuestions = TGEN_QUIZ_BANK[subject];

  if (subjectQuestions && subjectQuestions.length > 0) {

    const shuffled = [...subjectQuestions]
      .sort(() => Math.random() - 0.5);

    return shuffled.slice(0, 10);

  }

  if (typeof oldTgenGetQuizQuestions === "function") {
    return oldTgenGetQuizQuestions(subject, topic);
  }

  return [];
};

console.log("TGEN-AI subject quiz upgrade loaded.");
// ==========================================================
// TGEN-AI FINAL FIX
// Logout button + Quiz generation
// ==========================================================

(function () {

  // ----------------------------------------------------------
  // LOGOUT FIX
  // ----------------------------------------------------------

  function tgenLogoutFixed() {

    // Remove every profile key TGEN-AI may have used
    localStorage.removeItem("tgen-ai-profile");
    localStorage.removeItem("tgenProfile");
    localStorage.removeItem("userProfile");
    localStorage.removeItem("profile");

    // Clear profile state
    userProfile = null;
    window.userProfile = null;

    selectedClass = "";
    selectedDepartment = "";
    selectedSubject = "";
    selectedTopic = "";

    // Clear quiz state if these exist
    if (typeof quizQuestions !== "undefined") {
      quizQuestions = [];
    }

    if (typeof quizAnswers !== "undefined") {
      quizAnswers = {};
    }

    // Hide logout button FORCEFULLY
    const accountBtn = document.getElementById("accountBtn");

    if (accountBtn) {
      accountBtn.style.setProperty(
        "display",
        "none",
        "important"
      );

      accountBtn.hidden = true;
    }

    // Clear personalized screens
    [
      "classGrid",
      "subjectGrid",
      "topicGrid",
      "profileSubjects",
      "progressSubjects"
    ].forEach(id => {
      const element = document.getElementById(id);

      if (element) {
        element.innerHTML = "";
      }
    });

    // Reset quiz
    const quizList = document.getElementById("quizList");

    if (quizList) {
      quizList.innerHTML = `
        <div class="quiz-item">
          <h3>Create your profile first.</h3>
          <p>Set up your TGEN-AI profile to start learning.</p>
        </div>
      `;
    }

    const quizResult = document.getElementById("quizResult");

    if (quizResult) {
      quizResult.innerHTML = "";
      quizResult.style.display = "none";
    }

    const submitBtn = document.getElementById("submitQuizBtn");

    if (submitBtn) {
      submitBtn.style.display = "none";
    }

    const nextBtn = document.getElementById("quizNextBtn");

    if (nextBtn) {
      nextBtn.style.display = "none";
    }

    const generateBtn = document.getElementById("generateQuizBtn");

    if (generateBtn) {
      generateBtn.style.display = "inline-flex";
    }

    // Go home
    if (typeof showScreen === "function") {
      showScreen("home");
    } else {
      document.querySelectorAll(".app-screen").forEach(screen => {
        screen.classList.remove("active");
      });

      const home = document.getElementById("home");

      if (home) {
        home.classList.add("active");
      }
    }

    console.log("TGEN-AI: Logged out successfully.");
  }


  // Replace the old logout function
  window.logout = tgenLogoutFixed;


  // ----------------------------------------------------------
  // ACCOUNT BUTTON STATE
  // ----------------------------------------------------------

  function updateAccountButtonFixed() {

    const accountBtn = document.getElementById("accountBtn");

    if (!accountBtn) return;

    if (userProfile) {

      accountBtn.hidden = false;

      accountBtn.style.setProperty(
        "display",
        "inline-flex",
        "important"
      );

    } else {

      accountBtn.hidden = true;

      accountBtn.style.setProperty(
        "display",
        "none",
        "important"
      );
    }
  }


  // ----------------------------------------------------------
  // QUIZ QUESTION BUILDER
  // ----------------------------------------------------------

  function buildTgenQuiz() {

    const subject = selectedSubject;
    const classLevel = selectedClass;

    if (!subject) {
      return [];
    }

    let questions = [];


    // 1. Use the new TGEN quiz bank if available
    if (
      typeof TGEN_QUIZ_BANK !== "undefined" &&
      TGEN_QUIZ_BANK[subject]
    ) {

      questions = TGEN_QUIZ_BANK[subject].map(q => ({
        question: q.q,
        options: [...q.options],
        answer: q.answer
      }));
    }


    // 2. Use the old quiz bank if the new bank has nothing
    if (
      questions.length === 0 &&
      typeof quizBank !== "undefined"
    ) {

      const oldQuestions =
        quizBank[classLevel]?.[subject] || [];

      questions = oldQuestions.map(q => ({
        question: q.question || q.q,
        options: [...q.options],
        answer: q.answer
      }));
    }


    // 3. Use topic-based questions if needed
    const topics =
      typeof TGEN_TOPICS !== "undefined"
        ? (TGEN_TOPICS[subject] || [])
        : [];


    // Add useful fallback questions
    const fallbackQuestions = topics.map(topic => ({
      question: `Which of the following is a topic studied under ${subject}?`,
      options: [
        topic,
        "Unrelated topic",
        "Different subject area",
        "None of these"
      ],
      answer: topic
    }));


    questions = [
      ...questions,
      ...fallbackQuestions
    ];


    // Remove duplicate questions
    const unique = [];

    const seen = new Set();

    questions.forEach(question => {

      if (!question.question) return;

      const key =
        question.question
          .toLowerCase()
          .trim();

      if (!seen.has(key)) {

        seen.add(key);

        unique.push(question);
      }
    });


    questions = unique;


    // Shuffle
    questions.sort(
      () => Math.random() - 0.5
    );


    // If fewer than 10, cycle through available questions
    if (questions.length > 0) {

      const original = [...questions];

      let index = 0;

      while (questions.length < 10) {

        const copy = {
          ...original[index % original.length],
          options: [
            ...original[index % original.length].options
          ]
        };

        questions.push(copy);

        index++;
      }
    }


    return questions.slice(0, 10);
  }


  // ----------------------------------------------------------
  // NEW QUIZ GENERATOR
  // ----------------------------------------------------------

  function tgenGenerateQuizFixed() {

    if (!userProfile) {

      showScreen("profile");

      return;
    }


    if (!selectedSubject) {

      alert(
        "Please choose a subject before generating a quiz."
      );

      showScreen("subjects");

      return;
    }


    const questions = buildTgenQuiz();


    const quizList =
      document.getElementById("quizList");

    const generateArea =
      document.getElementById("quizGenerateArea");

    const submitBtn =
      document.getElementById("submitQuizBtn");

    const nextBtn =
      document.getElementById("quizNextBtn");

    const result =
      document.getElementById("quizResult");

    const counter =
      document.getElementById("questionCounter");

    const sideSubject =
      document.getElementById("quizSideSubject");


    if (!quizList) {

      console.error(
        "TGEN-AI: quizList element not found."
      );

      return;
    }


    if (questions.length === 0) {

      quizList.innerHTML = `
        <div class="quiz-item">
          <h3>No questions available yet.</h3>
          <p>
            TGEN-AI could not find questions for
            ${escapeHTML(selectedSubject)}.
          </p>
        </div>
      `;

      return;
    }


    // Save quiz globally
    quizQuestions = questions;
    quizAnswers = {};


    // Reset result
    if (result) {

      result.innerHTML = "";

      result.style.display = "none";
    }


    // Hide generate area
    if (generateArea) {

      generateArea.style.display = "none";
    }


    // Show submit
    if (submitBtn) {

      submitBtn.style.display =
        "inline-flex";
    }


    // Hide new quiz
    if (nextBtn) {

      nextBtn.style.display = "none";
    }


    // Update counter
    if (counter) {

      counter.textContent =
        `0 of ${questions.length} answered`;
    }


    // Update subject
    if (sideSubject) {

      sideSubject.textContent =
        selectedSubject;
    }


    // Render questions
    quizList.innerHTML =
      questions.map((question, index) => {

        const options =
          question.options || [];

        return `
          <div
            class="quiz-item"
            id="quiz-question-${index}"
          >

            <p class="quiz-question-text">
              <strong>
                ${index + 1}.
              </strong>
              ${escapeHTML(question.question)}
            </p>

            <div class="quiz-options">

              ${options.map(option => `
                <label class="quiz-option">

                  <input
                    type="radio"
                    name="quiz-question-${index}"
                    value="${escapeAttribute(option)}"
                  />

                  <span>
                    ${escapeHTML(option)}
                  </span>

                </label>
              `).join("")}

            </div>

          </div>
        `;

      }).join("");


    console.log(
      `TGEN-AI: Generated ${questions.length} questions for ${selectedSubject}.`
    );
  }


  // Make the new function global
  window.generateQuiz =
    tgenGenerateQuizFixed;


  // ----------------------------------------------------------
  // FORCE THE BUTTON TO USE THE NEW FUNCTION
  // ----------------------------------------------------------

  function connectQuizButton() {

    const button =
      document.getElementById("generateQuizBtn");

    if (!button) return;


    // Clone removes old event listeners
    const newButton =
      button.cloneNode(true);

    button.parentNode.replaceChild(
      newButton,
      button
    );


    newButton.addEventListener(
      "click",
      tgenGenerateQuizFixed
    );


    console.log(
      "TGEN-AI: Generate Quiz button connected."
    );
  }


  // ----------------------------------------------------------
  // INITIAL SETUP
  // ----------------------------------------------------------

  function finalTgenSetup() {

    updateAccountButtonFixed();

    connectQuizButton();


    // Make logout button always use our fixed function
    const accountBtn =
      document.getElementById("accountBtn");

    if (accountBtn) {

      accountBtn.onclick =
        tgenLogoutFixed;
    }
  }


  if (
    document.readyState === "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      finalTgenSetup
    );

  } else {

    finalTgenSetup();
  }


  // Also make sure the button is correct whenever
  // the user returns to the app.
  window.addEventListener(
    "pageshow",
    updateAccountButtonFixed
  );

})();
// ==========================================================
// TGEN-AI — QUIZ STATE FIX
// ==========================================================

// The quiz upgrade needs these variables to exist globally.
window.quizQuestions = window.quizQuestions || [];
window.quizAnswers = window.quizAnswers || {};

// Make sure the Generate Quiz button uses the current function.
document.addEventListener("DOMContentLoaded", function () {

  const generateButton =
    document.getElementById("generateQuizBtn");

  if (generateButton) {

    const fixedButton =
      generateButton.cloneNode(true);

    generateButton.parentNode.replaceChild(
      fixedButton,
      generateButton
    );

    fixedButton.addEventListener(
      "click",
      function () {

        if (typeof window.generateQuiz === "function") {
          window.generateQuiz();
        }

      }
    );
  }

});

console.log("TGEN-AI: Quiz state fixed.");
// ==========================================================
// TGEN-AI — SUBMIT QUIZ FIX
// ==========================================================

// Create the quiz variables properly in the global scope.
var quizQuestions = window.quizQuestions || [];
var quizAnswers = window.quizAnswers || {};

window.quizQuestions = quizQuestions;
window.quizAnswers = quizAnswers;


// ----------------------------------------------------------
// FIX SUBMIT QUIZ
// ----------------------------------------------------------

window.submitQuiz = function () {

  if (!quizQuestions || quizQuestions.length === 0) {
    alert("Please generate a quiz first.");
    return;
  }

  let score = 0;
  let answered = 0;

  quizQuestions.forEach(function (question, index) {

    const selected =
      document.querySelector(
        `input[name="quiz-question-${index}"]:checked`
      );

    const selectedAnswer =
      selected ? selected.value : "";

    quizAnswers[index] = selectedAnswer;

    if (selectedAnswer) {
      answered++;
    }

    if (selectedAnswer === question.answer) {
      score++;
    }

  });


  // Require all questions to be answered
  if (answered < quizQuestions.length) {

    alert(
      `Please answer all ${quizQuestions.length} questions before submitting.`
    );

    return;
  }


  const percentage =
    Math.round(
      (score / quizQuestions.length) * 100
    );


  // Show result
  const result =
    document.getElementById("quizResult");

  if (result) {

    result.style.display = "block";

    result.innerHTML = `
      <div class="quiz-result-card">

        <h2>Quiz Complete 🎉</h2>

        <p class="quiz-score">
          ${score}/${quizQuestions.length}
        </p>

        <p>
          You scored <strong>${percentage}%</strong>
        </p>

        <p>
          ${
            percentage >= 80
              ? "Excellent work! Keep it up."
              : percentage >= 60
                ? "Good job! Review the questions you missed."
                : "Keep practising. You’ve got this."
          }
        </p>

      </div>
    `;
  }


  // Update side score
  const sideScore =
    document.getElementById("quizSideScore");

  if (sideScore) {
    sideScore.textContent =
      `${score}/${quizQuestions.length}`;
  }


  // Hide submit button
  const submitButton =
    document.getElementById("submitQuizBtn");

  if (submitButton) {
    submitButton.style.display = "none";
  }


  // Show next quiz button
  const nextButton =
    document.getElementById("quizNextBtn");

  if (nextButton) {
    nextButton.style.display = "inline-flex";
  }


  // Update progress
  try {

    if (typeof loadProgress === "function") {

      const progress = loadProgress();

      if (!progress.scores) {
        progress.scores = [];
      }

      progress.scores.push(percentage);

      progress.scores =
        progress.scores.slice(-20);

      if (typeof saveProgress === "function") {
        saveProgress(progress);
      }
    }

  } catch (error) {

    console.warn(
      "TGEN-AI: Progress update skipped.",
      error
    );

  }


  console.log(
    `TGEN-AI: Quiz submitted — ${score}/${quizQuestions.length}`
  );
};


// ----------------------------------------------------------
// CONNECT SUBMIT BUTTON
// ----------------------------------------------------------

document.addEventListener(
  "DOMContentLoaded",
  function () {

    const submitButton =
      document.getElementById("submitQuizBtn");

    if (!submitButton) return;


    const fixedButton =
      submitButton.cloneNode(true);

    submitButton.parentNode.replaceChild(
      fixedButton,
      submitButton
    );


    fixedButton.addEventListener(
      "click",
      function () {
        window.submitQuiz();
      }
    );

  }
);


console.log("TGEN-AI: Submit Quiz fixed.");
// ==========================================================
// TGEN-AI — FINAL PROFILE NAVIGATION SYSTEM
// ==========================================================

(function () {

  const PROFILE_KEY = "tgen-ai-profile";

  // ----------------------------------------------------------
  // GET INITIALS
  // ----------------------------------------------------------

  function getInitials(name) {

    if (!name) return "T";

    const words = name
      .trim()
      .split(/\s+/)
      .filter(Boolean);

    if (words.length === 1) {
      return words[0].substring(0, 2).toUpperCase();
    }

    return (
      words[0][0] +
      words[words.length - 1][0]
    ).toUpperCase();
  }


  // ----------------------------------------------------------
  // CREATE PROFILE MENU
  // ----------------------------------------------------------

  function createProfileMenu() {

    if (document.getElementById("tgenProfileMenu")) {
      updateProfileMenu();
      return;
    }


    // Find the old Dashboard / account button
    const oldAccount =
      document.getElementById("accountBtn") ||
      document.querySelector(".nav-dashboard-btn");


    if (!oldAccount) return;


    // Hide old button
    oldAccount.style.display = "none";


    // Create wrapper
    const wrapper =
      document.createElement("div");

    wrapper.id = "tgenProfileMenu";

    wrapper.style.position = "relative";


    // Create avatar button
    const avatar =
      document.createElement("button");

    avatar.id = "tgenProfileAvatar";

    avatar.type = "button";

    avatar.setAttribute(
      "aria-label",
      "Open profile"
    );


    // Create dropdown
    const dropdown =
      document.createElement("div");

    dropdown.id = "tgenProfileDropdown";


    dropdown.innerHTML = `
      <div class="tgen-profile-header">

        <div
          id="tgenProfileBigAvatar"
          class="tgen-profile-big-avatar"
        >
          T
        </div>

        <div class="tgen-profile-header-text">
          <strong id="tgenProfileName">
            Student
          </strong>

          <span id="tgenProfileClass">
            Student
          </span>
        </div>

      </div>

      <div class="tgen-profile-info">

        <div>
          <span>Department</span>
          <strong id="tgenProfileDepartment">
            —
          </strong>
        </div>

        <div>
          <span>Subjects</span>
          <strong id="tgenProfileSubjects">
            —
          </strong>
        </div>

      </div>

      <div class="tgen-profile-actions">

        <button
          type="button"
          id="tgenEditProfileBtn"
        >
          ✏️ Edit Profile
        </button>

        <button
          type="button"
          id="tgenLogoutBtn"
        >
          ↪ Log Out
        </button>

      </div>
    `;


    wrapper.appendChild(avatar);
    wrapper.appendChild(dropdown);


    oldAccount.parentNode.appendChild(wrapper);


    // --------------------------------------------------------
    // AVATAR CLICK
    // --------------------------------------------------------

    avatar.addEventListener(
      "click",
      function (event) {

        event.stopPropagation();

        const menu =
          document.getElementById(
            "tgenProfileDropdown"
          );

        if (!menu) return;

        const isOpen =
          menu.style.display === "block";

        menu.style.display =
          isOpen ? "none" : "block";

      }
    );


    // --------------------------------------------------------
    // EDIT PROFILE
    // --------------------------------------------------------

    document
      .getElementById("tgenEditProfileBtn")
      ?.addEventListener(
        "click",
        function () {

          const menu =
            document.getElementById(
              "tgenProfileDropdown"
            );

          if (menu) {
            menu.style.display = "none";
          }


          if (typeof window.editProfile === "function") {
            window.editProfile();
          } else {

            // Fallback
            showScreen("profile");

            const saveButton =
              document.getElementById(
                "saveProfileBtn"
              );

            if (saveButton) {
              saveButton.textContent =
                "Save Changes";
            }

          }

        }
      );


    // --------------------------------------------------------
    // LOGOUT
    // --------------------------------------------------------

    document
      .getElementById("tgenLogoutBtn")
      ?.addEventListener(
        "click",
        function () {

          const menu =
            document.getElementById(
              "tgenProfileDropdown"
            );

          if (menu) {
            menu.style.display = "none";
          }


          if (
            typeof window.logout ===
            "function"
          ) {

            window.logout();

          }

        }
      );


    // Close when clicking elsewhere
    document.addEventListener(
      "click",
      function (event) {

        const menu =
          document.getElementById(
            "tgenProfileDropdown"
          );

        const profileMenu =
          document.getElementById(
            "tgenProfileMenu"
          );

        if (
          menu &&
          profileMenu &&
          !profileMenu.contains(event.target)
        ) {

          menu.style.display = "none";

        }

      }
    );


    updateProfileMenu();
  }


  // ----------------------------------------------------------
  // UPDATE PROFILE INFORMATION
  // ----------------------------------------------------------

  function updateProfileMenu() {

    const profile =
      window.userProfile ||
      userProfile;


    const avatar =
      document.getElementById(
        "tgenProfileAvatar"
      );

    const bigAvatar =
      document.getElementById(
        "tgenProfileBigAvatar"
      );

    const name =
      document.getElementById(
        "tgenProfileName"
      );

    const classEl =
      document.getElementById(
        "tgenProfileClass"
      );

    const department =
      document.getElementById(
        "tgenProfileDepartment"
      );

    const subjects =
      document.getElementById(
        "tgenProfileSubjects"
      );


    if (!profile) {

      if (avatar) {
        avatar.textContent = "T";
      }

      return;
    }


    const initials =
      getInitials(profile.name);


    if (avatar) {
      avatar.textContent = initials;
    }

    if (bigAvatar) {
      bigAvatar.textContent = initials;
    }

    if (name) {
      name.textContent =
        profile.name || "Student";
    }

    if (classEl) {
      classEl.textContent =
        profile.className || "Student";
    }

    if (department) {
      department.textContent =
        profile.department || "—";
    }

    if (subjects) {
      subjects.textContent =
        `${profile.subjects?.length || 0} selected`;
    }

  }


  // ----------------------------------------------------------
  // REMOVE CLASSES FROM NAVIGATION
  // ----------------------------------------------------------

  function removeClassesNavigation() {

    document
      .querySelectorAll(".main-nav button")
      .forEach(function (button) {

        const text =
          button.textContent
            .trim()
            .toLowerCase();

        if (text === "classes") {

          button.style.display =
            "none";

        }

      });


    // Also remove Classes from footer
    document
      .querySelectorAll(".footer-links button")
      .forEach(function (button) {

        const text =
          button.textContent
            .trim()
            .toLowerCase();

        if (text === "classes") {

          button.style.display =
            "none";

        }

      });

  }


  // ----------------------------------------------------------
  // PROFILE EDIT FUNCTION
  // ----------------------------------------------------------

  window.editProfile = function () {

    showScreen("profile");


    setTimeout(function () {

      const profile =
        window.userProfile ||
        userProfile;

      if (!profile) return;


      const nameInput =
        document.getElementById(
          "profileName"
        );

      const emailInput =
        document.getElementById(
          "profileEmail"
        );

      const classInput =
        document.getElementById(
          "profileClass"
        );

      const departmentInput =
        document.getElementById(
          "profileDepartment"
        );

      const examInput =
        document.getElementById(
          "profileExam"
        );


      if (nameInput) {
        nameInput.value =
          profile.name || "";
      }

      if (emailInput) {
        emailInput.value =
          profile.email || "";
      }

      if (classInput) {
        classInput.value =
          profile.className || "";
      }

      if (departmentInput) {
        departmentInput.value =
          profile.department || "";
      }

      if (examInput) {
        examInput.value =
          profile.exam || "";
      }


      // Re-render subjects
      if (
        typeof renderProfileSubjects ===
        "function"
      ) {

        selectedClass =
          profile.className;

        selectedDepartment =
          profile.department;

        renderProfileSubjects();

      }


      const saveButton =
        document.getElementById(
          "saveProfileBtn"
        );

      if (saveButton) {

        saveButton.textContent =
          "Save Changes";

      }

    }, 50);

  };


  // ----------------------------------------------------------
  // PROFILE SAVE REDIRECT FIX
  // ----------------------------------------------------------

  const originalSaveProfile =
    window.saveProfile;


  if (typeof originalSaveProfile === "function") {

    window.saveProfile =
      function () {

        originalSaveProfile();


        setTimeout(function () {

          updateProfileMenu();
          removeClassesNavigation();


          if (window.userProfile) {

            // Do NOT send the student to Classes.
            // Send them directly to their subjects.
            showScreen("subjects");

          }

        }, 100);

      };

  }


  // ----------------------------------------------------------
  // PROFILE CSS
  // ----------------------------------------------------------

  function addProfileStyles() {

    if (
      document.getElementById(
        "tgenProfileStyles"
      )
    ) return;


    const style =
      document.createElement("style");

    style.id =
      "tgenProfileStyles";


    style.textContent = `

      #tgenProfileMenu {
        position: relative;
        margin-left: 14px;
      }

      #tgenProfileAvatar {
        width: 46px;
        height: 46px;
        border-radius: 50%;
        border: 3px solid #ffffff;
        background: linear-gradient(
          135deg,
          #2563eb,
          #1d4ed8
        );
        color: #ffffff;
        font-size: 15px;
        font-weight: 800;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow:
          0 5px 18px rgba(37, 99, 235, 0.25);
        transition:
          transform 0.2s ease,
          box-shadow 0.2s ease;
      }

      #tgenProfileAvatar:hover {
        transform: translateY(-2px);
        box-shadow:
          0 8px 24px rgba(37, 99, 235, 0.3);
      }

      #tgenProfileDropdown {
        position: absolute;
        top: 58px;
        right: 0;
        width: 290px;
        background: #ffffff;
        border: 1px solid #e5e7eb;
        border-radius: 18px;
        box-shadow:
          0 20px 50px rgba(15, 23, 42, 0.16);
        padding: 16px;
        z-index: 9999;
        display: none;
      }

      .tgen-profile-header {
        display: flex;
        align-items: center;
        gap: 12px;
        padding-bottom: 15px;
        border-bottom: 1px solid #eef0f4;
      }

      .tgen-profile-big-avatar {
        width: 48px;
        height: 48px;
        min-width: 48px;
        border-radius: 50%;
        background: #2563eb;
        color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 800;
      }

      .tgen-profile-header-text {
        display: flex;
        flex-direction: column;
        gap: 3px;
      }

      .tgen-profile-header-text strong {
        color: #111827;
        font-size: 15px;
      }

      .tgen-profile-header-text span {
        color: #6b7280;
        font-size: 12px;
      }

      .tgen-profile-info {
        padding: 14px 0;
        display: grid;
        gap: 10px;
      }

      .tgen-profile-info div {
        display: flex;
        justify-content: space-between;
        gap: 15px;
      }

      .tgen-profile-info span {
        color: #9ca3af;
        font-size: 12px;
      }

      .tgen-profile-info strong {
        color: #374151;
        font-size: 12px;
        text-align: right;
      }

      .tgen-profile-actions {
        border-top: 1px solid #eef0f4;
        padding-top: 10px;
        display: grid;
        gap: 5px;
      }

      .tgen-profile-actions button {
        width: 100%;
        border: 0;
        background: transparent;
        padding: 11px 10px;
        border-radius: 10px;
        text-align: left;
        cursor: pointer;
        font-size: 13px;
        color: #374151;
      }

      .tgen-profile-actions button:hover {
        background: #f3f6fb;
      }

      @media (max-width: 700px) {

        #tgenProfileDropdown {
          right: -5px;
          width: 270px;
        }

      }

    `;


    document.head.appendChild(style);

  }


  // ----------------------------------------------------------
  // INITIALIZE
  // ----------------------------------------------------------

  function initializeProfileNavigation() {

    addProfileStyles();

    removeClassesNavigation();

    createProfileMenu();

    updateProfileMenu();

  }


  if (
    document.readyState ===
    "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      initializeProfileNavigation
    );

  } else {

    initializeProfileNavigation();

  }


  // Keep the profile updated
  window.addEventListener(
    "pageshow",
    function () {

      removeClassesNavigation();

      createProfileMenu();

      updateProfileMenu();

    }
  );

})();
// ==========================================================
// TGEN-AI — PERSONALIZED START LEARNING + TOPICS UI
// ==========================================================

(function () {

  // ----------------------------------------------------------
  // START LEARNING
  // ----------------------------------------------------------

  window.startLearning = function () {

    // No profile yet → create one
    if (!window.userProfile && !userProfile) {
      showScreen("profile");
      return;
    }

    // Load the saved profile
    const profile =
      window.userProfile || userProfile;

    // Make sure the class is loaded
    if (profile.className) {
      selectedClass = profile.className;
    }

    // Do NOT send the student to Classes.
    // Send them directly to their topics.
    selectedSubject = null;
    selectedTopic = null;

    renderPersonalizedTopics();

    showScreen("topics");

  };


  // ----------------------------------------------------------
  // PERSONALIZED TOPICS
  // ----------------------------------------------------------

  window.renderPersonalizedTopics = function () {

    const grid =
      document.getElementById("topicGrid");

    if (!grid) return;


    const profile =
      window.userProfile || userProfile;


    if (!profile || !profile.subjects) {

      grid.innerHTML = `
        <div class="tgen-topic-empty">
          <h3>Create your profile first</h3>
          <button
            class="primary-btn"
            onclick="showScreen('profile')"
          >
            Create Profile →
          </button>
        </div>
      `;

      return;
    }


    const subjects =
      profile.subjects;


    let topicCards = [];


    // Build topics from every subject
    subjects.forEach(function (subject) {

      let topics = [];


      if (
        typeof TGEN_TOPICS !== "undefined" &&
        TGEN_TOPICS[subject]
      ) {

        topics =
          TGEN_TOPICS[subject];

      }


      // Fallback to the existing curriculum
      if (
        topics.length === 0 &&
        typeof classData !== "undefined" &&
        classData[selectedClass]
      ) {

        const subjectData =
          classData[selectedClass]
            .subjects
            ?.find(
              item => item.name === subject
            );


        if (subjectData) {

          topics =
            subjectData.topics ||
            subjectData.topicList ||
            [];

        }

      }


      topics.forEach(function (topic, index) {

        topicCards.push({

          subject: subject,

          topic: topic,

          number:
            String(index + 1)
              .padStart(2, "0")

        });

      });

    });


    if (topicCards.length === 0) {

      grid.innerHTML = `
        <div class="tgen-topic-empty">

          <div class="tgen-topic-empty-icon">
            📚
          </div>

          <h3>
            No topics available yet
          </h3>

          <p>
            Your selected subjects don't have topics loaded yet.
          </p>

        </div>
      `;

      return;
    }


    // --------------------------------------------------------
    // RENDER TOPIC CARDS
    // --------------------------------------------------------

    grid.innerHTML =
      topicCards
        .map(function (item) {

          return `

            <button
              type="button"
              class="tgen-learning-topic-card"
              onclick="selectPersonalizedTopic(
                '${escapeAttribute(item.subject)}',
                '${escapeAttribute(item.topic)}'
              )"
            >

              <div class="tgen-topic-icon">
                📖
              </div>

              <div class="tgen-topic-main">

                <span class="tgen-topic-subject">
                  ${escapeHTML(item.subject)}
                </span>

                <h3>
                  ${escapeHTML(item.topic)}
                </h3>

                <span class="tgen-topic-level">
                  Beginner
                </span>

              </div>

              <div class="tgen-topic-arrow">
                →
              </div>

            </button>

          `;

        })
        .join("");

  };


  // ----------------------------------------------------------
  // SELECT TOPIC
  // ----------------------------------------------------------

  window.selectPersonalizedTopic =
    function (subject, topic) {

      selectedSubject = subject;

      selectedTopic = topic;


      // Track the topic
      if (
        typeof trackTopic === "function"
      ) {

        try {
          trackTopic();
        } catch (error) {
          console.warn(
            "TGEN-AI topic tracking skipped:",
            error
          );
        }

      }


      // Update study screen
      if (
        typeof renderStudyHeader ===
        "function"
      ) {

        renderStudyHeader();

      }


      showScreen("study");

    };


  // ----------------------------------------------------------
  // HIDE CLASSES AFTER PROFILE CREATION
  // ----------------------------------------------------------

  function hideClassesForProfile() {

    const profile =
      window.userProfile || userProfile;


    if (!profile) return;


    // Hide the entire Classes screen
    const classesScreen =
      document.getElementById("classes");

    if (classesScreen) {

      classesScreen.style.display =
        "none";

    }


    // Hide Classes navigation buttons
    document
      .querySelectorAll(
        ".main-nav button, nav button"
      )
      .forEach(function (button) {

        if (
          button.textContent
            .trim()
            .toLowerCase() === "classes"
        ) {

          button.style.display =
            "none";

        }

      });


    // Hide old "Change class" button
    const changeClass =
      document.getElementById(
        "changeClassBtn"
      );

    if (changeClass) {

      changeClass.style.display =
        "none";

    }

  }


  // ----------------------------------------------------------
  // UPDATE TOPICS PAGE HEADER
  // ----------------------------------------------------------

  function updateTopicsHeader() {

    const title =
      document.getElementById(
        "topicTitle"
      );

    if (title) {

      title.textContent =
        "Choose a topic";

    }


    const description =
      document.querySelector(
        "#topics .page-header p"
      );

    if (description) {

      description.textContent =
        "Choose something you want to learn today.";

    }


    // Remove the old STEP 3 label
    const eyebrow =
      document.querySelector(
        "#topics .page-eyebrow"
      );

    if (eyebrow) {

      eyebrow.textContent =
        "START LEARNING";

    }


    // Remove old back-to-subjects button
    const backButton =
      document.querySelector(
        "#topics .back-btn"
      );

    if (backButton) {

      backButton.style.display =
        "none";

    }

  }


  // ----------------------------------------------------------
  // TOPIC CARD STYLES
  // ----------------------------------------------------------

  function addTopicStyles() {

    if (
      document.getElementById(
        "tgenPersonalizedTopicStyles"
      )
    ) return;


    const style =
      document.createElement("style");


    style.id =
      "tgenPersonalizedTopicStyles";


    style.textContent = `

      #topics {
        background: #f6f8fc;
      }


      #topics .page-container {
        max-width: 1200px;
      }


      #topics .page-header {
        margin-bottom: 32px;
      }


      .tgen-learning-topic-card {

        width: 100%;

        min-height: 185px;

        border: none;

        border-radius: 26px;

        margin-bottom: 14px;

        padding: 28px 26px;

        display: flex;

        align-items: center;

        gap: 22px;

        text-align: left;

        cursor: pointer;

        position: relative;

        overflow: hidden;

        background:
          linear-gradient(
            135deg,
            #40579c 0%,
            #4d82c9 100%
          );

        color: white;

        box-shadow:
          0 12px 28px
          rgba(43, 73, 130, 0.16);

        transition:
          transform 0.2s ease,
          box-shadow 0.2s ease;

      }


      .tgen-learning-topic-card::before {

        content: "";

        position: absolute;

        width: 130px;
        height: 130px;

        border-radius: 50%;

        right: -35px;
        top: -55px;

        background:
          rgba(255,255,255,0.10);

      }


      .tgen-learning-topic-card::after {

        content: "";

        position: absolute;

        width: 90px;
        height: 90px;

        border-radius: 50%;

        right: 20px;
        bottom: -50px;

        background:
          rgba(255,255,255,0.08);

      }


      .tgen-learning-topic-card:hover {

        transform:
          translateY(-3px);

        box-shadow:
          0 18px 34px
          rgba(43, 73, 130, 0.23);

      }


      .tgen-topic-icon {

        width: 56px;
        height: 56px;

        min-width: 56px;

        border-radius: 16px;

        display: flex;

        align-items: center;
        justify-content: center;

        background:
          rgba(255,255,255,0.18);

        font-size: 27px;

        position: relative;

        z-index: 2;

      }


      .tgen-topic-main {

        flex: 1;

        position: relative;

        z-index: 2;

      }


      .tgen-topic-subject {

        display: block;

        font-size: 12px;

        font-weight: 700;

        opacity: 0.78;

        margin-bottom: 6px;

      }


      .tgen-topic-main h3 {

        margin: 0 0 12px;

        font-size: 23px;

        font-weight: 800;

        color: white;

      }


      .tgen-topic-level {

        display: inline-block;

        padding: 6px 13px;

        border-radius: 999px;

        background:
          rgba(255,255,255,0.18);

        font-size: 12px;

        font-weight: 700;

        color: white;

      }


      .tgen-topic-arrow {

        width: 48px;
        height: 48px;

        min-width: 48px;

        border-radius: 50%;

        display: flex;

        align-items: center;
        justify-content: center;

        background: white;

        color: #31598f;

        font-size: 24px;

        font-weight: 700;

        position: relative;

        z-index: 2;

      }


      .tgen-topic-empty {

        background: white;

        border-radius: 22px;

        padding: 45px;

        text-align: center;

      }


      .tgen-topic-empty-icon {

        font-size: 40px;

        margin-bottom: 12px;

      }


      @media (max-width: 700px) {

        .tgen-learning-topic-card {

          min-height: 150px;

          padding: 20px;

          gap: 15px;

        }


        .tgen-topic-main h3 {

          font-size: 18px;

        }


        .tgen-topic-icon {

          width: 48px;
          height: 48px;
          min-width: 48px;

        }


        .tgen-topic-arrow {

          width: 40px;
          height: 40px;
          min-width: 40px;

        }

      }

    `;


    document.head.appendChild(style);

  }


  // ----------------------------------------------------------
  // INITIALIZE
  // ----------------------------------------------------------

  function initializePersonalizedLearning() {

    addTopicStyles();

    hideClassesForProfile();

    updateTopicsHeader();

  }


  if (
    document.readyState ===
    "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      initializePersonalizedLearning
    );

  } else {

    initializePersonalizedLearning();

  }


  // Re-apply whenever the app navigates
  const originalShowScreen =
    window.showScreen;


  window.showScreen =
    function (screenId) {

      originalShowScreen(screenId);


      const profile =
        window.userProfile || userProfile;


      if (profile) {

        hideClassesForProfile();

      }


      if (screenId === "topics") {

        updateTopicsHeader();

        renderPersonalizedTopics();

      }

    };


})();
// ==========================================================
// TGEN-AI — NAVIGATION REPAIR + PERSONALIZED START LEARNING
// ==========================================================

window.showScreen = function (screenId) {

  const screens = document.querySelectorAll(".app-screen");

  screens.forEach(function (screen) {
    screen.classList.remove("active");
  });

  const target = document.getElementById(screenId);

  if (!target) {
    console.warn("TGEN-AI: Screen not found:", screenId);
    return;
  }

  target.classList.add("active");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  // Keep the existing progress system working
  if (typeof loadProgress === "function") {
    loadProgress();
  }

  // Quiz screen
  if (screenId === "quiz") {

    if (typeof openQuiz === "function") {
      openQuiz();
    }

  }

  // Topics screen
  if (screenId === "topics") {

    if (typeof renderPersonalizedTopics === "function") {

      try {
        renderPersonalizedTopics();
      } catch (error) {
        console.error(
          "TGEN-AI: Topic rendering error:",
          error
        );
      }

    }

  }

};


// ==========================================================
// START LEARNING
// ==========================================================

window.startLearning = function () {

  const profile =
    window.userProfile || userProfile;

  // No profile → create profile
  if (!profile) {

    showScreen("profile");

    return;
  }


  // Restore the student's class
  selectedClass =
    profile.className || selectedClass;


  // The student already selected everything.
  // DO NOT send them back to Classes.
  selectedSubject = null;
  selectedTopic = null;


  // Go straight to Topics
  showScreen("topics");

};


// ==========================================================
// REMOVE CLASSES FROM NAVIGATION
// ==========================================================

function tgenHideClasses() {

  document
    .querySelectorAll(".main-nav button")
    .forEach(function (button) {

      if (
        button.textContent
          .trim()
          .toLowerCase() === "classes"
      ) {

        button.style.display = "none";

      }

    });


  document
    .querySelectorAll(".footer-links button")
    .forEach(function (button) {

      if (
        button.textContent
          .trim()
          .toLowerCase() === "classes"
      ) {

        button.style.display = "none";

      }

    });

}


if (
  (window.userProfile || userProfile)
) {

  tgenHideClasses();

}
// ==========================================================
// TGEN-AI FINAL START LEARNING FIX
// Start Learning -> Personalized Topics
// Does NOT use the old Classes screen
// ==========================================================

(function () {

  function getTGENProfile() {
    try {
      return JSON.parse(
        localStorage.getItem("tgen-ai-profile") || "null"
      );
    } catch (error) {
      console.error("TGEN-AI profile error:", error);
      return null;
    }
  }

  function activateTGENScreen(screenId) {
    const screens = document.querySelectorAll(".app-screen");

    screens.forEach(function (screen) {
      screen.classList.remove("active");
      screen.style.display = "none";
    });

    const screen = document.getElementById(screenId);

    if (!screen) {
      console.error("TGEN-AI: Cannot find screen:", screenId);
      return;
    }

    screen.classList.add("active");
    screen.style.display = "block";

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  // ----------------------------------------------------------
  // GET TOPICS FOR A SUBJECT
  // ----------------------------------------------------------

  function getTopicsForSubject(subjectName, className) {

    if (
      typeof classData !== "undefined" &&
      classData[className] &&
      Array.isArray(classData[className].subjects)
    ) {
      const subject = classData[className].subjects.find(
        function (item) {
          return item.name === subjectName;
        }
      );

      if (
        subject &&
        Array.isArray(subject.topics) &&
        subject.topics.length
      ) {
        return subject.topics;
      }
    }

    return [
      "Introduction",
      "Key Concepts",
      "Important Terms",
      "Examples",
      "Applications",
      "Practice",
      "Problem Solving",
      "Revision",
      "Exam Questions",
      "Summary"
    ];
  }

  // ----------------------------------------------------------
  // RENDER PERSONALIZED TOPICS
  // ----------------------------------------------------------

  function renderTGENPersonalizedTopics() {

    const profile = getTGENProfile();
    const grid = document.getElementById("topicGrid");

    if (!grid) {
      console.error("TGEN-AI: topicGrid was not found.");
      return;
    }

    if (!profile) {
      activateTGENScreen("profile");
      return;
    }

    const className = profile.className || profile.class || "SS1";

    const subjects = Array.isArray(profile.subjects)
      ? profile.subjects
      : [];

    if (!subjects.length) {

      grid.innerHTML = `
        <div style="
          grid-column:1/-1;
          text-align:center;
          padding:60px 20px;
          background:white;
          border:1px solid #dbe3f0;
          border-radius:24px;
        ">
          <div style="font-size:3rem;margin-bottom:15px;">📚</div>

          <h2 style="margin-bottom:10px;">
            No subjects selected
          </h2>

          <p style="color:#64748b;margin-bottom:20px;">
            Edit your profile and choose the subjects you offer.
          </p>

          <button
            class="primary-btn"
            type="button"
            onclick="showScreen('profile')"
          >
            Edit Profile →
          </button>
        </div>
      `;

      activateTGENScreen("topics");
      return;
    }

    let html = "";

    subjects.forEach(function (subjectName) {

      const topics = getTopicsForSubject(
        subjectName,
        className
      );

      html += `
        <div style="
          grid-column:1/-1;
          margin-top:24px;
          margin-bottom:4px;
        ">
          <div style="
            display:flex;
            align-items:center;
            gap:10px;
            font-size:0.82rem;
            font-weight:800;
            color:#64748b;
            text-transform:uppercase;
            letter-spacing:0.08em;
          ">
            <span>📚</span>
            <span>${escapeHTML(subjectName)}</span>
          </div>
        </div>
      `;

      topics.forEach(function (topic, index) {

        const safeSubject =
          String(subjectName)
            .replace(/\\/g, "\\\\")
            .replace(/'/g, "\\'");

        const safeTopic =
          String(topic)
            .replace(/\\/g, "\\\\")
            .replace(/'/g, "\\'");

        html += `
          <button
            type="button"
            class="tgen-learning-topic-card"
            onclick="selectTGENPersonalizedTopic('${safeSubject}', '${safeTopic}')"
          >

            <div class="tgen-topic-left">

              <div class="tgen-topic-icon">
                📖
              </div>

              <div class="tgen-topic-content">

                <span class="tgen-topic-subject">
                  ${escapeHTML(subjectName)}
                </span>

                <h3>
                  ${escapeHTML(topic)}
                </h3>

                <span class="tgen-topic-level">
                  Beginner
                </span>

              </div>

            </div>

            <div class="tgen-topic-arrow">
              →
            </div>

          </button>
        `;
      });
    });

    grid.innerHTML = html;

    const title = document.getElementById("topicTitle");

    if (title) {
      title.textContent = "What do you want to learn?";
    }

    const description =
      document.querySelector("#topics .page-header p");

    if (description) {
      description.textContent =
        "Choose a subject and topic to start learning with TGEN-AI.";
    }

    // Hide old Back button
    const backButton =
      document.querySelector("#topics .back-btn");

    if (backButton) {
      backButton.style.display = "none";
    }

    activateTGENScreen("topics");

    console.log(
      "TGEN-AI: Personalized topics loaded:",
      subjects
    );
  }

  // ----------------------------------------------------------
  // SELECT TOPIC
  // ----------------------------------------------------------

  window.selectTGENPersonalizedTopic =
    function (subjectName, topicName) {

      selectedSubject = subjectName;
      selectedTopic = topicName;

      const profile = getTGENProfile();

      if (profile) {
        selectedClass =
          profile.className ||
          profile.class ||
          selectedClass;
      }

      if (
        typeof renderStudyHeader === "function"
      ) {
        renderStudyHeader();
      }

      activateTGENScreen("study");

      console.log(
        "TGEN-AI topic selected:",
        subjectName,
        topicName
      );
    };

  // ----------------------------------------------------------
  // START LEARNING
  // ----------------------------------------------------------

  window.startLearning = function () {

    const profile = getTGENProfile();

    if (!profile) {
      activateTGENScreen("profile");
      return;
    }

    selectedClass =
      profile.className ||
      profile.class ||
      selectedClass;

    selectedDepartment =
      profile.department ||
      selectedDepartment;

    selectedSubject = null;
    selectedTopic = null;

    renderTGENPersonalizedTopics();
  };

  // ----------------------------------------------------------
  // REMOVE CLASSES FROM NAVIGATION
  // ----------------------------------------------------------

  function hideOldClassesButtons() {

    document
      .querySelectorAll(".main-nav button, .footer-links button")
      .forEach(function (button) {

        if (
          button.textContent
            .trim()
            .toLowerCase() === "classes"
        ) {
          button.style.display = "none";
        }

      });

    const classScreen =
      document.getElementById("classes");

    if (classScreen) {
      classScreen.style.display = "none";
    }
  }

  // ----------------------------------------------------------
  // REPLACE OLD START LEARNING BUTTON
  // ----------------------------------------------------------

  function fixStartLearningButton() {

    const buttons =
      document.querySelectorAll(".hero-actions .primary-btn");

    buttons.forEach(function (oldButton) {

      if (
        oldButton.textContent
          .toLowerCase()
          .includes("start learning")
      ) {

        const newButton =
          oldButton.cloneNode(true);

        newButton.removeAttribute("onclick");

        oldButton.parentNode.replaceChild(
          newButton,
          oldButton
        );

        newButton.addEventListener(
          "click",
          function (event) {

            event.preventDefault();
            event.stopPropagation();

            window.startLearning();

          }
        );
      }
    });
  }

  // ----------------------------------------------------------
  // TOPIC CARD STYLES
  // ----------------------------------------------------------

  function addTGENTopicStyles() {

    if (document.getElementById("tgen-topic-styles")) {
      return;
    }

    const style =
      document.createElement("style");

    style.id = "tgen-topic-styles";

    style.textContent = `

      .tgen-learning-topic-card {
        width: 100%;
        min-height: 125px;

        display: flex;
        align-items: center;
        justify-content: space-between;

        gap: 20px;

        margin-bottom: 16px;
        padding: 22px 26px;

        border: none;
        border-radius: 22px;

        background:
          linear-gradient(
            135deg,
            #2563eb 0%,
            #3b82f6 55%,
            #60a5fa 100%
          );

        color: white;

        cursor: pointer;

        text-align: left;

        box-shadow:
          0 12px 28px rgba(37,99,235,0.18);

        transition:
          transform 0.2s ease,
          box-shadow 0.2s ease;
      }

      .tgen-learning-topic-card:hover {
        transform: translateY(-3px);

        box-shadow:
          0 18px 35px rgba(37,99,235,0.25);
      }

      .tgen-topic-left {
        display: flex;
        align-items: center;
        gap: 18px;
        min-width: 0;
      }

      .tgen-topic-icon {
        width: 58px;
        height: 58px;

        flex-shrink: 0;

        display: grid;
        place-items: center;

        border-radius: 17px;

        background: rgba(255,255,255,0.18);

        font-size: 1.65rem;
      }

      .tgen-topic-content {
        min-width: 0;
      }

      .tgen-topic-subject {
        display: block;

        margin-bottom: 4px;

        font-size: 0.76rem;
        font-weight: 700;

        opacity: 0.82;

        text-transform: uppercase;
        letter-spacing: 0.06em;
      }

      .tgen-topic-content h3 {
        margin: 0 0 9px;

        color: white;

        font-size: 1.35rem;
        font-weight: 800;

        line-height: 1.25;
      }

      .tgen-topic-level {
        display: inline-flex;
        align-items: center;

        padding: 5px 10px;

        border-radius: 999px;

        background: rgba(255,255,255,0.18);

        color: white;

        font-size: 0.75rem;
        font-weight: 700;
      }

      .tgen-topic-arrow {
        flex-shrink: 0;

        width: 44px;
        height: 44px;

        display: grid;
        place-items: center;

        border-radius: 50%;

        background: rgba(255,255,255,0.18);

        font-size: 1.4rem;
        font-weight: 800;
      }

      @media (max-width: 600px) {

        .tgen-learning-topic-card {
          padding: 18px;
          min-height: 105px;
        }

        .tgen-topic-icon {
          width: 48px;
          height: 48px;
        }

        .tgen-topic-content h3 {
          font-size: 1.05rem;
        }

        .tgen-topic-arrow {
          width: 38px;
          height: 38px;
        }
      }

    `;

    document.head.appendChild(style);
  }

  // ----------------------------------------------------------
  // INITIALISE
  // ----------------------------------------------------------

  function initialiseTGENStartFix() {

    addTGENTopicStyles();
    fixStartLearningButton();
    hideOldClassesButtons();

    console.log(
      "TGEN-AI: FINAL Start Learning system loaded."
    );
  }

  if (
    document.readyState === "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      initialiseTGENStartFix
    );

  } else {

    initialiseTGENStartFix();

  }

})();
// ==========================================================
// TGEN-AI — FINAL QUIZ GENERATOR FIX
// Generates 10 questions for ANY selected profile subject
// ==========================================================

(function () {

  window.quizQuestions = [];
  window.quizAnswers = {};

  function getQuizProfile() {
    try {
      return JSON.parse(
        localStorage.getItem("tgen-ai-profile") || "null"
      );
    } catch (error) {
      return null;
    }
  }

  function getQuizSubject() {

    if (typeof selectedSubject !== "undefined" && selectedSubject) {
      return selectedSubject;
    }

    const profile = getQuizProfile();

    if (
      profile &&
      Array.isArray(profile.subjects) &&
      profile.subjects.length
    ) {
      return profile.subjects[0];
    }

    return null;
  }

  function getQuizClass() {

    if (typeof selectedClass !== "undefined" && selectedClass) {
      return selectedClass;
    }

    const profile = getQuizProfile();

    return (
      profile?.className ||
      profile?.class ||
      "SS1"
    );
  }

  function createFallbackQuestions(subject) {

    const topics = {
      "English Language": [
        "Grammar",
        "Comprehension",
        "Vocabulary",
        "Summary Writing",
        "Essay Writing",
        "Letter Writing",
        "Oral English",
        "Figures of Speech",
        "Parts of Speech",
        "Sentence Structure"
      ],

      "General Mathematics": [
        "Number Bases",
        "Indices",
        "Logarithms",
        "Algebra",
        "Equations",
        "Geometry",
        "Statistics",
        "Probability",
        "Mensuration",
        "Trigonometry"
      ],

      "Biology": [
        "Cell Biology",
        "Nutrition",
        "Transport",
        "Respiration",
        "Ecology",
        "Classification",
        "Reproduction",
        "Genetics",
        "Evolution",
        "Health"
      ],

      "Chemistry": [
        "Atomic Structure",
        "Periodic Table",
        "Chemical Bonding",
        "Mole Concept",
        "Acids and Bases",
        "Organic Chemistry",
        "Chemical Reactions",
        "Electrochemistry",
        "Separation Techniques",
        "States of Matter"
      ],

      "Physics": [
        "Measurement",
        "Motion",
        "Forces",
        "Energy",
        "Heat",
        "Waves",
        "Electricity",
        "Magnetism",
        "Light",
        "Sound"
      ],

      "Economics": [
        "Basic Economic Concepts",
        "Demand",
        "Supply",
        "Production",
        "Factors of Production",
        "Markets",
        "Money",
        "Inflation",
        "Unemployment",
        "National Income"
      ],

      "Government": [
        "Government",
        "Political Institutions",
        "Democracy",
        "Constitution",
        "Citizenship",
        "Political Parties",
        "Elections",
        "Rule of Law",
        "Public Administration",
        "Human Rights"
      ],

      "Commerce": [
        "Commerce",
        "Trade",
        "Home Trade",
        "Foreign Trade",
        "Retail Trade",
        "Wholesale Trade",
        "Transportation",
        "Communication",
        "Banking",
        "Insurance"
      ],

      "Financial Accounting": [
        "Accounting Concepts",
        "Source Documents",
        "Books of Original Entry",
        "Ledger",
        "Cash Book",
        "Trial Balance",
        "Final Accounts",
        "Bank Reconciliation",
        "Depreciation",
        "Capital and Revenue"
      ],

      "Literature-in-English": [
        "Prose",
        "Poetry",
        "Drama",
        "Literary Devices",
        "Characterization",
        "Plot",
        "Theme",
        "Setting",
        "Conflict",
        "Narrative Techniques"
      ],

      "Geography": [
        "Map Reading",
        "Weather",
        "Climate",
        "Rocks",
        "Landforms",
        "Population",
        "Settlement",
        "Economic Geography",
        "Environmental Resources",
        "Transportation"
      ]
    };

    const subjectTopics =
      topics[subject] ||
      [
        "Introduction",
        "Key Concepts",
        "Important Terms",
        "Examples",
        "Applications",
        "Practice",
        "Problem Solving",
        "Revision",
        "Exam Preparation",
        "Summary"
      ];

    return subjectTopics.map(function (topic, index) {

      return {
        id: "generated-" + index,

        question:
          "Which of the following topics is part of " +
          subject +
          "?",

        options: [
          topic,
          "Advanced Road Construction",
          "Marine Navigation Systems",
          "International Aviation Law"
        ],

        answer: topic
      };

    });
  }

  window.generateQuiz = function () {

    const quizList =
      document.getElementById("quizList");

    const generateBtn =
      document.getElementById("generateQuizBtn");

    const submitBtn =
      document.getElementById("submitQuizBtn");

    const result =
      document.getElementById("quizResult");

    const nextBtn =
      document.getElementById("quizNextBtn");

    const counter =
      document.getElementById("questionCounter");

    if (!quizList) {
      console.error(
        "TGEN-AI: quizList was not found."
      );
      return;
    }

    const subject = getQuizSubject();
    const className = getQuizClass();

    if (!subject) {

      quizList.innerHTML = `
        <div class="quiz-item">

          <h3>Select a subject first</h3>

          <p>
            Choose one of your profile subjects before generating a quiz.
          </p>

          <button
            class="primary-btn"
            type="button"
            onclick="showScreen('profile')"
          >
            Edit Profile →
          </button>

        </div>
      `;

      return;
    }

    let questions = [];

    // Try the existing quiz bank first
    try {

      if (
        typeof quizBank !== "undefined" &&
        quizBank[className] &&
        Array.isArray(quizBank[className][subject])
      ) {

        questions =
          quizBank[className][subject].slice();

      }

    } catch (error) {

      console.warn(
        "TGEN-AI: Existing quiz bank unavailable.",
        error
      );

    }

    // If there aren't enough questions,
    // create fallback questions.
    if (questions.length < 10) {

      const fallback =
        createFallbackQuestions(subject);

      questions =
        questions.concat(fallback);

    }

    // Always make the quiz exactly 10 questions.
    questions =
      questions.slice(0, 10);

    window.quizQuestions = questions;
    window.quizAnswers = {};

    if (typeof quizStarted !== "undefined") {
      quizStarted = true;
    }

    if (typeof quizSubmitted !== "undefined") {
      quizSubmitted = false;
    }

    if (typeof currentQuizScore !== "undefined") {
      currentQuizScore = 0;
    }

    if (result) {
      result.innerHTML = "";
      result.style.display = "none";
    }

    if (nextBtn) {
      nextBtn.style.display = "none";
    }

    if (submitBtn) {
      submitBtn.style.display = "inline-flex";
    }

    if (generateBtn) {
      generateBtn.style.display = "none";
    }

    quizList.innerHTML = questions
      .map(function (question, index) {

        return `
          <div
            class="quiz-item"
            id="quiz-${index}"
          >

            <p class="quiz-question-text">
              ${index + 1}. ${escapeHTML(question.question)}
            </p>

            <div class="quiz-options">

              ${question.options
                .map(function (option, optionIndex) {

                  return `
                    <label class="quiz-option">

                      <input
                        type="radio"
                        name="tgen-quiz-${index}"
                        value="${escapeAttribute(option)}"
                      />

                      <span>
                        ${String.fromCharCode(65 + optionIndex)}.
                        ${escapeHTML(option)}
                      </span>

                    </label>
                  `;

                })
                .join("")}

            </div>

          </div>
        `;

      })
      .join("");

    if (counter) {
      counter.textContent =
        "0 of " + questions.length + " answered";
    }

    const subjectTitle =
      document.getElementById("quizSubjectTitle");

    if (subjectTitle) {
      subjectTitle.textContent =
        subject + " Quiz";
    }

    console.log(
      "TGEN-AI: Generated",
      questions.length,
      "questions for",
      subject
    );
  };


  // ==========================================================
  // FINAL SUBMIT QUIZ
  // ==========================================================

  window.submitQuiz = function () {

    const questions =
      window.quizQuestions || [];

    if (!questions.length) {

      alert(
        "Generate a quiz first."
      );

      return;
    }

    let score = 0;
    let answered = 0;

    questions.forEach(function (question, index) {

      const selected =
        document.querySelector(
          `input[name="tgen-quiz-${index}"]:checked`
        );

      if (!selected) {
        return;
      }

      answered++;

      window.quizAnswers[index] =
        selected.value;

      if (
        selected.value === question.answer
      ) {
        score++;
      }

    });

    if (answered < questions.length) {

      alert(
        "Please answer all " +
        questions.length +
        " questions before submitting."
      );

      return;
    }

    const percentage =
      Math.round(
        (score / questions.length) * 100
      );

    const result =
      document.getElementById("quizResult");

    if (result) {

      result.innerHTML = `
        <div class="quiz-result-card">

          <h2>Quiz Complete!</h2>

          <div class="quiz-score">
            ${score}/${questions.length}
          </div>

          <p>
            You scored
            <strong>${percentage}%</strong>
          </p>

          <p>
            ${
              percentage >= 80
                ? "Excellent work! Keep it up."
                : percentage >= 60
                ? "Good job! Review the questions you missed."
                : "Keep practising. You’ve got this."
            }
          </p>

        </div>
      `;

      result.style.display = "block";
    }

    const submitBtn =
      document.getElementById(
        "submitQuizBtn"
      );

    if (submitBtn) {
      submitBtn.style.display = "none";
    }

    const nextBtn =
      document.getElementById(
        "quizNextBtn"
      );

    if (nextBtn) {
      nextBtn.style.display = "inline-flex";
    }

    const counter =
      document.getElementById(
        "questionCounter"
      );

    if (counter) {
      counter.textContent =
        score +
        "/" +
        questions.length +
        " correct";
    }

    console.log(
      "TGEN-AI: Quiz submitted — " +
      score +
      "/" +
      questions.length
    );
  };


  // ==========================================================
  // CONNECT BUTTONS AFTER PAGE LOAD
  // ==========================================================

  function connectQuizButtons() {

    const generateBtn =
      document.getElementById(
        "generateQuizBtn"
      );

    if (generateBtn) {

      const newGenerateBtn =
        generateBtn.cloneNode(true);

      generateBtn.parentNode.replaceChild(
        newGenerateBtn,
        generateBtn
      );

      newGenerateBtn.addEventListener(
        "click",
        function (event) {

          event.preventDefault();
          event.stopPropagation();

          window.generateQuiz();

        }
      );
    }

    const submitBtn =
      document.getElementById(
        "submitQuizBtn"
      );

    if (submitBtn) {

      const newSubmitBtn =
        submitBtn.cloneNode(true);

      submitBtn.parentNode.replaceChild(
        newSubmitBtn,
        submitBtn
      );

      newSubmitBtn.addEventListener(
        "click",
        function (event) {

          event.preventDefault();
          event.stopPropagation();

          window.submitQuiz();

        }
      );
    }

  }


  if (
    document.readyState === "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      connectQuizButtons
    );

  } else {

    connectQuizButtons();

  }

  console.log(
    "TGEN-AI: Quiz system fixed."
  );

})();
// ============================================================
// TGEN-AI — FINAL PROFILE + QUIZ REPAIR
// Paste this at the VERY BOTTOM of app.js
// ============================================================

(function () {
  "use strict";

  const PROFILE_KEY = "tgen-ai-profile";

  function el(id) {
    return document.getElementById(id);
  }

  // ------------------------------------------------------------
  // PROFILE
  // ------------------------------------------------------------

  function getProfile() {
    try {
      const saved = localStorage.getItem(PROFILE_KEY);

      if (!saved) return null;

      const profile = JSON.parse(saved);

      if (!profile || typeof profile !== "object") {
        return null;
      }

      // Support both old and new profile formats.
      profile.className =
        profile.className ||
        profile.class ||
        "";

      profile.class =
        profile.class ||
        profile.className ||
        "";

      profile.subjects =
        Array.isArray(profile.subjects)
          ? profile.subjects
          : [];

      return profile;

    } catch (error) {
      console.error("TGEN-AI profile error:", error);
      return null;
    }
  }

  function setProfile(profile) {
    userProfile = profile;
    window.userProfile = profile;
  }

  function safeEscape(value) {
    if (typeof escapeHTML === "function") {
      return escapeHTML(value);
    }

    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // ------------------------------------------------------------
  // CLEAR PROFILE FORM
  // ------------------------------------------------------------

  function clearProfileForm() {

    const name = el("profileName");
    const email = el("profileEmail");
    const classSelect = el("profileClass");
    const department = el("profileDepartment");
    const exam = el("profileExam");
    const subjects = el("profileSubjects");
    const error = el("profileError");

    if (name) name.value = "";
    if (email) email.value = "";
    if (classSelect) classSelect.value = "";
    if (department) department.value = "";
    if (exam) exam.value = "";

    if (subjects) {
      subjects.innerHTML =
        "<p>Select your class and department first.</p>";
    }

    if (error) {
      error.textContent = "";
      error.style.display = "none";
    }

    const examWrapper =
      el("examTargetWrapper");

    if (examWrapper) {
      examWrapper.style.display = "none";
    }
  }

  // ------------------------------------------------------------
  // PROFILE SUBJECTS
  // ------------------------------------------------------------

  function renderSafeProfileSubjects() {

    const box =
      el("profileSubjects");

    const classSelect =
      el("profileClass");

    const departmentSelect =
      el("profileDepartment");

    if (!box) return;

    if (
      !classSelect ||
      !classSelect.value ||
      !departmentSelect ||
      !departmentSelect.value
    ) {
      box.innerHTML =
        "<p>Select your class and department first.</p>";

      return;
    }

    let groups = null;

    if (typeof profileSubjectGroups !== "undefined") {
      groups = profileSubjectGroups;
    }

    if (
      !groups &&
      typeof departments !== "undefined"
    ) {
      groups = Object.fromEntries(
        Object.entries(departments).map(
          ([name, data]) => [
            name,
            data.subjects || []
          ]
        )
      );
    }

    const subjects =
      groups?.[departmentSelect.value] || [];

    const savedProfile =
      getProfile();

    const selected =
      new Set(
        savedProfile?.subjects || []
      );

    box.innerHTML = subjects.length
      ? subjects.map(subject => `
          <label
            style="
              display:flex;
              align-items:center;
              gap:10px;
              padding:13px 14px;
              border:1px solid #dbe3f0;
              border-radius:12px;
              cursor:pointer;
              background:#fff;
              margin-bottom:8px;
            "
          >
            <input
              type="checkbox"
              name="offeredSubject"
              value="${safeEscape(subject)}"
              ${selected.has(subject) ? "checked" : ""}
              style="
                width:18px;
                height:18px;
              "
            >

            <span>
              ${safeEscape(subject)}
            </span>
          </label>
        `).join("")
      : "<p>No subjects are available for this department yet.</p>";
  }

  // ------------------------------------------------------------
  // SAVE PROFILE
  // ------------------------------------------------------------

  function saveProfileSafe() {

    const name =
      el("profileName")?.value.trim() || "";

    const email =
      el("profileEmail")?.value.trim() || "";

    const className =
      el("profileClass")?.value || "";

    const department =
      el("profileDepartment")?.value || "";

    const exam =
      className === "SS3"
        ? (el("profileExam")?.value || "")
        : "";

    const subjects = [
      ...document.querySelectorAll(
        'input[name="offeredSubject"]:checked'
      )
    ].map(input => input.value);

    const error =
      el("profileError");

    function fail(message) {

      if (error) {
        error.textContent = message;
        error.style.display = "block";
      }
    }

    if (!name) {
      fail("Please enter your name.");
      return;
    }

    if (
      !email ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      fail("Please enter a valid email address.");
      return;
    }

    if (!className) {
      fail("Please select your class.");
      return;
    }

    if (!department) {
      fail("Please select your department.");
      return;
    }

    if (className === "SS3" && !exam) {
      fail("Please choose what you are studying for.");
      return;
    }

    if (!subjects.length) {
      fail("Select at least one subject you offer.");
      return;
    }

    const oldProfile =
      getProfile();

    const profile = {
      name: name,
      email: email,

      // Keep BOTH names so old code and new code work.
      className: className,
      class: className,

      department: department,
      exam: exam,
      subjects: subjects,

      createdAt:
        oldProfile?.createdAt ||
        new Date().toISOString()
    };

    localStorage.setItem(
      PROFILE_KEY,
      JSON.stringify(profile)
    );

    setProfile(profile);

    selectedClass = className;
    selectedDepartment = department;
    selectedSubject = null;
    selectedTopic = null;

    if (error) {
      error.style.display = "none";
    }

    if (typeof renderClasses === "function") {
      renderClasses();
    }

    if (typeof renderSubjects === "function") {
      renderSubjects();
    }

    // Go directly to topics after creating profile.
    window.startLearning();
  }

  window.saveProfile =
    saveProfileSafe;

  // ------------------------------------------------------------
  // LOG OUT
  // ------------------------------------------------------------

  function logoutSafe() {

    localStorage.removeItem(
      PROFILE_KEY
    );

    setProfile(null);

    selectedClass = "";
    selectedDepartment = "";
    selectedSubject = null;
    selectedTopic = null;

    window.quizQuestions = [];
    window.quizAnswers = {};

    clearProfileForm();

    [
      "subjectGrid",
      "topicGrid",
      "classGrid",
      "progressSubjects",
      "quizList"
    ].forEach(id => {

      const node = el(id);

      if (node) {
        node.innerHTML = "";
      }
    });

    const account =
      el("accountBtn");

    if (account) {
      account.style.display = "none";
    }

    // IMPORTANT:
    // After logout, immediately show Create Profile.
    if (typeof showScreen === "function") {
      showScreen("profile");
    }
  }

  window.logout =
    logoutSafe;

  // ------------------------------------------------------------
  // START LEARNING
  // ------------------------------------------------------------

  window.startLearning =
    function () {

      const profile =
        getProfile();

      if (!profile) {

        setProfile(null);

        if (typeof showScreen === "function") {
          showScreen("profile");
        }

        return;
      }

      setProfile(profile);

      selectedClass =
        profile.className ||
        profile.class ||
        "";

      selectedDepartment =
        profile.department ||
        "";

      selectedSubject = null;
      selectedTopic = null;

      if (
        typeof renderPersonalizedTopics ===
        "function"
      ) {
        renderPersonalizedTopics();

      } else if (
        typeof renderTopics ===
        "function"
      ) {
        renderTopics();
      }

      if (typeof showScreen === "function") {
        showScreen("topics");
      }
    };

  // ------------------------------------------------------------
  // QUIZ
  // ------------------------------------------------------------

  let safeQuizQuestions = [];
  let safeQuizAnswers = {};

  const quizTopics = {

    "English Language": [
      "Parts of Speech",
      "Comprehension",
      "Grammar",
      "Vocabulary",
      "Summary Writing",
      "Essay Writing"
    ],

    "General Mathematics": [
      "Number Bases",
      "Indices",
      "Logarithms",
      "Algebra",
      "Quadratic Equations",
      "Sets",
      "Probability",
      "Trigonometry",
      "Statistics"
    ],

    "Mathematics": [
      "Number Bases",
      "Indices",
      "Algebra",
      "Quadratic Equations",
      "Sets",
      "Probability",
      "Trigonometry",
      "Statistics"
    ],

    "Biology": [
      "The Cell",
      "Nutrition",
      "Classification",
      "Ecology",
      "Reproduction",
      "Genetics",
      "Evolution",
      "Human Health"
    ],

    "Chemistry": [
      "Matter",
      "Atomic Structure",
      "Elements",
      "Compounds",
      "Chemical Reactions",
      "Acids and Bases",
      "Electrolysis",
      "Organic Chemistry"
    ],

    "Physics": [
      "Measurement",
      "Motion",
      "Force",
      "Energy",
      "Work",
      "Electricity",
      "Waves",
      "Magnetism"
    ],

    "Digital Technologies": [
      "Computer Hardware",
      "Computer Software",
      "Algorithms",
      "Data Representation",
      "Databases",
      "Programming",
      "Networking",
      "Cyber Safety"
    ],

    "Computer Science": [
      "Algorithms",
      "Computer Hardware",
      "Software",
      "Programming",
      "Databases",
      "Networking"
    ],

    "Economics": [
      "Demand",
      "Supply",
      "Production",
      "Markets",
      "National Income",
      "Inflation",
      "Unemployment",
      "Money"
    ],

    "Government": [
      "Democracy",
      "Constitution",
      "Citizenship",
      "Political Parties",
      "Elections",
      "Separation of Powers",
      "Rule of Law",
      "Human Rights"
    ],

    "Commerce": [
      "Trade",
      "Retail",
      "Wholesale",
      "Transportation",
      "Insurance",
      "Banking",
      "Advertising",
      "Business Documents"
    ],

    "Financial Accounting": [
      "Accounting Concepts",
      "Source Documents",
      "Double Entry",
      "Ledger",
      "Trial Balance",
      "Cash Book",
      "Final Accounts",
      "Depreciation"
    ],

    "Geography": [
      "Map Reading",
      "Weather",
      "Climate",
      "Population",
      "Settlement",
      "Resources",
      "Agriculture",
      "Industry"
    ],

    "Literature-in-English": [
      "Plot",
      "Character",
      "Setting",
      "Theme",
      "Poetry",
      "Drama",
      "Prose",
      "Figures of Speech"
    ]
  };

  function getQuizSubject() {

    const profile =
      getProfile();

    if (
      !selectedSubject &&
      profile?.subjects?.length
    ) {
      selectedSubject =
        profile.subjects[0];
    }

    return (
      selectedSubject ||
      "English Language"
    );
  }

  function getQuizTopics(subject) {

    if (
      typeof TGEN_TOPICS !== "undefined" &&
      TGEN_TOPICS?.[subject]?.length
    ) {
      return TGEN_TOPICS[subject];
    }

    return (
      quizTopics[subject] ||
      [
        "Introduction",
        "Key Concepts",
        "Definitions",
        "Examples",
        "Practice",
        "Revision"
      ]
    );
  }

  function buildQuiz(subject) {

    const topics =
      getQuizTopics(subject);

    const existingQuestions =
      typeof quizBank !== "undefined"
        ? (
            quizBank?.[selectedClass]?.[subject] ||
            []
          )
        : [];

    const questions = [];

    // Use existing questions first.
    existingQuestions.forEach(q => {

      if (
        questions.length >= 10
      ) {
        return;
      }

      if (
        q &&
        q.question &&
        Array.isArray(q.options) &&
        q.options.length >= 4 &&
        q.answer !== undefined
      ) {

        questions.push({
          question: q.question,
          options: q.options.slice(0, 4),
          answer: q.answer
        });
      }
    });

    // Fill remaining questions.
    let i = 0;

    while (
      questions.length < 10 &&
      i < 50
    ) {

      const topic =
        topics[i % topics.length];

      const question =
        `Which topic is included in ${subject}?`;

      if (
        !questions.some(
          q => q.question === question
        )
      ) {

        questions.push({

          question:
            question,

          options: [
            topic,
            "An unrelated topic",
            "A random activity",
            "An unrelated subject"
          ],

          answer: topic
        });
      }

      i++;
    }

    return questions.slice(0, 10);
  }

  function generateQuizSafe() {

    const profile =
      getProfile();

    if (!profile) {

      showScreen("profile");

      return;
    }

    setProfile(profile);

    selectedClass =
      profile.className ||
      profile.class ||
      selectedClass;

    const subject =
      getQuizSubject();

    safeQuizQuestions =
      buildQuiz(subject);

    safeQuizAnswers = {};

    window.quizQuestions =
      safeQuizQuestions;

    window.quizAnswers =
      safeQuizAnswers;

    const quizList =
      el("quizList");

    if (!quizList) {
      console.error(
        "TGEN-AI: quizList not found."
      );
      return;
    }

    quizList.innerHTML =
      safeQuizQuestions.map(
        (question, index) => `

        <div
          class="quiz-item"
          id="tgen-safe-quiz-${index}"
        >

          <p class="quiz-question-text">
            ${index + 1}.
            ${safeEscape(question.question)}
          </p>

          <div class="quiz-options">

            ${question.options.map(
              option => `

              <label class="quiz-option">

                <input
                  type="radio"
                  name="tgen-safe-q-${index}"
                  value="${safeEscape(option)}"
                >

                <span>
                  ${safeEscape(option)}
                </span>

              </label>

            `).join("")}

          </div>

        </div>

      `
      ).join("");

    const generate =
      el("generateQuizBtn");

    const submit =
      el("submitQuizBtn");

    const next =
      el("quizNextBtn");

    const result =
      el("quizResult");

    if (generate) {
      generate.style.display =
        "none";
    }

    if (submit) {
      submit.style.display =
        "inline-flex";
    }

    if (next) {
      next.style.display =
        "none";
    }

    if (result) {
      result.innerHTML = "";
      result.style.display =
        "none";
    }

    const counter =
      el("questionCounter");

    if (counter) {
      counter.textContent =
        `0 of ${safeQuizQuestions.length} answered`;
    }

    console.log(
      "TGEN-AI: Quiz generated successfully."
    );
  }

  window.generateQuiz =
    generateQuizSafe;

  // ------------------------------------------------------------
  // SUBMIT QUIZ
  // ------------------------------------------------------------

  function submitQuizSafe() {

    if (!safeQuizQuestions.length) {
      generateQuizSafe();
      return;
    }

    let answered = 0;
    let score = 0;

    safeQuizQuestions.forEach(
      (question, index) => {

        const selected =
          document.querySelector(
            `input[name="tgen-safe-q-${index}"]:checked`
          );

        const answer =
          selected
            ? selected.value
            : "";

        safeQuizAnswers[index] =
          answer;

        if (answer) {
          answered++;
        }

        if (
          answer ===
          question.answer
        ) {
          score++;
        }
      }
    );

    if (
      answered <
      safeQuizQuestions.length
    ) {

      alert(
        `Please answer all ${safeQuizQuestions.length} questions before submitting.`
      );

      return;
    }

    const percentage =
      Math.round(
        (
          score /
          safeQuizQuestions.length
        ) * 100
      );

    const result =
      el("quizResult");

    if (result) {

      result.style.display =
        "block";

      result.innerHTML = `
        <h2>Quiz complete</h2>

        <p>
          <strong>
            ${score}/${safeQuizQuestions.length}
          </strong>
          — ${percentage}%
        </p>

        <p>
          ${
            percentage >= 80
              ? "Excellent work!"
              : percentage >= 60
                ? "Good job! Review what you missed."
                : "Keep practising. You can improve."
          }
        </p>
      `;
    }

    const submit =
      el("submitQuizBtn");

    const next =
      el("quizNextBtn");

    if (submit) {
      submit.style.display =
        "none";
    }

    if (next) {
      next.style.display =
        "inline-flex";
    }

    const counter =
      el("questionCounter");

    if (counter) {
      counter.textContent =
        `${score}/${safeQuizQuestions.length} correct`;
    }

    const sideScore =
      el("quizSideScore");

    if (sideScore) {
      sideScore.textContent =
        `${score}/${safeQuizQuestions.length}`;
    }

    try {

      if (
        typeof getStoredNumber ===
          "function" &&
        typeof setStoredNumber ===
          "function"
      ) {

        setStoredNumber(
          "tgenScore",
          getStoredNumber("tgenScore") +
            score
        );
      }

      if (
        typeof loadProgress ===
        "function"
      ) {
        loadProgress();
      }

    } catch (error) {

      console.warn(
        "TGEN-AI progress update skipped:",
        error
      );
    }
  }

  window.submitQuiz =
    submitQuizSafe;

  // ------------------------------------------------------------
  // RESET QUIZ
  // ------------------------------------------------------------

  function resetQuizSafe() {

    safeQuizQuestions = [];
    safeQuizAnswers = {};

    window.quizQuestions = [];
    window.quizAnswers = {};

    const list =
      el("quizList");

    const result =
      el("quizResult");

    const generate =
      el("generateQuizBtn");

    const submit =
      el("submitQuizBtn");

    const next =
      el("quizNextBtn");

    if (list) {

      list.innerHTML = `
        <div class="quiz-item">

          <h3>
            Ready to test yourself?
          </h3>

          <p>
            Click
            <strong>
              Generate Quiz
            </strong>
            to begin.
          </p>

        </div>
      `;
    }

    if (result) {
      result.innerHTML = "";
      result.style.display =
        "none";
    }

    if (generate) {
      generate.style.display =
        "inline-flex";
    }

    if (submit) {
      submit.style.display =
        "none";
    }

    if (next) {
      next.style.display =
        "none";
    }

    const counter =
      el("questionCounter");

    if (counter) {
      counter.textContent =
        "Quiz not started";
    }
  }

  // ------------------------------------------------------------
  // QUIZ NAVIGATION
  // ------------------------------------------------------------

  window.tgenOpenQuiz =
    function () {

      const profile =
        getProfile();

      if (!profile) {

        showScreen("profile");

        return;
      }

      setProfile(profile);

      selectedClass =
        profile.className ||
        profile.class ||
        selectedClass;

      if (
        !selectedSubject &&
        profile.subjects?.length
      ) {
        selectedSubject =
          profile.subjects[0];
      }

      showScreen("quiz");
    };

  // ------------------------------------------------------------
  // RECONNECT BUTTONS
  // ------------------------------------------------------------

  function wireTGENButtons() {

    // Create Profile
    const save =
      el("saveProfileBtn");

    if (save) {

      const newSave =
        save.cloneNode(true);

      save.replaceWith(newSave);

      newSave.addEventListener(
        "click",
        saveProfileSafe
      );
    }

    // Generate Quiz
    const generate =
      el("generateQuizBtn");

    if (generate) {

      const newGenerate =
        generate.cloneNode(true);

      generate.replaceWith(
        newGenerate
      );

      newGenerate.addEventListener(
        "click",
        generateQuizSafe
      );
    }

    // Submit Quiz
    const submit =
      el("submitQuizBtn");

    if (submit) {

      const newSubmit =
        submit.cloneNode(true);

      submit.replaceWith(
        newSubmit
      );

      newSubmit.addEventListener(
        "click",
        submitQuizSafe
      );
    }

    // New Quiz / Continue
    const next =
      el("quizNextBtn");

    if (next) {

      const newNext =
        next.cloneNode(true);

      next.replaceWith(newNext);

      newNext.addEventListener(
        "click",
        resetQuizSafe
      );
    }

    // Profile class selector
    const classSelect =
      el("profileClass");

    if (classSelect) {

      classSelect.onchange =
        function () {

          const wrapper =
            el("examTargetWrapper");

          if (wrapper) {

            wrapper.style.display =
              this.value === "SS3"
                ? "block"
                : "none";
          }

          renderSafeProfileSubjects();
        };
    }

    // Department selector
    const department =
      el("profileDepartment");

    if (department) {

      department.onchange =
        function () {
          renderSafeProfileSubjects();
        };
    }

    // Quiz navigation buttons
    document
      .querySelectorAll(
        ".main-nav button, .footer-links button"
      )
      .forEach(button => {

        if (
          button.textContent
            .trim()
            .toLowerCase() ===
          "quiz"
        ) {

          button.onclick =
            window.tgenOpenQuiz;
        }
      });
  }

  // ------------------------------------------------------------
  // START REPAIR
  // ------------------------------------------------------------

  function bootTGENRepair() {

    const profile =
      getProfile();

    if (profile) {
      setProfile(profile);
    } else {
      setProfile(null);
    }

    wireTGENButtons();

    if (profile) {

      try {

        if (
          typeof loadProfile ===
          "function"
        ) {
          loadProfile();
        }

      } catch (error) {

        console.warn(
          "TGEN-AI profile reload skipped:",
          error
        );
      }
    }

    console.log(
      "TGEN-AI: Profile + Quiz repair loaded."
    );
  }

  if (
    document.readyState ===
    "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      bootTGENRepair
    );

  } else {

    bootTGENRepair();
  }

})();

/* =========================================================
   TGEN-AI MASTER STABILITY PATCH
   - Keeps the existing curriculum/profile/progress systems.
   - One quiz engine: exactly 10 questions.
   - One set of button handlers.
   - Personalized Start Learning -> Topics.
   - Reliable topic selection + explanations.
   - Logout -> Home, then Create Profile works again.
   ========================================================= */

(function () {
  "use strict";

  const PROFILE_KEY = "tgen-ai-profile";

  function masterEl(id) {
    return document.getElementById(id);
  }

  function masterProfile() {
    try {
      const raw = localStorage.getItem(PROFILE_KEY);
      if (!raw) return null;

      const profile = JSON.parse(raw);
      if (!profile || typeof profile !== "object") return null;

      if (!profile.className && profile.class) {
        profile.className = profile.class;
      }

      if (!Array.isArray(profile.subjects)) {
        profile.subjects = [];
      }

      return profile;
    } catch (error) {
      console.warn("TGEN-AI: Could not load profile.", error);
      return null;
    }
  }

  function setMasterProfile(profile) {
    userProfile = profile || null;
    window.userProfile = userProfile;

    if (profile) {
      selectedClass =
        profile.className ||
        profile.class ||
        "SS1";

      selectedDepartment =
        profile.department ||
        "General";
    }
  }

  function masterTopics(subject) {
    if (
      typeof TGEN_TOPICS !== "undefined" &&
      Array.isArray(TGEN_TOPICS[subject]) &&
      TGEN_TOPICS[subject].length
    ) {
      return TGEN_TOPICS[subject];
    }

    if (
      typeof subjectTopics !== "undefined" &&
      Array.isArray(subjectTopics[subject]) &&
      subjectTopics[subject].length
    ) {
      return subjectTopics[subject];
    }

    if (
      typeof classData !== "undefined" &&
      classData[selectedClass] &&
      Array.isArray(classData[selectedClass].subjects)
    ) {
      const item = classData[selectedClass].subjects.find(
        subjectItem => subjectItem.name === subject
      );

      if (item && Array.isArray(item.topics) && item.topics.length) {
        return item.topics;
      }
    }

    return [
      "Introduction",
      "Key Concepts",
      "Important Terms",
      "Examples",
      "Applications",
      "Practice",
      "Revision"
    ];
  }

  /* ---------------------------------------------------------
     TOPICS
     --------------------------------------------------------- */

  function renderMasterTopics() {
    const grid = masterEl("topicGrid");
    if (!grid) return;

    const profile = masterProfile();

    if (!profile) {
      grid.innerHTML = `
        <div class="empty-state">
          <h3>Create your profile first.</h3>
          <p>Set up your TGEN-AI profile to start learning.</p>
          <button type="button" class="primary-btn"
            onclick="showScreen('profile')">
            Create Profile →
          </button>
        </div>
      `;
      return;
    }

    const subjects = Array.isArray(profile.subjects)
      ? profile.subjects
      : [];

    if (!subjects.length) {
      grid.innerHTML = `
        <div class="empty-state">
          <h3>No subjects selected</h3>
          <p>Edit your profile and choose the subjects you offer.</p>
          <button type="button" class="primary-btn"
            onclick="showScreen('profile')">
            Edit Profile →
          </button>
        </div>
      `;
      return;
    }

    let html = "";

    subjects.forEach(subject => {
      const topics = masterTopics(subject);

      html += `
        <div class="tgen-master-subject-heading">
          <span>${escapeHTML(getSubjectIcon(subject))}</span>
          <span>${escapeHTML(subject)}</span>
        </div>
      `;

      topics.forEach((topic, index) => {
        html += `
          <button
            type="button"
            class="tgen-learning-topic-card"
            data-tgen-subject="${escapeAttribute(subject)}"
            data-tgen-topic="${escapeAttribute(topic)}"
          >
            <div class="tgen-topic-left">
              <div class="tgen-topic-icon">📖</div>

              <div class="tgen-topic-content">
                <span class="tgen-topic-subject">
                  ${escapeHTML(subject)}
                </span>

                <h3>${escapeHTML(topic)}</h3>

                <span class="tgen-topic-level">
                  Beginner
                </span>
              </div>
            </div>

            <div class="tgen-topic-arrow">→</div>
          </button>
        `;
      });
    });

    grid.innerHTML = html;

    grid.querySelectorAll(
      ".tgen-learning-topic-card"
    ).forEach(button => {
      button.addEventListener("click", function () {
        const subject = this.dataset.tgenSubject;
        const topic = this.dataset.tgenTopic;

        selectedSubject = subject;
        selectedTopic = topic;
        selectedClass =
          profile.className ||
          profile.class ||
          selectedClass;

        try {
          trackTopic();
        } catch (error) {
          console.warn(
            "TGEN-AI: Topic tracking skipped.",
            error
          );
        }

        renderStudyHeader();
        renderMasterTopicExplanation();
        masterShowScreen("study");
      });
    });

    const title = masterEl("topicTitle");
    if (title) {
      title.textContent = "What do you want to learn?";
    }

    const description =
      document.querySelector("#topics .page-header p");

    if (description) {
      description.textContent =
        "Choose a subject and topic to start learning with TGEN-AI.";
    }

    const backButton =
      document.querySelector("#topics .back-btn");

    if (backButton) {
      backButton.style.display = "none";
    }
  }

  function masterShowScreen(screenId) {
    let targetId = screenId;

    const profile = masterProfile();

    if (
      !profile &&
      !["home", "profile"].includes(targetId)
    ) {
      targetId = "profile";
    }

    document
      .querySelectorAll(".app-screen")
      .forEach(screen => {
        screen.classList.remove("active");
        screen.style.removeProperty("display");
      });

    const target = masterEl(targetId);

    if (!target) {
      console.warn(
        "TGEN-AI: Screen not found:",
        targetId
      );
      return;
    }

    target.classList.add("active");

    if (targetId === "topics") {
      renderMasterTopics();
    }

    if (targetId === "quiz") {
      masterOpenQuiz();
    }

    if (targetId === "study") {
      renderStudyHeader();
      renderMasterTopicExplanation();
    }

    if (targetId === "progress") {
      if (typeof loadProgress === "function") {
        loadProgress();
      }
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

    window.userProfile = userProfile;
  }

  window.showScreen = masterShowScreen;

  window.startLearning = function () {
    const profile = masterProfile();

    if (!profile) {
      masterShowScreen("profile");
      return;
    }

    setMasterProfile(profile);

    selectedSubject = null;
    selectedTopic = null;

    masterShowScreen("topics");
  };

  window.selectSubject = function (subjectName) {
    const profile = masterProfile();

    if (
      !profile ||
      !Array.isArray(profile.subjects) ||
      !profile.subjects.includes(subjectName)
    ) {
      return;
    }

    setMasterProfile(profile);
    selectedSubject = subjectName;
    selectedTopic = null;

    masterShowScreen("topics");
  };

  window.selectTopic = function (topicName) {
    if (!selectedSubject || !topicName) return;

    selectedTopic = topicName;

    try {
      trackTopic();
    } catch (error) {
      console.warn(
        "TGEN-AI: Topic tracking skipped.",
        error
      );
    }

    renderStudyHeader();
    renderMasterTopicExplanation();
    masterShowScreen("study");
  };

  window.selectTGENPersonalizedTopic =
    function (subjectName, topicName) {
      selectedSubject = subjectName;
      selectedTopic = topicName;

      renderStudyHeader();
      renderMasterTopicExplanation();
      masterShowScreen("study");
    };

  /* ---------------------------------------------------------
     TOPIC EXPLANATION
     --------------------------------------------------------- */

  const MASTER_EXPLANATIONS = {
    "Number Bases":
      "A number base tells you how many symbols are used to represent numbers. Decimal is base 10, while binary is base 2.",
    Indices:
      "Indices are powers. They show how many times a number is multiplied by itself. For example, 2³ means 2 × 2 × 2.",
    "Quadratic Equations":
      "A quadratic equation is an equation in which the highest power of the variable is 2.",
    Probability:
      "Probability measures how likely an event is to happen. It ranges from 0, meaning impossible, to 1, meaning certain.",
    Trigonometry:
      "Trigonometry studies relationships between angles and sides of triangles.",
    Genetics:
      "Genetics is the study of heredity and variation in living organisms.",
    Force:
      "Force is a push or pull that can change an object's motion or shape.",
    Power:
      "Power describes how quickly work is done or energy is transferred.",
    Matter:
      "Matter is anything that has mass and occupies space.",
    "Atomic Structure":
      "Atomic structure describes how an atom is made from protons, neutrons and electrons.",
    Algorithms:
      "An algorithm is a clear sequence of steps used to solve a problem or complete a task.",
    Databases:
      "A database is an organised collection of information that can be stored, searched and managed.",
    Vectors:
      "A vector is a quantity that has both magnitude and direction.",
    Differentiation:
      "Differentiation is a mathematical process used to find rates of change."
  };

  function getMasterExplanation(subject, topic) {
    if (MASTER_EXPLANATIONS[topic]) {
      return MASTER_EXPLANATIONS[topic];
    }

    if (
      typeof studyKnowledge !== "undefined" &&
      studyKnowledge[topic]
    ) {
      return studyKnowledge[topic];
    }

    return `${topic} is a topic studied in ${subject}. TGEN-AI can help you learn it through a definition, key ideas, examples and practice questions.`;
  }

  function renderMasterTopicExplanation() {
    const chatArea = masterEl("chatArea");
    if (!chatArea || !selectedTopic || !selectedSubject) {
      return;
    }

    chatArea.innerHTML = "";

    renderChatMessage(
      `<strong>${escapeHTML(selectedTopic)}</strong>
       <br><br>
       ${escapeHTML(
         getMasterExplanation(
           selectedSubject,
           selectedTopic
         )
       )}
       <br><br>
       <strong>Next:</strong> Ask me to explain it simply,
       give you an example, or test you with questions.`,
      "ai"
    );
  }

  window.generateSmartResponse = function (question) {
    const input = String(question || "").toLowerCase();
    const subject = selectedSubject || "your subject";
    const topic = selectedTopic || "your topic";

    const explanation =
      getMasterExplanation(subject, topic);

    if (
      input.includes("what is") ||
      input.includes("define") ||
      input.includes("meaning") ||
      input.includes("explain") ||
      input.includes("simply")
    ) {
      return `
        <strong>${escapeHTML(topic)}</strong>
        <br><br>
        ${escapeHTML(explanation)}
      `;
    }

    if (
      input.includes("example") ||
      input.includes("examples")
    ) {
      return `
        <strong>${escapeHTML(topic)}</strong>
        <br><br>
        Start by identifying the main idea, then apply it
        to a practice question. If you want, ask:
        "Give me an example of ${escapeHTML(topic)}."
      `;
    }

    if (
      input.includes("quiz") ||
      input.includes("question") ||
      input.includes("test")
    ) {
      return `
        Let's test your knowledge of
        <strong>${escapeHTML(topic)}</strong>.
        Open Quiz to practise.
      `;
    }

    return `
      For <strong>${escapeHTML(topic)}</strong>,
      start with the definition, then learn the key ideas,
      work through an example and practise questions.
    `;
  };

  /* ---------------------------------------------------------
     QUIZ ENGINE — EXACTLY 10
     --------------------------------------------------------- */

  function normaliseQuestion(raw) {
    if (!raw || typeof raw !== "object") {
      return null;
    }

    const question =
      raw.question ||
      raw.q ||
      raw.prompt;

    const options =
      Array.isArray(raw.options)
        ? raw.options.map(String)
        : [];

    const answer =
      raw.answer !== undefined
        ? String(raw.answer)
        : "";

    if (
      !question ||
      options.length < 2 ||
      !answer
    ) {
      return null;
    }

    return {
      question: String(question),
      options: options.slice(0, 4),
      answer
    };
  }

  function addUniqueQuestion(list, seen, raw) {
    const question = normaliseQuestion(raw);
    if (!question) return;

    const key =
      question.question
        .toLowerCase()
        .trim();

    if (seen.has(key)) return;

    seen.add(key);

    while (question.options.length < 4) {
      const fallback =
        "None of the above";

      if (!question.options.includes(fallback)) {
        question.options.push(fallback);
      } else {
        break;
      }
    }

    list.push(question);
  }

  function createMasterFallbacks(subject) {
    const topics = masterTopics(subject);
    const fallbacks = [];

    topics.forEach((topic, index) => {
      const others = topics.filter(
        item => item !== topic
      );

      const options = [
        topic,
        others[0] || "Introduction",
        others[1] || "Practice",
        others[2] || "Revision"
      ];

      fallbacks.push({
        question:
          `Which of these is a topic studied in ${subject}?`,
        options: shuffle(options),
        answer: topic
      });

      if (fallbacks.length < 10) {
        fallbacks.push({
          question:
            `Which area should a student study when learning ${subject}?`,
          options: shuffle(options),
          answer: topic
        });
      }

      if (fallbacks.length >= 10) return;
    });

    return fallbacks;
  }

  function buildMasterQuiz(subject) {
    const questions = [];
    const seen = new Set();

    // 1. New subject bank
    if (
      typeof TGEN_QUIZ_BANK !== "undefined" &&
      Array.isArray(TGEN_QUIZ_BANK[subject])
    ) {
      TGEN_QUIZ_BANK[subject].forEach(q => {
        addUniqueQuestion(questions, seen, q);
      });
    }

    // 2. Existing question templates
    if (
      typeof questionTemplates !== "undefined" &&
      Array.isArray(questionTemplates[subject])
    ) {
      questionTemplates[subject].forEach(q => {
        addUniqueQuestion(questions, seen, q);
      });
    }

    // 3. Old class-specific bank
    if (
      typeof quizBank !== "undefined" &&
      quizBank[selectedClass] &&
      Array.isArray(quizBank[selectedClass][subject])
    ) {
      quizBank[selectedClass][subject].forEach(q => {
        addUniqueQuestion(questions, seen, q);
      });
    }

    // 4. Fill to exactly 10
    createMasterFallbacks(subject).forEach(q => {
      if (questions.length < 10) {
        addUniqueQuestion(questions, seen, q);
      }
    });

    // 5. Last-resort fill, still exactly 10
    const topics = masterTopics(subject);

    let fallbackIndex = 0;

    while (questions.length < 10) {
      const topic =
        topics[fallbackIndex % topics.length];

      const options = [
        topic,
        "Introduction",
        "Practice",
        "Revision"
      ].filter(
        (value, index, array) =>
          array.indexOf(value) === index
      );

      while (options.length < 4) {
        options.push(
          `Option ${options.length + 1}`
        );
      }

      addUniqueQuestion(
        questions,
        seen,
        {
          question:
            `Question ${questions.length + 1}: Which topic is related to ${subject}?`,
          options: shuffle(options).slice(0, 4),
          answer: topic
        }
      );

      fallbackIndex++;

      // If duplicate protection ever blocks a fill,
      // force a unique question.
      if (fallbackIndex > 100) {
        const number = questions.length + 1;

        questions.push({
          question:
            `Question ${number}: Which topic is related to ${subject}?`,
          options: [
            topic,
            "Introduction",
            "Practice",
            "Revision"
          ],
          answer: topic
        });
      }
    }

    return questions.slice(0, 10);
  }

  function masterRenderQuiz() {
    const list = masterEl("quizList");

    if (!list) return;

    const profile = masterProfile();

    if (!profile) {
      list.innerHTML = `
        <div class="quiz-item">
          <h3>Create your profile first.</h3>
          <p>Set up your TGEN-AI profile before starting a quiz.</p>
        </div>
      `;
      return;
    }

    if (!selectedSubject) {
      selectedSubject =
        profile.subjects?.[0] || null;
    }

    if (!selectedSubject) {
      list.innerHTML = `
        <div class="quiz-item">
          <h3>Choose a subject first.</h3>
        </div>
      `;
      return;
    }

    const questions =
      buildMasterQuiz(selectedSubject);

    // This is the single source of truth.
    window.quizQuestions = questions;
    window.quizAnswers = {};

    list.innerHTML =
      questions.map((question, index) => `
        <div
          class="quiz-item"
          id="tgen-quiz-${index}"
        >
          <p class="quiz-question-text">
            <strong>${index + 1}.</strong>
            ${escapeHTML(question.question)}
          </p>

          <div class="quiz-options">
            ${question.options.map(option => `
              <label class="quiz-option">
                <input
                  type="radio"
                  name="tgen-quiz-${index}"
                  value="${escapeAttribute(option)}"
                >
                <span>${escapeHTML(option)}</span>
              </label>
            `).join("")}
          </div>
        </div>
      `).join("");

    const counter = masterEl("questionCounter");
    if (counter) {
      counter.textContent =
        `0 of ${questions.length} answered`;
    }

    const generate = masterEl("generateQuizBtn");
    const submit = masterEl("submitQuizBtn");
    const next = masterEl("quizNextBtn");

    if (generate) {
      generate.style.display = "none";
    }

    if (submit) {
      submit.style.display = "none";
    }

    if (next) {
      next.style.display = "none";
    }

    const result = masterEl("quizResult");
    if (result) {
      result.innerHTML = "";
      result.style.display = "none";
    }

    console.log(
      `TGEN-AI: ${questions.length} quiz questions rendered for ${selectedSubject}.`
    );
  }

  function masterGenerateQuiz() {
    const profile = masterProfile();

    if (!profile) {
      masterShowScreen("profile");
      return;
    }

    setMasterProfile(profile);

    if (
      !selectedSubject ||
      !profile.subjects.includes(selectedSubject)
    ) {
      selectedSubject =
        profile.subjects[0] || null;
    }

    if (!selectedSubject) {
      alert(
        "Choose at least one subject in your profile."
      );
      masterShowScreen("profile");
      return;
    }

    quizStarted = true;
    quizSubmitted = false;
    currentQuizScore = 0;

    masterRenderQuiz();

    const submit = masterEl("submitQuizBtn");
    if (submit) {
      submit.style.display = "inline-flex";
    }

    console.log(
      "TGEN-AI: Generate Quiz clicked. Questions:",
      window.quizQuestions.length
    );
  }

  function masterUpdateQuizProgress() {
    if (quizSubmitted) return;

    const questions =
      Array.isArray(window.quizQuestions)
        ? window.quizQuestions
        : [];

    const answered =
      document.querySelectorAll(
        '#quizList input[type="radio"]:checked'
      ).length;

    const counter = masterEl("questionCounter");
    if (counter) {
      counter.textContent =
        `${answered} of ${questions.length} answered`;
    }

    const submit = masterEl("submitQuizBtn");
    if (submit) {
      submit.style.display =
        questions.length > 0 &&
        answered === questions.length
          ? "inline-flex"
          : "none";
    }
  }

  function masterSubmitQuiz() {
    const questions =
      Array.isArray(window.quizQuestions)
        ? window.quizQuestions
        : [];

    if (!questions.length) {
      alert("Please generate a quiz first.");
      return;
    }

    let answered = 0;
    let score = 0;

    questions.forEach((question, index) => {
      const selected =
        document.querySelector(
          `input[name="tgen-quiz-${index}"]:checked`
        );

      const answer =
        selected
          ? selected.value
          : "";

      window.quizAnswers[index] = answer;

      if (answer) answered++;

      if (answer === question.answer) {
        score++;
      }
    });

    if (answered < questions.length) {
      alert(
        `Please answer all ${questions.length} questions before submitting.`
      );
      return;
    }

    quizSubmitted = true;
    currentQuizScore = score;

    const percentage =
      Math.round(
        (score / questions.length) * 100
      );

    const result = masterEl("quizResult");

    if (result) {
      result.style.display = "block";
      result.innerHTML = `
        <div class="quiz-result-card">
          <h2>
            ${
              percentage >= 80
                ? "Excellent work! 🔥"
                : percentage >= 60
                  ? "Nice work!"
                  : "Keep practising!"
            }
          </h2>

          <p class="quiz-score">
            ${score}/${questions.length}
          </p>

          <p>
            You scored
            <strong>${percentage}%</strong>.
          </p>

          <button
            type="button"
            class="primary-btn small-btn"
            id="tgenRetakeQuizBtn"
          >
            Retake quiz
          </button>
        </div>
      `;

      const retake =
        masterEl("tgenRetakeQuizBtn");

      if (retake) {
        retake.addEventListener(
          "click",
          masterOpenQuiz
        );
      }
    }

    const submit = masterEl("submitQuizBtn");
    const next = masterEl("quizNextBtn");

    if (submit) {
      submit.style.display = "none";
    }

    if (next) {
      next.style.display = "none";
    }

    const counter = masterEl("questionCounter");
    if (counter) {
      counter.textContent =
        `${score}/${questions.length} correct`;
    }

    const sideScore =
      masterEl("quizSideScore");

    if (sideScore) {
      sideScore.textContent =
        `${score}/${questions.length}`;
    }

    try {
      const oldScore =
        typeof getStoredNumber === "function"
          ? getStoredNumber("tgenScore")
          : 0;

      if (typeof setStoredNumber === "function") {
        setStoredNumber(
          "tgenScore",
          oldScore + score
        );
      }
    } catch (error) {
      console.warn(
        "TGEN-AI: Score storage skipped.",
        error
      );
    }

    if (typeof loadProgress === "function") {
      loadProgress();
    }

    console.log(
      `TGEN-AI: Quiz submitted — ${score}/${questions.length}`
    );
  }

  function masterResetQuiz() {
    quizStarted = false;
    quizSubmitted = false;
    currentQuizScore = 0;

    window.quizQuestions = [];
    window.quizAnswers = {};

    const list = masterEl("quizList");

    if (list) {
      list.innerHTML = `
        <div class="quiz-item">
          <h3>Ready to test yourself?</h3>
          <p>
            Click <strong>Generate Quiz</strong>
            to begin a 10-question quiz.
          </p>
        </div>
      `;
    }

    const generate = masterEl("generateQuizBtn");
    const submit = masterEl("submitQuizBtn");
    const next = masterEl("quizNextBtn");
    const result = masterEl("quizResult");

    if (generate) {
      generate.style.display = "inline-flex";
    }

    if (submit) {
      submit.style.display = "none";
    }

    if (next) {
      next.style.display = "none";
    }

    if (result) {
      result.innerHTML = "";
      result.style.display = "none";
    }

    const counter = masterEl("questionCounter");
    if (counter) {
      counter.textContent = "Quiz not started";
    }
  }

  function masterOpenQuiz() {
    const profile = masterProfile();

    if (!profile) {
      masterShowScreen("profile");
      return;
    }

    setMasterProfile(profile);

    if (
      !selectedSubject ||
      !profile.subjects.includes(selectedSubject)
    ) {
      selectedSubject =
        profile.subjects[0] || null;
    }

    selectedTopic = null;

    quizStarted = false;
    quizSubmitted = false;
    currentQuizScore = 0;

    const list = masterEl("quizList");

    if (list) {
      list.innerHTML = `
        <div class="quiz-item">
          <h3>Ready to test yourself?</h3>
          <p>
            Click <strong>Generate Quiz</strong>
            to begin a 10-question quiz for
            ${escapeHTML(selectedSubject || "your subject")}.
          </p>
        </div>
      `;
    }

    const title =
      masterEl("quizHeader") ||
      masterEl("quizSubjectTitle");

    if (title) {
      title.textContent =
        selectedSubject
          ? `${selectedSubject} quiz`
          : "Test your knowledge";
    }

    const sideSubject =
      masterEl("quizSideSubject");

    if (sideSubject) {
      sideSubject.textContent =
        selectedSubject || "Choose a subject";
    }

    const generate = masterEl("generateQuizBtn");
    const submit = masterEl("submitQuizBtn");
    const next = masterEl("quizNextBtn");
    const result = masterEl("quizResult");

    if (generate) {
      generate.style.display = "inline-flex";
    }

    if (submit) {
      submit.style.display = "none";
    }

    if (next) {
      next.style.display = "none";
    }

    if (result) {
      result.innerHTML = "";
      result.style.display = "none";
    }

    const counter = masterEl("questionCounter");
    if (counter) {
      counter.textContent = "Quiz not started";
    }
  }

  window.renderQuiz = masterRenderQuiz;
  window.generateQuiz = masterGenerateQuiz;
  window.updateQuizProgress = masterUpdateQuizProgress;
  window.submitQuiz = masterSubmitQuiz;
  window.retakeQuiz = masterOpenQuiz;
  window.openQuiz = masterOpenQuiz;

  window.tgenGetQuizQuestions = function () {
    const profile = masterProfile();

    if (!selectedSubject && profile?.subjects?.length) {
      selectedSubject = profile.subjects[0];
    }

    return selectedSubject
      ? buildMasterQuiz(selectedSubject)
      : [];
  };

  /* ---------------------------------------------------------
     PROFILE + LOGOUT
     --------------------------------------------------------- */

  window.saveProfile = function () {
    const name =
      masterEl("profileName")?.value.trim() || "";

    const email =
      masterEl("profileEmail")?.value.trim() || "";

    const className =
      masterEl("profileClass")?.value || "";

    const department =
      masterEl("profileDepartment")?.value || "";

    const exam =
      className === "SS3"
        ? masterEl("profileExam")?.value || ""
        : "";

    const subjects =
      [...document.querySelectorAll(
        'input[name="offeredSubject"]:checked'
      )].map(input => input.value);

    const error =
      masterEl("profileError");

    const fail = message => {
      if (error) {
        error.textContent = message;
        error.style.display = "block";
      }
    };

    if (!name) {
      fail("Please enter your name.");
      return;
    }

    if (
      !email ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      fail("Please enter a valid email address.");
      return;
    }

    if (!className) {
      fail("Please select your class.");
      return;
    }

    if (!department) {
      fail("Please select your department.");
      return;
    }

    if (className === "SS3" && !exam) {
      fail("Please choose what you are studying for.");
      return;
    }

    if (!subjects.length) {
      fail("Select at least one subject.");
      return;
    }

    const profile = {
      name,
      email,
      class: className,
      className,
      department,
      exam,
      subjects,
      createdAt:
        userProfile?.createdAt ||
        new Date().toISOString()
    };

    try {
      localStorage.setItem(
        PROFILE_KEY,
        JSON.stringify(profile)
      );

      localStorage.setItem(
        "tgen-ai-profile",
        JSON.stringify(profile)
      );
    } catch (storageError) {
      fail("TGEN-AI could not save your profile.");
      console.error(storageError);
      return;
    }

    setMasterProfile(profile);

    selectedSubject = null;
    selectedTopic = null;

    if (error) {
      error.style.display = "none";
    }

    if (typeof renderProfileSubjects === "function") {
      renderProfileSubjects();
    }

    if (typeof renderSubjects === "function") {
      renderSubjects();
    }

    if (typeof updateLogoutButton === "function") {
      updateLogoutButton();
    }

    // After profile creation, go straight to personalized topics.
    masterShowScreen("topics");

    console.log(
      "TGEN-AI: Profile saved successfully."
    );
  };

  window.logout = function () {
    [
      PROFILE_KEY,
      "tgenProfile",
      "userProfile"
    ].forEach(key => {
      try {
        localStorage.removeItem(key);
      } catch (error) {}
    });

    setMasterProfile(null);

    selectedClass = "SS1";
    selectedDepartment = "General";
    selectedSubject = null;
    selectedTopic = null;

    window.quizQuestions = [];
    window.quizAnswers = {};

    const fields = [
      "profileName",
      "profileEmail",
      "profileClass",
      "profileDepartment",
      "profileExam"
    ];

    fields.forEach(id => {
      const field = masterEl(id);
      if (field) field.value = "";
    });

    [
      "classGrid",
      "subjectGrid",
      "topicGrid",
      "profileSubjects"
    ].forEach(id => {
      const element = masterEl(id);
      if (element) element.innerHTML = "";
    });

    const account =
      masterEl("accountBtn");

    if (account) {
      account.hidden = true;
      account.style.setProperty(
        "display",
        "none",
        "important"
      );
    }

    const profileMenu =
      masterEl("tgenProfileMenu");

    if (profileMenu) {
      profileMenu.remove();
    }

    masterResetQuiz();

    masterShowScreen("home");

    console.log(
      "TGEN-AI: Logged out successfully."
    );
  };

  /* ---------------------------------------------------------
     BUTTON WIRING
     Clone each important button ONCE at final boot so old
     competing listeners cannot fire afterwards.
     --------------------------------------------------------- */

  function replaceButton(id, handler) {
    const oldButton = masterEl(id);
    if (!oldButton || !oldButton.parentNode) return;

    const newButton =
      oldButton.cloneNode(true);

    oldButton.parentNode.replaceChild(
      newButton,
      oldButton
    );

    newButton.addEventListener(
      "click",
      function (event) {
        event.preventDefault();
        event.stopPropagation();
        handler(event);
      }
    );
  }

  function wireMasterButtons() {
    replaceButton(
      "saveProfileBtn",
      window.saveProfile
    );

    replaceButton(
      "generateQuizBtn",
      window.generateQuiz
    );

    replaceButton(
      "submitQuizBtn",
      window.submitQuiz
    );

    replaceButton(
      "quizNextBtn",
      masterResetQuiz
    );

    replaceButton(
      "generateStudyBtn",
      buildStudyResponse
    );

    replaceButton(
      "clearQuestionBtn",
      clearQuestion
    );

    const input =
      masterEl("questionInput");

    if (input) {
      input.onkeydown = function (event) {
        if (
          event.key === "Enter" &&
          !event.shiftKey
        ) {
          event.preventDefault();
          buildStudyResponse();
        }
      };
    }

    // Profile selectors
    const classSelect =
      masterEl("profileClass");

    if (classSelect) {
      classSelect.onchange = function () {
        const wrapper =
          masterEl("examTargetWrapper");

        if (wrapper) {
          wrapper.style.display =
            this.value === "SS3"
              ? "block"
              : "none";
        }

        const exam =
          masterEl("profileExam");

        if (
          this.value !== "SS3" &&
          exam
        ) {
          exam.value = "";
        }

        renderProfileSubjects();
      };
    }

    const department =
      masterEl("profileDepartment");

    if (department) {
      department.onchange =
        function () {
          selectedDepartment = this.value;
          renderProfileSubjects();
        };
    }

    // Start Learning
    document
      .querySelectorAll(
        ".hero-actions button, .hero-actions .primary-btn"
      )
      .forEach(button => {
        if (
          button.textContent
            .trim()
            .toLowerCase()
            .includes("start learning")
        ) {
          button.onclick = function (event) {
            event.preventDefault();
            window.startLearning();
          };
        }
      });

    // Quiz navigation
    document
      .querySelectorAll(
        ".main-nav button, .footer-links button"
      )
      .forEach(button => {
        const text =
          button.textContent
            .trim()
            .toLowerCase();

        if (text === "quiz") {
          button.onclick = function (event) {
            event.preventDefault();
            masterShowScreen("quiz");
          };
        }

        if (text === "classes") {
          button.style.display = "none";
        }
      });

    // Account/profile button
    const account =
      masterEl("accountBtn");

    if (account) {
      account.onclick = function (event) {
        event.preventDefault();

        if (typeof window.editProfile === "function") {
          window.editProfile();
        }
      };
    }

    // Retake button inside the result is created dynamically.
    // It is wired in masterSubmitQuiz().
  }

  function addMasterStyles() {
    if (masterEl("tgen-master-styles")) {
      return;
    }

    const style =
      document.createElement("style");

    style.id = "tgen-master-styles";

    style.textContent = `
      /* Keep all generated quiz questions visible. */
      #quizList {
        display: block !important;
        width: 100%;
      }

      #quizList .quiz-item {
        display: block !important;
        visibility: visible !important;
        opacity: 1 !important;
        height: auto !important;
        max-height: none !important;
        overflow: visible !important;
      }

      #quizList .quiz-item + .quiz-item {
        margin-top: 18px;
      }

      .tgen-master-subject-heading {
        grid-column: 1 / -1;
        display: flex;
        align-items: center;
        gap: 10px;
        margin: 24px 0 10px;
        font-size: .82rem;
        font-weight: 800;
        color: #64748b;
        text-transform: uppercase;
        letter-spacing: .07em;
      }

      .tgen-learning-topic-card {
        width: 100%;
        min-height: 125px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
        margin-bottom: 16px;
        padding: 22px 26px;
        border: none;
        border-radius: 22px;
        background: linear-gradient(
          135deg,
          #2563eb 0%,
          #3b82f6 55%,
          #60a5fa 100%
        );
        color: white;
        cursor: pointer;
        text-align: left;
        box-shadow: 0 12px 28px rgba(37,99,235,.18);
        transition: transform .2s ease, box-shadow .2s ease;
      }

      .tgen-learning-topic-card:hover {
        transform: translateY(-3px);
        box-shadow: 0 18px 35px rgba(37,99,235,.25);
      }

      .tgen-topic-left {
        display: flex;
        align-items: center;
        gap: 18px;
        min-width: 0;
      }

      .tgen-topic-icon {
        width: 58px;
        height: 58px;
        flex-shrink: 0;
        display: grid;
        place-items: center;
        border-radius: 17px;
        background: rgba(255,255,255,.18);
        font-size: 1.65rem;
      }

      .tgen-topic-content {
        min-width: 0;
      }

      .tgen-topic-subject {
        display: block;
        margin-bottom: 4px;
        font-size: .76rem;
        font-weight: 700;
        opacity: .82;
        text-transform: uppercase;
        letter-spacing: .06em;
      }

      .tgen-topic-content h3 {
        margin: 0 0 9px;
        color: white;
        font-size: 1.35rem;
        font-weight: 800;
        line-height: 1.25;
      }

      .tgen-topic-level {
        display: inline-flex;
        align-items: center;
        padding: 5px 10px;
        border-radius: 999px;
        background: rgba(255,255,255,.18);
        color: white;
        font-size: .75rem;
        font-weight: 700;
      }

      .tgen-topic-arrow {
        flex-shrink: 0;
        width: 44px;
        height: 44px;
        display: grid;
        place-items: center;
        border-radius: 50%;
        background: rgba(255,255,255,.18);
        font-size: 1.4rem;
        font-weight: 800;
      }

      @media (max-width: 600px) {
        .tgen-learning-topic-card {
          padding: 18px;
          min-height: 105px;
        }

        .tgen-topic-icon {
          width: 48px;
          height: 48px;
        }

        .tgen-topic-content h3 {
          font-size: 1.05rem;
        }

        .tgen-topic-arrow {
          width: 38px;
          height: 38px;
        }
      }
    `;

    document.head.appendChild(style);
  }

  function masterBoot() {
    const profile = masterProfile();

    if (profile) {
      setMasterProfile(profile);

      if (typeof loadProfile === "function") {
        try {
          loadProfile();
        } catch (error) {
          console.warn(
            "TGEN-AI: Profile UI reload skipped.",
            error
          );
        }
      }

      if (typeof renderSubjects === "function") {
        renderSubjects();
      }
    } else {
      setMasterProfile(null);
    }

    addMasterStyles();
    wireMasterButtons();

    // Always hide Classes navigation after boot.
    document
      .querySelectorAll(
        ".main-nav button, .footer-links button"
      )
      .forEach(button => {
        if (
          button.textContent
            .trim()
            .toLowerCase() === "classes"
        ) {
          button.style.display = "none";
        }
      });

    console.log(
      "TGEN-AI: MASTER STABILITY PATCH LOADED."
    );
  }

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      masterBoot,
      { once: true }
    );
  } else {
    masterBoot();
  }

})();

/* =========================================================
   TGEN-AI — DAILY LEARNING + BETTER DEFINITIONS/EXAMPLES
   Final patch: keep existing app, add only the new behaviour.
   ========================================================= */
(function () {
  const DAILY_KEY = "tgen-ai-daily-learning";
  const TODAY = () => new Date().toISOString().slice(0, 10);

  function safeRead(key, fallback) {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : fallback;
    } catch (e) {
      return fallback;
    }
  }

  function safeWrite(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.warn("TGEN-AI: Could not save daily learning.", e);
    }
  }

  function getDailyLearning() {
    const all = safeRead(DAILY_KEY, {});
    const today = TODAY();

    if (!all[today]) {
      all[today] = [];
      safeWrite(DAILY_KEY, all);
    }

    return all;
  }

  function recordDailyLearning(subject, topic) {
    if (!subject || !topic) return;

    const all = getDailyLearning();
    const today = TODAY();

    if (!Array.isArray(all[today])) {
      all[today] = [];
    }

    const exists = all[today].some(item =>
      item.subject === subject && item.topic === topic
    );

    if (!exists) {
      all[today].push({
        subject,
        topic,
        studiedAt: new Date().toISOString()
      });
      safeWrite(DAILY_KEY, all);
    }
  }

  function getTodayTopics() {
    const all = getDailyLearning();
    const today = TODAY();
    return Array.isArray(all[today]) ? all[today] : [];
  }

  /* Track every topic opened today without removing the old progress system. */
  const oldTrackTopic = window.trackTopic;
  window.trackTopic = function () {
    try {
      recordDailyLearning(
        window.selectedSubject || selectedSubject,
        window.selectedTopic || selectedTopic
      );
    } catch (e) {}

    if (typeof oldTrackTopic === "function") {
      return oldTrackTopic.apply(this, arguments);
    }
  };

  /* ---------------------------------------------------------
     LESSONS: definition + key idea + real example
     --------------------------------------------------------- */
  const BETTER_LESSONS = {
    "Parts of Speech": {
        "definition": "Parts of speech are categories of words based on the jobs they perform in a sentence.",
        "example": "In 'The small boy runs quickly', 'boy' is a noun, 'small' is an adjective, and 'quickly' is an adverb.",
        "key": "Identify the job a word performs in the sentence."
    },
    "Comprehension": {
        "definition": "Comprehension is the ability to understand, interpret and respond correctly to a written passage.",
        "example": "After reading a passage about rainfall, you answer a question by using information stated or clearly implied in the passage.",
        "key": "Read for the main idea, supporting details and meaning of unfamiliar words."
    },
    "Summary Writing": {
        "definition": "Summary writing is the skill of reducing a passage to its essential points without changing its meaning.",
        "example": "A long passage about road safety can be reduced to a few sentences containing only its main points.",
        "key": "Keep the important ideas and remove repetition and minor details."
    },
    "Essay Writing": {
        "definition": "Essay writing is the organised presentation of ideas on a topic using connected paragraphs.",
        "example": "An essay on 'The Importance of Education' can have an introduction, developed body paragraphs and a conclusion.",
        "key": "Plan the purpose, points, paragraphs and conclusion before writing."
    },
    "Figures of Speech": {
        "definition": "Figures of speech are expressions that use language in a non-literal or specially patterned way for emphasis or effect.",
        "example": "'The classroom was a zoo' is a metaphor because it compares the classroom with a zoo without using 'like' or 'as'.",
        "key": "Look at the intended meaning, not only the literal words."
    },
    "Vocabulary": {
        "definition": "Vocabulary is the collection of words a person knows, understands and can use appropriately.",
        "example": "Knowing that 'rapid' means 'fast' helps you understand and use the word in context.",
        "key": "Use surrounding words to determine the meaning that fits the context."
    },
    "Grammar": {
        "definition": "Grammar is the set of rules that governs how words are formed and combined into correct sentences.",
        "example": "'She goes to school every day' follows the appropriate subject-verb agreement for the sentence.",
        "key": "Check word forms, sentence structure and agreement."
    },
    "Concord": {
        "definition": "Concord is the agreement between words in a sentence, especially between the subject and verb.",
        "example": "'The boy plays' uses a singular subject with the singular verb 'plays'.",
        "key": "Make the verb agree with the actual subject of the sentence."
    },
    "Tenses": {
        "definition": "Tense shows the time relationship of an action or state, such as past, present or future.",
        "example": "'They visited Abuja yesterday' uses the past tense because the action happened before now.",
        "key": "Use time clues and the meaning of the sentence to choose the tense."
    },
    "Oral English": {
        "definition": "Oral English focuses on spoken English, including pronunciation, stress, intonation and listening.",
        "example": "The word 'record' can have different stress patterns depending on whether it is used as a noun or a verb.",
        "key": "Listen for sound, stress and intonation rather than spelling alone."
    },
    "Number Bases": {
        "definition": "A number base is a system that uses a fixed set of digits and place values to represent numbers.",
        "example": "101₂ equals 5₁₀ because it represents 1×4 + 0×2 + 1×1.",
        "key": "The base determines the place value of each position."
    },
    "Indices": {
        "definition": "An index, or exponent, shows how many times a number is used as a factor.",
        "example": "2³ means 2×2×2, which equals 8.",
        "key": "For powers with the same base, multiplication combines their exponents."
    },
    "Logarithms": {
        "definition": "A logarithm tells you the exponent to which a base must be raised to produce a given number.",
        "example": "log₂8 = 3 because 2³ = 8.",
        "key": "Think of a logarithm as the inverse operation of exponentiation."
    },
    "Algebraic Expressions": {
        "definition": "An algebraic expression combines numbers, variables and operations without an equals sign forming an equation.",
        "example": "3x + 5 is an algebraic expression containing a variable, coefficient and constant.",
        "key": "Identify like terms before simplifying."
    },
    "Linear Equations": {
        "definition": "A linear equation is an equation in which the highest power of the variable is one.",
        "example": "2x + 3 = 11 is linear because x has power 1.",
        "key": "Use inverse operations to isolate the variable."
    },
    "Quadratic Equations": {
        "definition": "A quadratic equation is an equation whose highest power of the variable is 2.",
        "example": "x² − 5x + 6 = 0 is quadratic because the highest power of x is 2.",
        "key": "Common solution methods include factorisation, completing the square and the quadratic formula."
    },
    "Sets": {
        "definition": "A set is a well-defined collection of distinct objects or elements.",
        "example": "A = {2, 4, 6, 8} is a set of even numbers in that range.",
        "key": "Use set notation carefully and distinguish an element from a set."
    },
    "Probability": {
        "definition": "Probability measures how likely an event is to occur, from 0 for impossible to 1 for certain.",
        "example": "For a fair die, the probability of rolling a 3 is 1/6.",
        "key": "For equally likely outcomes, divide favourable outcomes by total outcomes."
    },
    "Trigonometry": {
        "definition": "Trigonometry studies relationships between angles and sides of triangles.",
        "example": "In a right triangle, sin θ equals opposite divided by hypotenuse.",
        "key": "Choose the ratio that matches the known sides and required angle."
    },
    "Statistics": {
        "definition": "Statistics is the collection, organisation, analysis and interpretation of data.",
        "example": "The mean of 2, 4 and 6 is 4.",
        "key": "Choose a measure or graph that fits the type of data."
    },
    "Citizenship": {
        "definition": "Citizenship is the legal membership of a person in a country, with associated rights and duties.",
        "example": "A citizen may have the right to participate in public affairs while also obeying the laws of the country.",
        "key": "Distinguish citizenship status from general residence in a country."
    },
    "National Values": {
        "definition": "National values are principles and standards that help promote responsible behaviour and unity in a country.",
        "example": "Honesty, tolerance and respect for others can support peaceful community life.",
        "key": "Relate each value to responsible behaviour and national unity."
    },
    "Human Rights": {
        "definition": "Human rights are basic rights and freedoms that belong to people by virtue of being human.",
        "example": "Freedom of expression is an example of a recognised human right, subject to lawful limits.",
        "key": "Separate fundamental rights from privileges or personal preferences."
    },
    "Responsibilities of Citizens": {
        "definition": "Citizens' responsibilities are duties people are expected to perform to support lawful and peaceful society.",
        "example": "Obeying laws and respecting the rights of others are civic responsibilities.",
        "key": "Think about duties that help society function fairly."
    },
    "Democracy": {
        "definition": "Democracy is a system of government in which political power is exercised by the people, directly or through representatives.",
        "example": "Citizens choosing representatives through elections is a democratic process.",
        "key": "Key ideas include participation, representation and accountability."
    },
    "Rule of Law": {
        "definition": "The rule of law means that laws govern society and apply through established legal processes rather than arbitrary power.",
        "example": "A public official is subject to the same applicable law as other citizens.",
        "key": "Focus on equality before the law and lawful procedures."
    },
    "National Identity": {
        "definition": "National identity is the shared sense of belonging to a nation and its people, history, symbols and values.",
        "example": "A national flag can serve as a symbol of shared national identity.",
        "key": "Identity can be strengthened by shared history, values and civic belonging."
    },
    "Culture and Heritage": {
        "definition": "Culture and heritage include the beliefs, practices, languages, arts, traditions and historical inheritance of a community.",
        "example": "A community's traditional festival can be part of its cultural heritage.",
        "key": "Heritage can be tangible, such as artefacts, or intangible, such as traditions."
    },
    "Leadership": {
        "definition": "Leadership is the ability to guide, influence and organise people toward shared goals.",
        "example": "A student leader who organises classmates fairly is exercising leadership.",
        "key": "Effective leadership involves responsibility, communication and accountability."
    },
    "Community Development": {
        "definition": "Community development is the process of improving the social, economic and physical well-being of a community through participation and action.",
        "example": "Residents working together to improve a local water facility is community development.",
        "key": "Look for collective action aimed at improving community life."
    },
    "Computer Hardware": {
        "definition": "Computer hardware refers to the physical components of a computer system that can be seen or touched.",
        "example": "A keyboard, monitor and processor are examples of computer hardware.",
        "key": "Hardware performs input, processing, storage or output functions."
    },
    "Computer Software": {
        "definition": "Computer software is a set of programs and instructions that tell computer hardware what to do.",
        "example": "A word processor is software used to create and edit documents.",
        "key": "Software provides instructions; hardware carries out those instructions."
    },
    "Algorithms": {
        "definition": "An algorithm is a finite, ordered set of clear steps for solving a problem or completing a task.",
        "example": "A set of steps for finding the largest number in a list can form an algorithm.",
        "key": "A good algorithm has clear steps, a defined goal and an end."
    },
    "Data Representation": {
        "definition": "Data representation is the way information is encoded so that a computer can store and process it.",
        "example": "The decimal number 5 can be represented in binary as 101.",
        "key": "Computers commonly represent information using binary values."
    },
    "Databases": {
        "definition": "A database is an organised collection of related data that can be stored, searched and updated.",
        "example": "A school database can contain student names, classes and examination results.",
        "key": "Tables, records and fields help organise structured data."
    },
    "Computer Networks": {
        "definition": "A computer network is a group of connected devices that communicate and share resources.",
        "example": "Computers connected to the same school network can share files or a printer.",
        "key": "A network depends on communication links and agreed rules or protocols."
    },
    "Cyber Safety": {
        "definition": "Cyber safety is the practice of protecting people, devices, accounts and information when using digital systems.",
        "example": "Using a strong unique password and avoiding suspicious links can reduce online risks.",
        "key": "Protect personal information and think before clicking or sharing."
    },
    "Programming Basics": {
        "definition": "Programming is the process of writing instructions that a computer can execute to perform tasks.",
        "example": "A program can use a variable to store a score and an if statement to check whether the score is high enough.",
        "key": "Understand variables, input, conditions, loops and functions as core building blocks."
    },
    "Operating Systems": {
        "definition": "An operating system is system software that manages computer hardware and provides services for applications and users.",
        "example": "Windows, macOS and Linux are operating systems.",
        "key": "The operating system manages resources such as memory, files and devices."
    },
    "Digital Citizenship": {
        "definition": "Digital citizenship is responsible, safe and respectful participation in digital environments.",
        "example": "Checking information before sharing it is responsible digital citizenship.",
        "key": "Consider privacy, respect, safety and the impact of online actions."
    },
    "The Cell": {
        "definition": "The cell is the basic structural and functional unit of living organisms.",
        "example": "A red blood cell is specialised to transport oxygen.",
        "key": "Cell structures are adapted to perform particular functions."
    },
    "Nutrition": {
        "definition": "Nutrition is the process by which organisms obtain and use nutrients needed for energy, growth, repair and maintenance.",
        "example": "Carbohydrates provide an important source of energy in the diet.",
        "key": "Different nutrients perform different roles in the body."
    },
    "Transport System": {
        "definition": "A transport system moves substances such as oxygen, nutrients and wastes around an organism.",
        "example": "In humans, the circulatory system transports oxygen from the lungs to body tissues.",
        "key": "Connect each transport structure with the substances it carries."
    },
    "Respiration": {
        "definition": "Respiration is the process by which cells release usable energy from food.",
        "example": "Aerobic respiration uses oxygen to release energy from glucose.",
        "key": "Respiration is a cellular energy-releasing process, not simply breathing."
    },
    "Excretion": {
        "definition": "Excretion is the removal of metabolic waste products from an organism.",
        "example": "The kidneys remove urea and excess water from the blood to form urine.",
        "key": "Do not confuse excretion with removal of undigested food."
    },
    "Reproduction": {
        "definition": "Reproduction is the biological process by which organisms produce new individuals of their species.",
        "example": "Humans reproduce sexually, involving male and female gametes.",
        "key": "Distinguish sexual reproduction from asexual reproduction."
    },
    "Genetics": {
        "definition": "Genetics is the study of heredity and variation and how traits are transmitted between generations.",
        "example": "A child can inherit an allele for a trait from each parent.",
        "key": "Genes carry hereditary information and can have different alleles."
    },
    "Ecology": {
        "definition": "Ecology is the study of interactions between organisms and their environment.",
        "example": "A food chain shows how energy is transferred between organisms in an ecosystem.",
        "key": "Consider relationships among organisms and both living and non-living factors."
    },
    "Evolution": {
        "definition": "Evolution is the change in inherited characteristics of populations over generations.",
        "example": "A population can change over generations when inherited variations affect survival and reproduction.",
        "key": "Evolution concerns populations across generations, not changes acquired during one lifetime."
    },
    "Human Health": {
        "definition": "Human health involves the physical, mental and social well-being of a person and factors that affect it.",
        "example": "Balanced nutrition, physical activity and good hygiene can support health.",
        "key": "Health is influenced by biological, environmental and lifestyle factors."
    },
    "Matter": {
        "definition": "Matter is anything that has mass and occupies space.",
        "example": "Water, oxygen and a wooden desk are all forms of matter.",
        "key": "Particles in matter are arranged and move differently in different states."
    },
    "Atomic Structure": {
        "definition": "Atomic structure describes the arrangement of protons and neutrons in the nucleus and electrons around the nucleus.",
        "example": "A neutral atom has equal numbers of protons and electrons.",
        "key": "The number of protons identifies the element."
    },
    "Periodic Table": {
        "definition": "The periodic table organises chemical elements according to their atomic structure and recurring properties.",
        "example": "Elements in the same group often have similar chemical properties.",
        "key": "Use groups and periods to identify patterns in element properties."
    },
    "Chemical Bonding": {
        "definition": "Chemical bonding is the attraction that holds atoms or ions together in chemical substances.",
        "example": "Sodium chloride contains oppositely charged sodium and chloride ions held together by electrostatic attraction.",
        "key": "Bonding involves the behaviour of valence electrons."
    },
    "Acids, Bases and Salts": {
        "definition": "Acids, bases and salts are important classes of substances with characteristic chemical properties.",
        "example": "Hydrochloric acid reacts with sodium hydroxide to form sodium chloride and water.",
        "key": "Learn their properties, reactions and appropriate indicators."
    },
    "Mole Concept": {
        "definition": "The mole is a counting unit used to relate the amount of a substance to the number of particles present.",
        "example": "One mole contains approximately 6.02×10²³ specified particles.",
        "key": "Use molar relationships consistently with the units given."
    },
    "Chemical Reactions": {
        "definition": "A chemical reaction is a process in which substances are transformed into new substances with different compositions.",
        "example": "When magnesium reacts with oxygen, magnesium oxide is formed.",
        "key": "Atoms are rearranged; they are not created or destroyed in the reaction."
    },
    "Electrolysis": {
        "definition": "Electrolysis uses electrical energy to drive a chemical change in an electrolyte.",
        "example": "Electric current can decompose water into hydrogen and oxygen.",
        "key": "Track the ions and electrode processes in the electrolyte."
    },
    "Organic Chemistry": {
        "definition": "Organic chemistry is the study of carbon-containing compounds, especially hydrocarbons and their derivatives.",
        "example": "Ethane is an organic compound containing carbon and hydrogen.",
        "key": "Carbon forms many compounds because of its bonding versatility."
    },
    "Chemical Equilibrium": {
        "definition": "Chemical equilibrium is a dynamic state in a reversible reaction where forward and reverse reaction rates are equal.",
        "example": "At equilibrium, reactants and products continue to react, but their concentrations remain constant under fixed conditions.",
        "key": "Equilibrium is dynamic, not a state where reactions stop."
    },
    "Measurement": {
        "definition": "Measurement is the process of comparing a physical quantity with an agreed standard unit.",
        "example": "Measuring the length of a table in metres gives a numerical value with a unit.",
        "key": "Always state the quantity, numerical value and appropriate unit."
    },
    "Motion": {
        "definition": "Motion is a change in position of an object relative to a reference point over time.",
        "example": "A car moving along a road changes its position relative to a roadside tree.",
        "key": "Choose a clear reference point when describing motion."
    },
    "Force": {
        "definition": "Force is an interaction that can change an object's motion or shape.",
        "example": "A push can accelerate a trolley from rest.",
        "key": "Force is measured in newtons and has both magnitude and direction."
    },
    "Work, Energy and Power": {
        "definition": "Work is energy transferred by a force through a distance; energy is the capacity to cause change; power is the rate of energy transfer.",
        "example": "Lifting a box transfers energy by doing work against gravity.",
        "key": "Keep work, energy and power as related but distinct quantities."
    },
    "Heat": {
        "definition": "Heat is energy transferred between bodies because of a temperature difference.",
        "example": "A hot metal spoon transfers thermal energy to cooler water.",
        "key": "Heat is transferred; temperature describes the thermal state of a body."
    },
    "Waves": {
        "definition": "A wave is a disturbance that transfers energy from one place to another without requiring net transport of matter.",
        "example": "Sound travels through a medium as a mechanical wave.",
        "key": "Learn amplitude, wavelength, frequency and wave speed."
    },
    "Light": {
        "definition": "Light is electromagnetic radiation that can be detected by the human eye.",
        "example": "A mirror can reflect light so that an image is formed.",
        "key": "Reflection, refraction and dispersion describe important light behaviours."
    },
    "Electricity": {
        "definition": "Electricity involves electric charge and the effects of its movement or interaction.",
        "example": "A closed circuit allows electric current to flow through a bulb.",
        "key": "Distinguish current, potential difference and resistance."
    },
    "Magnetism": {
        "definition": "Magnetism is the phenomenon associated with magnetic fields and forces produced by magnets and moving charges.",
        "example": "A bar magnet can attract iron objects and has north and south poles.",
        "key": "Magnetic fields describe the region where magnetic effects can act."
    },
    "Electromagnetic Waves": {
        "definition": "Electromagnetic waves are oscillating electric and magnetic fields that can travel through a vacuum.",
        "example": "Radio waves, visible light and X-rays are parts of the electromagnetic spectrum.",
        "key": "Different regions of the spectrum differ mainly in frequency and wavelength."
    },
    "Scarcity": {
        "definition": "Scarcity means that resources are limited while human wants are unlimited.",
        "example": "A family with limited income must decide which needs to meet first.",
        "key": "Scarcity is the basic economic problem behind choice."
    },
    "Opportunity Cost": {
        "definition": "Opportunity cost is the value of the next best alternative forgone when a choice is made.",
        "example": "If you spend your limited study time on one activity instead of another, the best alternative you give up is the opportunity cost.",
        "key": "Identify the best alternative that was not chosen."
    },
    "Demand": {
        "definition": "Demand is the quantity of a good or service consumers are willing and able to buy at a given price over a period.",
        "example": "If the price of a product falls, consumers may be willing to buy more of it, other things being equal.",
        "key": "Demand requires both willingness and ability to purchase."
    },
    "Supply": {
        "definition": "Supply is the quantity of a good or service producers are willing and able to offer for sale at a given price over a period.",
        "example": "A rise in the price received by producers may encourage them to offer more for sale, other things being equal.",
        "key": "Supply concerns sellers' willingness and ability to provide goods or services."
    },
    "Market": {
        "definition": "A market is a system or arrangement where buyers and sellers interact to exchange goods and services.",
        "example": "A local food market brings buyers and sellers together to trade products.",
        "key": "Markets coordinate exchange between buyers and sellers."
    },
    "Production": {
        "definition": "Production is the process of combining resources to create goods and services that satisfy human wants.",
        "example": "A bakery combines labour, flour, equipment and other resources to produce bread.",
        "key": "Land, labour, capital and entrepreneurship are factors of production."
    },
    "Costs": {
        "definition": "Costs are the expenses or sacrifices involved in producing goods or services.",
        "example": "A business may pay for raw materials, wages and electricity as part of its production costs.",
        "key": "Separate different types of costs when analysing a business decision."
    },
    "National Income": {
        "definition": "National income measures the income earned by the factors of production of a country over a period.",
        "example": "Wages, rent, interest and profits are forms of factor income.",
        "key": "National income concepts help measure economic activity."
    },
    "Inflation": {
        "definition": "Inflation is a sustained increase in the general price level of goods and services over time.",
        "example": "If prices generally rise, the purchasing power of a fixed amount of money falls.",
        "key": "Inflation concerns the general price level, not just one product becoming more expensive."
    },
    "Unemployment": {
        "definition": "Unemployment occurs when people who are willing and able to work and are seeking work do not have jobs.",
        "example": "A qualified person actively looking for a job but unable to find one is unemployed.",
        "key": "The definition depends on willingness, ability and active search for work."
    },
    "Trade": {
        "definition": "Trade is the buying and selling or exchange of goods and services between parties.",
        "example": "A shop buys goods from a wholesaler and sells them to consumers.",
        "key": "Trade connects producers, intermediaries and consumers."
    },
    "Aids to Trade": {
        "definition": "Aids to trade are services that support the movement, financing, protection, promotion and communication involved in trade.",
        "example": "Banking and insurance can support business transactions without being the physical goods traded.",
        "key": "Examples include banking, insurance, transport, warehousing and advertising."
    },
    "Retail Trade": {
        "definition": "Retail trade involves selling goods or services in relatively small quantities directly to final consumers.",
        "example": "A supermarket selling a loaf of bread to a household is engaged in retail trade.",
        "key": "The final consumer is the key link in retail trade."
    },
    "Wholesale Trade": {
        "definition": "Wholesale trade involves buying goods in large quantities and selling them mainly to retailers or other businesses.",
        "example": "A wholesaler may buy cartons of drinks from a producer and supply them to shops.",
        "key": "Wholesalers commonly deal in bulk and serve business customers."
    },
    "Transportation": {
        "definition": "Transportation is the movement of people or goods from one place to another.",
        "example": "Trucks can transport manufactured goods from a factory to distribution centres.",
        "key": "Transportation helps goods reach markets and consumers."
    },
    "Warehousing": {
        "definition": "Warehousing is the storage of goods until they are needed for sale or further distribution.",
        "example": "A warehouse can hold packaged products before they are sent to retailers.",
        "key": "Warehousing helps bridge the time gap between production and demand."
    },
    "Insurance": {
        "definition": "Insurance is a contract that provides financial protection against specified risks in return for a premium.",
        "example": "A business may insure its property against certain covered losses.",
        "key": "Insurance transfers specified financial risk from the insured to the insurer under agreed terms."
    },
    "Banking": {
        "definition": "Banking is the provision of financial services such as accepting deposits, making payments and providing loans.",
        "example": "A bank account can be used to receive money and make electronic payments.",
        "key": "Banks provide services that support saving, borrowing and transactions."
    },
    "Advertising": {
        "definition": "Advertising is paid communication used to inform or persuade a target audience about a product, service, idea or organisation.",
        "example": "A company may pay for an online advert to introduce a new product.",
        "key": "Consider the message, audience, medium and purpose of the advert."
    },
    "Business Communication": {
        "definition": "Business communication is the exchange of clear information within or between organisations for business purposes.",
        "example": "A formal email can communicate a meeting date and required actions to staff.",
        "key": "Effective business communication should be clear, accurate and appropriate to its audience."
    }
};

  function getLesson(subject, topic) {
    if (BETTER_LESSONS[topic]) return BETTER_LESSONS[topic];

    if (typeof studyKnowledge !== "undefined" && studyKnowledge[topic]) {
      return {
        definition: String(studyKnowledge[topic]),
        example: `For ${topic}, apply the definition to a simple real-world or classroom situation.`,
        key: `Focus on what ${topic} means, what it is used for, and how to recognise it in a question.`
      };
    }

    return {
      definition: `${topic} is the study of the ideas, terms and processes connected with ${topic} in ${subject}.`,
      example: `A simple ${topic} example should show the idea being used in a realistic ${subject} situation.`,
      key: `Learn the meaning of ${topic}, then practise identifying and applying it.`
    };
  }

  function renderBetterLesson() {
    const area = document.getElementById("chatArea");
    if (!area || !selectedSubject || !selectedTopic) return;

    const lesson = getLesson(selectedSubject, selectedTopic);

    area.innerHTML = "";

    if (typeof renderChatMessage === "function") {
      renderChatMessage(
        `<strong>${escapeHTML(selectedTopic)}</strong>
         <br><br>
         <strong>Definition</strong><br>
         ${escapeHTML(lesson.definition)}
         <br><br>
         <strong>Example</strong><br>
         ${escapeHTML(lesson.example)}
         <br><br>
         <strong>Key idea</strong><br>
         ${escapeHTML(lesson.key)}
         <br><br>
         <strong>Want more?</strong> Ask me for another example, a simpler explanation, or a practice question.`,
        "ai"
      );
    }
  }

  /* Make the study page show the improved lesson every time a topic opens. */
  const oldSelectTopic = window.selectTopic;
  window.selectTopic = function (topicName) {
    if (typeof oldSelectTopic === "function") {
      oldSelectTopic(topicName);
    }
    setTimeout(renderBetterLesson, 0);
  };

  /* ---------------------------------------------------------
     AI TUTOR: actually answer example/definition requests
     --------------------------------------------------------- */
  window.generateSmartResponse = function (question) {
    const input = String(question || "").toLowerCase();
    const subject = selectedSubject || "your subject";
    const topic = selectedTopic || "your topic";
    const lesson = getLesson(subject, topic);

    if (
      input.includes("example") ||
      input.includes("examples") ||
      input.includes("give me an example")
    ) {
      return `<strong>Example: ${escapeHTML(topic)}</strong>
        <br><br>${escapeHTML(lesson.example)}
        <br><br><strong>Why it matters:</strong>
        <br>${escapeHTML(lesson.key)}`;
    }

    if (
      input.includes("define") ||
      input.includes("definition") ||
      input.includes("what is") ||
      input.includes("meaning") ||
      input.includes("explain") ||
      input.includes("simply")
    ) {
      return `<strong>${escapeHTML(topic)}</strong>
        <br><br><strong>Definition:</strong>
        <br>${escapeHTML(lesson.definition)}
        <br><br><strong>Example:</strong>
        <br>${escapeHTML(lesson.example)}`;
    }

    if (
      input.includes("quiz") ||
      input.includes("question") ||
      input.includes("test")
    ) {
      return `Let's test <strong>${escapeHTML(topic)}</strong>. Generate today's quiz after studying the topic.`;
    }

    return `<strong>${escapeHTML(topic)}</strong>
      <br><br>${escapeHTML(lesson.definition)}
      <br><br><strong>Example:</strong> ${escapeHTML(lesson.example)}`;
  };

  /* ---------------------------------------------------------
     DAILY QUIZ QUESTION FACTORIES
     --------------------------------------------------------- */
  const DAILY_QUIZ = {
    "Number Bases": [
      ["What is 101₂ in decimal?", ["3", "4", "5", "6"], "5"],
      ["Which base uses only 0 and 1?", ["Base 2", "Base 5", "Base 8", "Base 10"], "Base 2"]
    ],
    Indices: [
      ["What does 2³ mean?", ["2+2+2", "2×2×2", "3×3", "2×3"], "2×2×2"],
      ["What is 2⁴?", ["6", "8", "12", "16"], "16"]
    ],
    "Quadratic Equations": [
      ["Which equation is quadratic?", ["x+4=0", "2x−1=0", "x²−5x+6=0", "3x=9"], "x²−5x+6=0"],
      ["What is the highest power of the variable in a quadratic equation?", ["1", "2", "3", "4"], "2"]
    ],
    Probability: [
      ["What is the probability of rolling a 3 on a fair six-sided die?", ["1/2", "1/3", "1/6", "1/12"], "1/6"],
      ["What does probability 0 represent?", ["A certain event", "An impossible event", "An even event", "A repeated event"], "An impossible event"]
    ],
    Trigonometry: [
      ["In a right triangle, which ratio is opposite ÷ hypotenuse?", ["sin θ", "cos θ", "tan θ", "sec θ"], "sin θ"],
      ["Which mnemonic helps remember the basic right-triangle ratios?", ["BODMAS", "SOH-CAH-TOA", "PEMDAS", "FOIL"], "SOH-CAH-TOA"]
    ],
    Genetics: [
      ["What is genetics mainly concerned with?", ["Weather", "Heredity and variation", "Rock formation", "Electric circuits"], "Heredity and variation"],
      ["What are different forms of a gene called?", ["Organs", "Alleles", "Tissues", "Enzymes"], "Alleles"]
    ],
    Force: [
      ["What can a force change?", ["Only colour", "Motion or shape", "Only temperature", "Only mass"], "Motion or shape"],
      ["What is the SI unit of force?", ["Joule", "Watt", "Newton", "Pascal"], "Newton"]
    ],
    Power: [
      ["What does power measure?", ["How quickly work is done", "How much mass an object has", "How far an object travels", "How hot an object is"], "How quickly work is done"],
      ["What is the SI unit of power?", ["Newton", "Joule", "Watt", "Volt"], "Watt"]
    ],
    Matter: [
      ["Which statement best describes matter?", ["Anything with mass and volume", "Anything that produces light", "Only solids", "Only living things"], "Anything with mass and volume"],
      ["Which is a state of matter?", ["Solid", "Energy", "Force", "Speed"], "Solid"]
    ],
    "Atomic Structure": [
      ["Which particle determines the element of an atom?", ["Electron", "Neutron", "Proton", "Photon"], "Proton"],
      ["Where are protons and neutrons found?", ["In the nucleus", "Outside the atom", "In the electron cloud only", "In a molecule"], "In the nucleus"]
    ],
    Algorithms: [
      ["What is an algorithm?", ["A type of computer screen", "A clear sequence of steps for solving a problem", "A storage device", "A programming language"], "A clear sequence of steps for solving a problem"],
      ["Which quality should algorithm steps have?", ["They should be unclear", "They should be random", "They should be clear and ordered", "They should never end"], "They should be clear and ordered"]
    ],
    Databases: [
      ["What is a database?", ["An organised collection of information", "A computer monitor", "A programming cable", "A type of keyboard"], "An organised collection of information"],
      ["What is a school database useful for?", ["Storing organised student records", "Increasing screen brightness", "Changing keyboard keys", "Drawing only pictures"], "Storing organised student records"]
    ],
    Vectors: [
      ["What two features define a vector quantity?", ["Mass and volume", "Magnitude and direction", "Colour and shape", "Time and temperature"], "Magnitude and direction"],
      ["Which is a vector quantity?", ["Speed", "Distance", "Velocity", "Mass"], "Velocity"]
    ],
    Differentiation: [
      ["What does differentiation help you find?", ["Rates of change", "Only total mass", "Only temperature", "Only probability"], "Rates of change"],
      ["If y = x², what is dy/dx?", ["x", "2x", "x²", "2"], "2x"]
    ],
    "The Cell": [
      ["What is the cell?", ["The basic structural and functional unit of life", "A type of tissue", "A body system", "A chemical element"], "The basic structural and functional unit of life"]
    ]
  };

  function shuffleArray(array) {
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function makeDailyQuestion(item, topic, number) {
    const text = item[0];
    const options = shuffleArray(item[1]);
    return {
      question: text,
      options,
      answer: item[2],
      topic,
      number
    };
  }

  function genericDailyQuestions(subject, topic) {
    const lesson = getLesson(subject, topic);
    return [
      {
        question: `Which statement best defines ${topic}?`,
        options: shuffleArray([
          lesson.definition,
          `It is unrelated to ${subject}.`,
          `It only describes revision activities.`,
          `It is a type of school timetable.`
        ]),
        answer: lesson.definition,
        topic
      },
      {
        question: `Which statement is the best example connected with ${topic}?`,
        options: shuffleArray([
          lesson.example,
          `Ignoring the topic completely.`,
          `Changing the subject without studying it.`,
          `Memorising unrelated information.`
        ]),
        answer: lesson.example,
        topic
      }
    ];
  }

  function buildDailyQuizQuestions() {
    const studied = getTodayTopics();
    const pool = [];
    const seen = new Set();

    studied.forEach(item => {
      const topic = item.topic;
      const subject = item.subject;
      const specific = DAILY_QUIZ[topic] || [];
      const source = specific.length
        ? specific.map(q => makeDailyQuestion(q, topic, 0))
        : genericDailyQuestions(subject, topic);

      source.forEach(q => {
        const key = q.question.toLowerCase().trim();
        if (!seen.has(key)) {
          seen.add(key);
          pool.push(q);
        }
      });
    });

    /* Also use existing verified quiz-bank questions when they mention a
       topic explicitly, but never use unrelated questions before today's topics. */
    studied.forEach(item => {
      const bank =
        (typeof TGEN_QUIZ_BANK !== "undefined" && TGEN_QUIZ_BANK[item.subject]) || [];

      bank.forEach(raw => {
        const q = {
          question: raw && String(raw.question || raw.q || raw.prompt || ""),
          options: raw && Array.isArray(raw.options) ? raw.options.map(String).slice(0, 4) : [],
          answer: raw && raw.answer !== undefined ? String(raw.answer) : ""
        };
        if (!q.question || q.options.length < 2 || !q.answer) return;
        if (!q) return;
        const text = q.question.toLowerCase();
        const topicWords = String(item.topic).toLowerCase().split(/\s+/).filter(w => w.length > 3);
        const matchesTopic = topicWords.some(word => text.includes(word));
        if (matchesTopic) {
          const key = q.question.toLowerCase().trim();
          if (!seen.has(key)) {
            seen.add(key);
            pool.push({ ...q, topic: item.topic });
          }
        }
      });
    });

    return shuffleArray(pool);
  }

  /* ---------------------------------------------------------
     QUIZ: randomised questions from TODAY'S studied topics
     --------------------------------------------------------- */
  function renderDailyQuiz() {
    const list = document.getElementById("quizList");
    if (!list) return;

    const studied = getTodayTopics();

    if (!studied.length) {
      window.quizQuestions = [];
      window.quizAnswers = {};
      list.innerHTML = `
        <div class="quiz-item">
          <h3>Study something first.</h3>
          <p>Your daily quiz is based only on topics you studied today. Open a topic, study it, then come back here.</p>
        </div>
      `;
      const submit = document.getElementById("submitQuizBtn");
      if (submit) submit.style.display = "none";
      const counter = document.getElementById("questionCounter");
      if (counter) counter.textContent = "0 topics studied today";
      return;
    }

    let pool = buildDailyQuizQuestions();

    /* Guarantee exactly 10 questions. If today's lesson pool is small,
       create fresh wording variations from the same studied material. */
    let variation = 1;
    while (pool.length < 10) {
      studied.forEach(item => {
        if (pool.length >= 10) return;
        const lesson = getLesson(item.subject, item.topic);
        const candidates = [
          {
            question: `What is the main idea to remember about ${item.topic}?`,
            options: shuffleArray([
              lesson.key,
              "It is unrelated to the subject.",
              "It is only a classroom activity.",
              "It has no connection with the topic."
            ]),
            answer: lesson.key,
            topic: item.topic
          },
          {
            question: `Which statement matches the lesson on ${item.topic}?`,
            options: shuffleArray([
              lesson.definition,
              "The topic has no definition.",
              "The topic is only about school holidays.",
              "The topic is unrelated to learning."
            ]),
            answer: lesson.definition,
            topic: item.topic
          },
          {
            question: `Which example connects to ${item.topic}?`,
            options: shuffleArray([
              lesson.example,
              "A completely unrelated school activity.",
              "An unrelated weather report.",
              "A random timetable change."
            ]),
            answer: lesson.example,
            topic: item.topic
          }
        ];
        const candidate = candidates[(variation - 1) % candidates.length];
        const key = candidate.question.toLowerCase();
        if (!pool.some(q => q.question.toLowerCase() === key)) {
          pool.push(candidate);
        }
        variation++;
      });
      if (variation > 100) break;
    }

    pool = shuffleArray(pool).slice(0, 10);

    window.quizQuestions = pool;
    window.quizAnswers = {};
    quizStarted = true;
    quizSubmitted = false;
    currentQuizScore = 0;

    list.innerHTML = pool.map((q, index) => `
      <div class="quiz-item" id="tgen-quiz-${index}">
        <p class="quiz-question-text">
          <strong>${index + 1}.</strong> ${escapeHTML(q.question)}
        </p>
        <div class="quiz-options">
          ${q.options.map(option => `
            <label class="quiz-option">
              <input type="radio"
                name="tgen-quiz-${index}"
                value="${escapeAttribute(option)}">
              <span>${escapeHTML(option)}</span>
            </label>
          `).join("")}
        </div>
        <small class="tgen-quiz-topic-label">Studied today: ${escapeHTML(q.topic || "Today's topic")}</small>
      </div>
    `).join("");

    const counter = document.getElementById("questionCounter");
    if (counter) counter.textContent = `0 of 10 answered`;

    const generate = document.getElementById("generateQuizBtn");
    const submit = document.getElementById("submitQuizBtn");
    const next = document.getElementById("quizNextBtn");
    const result = document.getElementById("quizResult");

    if (generate) generate.style.display = "none";
    if (submit) submit.style.display = "none";
    if (next) next.style.display = "none";
    if (result) {
      result.innerHTML = "";
      result.style.display = "none";
    }

    list.querySelectorAll('input[type="radio"]').forEach(input => {
      input.addEventListener("change", window.updateQuizProgress);
    });

    console.log("TGEN-AI: Daily quiz generated from", studied);
  }

  function getSavedProfile() {
    try {
      return JSON.parse(localStorage.getItem("tgen-ai-profile") || "null");
    } catch (e) {
      return null;
    }
  }

  function generateDailyQuiz() {
    const profile = getSavedProfile();
    if (!profile) {
      if (typeof window.showScreen === "function") window.showScreen("profile");
      return;
    }
    renderDailyQuiz();
  }

  /* Preserve the existing score screen, but score the daily quiz questions. */
  function submitDailyQuiz() {
    const questions = Array.isArray(window.quizQuestions) ? window.quizQuestions : [];
    if (!questions.length) {
      alert("Study a topic today and generate a quiz first.");
      return;
    }

    let answered = 0;
    let score = 0;

    questions.forEach((question, index) => {
      const selected = document.querySelector(`input[name="tgen-quiz-${index}"]:checked`);
      const answer = selected ? selected.value : "";
      window.quizAnswers[index] = answer;
      if (answer) answered++;
      if (answer === question.answer) score++;
    });

    if (answered < questions.length) {
      alert(`Please answer all ${questions.length} questions before submitting.`);
      return;
    }

    quizSubmitted = true;
    currentQuizScore = score;
    const percentage = Math.round((score / questions.length) * 100);
    const result = document.getElementById("quizResult");

    if (result) {
      result.style.display = "block";
      result.innerHTML = `
        <div class="quiz-result-card">
          <h2>${percentage >= 80 ? "Excellent work! 🔥" : percentage >= 60 ? "Nice work!" : "Keep practising!"}</h2>
          <p class="quiz-score">${score}/${questions.length}</p>
          <p>You scored <strong>${percentage}%</strong> on today's revision.</p>
          <button type="button" class="primary-btn small-btn" id="tgenRetakeQuizBtn">New random quiz</button>
        </div>
      `;
      const retake = document.getElementById("tgenRetakeQuizBtn");
      if (retake) retake.addEventListener("click", generateDailyQuiz);
    }

    const submit = document.getElementById("submitQuizBtn");
    if (submit) submit.style.display = "none";

    const counter = document.getElementById("questionCounter");
    if (counter) counter.textContent = `${score}/${questions.length} correct`;

    const sideScore = document.getElementById("quizSideScore");
    if (sideScore) sideScore.textContent = `${score}/${questions.length}`;

    try {
      const oldScore = typeof getStoredNumber === "function" ? getStoredNumber("tgenScore") : 0;
      if (typeof setStoredNumber === "function") setStoredNumber("tgenScore", oldScore + score);
    } catch (e) {}

    if (typeof loadProgress === "function") loadProgress();
  }

  function updateDailyQuizProgress() {
    if (quizSubmitted) return;
    const total = Array.isArray(window.quizQuestions) ? window.quizQuestions.length : 0;
    const answered = document.querySelectorAll('#quizList input[type="radio"]:checked').length;
    const counter = document.getElementById("questionCounter");
    if (counter) counter.textContent = `${answered} of ${total} answered`;
    const submit = document.getElementById("submitQuizBtn");
    if (submit) submit.style.display = total && answered === total ? "inline-flex" : "none";
  }

  /* Final overrides: this patch is deliberately last. */
  window.generateQuiz = generateDailyQuiz;
  window.renderQuiz = renderDailyQuiz;
  window.submitQuiz = submitDailyQuiz;
  window.updateQuizProgress = updateDailyQuizProgress;
  window.retakeQuiz = generateDailyQuiz;

  const style = document.createElement("style");
  style.textContent = `
    .tgen-quiz-topic-label {
      display: block;
      margin-top: 10px;
      opacity: .65;
      font-size: .78rem;
    }
  `;
  document.head.appendChild(style);

  /* If the page is already loaded, re-render the lesson when appropriate. */
  if (document.readyState !== "loading") {
    setTimeout(() => {
      if (selectedSubject && selectedTopic) renderBetterLesson();
    }, 0);
  }

  console.log("TGEN-AI: DAILY LEARNING + DEFINITIONS/EXAMPLES PATCH LOADED.");
})();

/* Final button wiring for the daily quiz patch. */
(function () {
  function wire(id, handler) {
    const button = document.getElementById(id);
    if (!button || !button.parentNode) return;

    const fresh = button.cloneNode(true);
    button.parentNode.replaceChild(fresh, button);

    fresh.addEventListener("click", function (event) {
      event.preventDefault();
      event.stopPropagation();
      handler(event);
    });
  }

  function apply() {
    wire("generateQuizBtn", window.generateQuiz);
    wire("submitQuizBtn", window.submitQuiz);
    wire("quizNextBtn", window.generateQuiz);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", apply, { once: true });
  } else {
    apply();
  }
})();

/* =========================================================
   TGEN-AI — CHAT UI + OPEN-ENDED AI PATCH
   - Removes the U avatar from student messages.
   - Uses a ChatGPT-style typing bubble.
   - Makes responses sectionized and interactive.
   - Supports an optional real AI endpoint for open-ended questions.
   ========================================================= */
(function () {
  const TGEN_AI_API_URL = window.TGEN_AI_API_URL || "/api/chat";

  function cleanText(value) {
    return String(value || "").replace(/\s+/g, " ").trim();
  }

  function escape(value) {
    return typeof escapeHTML === "function"
      ? escapeHTML(String(value || ""))
      : String(value || "").replace(/[&<>"']/g, function (c) {
          return ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"})[c];
        });
  }

  /* ChatGPT-style message bubbles: no U avatar on student messages. */
  window.renderChatMessage = function (message, sender) {
    const chatArea = document.getElementById("chatArea");
    if (!chatArea) return;

    const empty = chatArea.querySelector(".empty-chat");
    if (empty) empty.remove();

    const wrapper = document.createElement("div");
    wrapper.className = "chat-message " + (sender === "user" ? "user-message" : "ai-message");

    if (sender === "user") {
      wrapper.innerHTML = `
        <div class="message-content user-bubble">${message}</div>
      `;
    } else {
      wrapper.innerHTML = `
        <div class="message-avatar tgen-ai-avatar" aria-hidden="true"><span></span></div>
        <div class="message-content">${message}</div>
      `;
    }

    chatArea.appendChild(wrapper);
    chatArea.scrollTop = chatArea.scrollHeight;
    return wrapper;
  };

  /* Clean typing bubble: no letter/avatar beside it. */
  window.addLoadingIndicator = function () {
    const chatArea = document.getElementById("chatArea");
    if (!chatArea) return null;

    const loading = document.createElement("div");
    loading.className = "chat-message ai-message loading-message";
    loading.innerHTML = `
      <div class="message-avatar tgen-ai-avatar" aria-hidden="true"><span></span></div>
      <div class="message-content typing-bubble" aria-label="TGEN-AI is typing">
        <span></span><span></span><span></span>
      </div>
    `;
    chatArea.appendChild(loading);
    chatArea.scrollTop = chatArea.scrollHeight;
    return loading;
  };

  const TGEN_RICH_KNOWLEDGE = {
    "Parts of Speech": {
      definition: "Parts of speech are categories of words based on the job each word performs in a sentence.",
      explanation: "Common parts of speech include nouns, pronouns, verbs, adjectives, adverbs, prepositions, conjunctions and interjections.",
      example: "In the sentence ‘The bright student answered quickly’, ‘student’ is a noun, ‘bright’ is an adjective, ‘answered’ is a verb and ‘quickly’ is an adverb.",
      key: "Identify the job a word performs in the sentence, not just the word itself."
    },
    "Number Bases": {
      definition: "A number base is a system for representing numbers using a fixed set of digits and place values.",
      explanation: "In base 10, place values are powers of 10. In base 2, place values are powers of 2 and only 0 and 1 are used.",
      example: "101₂ means 1×2² + 0×2¹ + 1×2⁰ = 5₁₀.",
      key: "The base tells you the place-value system being used."
    },
    "Indices": {
      definition: "An index, or exponent, tells how many times a base is multiplied by itself.",
      explanation: "For example, 3⁴ means 3 × 3 × 3 × 3. Index laws help simplify products, quotients and powers.",
      example: "2³ × 2² = 2⁵ because the same base is multiplied, so the exponents are added.",
      key: "Always identify the base and exponent before applying an index law."
    },
    "Quadratic Equations": {
      definition: "A quadratic equation is an equation in which the highest power of the variable is 2.",
      explanation: "A quadratic can have two, one or no real solutions depending on its discriminant.",
      example: "x² − 5x + 6 = 0 factors as (x − 2)(x − 3) = 0, giving x = 2 or x = 3.",
      key: "Look for the x² term and choose a suitable method such as factorisation or the quadratic formula."
    },
    "Probability": {
      definition: "Probability is a measure of how likely an event is to occur.",
      explanation: "For equally likely outcomes, probability is the number of favourable outcomes divided by the total number of possible outcomes.",
      example: "For a fair six-sided die, the probability of rolling a 4 is 1/6.",
      key: "A probability is always between 0 and 1 inclusive."
    },
    "Force": {
      definition: "A force is a push or pull that can change an object's motion or shape.",
      explanation: "For an object of mass m, the net force is related to acceleration by F = ma.",
      example: "If a 2 kg object accelerates at 3 m/s², the net force is 6 N.",
      key: "Think about the net force when deciding how an object's motion changes."
    },
    "Matter": {
      definition: "Matter is anything that has mass and occupies space.",
      explanation: "Matter can exist as solids, liquids and gases, with particles arranged and moving differently in each state.",
      example: "Water is matter because it has mass and occupies space, whether it is ice, liquid water or steam.",
      key: "Use particle arrangement and movement to explain differences between states."
    },
    "Atomic Structure": {
      definition: "Atomic structure describes how an atom is organised into a nucleus and surrounding electrons.",
      explanation: "The nucleus contains protons and neutrons, while electrons occupy regions around the nucleus.",
      example: "A neutral carbon atom has 6 protons and 6 electrons.",
      key: "Protons determine the element; changing the electron count changes the ion's charge."
    },
    "Algorithms": {
      definition: "An algorithm is a finite, ordered set of clear instructions for solving a problem or completing a task.",
      explanation: "Good algorithms are precise and have a clear sequence of operations and a defined outcome.",
      example: "A recipe can act like an algorithm because it gives ordered steps for producing a result.",
      key: "An algorithm should be clear enough that the steps can be followed consistently."
    },
    "Databases": {
      definition: "A database is an organised collection of data that can be stored, searched, updated and managed.",
      explanation: "Databases help applications handle structured information efficiently.",
      example: "A school database might store student names, classes, subjects and scores in related records.",
      key: "Think about how data is organised and how it can be retrieved or updated."
    }
  };

  function getRichLesson(subject, topic) {
    if (TGEN_RICH_KNOWLEDGE[topic]) return TGEN_RICH_KNOWLEDGE[topic];
    if (typeof getLesson === "function") return getLesson(subject, topic);
    return {
      definition: `${topic} is a concept studied in ${subject}.`,
      explanation: `TGEN-AI can break ${topic} into its meaning, main ideas and applications.`,
      example: `Ask for a specific example of ${topic} and TGEN-AI will use the current topic as context.`,
      key: `Focus on the meaning of ${topic}, then practise applying it.`
    };
  }

  function section(title, body) {
    return `<div class="tgen-response-section"><h4>${title}</h4><p>${body}</p></div>`;
  }

  function localResponse(question) {
    const subject = selectedSubject || "your subject";
    const topic = selectedTopic || "your topic";
    const q = cleanText(question);
    const lower = q.toLowerCase();
    const lesson = getRichLesson(subject, topic);

    if (/^(hi|hello|hey|yo|good morning|good afternoon|good evening)\b/.test(lower)) {
      return section("TGEN-AI", "Hey! I’m ready. Ask me for a definition, example, explanation, comparison, practice question, or help with the topic you’re studying.");
    }

    if (lower.includes("example")) {
      return `<div class="tgen-response-card">${section("Example", escape(lesson.example))}${section("Why it works", escape(lesson.key))}${section("Try it", `Ask me to give you another ${escape(topic)} example or make the example harder.`)}</div>`;
    }

    if (lower.includes("define") || lower.includes("definition") || lower.includes("what is") || lower.includes("meaning")) {
      return `<div class="tgen-response-card">${section("Definition", escape(lesson.definition))}${section("In simple terms", escape(lesson.explanation))}${section("Example", escape(lesson.example))}${section("Key point", escape(lesson.key))}</div>`;
    }

    if (lower.includes("explain") || lower.includes("simpl") || lower.includes("how does") || lower.includes("why")) {
      return `<div class="tgen-response-card">${section("Quick explanation", escape(lesson.explanation))}${section("Example", escape(lesson.example))}${section("Remember", escape(lesson.key))}${section("Next step", "Ask me about a specific part of " + escape(topic) + " and I will break that part down.")}</div>`;
    }

    if (lower.includes("quiz") || lower.includes("test") || lower.includes("question")) {
      return `<div class="tgen-response-card">${section("Practice mode", "I can help you practise " + escape(topic) + ".")}${section("What you can ask", "Try: Give me one question, Give me a harder question, or Explain my answer.")}</div>`;
    }

    return `<div class="tgen-response-card">${section("Answer", "Your question is about <strong>" + escape(topic) + "</strong>.")}${section("Core idea", escape(lesson.explanation))}${section("Useful example", escape(lesson.example))}${section("Want a deeper answer?", "Ask the exact question again with the detail you want, such as compare, why, give an example, or explain step by step.")}</div>`;
  }

  /* Optional real AI connection. If /api/chat exists, arbitrary questions can be answered by the AI backend. */
  async function getAIResponse(question) {
    try {
      if (!TGEN_AI_API_URL) return null;
      const response = await fetch(TGEN_AI_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: question,
          subject: selectedSubject || "",
          topic: selectedTopic || "",
          profile: window.userProfile || null
        })
      });
      if (!response.ok) return null;
      const data = await response.json();
      const answer = data.answer || data.message || data.response;
      return answer ? String(answer) : null;
    } catch (error) {
      return null;
    }
  }

  window.generateSmartResponse = localResponse;

  window.buildStudyResponse = async function () {
    const input = document.getElementById("questionInput");
    if (!input) return;
    const question = input.value.trim();
    if (!question) return;

    window.renderChatMessage(escape(question), "user");
    input.value = "";

    const loading = window.addLoadingIndicator();
    let answer = await getAIResponse(question);
    if (!answer) answer = localResponse(question);

    if (loading) loading.remove();
    window.renderChatMessage(answer, "ai");
  };

  const style = document.createElement("style");
  style.textContent = `
    .user-bubble { margin-left: auto; max-width: 78%; }
    .tgen-ai-avatar { width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex: 0 0 30px; }
    .tgen-ai-avatar span { width: 10px; height: 10px; border-radius: 50%; background: currentColor; opacity: .75; box-shadow: 0 0 0 5px rgba(0,0,0,.04); }
    .typing-bubble { display: inline-flex; align-items: center; gap: 5px; min-width: 42px; width: fit-content; }
    .typing-bubble span { width: 6px; height: 6px; border-radius: 50%; background: currentColor; opacity: .35; animation: tgenTyping 1.2s infinite ease-in-out; }
    .typing-bubble span:nth-child(2) { animation-delay: .15s; }
    .typing-bubble span:nth-child(3) { animation-delay: .3s; }
    @keyframes tgenTyping { 0%, 60%, 100% { transform: translateY(0); opacity: .3; } 30% { transform: translateY(-4px); opacity: 1; } }
    .tgen-response-card { display: grid; gap: 12px; }
    .tgen-response-section { padding: 12px 14px; border-radius: 14px; background: rgba(0,0,0,.025); }
    .tgen-response-section h4 { margin: 0 0 5px; font-size: .9rem; }
    .tgen-response-section p { margin: 0; line-height: 1.55; }
  `;
  document.head.appendChild(style);

  /* Rewire the existing Ask button and Enter key to the new async chat handler. */
  function wireChat() {
    const button = document.getElementById("askQuestionBtn") || document.getElementById("askTGENBtn");
    if (button) {
      const fresh = button.cloneNode(true);
      button.parentNode.replaceChild(fresh, button);
      fresh.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();
        window.buildStudyResponse();
      });
    }

    const input = document.getElementById("questionInput");
    if (input) {
      input.onkeydown = function (event) {
        if (event.key === "Enter" && !event.shiftKey) {
          event.preventDefault();
          window.buildStudyResponse();
        }
      };
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", wireChat, { once: true });
  } else {
    setTimeout(wireChat, 0);
  }

  console.log("TGEN-AI: ChatGPT-style chat + interactive response patch loaded.");
})();


/* =========================================================
   TGEN-AI — FINAL CHAT BEHAVIOR PATCH
   - Opening a topic does NOT auto-answer it.
   - Opens a clean ChatGPT-style chat instead.
   - Definition requests return definition only.
   - Example requests return example only.
   - AI backend remains the main responder.
   ========================================================= */
(function () {
  function cleanChatHTML() {
    const chatArea = document.getElementById("chatArea");
    if (!chatArea) return;

    chatArea.innerHTML = `
      <div class="empty-chat tgen-clean-chat">
        <div class="empty-chat-icon">✦</div>
        <h2>How can I help?</h2>
        <p>Ask TGEN-AI anything about ${escapeHTML(selectedTopic || "your subject")}.</p>
      </div>
    `;
  }

  /* Never automatically show a topic explanation when entering Study. */
  window.renderMasterTopicExplanation = cleanChatHTML;

  /* Topic click opens a blank chat instead of immediately answering. */
  window.selectTopic = function (topicName) {
    if (!selectedSubject || !topicName) return;

    selectedTopic = topicName;

    try {
      trackTopic();
    } catch (error) {
      console.warn("TGEN-AI: Topic tracking skipped.", error);
    }

    renderStudyHeader();
    cleanChatHTML();
    masterShowScreen("study");
  };

  /* Keep personalized topic cards on the same clean-chat behavior. */
  window.selectTGENPersonalizedTopic = function (subjectName, topicName) {
    selectedSubject = subjectName;
    selectedTopic = topicName;

    try {
      trackTopic();
    } catch (error) {
      console.warn("TGEN-AI: Topic tracking skipped.", error);
    }

    renderStudyHeader();
    cleanChatHTML();
    masterShowScreen("study");
  };

  /* If the master screen router enters Study, do not auto-answer. */
  const originalMasterShowScreen = window.showScreen;
  window.showScreen = function (screenId) {
    if (screenId === "study") {
      const result = originalMasterShowScreen(screenId);
      cleanChatHTML();
      return result;
    }
    return originalMasterShowScreen(screenId);
  };

  /*
     Local fallback should behave like a real chat:
     definition = definition only,
     example = example only,
     other questions = concise answer.
  */
  function getLessonForChat() {
    const subject = selectedSubject || "your subject";
    const topic = selectedTopic || "your topic";

    if (typeof TGEN_RICH_KNOWLEDGE !== "undefined" && TGEN_RICH_KNOWLEDGE[topic]) {
      return TGEN_RICH_KNOWLEDGE[topic];
    }

    if (typeof studyKnowledge !== "undefined" && studyKnowledge[topic]) {
      return {
        definition: studyKnowledge[topic],
        explanation: studyKnowledge[topic],
        example: "",
        key: ""
      };
    }

    if (typeof getLesson === "function") {
      const lesson = getLesson(subject, topic);
      if (lesson) {
        if (typeof lesson === "string") {
          return {
            definition: lesson,
            explanation: lesson,
            example: "",
            key: ""
          };
        }
        return lesson;
      }
    }

    return {
      definition: `${topic} is a concept studied in ${subject}.`,
      explanation: `${topic} can be understood by focusing on its main ideas and how they are applied.`,
      example: "",
      key: ""
    };
  }

  function localChatFallback(question) {
    const q = String(question || "").trim();
    const lower = q.toLowerCase();
    const lesson = getLessonForChat();

    if (/^(hi|hello|hey|yo|what's up|whats up)\b/.test(lower)) {
      return "Hey! What's up? What are we working on?";
    }

    if (/\b(definition|define|meaning|what is|what are)\b/.test(lower)) {
      return escapeHTML(lesson.definition || "I don't have a definition stored for this topic yet.");
    }

    if (/\b(example|examples)\b/.test(lower)) {
      return escapeHTML(lesson.example || "Give me the specific part you want an example for.");
    }

    if (/\b(explain|simplify|how does|why)\b/.test(lower)) {
      return escapeHTML(lesson.explanation || lesson.definition || "Tell me which part you want explained.");
    }

    return `I’m ready to help with ${escapeHTML(selectedTopic || selectedSubject || "that")}.`;
  }

  /* Replace the old local fallback used by the chat patch. */
  window.generateSmartResponse = localChatFallback;

  /* Make user bubbles and AI responses look like a normal ChatGPT conversation. */
  const style = document.createElement("style");
  style.textContent = `
    #chatArea {
      display: flex;
      flex-direction: column;
      gap: 14px;
      padding: 18px 8px;
      overflow-y: auto;
    }

    #chatArea .user-message {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: flex-start;
    }

    #chatArea .user-message .user-bubble,
    #chatArea .user-message .message-content {
      background: #2e6fe8;
      color: #fff;
      border-radius: 20px 20px 5px 20px;
      padding: 11px 16px;
      max-width: min(78%, 680px);
      line-height: 1.5;
      box-shadow: 0 2px 8px rgba(46,111,232,.16);
    }

    #chatArea .ai-message {
      width: 100%;
      display: flex;
      align-items: flex-start;
      gap: 10px;
    }

    #chatArea .ai-message .message-avatar {
      flex: 0 0 30px;
    }

    #chatArea .ai-message .message-content {
      max-width: min(82%, 760px);
      background: #f5f7fb;
      color: #172033;
      border-radius: 5px 20px 20px 20px;
      padding: 12px 16px;
      line-height: 1.6;
    }

    #chatArea .loading-message .message-content {
      padding: 10px 14px;
    }

    .tgen-clean-chat {
      text-align: center;
      padding: 42px 20px;
    }

    .tgen-clean-chat h2 {
      margin: 10px 0 6px;
    }

    .tgen-clean-chat p {
      margin: 0;
      color: #64748b;
    }
  `;
  document.head.appendChild(style);

  console.log("TGEN-AI: Final clean ChatGPT-style behavior loaded.");
})();

/* =========================================================
   TGEN-AI — FINAL UX POLISH PATCH
   - Explain broad topics as an overview first, then ask before
     moving into the sub-parts.
   - Match a clean ChatGPT-like system font.
   - Logged-out navigation shows Login, not Log out.
   - Submit Quiz is always visible after quiz generation; an
     inline message appears under it when questions are missing.
   ========================================================= */
(function () {
  /* ---------- TYPOGRAPHY ---------- */
  const polishStyle = document.createElement("style");
  polishStyle.id = "tgen-final-ux-polish";
  polishStyle.textContent = `
    html, body,
    button, input, textarea, select,
    .app, .app-screen, .main-nav,
    .chat-area, #chatArea, #quizList {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif !important;
      -webkit-font-smoothing: antialiased;
      text-rendering: optimizeLegibility;
    }

    .main-nav {
      display: flex !important;
      align-items: center !important;
      gap: 22px;
    }

    #tgenLogoutBtn {
      display: none !important;
    }

    #accountBtn {
      flex: 0 0 auto;
      white-space: nowrap;
    }

    #tgenQuizSubmitError {
      margin: 8px 0 0;
      padding: 9px 12px;
      border-radius: 10px;
      background: #fff4f4;
      color: #b42318;
      font-size: 13px;
      line-height: 1.4;
    }

    #quizActions {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      flex-wrap: wrap;
    }
  `;
  document.head.appendChild(polishStyle);

  /* ---------- LOGIN / LOGOUT NAVIGATION ---------- */
  function removeStrayNavLogout() {
    document.querySelectorAll(".main-nav #tgenLogoutBtn").forEach(btn => btn.remove());
  }

  function setAuthButton() {
    removeStrayNavLogout();

    const account = document.getElementById("accountBtn");
    if (!account) return;

    const profile =
      (typeof masterProfile === "function" && masterProfile()) ||
      window.userProfile ||
      null;

    account.style.setProperty("display", "inline-flex", "important");
    account.hidden = false;
    account.type = "button";

    if (profile) {
      account.textContent = "Log out";
      account.onclick = function (event) {
        event.preventDefault();
        event.stopPropagation();
        window.logout();
      };
    } else {
      account.textContent = "Log in";
      account.onclick = function (event) {
        event.preventDefault();
        event.stopPropagation();
        if (typeof window.showScreen === "function") {
          window.showScreen("profile");
        }
      };
    }
  }

  /* Replace the old updater so it never injects a second logout button. */
  window.updateLogoutButton = setAuthButton;

  /* ---------- LOGOUT ---------- */
  const previousLogout = window.logout;
  window.logout = function () {
    if (typeof previousLogout === "function") {
      previousLogout();
    }

    removeStrayNavLogout();

    const account = document.getElementById("accountBtn");
    if (account) {
      account.hidden = false;
      account.style.setProperty("display", "inline-flex", "important");
      account.textContent = "Log in";
      account.type = "button";
      account.onclick = function (event) {
        event.preventDefault();
        event.stopPropagation();
        if (typeof window.showScreen === "function") {
          window.showScreen("profile");
        }
      };
    }

    /* A profile-menu avatar is only useful while logged in. */
    const profileMenu = document.getElementById("tgenProfileMenu");
    if (profileMenu) profileMenu.remove();

    /* Keep the home layout centred after logout. */
    document.querySelectorAll(".app-screen").forEach(screen => {
      screen.style.removeProperty("margin-left");
      screen.style.removeProperty("left");
      screen.style.removeProperty("transform");
    });
  };

  /* ---------- CHAT: BROAD-TOPIC EXPLANATION ---------- */
  function broadTopicExplanation(topic) {
    const t = String(topic || "").trim().toLowerCase();

    if (t === "parts of speech") {
      return "Parts of speech are the different categories of words, classified according to the job they perform in a sentence. Would you like me to explain the eight main parts of speech one by one?";
    }

    return null;
  }

  /* Make the offline fallback follow the same behavior as the real AI. */
  const oldSmartResponse = window.generateSmartResponse;
  window.generateSmartResponse = function (question) {
    const text = String(question || "").trim();
    const lower = text.toLowerCase();
    const topic = selectedTopic || selectedSubject || "this topic";

    if (/\b(explain|break down|breakdown|simplify)\b/.test(lower)) {
      const overview = broadTopicExplanation(topic);
      if (overview) return overview;
    }

    return typeof oldSmartResponse === "function"
      ? oldSmartResponse(question)
      : `I’m ready to help with ${escapeHTML(topic)}.`;
  };

  /* ---------- QUIZ SUBMIT: ALWAYS SHOW BUTTON ---------- */
  function ensureQuizSubmitError() {
    const submit = document.getElementById("submitQuizBtn");
    if (!submit || !submit.parentNode) return null;

    let error = document.getElementById("tgenQuizSubmitError");
    if (!error) {
      error = document.createElement("div");
      error.id = "tgenQuizSubmitError";
      error.style.display = "none";
      submit.insertAdjacentElement("afterend", error);
    }
    return error;
  }

  function showQuizSubmitError(message) {
    const error = ensureQuizSubmitError();
    if (!error) return;
    error.textContent = message;
    error.style.display = "block";
  }

  function clearQuizSubmitError() {
    const error = document.getElementById("tgenQuizSubmitError");
    if (error) {
      error.textContent = "";
      error.style.display = "none";
    }
  }

  /* Always leave Submit Quiz visible whenever questions exist. */
  const oldUpdateQuizProgress = window.updateQuizProgress;
  window.updateQuizProgress = function () {
    if (typeof oldUpdateQuizProgress === "function") {
      oldUpdateQuizProgress();
    }

    const submit = document.getElementById("submitQuizBtn");
    const total = Array.isArray(window.quizQuestions)
      ? window.quizQuestions.length
      : 0;

    if (submit && total > 0 && !quizSubmitted) {
      submit.style.display = "inline-flex";
    }

    clearQuizSubmitError();
  };

  /* Wrap the final submit handler so incomplete quizzes show an inline message. */
  const oldSubmitQuiz = window.submitQuiz;
  window.submitQuiz = function (event) {
    if (event && typeof event.preventDefault === "function") {
      event.preventDefault();
    }

    const questions = Array.isArray(window.quizQuestions)
      ? window.quizQuestions
      : [];

    if (!questions.length) {
      showQuizSubmitError("Generate a quiz first, then answer the questions before submitting.");
      return;
    }

    const answered = document.querySelectorAll(
      '#quizList input[type="radio"]:checked'
    ).length;

    if (answered < questions.length) {
      showQuizSubmitError(
        `You still have ${questions.length - answered} question${questions.length - answered === 1 ? "" : "s"} to answer before you can submit.`
      );
      return;
    }

    clearQuizSubmitError();

    if (typeof oldSubmitQuiz === "function") {
      return oldSubmitQuiz();
    }
  };

  /* Keep the button visible after quiz generation. */
  function keepSubmitVisible() {
    const submit = document.getElementById("submitQuizBtn");
    const total = Array.isArray(window.quizQuestions)
      ? window.quizQuestions.length
      : 0;
    if (submit && total > 0 && !quizSubmitted) {
      submit.style.display = "inline-flex";
    }
  }

  /* Remove repeated per-question "Studied today" helper text; the quiz title already identifies the context. */
  function removeRepeatedQuizLabels() {
    document.querySelectorAll(".tgen-quiz-topic-label").forEach(label => label.remove());
  }

  const observer = new MutationObserver(() => {
    removeStrayNavLogout();
    keepSubmitVisible();
    removeRepeatedQuizLabels();
    ensureQuizSubmitError();
  });

  if (document.body) {
    observer.observe(document.body, { childList: true, subtree: true });
  }

  /* Apply immediately and after the app's existing boot process. */
  setAuthButton();
  setTimeout(setAuthButton, 200);
  setTimeout(setAuthButton, 800);
  setTimeout(() => {
    keepSubmitVisible();
    removeRepeatedQuizLabels();
    ensureQuizSubmitError();
  }, 1000);

  console.log("TGEN-AI: Final UX polish patch loaded.");
})();

/* =========================================================
   TGEN-AI — CHAT PERSISTENCE + NEW CHAT + 5-QUESTION QUIZ
   - Keeps chat messages when leaving and returning to AI Tutor.
   - Adds a ChatGPT-style New chat button.
   - Sends recent chat context to the AI backend.
   - Removes duplicate quiz intro text.
   - Uses 5 quiz questions instead of 10.
   ========================================================= */
(function () {
  const CHAT_HISTORY_PREFIX = "tgen-ai-chat-history:";
  const NEW_CHAT_LABEL = "New chat";

  function getProfileForKey() {
    try {
      if (typeof masterProfile === "function") return masterProfile() || null;
    } catch (e) {}
    return window.userProfile || null;
  }

  function chatKey() {
    const profile = getProfileForKey() || {};
    const name = String(profile.name || "student").trim().toLowerCase();
    const subject = String(selectedSubject || "subject").trim().toLowerCase();
    const topic = String(selectedTopic || "topic").trim().toLowerCase();
    return CHAT_HISTORY_PREFIX + [name, subject, topic]
      .map(v => v.replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""))
      .join("|");
  }

  function loadHistory() {
    try {
      const data = JSON.parse(localStorage.getItem(chatKey()) || "[]");
      return Array.isArray(data) ? data : [];
    } catch (e) {
      return [];
    }
  }

  function saveHistory(history) {
    try {
      localStorage.setItem(chatKey(), JSON.stringify(history.slice(-100)));
    } catch (e) {
      console.warn("TGEN-AI: Chat history could not be saved.", e);
    }
  }

  function clearHistory() {
    try {
      localStorage.removeItem(chatKey());
    } catch (e) {}
  }

  function showFreshChat() {
    const chatArea = document.getElementById("chatArea");
    if (!chatArea) return;
    chatArea.innerHTML = `
      <div class="empty-chat tgen-clean-chat">
        <div class="empty-chat-icon">✦</div>
        <h2>How can I help?</h2>
        <p>Ask TGEN-AI anything about ${escapeHTML(selectedTopic || "your subject")}.</p>
      </div>
    `;
  }

  function renderStoredMessage(item) {
    const chatArea = document.getElementById("chatArea");
    if (!chatArea || !item || !item.sender) return;

    const wrapper = document.createElement("div");
    wrapper.className = "chat-message " +
      (item.sender === "user" ? "user-message" : "ai-message");

    if (item.sender === "user") {
      wrapper.innerHTML = `<div class="message-content user-bubble">${item.content || ""}</div>`;
    } else {
      wrapper.innerHTML = `
        <div class="message-avatar tgen-ai-avatar" aria-hidden="true"><span></span></div>
        <div class="message-content">${item.content || ""}</div>
      `;
    }

    chatArea.appendChild(wrapper);
  }

  function restoreHistory() {
    const chatArea = document.getElementById("chatArea");
    if (!chatArea) return;

    const history = loadHistory();
    if (!history.length) {
      showFreshChat();
      return;
    }

    chatArea.innerHTML = "";
    history.forEach(renderStoredMessage);
    chatArea.scrollTop = chatArea.scrollHeight;
  }

  /* Save every actual user/AI message while keeping the existing bubble design. */
  window.renderChatMessage = function (message, sender) {
    const chatArea = document.getElementById("chatArea");
    if (!chatArea) return null;

    const empty = chatArea.querySelector(".empty-chat");
    if (empty) empty.remove();

    const wrapper = document.createElement("div");
    wrapper.className = "chat-message " +
      (sender === "user" ? "user-message" : "ai-message");

    if (sender === "user") {
      wrapper.innerHTML = `<div class="message-content user-bubble">${message}</div>`;
    } else {
      wrapper.innerHTML = `
        <div class="message-avatar tgen-ai-avatar" aria-hidden="true"><span></span></div>
        <div class="message-content">${message}</div>
      `;
    }

    chatArea.appendChild(wrapper);
    chatArea.scrollTop = chatArea.scrollHeight;

    const history = loadHistory();
    history.push({
      sender: sender === "user" ? "user" : "ai",
      content: String(message || ""),
      timestamp: Date.now()
    });
    saveHistory(history);

    return wrapper;
  };

  function recentHistoryForAI() {
    return loadHistory().slice(-20).map(item => ({
      sender: item.sender,
      content: String(item.content || "").replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim()
    }));
  }

  async function getPersistentAIResponse(question) {
    try {
      const history = recentHistoryForAI();
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: question,
          subject: selectedSubject || "",
          topic: selectedTopic || "",
          profile: window.userProfile || null,
          history
        })
      });

      if (!response.ok) return null;
      const data = await response.json();
      const answer = data.answer || data.message || data.response;
      return answer ? String(answer) : null;
    } catch (error) {
      return null;
    }
  }

  /* Replace the final chat submitter so the AI receives recent conversation context. */
  window.buildStudyResponse = async function () {
    const input = document.getElementById("questionInput");
    if (!input) return;

    const question = input.value.trim();
    if (!question) return;

    window.renderChatMessage(escapeHTML(question), "user");
    input.value = "";

    const loading = window.addLoadingIndicator();
    let answer = await getPersistentAIResponse(question);

    if (!answer) {
      try {
        if (typeof window.generateSmartResponse === "function") {
          answer = window.generateSmartResponse(question);
        }
      } catch (e) {}
    }

    if (!answer) answer = "I couldn't answer that right now. Please try again.";

    if (loading) loading.remove();
    window.renderChatMessage(answer, "ai");
  };

  function ensureChatToolbar() {
    const chatArea = document.getElementById("chatArea");
    if (!chatArea) return;

    const parent = chatArea.parentElement;
    if (!parent) return;

    let toolbar = parent.querySelector("#tgenChatToolbar");
    if (!toolbar) {
      toolbar = document.createElement("div");
      toolbar.id = "tgenChatToolbar";
      toolbar.innerHTML = `
        <span class="tgen-chat-title">AI Tutor</span>
        <button type="button" id="tgenNewChatBtn">＋ ${NEW_CHAT_LABEL}</button>
      `;
      parent.insertBefore(toolbar, chatArea);
    }

    const button = toolbar.querySelector("#tgenNewChatBtn");
    if (button && !button.dataset.wired) {
      button.dataset.wired = "true";
      button.addEventListener("click", function () {
        clearHistory();
        showFreshChat();
        const input = document.getElementById("questionInput");
        if (input) input.focus();
      });
    }
  }

  /* Restore the correct topic chat whenever Study is entered again. */
  const previousShowScreen = window.showScreen;
  window.showScreen = function (screenId) {
    const result = previousShowScreen(screenId);
    if (screenId === "study") {
      setTimeout(() => {
        ensureChatToolbar();
        restoreHistory();
      }, 0);
    }
    return result;
  };

  const previousSelectTopic = window.selectTopic;
  window.selectTopic = function (topicName) {
    const result = previousSelectTopic(topicName);
    setTimeout(() => {
      ensureChatToolbar();
      restoreHistory();
    }, 0);
    return result;
  };

  const previousSelectPersonalizedTopic = window.selectTGENPersonalizedTopic;
  if (typeof previousSelectPersonalizedTopic === "function") {
    window.selectTGENPersonalizedTopic = function (subjectName, topicName) {
      const result = previousSelectPersonalizedTopic(subjectName, topicName);
      setTimeout(() => {
        ensureChatToolbar();
        restoreHistory();
      }, 0);
      return result;
    };
  }

  /* ---------- QUIZ: 5 QUESTIONS ---------- */
  function removeQuizIntroText() {
    const quizScreen = document.getElementById("quiz");
    if (!quizScreen) return;

    quizScreen.querySelectorAll("p").forEach(p => {
      const text = p.textContent.trim();
      if (text === "Generate a quiz based on your selected class and subject.") {
        p.remove();
      }
    });

    quizScreen.querySelectorAll("p").forEach(p => {
      p.innerHTML = p.innerHTML.replace(/10-question/gi, "5-question");
    });
  }

  function trimQuizToFive() {
    const questions = Array.isArray(window.quizQuestions) ? window.quizQuestions : [];
    if (questions.length > 5) {
      window.quizQuestions = questions.slice(0, 5);
    }

    const list = document.getElementById("quizList");
    if (list) {
      const items = list.querySelectorAll(".quiz-item");
      items.forEach((item, index) => {
        if (index >= 5) item.remove();
      });
    }

    const total = Array.isArray(window.quizQuestions) ? window.quizQuestions.length : 0;
    if (total > 0) {
      const counter = document.getElementById("questionCounter");
      const answered = document.querySelectorAll('#quizList input[type="radio"]:checked').length;
      if (counter) counter.textContent = `${answered} of ${total} answered`;
    }

    removeQuizIntroText();
  }

  const previousGenerateQuiz = window.generateQuiz;
  window.generateQuiz = function () {
    const result = typeof previousGenerateQuiz === "function"
      ? previousGenerateQuiz()
      : undefined;

    setTimeout(() => {
      trimQuizToFive();
      const submit = document.getElementById("submitQuizBtn");
      if (submit && Array.isArray(window.quizQuestions) && window.quizQuestions.length) {
        submit.style.display = "inline-flex";
      }
    }, 0);

    return result;
  };

  const previousRenderQuiz = window.renderQuiz;
  window.renderQuiz = function () {
    const result = typeof previousRenderQuiz === "function"
      ? previousRenderQuiz.apply(this, arguments)
      : undefined;
    setTimeout(trimQuizToFive, 0);
    return result;
  };

  /* Keep the Submit button visible and show the inline incomplete-quiz message. */
  const previousSubmitQuiz = window.submitQuiz;
  window.submitQuiz = function (event) {
    if (event && typeof event.preventDefault === "function") event.preventDefault();

    const questions = Array.isArray(window.quizQuestions) ? window.quizQuestions : [];
    if (!questions.length) {
      const existing = document.getElementById("tgenQuizSubmitError");
      if (existing) {
        existing.textContent = "Generate a quiz first, then answer the questions before submitting.";
        existing.style.display = "block";
      }
      return;
    }

    const answered = document.querySelectorAll('#quizList input[type="radio"]:checked').length;
    if (answered < questions.length) {
      let error = document.getElementById("tgenQuizSubmitError");
      if (!error) {
        error = document.createElement("div");
        error.id = "tgenQuizSubmitError";
        const submit = document.getElementById("submitQuizBtn");
        if (submit) submit.insertAdjacentElement("afterend", error);
      }
      if (error) {
        error.textContent = `You still have ${questions.length - answered} question${questions.length - answered === 1 ? "" : "s"} to answer before you can submit.`;
        error.style.display = "block";
      }
      return;
    }

    const error = document.getElementById("tgenQuizSubmitError");
    if (error) error.style.display = "none";

    if (typeof previousSubmitQuiz === "function") {
      return previousSubmitQuiz.apply(this, arguments);
    }
  };

  const finalStyle = document.createElement("style");
  finalStyle.id = "tgen-chat-persistence-and-quiz-five";
  finalStyle.textContent = `
    #tgenChatToolbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      padding: 10px 16px;
      border-bottom: 1px solid rgba(15,23,42,.08);
      background: #fff;
    }
    #tgenChatToolbar .tgen-chat-title {
      font-weight: 700;
      color: #172033;
      font-size: 14px;
    }
    #tgenNewChatBtn {
      border: 1px solid #d8deea;
      background: #fff;
      color: #172033;
      border-radius: 10px;
      padding: 8px 12px;
      font: inherit;
      font-size: 13px;
      cursor: pointer;
    }
    #tgenNewChatBtn:hover {
      background: #f6f8fc;
    }
    #tgenQuizSubmitError {
      display: none;
      margin: 8px 0 0;
      padding: 9px 12px;
      border-radius: 10px;
      background: #fff4f4;
      color: #b42318;
      font-size: 13px;
      line-height: 1.4;
    }
  `;
  document.head.appendChild(finalStyle);

  setTimeout(() => {
    ensureChatToolbar();
    restoreHistory();
    removeQuizIntroText();
  }, 100);

  console.log("TGEN-AI: Chat persistence, New chat, and 5-question quiz patch loaded.");
})();
/* =========================================================
   TGEN-AI — UNIVERSAL AI TUTOR + NOTE READER
   ========================================================= */
(function () {
  const universalStyle = document.createElement("style");
  universalStyle.id = "tgen-universal-tutor-style";
  universalStyle.textContent = `
    .tgen-universal-intro {
      margin: 0 0 18px;
      padding: 22px 24px;
      border: 1px solid #dbeafe;
      border-radius: 20px;
      background: linear-gradient(135deg,#eff6ff,#ffffff);
    }
    .tgen-universal-intro .tgen-eyebrow {
      color: #2563eb;
      font-size: 11px;
      font-weight: 800;
      letter-spacing: 1.4px;
      text-transform: uppercase;
    }
    .tgen-universal-intro h2 {
      margin-top: 6px;
      font-size: 28px;
      letter-spacing: -0.7px;
    }
    .tgen-universal-intro p {
      margin-top: 7px;
      color: #667085;
      font-size: 13px;
    }
    .tgen-subject-chip {
      display: inline-flex;
      margin-top: 12px;
      padding: 6px 10px;
      border-radius: 999px;
      background: #dbeafe;
      color: #1d4ed8;
      font-size: 11px;
      font-weight: 700;
    }
    .tgen-note-panel {
      margin: 0 0 18px;
      padding: 18px;
      border: 1px solid #e5e7eb;
      border-radius: 18px;
      background: #fff;
      box-shadow: 0 5px 18px rgba(15,23,42,.05);
    }
    .tgen-note-panel h3 {
      margin: 0;
      font-size: 15px;
    }
    .tgen-note-panel p {
      margin: 5px 0 12px;
      color: #667085;
      font-size: 12px;
    }
    .tgen-note-actions {
      display: flex;
      align-items: center;
      gap: 9px;
      flex-wrap: wrap;
    }
    .tgen-note-upload-btn,
    .tgen-note-explain-btn {
      border: 1px solid #d9e0ea;
      border-radius: 11px;
      padding: 9px 13px;
      background: #fff;
      color: #172033;
      font: inherit;
      font-size: 12px;
      font-weight: 700;
      cursor: pointer;
    }
    .tgen-note-explain-btn {
      border-color: #2563eb;
      background: #2563eb;
      color: #fff;
    }
    .tgen-note-explain-btn:disabled {
      opacity: .5;
      cursor: not-allowed;
    }
    .tgen-note-file-name {
      margin-top: 9px;
      color: #667085;
      font-size: 11px;
      word-break: break-word;
    }
    .tgen-note-status {
      margin-top: 8px;
      color: #2563eb;
      font-size: 11px;
    }
    #tgenTutorEmpty h2 {
      font-size: 21px;
    }
    #tgenTutorEmpty p {
      max-width: 500px;
    }
    @media (max-width: 600px) {
      .tgen-universal-intro {
        padding: 18px;
      }
      .tgen-universal-intro h2 {
        font-size: 23px;
      }
      .tgen-note-panel {
        padding: 15px;
      }
      .tgen-note-actions > * {
        flex: 1 1 auto;
      }
    }
  `;
  document.head.appendChild(universalStyle);

  let selectedNoteFile = null;

  function escapeLocal(value) {
    if (typeof escapeHTML === "function") return escapeHTML(value);
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function setupUniversalTutor() {
    const study = document.getElementById("study");
    const chatWrapper = study?.querySelector(".chat-wrapper");
    const header = study?.querySelector(".study-header");
    if (!study || !chatWrapper) return;

    const title = document.getElementById("studyTitle");
    if (title) title.textContent = "What do you want to learn today?";

    const badge = document.getElementById("selectedTopicBadge");
    if (badge) {
      badge.textContent = selectedSubject || "Your subject";
      badge.style.display = selectedSubject ? "inline-block" : "none";
    }

    const oldBack = header?.querySelector(".back-btn");
    if (oldBack) {
      oldBack.textContent = "← Back to subjects";
      oldBack.onclick = () => showScreen("subjects");
    }

    const browse = document.getElementById("showTopicsBtn");
    if (browse) browse.style.display = "none";

    let intro = document.getElementById("tgenUniversalIntro");
    if (!intro) {
      intro = document.createElement("div");
      intro.id = "tgenUniversalIntro";
      intro.className = "tgen-universal-intro";
      chatWrapper.parentNode.insertBefore(intro, chatWrapper);
    }

    intro.innerHTML = `
      <div class="tgen-eyebrow">AI TUTOR</div>
      <h2>What do you want to learn today?</h2>
      <p>Name any topic, question or concept. TGEN-AI will teach it from the basics and break it down clearly.</p>
      <span class="tgen-subject-chip">Subject: ${escapeLocal(selectedSubject || "General")}</span>
    `;

    let notes = document.getElementById("tgenNotePanel");
    if (!notes) {
      notes = document.createElement("div");
      notes.id = "tgenNotePanel";
      notes.className = "tgen-note-panel";
      chatWrapper.parentNode.insertBefore(notes, chatWrapper);
    }

    notes.innerHTML = `
      <h3>Have a note you want TGEN-AI to explain?</h3>
      <p>Upload a PDF, document, text note, or image. TGEN-AI can read it and teach it one section at a time.</p>
      <div class="tgen-note-actions">
        <input id="tgenNoteFile" type="file" accept=".pdf,.doc,.docx,.txt,.md,.png,.jpg,.jpeg" hidden>
        <button type="button" class="tgen-note-upload-btn" id="tgenChooseNoteBtn">＋ Upload note</button>
        <button type="button" class="tgen-note-explain-btn" id="tgenExplainNoteBtn" disabled>Explain my note →</button>
      </div>
      <div class="tgen-note-file-name" id="tgenNoteFileName">No note selected.</div>
      <div class="tgen-note-status" id="tgenNoteStatus"></div>
    `;

    const input = document.getElementById("tgenNoteFile");
    const choose = document.getElementById("tgenChooseNoteBtn");
    const explain = document.getElementById("tgenExplainNoteBtn");
    const fileName = document.getElementById("tgenNoteFileName");
    const status = document.getElementById("tgenNoteStatus");

    if (choose && !choose.dataset.wired) {
      choose.dataset.wired = "true";
      choose.onclick = () => input?.click();
    }

    if (input && !input.dataset.wired) {
      input.dataset.wired = "true";
      input.onchange = () => {
        selectedNoteFile = input.files?.[0] || null;
        if (fileName) fileName.textContent = selectedNoteFile
          ? selectedNoteFile.name
          : "No note selected.";
        if (status) status.textContent = selectedNoteFile
          ? "Ready to explain your note."
          : "";
        if (explain) explain.disabled = !selectedNoteFile;
      };
    }

    if (explain && !explain.dataset.wired) {
      explain.dataset.wired = "true";
      explain.onclick = explainSelectedNote;
    }

    const empty = document.getElementById("topicNameEmpty");
    if (empty) {
      empty.id = "tgenTutorEmpty";
      const h2 = empty.querySelector("h2");
      const p = empty.querySelector("p");
      if (h2) h2.textContent = "Ask me anything about what you're learning.";
      if (p) p.textContent = "Name any topic and I’ll explain it clearly, step by step.";
      const chips = empty.querySelector(".suggestion-chips");
      if (chips) {
        chips.innerHTML = `
          <button onclick="setQuestion('Explain a topic from the basics')">Explain from basics</button>
          <button onclick="setQuestion('Give me a simple example')">Give me an example</button>
          <button onclick="setQuestion('Quiz me on this subject')">Quiz me</button>
        `;
      }
    }

    const questionInput = document.getElementById("questionInput");
    if (questionInput) {
      questionInput.placeholder = "Name any topic or ask anything...";
    }
  }

  function fileToBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const result = String(reader.result || "");
        const comma = result.indexOf(",");
        resolve(comma >= 0 ? result.slice(comma + 1) : result);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  async function explainSelectedNote() {
    if (!selectedNoteFile) return;

    const status = document.getElementById("tgenNoteStatus");
    const explain = document.getElementById("tgenExplainNoteBtn");
    if (status) status.textContent = "Reading your note...";
    if (explain) explain.disabled = true;

    try {
      const base64 = await fileToBase64(selectedNoteFile);
      const response = await fetch("/api/note-study", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          filename: selectedNoteFile.name,
          mimeType: selectedNoteFile.type || "application/octet-stream",
          fileData: base64,
          subject: selectedSubject || "",
          profile: window.userProfile || null
        })
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Could not read the note.");

      const chatArea = document.getElementById("chatArea");
      if (chatArea) chatArea.innerHTML = "";

      window.renderChatMessage("Explain my uploaded note one section at a time.", "user");
      window.renderChatMessage(data.answer || "I couldn't read that note.", "ai");
      if (status) status.textContent = "Note loaded. Start with the first section above.";
    } catch (error) {
      if (status) status.textContent = error.message || "Could not read that note.";
    } finally {
      if (explain) explain.disabled = !selectedNoteFile;
    }
  }

  window.selectSubject = function (subjectName) {
    if (!userProfile || !userProfile.subjects?.includes(subjectName)) return;

    selectedSubject = subjectName;
    selectedTopic = null;

    if (typeof renderSubjects === "function") renderSubjects();
    showScreen("study");
    setTimeout(setupUniversalTutor, 0);
  };

  const previousUniversalShowScreen = window.showScreen;
  window.showScreen = function (screenId) {
    const result = previousUniversalShowScreen(screenId);
    if (screenId === "study") {
      setTimeout(setupUniversalTutor, 0);
    }
    return result;
  };

  setTimeout(() => {
    if (document.getElementById("study")) setupUniversalTutor();
  }, 250);

  console.log("TGEN-AI: Universal AI Tutor + Note Reader patch loaded.");
})();
/* =========================================================
   TGEN-AI UI FLOW FIX
   - Keeps existing features intact
   - Centers desktop navigation
   - Keeps mobile navigation compact and centered
   - Makes AI Tutor copy clearer
   - Moves Note Reader into its own Notes section
   ========================================================= */
(function () {
  "use strict";

  function esc(value) {
    if (typeof escapeHTML === "function") return escapeHTML(value);
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  /* ---------- UI STYLES ---------- */
  const style = document.createElement("style");
  style.id = "tgen-ui-flow-fix-styles";
  style.textContent = `
    /* Desktop: keep the nav visually centered regardless of brand/dashboard width. */
    @media (min-width: 901px) {
      .topbar .nav-container {
        position: relative;
      }

      .topbar .main-nav {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        margin: 0;
        z-index: 2;
        white-space: nowrap;
      }
    }

    /* Tablet/mobile: compact nav without the old left-shifting scroll behaviour. */
    @media (max-width: 900px) {
      .topbar .nav-container {
        position: relative;
      }

      .topbar .main-nav {
        display: flex !important;
        position: static;
        transform: none;
        flex: 1 1 auto;
        min-width: 0;
        justify-content: center;
        align-items: center;
        overflow: visible;
        gap: 2px;
      }

      .topbar .main-nav button {
        flex: 0 1 auto;
        white-space: nowrap;
        padding: 8px 6px;
        font-size: 11px;
      }

      .topbar .brand-text {
        display: none;
      }

      .topbar .nav-dashboard-btn {
        flex: 0 0 auto;
        width: 38px;
        min-width: 38px;
        height: 38px;
        padding: 0;
        border-radius: 50%;
        font-size: 0;
      }

      .topbar .nav-dashboard-btn::before {
        content: "T";
        font-size: 15px;
        font-weight: 800;
      }
    }

    @media (max-width: 380px) {
      .topbar .nav-container {
        gap: 3px;
      }

      .topbar .brand-logo {
        width: 34px;
        height: 34px;
        min-width: 34px;
      }

      .topbar .main-nav {
        gap: 0;
      }

      .topbar .main-nav button {
        padding: 7px 4px;
        font-size: 10px;
      }

      .topbar .nav-dashboard-btn {
        width: 34px;
        min-width: 34px;
        height: 34px;
      }
    }

    /* Cleaner AI Tutor copy. */
    #study .study-title-row h1 {
      letter-spacing: -0.5px;
    }

    .tgen-ui-flow-intro {
      margin: 0 0 18px;
      padding: 24px 26px;
      border: 1px solid rgba(59, 130, 246, 0.16);
      border-radius: 22px;
      background: linear-gradient(135deg, rgba(239, 246, 255, 0.92), rgba(248, 250, 252, 0.96));
    }

    .tgen-ui-flow-intro .tgen-ui-eyebrow {
      display: block;
      margin-bottom: 7px;
      color: #2563eb;
      font-size: 11px;
      font-weight: 800;
      letter-spacing: 1.8px;
    }

    .tgen-ui-flow-intro h2 {
      margin: 0 0 7px;
      color: #111827;
      font-size: 25px;
      line-height: 1.15;
      letter-spacing: -0.7px;
    }

    .tgen-ui-flow-intro p {
      margin: 0;
      color: #64748b;
      font-size: 14px;
      line-height: 1.55;
    }

    .tgen-ui-subject-chip {
      display: inline-flex;
      margin-top: 14px;
      padding: 7px 11px;
      border-radius: 999px;
      background: rgba(37, 99, 235, 0.10);
      color: #2563eb;
      font-size: 12px;
      font-weight: 700;
    }

    /* Notes is a real separate screen. */
    #tgenNotesScreen {
      display: none;
      min-height: calc(100vh - 76px);
      padding: 44px 0 70px;
    }

    #tgenNotesScreen.active {
      display: block;
    }

    .tgen-notes-container {
      width: min(100% - 40px, 1100px);
      margin: 0 auto;
    }

    .tgen-notes-header {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      gap: 24px;
      margin-bottom: 24px;
    }

    .tgen-notes-back {
      border: 0;
      background: transparent;
      padding: 0;
      margin-bottom: 18px;
      color: #64748b;
      font-size: 13px;
      font-weight: 700;
      cursor: pointer;
    }

    .tgen-notes-back:hover {
      color: #2563eb;
    }

    .tgen-notes-eyebrow {
      display: block;
      margin-bottom: 8px;
      color: #2563eb;
      font-size: 11px;
      font-weight: 800;
      letter-spacing: 1.8px;
    }

    .tgen-notes-header h1 {
      margin: 0;
      color: #111827;
      font-size: clamp(30px, 4vw, 42px);
      letter-spacing: -1.5px;
      line-height: 1.05;
    }

    .tgen-notes-header p {
      max-width: 600px;
      margin: 10px 0 0;
      color: #64748b;
      font-size: 15px;
      line-height: 1.6;
    }

    .tgen-notes-card {
      padding: 28px;
      border: 1px solid #e5e7eb;
      border-radius: 24px;
      background: #fff;
      box-shadow: 0 14px 35px rgba(15, 23, 42, 0.06);
    }

    .tgen-notes-dropzone {
      padding: 42px 24px;
      border: 1.5px dashed #cbd5e1;
      border-radius: 20px;
      text-align: center;
      background: #f8fafc;
      transition: 0.2s ease;
    }

    .tgen-notes-dropzone.has-file {
      border-style: solid;
      border-color: rgba(37, 99, 235, 0.35);
      background: rgba(239, 246, 255, 0.65);
    }

    .tgen-notes-icon {
      width: 52px;
      height: 52px;
      margin: 0 auto 14px;
      display: grid;
      place-items: center;
      border-radius: 16px;
      background: #2563eb;
      color: #fff;
      font-size: 23px;
      box-shadow: 0 10px 22px rgba(37, 99, 235, 0.2);
    }

    .tgen-notes-dropzone h2 {
      margin: 0 0 7px;
      color: #111827;
      font-size: 21px;
    }

    .tgen-notes-dropzone p {
      max-width: 650px;
      margin: 0 auto 18px;
      color: #64748b;
      font-size: 14px;
      line-height: 1.55;
    }

    .tgen-notes-actions {
      display: flex;
      justify-content: center;
      gap: 10px;
      flex-wrap: wrap;
    }

    .tgen-notes-upload,
    .tgen-notes-explain {
      min-height: 42px;
      padding: 10px 16px;
      border-radius: 12px;
      font-size: 13px;
      font-weight: 700;
      cursor: pointer;
      transition: 0.2s ease;
    }

    .tgen-notes-upload {
      border: 1px solid #dbe3ee;
      background: #fff;
      color: #1f2937;
    }

    .tgen-notes-explain {
      border: 0;
      background: #2563eb;
      color: #fff;
    }

    .tgen-notes-explain:disabled {
      opacity: 0.45;
      cursor: not-allowed;
    }

    .tgen-notes-file {
      margin-top: 16px;
      color: #475569;
      font-size: 13px;
      font-weight: 600;
    }

    .tgen-notes-status {
      min-height: 20px;
      margin-top: 7px;
      color: #64748b;
      font-size: 12px;
    }

    .tgen-notes-result {
      display: none;
      margin-top: 20px;
      padding: 22px;
      border: 1px solid #e5e7eb;
      border-radius: 18px;
      background: #fff;
    }

    .tgen-notes-result.active {
      display: block;
    }

    .tgen-notes-result h3 {
      margin: 0 0 8px;
      color: #111827;
      font-size: 17px;
    }

    .tgen-notes-result-body {
      color: #334155;
      font-size: 14px;
      line-height: 1.7;
    }

    @media (max-width: 600px) {
      #tgenNotesScreen {
        padding-top: 30px;
      }

      .tgen-notes-container {
        width: calc(100% - 28px);
      }

      .tgen-notes-header {
        align-items: flex-start;
        flex-direction: column;
        gap: 8px;
      }

      .tgen-notes-card {
        padding: 16px;
      }

      .tgen-notes-dropzone {
        padding: 30px 15px;
      }

      .tgen-notes-actions > * {
        width: 100%;
      }

      .tgen-ui-flow-intro {
        padding: 19px;
      }
    }
  `;
  document.head.appendChild(style);

  /* ---------- NAV ---------- */
  function addNotesNavButton() {
    const nav = document.querySelector(".main-nav");
    if (!nav || nav.querySelector("#tgenNotesNavBtn")) return;

    const btn = document.createElement("button");
    btn.type = "button";
    btn.id = "tgenNotesNavBtn";
    btn.textContent = "Notes";
    btn.onclick = () => window.showScreen("notes");

    const quiz = Array.from(nav.querySelectorAll("button"))
      .find(button => button.textContent.trim().toLowerCase() === "quiz");

    if (quiz) nav.insertBefore(btn, quiz);
    else nav.appendChild(btn);
  }

  /* ---------- NOTES SCREEN ---------- */
  let notesScreenReady = false;
  let notesFile = null;

  function ensureNotesScreen() {
    if (notesScreenReady && document.getElementById("tgenNotesScreen")) return;

    const main = document.querySelector("main");
    if (!main) return;

    let screen = document.getElementById("tgenNotesScreen");
    if (!screen) {
      screen = document.createElement("section");
      screen.id = "tgenNotesScreen";
      screen.className = "app-screen";
      main.appendChild(screen);
    }

    screen.innerHTML = `
      <div class="tgen-notes-container">
        <div class="tgen-notes-header">
          <div>
            <button type="button" class="tgen-notes-back" id="tgenNotesBack">← Back</button>
            <span class="tgen-notes-eyebrow">STUDY FROM YOUR NOTES</span>
            <h1>Turn your notes into a lesson.</h1>
            <p>Upload your own notes and TGEN-AI will read them, explain the material clearly, and work through the sections one at a time.</p>
          </div>
        </div>

        <div class="tgen-notes-card">
          <div class="tgen-notes-dropzone" id="tgenNotesDropzone">
            <div class="tgen-notes-icon">✦</div>
            <h2>Upload a note to study</h2>
            <p>Use a PDF, Word document, text file, Markdown file, or image of your notes.</p>
            <div class="tgen-notes-actions">
              <input id="tgenNotesFileInput" type="file" accept=".pdf,.doc,.docx,.txt,.md,.png,.jpg,.jpeg" hidden>
              <button type="button" class="tgen-notes-upload" id="tgenNotesChoose">＋ Choose note</button>
              <button type="button" class="tgen-notes-explain" id="tgenNotesExplain" disabled>Explain my note ↑</button>
            </div>
            <div class="tgen-notes-file" id="tgenNotesFileName">No note selected.</div>
            <div class="tgen-notes-status" id="tgenNotesStatus"></div>
          </div>

          <div class="tgen-notes-result" id="tgenNotesResult">
            <h3>Lesson from your note</h3>
            <div class="tgen-notes-result-body" id="tgenNotesResultBody"></div>
          </div>
        </div>
      </div>
    `;

    document.getElementById("tgenNotesBack").onclick = () => {
      window.showScreen(userProfile ? "classes" : "profile");
    };

    const input = document.getElementById("tgenNotesFileInput");
    const choose = document.getElementById("tgenNotesChoose");
    const explain = document.getElementById("tgenNotesExplain");
    const name = document.getElementById("tgenNotesFileName");
    const status = document.getElementById("tgenNotesStatus");
    const dropzone = document.getElementById("tgenNotesDropzone");

    choose.onclick = () => input.click();

    input.onchange = () => {
      notesFile = input.files?.[0] || null;
      name.textContent = notesFile ? notesFile.name : "No note selected.";
      status.textContent = notesFile ? "Ready to explain." : "";
      explain.disabled = !notesFile;
      dropzone.classList.toggle("has-file", !!notesFile);
    };

    explain.onclick = explainNote;
    notesScreenReady = true;
  }

  function fileToBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const result = String(reader.result || "");
        const comma = result.indexOf(",");
        resolve(comma >= 0 ? result.slice(comma + 1) : result);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  async function explainNote() {
    if (!notesFile) return;

    const explain = document.getElementById("tgenNotesExplain");
    const status = document.getElementById("tgenNotesStatus");
    const result = document.getElementById("tgenNotesResult");
    const body = document.getElementById("tgenNotesResultBody");

    explain.disabled = true;
    status.textContent = "Reading your note...";
    result.classList.remove("active");

    try {
      const base64 = await fileToBase64(notesFile);
      const response = await fetch("/api/note-study", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          filename: notesFile.name,
          mimeType: notesFile.type || "application/octet-stream",
          fileData: base64,
          subject: selectedSubject || "",
          profile: window.userProfile || null
        })
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Could not read the note.");
      }

      body.innerHTML = esc(data.answer || "I couldn't read that note.")
        .replace(/\n/g, "<br>");
      result.classList.add("active");
      status.textContent = "Your first section is ready.";
    } catch (error) {
      status.textContent = error.message || "Could not read the note.";
    } finally {
      explain.disabled = !notesFile;
    }
  }

  /* ---------- AI TUTOR COPY ---------- */
  function updateTutorCopy() {
    const study = document.getElementById("study");
    if (!study) return;

    const title = document.getElementById("studyTitle");
    if (title) title.textContent = "AI Tutor";

    const badge = document.getElementById("selectedTopicBadge");
    if (badge) {
      badge.textContent = selectedSubject ? `Subject: ${selectedSubject}` : "Choose a subject";
    }

    const intro = document.getElementById("tgenUiFlowIntro") || document.createElement("div");
    intro.id = "tgenUiFlowIntro";
    intro.className = "tgen-ui-flow-intro";

    const chatWrapper = study.querySelector(".chat-wrapper");
    if (chatWrapper && !intro.parentNode) {
      chatWrapper.parentNode.insertBefore(intro, chatWrapper);
    }

    intro.innerHTML = `
      <span class="tgen-ui-eyebrow">AI TUTOR</span>
      <h2>Learn anything in your subject.</h2>
      <p>Ask a question, name a topic, or describe what you find difficult. TGEN-AI will explain it step by step.</p>
      ${selectedSubject ? `<span class="tgen-ui-subject-chip">Subject: ${esc(selectedSubject)}</span>` : ""}
    `;

    const oldNotes = document.getElementById("tgenNotePanel");
    if (oldNotes) oldNotes.remove();

    const browse = document.getElementById("showTopicsBtn");
    if (browse) browse.style.display = "none";

    const input = document.getElementById("questionInput");
    if (input) input.placeholder = "Ask about a topic, question or concept...";

    const empty = document.getElementById("topicNameEmpty");
    if (empty) {
      const h2 = empty.querySelector("h2");
      const p = empty.querySelector("p");
      if (h2) h2.textContent = "What can I help you understand?";
      if (p) p.textContent = "Ask anything about your subject and we’ll work through it together.";
    }
  }

  /* ---------- SAFE NAV WRAPPER ---------- */
  const previousShowScreen = window.showScreen;
  window.showScreen = function (screenId) {
    if (screenId === "notes") {
      ensureNotesScreen();
    }

    const result = previousShowScreen(screenId);

    if (screenId === "study") {
      setTimeout(updateTutorCopy, 0);
    }

    return result;
  };

  /* ---------- INIT ---------- */
  addNotesNavButton();
  updateTutorCopy();

  console.log("TGEN-AI: UI flow fix loaded without removing existing features.");
})();

/* Final duplicate-intro guard: keep only the new AI Tutor intro. */
(function () {
  "use strict";
  function removeOldTutorIntro() {
    const oldIntro = document.getElementById("tgenUniversalIntro");
    if (oldIntro) oldIntro.remove();
  }
  removeOldTutorIntro();
  const previousShowScreen = window.showScreen;
  window.showScreen = function (screenId) {
    const result = previousShowScreen(screenId);
    if (screenId === "study") {
      setTimeout(removeOldTutorIntro, 0);
    }
    return result;
  };
})();

/* =========================================================
   TGEN-AI — START LEARNING FLOW PATCH
   Keep existing features intact.
   Start Learning -> Subjects (if profile exists), never Topics.
   Selecting a subject still opens AI Tutor through the existing flow.
   ========================================================= */
(function () {
  "use strict";

  window.startLearning = function () {
    const profile = window.userProfile || (typeof userProfile !== "undefined" ? userProfile : null);

    if (!profile) {
      showScreen("profile");
      return;
    }

    selectedClass = profile.className || selectedClass;
    selectedSubject = null;
    selectedTopic = null;

    if (typeof renderSubjects === "function") {
      renderSubjects();
    }

    showScreen("subjects");
  };

  console.log("TGEN-AI: Start Learning now opens Subjects instead of Topics.");
})();

/* =========================================================
   TGEN-AI PRODUCT FLOW + LEARNING FEATURES PATCH
   Targeted additions only — preserves existing app code.
   ========================================================= */
(function TGENProductPatch(){
  "use strict";

  const PROFILE_KEY = "tgen-ai-profile";
  const ONBOARD_KEY = "tgen-ai-onboarding-complete";

  const safeJSON = (key, fallback) => {
    try { return JSON.parse(localStorage.getItem(key) || "null") ?? fallback; }
    catch { return fallback; }
  };
  const saveJSON = (key, value) => localStorage.setItem(key, JSON.stringify(value));
  const esc = (value) => {
    if (typeof window.escapeHTML === "function") return window.escapeHTML(String(value ?? ""));
    return String(value ?? "").replace(/[&<>'"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;","\"":"&quot;"}[c]));
  };

  function getProfile(){
    return safeJSON(PROFILE_KEY, null) || window.userProfile || null;
  }

  function subjectsFor(department){
    const source = window.TGEN_PROFILE_SUBJECTS || TGEN_PROFILE_SUBJECTS || {};
    return Array.isArray(source[department]) ? source[department] : [];
  }

  function topicsFor(subject){
    const source = window.TGEN_TOPICS || (typeof TGEN_TOPICS !== "undefined" ? TGEN_TOPICS : {});
    return Array.isArray(source?.[subject]) && source[subject].length
      ? source[subject]
      : ["Introduction", "Key Concepts", "Examples", "Practice", "Revision"];
  }

  function createScreen(id, title, eyebrow){
    if (document.getElementById(id)) return document.getElementById(id);
    const section = document.createElement("section");
    section.id = id;
    section.className = "app-screen";
    section.innerHTML = `
      <div class="page-container tgen-feature-page">
        <div class="page-header">
          <div><span class="page-eyebrow">${eyebrow}</span><h1>${title}</h1><p id="${id}Intro">Build your learning routine with TGEN-AI.</p></div>
          <div class="page-header-icon">✦</div>
        </div>
        <div id="${id}Content"></div>
      </div>`;
    document.querySelector("main")?.appendChild(section);
    return section;
  }

  function ensureFeatureScreens(){
    createScreen("notes", "Study from your notes", "NOTES");
    createScreen("flashcards", "Flashcards", "FLASHCARDS");
    createScreen("quickPractice", "Quick Practice", "PRACTICE");
    createScreen("quickRevision", "Quick Revision", "REVISION");
    createScreen("dailyChallenge", "Daily Challenge", "TODAY");
    createScreen("studyPlanner", "Study Planner", "PLANNER");
    createScreen("examPrep", "Exam Prep", "EXAM PREP");
  }

  function ensureNav(){
    const nav = document.querySelector(".main-nav");
    if (!nav) return;
    nav.innerHTML = `
      <button type="button" data-tgen-nav="home">Home</button>
      <button type="button" data-tgen-nav="classes">Classes</button>
      <button type="button" data-tgen-nav="study">AI Tutor</button>
      <button type="button" data-tgen-nav="notes">Notes</button>
      <button type="button" data-tgen-nav="quiz">Quiz</button>
      <button type="button" data-tgen-nav="progress">Progress</button>
      <div class="tgen-more-nav">
        <button type="button" id="tgenMoreBtn" class="tgen-more-btn">More ▾</button>
        <div id="tgenMoreMenu" class="tgen-more-menu">
          <button type="button" data-tgen-nav="flashcards">Flashcards</button>
          <button type="button" data-tgen-nav="quickPractice">Quick Practice</button>
          <button type="button" data-tgen-nav="quickRevision">Quick Revision</button>
          <button type="button" data-tgen-nav="dailyChallenge">Daily Challenge</button>
          <button type="button" data-tgen-nav="studyPlanner">Study Planner</button>
          <button type="button" data-tgen-nav="examPrep">Exam Prep</button>
        </div>
      </div>`;
    nav.querySelectorAll("[data-tgen-nav]").forEach(btn => btn.addEventListener("click", () => {
      const target = btn.dataset.tgenNav;
      if (target !== "home" && !getProfile()) { startLearning(); return; }
      document.getElementById("tgenMoreMenu")?.classList.remove("open");
      showScreen(target);
    }));
    document.getElementById("tgenMoreBtn")?.addEventListener("click", (event) => {
      event.stopPropagation();
      document.getElementById("tgenMoreMenu")?.classList.toggle("open");
    });
    if (!window.__tgenMoreOutside) {
      window.__tgenMoreOutside = true;
      document.addEventListener("click", () => document.getElementById("tgenMoreMenu")?.classList.remove("open"));
    }
  }

  function ensureOnboarding(){
    if (document.getElementById("tgenOnboarding")) return;
    const overlay = document.createElement("div");
    overlay.id = "tgenOnboarding";
    overlay.className = "tgen-onboarding";
    overlay.innerHTML = `
      <div class="tgen-onboarding-card">
        <div class="tgen-onboarding-progress"><span id="tgenStepLabel">1 of 8</span><div><i id="tgenStepBar"></i></div></div>
        <div id="tgenOnboardingBody"></div>
        <div class="tgen-onboarding-actions">
          <button type="button" id="tgenOnboardBack" class="secondary-btn">← Back</button>
          <button type="button" id="tgenOnboardNext" class="primary-btn">Next →</button>
        </div>
      </div>`;
    document.body.appendChild(overlay);

    const state = {step:0,name:"",email:"",password:"",department:"",className:"",subject:"",topic:""};
    const body = overlay.querySelector("#tgenOnboardingBody");
    const next = overlay.querySelector("#tgenOnboardNext");
    const back = overlay.querySelector("#tgenOnboardBack");
    const label = overlay.querySelector("#tgenStepLabel");
    const bar = overlay.querySelector("#tgenStepBar");

    const render = () => {
      label.textContent = `${state.step + 1} of 8`;
      bar.style.width = `${((state.step + 1) / 8) * 100}%`;
      back.style.visibility = state.step === 0 ? "hidden" : "visible";
      next.textContent = state.step === 7 ? "Finish →" : "Next →";

      if(state.step === 0){
        body.innerHTML = `<div class="tgen-onboarding-icon">T</div><span class="page-eyebrow">WELCOME TO TGEN-AI</span><h1>Learn smarter with TGEN-AI.</h1><p>Your personal AI learning companion for studying, practice, quizzes, flashcards, revision and exam preparation.</p><div class="tgen-onboarding-list"><span>✓ Learn school topics</span><span>✓ Ask an AI teacher</span><span>✓ Practice and take quizzes</span><span>✓ Track your real progress</span></div>`;
      } else if(state.step === 1){
        body.innerHTML = `<span class="page-eyebrow">YOUR NAME</span><h1>What should we call you?</h1><p>We'll use your name throughout TGEN-AI.</p><input id="tgenOBName" class="tgen-ob-input" placeholder="Enter your name" autocomplete="name" value="${esc(state.name)}">`;
      } else if(state.step === 2){
        body.innerHTML = `<span class="page-eyebrow">ACCOUNT</span><h1>Create your account</h1><p>This prototype keeps account details on this device. Passwords are not shown on your profile.</p><label>Email</label><input id="tgenOBEmail" class="tgen-ob-input" type="email" placeholder="Enter your email" autocomplete="email" value="${esc(state.email)}"><label>Password</label><input id="tgenOBPassword" class="tgen-ob-input" type="password" placeholder="Create a password" autocomplete="new-password" value="${esc(state.password)}">`;
      } else if(state.step === 3){
        body.innerHTML = `<span class="page-eyebrow">DEPARTMENT</span><h1>What department are you in?</h1><p>Choose the department that best matches your subjects.</p><div class="tgen-choice-grid">${["General","Science","Arts","Commercial"].map(x=>`<button type="button" class="tgen-choice ${state.department===x?"selected":""}" data-value="${x}">${x}</button>`).join("")}</div>`;
      } else if(state.step === 4){
        body.innerHTML = `<span class="page-eyebrow">CLASS</span><h1>What class are you in?</h1><p>We'll use this to personalize your learning.</p><div class="tgen-choice-grid">${["SS1","SS2","SS3"].map(x=>`<button type="button" class="tgen-choice ${state.className===x?"selected":""}" data-value="${x}">${x}</button>`).join("")}</div>`;
      } else if(state.step === 5){
        const subs = subjectsFor(state.department);
        body.innerHTML = `<span class="page-eyebrow">SUBJECT</span><h1>What subject do you want to study?</h1><p>Only subjects relevant to your selected department are shown.</p><div class="tgen-choice-grid">${subs.map(x=>`<button type="button" class="tgen-choice ${state.subject===x?"selected":""}" data-value="${esc(x)}">${esc(x)}</button>`).join("")}</div>`;
      } else if(state.step === 6){
        const topics = topicsFor(state.subject);
        body.innerHTML = `<span class="page-eyebrow">TOPIC</span><h1>What topic do you want to learn?</h1><p>Choose a topic from your selected subject.</p><div class="tgen-choice-grid">${topics.map(x=>`<button type="button" class="tgen-choice ${state.topic===x?"selected":""}" data-value="${esc(x)}">${esc(x)}</button>`).join("")}</div>`;
      } else {
        body.innerHTML = `<span class="page-eyebrow">READY TO LEARN</span><h1>You're all set.</h1><p>Your learning setup is ready.</p><div class="tgen-summary"><div><span>Name</span><strong>${esc(state.name)}</strong></div><div><span>Class</span><strong>${esc(state.className)}</strong></div><div><span>Department</span><strong>${esc(state.department)}</strong></div><div><span>Subject</span><strong>${esc(state.subject)}</strong></div><div><span>Topic</span><strong>${esc(state.topic)}</strong></div></div>`;
      }

      body.querySelectorAll(".tgen-choice").forEach(btn=>btn.addEventListener("click",()=>{
        if(state.step===3) state.department=btn.dataset.value;
        if(state.step===4) state.className=btn.dataset.value;
        if(state.step===5) state.subject=btn.dataset.value;
        if(state.step===6) state.topic=btn.dataset.value;
        render();
      }));
    };

    const validate = () => {
      if(state.step===1){ state.name=body.querySelector("#tgenOBName")?.value.trim()||""; if(!state.name) return "Please enter your name."; }
      if(state.step===2){ state.email=body.querySelector("#tgenOBEmail")?.value.trim()||""; state.password=body.querySelector("#tgenOBPassword")?.value||""; if(!/^\S+@\S+\.\S+$/.test(state.email)) return "Please enter a valid email."; if(state.password.length<4) return "Create a password with at least 4 characters."; }
      if(state.step===3 && !state.department) return "Choose a department.";
      if(state.step===4 && !state.className) return "Choose your class.";
      if(state.step===5 && !state.subject) return "Choose a subject.";
      if(state.step===6 && !state.topic) return "Choose a topic.";
      return "";
    };

    next.addEventListener("click",()=>{
      const error=validate(); if(error){ alert(error); return; }
      if(state.step<7){ state.step++; render(); return; }
      const profile={name:state.name,email:state.email,className:state.className,class:state.className,department:state.department,subjects:[state.subject],exam:"",learningPreferences:{},onboardingComplete:true};
      saveJSON(PROFILE_KEY,profile); localStorage.setItem(ONBOARD_KEY,"1");
      try { userProfile=profile; window.userProfile=profile; selectedClass=state.className; selectedDepartment=state.department; selectedSubject=state.subject; selectedTopic=state.topic; } catch(e){}
      overlay.classList.remove("open");
      setTimeout(()=>overlay.remove(),220);
      if(typeof window.updateProfileUI==="function") window.updateProfileUI();
      if(typeof window.createProfileMenu==="function") window.createProfileMenu();
      showScreen("study");
      setTimeout(()=>{
        const title=document.getElementById("studyTitle"); if(title) title.textContent=`Ready to learn ${state.topic}?`;
        const badge=document.getElementById("selectedTopicBadge"); if(badge) badge.textContent=state.topic;
      },50);
    });
    back.addEventListener("click",()=>{ if(state.step>0){state.step--;render();} });
    render();
    overlay.classList.add("open");
  }

  // New first-time entry: Start Learning opens onboarding instead of the old profile/topics route.
  window.startLearning = function(){
    if(getProfile()){
      showScreen("dashboard");
      return;
    }
    ensureOnboarding();
  };

  // Keep subject selection useful after onboarding and avoid forcing a Topics page from Start Learning.
  window.selectSubject = function(subjectName){
    const profile=getProfile();
    if(!profile || !Array.isArray(profile.subjects) || !profile.subjects.includes(subjectName)) return;
    selectedSubject=subjectName;
    selectedTopic=null;
    showScreen("study");
    const title=document.getElementById("studyTitle"); if(title) title.textContent="Ask TGEN-AI";
    const badge=document.getElementById("selectedTopicBadge"); if(badge) badge.textContent=subjectName;
    const backBtn=document.querySelector("#study .back-btn"); if(backBtn) backBtn.textContent="← Back to subjects";
    const browse=document.getElementById("showTopicsBtn"); if(browse) browse.style.display="none";
  };

  function featureProfile(){
    const p=getProfile();
    if(!p) return null;
    return p;
  }

  function renderNotes(){
    const content=document.getElementById("notesContent"); if(!content) return;
    content.innerHTML=`<div class="tgen-feature-card"><div class="tgen-feature-icon">📄</div><h2>Upload a note and learn from it</h2><p>TGEN-AI can read a PDF, document, text note or image and explain the material one section at a time.</p><input id="tgenNoteInput" type="file" accept=".pdf,.doc,.docx,.txt,.md,.png,.jpg,.jpeg" hidden><button class="primary-btn" id="tgenNotePick">＋ Upload note</button><p id="tgenNoteName" class="tgen-muted">No note selected.</p><button class="secondary-btn" id="tgenNoteExplain" disabled>Explain my note →</button><div id="tgenNoteResult" class="tgen-note-result"></div></div>`;
    const input=content.querySelector("#tgenNoteInput"), pick=content.querySelector("#tgenNotePick"), explain=content.querySelector("#tgenNoteExplain"), name=content.querySelector("#tgenNoteName"), result=content.querySelector("#tgenNoteResult");
    let file=null;
    pick.onclick=()=>input.click();
    input.onchange=()=>{file=input.files?.[0]||null; name.textContent=file?file.name:"No note selected."; explain.disabled=!file;};
    explain.onclick=async()=>{
      if(!file) return;
      const p=featureProfile();
      explain.disabled=true; explain.textContent="Reading note..."; result.innerHTML="<div class='tgen-loading'>TGEN-AI is reading your note…</div>";
      try{
        const reader=new FileReader(); reader.onload=async()=>{
          const response=await fetch("/api/note-study",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({filename:file.name,mimeType:file.type||"application/octet-stream",fileData:String(reader.result).split(",")[1]||"",subject:selectedSubject||p?.subjects?.[0]||"",profile:p})});
          const data=await response.json(); if(!response.ok) throw new Error(data.error||"Could not read note.");
          result.innerHTML=`<div class='tgen-note-response'>${data.answer||data.response||"Your note was read successfully."}</div>`;
        }; reader.onerror=()=>{throw new Error("Could not read the selected file.")}; reader.readAsDataURL(file);
      }catch(e){ result.innerHTML=`<div class='tgen-error'>${esc(e.message)}</div>`; }
      finally{ explain.disabled=false; explain.textContent="Explain my note →"; }
    };
  }

  function renderFlashcards(){
    const content=document.getElementById("flashcardsContent"); if(!content) return;
    const p=featureProfile(); const subject=selectedSubject||p?.subjects?.[0]||"General Mathematics"; const topic=selectedTopic||topicsFor(subject)[0];
    const questions = safeJSON(`tgen-flashcards:${subject}:${topic}`,null) || [
      {q:`What is ${topic}?`,a:`Ask TGEN-AI to explain ${topic} clearly, then use this card to recall the main idea.`},
      {q:`What is one key idea in ${topic}?`,a:`Review the key concepts of ${topic} and say one from memory.`},
      {q:`How can you practise ${topic}?`,a:`Use Quick Practice or a quiz on ${topic}.`}
    ];
    let index=0,flipped=false;
    const render=()=>{ const c=questions[index]; content.innerHTML=`<div class="tgen-flashcard-wrap"><div class="tgen-flashcard ${flipped?"flipped":""}" id="tgenFlashCard"><div class="tgen-card-face tgen-card-front"><span>QUESTION</span><h2>${esc(c.q)}</h2><small>Tap to flip</small></div><div class="tgen-card-face tgen-card-back"><span>ANSWER</span><h2>${esc(c.a)}</h2><small>Tap to flip back</small></div></div><div class="tgen-card-controls"><button class="secondary-btn" id="fcPrev">← Previous</button><span>${index+1} / ${questions.length}</span><button class="secondary-btn" id="fcNext">Next →</button></div><div class="tgen-card-controls"><button class="outline-btn" id="fcShuffle">Shuffle</button><button class="outline-btn" id="fcKnown">✓ Known</button><button class="outline-btn" id="fcPractice">Needs practice</button></div></div>`;
      content.querySelector("#tgenFlashCard").onclick=()=>{flipped=!flipped;render();}; content.querySelector("#fcPrev").onclick=()=>{index=(index-1+questions.length)%questions.length;flipped=false;render();}; content.querySelector("#fcNext").onclick=()=>{index=(index+1)%questions.length;flipped=false;render();}; content.querySelector("#fcShuffle").onclick=()=>{questions.sort(()=>Math.random()-.5);index=0;flipped=false;render();};
      content.querySelector("#fcKnown").onclick=()=>{localStorage.setItem(`tgen-fc-known:${subject}:${topic}:${index}`,"1");}; content.querySelector("#fcPractice").onclick=()=>{localStorage.setItem(`tgen-fc-practice:${subject}:${topic}:${index}`,"1");};
    }; render();
  }

  function renderQuickPractice(){
    const c=document.getElementById("quickPracticeContent"); if(!c) return;
    c.innerHTML=`<div class="tgen-feature-card"><h2>Choose your practice size</h2><p>Questions use your selected subject and topic.</p><div class="tgen-choice-grid practice-size"><button class="tgen-choice" data-n="5">5 questions</button><button class="tgen-choice" data-n="10">10 questions</button><button class="tgen-choice" data-n="20">20 questions</button></div><div id="qpResult"></div></div>`;
    c.querySelectorAll("[data-n]").forEach(btn=>btn.onclick=()=>{const n=Number(btn.dataset.n); localStorage.setItem("tgen-last-practice-size",String(n)); const r=c.querySelector("#qpResult"); r.innerHTML=`<div class="tgen-start-box"><strong>${n} questions ready.</strong><p>Start with the Quiz section to answer them using your selected subject and topic.</p><button class="primary-btn" onclick="showScreen('quiz')">Start Practice →</button></div>`;});
  }

  function renderQuickRevision(){
    const c=document.getElementById("quickRevisionContent"); if(!c) return; const p=featureProfile(); const subject=selectedSubject||p?.subjects?.[0]||"your subject"; const topic=selectedTopic||topicsFor(subject)[0];
    c.innerHTML=`<div class="tgen-feature-card"><span class="page-eyebrow">${esc(subject)}</span><h2>${esc(topic)}</h2><div class="tgen-revision-grid"><div><strong>Key definitions</strong><p>Ask the AI Tutor for the important terms and definitions in this topic.</p></div><div><strong>Important points</strong><p>Review the main ideas before moving on.</p></div><div><strong>Formulas & concepts</strong><p>Use the tutor for worked examples and formula explanations.</p></div><div><strong>Examples</strong><p>Ask for one worked example at a time.</p></div></div><button class="primary-btn" onclick="showScreen('study')">Review with AI Tutor →</button></div>`;
  }

  function renderDaily(){
    const c=document.getElementById("dailyChallengeContent"); if(!c) return; const today=new Date().toISOString().slice(0,10); const key=`tgen-daily:${today}`; const done=localStorage.getItem(key)==="1"; const p=featureProfile(); const subject=selectedSubject||p?.subjects?.[0]||"General Mathematics";
    c.innerHTML=`<div class="tgen-feature-card"><div class="tgen-feature-icon">⚡</div><span class="page-eyebrow">TODAY'S CHALLENGE</span><h2>5 questions in ${esc(subject)}</h2><p>Complete the quiz to record today's challenge as completed.</p><div class="tgen-daily-status ${done?"done":""}">${done?"✓ Challenge completed today":"Not completed yet"}</div><button class="primary-btn" ${done?"disabled":""} onclick="localStorage.setItem('tgen-daily-pending','${today}'); showScreen('quiz')">${done?"Completed":"Start Challenge →"}</button></div>`;
  }

  function renderPlanner(){
    const c=document.getElementById("studyPlannerContent"); if(!c) return; let goals=safeJSON("tgen-planner-goals",[]); const draw=()=>{c.innerHTML=`<div class="tgen-feature-card"><h2>Plan a small study goal</h2><div class="tgen-planner-add"><input id="plannerInput" class="tgen-ob-input" placeholder="e.g. Study Mathematics for 30 minutes"><button class="primary-btn" id="plannerAdd">Add goal</button></div><div class="tgen-goals">${goals.length?goals.map((g,i)=>`<label class="tgen-goal ${g.done?"done":""}"><input type="checkbox" data-i="${i}" ${g.done?"checked":""}><span>${esc(g.text)}</span><button type="button" data-del="${i}">×</button></label>`).join(""):"<p class='tgen-muted'>No goals yet.</p>"}</div></div>`; c.querySelector("#plannerAdd").onclick=()=>{const text=c.querySelector("#plannerInput").value.trim();if(text){goals.push({text,done:false});saveJSON("tgen-planner-goals",goals);draw();}}; c.querySelectorAll("[data-i]").forEach(x=>x.onchange=()=>{goals[Number(x.dataset.i)].done=x.checked;saveJSON("tgen-planner-goals",goals);draw();}); c.querySelectorAll("[data-del]").forEach(x=>x.onclick=()=>{goals.splice(Number(x.dataset.del),1);saveJSON("tgen-planner-goals",goals);draw();});}; draw();
  }

  function renderExamPrep(){
    const c=document.getElementById("examPrepContent"); if(!c) return; const p=featureProfile(); const exam=p?.exam||"Your exam"; const subject=selectedSubject||p?.subjects?.[0]||"Selected subject";
    c.innerHTML=`<div class="tgen-feature-card"><span class="page-eyebrow">EXAM TARGET</span><h2>${esc(exam)}</h2><p>Prepare with a focused routine for ${esc(subject)}.</p><div class="tgen-exam-grid"><button onclick="showScreen('study')">AI explanations</button><button onclick="showScreen('quickRevision')">Quick revision</button><button onclick="showScreen('quickPractice')">Practice questions</button><button onclick="showScreen('quiz')">Timed quiz</button></div><p class="tgen-muted">Generated practice is practice material; it is not presented as official examination content.</p></div>`;
  }

  function wireDailyCompletion(){
    if (window.__tgenDailyCompletionWired) return;
    window.__tgenDailyCompletionWired = true;
    const originalSubmit = window.submitQuiz;
    if (typeof originalSubmit === "function") {
      window.submitQuiz = function(){
        const pending = localStorage.getItem("tgen-daily-pending");
        const result = originalSubmit.apply(this, arguments);
        setTimeout(() => {
          const resultBox = document.getElementById("quizResult");
          if (pending && resultBox && resultBox.style.display !== "none" && resultBox.textContent.trim()) {
            localStorage.setItem(`tgen-daily:${pending}`, "1");
            localStorage.removeItem("tgen-daily-pending");
          }
        }, 250);
        return result;
      };
    }
  }

  function renderAll(){ ensureFeatureScreens(); ensureNav(); renderNotes(); renderFlashcards(); renderQuickPractice(); renderQuickRevision(); renderDaily(); renderPlanner(); renderExamPrep(); wireDailyCompletion(); }

  // Clean the AI Tutor header and keep Notes separate.
  function cleanTutor(){
    const study=document.getElementById("study"); if(!study) return;
    const title=study.querySelector("#studyTitle"); if(title) title.textContent="Ask TGEN-AI";
    const intro=study.querySelector(".study-header");
    if(intro){ const h=study.querySelector(".study-header p"); if(h) h.textContent="Ask questions, explore concepts and learn step by step."; }
    const empty=study.querySelector("#topicNameEmpty h2"); if(empty) empty.textContent="What can I help you learn?";
    const emptyP=study.querySelector("#topicNameEmpty p"); if(emptyP) emptyP.textContent="Name a topic, ask a question, or ask TGEN-AI to explain a concept clearly.";
  }

  // Patch showScreen without deleting the existing implementation.
  const previousShowScreen=window.showScreen;
  window.showScreen=function(screenId){
    if(["notes","flashcards","quickPractice","quickRevision","dailyChallenge","studyPlanner","examPrep"].includes(screenId) && !getProfile()){
      startLearning(); return;
    }
    const result=previousShowScreen ? previousShowScreen(screenId) : undefined;
    if(screenId==="study") cleanTutor();
    if(screenId==="notes") renderNotes();
    if(screenId==="flashcards") renderFlashcards();
    if(screenId==="quickPractice") renderQuickPractice();
    if(screenId==="quickRevision") renderQuickRevision();
    if(screenId==="dailyChallenge") renderDaily();
    if(screenId==="studyPlanner") renderPlanner();
    if(screenId==="examPrep") renderExamPrep();
    return result;
  };

  // Make the old Topics button harmless for the new learning flow, while keeping the old screen available.
  const topicButton=document.getElementById("showTopicsBtn"); if(topicButton) topicButton.style.display="none";

  document.addEventListener("DOMContentLoaded",()=>{ setTimeout(()=>{ renderAll(); cleanTutor(); },120); });
  setTimeout(()=>{ renderAll(); cleanTutor(); },500);
})();
/* TGEN-AI — Welcome + Glass Onboarding Patch
   Targeted patch only. Does not replace existing app logic.
*/
(function () {
  'use strict';

  function esc(value) {
    return String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  }

  function hasProfile() {
    return !!(window.userProfile && typeof window.userProfile === 'object');
  }

  function ensureWelcomeScreen() {
    if (document.getElementById('tgenWelcome')) return;

    const section = document.createElement('section');
    section.id = 'tgenWelcome';
    section.className = 'app-screen tgen-welcome-screen';
    section.innerHTML = `
      <div class="tgen-welcome-shell">
        <div class="tgen-welcome-glass">
          <div class="tgen-welcome-badge"><span></span>TGEN-AI</div>
          <div class="tgen-welcome-layout">
            <div class="tgen-welcome-copy">
              <p class="tgen-welcome-eyebrow">YOUR PERSONAL AI STUDY COMPANION</p>
              <h1>Study smarter.<br><em>Understand more.</em></h1>
              <p class="tgen-welcome-lead">
                TGEN-AI helps you learn school subjects in a clearer, more interactive way — with an AI teacher that explains concepts, gives examples and helps you practise.
              </p>
              <div class="tgen-welcome-actions">
                <button class="primary-btn tgen-create-profile-btn" type="button">Create my profile <span>→</span></button>
                <button class="secondary-btn tgen-welcome-back-btn" type="button">Back</button>
              </div>
            </div>
            <div class="tgen-welcome-features">
              <div class="tgen-feature-card"><div class="tgen-feature-icon">✦</div><div><strong>AI Teacher</strong><p>Ask questions and get clear, step-by-step explanations.</p></div></div>
              <div class="tgen-feature-card"><div class="tgen-feature-icon">✓</div><div><strong>Practice & Quizzes</strong><p>Test what you know and learn from your mistakes.</p></div></div>
              <div class="tgen-feature-card"><div class="tgen-feature-icon">▣</div><div><strong>Revision Tools</strong><p>Use flashcards, quick revision and other study tools.</p></div></div>
              <div class="tgen-feature-card"><div class="tgen-feature-icon">↗</div><div><strong>Track Progress</strong><p>Keep your real study activity and quiz progress in one place.</p></div></div>
            </div>
          </div>
          <div class="tgen-welcome-footer"><span>Built for Nigerian secondary-school students</span><span>SS1 • SS2 • SS3</span></div>
        </div>
      </div>`;

    const main = document.querySelector('main');
    if (main) main.insertBefore(section, main.firstElementChild);

    section.querySelector('.tgen-create-profile-btn').addEventListener('click', () => {
      if (typeof window.showScreen === 'function') window.showScreen('profile');
    });
    section.querySelector('.tgen-welcome-back-btn').addEventListener('click', () => {
      if (typeof window.showScreen === 'function') window.showScreen('home');
    });
  }

  function setupStartLearning() {
    ensureWelcomeScreen();

    const buttons = Array.from(document.querySelectorAll('button'));
    buttons.forEach(button => {
      const text = button.textContent.trim().replace(/\s+/g, ' ');
      if (!/^Start Learning(?:\s*→)?$/.test(text)) return;
      if (button.dataset.tgenWelcomeBound === '1') return;
      button.dataset.tgenWelcomeBound = '1';
      button.removeAttribute('onclick');
      button.addEventListener('click', () => {
        if (typeof window.showScreen !== 'function') return;
        if (hasProfile()) {
          window.showScreen('dashboard');
        } else {
          ensureWelcomeScreen();
          window.showScreen('tgenWelcome');
        }
      });
    });
  }

  function applyGlassCopy() {
    const profile = document.getElementById('profile');
    if (!profile) return;

    const title = profile.querySelector('.page-header h1');
    const desc = profile.querySelector('.page-header p');
    const eyebrow = profile.querySelector('.page-eyebrow');
    if (eyebrow) eyebrow.textContent = 'SET UP TGEN-AI';
    if (title) title.textContent = hasProfile() ? 'Your learning profile' : 'Let’s set up your learning space';
    if (desc) desc.textContent = 'Tell TGEN-AI what you study so your learning experience feels personal from the start.';

    const subjectHeading = profile.querySelector('#profileSubjects')?.previousElementSibling;
    if (subjectHeading && subjectHeading.tagName === 'DIV') {
      const h3 = subjectHeading.querySelector('h3');
      const p = subjectHeading.querySelector('p');
      if (h3) h3.textContent = 'Choose your subjects';
      if (p) p.textContent = 'Pick the subjects you actually offer. Your choices will shape your TGEN-AI experience.';
    }
  }

  function bindProfileGlass() {
    applyGlassCopy();
    const profile = document.getElementById('profile');
    if (!profile) return;

    profile.classList.add('tgen-glass-profile');

    ['profileName','profileEmail','profileClass','profileDepartment','profileExam'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.classList.add('tgen-glass-control');
    });

    const subjects = document.getElementById('profileSubjects');
    if (subjects) subjects.classList.add('tgen-glass-subject-grid');
  }

  function watchDynamicProfile() {
    bindProfileGlass();
    const classSelect = document.getElementById('profileClass');
    const deptSelect = document.getElementById('profileDepartment');
    [classSelect, deptSelect].forEach(el => {
      if (!el || el.dataset.tgenGlassBound === '1') return;
      el.dataset.tgenGlassBound = '1';
      el.addEventListener('change', () => setTimeout(bindProfileGlass, 50));
    });

    const subjectGrid = document.getElementById('profileSubjects');
    if (subjectGrid && subjectGrid.dataset.tgenObserver !== '1') {
      subjectGrid.dataset.tgenObserver = '1';
      new MutationObserver(() => {
        subjectGrid.classList.add('tgen-glass-subject-grid');
        subjectGrid.querySelectorAll('button, label, .subject-option, .profile-subject-card').forEach(el => el.classList.add('tgen-glass-choice'));
      }).observe(subjectGrid, {childList:true, subtree:true});
    }
  }

  function glassAcademicScreens() {
    ['classes','subjects','topics'].forEach(id => {
      const screen = document.getElementById(id);
      if (screen) screen.classList.add('tgen-glass-academic-screen');
    });
    document.querySelectorAll('#subjects .subject-card, #topics .topic-card, #classes .class-card').forEach(card => {
      card.classList.add('tgen-glass-choice');
    });
  }

  function init() {
    ensureWelcomeScreen();
    setupStartLearning();
    watchDynamicProfile();
    glassAcademicScreens();

    const originalShowScreen = window.showScreen;
    if (typeof originalShowScreen === 'function' && !originalShowScreen.__tgenWrapped) {
      function wrappedShowScreen(id) {
        if (id === 'profile' || id === 'subjects' || id === 'topics' || id === 'classes') {
          watchDynamicProfile();
          glassAcademicScreens();
        }
        return originalShowScreen.apply(this, arguments);
      }
      wrappedShowScreen.__tgenWrapped = true;
      window.showScreen = wrappedShowScreen;
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
  window.addEventListener('load', () => { init(); setTimeout(init, 300); });
})();
/* TGEN-AI — Profile Persistence + Navigation Fix
   Add this AFTER your existing app.js code.
   Does not remove existing features.
*/
(function () {
  "use strict";

  const PROFILE_KEY = "tgen-ai-profile";

  function readProfile() {
    try {
      const raw = localStorage.getItem(PROFILE_KEY);
      if (!raw) return null;
      const profile = JSON.parse(raw);
      return profile && typeof profile === "object" ? profile : null;
    } catch (error) {
      return null;
    }
  }

  function hydrateProfile() {
    const saved = readProfile();

    if (saved) {
      // Keep the existing app's profile state in sync with localStorage.
      try { userProfile = saved; } catch (error) {}
      window.userProfile = saved;

      if (saved.className || saved.class) {
        try { selectedClass = saved.className || saved.class; } catch (error) {}
      }

      if (saved.department) {
        try { selectedDepartment = saved.department; } catch (error) {}
      }

      return saved;
    }

    window.userProfile = null;
    return null;
  }

  // FIX: the old showScreen guard was checking a stale/null in-memory
  // userProfile even when a saved profile existed in localStorage.
  const oldShowScreen = window.showScreen;

  if (typeof oldShowScreen === "function") {
    const fixedShowScreen = function (screenId) {
      const profile = hydrateProfile();

      // Never send a saved user back to Create Profile.
      if (profile && screenId === "profile") {
        // Keep profile accessible as an edit screen if explicitly requested.
        return oldShowScreen.call(this, screenId);
      }

      if (profile && screenId !== "home" && screenId !== "profile") {
        // The original guard now sees the hydrated profile.
        return oldShowScreen.call(this, screenId);
      }

      return oldShowScreen.call(this, screenId);
    };

    fixedShowScreen.__tgenProfileFix = true;
    window.showScreen = fixedShowScreen;
  }

  // First-time profile completion should lead directly into AI Tutor.
  // Existing users keep the normal dashboard Start Learning behaviour.
  window.startLearning = function () {
    const profile = hydrateProfile();

    if (!profile) {
      if (typeof window.ensureOnboarding === "function") {
        window.ensureOnboarding();
      } else if (typeof window.showScreen === "function") {
        window.showScreen("profile");
      }
      return;
    }

    try {
      selectedClass = profile.className || profile.class || selectedClass;
      selectedDepartment = profile.department || selectedDepartment;
      selectedSubject = profile.subjects?.[0] || selectedSubject || null;
      selectedTopic = null;
    } catch (error) {}

    if (typeof window.showScreen === "function") {
      window.showScreen("study");
    }

    setTimeout(() => {
      const title = document.getElementById("studyTitle");
      if (title && profile.subjects?.[0]) {
        title.textContent = "Ask TGEN-AI";
      }

      const browse = document.getElementById("showTopicsBtn");
      if (browse) browse.style.display = "none";

      const backBtn = document.querySelector("#study .back-btn");
      if (backBtn) backBtn.textContent = "← Back to subjects";
    }, 0);
  };

  // Fix the generated navbar too. It now reads the saved profile before
  // calling showScreen, so navigation cannot bounce back to Profile.
  function fixNav() {
    const nav = document.querySelector(".main-nav");
    if (!nav) return;

    nav.querySelectorAll("[data-tgen-nav]").forEach(button => {
      if (button.dataset.tgenProfileFixBound === "1") return;
      button.dataset.tgenProfileFixBound = "1";

      const target = button.dataset.tgenNav;
      button.addEventListener("click", event => {
        event.preventDefault();
        event.stopPropagation();

        const profile = hydrateProfile();

        if (target !== "home" && !profile) {
          window.startLearning();
          return;
        }

        if (target !== "home") hydrateProfile();

        if (typeof window.showScreen === "function") {
          window.showScreen(target);
        }
      }, true);
    });
  }

  function init() {
    hydrateProfile();
    fixNav();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  window.addEventListener("load", () => {
    hydrateProfile();
    setTimeout(init, 100);
    setTimeout(init, 500);
  });
})();


/* =========================================================
   TGEN-AI — FINAL UI POLISH / FLOW FIX
   Targeted patch only. Keeps the existing large app and data.
   ========================================================= */
(function(){
  "use strict";

  const $ = (s, r=document) => r.querySelector(s);
  const $$ = (s, r=document) => Array.from(r.querySelectorAll(s));

  function scrollToTutor(){
    setTimeout(()=>{
      const input = document.getElementById("questionInput");
      const study = document.getElementById("study");
      const target = input || study;
      if(!target) return;
      target.scrollIntoView({behavior:"smooth", block:"center"});
      setTimeout(()=>{ try{ input?.focus(); }catch(e){} }, 450);
    }, 120);
  }

  /* 1) Start Learning = straight to the ChatGPT-style tutor.
        New users still get onboarding first. The Classes page is no longer
        part of the Start Learning flow. */
  const originalStartLearning = window.startLearning;
  window.startLearning = function(){
    try{
      if(typeof hydrateProfile === "function") hydrateProfile();
    }catch(e){}
    const profile = window.userProfile || (typeof getProfile === "function" ? getProfile() : null);
    if(!profile){
      if(typeof ensureOnboarding === "function"){
        ensureOnboarding();
        return;
      }
      if(typeof window.showScreen === "function") window.showScreen("profile");
      return;
    }
    try{
      if(profile.className || profile.class) selectedClass = profile.className || profile.class;
      if(profile.department) selectedDepartment = profile.department;
      selectedSubject = null;
      selectedTopic = null;
    }catch(e){}
    if(typeof window.showScreen === "function") window.showScreen("study");
    scrollToTutor();
  };

  /* Also catch old inline Start Learning buttons that may still call a stale handler. */
  document.addEventListener("click", function(e){
    const btn = e.target.closest && e.target.closest("button, a");
    if(!btn) return;
    const text = btn.textContent.trim().replace(/\s+/g," ");
    if(/^Start Learning(?:\s*→)?$/.test(text)){
      e.preventDefault();
      e.stopImmediatePropagation();
      window.startLearning();
    }
  }, true);

  /* 2) Make the tutor feel much closer to ChatGPT. */
  const style = document.createElement("style");
  style.id = "tgen-final-polish-style";
  style.textContent = `
    #study .study-content,
    #study .study-container,
    #study .chat-container{
      width:min(900px,100%);
      margin:0 auto;
    }

    #chatArea{
      width:min(820px,100%);
      margin:0 auto;
      padding:20px 10px 170px;
      min-height:420px;
      scroll-behavior:smooth;
    }

    #questionInput{
      width:100% !important;
      min-height:58px !important;
      max-height:180px !important;
      resize:none !important;
      border:1px solid rgba(0,0,0,.14) !important;
      border-radius:24px !important;
      padding:17px 54px 17px 18px !important;
      font-family:Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif !important;
      font-size:16px !important;
      line-height:1.5 !important;
      letter-spacing:0 !important;
      color:#171717 !important;
      background:#fff !important;
      outline:none !important;
      box-shadow:0 1px 2px rgba(0,0,0,.04), 0 8px 30px rgba(0,0,0,.06) !important;
      transition:border-color .18s ease, box-shadow .18s ease !important;
    }

    #questionInput:focus{
      border-color:rgba(46,111,232,.55) !important;
      box-shadow:0 1px 2px rgba(0,0,0,.04), 0 0 0 3px rgba(46,111,232,.10) !important;
    }

    #questionInput::placeholder{color:#8b8b8b !important;}

    #study .chat-input-container,
    #study .input-area,
    #study .question-input-wrap{
      width:min(820px,calc(100% - 28px)) !important;
      margin:0 auto !important;
    }

    .chat-message{font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif !important;}
    .chat-message.user{background:transparent !important;}
    .chat-message.ai{background:transparent !important;}

    /* 3) Feature pages: stop the cramped/squashed look. */
    .tgen-feature-page{
      width:min(1120px,calc(100% - 32px)) !important;
      margin:0 auto !important;
      padding:32px 0 70px !important;
    }
    .tgen-feature-page .page-header{
      display:flex !important;
      align-items:flex-start !important;
      justify-content:space-between !important;
      gap:24px !important;
      margin-bottom:28px !important;
    }
    .tgen-feature-page #notesContent,
    .tgen-feature-page #examPrepContent,
    .tgen-feature-page #dailyChallengeContent{
      width:100% !important;
    }
    .tgen-feature-card{
      width:100% !important;
      box-sizing:border-box !important;
      border-radius:24px !important;
      padding:30px !important;
      background:#fff !important;
      border:1px solid rgba(0,0,0,.08) !important;
      box-shadow:0 12px 40px rgba(0,0,0,.07) !important;
    }

    /* 4) Notes: proper document/PDF-style upload panel. */
    .tgen-notes-dropzone{
      border:2px dashed #cfd6e4;
      border-radius:22px;
      padding:42px 24px;
      text-align:center;
      background:linear-gradient(180deg,#fafcff,#f5f8fc);
      cursor:pointer;
      transition:.18s ease;
    }
    .tgen-notes-dropzone:hover{border-color:#2e6fe8;transform:translateY(-1px);}
    .tgen-file-icon{
      width:68px;height:84px;margin:0 auto 16px;border-radius:10px;
      background:#fff;border:1px solid #dce2ec;box-shadow:0 8px 20px rgba(0,0,0,.07);
      display:grid;place-items:center;font-size:32px;position:relative;
    }
    .tgen-file-icon:after{content:"PDF";position:absolute;bottom:8px;font-size:10px;font-weight:800;color:#e24d4d;letter-spacing:.08em;}
    .tgen-notes-file-row{display:flex;align-items:center;gap:14px;padding:14px 16px;border:1px solid #e1e6ee;border-radius:16px;background:#fff;margin-top:16px;}
    .tgen-notes-file-row strong{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
    .tgen-notes-file-row span{font-size:12px;color:#777;}

    /* 5) Exam Prep: clean dashboard grid instead of one squeezed block. */
    .tgen-exam-modern{display:grid;gap:22px;}
    .tgen-exam-hero{padding:26px;border-radius:22px;background:linear-gradient(135deg,#f4f7ff,#ffffff);border:1px solid #dfe5f0;}
    .tgen-exam-actions{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px;}
    .tgen-exam-action{min-height:130px;border:1px solid #e1e6ee;border-radius:20px;background:#fff;padding:22px;text-align:left;cursor:pointer;box-shadow:0 8px 24px rgba(0,0,0,.05);}
    .tgen-exam-action:hover{transform:translateY(-2px);box-shadow:0 12px 30px rgba(0,0,0,.08);}
    .tgen-exam-action strong{display:block;font-size:17px;margin-bottom:7px;}
    .tgen-exam-action span{color:#6f7785;line-height:1.45;}

    /* 6) Daily Challenge: make it feel like an actual daily mission. */
    .tgen-daily-modern{position:relative;overflow:hidden;border-radius:26px;padding:30px;background:linear-gradient(135deg,#101828,#1d2a44);color:#fff;box-shadow:0 18px 50px rgba(16,24,40,.22);}
    .tgen-daily-modern .page-eyebrow{color:#a9c4ff;}
    .tgen-daily-modern p{color:#d5dbea;}
    .tgen-daily-stats{display:flex;gap:12px;flex-wrap:wrap;margin:22px 0;}
    .tgen-daily-stat{padding:12px 15px;border-radius:14px;background:rgba(255,255,255,.09);border:1px solid rgba(255,255,255,.12);}
    .tgen-daily-stat strong{display:block;font-size:18px;}

    /* 7) Remove Quick Practice from navigation/feature UI. */
    [data-tgen-nav="quickPractice"], #quickPractice{display:none !important;}

    /* 8) Quiz size selector. */
    .tgen-quiz-size-bar{width:min(900px,calc(100% - 28px));margin:0 auto 18px;padding:16px;border:1px solid #e1e6ee;border-radius:18px;background:#fff;display:flex;align-items:center;justify-content:space-between;gap:14px;flex-wrap:wrap;}
    .tgen-quiz-size-options{display:flex;gap:8px;flex-wrap:wrap;}
    .tgen-quiz-size-options button{border:1px solid #d9deea;background:#fff;border-radius:12px;padding:9px 14px;font-weight:700;cursor:pointer;}
    .tgen-quiz-size-options button.active{background:#2e6fe8;color:#fff;border-color:#2e6fe8;}

    @media(max-width:700px){
      .tgen-feature-page{width:min(100% - 20px,1120px) !important;padding-top:20px !important;}
      .tgen-feature-card{padding:20px !important;border-radius:20px !important;}
      .tgen-exam-actions{grid-template-columns:1fr;}
      #chatArea{padding-left:4px;padding-right:4px;}
    }
  `;
  document.head.appendChild(style);

  /* 9) Better Notes renderer. */
  window.renderNotes = function(){
    const content=document.getElementById("notesContent");
    if(!content) return;
    content.innerHTML=`
      <div class="tgen-feature-card">
        <div class="tgen-notes-dropzone" id="tgenNotesDropzone">
          <div class="tgen-file-icon">📄</div>
          <h2>Upload a document</h2>
          <p>Drop a PDF, Word document, text file or image here, or choose a file from your Mac.</p>
          <button class="primary-btn" type="button" id="tgenNotePick">Choose file</button>
          <input id="tgenNoteInput" type="file" accept=".pdf,.doc,.docx,.txt,.md,.png,.jpg,.jpeg" hidden>
        </div>
        <div id="tgenNoteFileRow"></div>
        <div id="tgenNoteResult" class="tgen-note-result"></div>
      </div>`;

    const input=$("#tgenNoteInput",content), pick=$("#tgenNotePick",content), drop=$("#tgenNotesDropzone",content), row=$("#tgenNoteFileRow",content), result=$("#tgenNoteResult",content);
    let file=null;
    const showFile=()=>{
      if(!file){ row.innerHTML=""; return; }
      const kb=Math.max(1,Math.round(file.size/1024));
      row.innerHTML=`<div class="tgen-notes-file-row"><div class="tgen-file-icon" style="width:44px;height:54px;font-size:22px;margin:0">📄</div><div style="flex:1;min-width:0"><strong>${String(file.name).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"})[c])}</strong><span>${kb} KB · ${file.type||"document"}</span></div><button class="primary-btn" id="tgenNoteExplain" type="button">Learn from note →</button></div>`;
      $("#tgenNoteExplain",row).onclick=explain;
    };
    const explain=async()=>{
      if(!file) return;
      const btn=$("#tgenNoteExplain",row); if(btn){btn.disabled=true;btn.textContent="Reading…";}
      result.innerHTML="<div class='tgen-loading'>TGEN-AI is reading your document…</div>";
      try{
        const reader=new FileReader();
        reader.onload=async()=>{
          try{
            const response=await fetch("/api/note-study",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({filename:file.name,mimeType:file.type||"application/octet-stream",fileData:String(reader.result).split(",")[1]||"",subject:window.selectedSubject||"",profile:window.userProfile||null})});
            const data=await response.json();
            if(!response.ok) throw new Error(data.error||"Could not read note.");
            result.innerHTML=`<div class="tgen-feature-card" style="margin-top:18px"><span class="page-eyebrow">NOTE SUMMARY</span><h2>${file.name.replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"})[c])}</h2><div class="tgen-note-response">${data.answer||data.response||"Your note was read successfully."}</div></div>`;
          }catch(err){ result.innerHTML=`<div class='tgen-error'>${String(err.message||err)}</div>`; }
          if(btn){btn.disabled=false;btn.textContent="Learn from note →";}
        };
        reader.readAsDataURL(file);
      }catch(err){ result.innerHTML=`<div class='tgen-error'>${String(err.message||err)}</div>`; if(btn){btn.disabled=false;btn.textContent="Learn from note →";} }
    };
    pick.onclick=()=>input.click();
    drop.onclick=(e)=>{if(e.target!==pick) input.click();};
    input.onchange=()=>{file=input.files?.[0]||null;showFile();};
  };

  /* 10) Better Exam Prep renderer — no Quick Practice. */
  window.renderExamPrep = function(){
    const c=document.getElementById("examPrepContent"); if(!c) return;
    const p=(typeof featureProfile==="function"?featureProfile():window.userProfile)||{};
    const exam=p.exam||"Your next exam";
    const subject=window.selectedSubject||p.subjects?.[0]||"your subject";
    c.innerHTML=`<div class="tgen-exam-modern">
      <div class="tgen-exam-hero"><span class="page-eyebrow">EXAM PREP</span><h2>${String(exam).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"})[c])}</h2><p>Build a focused revision session for <strong>${String(subject).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"})[c])}</strong>.</p></div>
      <div class="tgen-exam-actions">
        <button class="tgen-exam-action" onclick="showScreen('study')"><strong>✦ AI Tutor</strong><span>Ask for explanations, examples and help with difficult topics.</span></button>
        <button class="tgen-exam-action" onclick="showScreen('quickRevision')"><strong>↻ Quick Revision</strong><span>Review key ideas, definitions, formulas and examples.</span></button>
        <button class="tgen-exam-action" onclick="showScreen('quiz')"><strong>✓ Quiz</strong><span>Choose 5, 10 or 20 questions and test yourself.</span></button>
        <button class="tgen-exam-action" onclick="showScreen('flashcards')"><strong>▣ Flashcards</strong><span>Use active recall to remember important concepts.</span></button>
      </div>
      <p class="tgen-muted">Generated practice is study material and is not presented as official examination content.</p>
    </div>`;
  };

  /* 11) Better Daily Challenge. */
  window.renderDaily = function(){
    const c=document.getElementById("dailyChallengeContent"); if(!c) return;
    const today=new Date().toISOString().slice(0,10);
    const done=localStorage.getItem(`tgen-daily:${today}`)==="1";
    const p=(typeof featureProfile==="function"?featureProfile():window.userProfile)||{};
    const subject=window.selectedSubject||p.subjects?.[0]||"General Mathematics";
    c.innerHTML=`<div class="tgen-daily-modern">
      <span class="page-eyebrow">TODAY'S MISSION</span>
      <h2 style="font-size:clamp(28px,4vw,42px);margin:8px 0">${done?"Challenge complete. Nice work.":"Your daily challenge is ready."}</h2>
      <p>Take a short ${subject.replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"})[c])} quiz and keep your learning streak moving.</p>
      <div class="tgen-daily-stats"><div class="tgen-daily-stat"><strong>5</strong><span>questions</span></div><div class="tgen-daily-stat"><strong>1</strong><span>daily mission</span></div><div class="tgen-daily-stat"><strong>${done?"✓":"—"}</strong><span>${done?"completed":"not completed"}</span></div></div>
      <button class="primary-btn" ${done?"disabled":""} onclick="localStorage.setItem('tgen-daily-pending','${today}'); showScreen('quiz');">${done?"Completed today":"Start today's challenge →"}</button>
    </div>`;
  };

  /* 12) Remove Quick Practice everywhere. Keep the old screen hidden so old
        references cannot break the app. */
  function removeQuickPractice(){
    document.querySelectorAll('[data-tgen-nav="quickPractice"]').forEach(x=>x.remove());
    const qp=document.getElementById("quickPractice"); if(qp) qp.remove();
  }

  /* 13) Put question count selection directly inside Quiz. */
  let quizSize = Number(localStorage.getItem("tgen-quiz-size")||5);
  if(![5,10,20].includes(quizSize)) quizSize=5;

  function quizSizeBar(){
    const list=document.getElementById("quizList"); if(!list) return;
    const old=document.getElementById("tgenQuizSizeBar"); if(old) old.remove();
    const bar=document.createElement("div");
    bar.id="tgenQuizSizeBar"; bar.className="tgen-quiz-size-bar";
    bar.innerHTML=`<div><strong>Quiz length</strong><div class="tgen-muted" style="font-size:12px">Choose how many questions you want.</div></div><div class="tgen-quiz-size-options"><button type="button" data-size="5">5</button><button type="button" data-size="10">10</button><button type="button" data-size="20">20</button></div>`;
    list.parentNode.insertBefore(bar,list);
    bar.querySelectorAll("[data-size]").forEach(b=>{
      const n=Number(b.dataset.size); if(n===quizSize)b.classList.add("active");
      b.onclick=()=>{quizSize=n;localStorage.setItem("tgen-quiz-size",String(n));quizSizeBar();};
    });
  }

  function renderSizedQuiz(){
    const list=document.getElementById("quizList"); if(!list || !Array.isArray(window.quizQuestions)) return;
    const questions=window.quizQuestions.slice(0,quizSize);
    window.quizQuestions=questions;
    window.quizAnswers={};
    list.innerHTML=questions.map((q,index)=>`<div class="quiz-item" id="tgen-quiz-${index}"><p class="quiz-question-text"><strong>${index+1}.</strong> ${typeof escapeHTML==="function"?escapeHTML(q.question):q.question}</p><div class="quiz-options">${(q.options||[]).map(option=>`<label class="quiz-option"><input type="radio" name="tgen-quiz-${index}" value="${typeof escapeAttribute==="function"?escapeAttribute(option):option}"><span>${typeof escapeHTML==="function"?escapeHTML(option):option}</span></label>`).join("")}</div></div>`).join("");
    const counter=document.getElementById("questionCounter"); if(counter)counter.textContent=`0 of ${questions.length} answered`;
    list.querySelectorAll('input[type="radio"]').forEach(i=>i.addEventListener("change",window.updateQuizProgress));
    const submit=document.getElementById("submitQuizBtn"); if(submit)submit.style.display="none";
    quizSizeBar();
  }

  const oldGenerateQuiz=window.generateQuiz;
  window.generateQuiz=function(){
    const first=quizSize;
    if(typeof oldGenerateQuiz!=="function") return;
    oldGenerateQuiz();
    setTimeout(()=>{
      let combined=Array.isArray(window.quizQuestions)?window.quizQuestions.slice():[];
      if(first>10){
        oldGenerateQuiz();
        const second=Array.isArray(window.quizQuestions)?window.quizQuestions.slice():[];
        combined=combined.concat(second);
      }
      const unique=[]; const seen=new Set();
      combined.forEach(q=>{const key=String(q.question||"");if(!seen.has(key)){seen.add(key);unique.push(q);}});
      window.quizQuestions=unique.slice(0,first);
      renderSizedQuiz();
    },80);
  };

  /* 14) Final showScreen wrapper: tutor scroll + feature rendering. */
  const oldShow=window.showScreen;
  window.showScreen=function(screenId){
    if(screenId==="quickPractice") return window.showScreen("quiz");
    const result=oldShow ? oldShow.apply(this,arguments) : undefined;
    if(screenId==="study") scrollToTutor();
    if(screenId==="notes") window.renderNotes();
    if(screenId==="examPrep") window.renderExamPrep();
    if(screenId==="dailyChallenge") window.renderDaily();
    if(screenId==="quiz") setTimeout(quizSizeBar,120);
    setTimeout(removeQuickPractice,50);
    return result;
  };

  function init(){
    removeQuickPractice();
    setTimeout(removeQuickPractice,250);
    setTimeout(removeQuickPractice,700);
    if(document.getElementById("quizList")) quizSizeBar();
  }
  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded",init,{once:true}); else init();
  window.addEventListener("load",()=>{init();setTimeout(init,400);});

  console.log("TGEN-AI: final UI polish patch loaded");
})();
/* =========================================================
   TGEN-AI — FINAL REQUESTED FIXES
   Paste this at the very bottom of app.js.
   ========================================================= */
(function () {
  "use strict";

  function esc(v) {
    return typeof escapeHTML === "function"
      ? escapeHTML(v)
      : String(v ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }

  function getProfile() {
    try { return JSON.parse(localStorage.getItem("tgen-ai-profile") || "null"); }
    catch (e) { return null; }
  }

  /* 1) Remove "Classes" and "Quick Practice" from every nav, permanently */
  function scrubNav() {
    document.querySelectorAll(".main-nav button, .footer-links button, .tgen-more-menu button, [data-tgen-nav]").forEach(btn => {
      const t = btn.textContent.trim().toLowerCase();
      if (t === "classes" || t === "quick practice") btn.remove();
    });
    document.querySelectorAll('[data-tgen-nav="classes"], [data-tgen-nav="quickPractice"]').forEach(b => b.remove());
    const qp = document.getElementById("quickPractice");
    if (qp) qp.remove();
  }

  /* 2) Never show "Create Profile" once a profile already exists */
  const prevShowScreen = window.showScreen;
  window.showScreen = function (screenId) {
    const profile = getProfile();
    if (profile) { try { window.userProfile = profile; userProfile = profile; } catch (e) {} }
    if (screenId === "profile" && profile) screenId = "study";
    if (screenId === "quickPractice") screenId = "quiz";

    const result = typeof prevShowScreen === "function" ? prevShowScreen(screenId) : undefined;

    scrubNav();
    if (screenId === "study") scrollToChat();
    if (screenId === "notes") renderCleanNotes();
    if (screenId === "examPrep") renderCleanExamPrep();
    if (screenId === "dailyChallenge") renderCleanDaily();
    if (screenId === "quiz") setTimeout(insertQuizSizeBar, 80);
    return result;
  };

  /* 3) Start Learning -> straight into the chat, ChatGPT-style */
  function scrollToChat() {
    setTimeout(() => {
      const input = document.getElementById("questionInput");
      const wrapper = document.querySelector("#study .chat-wrapper") || document.getElementById("study");
      (input || wrapper)?.scrollIntoView({ behavior: "smooth", block: "center" });
      setTimeout(() => { try { input && input.focus(); } catch (e) {} }, 350);
    }, 60);
  }

  window.startLearning = function () {
    const profile = getProfile();
    if (!profile) { window.showScreen("profile"); return; }
    try {
      selectedClass = profile.className || profile.class || selectedClass;
      selectedDepartment = profile.department || selectedDepartment;
      if (!selectedSubject) selectedSubject = profile.subjects?.[0] || null;
      selectedTopic = null;
    } catch (e) {}
    window.showScreen("study");
  };

  // Beats the hero button's inline onclick="showScreen('classes')"
  document.addEventListener("click", function (e) {
    const btn = e.target.closest && e.target.closest("button,a");
    if (!btn) return;
    const text = btn.textContent.replace(/\s+/g, " ").trim();
    if (/^Start Learning(\s*→)?$/i.test(text)) {
      e.preventDefault();
      e.stopImmediatePropagation();
      window.startLearning();
    }
  }, true);

  /* 4) ChatGPT-style chat font/spacing */
  const chatStyle = document.createElement("style");
  chatStyle.textContent = `
    #chatArea, #questionInput, .chat-message, .message-content {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif !important;
    }
    #chatArea { padding: 24px 6px 150px !important; }
    #questionInput { font-size: 15px !important; line-height: 1.5 !important; border-radius: 22px !important; padding: 15px 18px !important; }
    .chat-message.user-message, .chat-message.student { justify-content: flex-end; }
    .chat-message .message-content { border-radius: 18px !important; padding: 12px 16px !important; line-height: 1.6 !important; }
  `;
  document.head.appendChild(chatStyle);

  /* 5) Notes: real upload box, not a stacked line */
  function renderCleanNotes() {
    const content = document.getElementById("notesContent");
    if (!content) return;
    content.innerHTML = `
      <div class="tgen-notes-card">
        <div class="tgen-notes-dropzone" id="tgenCleanDrop">
          <div class="tgen-notes-icon">📄</div>
          <h2>Upload a document</h2>
          <p>Drop a PDF, Word document, text file or image, or choose one from your device.</p>
          <div class="tgen-notes-actions">
            <input id="tgenCleanFile" type="file" accept=".pdf,.doc,.docx,.txt,.md,.png,.jpg,.jpeg" hidden>
            <button class="tgen-notes-upload" type="button" id="tgenCleanChoose">Choose file</button>
            <button class="tgen-notes-explain" type="button" id="tgenCleanExplain" disabled>Explain my note →</button>
          </div>
          <div class="tgen-notes-file" id="tgenCleanFileName">No file selected.</div>
          <div class="tgen-notes-status" id="tgenCleanStatus"></div>
        </div>
        <div class="tgen-notes-result" id="tgenCleanResult">
          <h3>Lesson from your note</h3>
          <div class="tgen-notes-result-body" id="tgenCleanResultBody"></div>
        </div>
      </div>`;

    const input = content.querySelector("#tgenCleanFile"), pick = content.querySelector("#tgenCleanChoose"),
      explainBtn = content.querySelector("#tgenCleanExplain"), name = content.querySelector("#tgenCleanFileName"),
      status = content.querySelector("#tgenCleanStatus"), drop = content.querySelector("#tgenCleanDrop"),
      result = content.querySelector("#tgenCleanResult"), body = content.querySelector("#tgenCleanResultBody");
    let file = null;

    pick.onclick = () => input.click();
    drop.onclick = (e) => { if (e.target === pick || e.target === explainBtn) return; input.click(); };
    input.onchange = () => {
      file = input.files?.[0] || null;
      name.textContent = file ? file.name : "No file selected.";
      explainBtn.disabled = !file;
      drop.classList.toggle("has-file", !!file);
    };

    explainBtn.onclick = async () => {
      if (!file) return;
      explainBtn.disabled = true;
      status.textContent = "Reading your note...";
      result.classList.remove("active");
      try {
        const base64 = await new Promise((res, rej) => {
          const r = new FileReader();
          r.onload = () => { const s = String(r.result || ""); const i = s.indexOf(","); res(i >= 0 ? s.slice(i + 1) : s); };
          r.onerror = rej;
          r.readAsDataURL(file);
        });
        const response = await fetch("/api/note-study", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ filename: file.name, mimeType: file.type || "application/octet-stream", fileData: base64, subject: window.selectedSubject || "", profile: getProfile() })
        });
        const data = await response.json();
        if (!response.ok) throw new Error(data.error || "Could not read the note.");
        body.innerHTML = esc(data.answer || "Note read successfully.").replace(/\n/g, "<br>");
        result.classList.add("active");
        status.textContent = "Ready — read the lesson below.";
      } catch (err) {
        status.textContent = err.message || "Could not read the note.";
      } finally {
        explainBtn.disabled = !file;
      }
    };
  }

  /* 6) Exam Prep: proper dashboard grid, not squashed */
  function renderCleanExamPrep() {
    const c = document.getElementById("examPrepContent");
    if (!c) return;
    const p = getProfile() || {};
    const exam = p.exam || "Your next exam";
    const subject = window.selectedSubject || p.subjects?.[0] || "your subject";
    c.innerHTML = `
      <div class="tgen-exam-modern">
        <div class="tgen-exam-hero">
          <span class="page-eyebrow">EXAM PREP</span>
          <h2>${esc(exam)}</h2>
          <p>Build a focused revision session for <strong>${esc(subject)}</strong>.</p>
        </div>
        <div class="tgen-exam-actions">
          <button class="tgen-exam-action" onclick="showScreen('study')"><strong>✦ AI Tutor</strong><span>Ask for explanations and worked examples.</span></button>
          <button class="tgen-exam-action" onclick="showScreen('quickRevision')"><strong>↻ Quick Revision</strong><span>Review key ideas, definitions and formulas.</span></button>
          <button class="tgen-exam-action" onclick="showScreen('quiz')"><strong>✓ Quiz</strong><span>Choose 5, 10 or 20 questions and test yourself.</span></button>
          <button class="tgen-exam-action" onclick="showScreen('flashcards')"><strong>▣ Flashcards</strong><span>Use active recall to remember key concepts.</span></button>
        </div>
      </div>`;
  }

  /* 7) Daily Challenge: proper card */
  function renderCleanDaily() {
    const c = document.getElementById("dailyChallengeContent");
    if (!c) return;
    const today = new Date().toISOString().slice(0, 10);
    const done = localStorage.getItem(`tgen-daily:${today}`) === "1";
    const p = getProfile() || {};
    const subject = window.selectedSubject || p.subjects?.[0] || "General Mathematics";
    c.innerHTML = `
      <div class="tgen-daily-modern">
        <span class="page-eyebrow">TODAY'S MISSION</span>
        <h2>${done ? "Challenge complete. Nice work." : "Your daily challenge is ready."}</h2>
        <p>Take a short ${esc(subject)} quiz and keep your streak going.</p>
        <div class="tgen-daily-stats">
          <div class="tgen-daily-stat"><strong>5</strong><span>questions</span></div>
          <div class="tgen-daily-stat"><strong>${done ? "✓" : "—"}</strong><span>${done ? "completed" : "not completed"}</span></div>
        </div>
        <button class="primary-btn" ${done ? "disabled" : ""} onclick="localStorage.setItem('tgen-daily-pending','${today}'); showScreen('quiz');">
          ${done ? "Completed today" : "Start today's challenge →"}
        </button>
      </div>`;
  }

  /* 8) Quiz: pick 5 / 10 / 20 questions */
  let quizSize = Number(localStorage.getItem("tgen-quiz-size") || 10);
  if (![5, 10, 20].includes(quizSize)) quizSize = 10;

  function insertQuizSizeBar() {
    const list = document.getElementById("quizList");
    if (!list) return;
    let bar = document.getElementById("tgenQuizSizeBar");
    if (!bar) {
      bar = document.createElement("div");
      bar.id = "tgenQuizSizeBar";
      bar.style.cssText = "display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;padding:14px 16px;margin-bottom:16px;border:1px solid #e5e7eb;border-radius:14px;background:#fff;";
      list.parentNode.insertBefore(bar, list);
    }
    bar.innerHTML = `<strong style="font-size:13px;">Quiz length</strong>
      <div style="display:flex;gap:8px;">
        ${[5, 10, 20].map(n => `<button type="button" data-size="${n}" style="border:1px solid #d9deea;background:${n === quizSize ? "#2563eb" : "#fff"};color:${n === quizSize ? "#fff" : "#1f2937"};border-radius:10px;padding:8px 14px;font-weight:700;cursor:pointer;">${n}</button>`).join("")}
      </div>`;
    bar.querySelectorAll("[data-size]").forEach(b => {
      b.onclick = () => {
        quizSize = Number(b.dataset.size);
        localStorage.setItem("tgen-quiz-size", String(quizSize));
        insertQuizSizeBar();
      };
    });
  }

  const prevGenerateQuiz = window.generateQuiz;
  window.generateQuiz = function () {
    const result = typeof prevGenerateQuiz === "function" ? prevGenerateQuiz.apply(this, arguments) : undefined;
    setTimeout(() => {
      if (Array.isArray(window.quizQuestions) && window.quizQuestions.length > quizSize) {
        window.quizQuestions = window.quizQuestions.slice(0, quizSize);
        const list = document.getElementById("quizList");
        if (list) {
          list.querySelectorAll(".quiz-item").forEach((item, i) => { if (i >= quizSize) item.remove(); });
          const counter = document.getElementById("questionCounter");
          if (counter) counter.textContent = `0 of ${quizSize} answered`;
        }
      }
      insertQuizSizeBar();
    }, 60);
    return result;
  };

  /* Boot + keep enforcing, since older patches sometimes re-render on their own */
  function boot() { scrubNav(); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
  window.addEventListener("load", boot);
  setInterval(scrubNav, 1000);

  console.log("TGEN-AI: final requested fixes applied.");
})();
/* =========================================================
   TGEN-AI — NAV / SCROLL / WELCOME-SCREEN / FULL-WIDTH FIX
   Paste at the very bottom of app.js.
   ========================================================= */
(function () {
  "use strict";

  const PROFILE_KEY = "tgen-ai-profile";

  function readProfile() {
    try {
      const raw = localStorage.getItem(PROFILE_KEY);
      if (!raw) return null;
      const p = JSON.parse(raw);
      return p && typeof p === "object" ? p : null;
    } catch (e) { return null; }
  }

  function hydrate() {
    const p = readProfile();
    if (p) {
      try { userProfile = p; } catch (e) {}
      window.userProfile = p;
      try {
        selectedClass = p.className || p.class || selectedClass;
        selectedDepartment = p.department || selectedDepartment;
        if (!selectedSubject) selectedSubject = (p.subjects && p.subjects[0]) || null;
      } catch (e) {}
    } else {
      window.userProfile = null;
    }
    return p;
  }

  // Once a profile exists, the welcome/onboarding screen is deleted from the
  // page entirely — nothing can display it again, no matter what calls it.
  function killWelcomeScreen() {
    const w = document.getElementById("tgenWelcome");
    if (w) w.remove();
  }

  const prevShow = window.showScreen;
  window.showScreen = function (screenId) {
    const profile = hydrate();
    if (profile) {
      killWelcomeScreen();
      if (screenId === "tgenWelcome" || screenId === "profile") screenId = "study";
    }
    const result = typeof prevShow === "function" ? prevShow(screenId) : undefined;
    if (screenId === "study") scrollChatToBottom();
    return result;
  };

  // Scroll to the LATEST message / input box, never to the top of history.
  function scrollChatToBottom() {
    setTimeout(() => {
      const chatArea = document.getElementById("chatArea");
      if (chatArea) chatArea.scrollTop = chatArea.scrollHeight;
      window.scrollTo({ top: document.body.scrollHeight, behavior: "auto" });
      const input = document.getElementById("questionInput");
      setTimeout(() => { try { input && input.focus({ preventScroll: true }); } catch (e) {} }, 60);
    }, 30);
  }

  // Make each nav label do exactly what it says, no matter what old inline
  // onclick handlers or wrappers try to do instead.
  const NAV_MAP = { "home": "home", "ai tutor": "study", "notes": "notes", "quiz": "quiz", "progress": "progress" };

  function bindNav() {
    document.querySelectorAll(".main-nav button, .footer-links button, .tgen-more-menu button").forEach(btn => {
      const label = btn.textContent.trim().toLowerCase();
      const target = NAV_MAP[label];
      if (!target || btn.dataset.tgenFinalNav === "1") return;
      btn.dataset.tgenFinalNav = "1";
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        window.showScreen(target);
      }, true);
    });
  }

  function boot() {
    hydrate();
    if (window.userProfile) killWelcomeScreen();
    bindNav();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
  window.addEventListener("load", boot);
  setInterval(boot, 1000); // keeps re-asserting in case another patch re-renders the nav

  // AI Tutor fills the window instead of sitting in a narrow centered column.
  const style = document.createElement("style");
  style.textContent = `
    #study, .study-container {
      width: 100% !important;
      max-width: 100% !important;
      padding-left: 20px !important;
      padding-right: 20px !important;
      box-sizing: border-box !important;
    }
    .chat-wrapper { width: 100% !important; border-radius: 0 !important; }
    #chatArea { max-height: none !important; min-height: calc(100vh - 320px) !important; }
  `;
  document.head.appendChild(style);

  console.log("TGEN-AI: nav/scroll/welcome/full-width fix loaded.");
})();
/* =========================================================
   TGEN-AI — CHATGPT-STYLE FULL-WIDTH TUTOR LAYOUT
   Paste at the very bottom of app.js.
   ========================================================= */
(function () {
  const style = document.createElement("style");
  style.textContent = `
    /* Kill the boxed "card" look — no border, no shadow, no rounded corners */
    #study .study-container {
      width: 100% !important;
      max-width: 100% !important;
      margin: 0 !important;
      padding: 0 !important;
      display: flex !important;
      flex-direction: column !important;
      min-height: calc(100vh - 76px) !important;
    }

    #study .study-header {
      width: 100% !important;
      max-width: 900px !important;
      margin: 0 auto !important;
      padding: 20px 24px 0 !important;
      box-sizing: border-box !important;
    }

    .chat-wrapper {
      flex: 1 !important;
      display: flex !important;
      flex-direction: column !important;
      width: 100% !important;
      max-width: 100% !important;
      border: none !important;
      border-radius: 0 !important;
      box-shadow: none !important;
      background: transparent !important;
    }

    .chat-topbar { display: none !important; }

    #chatArea {
      flex: 1 !important;
      width: 100% !important;
      max-width: 900px !important;
      margin: 0 auto !important;
      max-height: none !important;
      min-height: 0 !important;
      padding: 24px 24px 180px !important;
      box-sizing: border-box !important;
    }

    .empty-chat {
      min-height: 60vh !important;
      justify-content: center !important;
    }

    .chat-message { max-width: 100% !important; }
    .chat-message .message-content,
    .chat-message .message-bubble {
      max-width: 90% !important;
      font-size: 15px !important;
      line-height: 1.65 !important;
    }

    /* Input bar: fixed to bottom, full width, ChatGPT style */
    .chat-input-area {
      position: sticky !important;
      bottom: 0 !important;
      width: 100% !important;
      max-width: 900px !important;
      margin: 0 auto !important;
      background: #fff !important;
      border-top: none !important;
      padding: 14px 24px 22px !important;
      box-sizing: border-box !important;
    }

    #questionInput {
      width: 100% !important;
      border-radius: 26px !important;
      padding: 16px 20px !important;
      font-size: 15px !important;
      box-shadow: 0 1px 2px rgba(0,0,0,.05), 0 6px 20px rgba(0,0,0,.06) !important;
    }

    .study-quick-actions {
      display: none !important; /* ChatGPT doesn't show these under the box */
    }

    @media (max-width: 760px) {
      #study .study-header, #chatArea, .chat-input-area {
        max-width: 100% !important;
        padding-left: 14px !important;
        padding-right: 14px !important;
      }
    }
  `;
  document.head.appendChild(style);

  console.log("TGEN-AI: ChatGPT-style full-width tutor layout applied.");
})();
/* =========================================================
   TGEN-AI — REMOVE TOP AI TUTOR HEADER
   Paste at the very bottom of app.js.
   ========================================================= */
(function () {
  const style = document.createElement("style");
  style.textContent = `
    #study .study-header,
    #tgenUiFlowIntro,
    .tgen-ui-flow-intro,
    #tgenUniversalIntro {
      display: none !important;
    }

    /* Reclaim the space it used to take */
    #study .study-container {
      padding-top: 0 !important;
    }
  `;
  document.head.appendChild(style);

  console.log("TGEN-AI: top AI Tutor header removed.");
})();
