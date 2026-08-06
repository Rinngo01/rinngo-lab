# AI 编程作品博客（Rinngo Lab）

用 AI 协作，把想法做成可运行的作品。

## 快速入口

- 本地：`npm install` → `npm run dev`
- 技术栈：Astro 5 + Markdown Content Collections
- 部署：GitHub Pages（`base=/rinngo-lab/`）+ Vercel（`base=/`）
- 风格：浅色简洁（青绿强调色）

## 页面

| 路径 | 说明 |
|------|------|
| `/` | 首页：品牌 + 精选作品 |
| `/works/` | 作品列表 |
| `/works/[slug]/` | 作品详情 |
| `/blog/` | 博客列表 |
| `/blog/[slug]/` | 文章详情 |
| `/about/` | 关于 |

## 目录说明

| 目录 | 用途 |
|------|------|
| `src/content/` | 作品与博客 Markdown |
| `src/pages/` | 路由页面 |
| `src/components/` | 导航、页脚、作品条目 |
| `assets/` | 原始截图 / 设计稿 |
| `docs/` | 项目文档 |
| `notes/` | 设计决策 |

## 首批作品

1. 在线文档系统
2. 工单管理看板
3. 抖音视频批量下载
