/**
 * ビジネス（Geek × TSUNAGARI HUB 連携）ページの共有コンテンツ。
 *
 * デザイン3パターン（/business = A 編集紙面 / /business-b = B システム /
 * /business-c = C 対比スプリット）が同じ事実情報を参照し、レイアウトのみ変える。
 * 見出しコピーは各パターンのトーンに合わせて個別に持つ。
 */

export interface Org {
  readonly key: 'hub' | 'geek';
  readonly en: string;
  readonly name: string;
  readonly sub: string;
  readonly role: string;
  readonly body: string;
  readonly points: ReadonlyArray<string>;
  /** セクション画像（public/images/business/ 配下・Unsplash / 自ホスト） */
  readonly img: string;
}

export const orgs: ReadonlyArray<Org> = [
  {
    key: 'hub',
    en: 'Community & Co-Creation',
    name: 'TSUNAGARI HUB project',
    sub: '東京・千代田つながりの場 ―― ちよつな',
    role: 'コミュニティ運営・イベント・ビジネスマッチング・共創支援',
    body: '「人との出会いが人生を豊かにする」を理念に、多世代 × 多国籍 × 多分野の人が交流・学び・支え合い・共創する場を運営。商談ではなく、信頼から始まる本物の関係を育てます。',
    points: [
      '多世代・多国籍・多分野のコミュニティ',
      'イベント／サミットの企画・運営',
      'ビジネスマッチング・共創プロジェクト支援',
    ],
    img: '/images/business/community-group.jpg',
  },
  {
    key: 'geek',
    en: 'AI Talent Matching',
    name: 'aisou',
    sub: '株式会社Geek 提供',
    role: 'AI人材マッチング・採用支援サービス',
    body: 'aisou は、相性・価値観・目的の「シンクロ率」が高いマッチングをAIで実現するサービスです。採用の精度とスピードを高め、企業と人材の最適な出会いを支援。人だけでは出会えなかった組み合わせを見つけ出します。',
    points: [
      'AIによるシンクロ率マッチング',
      '採用支援・人材紹介',
      'あらゆる分野の最適なチームビルディング',
    ],
    img: '/images/business/ai-circuit.jpg',
  },
];

export interface Bridge {
  readonly en: string;
  readonly title: string;
  readonly body: string;
  /** セクション画像（public/images/business/ 配下） */
  readonly img: string;
}

export const bridges: ReadonlyArray<Bridge> = [
  {
    en: 'People × People',
    title: '人と人をつなぐ',
    body: 'コミュニティの信頼関係に、AIのシンクロ率を掛け合わせ、相性・価値観・目的の合う出会いを最適化します。',
    img: '/images/business/people-meeting.jpg',
  },
  {
    en: 'People × Company',
    title: '人と企業をつなぐ',
    body: '出会いの場と採用支援がつながり、企業と人材の高精度なマッチングを実現。採用にとどまらない関係を育てます。',
    img: '/images/business/handshake.jpg',
  },
  {
    en: 'People × AI',
    title: '人とAIをつなぐ',
    body: 'AIが出会いを増幅し、人だけでは出会えなかった組み合わせから、新たな共創とイノベーションを生み出します。',
    img: '/images/business/diverse-people.jpg',
  },
];

/** ダークブロック等の背景に使う画像 */
export const media = {
  syncBg: '/images/business/ai-circuit.jpg',
  ctaBg: '/images/business/coworking-team.jpg',
  feature: '/images/business/business-meeting.jpg',
  network: '/images/business/network-globe.jpg',
} as const;

/** シンクロ率マッチングが活きる分野 */
export const fields: ReadonlyArray<string> = [
  '採用',
  'ビジネス',
  '趣味',
  'チャリティー',
  '地域活動',
];

/** シンクロ率の3軸 */
export const syncAxes: ReadonlyArray<string> = ['相性', '価値観', '目的'];

/** 全パターン共通のクロージング理念 */
export const philosophy = {
  lead: '株式会社Geek だけでなく、さまざまなAIクリエイター・AI開発企業の皆様とも積極的に連携していきます。それぞれの強みを掛け合わせ、人と人、人と企業、人とAIをつなぐ新しい共創を広げ、AIの力でより良い社会・より良い未来を共に創っていけたら嬉しいです。',
  close: '人との出会いが、人生を豊かにする。その出会いを、AIとともに。',
};

/** デザインパターン一覧（スイッチャー用） */
export const patterns = [
  { id: 'a', href: '/business', label: '編集紙面', en: 'Editorial' },
  { id: 'b', href: '/business-b', label: 'システム', en: 'Systemic' },
  { id: 'c', href: '/business-c', label: '対比', en: 'Split' },
] as const;
