<script setup>
import {ref} from 'vue'
import OfficialSources from './OfficialSources.vue'
import reportHtml from '../../01_Docs/report-design/report-prototype.html?raw'
const props=defineProps({context:{type:Object,default:()=>({})}})
const opened=ref(false)
</script>
<template><section class="report-integration"><p class="eyebrow">TASK 03 × TASK 04</p><h1>出海分析报告</h1><p class="intro">任务四报告样例 · 泰国全新纯电乘用整车 · 资料截至 2026-11-23</p><div class="notice">这是固定案例，不是根据输入实时生成的报告。原版来源、补充业务信息、草稿及版本交互均保留。用户自述不会自动成为已核验政策结论。</div><div v-if="context.country" class="panel result"><h2>从业务工作台带入的条件</h2><p>{{context.country}} / {{context.industry}} / {{context.product || '产品尚未填写'}}</p><p>这些条件仅供核对，尚未重新查询政策或改写报告。下方样例始终对应泰国纯电乘用整车。</p></div><OfficialSources country="泰国" industry="新能源汽车"/><button class="primary" style="margin:20px 0" @click="opened=!opened">{{opened?'收起报告样例':'打开任务四完整交互报告'}}</button><iframe v-if="opened" title="任务四：泰国纯电乘用车报告样例" :srcdoc="reportHtml" sandbox="allow-scripts allow-popups allow-popups-to-escape-sandbox" class="report-frame"/></section></template>
<style>.report-integration{max-width:1250px;margin:auto;padding:28px}.report-frame{width:100%;height:85vh;min-height:650px;border:1px solid #ddd;border-radius:14px}.report-integration .panel p{font-size:13px;color:#65717a}</style>
