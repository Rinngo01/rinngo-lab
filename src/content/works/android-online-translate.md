---
title: 安卓在线翻译
summary: Kotlin + Jetpack Compose 原生 Android 翻译应用，覆盖文本、对话、拍照 OCR 与同声传译，V1 支持中英互译。
tags: [Android, 移动端, AI 协作]
tech: [Kotlin, Jetpack Compose, Room, CameraX, ML Kit]
repo: https://github.com/Rinngo01/android-online-translate
featured: true
order: 1
date: 2026-08-07
---

## 项目简介

原生 Android 翻译应用，V1 支持**中文简体 ↔ 英文**。提供输入翻译、双麦对话翻译、拍照 / 相册 OCR 翻译与同声传译，能力层可替换（百度 / MyMemory / 系统语音等）。

## AI 协作要点

- 用 AI 搭 Compose 导航与 Feature ViewModel / Repository 骨架，再按页面逐个验收
- 翻译、ASR、TTS、OCR 抽象成 `capability/` 接口，真实实现与 Mock 可切换，便于无密钥环境调试
- 密钥放在 `local.properties`（不入库），本地与模拟器（如 MuMu）分别验证语音与相机链路

## 功能概览

| 模块 | 说明 |
|------|------|
| 输入翻译 | 文本翻译、朗读、复制、历史记录 |
| 对话翻译 | 双麦语音对话、气泡展示、面对面简易分屏 |
| 拍照翻译 | CameraX 拍照 / 相册选图 → ML Kit OCR → 翻译 |
| 同声传译 | 连续听写分段翻译，可选本地录音 |
| 设置 | 能力与偏好相关入口 |

## 技术栈

| 类别 | 选型 |
|------|------|
| UI | Jetpack Compose + Navigation |
| 架构 | Feature ViewModel + Repository + capability 接口 |
| 本地存储 | Room（翻译历史） |
| 翻译 | 百度优先，否则 MyMemory；可回退 Mock |
| ASR / TTS | 系统能力 + 可选百度 Hybrid |
| OCR | ML Kit 中英文字识别 |

## 链接

- 源码：https://github.com/Rinngo01/android-online-translate
