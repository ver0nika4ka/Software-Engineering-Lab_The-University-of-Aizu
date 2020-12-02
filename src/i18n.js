import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
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