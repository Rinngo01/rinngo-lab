---
title: 在线文档系统
summary: 协作型在线文档：富文本编辑、实时协同、云盘与分享、评论与历史版本，覆盖从写作到协作的完整链路。
tags: [全栈, 协作文档, AI 辅助]
tech: [Vue 3, TipTap, Yjs, Element Plus, Vite]
repo: https://github.com/Rinngo01/online-doc-collab
featured: true
order: 1
date: 2026-06-01
---

## 项目简介

在线文档系统面向多人协作写作场景，提供工作区、云盘、模板中心、回收站与个人中心等模块。编辑器基于 TipTap，并通过 Yjs 实现实时协同与光标感知。

## AI 协作要点

- 用 AI 快速搭建页面骨架与路由结构，再按业务模块逐段验收
- 协作编辑、评论、分享、版本历史等复杂交互拆成小任务分别生成与复核
- 论文/演示截图用 Playwright 脚本批量采集，保证交付材料可复现

## 核心能力

- 富文本编辑：标题、高亮、对齐、链接、图片等
- 实时协作：Yjs + WebSocket，多人同时编辑
- 文档生命周期：分享、评论、历史版本、模板复用
- 云盘与回收站：文档组织与误删恢复

## 技术栈

| 类别 | 选型 |
|------|------|
| 前端 | Vue 3 + Vite + Pinia + Vue Router |
| 编辑器 | TipTap |
| 协同 | Yjs / y-websocket |
| UI | Element Plus |

## 链接

- 源码：https://github.com/Rinngo01/online-doc-collab
