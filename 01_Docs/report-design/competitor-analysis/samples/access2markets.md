# 欧盟 Access2Markets 样本分析

Access2Markets 将商品归类、一般和优惠税率、原产地资格及材料准备串成连续的办事流程。最值得借鉴的是把优惠资格拆成**可回答的问题和可准备的证明**，并让每个问题都能回到相关依据。

## 样本与观察范围

| 项目 | 本轮核验 |
| --- | --- |
| 发布方与对象 | 欧盟委员会贸易与经济安全总司。My Trade Assistant 的货物模块覆盖欧盟出口、欧盟进口和欧盟内部贸易。官方帮助说明前两种对外贸易场景均有一方为欧盟国家。 |
| 核验日期 | 2026-11-22。查阅公开检索页、官方帮助、原产地自查教程及数据来源说明。 |
| 公开查询样例 | 肯尼亚至德国，六位 HS 410150。搜索结果提示已找到匹配的 HS 分支，请继续在商品目录中选定具体商品。该样例用于观察归类流程。 |
| 对照范围 | 本项目的中国至泰国纯电乘用车场景属于该货物模块覆盖范围之外。具体税率、原产地问卷操作及自查报告文件版式未实测。 |

[My Trade Assistant](https://trade.ec.europa.eu/access-to-markets/en/my-trade-assistant) · [公开查询样例](https://trade.ec.europa.eu/access-to-markets/en/search?destination=DE&origin=KE&product=410150) · [查询帮助](https://trade.ec.europa.eu/access-to-markets/en/content/help-my-trade-assistant-0)

## 输出与交互

| 观察项 | 公开证据 | 对出海报告的启发 |
| --- | --- | --- |
| 查询与商品归类 | 输入商品名称或 HS 编码、出口国和目的国。部分匹配时，提示用户沿目的国商品目录继续选择，精确匹配后进入结果页。肯尼亚至德国的公开样例可看到继续选品的提示。[查询帮助](https://trade.ec.europa.eu/access-to-markets/en/content/help-my-trade-assistant-0) · [公开查询样例](https://trade.ec.europa.eu/access-to-markets/en/search?destination=DE&origin=KE&product=410150) | 报告区分用户输入编码与目的国选定税目。编码不足以确定税目时，给出候选和待补商品特征。 |
| 结果结构 | 官方帮助把结果区分为目的国概况、商品与目的国相关信息、协定信息、商品在特定协定下的规则四层。商品层涵盖税费、通关手续、贸易壁垒和贸易流量。结果通过左侧菜单导航，长章节可有次级目录。[结果页帮助](https://trade.ec.europa.eu/access-to-markets/en/content/help-my-trade-assistant-0) | 报告首页展示查询条件和重点结论，正文分开国别背景、商品税费、协定条件和通关办理事项。 |
| 优惠资格与证明 | ROSA 官方教程说明，根据商品和所选协定逐题判断原产地资格，随问题提供解释、示例、法律文本入口和凭证说明，并按回答提供个性化自查报告。欧盟至韩国协定的官方资料把查询、自查、核对商品要求和准备单证写成四步。[ROSA 教程](https://trade.ec.europa.eu/access-to-markets/en/content/how-use-rules-origin-self-assessment-tool-rosa) · [欧盟至韩国示例](https://trade.ec.europa.eu/access-to-markets/en/country-assets/factsheet_EU_South_Korea_FTA.pdf) | 把税率记录与资格判断分开。针对可用协定列条件、当前证据、缺项和需准备的凭证。 |
| 来源与时效 | 来源页按栏目列提供方和更新频率。欧盟税率列 DG TAXUD 与 TARIC，贸易流统计列 Eurostat/Comext，各栏目更新节奏不同。部分第三方数据有再分发、存储等使用限制。[数据来源与使用条件](https://trade.ec.europa.eu/access-to-markets/en/content/sources-and-copyright) | 以条目为单位记录来源、查阅日期及生效时间。平台作为流程参考，项目的数据采集另核对原始来源与授权。 |
| 缺失与报告 | 帮助说明某栏目缺少可用数据时可能不显示。ROSA 教程确认有自查报告。本轮未取得实际文件，下载格式、分享效果及结果页权限细节待核验。[结果页帮助](https://trade.ec.europa.eu/access-to-markets/en/content/help-my-trade-assistant-0) · [ROSA 教程](https://trade.ec.europa.eu/access-to-markets/en/content/how-use-rules-origin-self-assessment-tool-rosa) | 在屏幕和导出件中保留需核查栏目，写明缺少输入、资料未取得或确认不适用，读者可以据此采取下一步动作。 |

## 转成我们的报告要求

| 设计 | 建议字段 | 验收检查 |
| --- | --- | --- |
| 分类逐层确认 | 出口地、目的国、原产地、输入 HS、目的国税目、归类理由、缺少特征 | 只填六位 HS 且对应多个税目时，报告列出候选、补充问题和核验入口，暂缓给出唯一适用税率。 |
| 优惠资格核查 | 协定、税率类型、原产地条件、证明文件、核验状态、原文链接 | 提供一般和优惠税率时，如果只有发运地而未确定原产资格，优惠项标为待核验。 |
| 追溯与办理 | 核查动作、政策编号或条款位置、生效时间、查阅日期、官方入口 | 可从报告中的准入项目找到对应条款和下一步材料。缺失状态与核查入口随报告一同保留。 |
