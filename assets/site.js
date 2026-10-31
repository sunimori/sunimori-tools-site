(function () {
  "use strict";

  var LANGUAGES = [
    { id: "ja", name: "日本語", tag: "JA" },
    { id: "zh", name: "中文", tag: "ZH" },
    { id: "en", name: "English", tag: "EN" },
    { id: "ko", name: "한국어", tag: "KO" },
    { id: "fr", name: "Français", tag: "FR" },
    { id: "es", name: "Español", tag: "ES" },
    { id: "de", name: "Deutsch", tag: "DE" }
  ];

  var EN = {
    skip: "Skip to content",
    navTools: "Tools", navPrinciples: "Principles", navInstall: "Install",
    heroEyebrow: "Independent developer utilities",
    heroTitle: "Quiet tools for<br><em>complex work.</em>",
    heroBody: "Small, focused developer tools for understanding code and seeing beyond a change. No unnecessary machinery—just a clearer view of the work in front of you.",
    exploreTools: "Explore the tools", visitGithub: "Visit GitHub",
    localWorkspace: "LOCAL WORKSPACE", ready: "ready", connections: "4 connections traced", staysLocal: "data stays local",
    proofTool: "available tools", proofLanguages: "site languages", proofNetwork: "network required for core analysis", proofNote: "Built for deliberate, inspectable work.",
    catalogEyebrow: "The tool shelf", catalogTitle: "Only what is useful,<br>made with care.",
    catalogBody: "Sunimori Tools is not the name of one product. It is a home for a growing set of developer tools with a clear reason to exist.",
    available: "Available now",
    toolBody: "Follow what lies beyond a changed method—across callers, screens, mappers, SQL, entities and tables. The investigation becomes a portable HTML, Markdown or XLSX report.",
    featureOne: "Change impact and deletion impact in one workflow",
    featureTwo: "Trace from Java into screens, mappers, SQL and tables",
    featureThree: "Core analysis completes locally, without a network",
    installNow: "Install", sourceCode: "Source code", analysisPreview: "ANALYSIS PREVIEW", complete: "complete", affectedNodes: "affected nodes", confidence: "Trace confidence",
    futureTitle: "Room for the next tool.", futureBody: "We will not add tools just to fill a grid. Only themes that clearly reduce friction in development will earn a place on this shelf.",
    principlesEyebrow: "How we build", principlesTitle: "Trustworthy behaviour<br>before showy features.",
    principlesBody: "A tool should not replace your judgement. It should quietly arrange the evidence that lets you make a better one.",
    principleOneTitle: "Local first", principleOneBody: "Sensitive code should not leave the machine merely to be analysed. Core capabilities work without a network.",
    principleTwoTitle: "Inspectable", principleTwoBody: "You should see not only the result, but how it was reached. Ambiguity and limits are shown, not hidden.",
    principleThreeTitle: "Focused", principleThreeBody: "Instead of a vast do-everything product, we make a defined tool that follows one difficult job all the way through.",
    installEyebrow: "Get Java Impact Analyzer", installTitle: "Install it in Eclipse.", signed: "signed", networkOptional: "no network for core features",
    updateSite: "ECLIPSE UPDATE SITE", copyHint: "click to copy", copy: "Copy",
    stepOneTitle: "Check old installs", stepOneBody: "First remove any manually placed copy of this plug-in from <code>eclipse/dropins/</code>.",
    stepTwoTitle: "Add the update site", stepTwoBody: "In Eclipse, open <strong>Help → Install New Software…</strong> and add the URL above.",
    stepThreeTitle: "Select and install", stepThreeBody: "Choose <strong>Java Impact Analyzer</strong>, then review the licence and certificate before finishing.",
    stepFourTitle: "Restart", stepFourBody: "Restart Eclipse when prompted. Future releases arrive through <strong>Check for Updates</strong>.",
    trustLabel: "RELEASE IDENTITY", trustTitle: "Verify the signer, once.", trustBody: "Installation asks you to trust a certificate. Confirm that the signer and fingerprint match before accepting it.",
    signer: "Signer", fingerprint: "SHA-256 fingerprint", trustWarning: "If Eclipse asks for a certificate again after it was trusted, stop the update.",
    unsignedTitle: "Reject unsigned content", unsignedBody: "Add the policy to <code>eclipse.ini</code> to make unsigned content fail instead of merely warning.",
    offlineTitle: "Offline install", offlineBody: "On a disconnected machine, select the update-site zip through <strong>Add → Archive…</strong>.", downloadZip: "Download update-site zip",
    requirementsTitle: "Requirements", requirementsBody: "Eclipse 4.27 (2023-03) or later and JDK 17 or later. UI available in English, Japanese and Chinese.",
    supportTitle: "Support", supportBody: "Include the version and relevant error-log lines with problems or requests.",
    closingTitle: "One lasting tool at a time.", closingBody: "As new tools arrive, this will remain a quiet and legible place to find them.", contact: "Contact",
    srAvailable: "Preview",
    srBody: "Explainable code review for Java and JSF teams. It finds copy-and-paste slips, misleading comparisons and EL that points at bean members which do not exist—on save, in your SVN local changes or across a whole project—and shows the evidence behind every finding.",
    srFeatureOne: "20 built-in rules for Java, SQL parameters and XHTML/EL", srFeatureTwo: "Review on save, SVN local changes or the whole project",
    srFeatureThree: "The engine runs on your machine; code never leaves it", srPanelTitle: "SAMPLE FINDINGS", srPanelChip: "on save",
    srFindOne: "value7 is read for both item 7 and item 8", srFindTwo: "Integer objects compared with ==", srFindThree: "orderForm has no property totl",
    srRules: "Built-in rules", srInstallEyebrow: "Get SmartReviewer", srInstallTitle: "Install it in your IDE.", srPreviewBadge: "preview", srRulePackage: "Built-in rule package",
    srSigned: "Eclipse build signed", srLocalBadge: "code stays local", srStepJavaTitle: "Prepare Java 17",
    srStepJavaBody: "The review engine runs as a separate Java 17+ process. IntelliJ IDEA’s bundled runtime works as is; Eclipse and VS Code use the configured JDK or <code>JAVA_HOME</code>.",
    srStepEclipseBody: "Add the URL above in <strong>Help → Install New Software…</strong>, select <strong>SmartReviewer</strong>, install and restart.",
    srStepIdeaBody: "Download the zip and, without unpacking it, choose it in <strong>Settings → Plugins → ⚙ → Install Plugin from Disk…</strong>.",
    srStepVscodeBody: "Download the vsix and choose it in the Extensions view under <strong>… → Install from VSIX…</strong>.",
    srDownloadIdea: "Download the IDEA plugin (zip)", srDownloadVscode: "Download the VS Code extension (vsix)",
    srTrustTitle: "Same signer for the Eclipse build.",
    srTrustBody: "The Eclipse jars are signed with the same certificate as Java Impact Analyzer. The IntelliJ IDEA, VS Code and command-line packages are not signed; compare them with the published SHA-256 checksums.",
    srChecksums: "Checksums", srCliTitle: "Command line",
    srCliBody: "Unzip and run <code>bin/smartreviewer review -p &lt;project&gt;</code>. Text, JSON or SARIF output for scripts and CI.",
    srDownloadCli: "Download the CLI (zip)",
    srOfflineBody: "In Eclipse, choose the update-site zip through <strong>Add → Archive…</strong>.",
    srRequirementsBody: "Eclipse 2020-09 (4.17) or later, IntelliJ IDEA 2024.1 or later (Community or Ultimate), VS Code 1.85 or later; Java 17 or later for the engine. Reviewing SVN changes needs the <code>svn</code> command. UI and messages in English, Japanese and Chinese.",
    srFeedbackTitle: "Preview feedback",
    srFeedbackBody: "For a false or a missed finding, include the rule ID, the version, and which of the two it was."
  };

  var JA = {
    skip: "本文へ移動", navTools: "ツール", navPrinciples: "考え方", navInstall: "導入",
    heroEyebrow: "Independent developer utilities", heroTitle: "複雑な仕事に、<br><em>静かな道具を。</em>",
    heroBody: "コードを理解し、変更の先を見通すための、小さく集中した開発ツール。余計な仕組みを持ち込まず、手元の仕事を明確にします。",
    exploreTools: "ツールを見る", visitGithub: "GitHub を見る", localWorkspace: "LOCAL WORKSPACE", ready: "準備完了", connections: "4 つの接続を追跡", staysLocal: "データは手元に残る",
    proofTool: "公開中のツール", proofLanguages: "サイト対応言語", proofNetwork: "コア分析に必要な通信", proofNote: "確かめながら進める仕事のために。",
    catalogEyebrow: "The tool shelf", catalogTitle: "必要なものだけを、<br>丁寧に。", catalogBody: "Sunimori Tools は単一製品の名前ではありません。これから増える、用途の明確な開発ツールのための場所です。",
    available: "公開中", toolBody: "変更したメソッドの先に何があるかを、呼び出し元、画面、mapper、SQL、entity、table まで横断して追跡します。調査結果は持ち運べる HTML / Markdown / XLSX レポートになります。",
    featureOne: "変更影響と削除影響を一つの流れで調査", featureTwo: "Java から画面・mapper・SQL・table まで横断", featureThree: "コア分析はローカル完結、ネットワーク不要",
    installNow: "導入する", sourceCode: "ソースコード", analysisPreview: "分析プレビュー", complete: "完了", affectedNodes: "影響ノード", confidence: "追跡確度",
    futureTitle: "次の道具のための余白。", futureBody: "数を埋めるためには増やしません。開発の摩擦をはっきり減らせるテーマだけを、この棚に追加していきます。",
    principlesEyebrow: "How we build", principlesTitle: "目立つ機能より、<br>信頼できる振る舞い。", principlesBody: "道具は、使う人の判断を置き換えるものではなく、判断できる材料を静かに整えるものだと考えています。",
    principleOneTitle: "Local first", principleOneBody: "機密性の高いコードを、分析のためだけに外へ送らない。主要機能はネットワークなしで成立させます。",
    principleTwoTitle: "Inspectable", principleTwoBody: "結果だけでなく、どう到達したかを追えること。曖昧さや上限も隠さず、確認可能な形で示します。",
    principleThreeTitle: "Focused", principleThreeBody: "巨大な万能製品を目指さず、一つの厄介な仕事を最後まで扱える、輪郭のはっきりした道具を作ります。",
    installEyebrow: "Get Java Impact Analyzer", installTitle: "Eclipse に導入する。", signed: "署名済み", networkOptional: "コア機能は通信不要", updateSite: "ECLIPSE UPDATE SITE", copyHint: "クリックしてコピー", copy: "コピー",
    stepOneTitle: "古い配置を確認", stepOneBody: "<code>eclipse/dropins/</code> に手動配置した同プラグインの jar があれば、先に削除します。",
    stepTwoTitle: "更新サイトを追加", stepTwoBody: "Eclipse の <strong>Help → Install New Software…</strong> から、上の URL を追加します。",
    stepThreeTitle: "選択して導入", stepThreeBody: "<strong>Java Impact Analyzer</strong> を選び、ライセンスと証明書を確認して完了します。",
    stepFourTitle: "再起動", stepFourBody: "案内に従って Eclipse を再起動します。以降は <strong>Check for Updates</strong> で更新できます。",
    trustLabel: "RELEASE IDENTITY", trustTitle: "最初の一度だけ、署名者を確認。", trustBody: "インストール中に証明書の信頼を求められます。署名者と指紋が一致することを確認してから信頼してください。",
    signer: "署名者", fingerprint: "SHA-256 指紋", trustWarning: "信頼後に証明書を再度求められた場合は、更新を中止してください。",
    unsignedTitle: "未署名を拒否", unsignedBody: "<code>eclipse.ini</code> に追加すると、未署名コンテンツを警告ではなく失敗にできます。",
    offlineTitle: "オフライン導入", offlineBody: "ネットワークに接続できない端末では、更新サイトの zip を <strong>Add → Archive…</strong> から指定できます。", downloadZip: "更新サイト zip を取得",
    requirementsTitle: "動作条件", requirementsBody: "Eclipse 4.27（2023-03）以降、JDK 17 以降。英語・日本語・中国語の UI に対応。",
    supportTitle: "問い合わせ", supportBody: "不具合や要望には、版番号とエラーログの該当行を添えてください。",
    closingTitle: "一つずつ、長く使えるものを。", closingBody: "新しい道具が加わっても、ここは静かで、見通しのよい場所であり続けます。", contact: "お問い合わせ",
    srAvailable: "プレビュー版",
    srBody: "Java・JSF チームのための、根拠を示すコードレビュー。コピー＆ペーストの写し間違い、誤った比較、存在しない Bean のメンバーを指す EL などを、保存時・SVN のローカル変更・プロジェクト全体で見つけ、指摘ごとに根拠を示します。",
    srFeatureOne: "Java・SQL パラメータ・XHTML/EL の組み込み規則 20 件", srFeatureTwo: "保存時、SVN のローカル変更、プロジェクト全体をレビュー", srFeatureThree: "エンジンは手元で動き、コードを外へ送らない",
    srPanelTitle: "指摘の例", srPanelChip: "保存時", srFindOne: "7 番目と 8 番目で value7 を重複して読んでいる", srFindTwo: "Integer オブジェクトを == で比較している",
    srFindThree: "orderForm に totl というプロパティはない", srRules: "組み込み規則", srInstallEyebrow: "Get SmartReviewer", srInstallTitle: "IDE に導入する。",
    srPreviewBadge: "プレビュー版", srRulePackage: "組み込み規則パッケージ", srSigned: "Eclipse 版は署名済み", srLocalBadge: "コードは手元から出ない", srStepJavaTitle: "Java 17 を用意",
    srStepJavaBody: "レビューエンジンは Java 17 以降の別プロセスで動きます。IntelliJ IDEA は同梱の実行環境をそのまま使えます。Eclipse と VS Code は設定した JDK か <code>JAVA_HOME</code> を使います。",
    srStepEclipseBody: "<strong>Help → Install New Software…</strong> で上の URL を追加し、<strong>SmartReviewer</strong> を選んで導入し、再起動します。",
    srStepIdeaBody: "zip を取得し、展開せずに <strong>Settings → Plugins → ⚙ → Install Plugin from Disk…</strong> で選びます。",
    srStepVscodeBody: "vsix を取得し、拡張機能ビューの <strong>… → Install from VSIX…</strong> で選びます。",
    srDownloadIdea: "IDEA 用 zip を取得", srDownloadVscode: "VS Code 用 vsix を取得", srTrustTitle: "Eclipse 版は同じ署名者。",
    srTrustBody: "Eclipse の jar は Java Impact Analyzer と同じ証明書で署名しています。IntelliJ IDEA・VS Code・コマンドライン版には署名がないため、公開している SHA-256 と照合してください。",
    srChecksums: "チェックサム", srCliTitle: "コマンドライン",
    srCliBody: "展開して <code>bin/smartreviewer review -p &lt;プロジェクト&gt;</code> を実行します。テキスト・JSON・SARIF で出力でき、CI でも使えます。",
    srDownloadCli: "CLI の zip を取得",
    srOfflineBody: "Eclipse では、更新サイトの zip を <strong>Add → Archive…</strong> から指定できます。",
    srRequirementsBody: "Eclipse 2020-09（4.17）以降、IntelliJ IDEA 2024.1 以降（Community / Ultimate）、VS Code 1.85 以降。エンジンは Java 17 以降。SVN の変更のレビューには <code>svn</code> コマンドが必要です。UI とメッセージは日本語・中国語・英語。",
    srFeedbackTitle: "プレビュー版へのご意見", srFeedbackBody: "誤検知や見逃しは、規則 ID と版番号、誤検知か見逃しかを添えてお知らせください。"
  };

  var ZH = {
    skip: "跳到正文", navTools: "工具", navPrinciples: "理念", navInstall: "安装",
    heroEyebrow: "专注的独立开发者工具", heroTitle: "为复杂工作，<br><em>做安静的工具。</em>",
    heroBody: "用于理解代码、看清变更后果的小而专注的开发工具。不引入多余体系，只把眼前的工作梳理清楚。",
    exploreTools: "查看工具", visitGithub: "访问 GitHub", localWorkspace: "本地工作区", ready: "就绪", connections: "已追踪 4 条关联", staysLocal: "数据留在本机",
    proofTool: "已发布工具", proofLanguages: "站点语言", proofNetwork: "核心分析所需联网", proofNote: "为可审视、慎重的工作而做。",
    catalogEyebrow: "工具目录", catalogTitle: "只做真正需要的，<br>并把它做好。", catalogBody: "Sunimori Tools 不是一个产品的名字，而是后续一系列目标明确的开发工具共同的主页。",
    available: "现已提供", toolBody: "从被修改的方法出发，跨越调用方、页面、mapper、SQL、entity 和 table 追踪影响。调查结果可导出为便携的 HTML、Markdown 或 XLSX 报告。",
    featureOne: "在同一流程中调查变更影响与删除影响", featureTwo: "从 Java 横跨页面、mapper、SQL 与 table", featureThree: "核心分析在本地完成，无需联网",
    installNow: "立即安装", sourceCode: "源代码", analysisPreview: "分析预览", complete: "完成", affectedNodes: "受影响节点", confidence: "追踪可信度",
    futureTitle: "给下一件工具留出空间。", futureBody: "我们不会为了填满列表而增加产品。只有能明确减少开发摩擦的主题，才会被放到这里。",
    principlesEyebrow: "我们的做法", principlesTitle: "比起显眼的功能，<br>更重视可信的行为。", principlesBody: "工具不应该替代人的判断，而应该安静地整理好证据，让人做出更好的判断。",
    principleOneTitle: "本地优先", principleOneBody: "不应仅为了分析就把敏感代码送出机器。核心能力无需网络也能完整工作。",
    principleTwoTitle: "可以审视", principleTwoBody: "不只给出结论，也能看清结论如何得到。歧义和上限都会明确呈现，不会隐藏。",
    principleThreeTitle: "保持专注", principleThreeBody: "不追求庞大的万能产品，而是把一个棘手任务从头到尾处理好的、边界清晰的工具。",
    installEyebrow: "获取 Java Impact Analyzer", installTitle: "安装到 Eclipse。", signed: "已签名", networkOptional: "核心功能无需联网", updateSite: "ECLIPSE 更新站点", copyHint: "点击复制", copy: "复制",
    stepOneTitle: "检查旧安装", stepOneBody: "如果 <code>eclipse/dropins/</code> 中有手工放入的同插件 jar，请先删除。",
    stepTwoTitle: "添加更新站点", stepTwoBody: "在 Eclipse 中打开 <strong>Help → Install New Software…</strong>，添加上面的 URL。",
    stepThreeTitle: "选择并安装", stepThreeBody: "选择 <strong>Java Impact Analyzer</strong>，核对许可证与证书后完成安装。",
    stepFourTitle: "重新启动", stepFourBody: "按提示重启 Eclipse。以后可通过 <strong>Check for Updates</strong> 获取更新。",
    trustLabel: "发布身份", trustTitle: "只在第一次确认签名者。", trustBody: "安装时 Eclipse 会询问是否信任证书。请确认签名者和指纹一致后再信任。",
    signer: "签名者", fingerprint: "SHA-256 指纹", trustWarning: "信任之后如果再次被要求确认新证书，请停止更新。",
    unsignedTitle: "拒绝未签名内容", unsignedBody: "把该策略加入 <code>eclipse.ini</code>，未签名内容会直接失败，而不只是警告。",
    offlineTitle: "离线安装", offlineBody: "无法联网的机器可通过 <strong>Add → Archive…</strong> 选择更新站点 zip。", downloadZip: "下载更新站点 zip",
    requirementsTitle: "运行条件", requirementsBody: "Eclipse 4.27（2023-03）及以上，JDK 17 及以上。UI 支持英语、日语和中文。",
    supportTitle: "联系与反馈", supportBody: "报告问题或提出需求时，请附上版本号和错误日志相关行。",
    closingTitle: "一次做好一个，长期使用。", closingBody: "即使以后加入更多工具，这里也会一直保持安静、清晰、容易理解。", contact: "联系",
    srAvailable: "预览版",
    srBody: "面向 Java 与 JSF 团队的可解释代码审查。在保存时、对 SVN 本地修改或整个工程，找出复制粘贴时的抄错、错误的比较方式、引用了不存在的 Bean 成员的 EL 等问题，并为每条告警给出证据。",
    srFeatureOne: "20 条内置规则：Java、SQL 参数与 XHTML/EL", srFeatureTwo: "保存时审查、SVN 本地修改审查、整个工程审查", srFeatureThree: "引擎在本机运行，代码不出本机", srPanelTitle: "告警示例",
    srPanelChip: "保存时", srFindOne: "第 7、8 项重复读取 value7", srFindTwo: "用 == 比较 Integer 对象", srFindThree: "orderForm 没有 totl 属性", srRules: "内置规则",
    srInstallEyebrow: "获取 SmartReviewer", srInstallTitle: "安装到 IDE。", srPreviewBadge: "预览版", srRulePackage: "内置规则包", srSigned: "Eclipse 版已签名", srLocalBadge: "代码不出本机",
    srStepJavaTitle: "准备 Java 17",
    srStepJavaBody: "审查引擎作为独立进程运行，需要 Java 17 及以上。IntelliJ IDEA 自带的运行时可直接使用；Eclipse 与 VS Code 使用设置中的 JDK 或 <code>JAVA_HOME</code>。",
    srStepEclipseBody: "在 <strong>Help → Install New Software…</strong> 中添加上面的 URL，选择 <strong>SmartReviewer</strong> 安装并重启。",
    srStepIdeaBody: "下载 zip，不要解压，在 <strong>Settings → Plugins → ⚙ → Install Plugin from Disk…</strong> 中选择它。",
    srStepVscodeBody: "下载 vsix，在扩展视图的 <strong>… → Install from VSIX…</strong> 中选择它。", srDownloadIdea: "下载 IDEA 插件 zip",
    srDownloadVscode: "下载 VS Code 扩展 vsix", srTrustTitle: "Eclipse 版使用同一签名者。",
    srTrustBody: "Eclipse 的 jar 与 Java Impact Analyzer 使用同一张证书签名。IntelliJ IDEA、VS Code 与命令行版没有签名，请与公布的 SHA-256 核对。",
    srChecksums: "校验和", srCliTitle: "命令行",
    srCliBody: "解压后运行 <code>bin/smartreviewer review -p &lt;工程&gt;</code>。可输出文本、JSON 或 SARIF，也适用于 CI。",
    srDownloadCli: "下载命令行 zip", srOfflineBody: "在 Eclipse 中可通过 <strong>Add → Archive…</strong> 选择更新站点 zip。",
    srRequirementsBody: "Eclipse 2020-09（4.17）及以上、IntelliJ IDEA 2024.1 及以上（Community 或 Ultimate）、VS Code 1.85 及以上；引擎需要 Java 17 及以上。审查 SVN 修改需要 <code>svn</code> 命令。界面与消息支持中文、日语和英语。",
    srFeedbackTitle: "预览版反馈", srFeedbackBody: "报告误报或漏报时，请附上规则 ID、版本号，并说明是误报还是漏报。"
  };

  var KO = {
    skip: "본문으로 이동", navTools: "도구", navPrinciples: "원칙", navInstall: "설치",
    heroEyebrow: "독립 개발자 유틸리티", heroTitle: "복잡한 일을 위한<br><em>조용한 도구.</em>", heroBody: "코드를 이해하고 변경 너머를 보기 위한 작고 집중된 개발 도구입니다. 불필요한 체계 없이 지금 해야 할 일을 더 선명하게 만듭니다.",
    exploreTools: "도구 보기", visitGithub: "GitHub 보기", ready: "준비됨", connections: "연결 4개 추적", staysLocal: "데이터는 로컬에 유지", proofTool: "공개 도구", proofLanguages: "사이트 언어", proofNetwork: "핵심 분석에 필요한 네트워크", proofNote: "검토 가능하고 신중한 작업을 위해.",
    catalogEyebrow: "도구 선반", catalogTitle: "필요한 것만,<br>정성스럽게.", catalogBody: "Sunimori Tools는 단일 제품의 이름이 아닙니다. 목적이 분명한 개발 도구들이 모일 공간입니다.", available: "사용 가능",
    toolBody: "변경된 메서드에서 호출자, 화면, mapper, SQL, entity, table까지 영향을 추적합니다. 결과는 HTML, Markdown, XLSX 보고서로 남습니다.", featureOne: "변경 영향과 삭제 영향을 하나의 흐름으로 조사", featureTwo: "Java에서 화면·mapper·SQL·table까지 추적", featureThree: "핵심 분석은 네트워크 없이 로컬에서 완료",
    installNow: "설치", sourceCode: "소스 코드", analysisPreview: "분석 미리보기", complete: "완료", affectedNodes: "영향 노드", confidence: "추적 신뢰도",
    futureTitle: "다음 도구를 위한 여백.", futureBody: "목록을 채우기 위해 늘리지 않습니다. 개발 마찰을 분명히 줄이는 주제만 이곳에 추가합니다.",
    principlesEyebrow: "만드는 방식", principlesTitle: "눈에 띄는 기능보다<br>신뢰할 수 있는 동작.", principlesBody: "도구는 판단을 대신하는 것이 아니라 더 나은 판단을 위한 근거를 조용히 정리해야 합니다.",
    principleOneTitle: "로컬 우선", principleOneBody: "분석만을 위해 민감한 코드를 외부로 보내지 않습니다. 핵심 기능은 네트워크 없이 동작합니다.", principleTwoTitle: "검토 가능", principleTwoBody: "결과뿐 아니라 도달 경로도 볼 수 있어야 합니다. 모호함과 한계를 숨기지 않습니다.", principleThreeTitle: "집중", principleThreeBody: "거대한 만능 제품보다 하나의 어려운 일을 끝까지 해결하는 경계가 선명한 도구를 만듭니다.",
    installEyebrow: "Java Impact Analyzer 받기", installTitle: "Eclipse에 설치.", signed: "서명됨", networkOptional: "핵심 기능은 네트워크 불필요", updateSite: "ECLIPSE 업데이트 사이트", copyHint: "클릭하여 복사", copy: "복사",
    stepOneTitle: "기존 설치 확인", stepOneBody: "<code>eclipse/dropins/</code>에 직접 넣은 같은 플러그인 jar가 있으면 먼저 삭제합니다.", stepTwoTitle: "업데이트 사이트 추가", stepTwoBody: "Eclipse의 <strong>Help → Install New Software…</strong>에서 위 URL을 추가합니다.", stepThreeTitle: "선택 후 설치", stepThreeBody: "<strong>Java Impact Analyzer</strong>를 선택하고 라이선스와 인증서를 확인합니다.", stepFourTitle: "재시작", stepFourBody: "안내에 따라 Eclipse를 재시작합니다. 이후 <strong>Check for Updates</strong>로 업데이트합니다.",
    trustLabel: "릴리스 신원", trustTitle: "처음 한 번 서명자를 확인.", trustBody: "설치 중 인증서 신뢰 여부를 묻습니다. 서명자와 지문이 일치하는지 확인하세요.", signer: "서명자", fingerprint: "SHA-256 지문", trustWarning: "신뢰한 뒤 인증서를 다시 묻는다면 업데이트를 중지하세요.",
    unsignedTitle: "서명 없는 항목 거부", unsignedBody: "이 정책을 <code>eclipse.ini</code>에 넣으면 서명 없는 콘텐츠가 경고가 아닌 실패가 됩니다.", offlineTitle: "오프라인 설치", offlineBody: "연결되지 않은 기기에서는 <strong>Add → Archive…</strong>로 업데이트 사이트 zip을 선택합니다.", downloadZip: "업데이트 사이트 zip 받기", requirementsTitle: "요구 사항", requirementsBody: "Eclipse 4.27 이상, JDK 17 이상. 영어·일본어·중국어 UI 지원.", supportTitle: "지원", supportBody: "문제나 요청에는 버전과 관련 오류 로그를 첨부하세요.", closingTitle: "오래 쓸 도구를 하나씩.", closingBody: "새 도구가 더해져도 이곳은 조용하고 명료한 공간으로 남습니다.", contact: "연락",
    srAvailable: "미리보기",
    srBody: "Java·JSF 팀을 위한, 근거를 보여 주는 코드 리뷰. 복사·붙여넣기 실수, 잘못된 비교, 존재하지 않는 Bean 멤버를 가리키는 EL 등을 저장할 때, SVN 로컬 변경, 프로젝트 전체에서 찾아내고 지적마다 근거를 보여 줍니다.",
    srFeatureOne: "Java·SQL 파라미터·XHTML/EL 내장 규칙 20개", srFeatureTwo: "저장 시, SVN 로컬 변경, 프로젝트 전체 리뷰", srFeatureThree: "엔진은 로컬에서 실행되며 코드는 밖으로 나가지 않음",
    srPanelTitle: "지적 예시", srPanelChip: "저장 시", srFindOne: "7번째와 8번째 항목에서 value7을 중복해서 읽음", srFindTwo: "Integer 객체를 ==로 비교",
    srFindThree: "orderForm에 totl 속성이 없음", srRules: "내장 규칙", srInstallEyebrow: "SmartReviewer 받기", srInstallTitle: "IDE에 설치.", srPreviewBadge: "미리보기", srRulePackage: "내장 규칙 패키지",
    srSigned: "Eclipse 판 서명됨", srLocalBadge: "코드는 로컬에 유지", srStepJavaTitle: "Java 17 준비",
    srStepJavaBody: "리뷰 엔진은 Java 17 이상의 별도 프로세스로 실행됩니다. IntelliJ IDEA는 내장 런타임을 그대로 쓰고, Eclipse와 VS Code는 설정한 JDK나 <code>JAVA_HOME</code>을 씁니다.",
    srStepEclipseBody: "<strong>Help → Install New Software…</strong>에서 위 URL을 추가하고 <strong>SmartReviewer</strong>를 선택해 설치한 뒤 재시작합니다.",
    srStepIdeaBody: "zip을 받아 압축을 풀지 않고 <strong>Settings → Plugins → ⚙ → Install Plugin from Disk…</strong>에서 선택합니다.",
    srStepVscodeBody: "vsix를 받아 확장 보기의 <strong>… → Install from VSIX…</strong>에서 선택합니다.",
    srDownloadIdea: "IDEA 플러그인 zip 받기", srDownloadVscode: "VS Code 확장 vsix 받기", srTrustTitle: "Eclipse 판은 같은 서명자.",
    srTrustBody: "Eclipse jar는 Java Impact Analyzer와 같은 인증서로 서명되어 있습니다. IntelliJ IDEA·VS Code·명령줄 판은 서명이 없으므로 공개된 SHA-256과 비교하세요.",
    srChecksums: "체크섬", srCliTitle: "명령줄",
    srCliBody: "압축을 풀고 <code>bin/smartreviewer review -p &lt;프로젝트&gt;</code>를 실행합니다. 텍스트·JSON·SARIF로 출력하며 CI에도 쓸 수 있습니다.",
    srDownloadCli: "CLI zip 받기",
    srOfflineBody: "Eclipse에서는 <strong>Add → Archive…</strong>로 업데이트 사이트 zip을 선택할 수 있습니다.",
    srRequirementsBody: "Eclipse 2020-09(4.17) 이상, IntelliJ IDEA 2024.1 이상(Community/Ultimate), VS Code 1.85 이상. 엔진은 Java 17 이상. SVN 변경 리뷰에는 <code>svn</code> 명령이 필요합니다. UI와 메시지는 일본어·중국어·영어.",
    srFeedbackTitle: "미리보기 의견", srFeedbackBody: "오탐이나 누락은 규칙 ID와 버전, 오탐인지 누락인지를 함께 알려 주세요."
  };

  var FR = {
    skip: "Aller au contenu", navTools: "Outils", navPrinciples: "Principes", navInstall: "Installer",
    heroEyebrow: "Utilitaires indépendants pour développeurs", heroTitle: "Des outils discrets pour<br><em>un travail complexe.</em>", heroBody: "De petits outils ciblés pour comprendre le code et voir au-delà d'une modification. Sans mécanisme superflu, seulement une vision plus claire du travail.",
    exploreTools: "Voir les outils", visitGithub: "Voir GitHub", ready: "prêt", connections: "4 relations tracées", staysLocal: "données locales", proofTool: "outils disponibles", proofLanguages: "langues du site", proofNetwork: "réseau requis pour l'analyse principale", proofNote: "Conçu pour un travail réfléchi et vérifiable.",
    catalogEyebrow: "La collection", catalogTitle: "Seulement l'utile,<br>réalisé avec soin.", catalogBody: "Sunimori Tools n'est pas un produit unique, mais le foyer d'outils de développement aux objectifs clairs.", available: "Disponible",
    toolBody: "Suivez l'impact d'une méthode modifiée parmi appelants, écrans, mappers, SQL, entités et tables. L'enquête devient un rapport HTML, Markdown ou XLSX portable.", featureOne: "Impact des modifications et suppressions dans un même flux", featureTwo: "De Java aux écrans, mappers, SQL et tables", featureThree: "Analyse principale locale, sans réseau",
    installNow: "Installer", sourceCode: "Code source", futureTitle: "Une place pour le prochain outil.", futureBody: "Aucun outil n'est ajouté pour remplir une grille. Seuls ceux qui réduisent clairement les frictions du développement trouvent leur place.",
    principlesEyebrow: "Notre méthode", principlesTitle: "Un comportement fiable<br>avant l'effet de mode.", principlesBody: "Un outil ne remplace pas votre jugement : il organise les éléments qui permettent de mieux décider.", principleOneTitle: "Local d'abord", principleOneBody: "Le code sensible ne quitte pas la machine pour être analysé. Les fonctions principales marchent sans réseau.", principleTwoTitle: "Vérifiable", principleTwoBody: "Le résultat et le chemin qui y mène restent visibles. Ambiguïtés et limites ne sont pas cachées.", principleThreeTitle: "Ciblé", principleThreeBody: "Plutôt qu'un produit universel, nous créons un outil défini qui traite un travail difficile jusqu'au bout.",
    installEyebrow: "Obtenir Java Impact Analyzer", installTitle: "Installer dans Eclipse.", signed: "signé", networkOptional: "fonctions principales hors ligne", updateSite: "SITE DE MISE À JOUR ECLIPSE", copyHint: "cliquer pour copier", copy: "Copier",
    stepOneTitle: "Vérifier l'ancienne installation", stepOneBody: "Supprimez d'abord toute copie du plug-in placée à la main dans <code>eclipse/dropins/</code>.", stepTwoTitle: "Ajouter le site", stepTwoBody: "Dans Eclipse, ouvrez <strong>Help → Install New Software…</strong> et ajoutez l'URL.", stepThreeTitle: "Choisir et installer", stepThreeBody: "Choisissez <strong>Java Impact Analyzer</strong>, puis vérifiez licence et certificat.", stepFourTitle: "Redémarrer", stepFourBody: "Redémarrez Eclipse. Les mises à jour suivantes passent par <strong>Check for Updates</strong>.",
    trustLabel: "IDENTITÉ DE VERSION", trustTitle: "Vérifiez le signataire, une fois.", trustBody: "L'installation demande de faire confiance à un certificat. Vérifiez le signataire et l'empreinte avant d'accepter.", signer: "Signataire", fingerprint: "Empreinte SHA-256", trustWarning: "Si un certificat est redemandé après avoir été accepté, arrêtez la mise à jour.",
    unsignedTitle: "Refuser le non-signé", unsignedBody: "Ajoutez cette règle à <code>eclipse.ini</code> pour refuser le contenu non signé.", offlineTitle: "Installation hors ligne", offlineBody: "Sur une machine isolée, choisissez le zip via <strong>Add → Archive…</strong>.", downloadZip: "Télécharger le zip", requirementsTitle: "Prérequis", requirementsBody: "Eclipse 4.27 ou récent, JDK 17 ou récent. Interface en anglais, japonais et chinois.", supportTitle: "Assistance", supportBody: "Joignez la version et les lignes utiles du journal d'erreurs.", closingTitle: "Un outil durable à la fois.", closingBody: "Même avec de nouveaux outils, cet endroit restera calme et lisible.", contact: "Contact",
    srAvailable: "Préversion",
    srBody: "Une revue de code explicable pour les équipes Java et JSF. Elle repère les erreurs de copier-coller, les comparaisons trompeuses et les expressions EL qui visent des membres de bean inexistants — à l’enregistrement, dans les modifications SVN locales ou sur tout le projet — et montre les preuves de chaque signalement.",
    srFeatureOne: "20 règles intégrées : Java, paramètres SQL et XHTML/EL",
    srFeatureTwo: "Revue à l’enregistrement, des modifications SVN ou du projet entier",
    srFeatureThree: "Le moteur tourne sur votre machine ; le code n’en sort pas", srPanelTitle: "EXEMPLES DE SIGNALEMENTS",
    srPanelChip: "à l’enregistrement", srFindOne: "value7 lue pour les éléments 7 et 8", srFindTwo: "objets Integer comparés avec ==",
    srFindThree: "orderForm n’a pas de propriété totl", srRules: "Règles intégrées", srInstallEyebrow: "Obtenir SmartReviewer",
    srInstallTitle: "L’installer dans votre IDE.", srPreviewBadge: "préversion", srRulePackage: "Paquet de règles intégré", srSigned: "version Eclipse signée", srLocalBadge: "le code reste local",
    srStepJavaTitle: "Préparer Java 17",
    srStepJavaBody: "Le moteur de revue tourne dans un processus Java 17+ séparé. IntelliJ IDEA utilise son environnement intégré ; Eclipse et VS Code utilisent le JDK configuré ou <code>JAVA_HOME</code>.",
    srStepEclipseBody: "Ajoutez l’URL dans <strong>Help → Install New Software…</strong>, choisissez <strong>SmartReviewer</strong>, installez et redémarrez.",
    srStepIdeaBody: "Téléchargez le zip et, sans le décompresser, choisissez-le dans <strong>Settings → Plugins → ⚙ → Install Plugin from Disk…</strong>.",
    srStepVscodeBody: "Téléchargez le vsix et choisissez-le dans la vue Extensions via <strong>… → Install from VSIX…</strong>.",
    srDownloadIdea: "Télécharger le plug-in IDEA (zip)", srDownloadVscode: "Télécharger l’extension VS Code (vsix)",
    srTrustTitle: "Même signataire pour Eclipse.",
    srTrustBody: "Les jar Eclipse sont signés avec le même certificat que Java Impact Analyzer. Les paquets IntelliJ IDEA, VS Code et ligne de commande ne sont pas signés : comparez-les aux sommes SHA-256 publiées.",
    srChecksums: "Sommes de contrôle", srCliTitle: "Ligne de commande",
    srCliBody: "Décompressez puis lancez <code>bin/smartreviewer review -p &lt;projet&gt;</code>. Sortie texte, JSON ou SARIF pour les scripts et la CI.",
    srDownloadCli: "Télécharger la CLI (zip)",
    srOfflineBody: "Dans Eclipse, choisissez le zip du site via <strong>Add → Archive…</strong>.",
    srRequirementsBody: "Eclipse 2020-09 (4.17) ou récent, IntelliJ IDEA 2024.1 ou récent (Community ou Ultimate), VS Code 1.85 ou récent ; Java 17 ou récent pour le moteur. La revue des modifications SVN nécessite la commande <code>svn</code>. Interface et messages en anglais, japonais et chinois.",
    srFeedbackTitle: "Retours sur la préversion",
    srFeedbackBody: "Pour un faux positif ou un oubli, indiquez l’ID de la règle, la version et de quel cas il s’agit."
  };

  var ES = {
    skip: "Ir al contenido", navTools: "Herramientas", navPrinciples: "Principios", navInstall: "Instalar",
    heroEyebrow: "Utilidades independientes para desarrollo", heroTitle: "Herramientas serenas para<br><em>trabajos complejos.</em>", heroBody: "Herramientas pequeñas y enfocadas para comprender el código y ver más allá de un cambio. Sin maquinaria innecesaria: una visión más clara del trabajo.",
    exploreTools: "Ver herramientas", visitGithub: "Visitar GitHub", ready: "listo", connections: "4 conexiones trazadas", staysLocal: "datos locales", proofTool: "herramientas disponibles", proofLanguages: "idiomas del sitio", proofNetwork: "red necesaria para el análisis principal", proofNote: "Hecho para un trabajo deliberado y verificable.",
    catalogEyebrow: "La colección", catalogTitle: "Solo lo útil,<br>hecho con cuidado.", catalogBody: "Sunimori Tools no es un único producto: es el hogar de herramientas de desarrollo con una razón clara para existir.", available: "Disponible",
    toolBody: "Sigue el impacto de un método cambiado entre llamadores, pantallas, mappers, SQL, entidades y tablas. El resultado es un informe HTML, Markdown o XLSX portátil.", featureOne: "Impacto de cambios y borrados en un solo flujo", featureTwo: "Desde Java hasta pantallas, mappers, SQL y tablas", featureThree: "Análisis principal local, sin red",
    installNow: "Instalar", sourceCode: "Código fuente", futureTitle: "Espacio para la próxima herramienta.", futureBody: "No añadimos herramientas para llenar una cuadrícula. Solo entran las que reducen claramente la fricción del desarrollo.",
    principlesEyebrow: "Cómo construimos", principlesTitle: "Comportamiento fiable<br>antes que funciones vistosas.", principlesBody: "Una herramienta no sustituye tu criterio; organiza las pruebas que permiten decidir mejor.", principleOneTitle: "Local primero", principleOneBody: "El código sensible no sale del equipo solo para analizarlo. Las funciones principales trabajan sin red.", principleTwoTitle: "Inspeccionable", principleTwoBody: "Se puede ver el resultado y cómo se alcanzó. La ambigüedad y los límites no se ocultan.", principleThreeTitle: "Enfocado", principleThreeBody: "En vez de un producto universal, creamos una herramienta definida que resuelve una tarea difícil hasta el final.",
    installEyebrow: "Obtener Java Impact Analyzer", installTitle: "Instalar en Eclipse.", signed: "firmado", networkOptional: "funciones principales sin red", updateSite: "SITIO DE ACTUALIZACIÓN ECLIPSE", copyHint: "clic para copiar", copy: "Copiar",
    stepOneTitle: "Comprobar la instalación anterior", stepOneBody: "Elimina primero cualquier copia manual del plug-in en <code>eclipse/dropins/</code>.", stepTwoTitle: "Añadir el sitio", stepTwoBody: "En Eclipse, abre <strong>Help → Install New Software…</strong> y añade la URL.", stepThreeTitle: "Elegir e instalar", stepThreeBody: "Elige <strong>Java Impact Analyzer</strong> y revisa licencia y certificado.", stepFourTitle: "Reiniciar", stepFourBody: "Reinicia Eclipse. Las próximas versiones llegan con <strong>Check for Updates</strong>.",
    trustLabel: "IDENTIDAD DE VERSIÓN", trustTitle: "Verifica al firmante una vez.", trustBody: "La instalación pide confiar en un certificado. Confirma el firmante y la huella antes de aceptarlo.", signer: "Firmante", fingerprint: "Huella SHA-256", trustWarning: "Si vuelve a pedir un certificado después de confiar, detén la actualización.",
    unsignedTitle: "Rechazar contenido sin firma", unsignedBody: "Añade la política a <code>eclipse.ini</code> para rechazar contenido sin firma.", offlineTitle: "Instalación sin conexión", offlineBody: "En un equipo aislado, selecciona el zip con <strong>Add → Archive…</strong>.", downloadZip: "Descargar zip", requirementsTitle: "Requisitos", requirementsBody: "Eclipse 4.27 o posterior y JDK 17 o posterior. Interfaz en inglés, japonés y chino.", supportTitle: "Soporte", supportBody: "Incluye la versión y las líneas relevantes del registro de errores.", closingTitle: "Una herramienta duradera cada vez.", closingBody: "Aunque lleguen nuevas herramientas, este seguirá siendo un lugar sereno y legible.", contact: "Contacto",
    srAvailable: "Versión preliminar",
    srBody: "Revisión de código explicable para equipos Java y JSF. Detecta errores de copiar y pegar, comparaciones engañosas y expresiones EL que apuntan a miembros de bean inexistentes —al guardar, en los cambios locales de SVN o en todo el proyecto— y muestra las pruebas de cada aviso.",
    srFeatureOne: "20 reglas integradas: Java, parámetros SQL y XHTML/EL", srFeatureTwo: "Revisión al guardar, de cambios SVN o del proyecto completo",
    srFeatureThree: "El motor se ejecuta en tu equipo; el código no sale de él", srPanelTitle: "EJEMPLOS DE AVISOS", srPanelChip: "al guardar",
    srFindOne: "value7 se lee en los elementos 7 y 8", srFindTwo: "objetos Integer comparados con ==", srFindThree: "orderForm no tiene la propiedad totl",
    srRules: "Reglas integradas", srInstallEyebrow: "Obtener SmartReviewer", srInstallTitle: "Instalar en tu IDE.", srPreviewBadge: "versión preliminar", srRulePackage: "Paquete de reglas integrado",
    srSigned: "versión Eclipse firmada", srLocalBadge: "el código queda en local", srStepJavaTitle: "Preparar Java 17",
    srStepJavaBody: "El motor de revisión se ejecuta en un proceso Java 17+ aparte. IntelliJ IDEA usa su entorno integrado; Eclipse y VS Code usan el JDK configurado o <code>JAVA_HOME</code>.",
    srStepEclipseBody: "Añade la URL en <strong>Help → Install New Software…</strong>, elige <strong>SmartReviewer</strong>, instala y reinicia.",
    srStepIdeaBody: "Descarga el zip y, sin descomprimirlo, elígelo en <strong>Settings → Plugins → ⚙ → Install Plugin from Disk…</strong>.",
    srStepVscodeBody: "Descarga el vsix y elígelo en la vista Extensiones con <strong>… → Install from VSIX…</strong>.",
    srDownloadIdea: "Descargar el plug-in de IDEA (zip)", srDownloadVscode: "Descargar la extensión de VS Code (vsix)",
    srTrustTitle: "Mismo firmante para Eclipse.",
    srTrustBody: "Los jar de Eclipse están firmados con el mismo certificado que Java Impact Analyzer. Los paquetes de IntelliJ IDEA, VS Code y línea de comandos no están firmados: compáralos con las sumas SHA-256 publicadas.",
    srChecksums: "Sumas de verificación", srCliTitle: "Línea de comandos",
    srCliBody: "Descomprime y ejecuta <code>bin/smartreviewer review -p &lt;proyecto&gt;</code>. Salida en texto, JSON o SARIF para scripts y CI.",
    srDownloadCli: "Descargar la CLI (zip)",
    srOfflineBody: "En Eclipse, elige el zip del sitio con <strong>Add → Archive…</strong>.",
    srRequirementsBody: "Eclipse 2020-09 (4.17) o posterior, IntelliJ IDEA 2024.1 o posterior (Community o Ultimate), VS Code 1.85 o posterior; Java 17 o posterior para el motor. Revisar cambios de SVN requiere el comando <code>svn</code>. Interfaz y mensajes en inglés, japonés y chino.",
    srFeedbackTitle: "Comentarios sobre la versión preliminar",
    srFeedbackBody: "Para un falso positivo o un aviso omitido, indica el ID de la regla, la versión y de qué caso se trata."
  };

  var DE = {
    skip: "Zum Inhalt", navTools: "Werkzeuge", navPrinciples: "Prinzipien", navInstall: "Installieren",
    heroEyebrow: "Unabhängige Entwicklerwerkzeuge", heroTitle: "Ruhige Werkzeuge für<br><em>komplexe Arbeit.</em>", heroBody: "Kleine, fokussierte Werkzeuge, um Code zu verstehen und über eine Änderung hinauszublicken. Keine unnötige Maschinerie – nur mehr Klarheit.",
    exploreTools: "Werkzeuge ansehen", visitGithub: "GitHub besuchen", ready: "bereit", connections: "4 Verbindungen verfolgt", staysLocal: "Daten bleiben lokal", proofTool: "verfügbare Werkzeuge", proofLanguages: "Seitensprachen", proofNetwork: "Netz für die Kernanalyse", proofNote: "Für überlegte, nachvollziehbare Arbeit.",
    catalogEyebrow: "Die Werkzeugsammlung", catalogTitle: "Nur was nützlich ist,<br>sorgfältig gemacht.", catalogBody: "Sunimori Tools ist kein einzelnes Produkt, sondern ein Zuhause für klar umrissene Entwicklerwerkzeuge.", available: "Jetzt verfügbar",
    toolBody: "Verfolgt die Wirkung einer geänderten Methode über Aufrufer, Masken, Mapper, SQL, Entitäten und Tabellen. Das Ergebnis ist ein portabler HTML-, Markdown- oder XLSX-Bericht.", featureOne: "Änderungs- und Löschwirkung in einem Ablauf", featureTwo: "Von Java bis Masken, Mapper, SQL und Tabellen", featureThree: "Kernanalyse lokal und ohne Netz",
    installNow: "Installieren", sourceCode: "Quellcode", futureTitle: "Raum für das nächste Werkzeug.", futureBody: "Wir füllen keine Liste um ihrer selbst willen. Nur Werkzeuge, die Reibung klar verringern, kommen hinzu.",
    principlesEyebrow: "Wie wir bauen", principlesTitle: "Verlässliches Verhalten<br>vor auffälligen Funktionen.", principlesBody: "Ein Werkzeug ersetzt nicht Ihr Urteil. Es ordnet die Belege, mit denen Sie besser entscheiden können.", principleOneTitle: "Lokal zuerst", principleOneBody: "Sensibler Code verlässt den Rechner nicht nur zur Analyse. Kernfunktionen arbeiten ohne Netz.", principleTwoTitle: "Nachvollziehbar", principleTwoBody: "Nicht nur das Ergebnis, auch der Weg dorthin ist sichtbar. Unschärfen und Grenzen werden nicht verborgen.", principleThreeTitle: "Fokussiert", principleThreeBody: "Statt eines riesigen Alleskönners entsteht ein klar umrissenes Werkzeug, das eine schwierige Aufgabe zu Ende führt.",
    installEyebrow: "Java Impact Analyzer beziehen", installTitle: "In Eclipse installieren.", signed: "signiert", networkOptional: "Kernfunktionen ohne Netz", updateSite: "ECLIPSE UPDATE-SITE", copyHint: "zum Kopieren klicken", copy: "Kopieren",
    stepOneTitle: "Alte Installation prüfen", stepOneBody: "Entfernen Sie zuerst eine manuell abgelegte Plug-in-Kopie aus <code>eclipse/dropins/</code>.", stepTwoTitle: "Update-Site hinzufügen", stepTwoBody: "Öffnen Sie in Eclipse <strong>Help → Install New Software…</strong> und fügen Sie die URL hinzu.", stepThreeTitle: "Auswählen und installieren", stepThreeBody: "Wählen Sie <strong>Java Impact Analyzer</strong> und prüfen Sie Lizenz und Zertifikat.", stepFourTitle: "Neu starten", stepFourBody: "Starten Sie Eclipse neu. Weitere Versionen kommen über <strong>Check for Updates</strong>.",
    trustLabel: "RELEASE-IDENTITÄT", trustTitle: "Signierer einmal prüfen.", trustBody: "Bei der Installation wird nach Vertrauen in ein Zertifikat gefragt. Prüfen Sie Signierer und Fingerprint.", signer: "Signierer", fingerprint: "SHA-256-Fingerprint", trustWarning: "Wird nach dem Vertrauen erneut ein Zertifikat verlangt, brechen Sie das Update ab.",
    unsignedTitle: "Unsigniertes ablehnen", unsignedBody: "Diese Regel in <code>eclipse.ini</code> lässt unsignierte Inhalte fehlschlagen.", offlineTitle: "Offline installieren", offlineBody: "Auf einem isolierten Rechner das Zip über <strong>Add → Archive…</strong> wählen.", downloadZip: "Update-Site-Zip laden", requirementsTitle: "Voraussetzungen", requirementsBody: "Eclipse 4.27 oder neuer und JDK 17 oder neuer. Oberfläche auf Englisch, Japanisch und Chinesisch.", supportTitle: "Support", supportBody: "Bitte Version und relevante Zeilen des Fehlerprotokolls mitsenden.", closingTitle: "Ein dauerhaftes Werkzeug nach dem anderen.", closingBody: "Auch mit neuen Werkzeugen bleibt dies ein ruhiger, übersichtlicher Ort.", contact: "Kontakt",
    srAvailable: "Vorschau",
    srBody: "Nachvollziehbares Code-Review für Java- und JSF-Teams. Es findet Copy-and-paste-Fehler, irreführende Vergleiche und EL-Ausdrücke, die auf nicht vorhandene Bean-Member zeigen – beim Speichern, in lokalen SVN-Änderungen oder im ganzen Projekt – und zeigt zu jedem Befund die Belege.",
    srFeatureOne: "20 eingebaute Regeln für Java, SQL-Parameter und XHTML/EL",
    srFeatureTwo: "Review beim Speichern, von SVN-Änderungen oder des ganzen Projekts",
    srFeatureThree: "Die Engine läuft auf Ihrem Rechner; der Code verlässt ihn nicht",
    srPanelTitle: "BEISPIELBEFUNDE", srPanelChip: "beim Speichern", srFindOne: "value7 wird für Eintrag 7 und 8 gelesen",
    srFindTwo: "Integer-Objekte mit == verglichen", srFindThree: "orderForm hat keine Eigenschaft totl", srRules: "Eingebaute Regeln",
    srInstallEyebrow: "SmartReviewer beziehen", srInstallTitle: "In Ihrer IDE installieren.", srPreviewBadge: "Vorschau", srRulePackage: "Eingebautes Regelpaket",
    srSigned: "Eclipse-Version signiert", srLocalBadge: "Code bleibt lokal", srStepJavaTitle: "Java 17 bereitstellen",
    srStepJavaBody: "Die Review-Engine läuft als eigener Java-17+-Prozess. IntelliJ IDEA nutzt die mitgelieferte Laufzeit; Eclipse und VS Code nutzen das eingestellte JDK oder <code>JAVA_HOME</code>.",
    srStepEclipseBody: "Fügen Sie die URL unter <strong>Help → Install New Software…</strong> hinzu, wählen Sie <strong>SmartReviewer</strong>, installieren Sie und starten Sie neu.",
    srStepIdeaBody: "Laden Sie das Zip und wählen Sie es, ohne es zu entpacken, unter <strong>Settings → Plugins → ⚙ → Install Plugin from Disk…</strong>.",
    srStepVscodeBody: "Laden Sie die vsix und wählen Sie sie in der Erweiterungsansicht über <strong>… → Install from VSIX…</strong>.",
    srDownloadIdea: "IDEA-Plug-in laden (zip)", srDownloadVscode: "VS-Code-Erweiterung laden (vsix)", srTrustTitle: "Derselbe Signierer für Eclipse.",
    srTrustBody: "Die Eclipse-Jars sind mit demselben Zertifikat signiert wie Java Impact Analyzer. Die Pakete für IntelliJ IDEA, VS Code und die Kommandozeile sind nicht signiert; vergleichen Sie sie mit den veröffentlichten SHA-256-Prüfsummen.",
    srChecksums: "Prüfsummen", srCliTitle: "Kommandozeile",
    srCliBody: "Entpacken und <code>bin/smartreviewer review -p &lt;Projekt&gt;</code> ausführen. Ausgabe als Text, JSON oder SARIF für Skripte und CI.",
    srDownloadCli: "CLI laden (zip)",
    srOfflineBody: "In Eclipse das Update-Site-Zip über <strong>Add → Archive…</strong> wählen.",
    srRequirementsBody: "Eclipse 2020-09 (4.17) oder neuer, IntelliJ IDEA 2024.1 oder neuer (Community oder Ultimate), VS Code 1.85 oder neuer; Java 17 oder neuer für die Engine. Reviews von SVN-Änderungen brauchen den Befehl <code>svn</code>. Oberfläche und Meldungen auf Englisch, Japanisch und Chinesisch.",
    srFeedbackTitle: "Feedback zur Vorschau",
    srFeedbackBody: "Bei Fehlalarmen oder übersehenen Befunden bitte Regel-ID, Version und die Art des Problems angeben."
  };

  var TRANSLATIONS = { en: EN, ja: Object.assign({}, EN, JA), zh: Object.assign({}, EN, ZH), ko: Object.assign({}, EN, KO), fr: Object.assign({}, EN, FR), es: Object.assign({}, EN, ES), de: Object.assign({}, EN, DE) };
  var languageButton = document.getElementById("languageButton");
  var languageMenu = document.getElementById("languageMenu");
  var languageNow = document.getElementById("languageNow");

  LANGUAGES.forEach(function (language) {
    var item = document.createElement("button");
    item.type = "button";
    item.setAttribute("role", "menuitemradio");
    item.dataset.language = language.id;
    item.innerHTML = '<svg class="menu-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="m5 13 4 4L19 7"/></svg><span>' + language.name + '</span><small>' + language.tag + '</small>';
    item.addEventListener("click", function () { chooseLanguage(language.id); closeLanguageMenu(); languageButton.focus(); });
    languageMenu.appendChild(item);
  });

  function applyLanguage(id) {
    var translations = TRANSLATIONS[id] || EN;
    document.documentElement.lang = id;
    document.querySelectorAll("[data-i18n]").forEach(function (element) {
      var value = translations[element.dataset.i18n];
      if (value != null) { element.innerHTML = value; }
    });
    document.querySelectorAll("[data-i18n-title]").forEach(function (element) {
      var value = translations[element.dataset.i18nTitle];
      if (value != null) { element.title = value; element.setAttribute("aria-label", value); }
    });
    var current = LANGUAGES.find(function (language) { return language.id === id; });
    languageNow.textContent = current ? current.name : "English";
    languageMenu.querySelectorAll("button").forEach(function (item) { item.setAttribute("aria-checked", String(item.dataset.language === id)); });
  }

  function chooseLanguage(id) {
    applyLanguage(id);
    try { localStorage.setItem("sunimori.language", id); } catch (ignore) { /* The site remains usable without storage. */ }
  }

  function openLanguageMenu() { languageMenu.classList.add("open"); languageButton.setAttribute("aria-expanded", "true"); }
  function closeLanguageMenu() { languageMenu.classList.remove("open"); languageButton.setAttribute("aria-expanded", "false"); }

  languageButton.addEventListener("click", function (event) { event.stopPropagation(); if (languageMenu.classList.contains("open")) { closeLanguageMenu(); } else { openLanguageMenu(); } });
  document.addEventListener("click", function (event) { if (!languageMenu.contains(event.target) && !languageButton.contains(event.target)) { closeLanguageMenu(); } });
  document.addEventListener("keydown", function (event) { if (event.key === "Escape") { closeLanguageMenu(); } });

  var savedLanguage = null;
  try { savedLanguage = localStorage.getItem("sunimori.language"); } catch (ignore) { /* Use browser language. */ }
  if (!TRANSLATIONS[savedLanguage]) {
    var browserLanguages = (navigator.languages || [navigator.language || "ja"]).map(function (language) { return language.toLowerCase().split("-")[0]; });
    savedLanguage = browserLanguages.find(function (language) { return TRANSLATIONS[language]; }) || "ja";
  }
  applyLanguage(savedLanguage);

  document.querySelectorAll("[data-copy]").forEach(function (button) {
    button.addEventListener("click", function () {
      var source = document.getElementById(button.dataset.copy);
      if (!source) { return; }
      var value = source.textContent.replace(/\s+/g, " ").trim();
      var finish = function () { button.classList.add("copied"); window.setTimeout(function () { button.classList.remove("copied"); }, 1400); };
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(value).then(finish, function () { fallbackCopy(value); finish(); });
      } else {
        fallbackCopy(value); finish();
      }
    });
  });

  function fallbackCopy(value) {
    var textArea = document.createElement("textarea");
    textArea.value = value;
    textArea.setAttribute("readonly", "");
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";
    document.body.appendChild(textArea);
    textArea.select();
    try { document.execCommand("copy"); } catch (ignore) { /* Selection still lets the user copy manually. */ }
    textArea.remove();
  }

  var header = document.getElementById("siteHeader");
  function updateHeader() { header.classList.toggle("scrolled", window.scrollY > 12); }
  window.addEventListener("scroll", updateHeader, { passive: true });
  updateHeader();

  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.documentElement.classList.add("motion-ready");
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) { if (entry.isIntersecting) { entry.target.classList.add("visible"); observer.unobserve(entry.target); } });
    }, { threshold: .08, rootMargin: "0px 0px -35px" });
    reveals.forEach(function (element, index) { element.style.transitionDelay = Math.min(index % 3, 2) * 70 + "ms"; observer.observe(element); });
  } else {
    reveals.forEach(function (element) { element.classList.add("visible"); });
  }

  document.getElementById("year").textContent = String(new Date().getFullYear());

  // The version badges follow the published files, not this page. The strings in
  // the HTML are only fallbacks -- hardcoding them here meant a release could (and
  // did) leave a stale number on the page. Each tool's release writes its own file.
  function showVersion(url, id, badgeId) {
    var versionBadge = document.getElementById(id);
    if (!versionBadge || !window.fetch) { return; }
    fetch(url, { cache: "no-store" })
      .then(function (response) { return response.ok ? response.text() : null; })
      .then(function (text) {
        if (!text) { return; }
        var version = text.trim();
        if (/^[0-9][0-9A-Za-z._-]*$/.test(version)) {
          versionBadge.textContent = version;
          var badge = badgeId && document.getElementById(badgeId);
          if (badge) { badge.hidden = false; }
        }
      })
      .catch(function () { /* keep the fallback text */ });
  }
  showVersion("eclipse/impact-analyzer/version.txt", "plugin-version");
  showVersion("eclipse/smartreviewer/version.txt", "sr-version");
  // The built-in rule package version is written by the SmartReviewer release next to its downloads. The badge stays hidden
  // until the file has been read, so that a missing file never leaves a stale number.
  showVersion("smartreviewer/rule-package.txt", "sr-rule-package", "sr-rule-package-badge");
})();
