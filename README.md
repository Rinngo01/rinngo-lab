# Rinngo Lab

用 AI 协作，把想法做成可运行的作品。

个人 AI 编程作品集站点（Astro 静态站），展示在线文档系统、工单管理看板、抖音视频批量下载等实践。

## 本地开发

```bash
npm install
npm run dev
```

访问 `http://localhost:4321`

## 构建

```bash
npm run build
npm run preview
```

## 部署

### GitHub Pages（国内主推）

1. 将仓库推送到 GitHub（建议名：`rinngo-lab`）
2. **Settings → Pages → Source** 选择 **GitHub Actions**
3. 推送 `main` / `master` 后，Actions 会以 `GITHUB_PAGES=true` 构建并发布  
   预览地址形如：`https://rinngo01.github.io/rinngo-lab/`

### Vercel（国际 / 备用）

1. 导入同一仓库，Framework Preset 选 Astro
2. 不设置 `GITHUB_PAGES`，站点以根路径 `/` 部署
3. 国内访问 `*.vercel.app` 可能较慢，可作备用通道

## 内容维护

- 作品：`src/content/works/*.md`
- 博客：`src/content/posts/*.md`

## 项目文档

更多说明见 [docs/README.md](docs/README.md)。
