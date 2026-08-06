---
title: 工单管理看板
summary: Vue 3 前端面试交付案例：登录权限、工单表格与 ECharts 工时柱状图联动，管理员可删除并即时重算。
tags: [前端, 面试案例, AI 协作]
tech: [Vue 3, Ant Design Vue, ECharts, Pinia, Vite]
repo: https://github.com/Rinngo01/work-order-dashboard
demo: https://rinngo01.github.io/work-order-dashboard/
featured: true
order: 2
date: 2026-07-15
---

## 项目简介

简化版工单管理页：登录区分管理员与普通用户，表格展示工单，右侧柱状图按项目汇总工时；管理员删除工单后图表自动更新。用于 AI 协作型前端岗的可运行交付物。

## AI 协作要点

- 先拆需求与验收标准，再分步让 Cursor 生成页面与状态逻辑
- 自己跑通、对照需求检查，不对就改——对 AI 产出负责
- 最终交付可运行页面、GitHub 仓库与 GitHub Pages 在线预览

## 功能概览

- 登录：任意密码可登录；`admin` 为管理员
- 工单表格：ID、Project、Overtime、Hours、Created At
- 柱状图：按项目汇总工时
- 权限：仅管理员可见 Delete；删除后图表联动

## 技术栈

| 类别 | 选型 |
|------|------|
| 框架 | Vue 3 + Vite |
| 状态 / 路由 | Pinia + Vue Router |
| UI / 图表 | Ant Design Vue + ECharts |
| 部署 | GitHub Pages + Actions |

## 链接

- 源码：https://github.com/Rinngo01/work-order-dashboard
- 在线预览：https://rinngo01.github.io/work-order-dashboard/
