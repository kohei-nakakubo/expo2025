document.addEventListener('DOMContentLoaded', () => {

    // ===== データ定義 =====
    // 質問と選択肢 (10問)
    const quizData = [
        { q: "休日に一番したいことは？", c: [{ t: "最新のガジェットを試しに行く", v: "tech" }, { t: "映画やアニメを一気見する", v: "entame" }, { t: "自然の中でキャンプやハイキング", v: "nature" }, { t: "話題のレストランで食事", v: "life" }] },
        { q: "観るなら、どんなジャンルの映画？", c: [{ t: "最先端のVFXを駆使したSF大作", v: "tech" }, { t: "壮大な世界観のファンタジーやアニメ", v: "entame" }, { t: "社会問題を鋭く描くドキュメンタリー", v: "future" }, { t: "実話に基づく人間ドラマ", v: "life" }] },
        { q: "よくチェックするニュースの分野は？", c: [{ t: "IT・テクノロジー関連", v: "tech" }, { t: "経済・ビジネストレンド", v: "future" }, { t: "エンタメ・カルチャー情報", v: "entame" }, { t: "環境問題やSDGs", v: "nature" }] },
        { q: "子供の頃、夢中になったものは？", c: [{ t: "ロボットアニメやプラモデル", v: "entame" }, { t: "昆虫採集や天体観測", v: "nature" }, { t: "テレビゲーム全般", v: "entame" }, { t: "社会の仕組みを知ること", v: "future" }] },
        { q: "人と深く話したいテーマは？", c: [{ t: "AIは人類をどう変えるか", v: "tech" }, { t: "10年後の働き方とキャリア", v: "future" }, { t: "心に残る物語や音楽について", v: "entame" }, { t: "持続可能なライフスタイル", v: "nature" }] },
        { q: "臨時収入があったら、まず何に使う？", c: [{ t: "最新スペックのPCやスマホ", v: "tech" }, { t: "少し贅沢な旅行や体験", v: "life" }, { t: "自己投資のための学習やセミナー", v: "future" }, { t: "こだわりの食材や調理器具", v: "life" }] },
        { q: "訪れるなら、どんな博物館？", c: [{ t: "国立科学博物館", v: "tech" }, { t: "森美術館や国立新美術館", v: "entame" }, { t: "食と暮らしのミュージアム", v: "life" }, { t: "国立歴史民俗博物館", v: "future" }] },
        { q: "あなたが解決したい社会課題は？", c: [{ t: "エネルギー問題", v: "nature" }, { t: "食糧問題", v: "life" }, { t: "世代間のコミュニケーション断絶", v: "future" }, { t: "新しいエンターテインメントの創造", v: "entame" }] },
        { q: "長期休暇の理想的な過ごし方は？", c: [{ t: "人里離れた大自然でリフレッシュ", v: "nature" }, { t: "新しいビジネスのアイデアを練る", v: "future" }, { t: "見たかったシリーズ作品を制覇", v: "entame" }, { t: "最新のテクノロジーに触れる旅", v: "tech" }] },
        { q: "「イノベーション」と聞いて、よりワクワクするのは？", c: [{ t: "人々の暮らしを根底から変える新技術", v: "tech" }, { t: "全く新しいビジネスモデルの誕生", v: "future" }, { t: "常識を覆すアートやエンタメ表現", v: "entame" }, { t: "地球環境を守るための画期的なアイデア", v: "nature" }] }
    ];

    // ▼▼▼【重要】公式サイトの情報を基にパビリオンデータベースを刷新 ▼▼▼
    const pavilions = {
        // --- 国内パビリオン ---
        'gundam': { name: "GUNDAM NEXT FUTURE PAVILION", categories: ['tech', 'entame', 'future'], link: "https://www.expo2025.or.jp/domestic-pv/bandainamco/" },
        'ntt': { name: "NTT Pavilion (仮称)", categories: ['tech', 'future'], link: "https://www.expo2025.or.jp/domestic-pv/ntt/" },
        'panasonic': { name: "パナソニックパビリオン「ノモの国」", categories: ['tech', 'nature', 'life'], link: "https://www.expo2025.or.jp/domestic-pv/panasonic/" },
        'mitsubishi': { name: "三菱 未来館", categories: ['future', 'tech', 'nature'], link: "https://www.expo2025.or.jp/domestic-pv/mitsubishi/" },
        'sumitomo': { name: "住友館", categories: ['nature', 'life', 'future'], link: "https://www.expo2025.or.jp/domestic-pv/sumitomo/" },
        'gas': { name: "大阪ガスグループパビリオン「笑顔の未来」", categories: ['life', 'nature', 'future'], link: "https://www.expo2025.or.jp/domestic-pv/osakagas/" },
        'yoshimoto': { name: "よしもと waraii myraii館", categories: ['entame', 'life'], link: "https://www.expo2025.or.jp/domestic-pv/yoshimoto/" },
        
        // --- 海外パビリオン (代表例) ---
        'usa': { name: "アメリカ合衆国 パビリオン", categories: ['tech', 'future', 'life'], link: "https://www.expo2025.or.jp/official-participant/usa/" },
        'switzerland': { name: "スイス パビリオン", categories: ['nature', 'tech', 'life'], link: "https://www.expo2025.or.jp/official-participant/switzerland/" },
        'saudi_arabia': { name: "サウジアラビア パビリオン", categories: ['future', 'life', 'entame'], link: "https://www.expo2025.or.jp/official-participant/saudiarabia/" },
        'korea': { name: "大韓民国 パビリオン", categories: ['entame', 'tech', 'life'], link: "https://www.expo2025.or.jp/official-participant/korea/" },
        'germany': { name: "ドイツ パビリオン", categories: ['nature', 'tech', 'future'], link: "https://www.expo2025.or.jp/official-participant/germany/" },
        'netherlands': { name: "オランダ パビリオン", categories: ['nature', 'life', 'future'], link: "https://www.expo2025.or.jp/official-participant/netherlands/" },
        
        // --- シグネチャーパビリオン ---
        'ishiguro': { name: "シグネチャーパビリオン「いのちの未来」", categories: ['tech', 'future'], link: "https://www.expo2025.or.jp/overview/project/#signature" }
    };
    const scoreCategories = ['tech', 'entame', 'future', 'nature', 'life'];
    
    let currentQuestionIndex, userScores, expoChart;

    function initialize() {
        document.getElementById('start-btn').addEventListener('click', startQuiz);
        document.getElementById('retry-btn').addEventListener('click', startQuiz);
    }

    function startQuiz() {
        currentQuestionIndex = 0;
        userScores = { tech: 0, entame: 0, future: 0, nature: 0, life: 0 };
        document.getElementById('start-container').classList.add('hidden');
        document.getElementById('result-container').classList.add('hidden'); 
        document.getElementById('quiz-container').classList.remove('hidden'); 
        displayQuestion();
    }

    function displayQuestion() {
        const q = quizData[currentQuestionIndex];
        document.getElementById('question-number').textContent = `Question ${currentQuestionIndex + 1}/${quizData.length}`;
        document.getElementById('question-text').textContent = q.q;
        const choicesArea = document.getElementById('choices-area');
        choicesArea.innerHTML = ''; 
        q.c.forEach(choice => {
            const button = document.createElement('button');
            button.className = 'choice-btn';
            button.textContent = choice.t;
            button.onclick = () => selectAnswer(choice.v);
            choicesArea.appendChild(button);
        });
    }

    function selectAnswer(value) {
        userScores[value]++;
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
            displayQuestion();
        } else {
            displayResult();
        }
    }

    function displayResult() {
        const { top3, percentage, primaryConcern } = processDiagnosis(userScores);
        
        const recommendationList = document.getElementById('recommendation-list');
        recommendationList.innerHTML = '';
        top3.forEach((pavilion, index) => {
            const rank = index + 1;
            // ▼▼▼【重要】AIコメントを診断結果に基づいて動的に生成 ▼▼▼
            const reason = `あなた様の最も高い興味関心である**「${primaryConcern.jp}」**のテーマと、このパビリオンが持つ**「${pavilion.matchedCategory.jp}」**の要素が強く合致しているため、最高の体験をお約束できると判断いたしました。`;
            const pavilionHTML = `
                <div class="rec-pavilion">
                    <div class="rec-header">
                        <div class="rec-rank">第${rank}位</div>
                        <div class="rec-name">${pavilion.name}</div>
                    </div>
                    <div class="rec-body">
                        <p class="rec-comment-title">AIアテンダー's コメント</p>
                        <p class="rec-comment">${reason}</p>
                        <a href="${pavilion.link}" target="_blank" class="rec-button">公式サイトで詳細を見る</a>
                    </div>
                </div>
            `;
            recommendationList.innerHTML += pavilionHTML.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
        });

        document.getElementById('recommend-percentage-value').textContent = `${percentage}%`;
        
        const shareText = `私の万博おすすめパビリオンBest3は… 1位:${top3[0].name}, 2位:${top3[1].name}, 3位:${top3[2].name} でした！ #万博AIパビリオン診断`;
        const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`;
        document.getElementById('share-button').href = shareUrl;

        document.getElementById('quiz-container').classList.add('hidden');
        document.getElementById('result-container').classList.remove('hidden');
        
        requestAnimationFrame(() => {
            renderSpiderChart(userScores);
        });
    }

    function processDiagnosis(scores) {
        const categoryLabels = { tech: 'テクノロジー', entame: 'エンタメ・文化', future: '未来社会・ビジネス', nature: '自然・環境', life: 'ライフスタイル・食' };

        // 最もスコアが高い興味関心を特定
        let maxScore = -1;
        let primaryConcernKey = 'tech';
        for (const key in scores) {
            if (scores[key] > maxScore) {
                maxScore = scores[key];
                primaryConcernKey = key;
            }
        }
        const primaryConcern = { key: primaryConcernKey, jp: categoryLabels[primaryConcernKey] };

        // 各パビリオンの適合スコアを計算
        let pavilionScores = [];
        for (const key in pavilions) {
            const pavilion = pavilions[key];
            let score = 0;
            let matchedCategory = { key: '', jp: '' };

            pavilion.categories.forEach(category => {
                score += scores[category];
                // 最も興味のある分野と合致するかを記録
                if(category === primaryConcern.key) {
                    score += 5; // 最も興味のある分野にはボーナスポイント
                    matchedCategory = { key: category, jp: categoryLabels[category] };
                }
            });
            // マッチしたカテゴリがない場合は、パビリオンの最初のカテゴリを代表とする
            if(!matchedCategory.key) {
                const firstCategory = pavilion.categories[0];
                matchedCategory = { key: firstCategory, jp: categoryLabels[firstCategory] };
            }
            pavilionScores.push({ ...pavilion, key, score, matchedCategory });
        }

        pavilionScores.sort((a, b) => b.score - a.score);
        const top3 = pavilionScores.slice(0, 3);
        
        const totalScore = Object.values(scores).reduce((sum, val) => sum + val, 0);
        const maxPossibleScore = quizData.length;
        const percentage = maxPossibleScore > 0 ? Math.round((totalScore / maxPossibleScore) * 100) : 0;
        
        return { top3, percentage, primaryConcern };
    }
    
    function renderSpiderChart(scores) {
        if (expoChart) {
            expoChart.destroy(); 
        }
        const chartCtx = document.getElementById('expo-chart').getContext('2d');
        const labels = { tech: 'テクノロジー', entame: 'エンタメ・文化', future: '未来社会・ビジネス', nature: '自然・環境', life: 'ライフスタイル・食' };
        
        const maxScorePerCategory = quizData.reduce((acc, curr) => {
            curr.c.forEach(choice => { acc[choice.v] = (acc[choice.v] || 0) + 1; });
            return acc;
        }, {});
        const dataValues = scoreCategories.map(key => (scores[key] / (maxScorePerCategory[key] || 1)) * 100);

        const data = {
            labels: scoreCategories.map(key => labels[key]),
            datasets: [{
                label: '興味関心', data: dataValues, fill: true,
                backgroundColor: 'rgba(216, 27, 43, 0.2)',
                borderColor: 'rgb(216, 27, 43)',
                pointBackgroundColor: 'rgb(216, 27, 43)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(216, 27, 43)'
            }]
        };

        const config = {
            type: 'radar', data: data,
            options: {
                responsive: true, maintainAspectRatio: false, 
                elements: { line: { borderWidth: 3 } },
                scales: { r: { angleLines: { display: true }, suggestedMin: 0, suggestedMax: 100, pointLabels: { font: { size: 12 } }, ticks: { display: false, stepSize: 25 } } },
                plugins: { legend: { display: false } }
            }
        };
        expoChart = new Chart(chartCtx, config);
    }

    initialize();
});
