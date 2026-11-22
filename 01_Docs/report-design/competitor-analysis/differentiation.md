# 竞品差异与 2026 年设计取舍

关联 Issue #2。本文记录差异化假设、已有证据和下一步验证方式。其设计结论已写入[报告规格](../report-spec.md)。

## 可验证的差异

**面向中国企业的泰国、印尼出海初筛，将市场信号、商品准入证据及待办核查汇总为同一份中文报告。** 预期收益是缩短从找资料到复核结论的时间，并减少误用税目、过期政策和缺少原文依据的结论。需通过同题比较验证。

| 对照 | 已有能力或本次观察 | 设计取舍 |
| --- | --- | --- |
| Global Trade Helpdesk | 已连通市场、关税与监管。本组中泰纯电乘用车实测中，六位 HS 870380 的市场概览跳到描述包含未组装卡丁车的国家税目 87038011。这是该次查询的观察。[实测记录](samples/global-trade-helpdesk.md) | 在报告里并列输入编码、候选税目与匹配理由。详情不符合输入时提示补条件，保留已知市场结果。 |
| ITC Trade Map 及 AI 辅助归类 | ITC 2026 年更新介绍了新版表格和可视化，并记录 AI 商品编码工具的演示与试用。[一季度更新](https://marketanalysis.intracen.org/static/media/2026-Q1-Market_Analysis_Services_Update.0ddfd894.htm) · [二季度更新](https://marketanalysis.intracen.org/static/media/2026-Q2-Market_Analysis_Services_Update.41b4f0be.htm) | 市场章节以可复核的发现和核查任务为主。商品归类功能先实现候选提示与缺项反馈。 |
| Access2Markets ROSA 与 Descartes FTI | ROSA 已提供原产地逐题自查；Descartes 在 2026 年介绍了原产地规则、计算和可审查建议的集成流程。[ROSA 样本](samples/access2markets.md) · [Descartes](https://www.descartes.com/resources/news/descartes-introduces-new-ai-powered-free-trade-intelligence-fti-solution-help-reduce) | 首版将优惠条件、已有依据、缺失凭证和官方入口写进中文初筛报告。完整资格计算后续评估。 |

## 更新哪些内容

- **出口机会与本地生产分开。** IEA 记录到泰国和印尼 2025 年电动汽车销量增长，并指出印尼年底集中进口与当时的优惠到期预期有关。泰国 EV3／EV3.5 的调整涉及参加计划的制造商及本地生产承诺。市场章节分别标注销量、商品进口及当地生产。政策条目标明对象、日期与条件。[IEA 年度分析](https://www.iea.org/reports/global-ev-outlook-2026/trends-in-electric-cars) · [泰国 BOI 公告](https://www.boi.go.th/index.php?_module=news&from_page=press_releases%26group_id%3D22&language=en&page=press_releases_detail&topic_id=138252)
- **旧网页仍可被检索。** 泰国海关旧 FAQ 与泰国政府公布的 2026 年 1 月 1 日低值网购进口调整同时在线。印尼海关另有寄递进口区间及类目例外。资料入库应区分发布日期、生效日期和最新核验日期。有主管部门依据时才认定旧口径被替代，无法确认时标记冲突，暂缓输出适用税费。[泰国海关旧 FAQ](https://www.customs.go.th/cont_strc_faq.php?current_id=142231324146505f4a464b4a464a4e&lang=th&top_menu=menu_homepage) · [泰国政府说明](https://thailand.prd.go.th/en/content/category/detail/id/2078/iid/440097) · [印尼海关寄递进口说明](https://beacukai.go.id/barangkiriman)
- **模型输出先结构化再渲染。** 由程序提供结构化数值与检索证据，模型归纳结论、抽取适用条件并提出需要补充的问题。程序校验引用存在、数值一致和时间条件；成员抽查原文能否支持结论。具体输出模式需按模型和接口验证。[百炼结构化输出](https://help.aliyun.com/zh/model-studio/qwen-structured-output) · [工具调用](https://help.aliyun.com/zh/model-studio/qwen-function-calling)

## 如何验证收益

用同一批输入分别走 GTH 加官方原文、通用模型、本组原型。记录各工具的版本、访问或联网条件，统一题面、计时规则和人工事实核对表。每个任务记录完成时间、可支持结论占比、越权断言次数以及正确覆盖的必答项。关键结论逐条判定原文是否支持，缺资料题中把正确保留不确定性计入完成。保留实际输出和原文位置，测试结果按实记录。

优先测试[规格中的三个核心用例](../report-spec.md#验收用例)。只有用例暴露明确证据缺口时，再定向扩展竞品调研。
