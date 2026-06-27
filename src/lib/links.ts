/**
 * 外部申込 URL の単一定義モジュール（要件 2.1, 2.6）
 *
 * 申込先 URL（Google フォーム等）は本番運用が確定するまでの間、
 * 暫定 URL を保持する。Header / Hero / CTA から `import { links }` で参照する。
 *
 * 暫定運用メモ:
 *   - 本番 URL が確定したら `summit` / `member` を差し替えるだけで全 CTA に反映される。
 *   - 暫定 URL 状態であることはデプロイ前の PR レビューで都度確認すること。
 */

export interface ExternalLinks {
  /** サミット参加申込み（Google フォーム等の外部 URL） */
  readonly summit: string;
  /** 個人メンバー登録申込み（Google フォーム等の外部 URL） */
  readonly member: string;
}

export const links = {
  // TODO(provisional): 本番のサミット申込フォーム URL に差し替える
  summit: 'https://forms.gle/chiyotuna-summit-placeholder',
  // TODO(provisional): 本番のメンバー登録フォーム URL に差し替える
  member: 'https://forms.gle/chiyotuna-member-placeholder',
} as const satisfies ExternalLinks;
