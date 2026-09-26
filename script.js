2const people = [
  { id: 0, name: "内海光司", img: "内海光司.jpg" },
  { id: 1, name: "佐藤アツヒロ", img: "佐藤アツヒロ.jpg" },
  { id: 2, name: "木村拓哉", img: "木村拓哉.jpg" },
  { id: 3, name: "稲垣吾郎", img: "稲垣吾郎.jpg" },
  { id: 4, name: "草彅剛", img: "草彅剛.jpg" },
  { id: 5, name: "香取慎吾", img: "香取慎吾.jpg" },
  { id: 6, name: "長野博", img: "長野博.jpg" },
  { id: 7, name: "坂本昌行", img: "坂本昌行.jpg" },
  { id: 8, name: "井ノ原快彦", img: "井ノ原快彦.jpg" },
  { id: 9, name: "森田剛", img: "森田剛.jpg" },
  { id: 10, name: "三宅健", img: "三宅健.jpg" },
  { id: 11, name: "岡田准一", img: "岡田准一.jpg" },
  { id: 12, name: "松岡昌宏", img: "松岡昌宏.jpg" },
  { id: 13, name: "長瀬智也", img: "長瀬智也.jpg" },
  { id: 14, name: "堂本剛", img: "堂本剛.jpg" },
  { id: 15, name: "堂本光一", img: "堂本光一.jpg" },
  { id: 16, name: "二宮和也", img: "二宮和也.jpg" },
  { id: 17, name: "相葉雅紀", img: "相葉雅紀.jpg" },
  { id: 18, name: "大野智", img: "大野智.jpg" },
  { id: 19, name: "松本潤", img: "松本潤.jpg" },
  { id: 20, name: "櫻井翔", img: "櫻井翔.jpg" },
  { id: 21, name: "滝沢秀明", img: "滝沢秀明.jpg" },
  { id: 22, name: "今井翼", img: "今井翼.jpg" },
  { id: 23, name: "山下智久", img: "山下智久.jpg" },
  { id: 24, name: "錦戸亮", img: "錦戸亮.jpg" },
  { id: 25, name: "内博貴", img: "内博貴.jpg" },
  { id: 26, name: "増田貴久", img: "増田貴久.jpg" },
  { id: 27, name: "加藤シゲアキ", img: "加藤シゲアキ.jpg" },
  { id: 28, name: "小山慶一郎", img: "小山慶一郎.jpg" },
  { id: 29, name: "手越祐也", img: "手越祐也.jpg" },
  { id: 30, name: "安田章大", img: "安田章大.jpg" },
  { id: 31, name: "村上信五", img: "村上信五.jpg" },
  { id: 32, name: "横山裕", img: "横山裕.jpg" },
  { id: 33, name: "丸山隆平", img: "丸山隆平.jpg" },
  { id: 34, name: "大倉忠義", img: "大倉忠義.jpg" },
  { id: 35, name: "渋谷すばる", img: "渋谷すばる.jpg" },
  { id: 36, name: "赤西仁", img: "赤西仁.jpg" },
  { id: 37, name: "亀梨和也", img: "亀梨和也.jpg" },
  { id: 38, name: "上田竜也", img: "上田竜也.jpg" },
  { id: 39, name: "中丸雄一", img: "中丸雄一.jpg" },
  { id: 40, name: "山田涼介", img: "山田涼介.jpg" },
  { id: 41, name: "知念侑李", img: "知念侑李.jpg" },
  { id: 42, name: "有岡大貴", img: "有岡大貴.jpg" },
  { id: 43, name: "髙木雄也", img: "髙木雄也.jpg" },
  { id: 44, name: "伊野尾慧", img: "伊野尾慧.jpg" },
  { id: 45, name: "八乙女光", img: "八乙女光.jpg" },
  { id: 46, name: "薮宏太", img: "薮宏太.jpg" },
  { id: 47, name: "岡本圭人", img: "岡本圭人.jpg" },
  { id: 48, name: "中島裕翔", img: "中島裕翔.jpg" },
  { id: 49, name: "北山宏光", img: "北山宏光.jpg" },
  { id: 50, name: "千賀健永", img: "千賀健永.jpg" },
  { id: 51, name: "宮田俊哉", img: "宮田俊哉.jpg" },
  { id: 52, name: "横尾渉", img: "横尾渉.jpg" },
  { id: 53, name: "藤ヶ谷太輔", img: "藤ヶ谷太輔.jpg" },
  { id: 54, name: "玉森裕太", img: "玉森裕太.jpg" },
  { id: 55, name: "二階堂高嗣", img: "二階堂高嗣.jpg" },
  { id: 56, name: "佐藤勝利", img: "佐藤勝利.jpg" },
  { id: 57, name: "菊池風磨", img: "菊池風磨.jpg" },
  { id: 58, name: "松島聡", img: "松島聡.jpg" },
  { id: 59, name: "寺西拓人", img: "寺西拓人.jpg" },
  { id: 60, name: "原嘉孝", img: "原嘉孝.jpg" },
  { id: 61, name: "橋本将生", img: "橋本将生.jpg" },
  { id: 62, name: "篠塚大輝", img: "篠塚大輝.jpg" },
  { id: 63, name: "マリウス葉", img: "マリウス葉.jpg" },
  { id: 64, name: "中島健人", img: "中島健人.jpg" },
  { id: 65, name: "重岡大毅", img: "重岡大毅.jpg" },
  { id: 66, name: "桐山照史", img: "桐山照史.jpg" },
  { id: 67, name: "中間淳太", img: "中間淳太.jpg" },
  { id: 68, name: "神山智洋", img: "神山智洋.jpg" },
  { id: 69, name: "藤井流星", img: "藤井流星.jpg" },
  { id: 70, name: "濵田崇裕", img: "濵田崇裕.jpg" },
  { id: 71, name: "小瀧望", img: "小瀧望.jpg" },
  { id: 72, name: "岩本照", img: "岩本照.jpg" },
  { id: 73, name: "深澤辰哉", img: "深澤辰哉.jpg" },
  { id: 74, name: "ラウール", img: "ラウール.jpg" },
  { id: 75, name: "渡辺翔太", img: "渡辺翔太.jpg" },
  { id: 76, name: "向井康二", img: "向井康二.jpg" },
  { id: 77, name: "阿部亮平", img: "阿部亮平.jpg" },
  { id: 78, name: "目黒蓮", img: "目黒蓮.jpg" },
  { id: 79, name: "宮舘涼太", img: "宮舘涼太.jpg" },
  { id: 80, name: "佐久間大介", img: "佐久間大介.jpg" },
  { id: 81, name: "ジェシー", img: "ジェシー.jpg" },
  { id: 82, name: "京本大我", img: "京本大我.jpg" },
  { id: 83, name: "松村北斗", img: "松村北斗.jpg" },
  { id: 84, name: "髙地優吾", img: "髙地優吾.jpg" },
  { id: 85, name: "森本慎太郎", img: "森本慎太郎.jpg" },
  { id: 86, name: "田中樹", img: "田中樹.jpg" },
  { id: 87, name: "橋本良亮", img: "橋本良亮.jpg" },
  { id: 88, name: "戸塚祥太", img: "戸塚祥太.jpg" },
  { id: 89, name: "五関晃一", img: "五関晃一.jpg" },
  { id: 90, name: "塚田僚一", img: "塚田僚一.jpg" },
  { id: 91, name: "河合郁人", img: "河合郁人.jpg" },
  { id: 92, name: "福田悠太", img: "福田悠太.jpg" },
  { id: 93, name: "辰巳雄大", img: "辰巳雄大.jpg" },
  { id: 94, name: "越岡裕貴", img: "越岡裕貴.jpg" },
  { id: 95, name: "松崎祐介", img: "松崎祐介.jpg" },
  { id: 96, name: "西畑大吾", img: "西畑大吾.jpg" },
  { id: 97, name: "大西流星", img: "大西流星.jpg" },
  { id: 98, name: "道枝駿佑", img: "道枝駿佑.jpg" },
  { id: 99, name: "高橋恭平", img: "高橋恭平.jpg" },
  { id: 100, name: "長尾謙杜", img: "長尾謙杜.jpg" },
  { id: 101, name: "藤原丈一郎", img: "藤原丈一郎.jpg" },
  { id: 102, name: "大橋和也", img: "大橋和也.jpg" },
  { id: 103, name: "宮近海斗", img: "宮近海斗.jpg" },
  { id: 104, name: "中村海人", img: "中村海人.jpg" },
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
