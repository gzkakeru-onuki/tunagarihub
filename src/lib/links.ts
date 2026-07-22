/**
 * 外部申込 URL の単一定義モジュール（要件 2.1, 2.6）
 *
 * 申込先 URL（Google フォーム等）は本番運用が確定するまでの間、
 * 暫定 URL を保持する。Header / Hero / CTA / Business から `import { links }` で参照する。
 *
 * 暫定運用メモ:
 *   - 本番 URL が確定したら該当キーを差し替えるだけで全 CTA に反映される。
 *   - 暫定 URL 状態であることはデプロイ前の PR レビューで都度確認すること。
 */

export interface ExternalLinks {
  /** サミット参加申込み（Google フォーム等の外部 URL） */
  readonly summit: string;
  /** 個人メンバー登録申込み（Google フォーム等の外部 URL） */
  readonly member: string;
  /** aisou（株式会社Geek提供）：AI人材マッチング・採用支援サービス紹介ページ */
  readonly aiMatching: string;
  /** 連携・採用・マッチングに関するお問い合わせ／相談フォーム */
  readonly consult: string;
  /** 株式会社Geek コーポレートサイト */
  readonly geek: string;
}

export const links = {
  // TODO(provisional): 本番のサミット申込フォーム URL に差し替える
  summit: 'https://forms.gle/chiyotuna-summit-placeholder',
  // TODO(provisional): 本番のメンバー登録フォーム URL に差し替える
  member: 'https://forms.gle/chiyotuna-member-placeholder',
  // ?ref= は aisou 側の流入元計測（users.signup_ref）に使うため必ず付けたまま運用する
  aiMatching: 'https://aisou.app/?ref=tsunagarihub',
  // TODO(provisional): 連携・相談用フォーム URL に差し替える
  consult: 'https://forms.gle/geek-tsunagari-consult-placeholder',
  // TODO(provisional): 株式会社Geek コーポレートサイト URL に差し替える
  geek: 'https://geek.example.com',
} as const satisfies ExternalLinks;
