---
title: 抖音视频批量下载
summary: Python + Playwright 命令行工具：登录会话持久化，支持按账号作品或关键词点选批量下载，附断点续传。
tags: [工具, 自动化, Playwright]
tech: [Python, Playwright, CLI]
repo: https://github.com/Rinngo01/douyin-video-batch-download
featured: true
order: 3
date: 2026-08-01
---

## 项目简介

登录抖音网页后，可按**账号作品**或**关键词点选**下载视频。仅供个人学习 / 备份，请遵守平台协议与版权规定。

## AI 协作要点

- 用 AI 梳理 CLI 命令结构与 Playwright 会话保存流程
- 人机验证、点选交互等易变环节保留人工确认步骤，避免脆弱自动化
- 下载清单与 `seen_ids` 断点续传逻辑单独验收，保证可重复使用

## 主要能力

- `login`：浏览器登录并持久化会话
- `search`：关键词搜索后鼠标点选下载（可 `--auto`）
- `user`：按作者主页作品 Tab 限量下载
- 输出目录含 `manifest.json` 与断点记录

## 技术栈

| 类别 | 选型 |
|------|------|
| 语言 | Python |
| 浏览器自动化 | Playwright |
| 交互 | 命令行 CLI |

## 链接

- 源码：https://github.com/Rinngo01/douyin-video-batch-download
