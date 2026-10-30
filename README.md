# 异格 NEON PSYCHE
中文赛博朋克人格测试。30 道原创题，五维分析、四种娱乐人格原型、断点续答、键盘选择、可选音效及文本报告导出。

## 本地运行
从项目目录运行 `python3 -m http.server 8080 --directory dist`，访问 http://localhost:8080 。纯静态，无构建依赖。字体使用 Google Fonts，无法连接时自动回退到系统字体。答案只写入本机 localStorage，无分析追踪或答卷上传。

## 检查
`node tests/check.cjs`

## GitHub Pages
将本目录提交到 GitHub 仓库的 `main` 分支。在仓库 Settings → Pages → Source 选择 **GitHub Actions**。自带 `.github/workflows/pages.yml` 会执行检查并发布 `dist/`。项目使用相对资源路径，可部署在仓库子路径下。

已有 GitHub 登录时，可运行：
```
gh repo create neon-psyche --public --source=. --remote=origin --push
gh api --method POST repos/{owner}/neon-psyche/pages -f build_type=workflow
gh workflow run pages.yml
```
将 `{owner}` 替换为账号名。首次使用前应先执行 `git init -b main` 并提交文件；已有仓库可直接推送。

## 计分说明
每轴六题，三道正向、三道反向。回答 -2 至 +2 乘题目方向后求和，线性映射到 0–100；中立回答映射到 50。45–55 显示为均衡。结果是方向坐标，不是人群百分位。人格原型由行动方式和存在立场组合，解读覆盖五轴。该量表仅供娱乐与自我反思，未经心理测量学验证。
