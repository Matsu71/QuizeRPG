const learningSets = [
  {
    id: "english",
    name: "中学英語",
    icon: "A",
    description: "文法・語彙・短文読解。序盤は基礎、後半は総合問題へ。",
    scope: "中1〜中3",
    price: 480,
    questions: [
      { tier: 1, category: "be動詞", q: "I ___ a student.", a: ["am", "is", "are", "be"], correct: 0, note: "主語が I のとき、現在形のbe動詞は am です。" },
      { tier: 1, category: "一般動詞", q: "She ___ tennis every Sunday.", a: ["play", "plays", "played", "playing"], correct: 1, note: "三人称単数・現在なので play に s を付けます。" },
      { tier: 1, category: "疑問文", q: "___ you like music?", a: ["Are", "Do", "Does", "Did"], correct: 1, note: "一般動詞 like の現在形を使う疑問文なので Do です。" },
      { tier: 2, category: "過去形", q: "We ___ to Kyoto yesterday.", a: ["go", "goes", "went", "gone"], correct: 2, note: "yesterday があるため過去形 went を使います。" },
      { tier: 2, category: "不定詞", q: "I want ___ a doctor.", a: ["be", "to be", "being", "been"], correct: 1, note: "want to + 動詞の原形で『〜したい』を表します。" },
      { tier: 3, category: "比較", q: "Mt. Fuji is ___ than Mt. Takao.", a: ["high", "higher", "highest", "more high"], correct: 1, note: "than がある比較級なので higher が正解です。" },
      { tier: 3, category: "現在完了", q: "I have ___ this movie twice.", a: ["see", "saw", "seen", "seeing"], correct: 2, note: "have + 過去分詞なので see の過去分詞 seen を使います。" },
      { tier: 4, category: "受動態", q: "This bridge was ___ in 1998.", a: ["build", "built", "building", "builds"], correct: 1, note: "was + 過去分詞で受動態になります。build の過去分詞は built です。" },
      { tier: 4, category: "関係代名詞", q: "This is the book ___ I bought yesterday.", a: ["who", "which", "where", "when"], correct: 1, note: "先行詞が物なので which が適切です。" }
    ]
  },
  {
    id: "history",
    name: "日本史",
    icon: "城",
    description: "古代から近現代まで。人物・出来事・因果関係を段階的に学習。",
    scope: "古代〜近現代",
    price: 480,
    questions: [
      { tier: 1, category: "古代", q: "邪馬台国の女王として『魏志倭人伝』に登場する人物は？", a: ["卑弥呼", "推古天皇", "持統天皇", "紫式部"], correct: 0, note: "『魏志倭人伝』には邪馬台国の女王・卑弥呼が記されています。" },
      { tier: 1, category: "飛鳥時代", q: "冠位十二階を定めたとされる人物は？", a: ["中臣鎌足", "聖徳太子", "藤原道長", "桓武天皇"], correct: 1, note: "冠位十二階は603年に聖徳太子が定めたとされます。" },
      { tier: 1, category: "奈良時代", q: "710年に都が置かれた場所は？", a: ["平安京", "藤原京", "平城京", "長岡京"], correct: 2, note: "710年に平城京へ遷都しました。" },
      { tier: 2, category: "平安時代", q: "平安京への遷都を行った天皇は？", a: ["桓武天皇", "聖武天皇", "後醍醐天皇", "醍醐天皇"], correct: 0, note: "桓武天皇は794年に平安京へ遷都しました。" },
      { tier: 2, category: "鎌倉時代", q: "鎌倉幕府で将軍を補佐した役職は？", a: ["関白", "執権", "管領", "老中"], correct: 1, note: "鎌倉幕府では北条氏が執権として政治を主導しました。" },
      { tier: 3, category: "戦国時代", q: "楽市・楽座を積極的に進めた戦国大名は？", a: ["上杉謙信", "武田信玄", "織田信長", "伊達政宗"], correct: 2, note: "織田信長は城下町などで楽市・楽座を進めました。" },
      { tier: 3, category: "江戸時代", q: "江戸幕府が大名統制のため制度化したものは？", a: ["参勤交代", "班田収授法", "廃藩置県", "地租改正"], correct: 0, note: "参勤交代は大名を江戸と領地に交互に居住させる制度です。" },
      { tier: 4, category: "明治時代", q: "廃藩置県が行われたのは何年？", a: ["1868年", "1871年", "1889年", "1894年"], correct: 1, note: "廃藩置県は1871年に実施されました。" },
      { tier: 4, category: "近代", q: "日露戦争を終結させた条約は？", a: ["下関条約", "ポーツマス条約", "日米修好通商条約", "サンフランシスコ平和条約"], correct: 1, note: "1905年のポーツマス条約で日露戦争は終結しました。" }
    ]
  },
  {
    id: "science",
    name: "中学理科",
    icon: "⚗",
    description: "生物・化学・物理・地学を横断。短時間で解ける知識問題中心。",
    scope: "中1〜中3",
    price: 480,
    questions: [
      { tier: 1, category: "生物", q: "植物の細胞にあり、光合成を行うつくりは？", a: ["核", "葉緑体", "液胞", "細胞膜"], correct: 1, note: "葉緑体には葉緑素があり、光合成を行います。" },
      { tier: 1, category: "化学", q: "水を電気分解すると発生する気体の組み合わせは？", a: ["酸素と窒素", "水素と酸素", "二酸化炭素と水素", "塩素と酸素"], correct: 1, note: "水の電気分解では水素と酸素が発生します。" },
      { tier: 1, category: "地学", q: "地震の最初の小さな揺れを何という？", a: ["主要動", "初期微動", "余震", "本震"], correct: 1, note: "P波による最初の小さな揺れを初期微動といいます。" },
      { tier: 2, category: "物理", q: "電圧の単位は？", a: ["A", "V", "Ω", "W"], correct: 1, note: "電圧の単位はボルト（V）です。" },
      { tier: 2, category: "生物", q: "血液中で酸素を運ぶ役割を持つものは？", a: ["白血球", "血小板", "赤血球", "血しょう"], correct: 2, note: "赤血球中のヘモグロビンが酸素を運びます。" },
      { tier: 3, category: "化学", q: "酸性の水溶液に共通して含まれるイオンは？", a: ["水素イオン", "水酸化物イオン", "塩化物イオン", "ナトリウムイオン"], correct: 0, note: "酸性の水溶液には水素イオン H⁺ が共通して含まれます。" },
      { tier: 3, category: "物理", q: "力が物体を動かしたときの『仕事』は、力×何で求める？", a: ["時間", "速さ", "移動距離", "質量"], correct: 2, note: "仕事[J] = 力[N] × 力の向きに動いた距離[m] です。" },
      { tier: 4, category: "地学", q: "暖気が寒気の上にはい上がってできる前線は？", a: ["寒冷前線", "温暖前線", "停滞前線", "閉塞前線"], correct: 1, note: "温暖前線では暖気が寒気の上をゆるやかにはい上がります。" }
    ]
  },
  {
    id: "math",
    name: "中学数学",
    icon: "Σ",
    description: "暗算・公式・短い計算中心。戦闘テンポを崩さない問題設計。",
    scope: "中1〜中3",
    price: 480,
    questions: [
      { tier: 1, category: "正負の数", q: "(-4) + 7 = ?", a: ["-11", "-3", "3", "11"], correct: 2, note: "-4 から正の方向へ7進むので 3 です。" },
      { tier: 1, category: "文字式", q: "3x + 2x を簡単にすると？", a: ["5x", "6x", "5x²", "6x²"], correct: 0, note: "同類項なので係数を足して 5x です。" },
      { tier: 1, category: "一次方程式", q: "x + 5 = 12 のとき x は？", a: ["5", "6", "7", "17"], correct: 2, note: "両辺から5を引くと x = 7 です。" },
      { tier: 2, category: "比例", q: "y = 3x で x = 4 のとき y は？", a: ["7", "12", "16", "24"], correct: 1, note: "y = 3 × 4 = 12 です。" },
      { tier: 2, category: "連立方程式", q: "x + y = 5、x = 2 のとき y は？", a: ["2", "3", "5", "7"], correct: 1, note: "2 + y = 5 なので y = 3 です。" },
      { tier: 3, category: "平方根", q: "√81 = ?", a: ["8", "9", "18", "81"], correct: 1, note: "9 × 9 = 81 なので √81 = 9 です。" },
      { tier: 3, category: "展開", q: "(x + 2)(x + 3) を展開すると？", a: ["x² + 5x + 6", "x² + 6x + 5", "x² + 5", "x² + 6"], correct: 0, note: "x² + 3x + 2x + 6 = x² + 5x + 6 です。" },
      { tier: 4, category: "二次方程式", q: "x² = 25 の解は？", a: ["5のみ", "-5のみ", "±5", "25"], correct: 2, note: "5² も (-5)² も25なので、x = ±5 です。" }
    ]
  }
];

const chapters = [
  { name: "はじまりの草原", enemies: ["森のスライム", "野道のゴブリン", "草原の番人"] },
  { name: "霧深き森林", enemies: ["迷いキノコ", "森の狩人", "古木の魔獣"] },
  { name: "風鳴りの峡谷", enemies: ["岩トカゲ", "風の亡霊", "峡谷の巨人"] },
  { name: "王都への街道", enemies: ["盗賊見習い", "黒鎧の兵士", "街道の騎士"] },
  { name: "古代図書塔", enemies: ["紙の使い魔", "知識の亡霊", "塔の司書"] },
  { name: "魔王領境界", enemies: ["闇の斥候", "魔獣キマイラ", "境界の将軍"] }
];

const els = Object.fromEntries([
  "setupView","gameView","learningSetGrid","selectedSetLabel","startButton","resetButton","playerLevelLabel","playerHpText","playerHpBar","playerExpText","playerExpBar","chapterLabel","stageDots","activeSetLabel","learningTierLabel","changeSetButton","accuracyLabel","streakLabel","reviewLabel","stageLabel","enemyName","difficultyBadge","enemySprite","enemyHpText","enemyHpBar","damagePop","questionCategory","questionNumber","questionText","answerGrid","feedback","battleTip","nextButton","setDialog","closeDialogButton","dialogSetGrid","resultDialog","resultTitle","resultText","rewardExp","rewardCorrect","rewardTier","continueButton","battleScene"
].map(id => [id, document.getElementById(id)]));

const defaultState = () => ({
  selectedSetId: null,
  freeSetId: null,
  unlockedSetIds: [],
  player: { level: 1, hp: 100, maxHp: 100, exp: 0 },
  chapter: 0,
  stage: 0,
  questionIndex: 0,
  battleCorrect: 0,
  battleAnswered: 0,
  totalCorrect: 0,
  totalAnswered: 0,
  streak: 0,
  reviewQueue: [],
  setProgress: Object.fromEntries(learningSets.map(set => [set.id, { tier: 1, answered: 0, correct: 0 }]))
});

let state = loadState();
let selectedSetupSetId = state.freeSetId || null;
let currentQuestion = null;
let enemy = null;
let answerLocked = false;
let stageQuestionCounter = 0;

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem("quizRpgDemoState"));
    if (!saved) return defaultState();
    const base = defaultState();
    return {
      ...base,
      ...saved,
      player: { ...base.player, ...(saved.player || {}) },
      setProgress: { ...base.setProgress, ...(saved.setProgress || {}) }
    };
  } catch {
    return defaultState();
  }
}

function saveState() {
  localStorage.setItem("quizRpgDemoState", JSON.stringify(state));
}

function getSet(id = state.selectedSetId) {
  return learningSets.find(set => set.id === id) || learningSets[0];
}

function isSetUnlocked(id) {
  return state.freeSetId === id || state.unlockedSetIds.includes(id);
}

function renderSetCards(target, mode = "setup") {
  target.innerHTML = "";
  learningSets.forEach(set => {
    const unlocked = isSetUnlocked(set.id);
    const isFreeChoice = !state.freeSetId;
    const selectable = mode === "setup" ? isFreeChoice || unlocked : true;
    const progress = state.setProgress[set.id] || { tier: 1 };
    const card = document.createElement("button");
    card.type = "button";
    card.className = `set-card ${selectedSetupSetId === set.id && mode === "setup" ? "selected" : ""} ${!unlocked && !isFreeChoice ? "locked" : ""}`;
    card.innerHTML = `
      <span class="set-icon">${set.icon}</span>
      <h3>${set.name}</h3>
      <p>${set.description}</p>
      <span class="set-meta">
        <span>${set.scope}</span>
        <span class="set-tag ${unlocked || isFreeChoice ? "" : "paid"}">${unlocked ? `Tier ${progress.tier}` : isFreeChoice ? "無料で選択" : mode === "dialog" ? `デモ購入 ¥${set.price}` : `製品版 ¥${set.price}`}</span>
      </span>`;

    card.addEventListener("click", () => {
      if (mode === "setup") {
        if (!selectable) return;
        selectedSetupSetId = set.id;
        els.selectedSetLabel.textContent = set.name;
        els.startButton.disabled = false;
        renderSetCards(els.learningSetGrid, "setup");
      } else if (unlocked) {
        state.selectedSetId = set.id;
        saveState();
        els.setDialog.close();
        updateHud();
        startBattle(true);
      } else {
        const ok = confirm(`${set.name} は製品版では ¥${set.price} の追加学習セット想定です。\nデモ用に購入をシミュレートしてアンロックしますか？\n（実際の決済は発生しません）`);
        if (!ok) return;
        state.unlockedSetIds.push(set.id);
        state.selectedSetId = set.id;
        saveState();
        els.setDialog.close();
        updateHud();
        startBattle(true);
      }
    });
    target.appendChild(card);
  });
}

function startGame() {
  if (!selectedSetupSetId) return;
  if (!state.freeSetId) {
    state.freeSetId = selectedSetupSetId;
    state.unlockedSetIds = [selectedSetupSetId];
  }
  state.selectedSetId = selectedSetupSetId;
  saveState();
  els.setupView.classList.add("hidden");
  els.gameView.classList.remove("hidden");
  updateHud();
  startBattle(true);
}

function getEnemyData() {
  const chapter = chapters[state.chapter % chapters.length];
  const name = chapter.enemies[state.stage % chapter.enemies.length];
  const maxHp = 60 + state.chapter * 16 + state.stage * 8;
  const classes = ["enemy-slime", "enemy-goblin", "enemy-wraith"];
  return { name, maxHp, hp: maxHp, spriteClass: classes[(state.chapter + state.stage) % classes.length] };
}

function startBattle(resetCounter = false) {
  enemy = getEnemyData();
  if (resetCounter) {
    stageQuestionCounter = 0;
    state.battleCorrect = 0;
    state.battleAnswered = 0;
  }
  els.enemyName.textContent = enemy.name;
  els.enemySprite.className = `pixel-enemy ${enemy.spriteClass}`;
  els.feedback.classList.add("hidden");
  els.nextButton.classList.add("hidden");
  updateEnemyHud();
  updateHud();
  nextQuestion();
}

function effectiveTier() {
  const progress = state.setProgress[state.selectedSetId] || { tier: 1 };
  return Math.max(1, Math.min(4, progress.tier));
}

function chooseQuestion() {
  const set = getSet();
  const tier = effectiveTier();
  const reviewIndex = state.reviewQueue.findIndex(item => item.setId === set.id && item.readyAt <= state.totalAnswered);
  if (reviewIndex >= 0 && Math.random() < 0.5) {
    const [review] = state.reviewQueue.splice(reviewIndex, 1);
    const found = set.questions.find((q, idx) => `${set.id}-${idx}` === review.questionId);
    if (found) return { ...found, isReview: true };
  }

  const eligible = set.questions.filter(q => q.tier <= tier && q.tier >= Math.max(1, tier - 1));
  const pool = eligible.length ? eligible : set.questions.filter(q => q.tier <= tier);
  const index = Math.floor(Math.random() * pool.length);
  return { ...pool[index], isReview: false };
}

function nextQuestion() {
  answerLocked = false;
  currentQuestion = chooseQuestion();
  stageQuestionCounter += 1;
  els.questionCategory.textContent = `${currentQuestion.isReview ? "復習・" : ""}${currentQuestion.category}`;
  els.questionNumber.textContent = `Q${stageQuestionCounter}`;
  els.questionText.textContent = currentQuestion.q;
  els.feedback.className = "feedback hidden";
  els.feedback.textContent = "";
  els.nextButton.classList.add("hidden");
  renderAnswers();
}

function renderAnswers() {
  els.answerGrid.innerHTML = "";
  currentQuestion.a.forEach((answer, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-button";
    button.innerHTML = `<span class="answer-key">${String.fromCharCode(65 + index)}</span><span>${answer}</span>`;
    button.addEventListener("click", () => answerQuestion(index));
    els.answerGrid.appendChild(button);
  });
}

function answerQuestion(index) {
  if (answerLocked) return;
  answerLocked = true;
  const buttons = [...els.answerGrid.querySelectorAll(".answer-button")];
  buttons.forEach(btn => btn.disabled = true);
  buttons[currentQuestion.correct].classList.add("correct");
  const isCorrect = index === currentQuestion.correct;
  if (!isCorrect) buttons[index].classList.add("wrong");

  state.totalAnswered += 1;
  state.battleAnswered += 1;
  const progress = state.setProgress[state.selectedSetId];
  progress.answered += 1;

  if (isCorrect) {
    state.totalCorrect += 1;
    state.battleCorrect += 1;
    state.streak += 1;
    progress.correct += 1;
    const comboBonus = Math.min(12, Math.floor(state.streak / 3) * 3);
    const damage = 22 + state.player.level * 2 + comboBonus;
    enemy.hp = Math.max(0, enemy.hp - damage);
    showDamage(`-${damage}`, false);
    els.feedback.className = "feedback";
    els.feedback.innerHTML = `<strong>正解！</strong> ${currentQuestion.note}`;
    els.battleTip.textContent = state.streak >= 3 ? `${state.streak}連続正解！ コンボで攻撃力が上昇中。` : "正解。敵にダメージを与えました。";
  } else {
    state.streak = 0;
    const damage = 12 + state.chapter * 2;
    state.player.hp = Math.max(0, state.player.hp - damage);
    queueReview(currentQuestion);
    showDamage(`-${damage} HP`, true);
    els.feedback.className = "feedback bad";
    els.feedback.innerHTML = `<strong>不正解。</strong> 正解は「${currentQuestion.a[currentQuestion.correct]}」。${currentQuestion.note}`;
    els.battleTip.textContent = "間違えた問題は数問後に復習として再出題されます。";
  }

  updateProgressTier(progress);
  saveState();
  updateEnemyHud();
  updateHud();

  if (state.player.hp <= 0) {
    state.player.hp = state.player.maxHp;
    saveState();
    setTimeout(() => {
      els.feedback.className = "feedback bad";
      els.feedback.textContent = "HPが0になりました。チェックポイントから再挑戦します。HPは全回復しました。";
      updateHud();
      els.nextButton.textContent = "再挑戦";
      els.nextButton.classList.remove("hidden");
      els.nextButton.onclick = () => startBattle(true);
    }, 320);
    return;
  }

  if (enemy.hp <= 0) {
    setTimeout(clearStage, 450);
  } else {
    els.nextButton.textContent = "次の問題";
    els.nextButton.classList.remove("hidden");
    els.nextButton.onclick = nextQuestion;
  }
}

function queueReview(question) {
  const set = getSet();
  const index = set.questions.findIndex(q => q.q === question.q);
  if (index < 0) return;
  const questionId = `${set.id}-${index}`;
  const existing = state.reviewQueue.find(item => item.questionId === questionId);
  if (existing) {
    existing.readyAt = state.totalAnswered + 2;
  } else {
    state.reviewQueue.push({ setId: set.id, questionId, readyAt: state.totalAnswered + 2 });
  }
}

function updateProgressTier(progress) {
  const accuracy = progress.answered ? progress.correct / progress.answered : 0;
  const thresholds = [0, 4, 10, 18];
  let tier = 1;
  thresholds.forEach((threshold, i) => {
    if (progress.answered >= threshold && (i === 0 || accuracy >= 0.65)) tier = i + 1;
  });
  progress.tier = Math.min(4, tier);
}

function clearStage() {
  const gainedExp = 45 + state.chapter * 8 + state.battleCorrect * 4;
  state.player.exp += gainedExp;
  while (state.player.exp >= 100) {
    state.player.exp -= 100;
    state.player.level += 1;
    state.player.maxHp += 8;
    state.player.hp = state.player.maxHp;
  }

  const progress = state.setProgress[state.selectedSetId];
  els.resultTitle.textContent = `${enemy.name} を倒した！`;
  els.resultText.textContent = `問題 ${state.battleAnswered} 問中 ${state.battleCorrect} 問正解。RPGの進行と学習セットの習熟度は別々に成長します。`;
  els.rewardExp.textContent = `+${gainedExp}`;
  els.rewardCorrect.textContent = `${state.battleCorrect}/${state.battleAnswered}`;
  els.rewardTier.textContent = `Tier ${progress.tier}`;
  saveState();
  updateHud();
  els.resultDialog.showModal();
}

function advanceStage() {
  state.stage += 1;
  if (state.stage >= 3) {
    state.stage = 0;
    state.chapter = (state.chapter + 1) % chapters.length;
  }
  state.player.hp = Math.min(state.player.maxHp, state.player.hp + 22);
  state.questionIndex = 0;
  saveState();
  updateHud();
  startBattle(true);
}

function updateHud() {
  const set = getSet();
  const progress = state.setProgress[set.id] || { tier: 1 };
  const chapter = chapters[state.chapter % chapters.length];
  els.playerLevelLabel.textContent = `Lv. ${state.player.level}`;
  els.playerHpText.textContent = `${state.player.hp} / ${state.player.maxHp}`;
  els.playerHpBar.style.width = `${(state.player.hp / state.player.maxHp) * 100}%`;
  els.playerExpText.textContent = `${state.player.exp} / 100`;
  els.playerExpBar.style.width = `${state.player.exp}%`;
  els.chapterLabel.textContent = `第${state.chapter + 1}章 ${chapter.name}`;
  els.activeSetLabel.textContent = set.name;
  els.learningTierLabel.textContent = `Learning Tier ${progress.tier}`;
  els.accuracyLabel.textContent = state.totalAnswered ? `${Math.round((state.totalCorrect / state.totalAnswered) * 100)}%` : "-";
  els.streakLabel.textContent = state.streak;
  els.reviewLabel.textContent = state.reviewQueue.filter(item => item.setId === set.id).length;
  els.stageLabel.textContent = `STAGE ${state.chapter + 1}-${state.stage + 1}`;
  els.difficultyBadge.textContent = ["基礎", "基礎＋", "標準", "応用"][Math.min(progress.tier - 1, 3)];
  renderStageDots();
}

function renderStageDots() {
  els.stageDots.innerHTML = "";
  for (let i = 0; i < 3; i += 1) {
    const dot = document.createElement("span");
    dot.className = `stage-dot ${i < state.stage ? "done" : ""} ${i === state.stage ? "current" : ""}`;
    els.stageDots.appendChild(dot);
  }
}

function updateEnemyHud() {
  els.enemyHpText.textContent = `${enemy.hp} / ${enemy.maxHp}`;
  els.enemyHpBar.style.width = `${(enemy.hp / enemy.maxHp) * 100}%`;
}

function showDamage(text, playerHit) {
  els.damagePop.textContent = text;
  els.damagePop.style.left = playerHit ? "18%" : "auto";
  els.damagePop.style.right = playerHit ? "auto" : "22%";
  els.damagePop.classList.remove("hidden");
  els.damagePop.style.animation = "none";
  void els.damagePop.offsetWidth;
  els.damagePop.style.animation = "popDamage .7s ease both";
  const target = playerHit ? els.battleScene.querySelector(".hero-in-scene") : els.enemySprite;
  target.classList.add("hit-shake");
  setTimeout(() => target.classList.remove("hit-shake"), 280);
  setTimeout(() => els.damagePop.classList.add("hidden"), 700);
}

els.startButton.addEventListener("click", startGame);
els.changeSetButton.addEventListener("click", () => {
  renderSetCards(els.dialogSetGrid, "dialog");
  els.setDialog.showModal();
});
els.closeDialogButton.addEventListener("click", () => els.setDialog.close());
els.continueButton.addEventListener("click", () => {
  els.resultDialog.close();
  advanceStage();
});
els.resetButton.addEventListener("click", () => {
  if (!confirm("デモの進行データと無料セットの選択を初期化しますか？")) return;
  localStorage.removeItem("quizRpgDemoState");
  location.reload();
});

if (state.freeSetId) {
  selectedSetupSetId = state.selectedSetId || state.freeSetId;
  els.selectedSetLabel.textContent = getSet(selectedSetupSetId).name;
  els.startButton.disabled = false;
  els.startButton.textContent = "冒険を再開";
}
renderSetCards(els.learningSetGrid, "setup");
