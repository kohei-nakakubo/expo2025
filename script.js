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

    // パビリオンデータベース
    const pavilions = {
        'gundam': { name: "GUNDAM NEXT FUTURE PAVILION", categories: ['tech', 'entame'], desc: "「機動戦士ガンダム」が示す未来の可能性がテーマです。少年時代の興奮が蘇ると同時に、現代社会の課題と向き合う、深い知的な体験となるでしょう。" },
        'ntt': { name: "NTT Pavilion (仮称)", categories: ['tech', 'future'], desc: "NTTが描く未来のコミュニケーションがテーマです。最新技術がビジネスや社会をどう変えるか、その最前線に触れたいあなた様におすすめです。" },
        'panasonic': { name: "パナソニック паビリオン「ノモの国」", categories: ['tech', 'nature', 'life'], desc: "サステナブルな未来をテーマに、モノや情報から解放された新しい生き方を提示します。日々の暮らしや環境問題に関心が高いあなた様にぴったりです。" },
        'mitsubishi': { name: "三菱 未来館", categories: ['future', 'tech', 'nature'], desc: "「いのち」と宇宙、そして地球の未来を巡る壮大なテーマです。ビジネスのヒントや、大きな視座を得たいあなた様の知的好奇心を刺激します。" },
        'sumitomo': { name: "住友館", categories: ['nature', 'life', 'future'], desc: "「森の劇場」と「森のラーニング」をテーマに、未来の幸福を考えます。自然との共生や、心豊かなライフスタイルを求めるあなた様に響くでしょう。" },
        'gas': { name: "大阪ガスグループパビリオン「笑顔の未来」", categories: ['life', 'nature', 'future'], desc: "食やエネルギーの未来を通じて、地球の健康を考えるパビリオンです。実生活に直結したテーマで、新しい発見や学びを求めるあなた様に最適です。" },
        'yoshimoto': { name: "よしもと waraii myraii館", categories: ['entame', 'life'], desc: "よしもと興業が「笑い」と「テクノロジー」を融合させます。日々の疲れを忘れ、純粋に楽しみたい、新しいエンタメを体験したいあなた様におすすめです。" },
        'ishiguro': { name: "シグネチャーパビリオン「いのちの未来」", categories: ['tech', 'future'], desc: "アンドロイド研究の第一人者、石黒浩氏がプロデュース。ロボットやAIが共存する未来の社会像を提示します。テクノロジーの進化の先を見たいあなた様に。" }
    };
    const scoreCategories = ['tech', 'entame', 'future', 'nature', 'life'];
    
    // ===== グローバル変数 =====
    let currentQuestionIndex, userScores, expoChart;

    // ===== アプリケーションの初期化 =====
    function initialize() {
        document.getElementById('start-btn').addEventListener('click', startQuiz);
        document.getElementById('retry-btn').addEventListener('click', startQuiz);
    }

    // ===== 診断のフロー制御 =====
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
        userScores[value] += 1;
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
            displayQuestion();
        } else {
            displayResult();
        }
    }

    // ===== 結果処理 =====
    function displayResult() {
        const { top3, percentage } = processDiagnosis(userScores);
        
        // おすすめパビリオンリストを生成
        const recommendationList = document.getElementById('recommendation-list');
        recommendationList.innerHTML = '';
        top3.forEach((pavilion, index) => {
            const rank = index + 1;
            const pavilionHTML = `
                <div class="rec-pavilion">
                    <div class="rec-header">
                        <div class="rec-rank">第${rank}位</div>
                        <div class="rec-name">${pavilion.name}</div>
                    </div>
                    <div class="rec-body">
                        <p class="rec-comment-title">AIアテンダー's コメント</p>
                        <p class="rec-comment">${pavilion.desc}</p>
                        <a href="https://www.expo2025.or.jp/" target="_blank" class="rec-button">公式サイトで詳細を見る</a>
                    </div>
                </div>
            `;
            recommendationList.innerHTML += pavilionHTML;
        });

        document.getElementById('recommend-percentage-value').textContent = `${percentage}%`;
        
        document.getElementById('quiz-container').classList.add('hidden');
        document.getElementById('result-container').classList.remove('hidden');
        
        requestAnimationFrame(() => {
            renderSpiderChart(userScores);
        });
    }

    // ===== AI診断エンジン =====
    function processDiagnosis(scores) {
        let pavilionScores = [];
        // 各パビリオンの適合スコアを計算
        for (const key in pavilions) {
            const pavilion = pavilions[key];
            let score = 0;
            pavilion.categories.forEach(category => {
                score += scores[category];
            });
            pavilionScores.push({ ...pavilion, key, score });
        }

        // スコア順にソートして上位3つを取得
        pavilionScores.sort((a, b) => b.score - a.score);
        const top3 = pavilionScores.slice(0, 3);
        
        // 総合おすすめ度を計算
        const totalScore = Object.values(scores).reduce((sum, val) => sum + val, 0);
        const maxPossibleScore = quizData.length; // 10問 x 1点
        const percentage = maxPossibleScore > 0 ? Math.round((totalScore / maxPossibleScore) * 100) : 0;
        
        return { top3, percentage };
    }
    
    // ===== グラフ描画 =====
    function renderSpiderChart(scores) {
        if (expoChart) {
            expoChart.destroy(); 
        }
        const chartCtx = document.getElementById('expo-chart').getContext('2d');
        const labels = { tech: 'テクノロジー', entame: 'エンタメ・文化', future: '未来社会・ビジネス', nature: '自然・環境', life: 'ライフスタイル・食' };
        
        // スコアを最大値(10問中何問か)で正規化して%に変換
        const maxScorePerCategory = quizData.reduce((acc, curr) => {
            curr.c.forEach(choice => {
                acc[choice.v] = (acc[choice.v] || 0) + 1;
            });
            return acc;
        }, {});

        const dataValues = scoreCategories.map(key => {
            const max = maxScorePerCategory[key] || 1;
            return (scores[key] / max) * 100;
        });

        const data = {
            labels: scoreCategories.map(key => labels[key]),
            datasets: [{
                label: '興味関心',
                data: dataValues,
                fill: true,
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

    // ===== アプリケーション実行開始 =====
    initialize();
});