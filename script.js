document.addEventListener('DOMContentLoaded', () => {

    // ===== データ定義 =====
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

    // ▼▼▼【重要】公式サイトの個別URLに完全修正 ▼▼▼
    const pavilions = {
        'gundam': { name: "GUNDAM NEXT FUTURE PAVILION", categories: ['tech', 'entame', 'future'], link: "https://www.expo2025.or.jp/domestic-pv/bandainamco/" },
        'ntt': { name: "NTT Pavilion (仮称)", categories: ['tech', 'future'], link: "https://www.expo2025.or.jp/domestic-pv/ntt/" },
        'panasonic': { name: "パナソニックパビリオン「ノモの国」", categories: ['tech', 'nature', 'life'], link: "https://www.expo2025.or.jp/domestic-pv/panasonic/" },
        'mitsubishi': { name: "三菱 未来館", categories: ['future', 'tech', 'nature'], link: "https://www.expo2025.or.jp/domestic-pv/mitsubishi/" },
        'sumitomo': { name: "住友館", categories: ['nature', 'life', 'future'], link: "https://www.expo2025.or.jp/domestic-pv/sumitomo/" },
        'gas': { name: "大阪ガスグループパビリオン", categories: ['life', 'nature', 'future'], link: "https://www.expo2025.or.jp/domestic-pv/osakagas/" },
        'yoshimoto': { name: "よしもと waraii myraii館", categories: ['entame', 'life'], link: "https://www.expo2025.or.jp/domestic-pv/yoshimoto/" },
        'usa': { name: "アメリカ合衆国 パビリオン", categories: ['tech', 'future', 'life'], link: "https://www.expo2025.or.jp/official-participant/usa/" },
        'switzerland': { name: "スイス パビリオン", categories: ['nature', 'tech', 'life'], link: "https://www.expo2025.or.jp/official-participant/switzerland/" },
        'saudi_arabia': { name: "サウジアラビア パビリオン", categories: ['future', 'life', 'entame'], link: "https://www.expo2025.or.jp/official-participant/saudiarabia/" },
        'korea': { name: "大韓民国 パビリオン", categories: ['entame', 'tech', 'life'], link: "https://www.expo2025.or.jp/official-participant/korea/" },
        'germany': { name: "ドイツ パビリオン", categories: ['nature', 'tech', 'future'], link: "https://www.expo2025.or.jp/official-participant/germany/" },
        'netherlands': { name: "オランダ パビリオン", categories: ['nature', 'life', 'future'], link: "https://www.expo2025.or.jp/official-participant/netherlands/" },
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
        const { top3, primaryConcern } = processDiagnosis(userScores);
        
        const recommendationList = document.getElementById('recommendation-list');
        recommendationList.innerHTML = '';
        top3.forEach((pavilion, index) => {
            const rank = index + 1;
            const reason = getReason(pavilion, primaryConcern);
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
        
        const shareText = `私の万博おすすめパビリオンBest3は… 1位:${top3[0].name}, 2位:${top3[1].name}, 3位:${top3[2].name} でした！ #万博AIパビリオン診断`;
        const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`;
        document.getElementById('share-button').href = shareUrl;

        document.getElementById('quiz-container').classList.add('hidden');
        document.getElementById('result-container').classList.remove('hidden');
        
        requestAnimationFrame(() => {
            renderSpiderChart(userScores);
        });
    }

    // ▼▼▼【重要】推薦理由を深掘りする専用の関数を刷新 ▼▼▼
    function getReason(pavilion, primaryConcern) {
        let comment = `あんた様の興味はズバリ**「${primaryConcern.jp}」**ですな！そしたら、ここは絶対外せまへんで！`;

        switch(pavilion.key) {
            case 'gundam':
                comment += " なんでかって？ここのテーマは「ガンダムが示す未来の可能性」。単なるアニメやない、**未来社会**や**テクノロジー**がどないなっていくかをリアルに体験できる空間なんですわ。あんた様の**エンタメ好き**な心と、**未来**への知的好奇心、両方ガッチリ掴んで離しまへんで！";
                break;
            case 'ntt':
                comment += " なんでかって？ここはNTTが誇る次世代通信技術「IOWN」で、**未来のコミュニケーション**を体験できる場所やから。遠い場所とリアルタイムで繋がるなんてSFの世界が目の前に広がるんです。あんた様の**テクノロジー**と**未来のビジネス**への関心やったら、ビビッとくること間違いなしですわ！";
                break;
            case 'panasonic':
                comment += " なんでかって？ここは「ノモの国」言うて、モノや情報から解放された新しい生き方を提案してまんねん。あんた様の**ライフスタイル**や**自然**との共生への関心の高さやったら、ここのサステナブルな考え方は、日々の暮らしに新しい風を吹かせてくれますで。";
                break;
            case 'mitsubishi':
                comment += " なんでかって？「いのち」をテーマに深海から宇宙まで旅する壮大なスケール、男のロマンですやん！あんた様の**知的好奇心**や**未来**を見通す視点やったら、ここの没入体験は仕事のヒントにも繋がるかもしれまへん。絶対、損はさせまへん！";
                break;
            case 'switzerland':
                comment += " なんでかって？スイスいうたらアルプスの大自然！…だけやないんですわ。ここでは最先端の**テクノロジー**が自然とどない共存してるか見せてくれる。あんた様の**自然**への憧れと**テクノロジー**への興味、両方いっぺんに満たせる、ええとこ取りのパビリオンですわ！";
                break;
            case 'germany':
                comment += " なんでかって？ここのテーマは「循環経済」。これからのビジネスや社会を考える上で絶対に外されへんテーマです。**環境問題**や**持続可能な未来**に関心が高いあんた様にとって、一番知的で刺激的な「なるほど！」が得られる場所やと思いますで。";
                break;
            case 'yoshimoto':
                comment += " なんでかって？なんやかんや言うても、オモロイのが一番ですやん！ここは吉本が**エンタメ**の力で「笑い」と健康を結びつける、前代未聞のパビリオン。日々の疲れを忘れて、腹の底から笑いたいあんた様にピッタリですわ！";
                break;
            default:
                 comment += ` このパビリオンは**「${pavilion.matchedCategory.jp}」**の要素が特に強いんで、あんた様の興味にグッとくること間違いなしやと、わては読んでます！いっちょ行ってみなはれ！`;
        }
        return comment;
    }


    function processDiagnosis(scores) {
        const categoryLabels = { tech: 'テクノロジー', entame: 'エンタメ・文化', future: '未来社会・ビジネス', nature: '自然・環境', life: 'ライフスタイル・食' };
        let maxScore = -1;
        let primaryConcernKey = 'tech';
        for (const key in scores) { if (scores[key] > maxScore) { maxScore = scores[key]; primaryConcernKey = key; } }
        const primaryConcern = { key: primaryConcernKey, jp: categoryLabels[primaryConcernKey] };

        let pavilionScores = [];
        for (const key in pavilions) {
            const pavilion = pavilions[key];
            let score = 0;
            let matchedCategory = { key: '', jp: '' };
            pavilion.categories.forEach(category => {
                score += scores[category];
                if(category === primaryConcern.key) {
                    score += 5; 
                    matchedCategory = { key: category, jp: categoryLabels[category] };
                }
            });
            if(!matchedCategory.key) {
                const firstCategory = pavilion.categories[0];
                matchedCategory = { key: firstCategory, jp: categoryLabels[firstCategory] };
            }
            pavilionScores.push({ ...pavilion, key, score, matchedCategory });
        }

        pavilionScores.sort((a, b) => b.score - a.score);
        const top3 = pavilionScores.slice(0, 3);
        
        return { top3, primaryConcern };
    }
    
    function renderSpiderChart(scores) {
        if (expoChart) { expoChart.destroy(); }
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
