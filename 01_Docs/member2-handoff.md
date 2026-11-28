# 任务二交付说明（成员2 → 成员6）

对应 [issue #4](https://github.com/damien-jkj/industry-go-global-intelligent-system/issues/4)。正文见 [core-flow-and-data-design.md](core-flow-and-data-design.md)，图见 `figures/`，可直接合并的 Word 见 `exports/core-flow-and-data-design.docx`。

## 一、交付内容与 issue 逐条对照

| issue 要求 | 落点 |
| --- | --- |
| 核心业务流程图（国家+行业 → 前端 → FastAPI → 判定 → MySQL 或 RAG → 生成 → 返回） | 图1，正文 2.1 节八步 + 四类降级规则 |
| RAG 核心流程图（导入 → 解析 → 分块 → 向量化 → 存储 → 提问 → 检索 → 生成 → 出处） | 图2，正文 2.2 节离线六步 + 在线七步 |
| 核心接口表（六个接口，含请求方式、输入、输出、错误、权限、外部依赖） | 表1（六列）+ 表2（错误场景与前端处理），2.3 节 |
| 数据库 ER 图（Country、Product、Tariff、Policy、User、QueryLog） | 图3，另补 industry、policy_chunk、market_metric 三张 |
| 数据库设计说明（字段类型、主外键、一致性、敏感数据与权限） | 表3 + 2.4 节一致性与安全各五至六条 |
| 2000～2500 字 | 正文约 2500 汉字，Word 排版 8 页（含 3 图 3 表） |

## 二、图表编号

图1 核心业务流程、图2 RAG 流程、图3 数据库 ER 图；表1 核心接口契约、表2 主要错误场景、表3 数据表与关键字段。若与成员1的架构图和成员3的原型图重号，按全篇顺序整体后移，正文中的“图2”“表1”等引用一并改。

## 三、需要组内确认的三处口径

1. **接口路径**。前端 `05_Frontend/src/api.js` 预留的是 `/compliance/screen` 与 `/qa`，本文按 issue #4 采用 `/api/tariff/query` + `/api/policy/search` 组合与 `/api/ai/chat`。联调前二选一：前端改调用，或后端补一层聚合接口。表1 的定义以本文为准。
2. **前端是否带 TypeScript**。任务一文档写“Vue 3 + TypeScript”，`05_Frontend/package.json` 中没有 TypeScript 依赖，实际是 JavaScript + Composition API。两处需统一，否则统稿时会被看出矛盾。
3. **“已实现”的口径**。任务一写“暂无已完成的系统业务功能”，但前端四个页面（首页、市场看板、合规筛查、AI 问答）是可运行的。本文 2.5 节按“前端页面可运行、后端与数据库未落地”表述，请与成员1对齐后保留一种说法。

## 四、超页时的压缩顺序

8 页里三张图占约 2 页。若全篇超过 15 页，按此顺序压：

1. 图1、图2 缩到 12 cm 宽（约省 1 页），图3 保持 14 cm，字段字号仍可读。
2. 表3 删去“说明”列，表名后加中文括注（约省 0.3 页）。
3. 2.2 节“两处取舍”一段可并入图2 的图注，省 0.2 页。

不要删表1 的“外部依赖”和“权限”两列，这两列是 issue 明确要求。
