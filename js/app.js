const courseData = {
  chapters: [
    {
      id: 1,
      title: "Speaking Mathematically",
      titleTH: "ภาษาคณิตศาสตร์",
      icon: "📐",
      color: "#2563eb",
      contentPage: "chapters/chapter1.html",
      sections: [
        { num: "1.1", title: "Variables", desc: "การใช้ตัวแปรในคณิตศาสตร์ ความหมายและการประยุกต์ใช้" },
        { num: "1.2", title: "The Language of Sets", desc: "สัญลักษณ์และภาษาของเซต การแทนสมาชิกและเซตว่าง" },
        { num: "1.3", title: "The Language of Relations and Functions", desc: "ความสัมพันธ์และฟังก์ชันในรูปแบบพื้นฐาน" }
      ],
      summary: "บทนี้แนะนำภาษาพื้นฐานที่ใช้ในคณิตศาสตร์ไม่ต่อเนื่อง ได้แก่ ตัวแปร เซต ความสัมพันธ์ และฟังก์ชัน เพื่อสร้างรากฐานสำหรับบทต่อๆ ไป"
    },
    {
      id: 2,
      title: "The Logic of Compound Statements",
      titleTH: "ตรรกศาสตร์ของประพจน์ผสม",
      icon: "🔀",
      color: "#7c3aed",
      contentPage: "chapters/chapter2.html",
      sections: [
        { num: "2.1", title: "Logical Form and Logical Equivalence", desc: "รูปแบบตรรกะและความสมมูลทางตรรกะ" },
        { num: "2.2", title: "Conditional Statements", desc: "ประพจน์เงื่อนไข if-then และรูปแบบที่เกี่ยวข้อง" },
        { num: "2.3", title: "Valid and Invalid Arguments", desc: "การวิเคราะห์ความถูกต้องของการอ้างเหตุผล" },
        { num: "2.4", title: "Application: Digital Logic Circuits", desc: "การประยุกต์ใช้กับวงจรตรรกะดิจิทัล" },
        { num: "2.5", title: "Application: Number Systems and Circuits for Addition", desc: "ระบบเลขและวงจรบวก" }
      ],
      summary: "ศึกษาตรรกศาสตร์เชิงประพจน์ รวมถึงตารางค่าความจริง กฎของดีมอร์แกน และการนำไปใช้กับวงจรดิจิทัล"
    },
    {
      id: 3,
      title: "The Logic of Quantified Statements",
      titleTH: "ตรรกศาสตร์ของประพจน์มีตัวบ่งปริมาณ",
      icon: "∀",
      color: "#059669",
      contentPage: "chapters/chapter3.html",
      sections: [
        { num: "3.1", title: "Predicates and Quantified Statements I", desc: "เพรดิเคตและประพจน์มีตัวบ่งปริมาณ ส่วนที่ 1" },
        { num: "3.2", title: "Predicates and Quantified Statements II", desc: "เพรดิเคตและประพจน์มีตัวบ่งปริมาณ ส่วนที่ 2" },
        { num: "3.3", title: "Statements with Multiple Quantifiers", desc: "ประพจน์ที่มีตัวบ่งปริมาณหลายตัว" },
        { num: "3.4", title: "Arguments with Quantified Statements", desc: "การอ้างเหตุผลกับประพจน์มีตัวบ่งปริมาณ" }
      ],
      summary: "ขยายตรรกศาสตร์ไปสู่ตัวบ่งปริมาณ ∀ (สำหรับทุกตัว) และ ∃ (มีอยู่) พร้อมการประยุกต์ใช้ในการพิสูจน์"
    },
    {
      id: 4,
      title: "Elementary Number Theory and Methods of Proof",
      titleTH: "ทฤษฎีจำนวนเบื้องต้นและวิธีพิสูจน์",
      icon: "🔢",
      color: "#dc2626",
      sections: [
        { num: "4.1", title: "Direct Proof and Counterexample I: Introduction", desc: "การพิสูจน์ตรงและตัวอย่างนับล้าง: บทนำ" },
        { num: "4.2", title: "Direct Proof and Counterexample II: Rational Numbers", desc: "จำนวนตรรกยะ" },
        { num: "4.3", title: "Direct Proof and Counterexample III: Divisibility", desc: "การหารลงตัว" },
        { num: "4.4", title: "Direct Proof and Counterexample IV: Division into Cases", desc: "การแยกกรณี" },
        { num: "4.5", title: "Direct Proof and Counterexample V: Floor and Ceiling", desc: "ฟังก์ชัน floor และ ceiling" },
        { num: "4.6", title: "Indirect Argument: Contradiction and Contraposition", desc: "การพิสูจน์โดยข้อขัดแย้งและบทกลับเชิงนิเสธ" },
        { num: "4.7", title: "Indirect Argument: Two Classical Theorems", desc: "ทฤษฎีบทคลาสสิกสองข้อ" },
        { num: "4.8", title: "Application: Algorithms", desc: "การประยุกต์ใช้กับอัลกอริทึม" }
      ],
      contentPage: "chapters/chapter4.html",
      summary: "เรียนรู้วิธีการพิสูจน์ต่างๆ ได้แก่ การพิสูจน์ตรง การพิสูจน์โดยขัดแย้ง และการพิสูจน์โดยบทกลับ พร้อมทฤษฎีจำนวนพื้นฐาน"
    },
    {
      id: 5,
      title: "Sequences, Mathematical Induction, and Recursion",
      titleTH: "ลำดับ อุปนัยเชิงคณิตศาสตร์ และการเรียกซ้ำ",
      icon: "🔄",
      color: "#d97706",
      sections: [
        { num: "5.1", title: "Sequences", desc: "ลำดับและสูตรทั่วไป" },
        { num: "5.2", title: "Mathematical Induction I", desc: "อุปนัยเชิงคณิตศาสตร์ ส่วนที่ 1" },
        { num: "5.3", title: "Mathematical Induction II", desc: "อุปนัยเชิงคณิตศาสตร์ ส่วนที่ 2" },
        { num: "5.4", title: "Strong Mathematical Induction", desc: "อุปนัยเชิงคณิตศาสตร์แบบเข้ม" },
        { num: "5.5", title: "Application: Correctness of Algorithms", desc: "การพิสูจน์ความถูกต้องของอัลกอริทึม" },
        { num: "5.6", title: "Defining Sequences Recursively", desc: "การนิยามลำดับแบบเรียกซ้ำ" },
        { num: "5.7", title: "Solving Recurrence Relations by Iteration", desc: "การแก้สมการเวียนเกิดด้วยการวนซ้ำ" },
        { num: "5.8", title: "Second-Order Linear Homogeneous Recurrence Relations", desc: "สมการเวียนเกิดเชิงเส้นอันดับสองเอกพันธุ์" },
        { num: "5.9", title: "General Recursive Definitions and Structural Induction", desc: "นิยามแบบเรียกซ้ำทั่วไปและอุปนัยเชิงโครงสร้าง" }
      ],
      contentPage: "chapters/chapter5.html",
      summary: "ครอบคลุมลำดับ อุปนัยเชิงคณิตศาสตร์ทั้งแบบปกติและแบบเข้ม สมการเวียนเกิด และการนิยามแบบเรียกซ้ำ"
    },
    {
      id: 6,
      title: "Set Theory",
      titleTH: "ทฤษฎีเซต",
      icon: "⊆",
      color: "#0891b2",
      sections: [
        { num: "6.1", title: "Set Theory: Definitions and the Element Method of Proof", desc: "นิยามและวิธีพิสูจน์โดยใช้สมาชิก" },
        { num: "6.2", title: "Properties of Sets", desc: "สมบัติของเซตและกฎพีชคณิตเซต" },
        { num: "6.3", title: "Disproofs, Algebraic Proofs, and Boolean Algebras", desc: "การพิสูจน์เท็จ พีชคณิตพิสูจน์ และพีชคณิตบูลีน" },
        { num: "6.4", title: "Boolean Algebras, Russell's Paradox, and the Halting Problem", desc: "พีชคณิตบูลีน ปฏิทรรศน์รัสเซล และปัญหาการหยุด" }
      ],
      contentPage: "chapters/chapter6.html",
      summary: "ทฤษฎีเซตอย่างเป็นทางการ รวมถึงการดำเนินการบนเซต พีชคณิตเซต พีชคณิตบูลีน และผลลัพธ์ที่น่าสนใจในทฤษฎีเซต"
    },
    {
      id: 7,
      title: "Functions",
      titleTH: "ฟังก์ชัน",
      icon: "f(x)",
      color: "#7c3aed",
      sections: [
        { num: "7.1", title: "Functions Defined on General Sets", desc: "ฟังก์ชันที่นิยามบนเซตทั่วไป" },
        { num: "7.2", title: "One-to-One and Onto, Inverse Functions", desc: "ฟังก์ชันหนึ่งต่อหนึ่ง ทั่วถึง และฟังก์ชันผกผัน" },
        { num: "7.3", title: "Composition of Functions", desc: "การประกอบฟังก์ชัน" },
        { num: "7.4", title: "Cardinality with Applications to Computability", desc: "พีนาคาร์ดินัลลิตีและการนำไปใช้กับ Computability" }
      ],
      contentPage: "chapters/chapter7.html",
      summary: "ศึกษาฟังก์ชันอย่างเป็นทางการ ได้แก่ การฉีด การทั่วถึง ฟังก์ชันทวิภาค การประกอบ และทฤษฎีเกี่ยวกับขนาดของเซต"
    },
    {
      id: 8,
      title: "Relations",
      titleTH: "ความสัมพันธ์",
      icon: "↔",
      color: "#be185d",
      contentPage: "chapters/chapter8.html",
      sections: [
        { num: "8.1", title: "Relations on Sets", desc: "ความสัมพันธ์บนเซตและการแทนด้วยเมทริกซ์" },
        { num: "8.2", title: "Reflexivity, Symmetry, and Transitivity", desc: "สมบัติ reflexive, symmetric, transitive" },
        { num: "8.3", title: "Equivalence Relations", desc: "ความสัมพันธ์สมมูลและคลาสสมมูล" },
        { num: "8.4", title: "Modular Arithmetic with Applications to Cryptography", desc: "เลขคณิตมอดูลาร์และการเข้ารหัส" },
        { num: "8.5", title: "Partial Order Relations", desc: "ความสัมพันธ์อันดับบางส่วน" }
      ],
      summary: "ความสัมพันธ์บนเซต สมบัติต่างๆ ความสัมพันธ์สมมูล เลขคณิตมอดูลาร์ และการนำไปใช้กับการเข้ารหัสข้อมูล"
    },
    {
      id: 9,
      title: "Counting and Probability",
      titleTH: "การนับและความน่าจะเป็น",
      icon: "🎲",
      color: "#ea580c",
      contentPage: "chapters/chapter9.html",
      sections: [
        { num: "9.1", title: "Introduction", desc: "บทนำสู่การนับ" },
        { num: "9.2", title: "Possibility Trees and the Multiplication Rule", desc: "ต้นไม้ความเป็นไปได้และกฎการคูณ" },
        { num: "9.3", title: "Counting Elements of Disjoint Sets: The Addition Rule", desc: "กฎการบวก" },
        { num: "9.4", title: "The Pigeonhole Principle", desc: "หลักรังนกพิราบ" },
        { num: "9.5", title: "Counting Subsets of a Set: Combinations", desc: "การจัดหมู่" },
        { num: "9.6", title: "r-Combinations with Repetition Allowed", desc: "การจัดหมู่แบบซ้ำ" },
        { num: "9.7", title: "Pascal's Formula and the Binomial Theorem", desc: "สูตรปาสคาลและทฤษฎีบททวินาม" },
        { num: "9.8", title: "Probability Axioms and Expected Value", desc: "สัจพจน์ความน่าจะเป็นและค่าคาดหวัง" },
        { num: "9.9", title: "Conditional Probability, Bayes' Formula, and Independent Events", desc: "ความน่าจะเป็นมีเงื่อนไขและสูตรของเบส์" }
      ],
      summary: "หลักการนับขั้นพื้นฐาน การเรียงสับเปลี่ยน การจัดหมู่ หลักรังนกพิราบ และทฤษฎีความน่าจะเป็นเบื้องต้น"
    },
    {
      id: 10,
      title: "Graphs and Trees",
      titleTH: "กราฟและต้นไม้",
      icon: "🌳",
      color: "#16a34a",
      contentPage: "chapters/chapter10.html",
      sections: [
        { num: "10.1", title: "Graphs: Definitions and Basic Properties", desc: "นิยามกราฟและสมบัติพื้นฐาน" },
        { num: "10.2", title: "Trails, Paths, and Circuits", desc: "เส้นทาง วิถี และวงจร" },
        { num: "10.3", title: "Matrix Representations of Graphs", desc: "การแทนกราฟด้วยเมทริกซ์" },
        { num: "10.4", title: "Isomorphisms of Graphs", desc: "ไอโซมอร์ฟิซึมของกราฟ" },
        { num: "10.5", title: "Trees", desc: "ต้นไม้และสมบัติ" },
        { num: "10.6", title: "Rooted Trees", desc: "ต้นไม้มีราก" },
        { num: "10.7", title: "Spanning Trees and Shortest Paths", desc: "ต้นไม้แผ่ทั่วและเส้นทางสั้นที่สุด" }
      ],
      summary: "ทฤษฎีกราฟเบื้องต้น วงจรออยเลอร์และแฮมิลตัน ต้นไม้ ต้นไม้แผ่ทั่ว และอัลกอริทึมหาเส้นทางสั้นที่สุด"
    },
    {
      id: 11,
      title: "Analysis of Algorithm Efficiency",
      titleTH: "การวิเคราะห์ประสิทธิภาพอัลกอริทึม",
      icon: "📊",
      color: "#0369a1",
      contentPage: "chapters/chapter11.html",
      sections: [
        { num: "11.1", title: "Real-Valued Functions of a Real Variable and Their Graphs", desc: "ฟังก์ชันค่าจริงและกราฟ" },
        { num: "11.2", title: "O-, Ω-, and Θ-Notations", desc: "สัญลักษณ์ Big-O, Omega, Theta" },
        { num: "11.3", title: "Application: Analysis of Algorithm Efficiency I", desc: "การวิเคราะห์ประสิทธิภาพ ส่วนที่ 1" },
        { num: "11.4", title: "Exponential and Logarithmic Functions: Graphs and Orders", desc: "ฟังก์ชันเอกซ์โพเนนเชียลและลอการิทึม" },
        { num: "11.5", title: "Application: Analysis of Algorithm Efficiency II", desc: "การวิเคราะห์ประสิทธิภาพ ส่วนที่ 2" }
      ],
      summary: "สัญลักษณ์ Asymptotic (Big-O, Omega, Theta) และการนำไปวิเคราะห์ความซับซ้อนของอัลกอริทึม"
    },
    {
      id: 12,
      title: "Regular Expressions and Finite-State Automata",
      titleTH: "นิพจน์ปกติและออโตมาตาแบบจำกัดสถานะ",
      icon: "🤖",
      color: "#6d28d9",
      contentPage: "chapters/chapter12.html",
      sections: [
        { num: "12.1", title: "Formal Languages and Regular Expressions", desc: "ภาษาทางการและนิพจน์ปกติ" },
        { num: "12.2", title: "Finite-State Automata", desc: "ออโตมาตาแบบจำกัดสถานะ (DFA/NFA)" },
        { num: "12.3", title: "Simplifying Finite-State Automata", desc: "การทำให้ออโตมาตาเรียบง่าย" }
      ],
      summary: "ภาษาทางการ นิพจน์ปกติ และออโตมาตาแบบจำกัดสถานะ ซึ่งเป็นรากฐานของทฤษฎีการคำนวณ"
    }
  ]
};

let currentView = 'home';
let currentChapter = null;

function renderHome() {
  currentView = 'home';
  const main = document.getElementById('main-content');
  main.innerHTML = `
    <section class="hero">
      <div class="hero-content">
        <div class="hero-badge">ภาคการศึกษาที่ 1 ปีการศึกษา 2569</div>
        <h1 class="hero-title">Discrete Mathematics</h1>
        <p class="hero-subtitle">คณิตศาสตร์ไม่ต่อเนื่อง</p>
        <p class="hero-desc">เนื้อหาจากหนังสือ <em>Discrete Mathematics with Applications</em> โดย Susanna S. Epp</p>
        <div class="hero-stats">
          <div class="stat"><span class="stat-num">12</span><span class="stat-label">บท</span></div>
          <div class="stat"><span class="stat-num">64</span><span class="stat-label">หัวข้อย่อย</span></div>
          <div class="stat"><span class="stat-num">1</span><span class="stat-label">ภาคการศึกษา</span></div>
        </div>
      </div>
    </section>

    <section class="instructor-section">
      <div class="container">
        <div class="instructor-card">
          <div class="instructor-avatar">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="38" r="22" fill="#e2e8f0"/>
              <circle cx="50" cy="90" r="35" fill="#e2e8f0"/>
              <circle cx="50" cy="38" r="18" fill="#94a3b8"/>
              <ellipse cx="50" cy="90" rx="30" ry="28" fill="#94a3b8"/>
            </svg>
          </div>
          <div class="instructor-info">
            <div class="instructor-label">ผู้สอน</div>
            <h2 class="instructor-name">รศ.ดร.อนุชิต จิตพัฒนกุล</h2>
            <p class="instructor-dept">ภาควิชาคณิตศาสตร์ คณะวิทยาศาสตร์ประยุกต์</p>
            <p class="instructor-univ">มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ</p>
          </div>
        </div>
      </div>
    </section>

    <section class="chapters-section">
      <div class="container">
        <h2 class="section-title">เนื้อหารายบท</h2>
        <div class="chapters-grid">
          ${courseData.chapters.map(ch => `
            <div class="chapter-card" onclick="${ch.contentPage ? `window.location.href='${ch.contentPage}'` : `renderChapter(${ch.id})`}" style="--ch-color: ${ch.color}">
              <div class="chapter-card-header">
                <span class="chapter-num">บทที่ ${ch.id}</span>
                <span class="chapter-icon">${ch.icon}</span>
              </div>
              <h3 class="chapter-card-title-en">${ch.title}</h3>
              <p class="chapter-card-title-th">${ch.titleTH}</p>
              <p class="chapter-card-sections">${ch.sections.length} หัวข้อย่อย${ch.contentPage ? ' · <span class="badge-ready">มีเนื้อหา</span>' : ''}</p>
              <div class="chapter-card-arrow">→</div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <section class="book-section">
      <div class="container">
        <div class="book-card">
          <div class="book-icon">📚</div>
          <div class="book-info">
            <h3>หนังสือประกอบการสอน</h3>
            <p class="book-title">Discrete Mathematics with Applications</p>
            <p class="book-author">Susanna S. Epp — 4th Edition</p>
          </div>
        </div>
      </div>
    </section>
  `;
  updateNav(null);
}

function renderChapter(id) {
  currentView = 'chapter';
  currentChapter = id;
  const ch = courseData.chapters.find(c => c.id === id);
  const main = document.getElementById('main-content');

  main.innerHTML = `
    <section class="chapter-hero" style="--ch-color: ${ch.color}">
      <div class="container">
        <button class="back-btn" onclick="renderHome()">← กลับหน้าหลัก</button>
        <div class="chapter-hero-content">
          <div class="chapter-hero-num">บทที่ ${ch.id}</div>
          <div class="chapter-hero-icon">${ch.icon}</div>
          <h1 class="chapter-hero-title">${ch.title}</h1>
          <p class="chapter-hero-subtitle">${ch.titleTH}</p>
        </div>
      </div>
    </section>

    <section class="chapter-body">
      <div class="container">
        <div class="chapter-layout">
          <aside class="chapter-sidebar">
            <h4>บทต่างๆ</h4>
            <ul class="sidebar-chapters">
              ${courseData.chapters.map(c => `
                <li class="${c.id === id ? 'active' : ''}" onclick="${c.contentPage ? `window.location.href='${c.contentPage}'` : `renderChapter(${c.id})`}" style="--ch-color: ${c.color}">
                  <span class="sidebar-num">${c.id}</span>
                  <span class="sidebar-title">${c.titleTH}</span>
                </li>
              `).join('')}
            </ul>
          </aside>

          <main class="chapter-main">
            <div class="chapter-summary">
              <h3>ภาพรวมบท</h3>
              <p>${ch.summary}</p>
            </div>

            <h3 class="sections-title">หัวข้อย่อย</h3>
            <div class="sections-list">
              ${ch.sections.map(sec => `
                <div class="section-item" style="--ch-color: ${ch.color}">
                  <div class="section-num">${sec.num}</div>
                  <div class="section-content">
                    <h4>${sec.title}</h4>
                    <p>${sec.desc}</p>
                  </div>
                </div>
              `).join('')}
            </div>

            <div class="chapter-nav">
              ${id > 1 ? `<button class="nav-btn prev-btn" onclick="renderChapter(${id - 1})">← บทที่ ${id - 1}</button>` : '<span></span>'}
              ${id < 12 ? `<button class="nav-btn next-btn" onclick="renderChapter(${id + 1})">บทที่ ${id + 1} →</button>` : '<span></span>'}
            </div>
          </main>
        </div>
      </div>
    </section>
  `;
  updateNav(id);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateNav(activeChapter) {
  document.querySelectorAll('.nav-chapter-item').forEach(el => {
    el.classList.toggle('active', parseInt(el.dataset.ch) === activeChapter);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderHome();

  // Toggle mobile menu
  document.getElementById('menu-toggle').addEventListener('click', () => {
    document.querySelector('.nav-chapters').classList.toggle('open');
  });
});
