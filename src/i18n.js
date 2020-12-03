import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them）
const resources = {
  ja:
  {
    translation:
    {
      // App
      '研究':
        '研究',
      '研究室について':
        '研究室について',
      '卒業テーマ':
        '卒業テーマ',
      '国際交流':
        '国際交流',
      'ニュース':
        'ニュース',
      '論文集':
        '論文集',
      '教育':
        '教育',
      'ITスペシャリストプログラム':
        'ITスペシャリストプログラム',
      'メンバー':
        'メンバー',
      '卒業生':
        '卒業生',
      '学生募集':
        '学生募集',
      '業績':
        '業績',
      '国際学会':
        '国際学会',
      'その他':
        'その他',
      'ギャラリー':
        'ギャラリー',
      '会津大学':
        '会津大学',
      '大学へのアクセス':
        '大学へのアクセス',
      'アクセス統計':
        'アクセス統計',
      '開発者':
        '開発者',
      // Top
      'ソフトウェア工学講座':
        'ソフトウェア工学講座',
      '訪問者数':
        '訪問者数',
      // AboutUs
      'ソフトウェア工学講座について':
        'ソフトウェア工学講座について',
      'イントロダクション':
        'イントロダクション',
      '世界の牽引する各国はコンピュータ工学がグローバル社会において、私たちの暮らし発達に重要な影響があることを理解しています。また、これらの国はこれから迎えるまたは迎えつつある先進技術を育む上でコンピュータ工学は欠かすことができないと認識しています。日本政府も例外ではなく、コンピュータ工学の重要性に理解を進め、2004年10月に':
        '世界の牽引する各国はコンピュータ工学がグローバル社会において、私たちの暮らし発達に重要な影響があることを理解しています。また、これらの国はこれから迎えるまたは迎えつつある先進技術を育む上でコンピュータ工学は欠かすことができないと認識しています。日本政府も例外ではなく、コンピュータ工学の重要性に理解を進め、2004年10月に',
      '独立行政法人 情報処理推進機構':
        '独立行政法人 情報処理推進機構',
      'を立ち上げています。':
        'を立ち上げています。',
      '機構の主な目的として企業、教育機関、また政府機関などの連携を強化し情報技術の先進化を図っています。会津大学のコンピュータ工学研究所もこれに伴い、学生に対し革新的なソフトウェア工学の技術や研究など積極的に推進しています。これからの未来を担う技術者をこの会津大学から輩出し、社会に価値のあるソフトウェアを提供しようと力を入れています。':
        '機構の主な目的として企業、教育機関、また政府機関などの連携を強化し情報技術の先進化を図っています。会津大学のコンピュータ工学研究所もこれに伴い、学生に対し革新的なソフトウェア工学の技術や研究など積極的に推進しています。これからの未来を担う技術者をこの会津大学から輩出し、社会に価値のあるソフトウェアを提供しようと力を入れています。',
      '一般的なコンピュータ・サイエンスの研究は大まかに理論的研究と技術的研究の2つに分類されます。会津大学ソフトウェア工学講座では、それぞれの学生がそれらの研究に取り組んでいます。':
        '一般的なコンピュータ・サイエンスの研究は大まかに理論的研究と技術的研究の2つに分類されます。会津大学ソフトウェア工学講座では、それぞれの学生がそれらの研究に取り組んでいます。',
      '現在、ソフトウェア・アプリケーションの分野またソフトウェア工学の一分野としてウェブ・アプリケーションは注目され成長著しい研究テーマです。私たちの研究室では、この現状を踏まえ学生にインターネット・アプリケーションの構築方法などの知識向上を率先して教えています。':
        '現在、ソフトウェア・アプリケーションの分野またソフトウェア工学の一分野としてウェブ・アプリケーションは注目され成長著しい研究テーマです。私たちの研究室では、この現状を踏まえ学生にインターネット・アプリケーションの構築方法などの知識向上を率先して教えています。',
      'またオンラインで繋がる現社会に向け、ソフトウェア工学分野において知的システムの重要性が増しています。私たちはこのようなシステムの創造的な設計の仕方や実装の仕方などを模索しています。':
        'またオンラインで繋がる現社会に向け、ソフトウェア工学分野において知的システムの重要性が増しています。私たちはこのようなシステムの創造的な設計の仕方や実装の仕方などを模索しています。',
      'ソフトウェア工学研究室の目前の目標として先進的な技術やアプリケーションを開発する専門家を支援することや、研究目的で収集された経験を調査し実験的な工学方法の取り組み、有効的な技術を提供することとしています。これらの研究に対して収集された情報は、これからの研究等にも生かされます。ソフトウェア工学研究室、またその学生による主な研究テーマは以下のようになっています。':
        'ソフトウェア工学研究室の目前の目標として先進的な技術やアプリケーションを開発する専門家を支援することや、研究目的で収集された経験を調査し実験的な工学方法の取り組み、有効的な技術を提供することとしています。これらの研究に対して収集された情報は、これからの研究等にも生かされます。ソフトウェア工学研究室、またその学生による主な研究テーマは以下のようになっています。',
      '意味的論による情報検索':
        '意味的論による情報検索',
      'コンピュータ・セキュリティ':
        'コンピュータ・セキュリティ',
      'インターネット・アプリケーション技術':
        'インターネット・アプリケーション技術',
      '知的システムと学習技術':
        '知的システムと学習技術',
      'クリュエフ教授の指導のもと、意味的論による情報検索やコンピュータ・セキュリティやインターネット・アプリケーション技術の研究を行われています。またハマダ教授のもとでは、知的システムと学習技術の研究が行われています。':
        'クリュエフ教授の指導のもと、意味的論による情報検索やコンピュータ・セキュリティやインターネット・アプリケーション技術の研究を行われています。またハマダ教授のもとでは、知的システムと学習技術の研究が行われています。',
      '新しい傾向として様々なデータを格納できるクラウド技術が、コンピュータに携わる技術者や利用者によって注目を集めています。結果として、インターネットから適切な情報を検索をサポートする知的で意味的な検索技術の需要が急速に高まっています。':
        '新しい傾向として様々なデータを格納できるクラウド技術が、コンピュータに携わる技術者や利用者によって注目を集めています。結果として、インターネットから適切な情報を検索をサポートする知的で意味的な検索技術の需要が急速に高まっています。',
      'さらには、ウェブ・アプリケーションがソフトウェア工学の重要な流行として認識されています。素早い展開とサポートを可能とする技術に焦点を当て研究をしています。':
        'さらには、ウェブ・アプリケーションがソフトウェア工学の重要な流行として認識されています。素早い展開とサポートを可能とする技術に焦点を当て研究をしています。',
      'その他の重要な問題点としてコンピュータ・セキュリティがあります。どのようにデータやプライバシーを保守するのかなど、簡単な解決策がない事柄に対して研究を行っています。':
        'その他の重要な問題点としてコンピュータ・セキュリティがあります。どのようにデータやプライバシーを保守するのかなど、簡単な解決策がない事柄に対して研究を行っています。',
      'さらには今日、人工知能や学習技術に関する理論やアプリケーションは注目度を増しています。':
        'さらには今日、人工知能や学習技術に関する理論やアプリケーションは注目度を増しています。',
      '理由として、新しい言語モデルの設計やナチュラル・コンピューティングや知的教育システムなど様々な分野において人工知能を利用としたプロジェクトが進められているからです。':
        '理由として、新しい言語モデルの設計やナチュラル・コンピューティングや知的教育システムなど様々な分野において人工知能を利用としたプロジェクトが進められているからです。',
      '学習システムの研究は現代の科学者に需要の高い効率的な学習に重きをおいています。新しい人工知能を生かしたソフトウェアを利用する技術や方法論、または教育を補助するなど様々な可能性を秘めています。':
        '学習システムの研究は現代の科学者に需要の高い効率的な学習に重きをおいています。新しい人工知能を生かしたソフトウェアを利用する技術や方法論、または教育を補助するなど様々な可能性を秘めています。',
      'ソフトウェア工学研究室ではこれらの実験的な技術開発に力を入れ、研究室の学生を含めこれらのテーマに基づいて研究を行っています。':
        'ソフトウェア工学研究室ではこれらの実験的な技術開発に力を入れ、研究室の学生を含めこれらのテーマに基づいて研究を行っています。',
      // GraduationResearchThemes
      'クリューエフ研の研究内容':
        'クリューエフ研の研究内容',
      '知能システムの構築':
        '知能システムの構築',
      '実践的情報セキュリティ':
        '実践的情報セキュリティ',
      '情報セキュリティは、コンピュータセキュリティにおいて特にインターネットと関連した分野です。その目的は、インターネットに対する攻撃についての防御の手法やルールについての確立です。私たちの研究の目的は、インターネット対する様々な異なる攻撃手法やその防御方法について研究することです。':
        '情報セキュリティは、コンピュータセキュリティにおいて特にインターネットと関連した分野です。その目的は、インターネットに対する攻撃についての防御の手法やルールについての確立です。私たちの研究の目的は、インターネット対する様々な異なる攻撃手法やその防御方法について研究することです。',
      'ハマダ研の研究内容':
        'ハマダ研の研究内容',
      '提案されたプロジェクト':
        '提案されたプロジェクト',
      '知的双方向的マルチメディア学習フレームワーク':
        '知的双方向的マルチメディア学習フレームワーク',
      'スマートメディアシステムに基づいた推薦システム':
        'スマートメディアシステムに基づいた推薦システム',
      '最適学習フレームワーク':
        '最適学習フレームワーク',
      'このプロジェクトは主に3つに分けられます。':
        'このプロジェクトは主に3つに分けられます。',
      '人工知能を用いた顔認識システム':
        '人工知能を用いた顔認識システム',
      'マルチメディア学習モジュール':
        'マルチメディア学習モジュール',
      'モジュールの学習スタイル':
        'モジュールの学習スタイル',
      'スライドを入手する':
        'スライドを入手する',
      // InternationalRelations
      'ソフトウェア工学の研究室では多々の大学と協力のもと共同研究や教育にも力を入れています。':
        'ソフトウェア工学の研究室では多々の大学と協力のもと共同研究や教育にも力を入れています。',
      'サンクトペテルブルク国立大学（Saint-Petersburg State University）':
        'サンクトペテルブルク国立大学（Saint-Petersburg State University）',
      ' や ':
        ' や ',
      'サンクトペテルブルク工科大学（Peter the Great Saint-Petersburg Polytechnic University）':
        'サンクトペテルブルク工科大学（Peter the Great Saint-Petersburg Polytechnic University）',
      'などと協力しています。':
        'などと協力しています。',
      '私たちは協力関係にあるロシアの大学と交換留学の枠を設けています。2006年から始まったこのプログラムは毎年1人から2人の学生をロシアのサンクトペテルブルク国立大学へと送り毎年開催される':
        '私たちは協力関係にあるロシアの大学と交換留学の枠を設けています。2006年から始まったこのプログラムは毎年1人から2人の学生をロシアのサンクトペテルブルク国立大学へと送り毎年開催される',
      '国際学会（the Annual Conference on Control Processes and Stability）':
        '国際学会（the Annual Conference on Control Processes and Stability）',
      'にて論文の発表を行っています。また、ロシアの学生は会津大学で行われるイベント等に積極的に参加しています。':
        'にて論文の発表を行っています。また、ロシアの学生は会津大学で行われるイベント等に積極的に参加しています。',
      '共同研究のグループは':
        '共同研究のグループは',
      '情報検索やソフトウェア工学の分野':
        '情報検索やソフトウェア工学の分野',
      'において研究を行っています。':
        'において研究を行っています。',
      '留学生の受け入れ':
        '留学生の受け入れ',
      '2015年~2017年には中国、ロシア、ベラルーシからの学生が私たちの研究室メンバーとなりました。 ロシアそしてベラルーシからの学生は、日本大使館そして大学の推薦により海外学生のための日本政府の奨学金制度を受けています。 中国からの学生は':
        '2015年~2017年には中国、ロシア、ベラルーシからの学生が私たちの研究室メンバーとなりました。 ロシアそしてベラルーシからの学生は、日本大使館そして大学の推薦により海外学生のための日本政府の奨学金制度を受けています。 中国からの学生は',
      'Global Educational Program':
        'Global Educational Program',
      'を受けています。':
        'を受けています。',
      '2010年から始まった、':
        '2010年から始まった、',
      '台湾の朝陽科技大学（Chaoyang University of Technolog）':
        '台湾の朝陽科技大学（Chaoyang University of Technolog）',
      'から数名の大学院生を対象にしたプログラム（Dual - Degree Program）が実施されています。このプログラムは生徒が生徒自身が通う大学と留学先の大学の両大学で単位を取得でき、両大学共同の目的や認識を深めようというものです。また、国際的な交流や長期的な関係性を築こうといったプログラムでもあります。国際的な本プログラムは2009年に朝陽科技大学と覚書を交わしました。':
        'から数名の大学院生を対象にしたプログラム（Dual - Degree Program）が実施されています。このプログラムは生徒が生徒自身が通う大学と留学先の大学の両大学で単位を取得でき、両大学共同の目的や認識を深めようというものです。また、国際的な交流や長期的な関係性を築こうといったプログラムでもあります。国際的な本プログラムは2009年に朝陽科技大学と覚書を交わしました。',
      // Publications
      '指導教員':
        '指導教員',
      'ヴィタリー・クリューエフ 教授':
        'ヴィタリー・クリューエフ 教授',
      'エフゲニー・ピシキン 教授':
        'エフゲニー・ピシキン 教授',
      'モハメド・ハマダ 教授':
        'モハメド・ハマダ 教授',
      '学生による論文':
        '学生による論文',
      // ItSpecialistProgram
      'Program for Leading Edge IT Specialists':
        'Program for Leading Edge IT Specialists',
      '2007年、Program for Leading Edge IT Specialistsに参加し、研究室の学生に対して、検索エンジンの一般的な目的のためのツールのまとめるように提案しました。学期ごとの教育や研究は私たちに取って新しいスタイルであり、最初のグループは日本人とロシア人で構成され、彼らは2009年秋にこのプログラムを成功させました。':
        '2007年、Program for Leading Edge IT Specialistsに参加し、研究室の学生に対して、検索エンジンの一般的な目的のためのツールのまとめるように提案しました。学期ごとの教育や研究は私たちに取って新しいスタイルであり、最初のグループは日本人とロシア人で構成され、彼らは2009年秋にこのプログラムを成功させました。',
      '修士論文口頭発表会':
        '修士論文口頭発表会',
      '教育方法の主な特徴':
        '教育方法の主な特徴',
      'プロジェクトは個人とグループワークの2種類ある。':
        'プロジェクトは個人とグループワークの2種類ある。',
      'それぞれのチームメンバーはトピック決定の責任がある。':
        'それぞれのチームメンバーはトピック決定の責任がある。',
      '週に一度、チームメンバーはそれぞれの担当分野の進捗状況について報告する。':
        '週に一度、チームメンバーはそれぞれの担当分野の進捗状況について報告する。',
      'プロジェクトマネージャーは交代制。それぞれのチームメンバーの役割は月ごとに変わる。':
        'プロジェクトマネージャーは交代制。それぞれのチームメンバーの役割は月ごとに変わる。',
      'ソフトウェアエンジニアは2人。彼らはプログラミングコードを書いたりソフトウェアに関連したことについての責任を持つ。':
        'ソフトウェアエンジニアは2人。彼らはプログラミングコードを書いたりソフトウェアに関連したことについての責任を持つ。',
      '残り一人はマネージャーになり、プロジェクトの進行具合などを管理する。':
        '残り一人はマネージャーになり、プロジェクトの進行具合などを管理する。',
      '月に一度、それぞれの役割は交代し、三ヶ月後には全てのメンバーが全ての役割を経験する。':
        '月に一度、それぞれの役割は交代し、三ヶ月後には全てのメンバーが全ての役割を経験する。',
      '特別活動の役割。私たちは3つのタイプの活動について開拓した。':
        '特別活動の役割。私たちは3つのタイプの活動について開拓した。',
      'お茶会。私たちのコンサルタント兼プロジェクトの評価担当者であるNygard教授とSifer教授とのミーティングをリラックスした環境でおこなった。':
        'お茶会。私たちのコンサルタント兼プロジェクトの評価担当者であるNygard教授とSifer教授とのミーティングをリラックスした環境でおこなった。',
      '国際学会への参加。全てのメンバーは海外で行われた国際学会にて口頭発表を行った。':
        '国際学会への参加。全てのメンバーは海外で行われた国際学会にて口頭発表を行った。',
      '週ごとのグループミーティング。議論中の積極的な批評。':
        '週ごとのグループミーティング。議論中の積極的な批評。',
      '私たちが考慮すべき課題':
        '私たちが考慮すべき課題',
      'それぞれのメンバーの今までの経歴':
        'それぞれのメンバーの今までの経歴',
      '研究者としての学生の育成':
        '研究者としての学生の育成',
      '評価':
        '評価',
      '自己組織化':
        '自己組織化',
      '就職活動':
        '就職活動',
      '2009年8月13日に行われた修士論文発表会にて、指導担当者による批評と共に完結した。発表資料については以下のリンクからダウンロードできます。':
        '2009年8月13日に行われた修士論文発表会にて、指導担当者による批評と共に完結した。発表資料については以下のリンクからダウンロードできます。',
      // Members
      '学生': '学生',
      // Gaduated
      '修士課程': '修士課程',
      '学部': '学部',
      // ProspectiveStudents
      'ソフトウェア工学講座は、ソフトウェア工学に興味がある学生を募集しています!': 'ソフトウェア工学講座は、ソフトウェア工学に興味がある学生を募集しています!',
      'やる気に満ち溢れている': 'やる気に満ち溢れている',
      'ソフトウェアエンジニアになりたい': 'ソフトウェアエンジニアになりたい',
      '自分の力を発揮したい': '自分の力を発揮したい',
      '新しい事を発見したい': '新しい事を発見したい',
      '学生は大歓迎です！': '学生は大歓迎です！',
      '研究室のより詳細な情報は': '研究室のより詳細な情報は',
      'ここ': 'ここ',
      'をクリックしてください。': 'をクリックしてください。',
      '*資料は英語のみです。': '*資料は英語のみです。',
    },
  },
  en:
  {
    translation:
    {
      '研究':
        'Reserch',
      '研究室について':
        'About us',
      '卒業テーマ':
        'Graduation Research Themes',
      '国際交流':
        'International Relations',
      'ニュース':
        'News',
      '論文集':
        'Publication List',
      '教育':
        'Education',
      'ITスペシャリストプログラム':
        'IT Specialist Program',
      'メンバー':
        'Members',
      '卒業生':
        'Graduated Members',
      '学生募集':
        'Prospective Students',
      '業績':
        'Achievements',
      '国際学会':
        'Conferences and Workshops',
      'その他':
        'Others',
      'ギャラリー':
        'Gallery',
      '会津大学':
        'The University of Aizu',
      '大学へのアクセス':
        'Access',
      'アクセス統計':
        'Statistics',
      '開発者':
        'Developers',
      // Top
      'ソフトウェア工学講座':
        'Software Engineering Lab',
      '訪問者数':
        'Number of visitors',
      // AboutUs
      'ソフトウェア工学講座について':
        'About us',
      'イントロダクション':
        'Introduction',
      '世界の牽引する各国はコンピュータ工学がグローバル社会において、私たちの暮らし発達に重要な影響があることを理解しています。また、これらの国はこれから迎えるまたは迎えつつある先進技術を育む上でコンピュータ工学は欠かすことができないと認識しています。日本政府も例外ではなく、コンピュータ工学の重要性に理解を進め、2004年10月に':
        'The leading industrial countries in the world understand that computer software has become a critical element of the global society influencing virtually every aspect of human life. They consider Software Engineering as the key technology of 21st century. The Japanese government understood the significance of Software Engineering and in October 2004 established the Software Engineering Center as a structure of',
      '独立行政法人 情報処理推進機構':
        'The Information-technology Promotion Agency',
      'を立ち上げています。':
        "The task of this center is to coordinate the efforts of industry, academia and government organizations to become the world's most advanced information technology nation.",
      '機構の主な目的として企業、教育機関、また政府機関などの連携を強化し情報技術の先進化を図っています。会津大学のコンピュータ工学研究所もこれに伴い、学生に対し革新的なソフトウェア工学の技術や研究など積極的に推進しています。これからの未来を担う技術者をこの会津大学から輩出し、社会に価値のあるソフトウェアを提供しようと力を入れています。':
        'The mission of the Software Engineering Laboratory of the University of Aizu is to provide students with innovative software engineering research methods and processes and to graduate specialists able to professionally develop and deploy the valued software.',
      '一般的なコンピュータ・サイエンスの研究は大まかに理論的研究と技術的研究の2つに分類されます。会津大学ソフトウェア工学講座では、それぞれの学生がそれらの研究に取り組んでいます。':
        'The basic concept of our investigation can be defined as follows:If research in computer science can be categorized as either science or technology, our research focuses on science which is the analysis of natural phenomena.',
      '現在、ソフトウェア・アプリケーションの分野またソフトウェア工学の一分野としてウェブ・アプリケーションは注目され成長著しい研究テーマです。私たちの研究室では、この現状を踏まえ学生にインターネット・アプリケーションの構築方法などの知識向上を率先して教えています。':
        'Web applications are the current priority of software applications and the corresponding branch of software engineering is growing very fast. Our laboratory exploits this tendency and teach our software engineering students how to develop Internet applications. Intelligent systems are crucial components of software dedicated for online communities. We explore how to creatively design and implement such systems.',
      'またオンラインで繋がる現社会に向け、ソフトウェア工学分野において知的システムの重要性が増しています。私たちはこのようなシステムの創造的な設計の仕方や実装の仕方などを模索しています。':
        'The immediate goal of the Software Engineering Lab is to support specialists who develop new technologies for the newer applications, to test obtained by them results in controlled experiments and offer successful technologies for use after conducting joint trial engineering experiments. Feedback at every step helps improve our research and learning.',
      'ソフトウェア工学研究室の目前の目標として先進的な技術やアプリケーションを開発する専門家を支援することや、研究目的で収集された経験を調査し実験的な工学方法の取り組み、有効的な技術を提供することとしています。これらの研究に対して収集された情報は、これからの研究等にも生かされます。ソフトウェア工学研究室、またその学生による主な研究テーマは以下のようになっています。':
        'The main directions in research conducted by the Software Engineering Lab members are',
      '意味的論による情報検索':
        'Semantic Methods for Information Retrieval',
      'コンピュータ・セキュリティ':
        'Computer Security',
      'インターネット・アプリケーション技術':
        'Technologies for Internet Applications',
      '知的システムと学習技術':
        'Intelligent Systems and Learning Technologies',
      'クリュエフ教授の指導のもと、意味的論による情報検索やコンピュータ・セキュリティやインターネット・アプリケーション技術の研究を行われています。またハマダ教授のもとでは、知的システムと学習技術の研究が行われています。':
        'Prof. Klyuev leads the Semantic Methods for Information Retrieval, Computer Security and Technologies for Internet Applications directions. The focus of the research by Prof. Hamada is on Intelligent Systems and Learning Technologies.',
      '新しい傾向として様々なデータを格納できるクラウド技術が、コンピュータに携わる技術者や利用者によって注目を集めています。結果として、インターネットから適切な情報を検索をサポートする知的で意味的な検索技術の需要が急速に高まっています。':
        'A new trend in computer technologies to store all the data in the cloud is rapidly gaining popularity among computer manufactures, operating systems developers, and users. As a result, there is a strong demand for intelligent semantic search technologies supporting retrieval of appropriate information from the Internet.',
      'さらには、ウェブ・アプリケーションがソフトウェア工学の重要な流行として認識されています。素早い展開とサポートを可能とする技術に焦点を当て研究をしています。':
        'Application running on the Web is the main trend in Software Engineering. Agility in the development and supporting technologies are in the focus of investigation.',
      'その他の重要な問題点としてコンピュータ・セキュリティがあります。どのようにデータやプライバシーを保守するのかなど、簡単な解決策がない事柄に対して研究を行っています。':
        'Another important issue is computer security:How to protect your data, and your privacy? It is not easy to find answers to these questions.',
      'さらには今日、人工知能や学習技術に関する理論やアプリケーションは注目度を増しています。':
        'Artificial intelligence and learning technologies both theoretical and applications are gained popularity nowadays.',
      '理由として、新しい言語モデルの設計やナチュラル・コンピューティングや知的教育システムなど様々な分野において人工知能を利用としたプロジェクトが進められているからです。':
        'For AI projects the focus lab research is on designing new language models, natural inspired computation models and intelligent tutoring systems.',
      '学習システムの研究は現代の科学者に需要の高い効率的な学習に重きをおいています。新しい人工知能を生かしたソフトウェアを利用する技術や方法論、または教育を補助するなど様々な可能性を秘めています。':
        'Learning technologies research aims at efficient learning which is highly demanded by modern societies. New technologies utilizing intelligent computer software, methodology, and experience of tutors may be very helpful in learning processes. Software Engineering Lab works on these technologies proposing prototypes of new systems.',
      'ソフトウェア工学研究室ではこれらの実験的な技術開発に力を入れ、研究室の学生を含めこれらのテーマに基づいて研究を行っています。':
        'These topics are under our investigation. Lab students are involved in this research.',
      // GraduationResearchThemes
      'クリューエフ研の研究内容':
        'Prof. Klyuev: Research Directions',
      '知能システムの構築':
        'Intelligent systems',
      '実践的情報セキュリティ':
        'Practical Internet Security',
      '情報セキュリティは、コンピュータセキュリティにおいて特にインターネットと関連した分野です。その目的は、インターネットに対する攻撃についての防御の手法やルールについての確立です。私たちの研究の目的は、インターネット対する様々な異なる攻撃手法やその防御方法について研究することです。':
        'Internet security is a branch of computer security specifically related to the Internet. Its objective is to establish rules and measures to use against attacks over the Internet. The aim of this research is to study different types of security, ways to attack Internet gadgets, modern tools to use against attacks, etc.',
      'ハマダ研の研究内容':
        'Prof. Hamada: Research Directions',
      '提案されたプロジェクト':
        'Proposed projects',
      '知的双方向的マルチメディア学習フレームワーク':
        'Intelligent Interactive Multimadia Learnig Framework',
      'スマートメディアシステムに基づいた推薦システム':
        'A Smart media-based recommendation system',
      '最適学習フレームワーク':
        'Adaptive Learnig Framework',
      'このプロジェクトは主に3つに分けられます。':
        'The project will consists of 3 basic modules:',
      '人工知能を用いた顔認識システム':
        'Artificial Intelligence: Facial recognition',
      'マルチメディア学習モジュール':
        'Multimedia Learnig Module',
      'モジュールの学習スタイル':
        'Learnig Style Module',
      'スライドを入手する':
        'Chick here to get the slides',
      // InternationalRelations
      'ソフトウェア工学の研究室では多々の大学と協力のもと共同研究や教育にも力を入れています。':
        'Software Engineering Lab is responsible for coordination joint research and education projects with partner universities: ',
      'サンクトペテルブルク国立大学（Saint-Petersburg State University）':
        'Saint-Petersburg State University',
      ' や ':
        ' and ',
      'サンクトペテルブルク工科大学（Peter the Great Saint-Petersburg Polytechnic University）':
        'Peter the Great Saint-Petersburg Polytechnic University',
      'などと協力しています。':
        '.',
      '私たちは協力関係にあるロシアの大学と交換留学の枠を設けています。2006年から始まったこのプログラムは毎年1人から2人の学生をロシアのサンクトペテルブルク国立大学へと送り毎年開催される':
        'We established mutually beneficial exchange relationships with our Russian partners: Every year, beginning from 2006, we dispatch one – two our best students to Saint-Petersburg, Russia to present their papers at ',
      '国際学会（the Annual Conference on Control Processes and Stability）':
        'the Annual Conference on Control Processes and Stability. ',
      'にて論文の発表を行っています。また、ロシアの学生は会津大学で行われるイベント等に積極的に参加しています。':
        'Russian students actively participate in scientific events organized by our university.',
      '共同研究のグループは':
        'The joint research group actively works in the area of ',
      '情報検索やソフトウェア工学の分野':
        'Information Retrieval and Software Engineering',
      'において研究を行っています。':
        '.',
      '留学生の受け入れ':
        'Foreign Students',
      '2015年~2017年には中国、ロシア、ベラルーシからの学生が私たちの研究室メンバーとなりました。 ロシアそしてベラルーシからの学生は、日本大使館そして大学の推薦により海外学生のための日本政府の奨学金制度を受けています。 中国からの学生は':
        'In 2015 - 2017, international students from China, Russia and Belarus become lab members. Students from Russia and Belarus are successful applicants for the Japanese Government Scholarship Program for the International students through the recommendation by the universities and by the Japanese embassies. Students from China are successful applicant for ',
      'Global Educational Program':
        'the Global Educational Program',
      'を受けています。':
        '.',
      '2010年から始まった、':
        'Beginning from 2010, several master student from ',
      '台湾の朝陽科技大学（Chaoyang University of Technolog）':
        ' Chaoyang University of Technology, ',
      'から数名の大学院生を対象にしたプログラム（Dual - Degree Program）が実施されています。このプログラムは生徒が生徒自身が通う大学と留学先の大学の両大学で単位を取得でき、両大学共同の目的や認識を深めようというものです。また、国際的な交流や長期的な関係性を築こうといったプログラムでもあります。国際的な本プログラムは2009年に朝陽科技大学と覚書を交わしました。':
        'Taiwan, have been enrolled in the dual-degree program (DDP). A DDP is a system where students can earn two degrees, from the home and the partner university through mutual recognition of credits attained at the universities, and the goal of the program includes fostering excellent human resources educated internationally, as well as strengthening relations between partner universities through concrete exchanges. The Memorandum of Understanding establishing the international dual degree program for students of our university and Chaoyang University of Technology was concluded in 2009.',
      // Publications
      '指導教員':
        'Professors',
      'ヴィタリー・クリューエフ 教授':
        'Prof. Vitaly Klyuev',
      'エフゲニー・ピシキン 教授':
        'Prof. Evgeny Pyshkin',
      'モハメド・ハマダ 教授':
        'Prof. Mohamed Hamada',
      '学生による論文':
        'Publications by students',
      // ItSpecialistProgram
      'Program for Leading Edge IT Specialists':
        'Program for Leading Edge IT Specialists',
      '2007年、Program for Leading Edge IT Specialistsに参加し、研究室の学生に対して、検索エンジンの一般的な目的のためのツールのまとめるように提案しました。学期ごとの教育や研究は私たちに取って新しいスタイルであり、最初のグループは日本人とロシア人で構成され、彼らは2009年秋にこのプログラムを成功させました。':
        'Software Engineering Lab joined the Program for Leading Edge IT Specialists organized by our university in 2007. We offered students a project on Summarizing Tools for General Purpose Search Engines. A team-based way of education and research is a new style of teaching for us. The first international group of students consisting of Japanese and Russian students successfully completed the program of the study in the autumn of 2009.',
      '修士論文口頭発表会':
        'Master Thesis Presentation',
      '教育方法の主な特徴':
        'Distinguished characteristics of the teaching:',
      'プロジェクトは個人とグループワークの2種類ある。':
        'The project combined individual and group work.',
      'それぞれのチームメンバーはトピック決定の責任がある。':
        'Each team member was responsible for a dedicated topic.',
      '週に一度、チームメンバーはそれぞれの担当分野の進捗状況について報告する。':
        'Once a week, each team member reported about his/her individual work and took part in discussions.',
      'プロジェクトマネージャーは交代制。それぞれのチームメンバーの役割は月ごとに変わる。':
        'Rotation of Project Manager Position. The role of each team member for each month:',
      'ソフトウェアエンジニアは2人。彼らはプログラミングコードを書いたりソフトウェアに関連したことについての責任を持つ。':
        'Two members were software engineers: They were responsible for coding and they prepared other materials related to software development.',
      '残り一人はマネージャーになり、プロジェクトの進行具合などを管理する。':
        'One team member was a manager: He was responsible for the management of the project.',
      '月に一度、それぞれの役割は交代し、三ヶ月後には全てのメンバーが全ての役割を経験する。':
        'Once a month, the functional roles were rotated, so once in three months, everyone was responsible for the management activity.',
      '特別活動の役割。私たちは3つのタイプの活動について開拓した。':
        'Role of the Special Activities. We pioneered in three types of activities.',
      'お茶会。私たちのコンサルタント兼プロジェクトの評価担当者であるNygard教授とSifer教授とのミーティングをリラックスした環境でおこなった。':
        'Tea seminars: Series of meetings with our consulters and evaluators (Prof. Kendall E. Nygard, USA and Prof. Mark Sifer, Australia) and with our partner team in the relaxing atmosphere.',
      '国際学会への参加。全てのメンバーは海外で行われた国際学会にて口頭発表を行った。':
        'Conference participation: Every member presented a talk at the international conference overseas.',
      '週ごとのグループミーティング。議論中の積極的な批評。':
        'Weekly group meetings: Strong internal criticism during discussions.',
      '私たちが考慮すべき課題':
        'Lessons Learned. The problems which should be taken into account our successors:',
      'それぞれのメンバーの今までの経歴':
        'Background of each member',
      '研究者としての学生の育成':
        'Development of the students as independent researchers',
      '評価':
        'Assessment',
      '自己組織化':
        'Self-organizing team',
      '就職活動':
        'Job hunting',
      '2009年8月13日に行われた修士論文発表会にて、指導担当者による批評と共に完結した。発表資料については以下のリンクからダウンロードできます。':
        'Concluding remarks by Coach on the day of Master Thesis Presentation, August 13, 2009. Download',
      // Members
      '学生': 'Students',
      // Gaduated
      '修士課程': 'Masters Degree',
      '学部': 'Bachelors Degree',
      // ProspectiveStudents
      'ソフトウェア工学講座は、ソフトウェア工学に興味がある学生を募集しています!': 'Software Engineering Lab is looking for students who are interested in Software Engineering for Internet Applications.',
      'やる気に満ち溢れている': 'If you are ambitious...',
      'ソフトウェアエンジニアになりたい': 'If you would like to be a real software engineer...',
      '自分の力を発揮したい': 'If you prefer to work hard...',
      '新しい事を発見したい': 'If you are interested in discovering scientific world...',
      '学生は大歓迎です！': 'You are welcome to join Software Enginering Lab!',
      '研究室のより詳細な情報は': 'Click ',
      'ここ': 'here ',
      'をクリックしてください。': 'for more details!',
      '*資料は英語のみです。': '',
    },
  },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    lng:
      "ja",

    keySeparator:
      false, // we do not use keys in form messages.welcome

    interpolation:
    {
      escapeValue:
        false // react already safes from xss
    }
  });

export default i18n;