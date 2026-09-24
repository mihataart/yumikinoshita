# yumikinoshita

`yumi.kanayell.life` — 木下由美（YUMI KINOSHITA）の個人サイト。

もとは [mihataart/kanayell](https://github.com/mihataart/kanayell) の `/yumi/` 以下にあったものを、
サブドメインごとに分けるために独立させたリポジトリ（kanayell / mihata / yumikinoshita の3本）。

- ホスティング：Cloudflare Workers（静的アセットのみ・コードなし）
- 本番ブランチ：`main`

## ディレクトリ構成

```
public/            公開ディレクトリ（wrangler.jsonc の assets.directory）
  index.html        トップ（書く・聞く・結ぶ・推すの4本柱）
  about.html         About
  listen.html        聞く人
  connect.html        結ぶ人
  push.html          推す人
  contact.html         Contact
  write.html         書く人（現在ナビから外れている。ファイルは残すのみ）
  css/style.css
  js/main.js
  images/
  404.html           Not Found ページ（ルート相対パスで記述）
  _redirects         旧 /mihata, /mihata.html → mihata.kanayell.life への301
  robots.txt
  sitemap.xml
wrangler.jsonc      Cloudflare Workers（静的アセット）の設定
package.json / package-lock.json
```

サイト内のリンクのうち、他ホスト（kanayell.life / mihata.kanayell.life）を指すものは
すべて絶対URLで書かれている（サブドメインが分かれているため相対パスが使えない）。

## ローカル確認

```
npm install
npx wrangler dev
```

`http://localhost:8787`（ポートは起動時のログを参照）で表示を確認できる。

## Cloudflare の設定（Workers Builds）

1. Cloudflare ダッシュボード → Workers & Pages → Workers Builds で、このリポジトリ
   （`mihataart/yumikinoshita`）を接続する
2. Worker 名は `yumikinoshita`（**`wrangler.jsonc` の `name` と一致している必要がある**）
3. 本番ブランチ：`main`
4. Build command：空欄（ビルド不要）
5. Deploy command：`npx wrangler deploy`
6. Root directory：空欄（リポジトリ直下）

## カスタムドメイン（yumi.kanayell.life）

デプロイした Worker の設定 → **Domains** タブから `yumi.kanayell.life` を追加する。

- `kanayell.life` のゾーンが Cloudflare 管理下にある必要がある（Workers のカスタムドメインは
  Cloudflare 管理のゾーンにしか付けられない。Pages と違って外部DNSは不可）
- 追加時に既存の CNAME など競合するDNSレコードが残っていないか確認する
