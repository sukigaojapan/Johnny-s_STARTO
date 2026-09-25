const people = [
  { id: 0, name: "内海光司", img: "内海光司.jpg" },
  { id: 1, name: "佐藤アツヒロ", img: "佐藤アツヒロ.jpg" },
  { id: 2, name: "木村拓哉", img: "木村拓哉.jpg" },
  { id: 3, name: "稲垣吾郎", img: "稲垣吾郎.jpg" },
  { id: 4, name: "草彅剛", img: "草彅剛.jpg" },
  { id: 5, name: "香取慎吾", img: "香取慎吾.jpeg" },
  { id: 6, name: "杉野遥亮", img: "杉野遥亮.jpg" },
  { id: 7, name: "松坂桃李", img: "松坂桃李.jpg" },
  { id: 8, name: "横浜流星", img: "横浜流星.jpg" },
  { id: 9, name: "瀬戸康史", img: "瀬戸康史.jpg" },
  { id: 10, name: "犬飼貴丈", img: "犬飼貴丈.jpg" },
  { id: 11, name: "町田啓太", img: "町田啓太.webp" },
  { id: 12, name: "磯村勇斗", img: "磯村勇斗.jpg" },
  { id: 13, name: "神木隆之介", img: "神木隆之介.jpg" },
  { id: 14, name: "竜星涼", img: "竜星涼.jpg" },
  { id: 15, name: "竹内涼真", img: "竹内涼真.jpg" },
  { id: 16, name: "菅田将暉", img: "菅田将暉.jpg" },
  { id: 17, name: "赤楚衛二", img: "赤楚衛二.jpg" },
  { id: 18, name: "鈴木伸之", img: "鈴木伸之.jpg" },
  { id: 19, name: "間宮祥太朗", img: "間宮祥太朗.jpg" },
  { id: 20, name: "高杉真宙", img: "高杉真宙.jpg" },
  { id: 21, name: "柳楽優弥", img: "柳楽優弥.jpg" },
  { id: 22, name: "浅香航大", img: "浅香航大.jpg" },
  { id: 23, name: "白洲迅", img: "白洲迅.jpg" },
  { id: 24, name: "林遣都", img: "林遣都.jpg" },
  { id: 25, name: "野村周平", img: "野村周平.jpg" },
  { id: 26, name: "塩野瑛久", img: "塩野瑛久.jpg" },
  { id: 27, name: "工藤阿須加", img: "工藤阿須加.jpg" },
  { id: 28, name: "小関裕太", img: "小関裕太.jpg" },
  { id: 29, name: "福士蒼汰", img: "福士蒼汰.jpg" },
];

const app = document.querySelector("#app");

let groups = [];
let survivors = [];
let finalists = [];
let picked = [];


/* =========================
   共通
   ========================= */

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}


/* =========================
   卡片
   ========================= */

function card(person) {
  return `
    <button
      class="card"
      id="p${person.id}"
      onclick="pick(${person.id})"
    >
      <span class="check">✓</span>
      <img src="${person.img}">
      <div class="name">${person.name}</div>
    </button>
  `;
}


/* =========================
   HOME
   ========================= */

function home() {

  app.innerHTML = `
    <section class="screen start">

      <h1>傑尼斯、星達拓喜歡的顏9選</h1>

      <div class="sub">
        只有出道的，包含部分退社人士
      </div>

      <button class="btn" onclick="start()">
        START
      </button>

      <p class="note">
      </p>

    </section>
  `;
}


/* =========================
   START
   ========================= */

function start() {

  groups = [];
  survivors = [];
  finalists = [];
  picked = [];

  const pool = shuffle(people);

  for (let i = 0; i < pool.length; i += 6) {
    groups.push(pool.slice(i, i + 6));
  }

  pre(0);
}
// ====================
// ROUND 1｜予選
// ====================
function pre(index) {
  if (index >= groups.length) {
    secondRound(0);
    return;
  }
  const group = groups[index];
  let selected = [];
  app.innerHTML = `
    <section class="screen">
      <h2 class="title">
        ROUND 1｜予選
      </h2>
      <p class="sub" style="text-align:center">
       請從6人中選擇喜歡的顏。<br>
        一組最多選4人，不選也可以。
      </p>
      <div class="grid">
        ${group.map(card).join("")}
      </div>
      <div style="text-align:center">
        <button class="btn" id="ok" disabled>
          決定
        </button>
      </div>
    </section>
  `;
  window.pick = function(id) {
    const el = document.querySelector("#p" + id);
    if (!el) return;
    // 已經選了 → 取消
    if (selected.includes(id)) {
      selected = selected.filter(x => x !== id);
      el.classList.remove("selected");
      const mark = el.querySelector(".check");
      if (mark) mark.textContent = "✓";
    }
    // 尚未選擇，而且未達4人 → 選取
    else if (selected.length < 4) {
      selected.push(id);
      el.classList.add("selected");
      const mark = el.querySelector(".check");
      if (mark) mark.textContent = selected.length;
    }
    // 已經4人 → 不允許再選
    else {
      return;
    }
    // 0～4人都可以按決定
    const button = document.querySelector("#ok");
    button.disabled = false;
    button.onclick = function() {
      // 把選中的人加入 survivors
      selected.forEach(id => {
        const person = group.find(p => p.id === id);
        if (person) {
          survivors.push(person);
        }
      });
      // 下一組
      pre(index + 1);
    };
  };
  // 一開始就允許「0人」
  const button = document.querySelector("#ok");
  button.disabled = false;
  button.onclick = function() {
    selected.forEach(id => {
      const person = group.find(p => p.id === id);
      if (person) {
        survivors.push(person);
      }
    });
    pre(index + 1);
  };
}

/* =========================
   ROUND 2｜本選
   ========================= */

function secondRound(index) {
  // 所有組別都完成
  if (index >= survivors.length) {
    // 沒有人進入下一輪
    if (finalists.length === 0) {
      result(finalists);
      return;
    }
    // 進入 ROUND 3
    startFinalRound(finalists);
    return;
  }
  // 每組4人
  const group = survivors.slice(index, index + 4);
  let selected = [];
  app.innerHTML = `
    <section class="screen">
      <h2 class="title">
        ROUND 2｜本選
      </h2>
      <p class="sub" style="text-align:center">
        請從4人中選擇喜歡的顏。<br>
        一組最多選2人，不選也可以。
      </p>
      <div class="grid">
        ${group.map(card).join("")}
      </div>
      <div style="text-align:center">
        <button class="btn" id="ok">
          決定
        </button>
      </div>
    </section>
  `;
  window.pick = function(id) {
    const el = document.querySelector("#p" + id);
    if (!el) return;
    // 已經選了 → 取消
    if (selected.includes(id)) {
      selected = selected.filter(x => x !== id);
      el.classList.remove("selected");
      const mark = el.querySelector(".check");
      if (mark) {
        mark.textContent = "✓";
      }
    }
    // 還沒選，而且未滿2人 → 選取
    else if (selected.length < 2) {
      selected.push(id);
      el.classList.add("selected");
      const mark = el.querySelector(".check");
      if (mark) {
        mark.textContent = selected.length;
      }
    }
    // 已經選2人，不再增加
    else {
      return;
    }
  };
  // 決定
  document.querySelector("#ok").onclick = function() {
    selected.forEach(id => {
      const person = group.find(p => p.id === id);
      if (person) {
        finalists.push(person);
      }
    });
    // 下一組
    secondRound(index + group.length);
  };
}
         // ====================
// ROUND 3｜最終選考
// ====================
function startFinalRound(pool) {
  // 沒有人
  if (pool.length === 0) {
    result([]);
    return;
  }
  // 9人以下直接進TOP
  if (pool.length <= 9) {
    result(pool);
    return;
  }
  // 複製一份，避免直接改到原本資料
  let candidates = [...pool];
  // 最終TOP 9
  let top9 = [];
  // 開始第一輪二選一
  finalBattle(candidates, top9);
}
// ====================
// 二選一
// ====================
function finalBattle(candidates, top9) {
  // 已經選滿9人
  if (top9.length >= 9) {
    result(top9);
    return;
  }
  // 沒有人可以選
  if (candidates.length === 0) {
    result(top9);
    return;
  }
  // 只剩一個人
  if (candidates.length === 1) {
    top9.push(candidates[0]);
    result(top9);
    return;
  }
  // 取前兩人進行比較
  const person1 = candidates[0];
  const person2 = candidates[1];
  app.innerHTML = `
    <section class="screen">
      <h2 class="title">
        ROUND 3｜最終選考
      </h2>
      <p class="sub" style="text-align:center">
        你最喜歡誰的顏？
      </p>
      <div class="grid">
        ${card(person1)}
        ${card(person2)}
      </div>
    </section>
  `;
  window.pick = function(id) {
    let winner;
    if (id === person1.id) {
      winner = person1;
    } 
    else if (id === person2.id) {
      winner = person2;
    } 
    else {
      return;
    }
    // 勝者加入TOP 9
    top9.push(winner);
    // 剩下的人
    const remaining = candidates.slice(2);
    // 如果已經9人
    if (top9.length >= 9) {
      result(top9);
      return;
    }
    // 繼續下一組二選一
    finalBattle(remaining, top9);
  };
}

/* =========================
   結果
   ========================= */

function result(list) {

  const top9 = list.slice(0, 9);

  app.innerHTML = `
    <section class="screen">

      <h2 class="title">
        傑尼斯、星達拓喜歡的顏9選
      </h2>

      <p class="sub" style="text-align:center">
        YOUR TOP 9
      </p>

      <div class="result">

        ${top9.map((person, index) => `
          <div>
            <img src="${person.img}">
            <div>
              ${index + 1}｜${person.name}
            </div>
          </div>
        `).join("")}

      </div>

      <div style="text-align:center">

        <button
          class="btn"
          onclick="home()"
        >
          再玩一次
        </button>

      </div>

    </section>
  `;
}


/* =========================
   啟動
   ========================= */

home();
