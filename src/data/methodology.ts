// 14 天 Day-by-Day 方法论数据 · 首页预览 + /how 全展开复用

export interface MethodDay {
  day: number | string;
  phase: string;
  phaseEn: string;
  deliverable: string;
  owner: string;
  clientTime: string;
}

export const methodology: MethodDay[] = [
  { day: 1, phase: "Discovery Kickoff", phaseEn: "D1", deliverable: "Kickoff 会议纪要 + 业务流程图 + 技术 stack 清单", owner: "PM + Tech Lead", clientTime: "2h 会议" },
  { day: 2, phase: "需求细化 · PRD v1 签字", phaseEn: "D2", deliverable: "PRD v1 (场景定义 + 验收标准 + 异常路径)", owner: "PM", clientTime: "1h 评审" },
  { day: 3, phase: "技术方案 + Prompt 草稿", phaseEn: "D3", deliverable: "架构图 + Agent 分工 + Prompt v1 + API 权限清单", owner: "Tech Lead + AI Engineer", clientTime: "30min 确认" },
  { day: 4, phase: "开发启动", phaseEn: "D4", deliverable: "Repo + CI/CD + 首个 agent 骨架", owner: "AI Engineer A", clientTime: "异步" },
  { day: 5, phase: "核心 Agent", phaseEn: "D5", deliverable: "主 agent staging happy path 跑通", owner: "Engineer A+B follow-the-sun", clientTime: "异步" },
  { day: 6, phase: "集成", phaseEn: "D6", deliverable: "2+ 外部 API 集成 + 单测", owner: "Integration Engineer", clientTime: "异步" },
  { day: 7, phase: "Mid-sprint Demo · go/no-go", phaseEn: "D7", deliverable: "客户看到真实数据跑通 demo (sandbox)", owner: "全员", clientTime: "1h demo · 可无理由终止退 70%" },
  { day: 8, phase: "Human-in-the-loop", phaseEn: "D8", deliverable: "人工接管触发逻辑 + 转人工工单模板", owner: "AI Engineer", clientTime: "异步" },
  { day: 9, phase: "多语言 + 边界", phaseEn: "D9", deliverable: "多语言测试 + 10+ 边界 case 通过", owner: "AI Engineer", clientTime: "异步" },
  { day: 10, phase: "数据看板", phaseEn: "D10", deliverable: "看板 v1 部署 staging (响应时长 / 成本 / token 消耗)", owner: "Frontend", clientTime: "30min 确认" },
  { day: 11, phase: "UAT 启动", phaseEn: "D11", deliverable: "客户在 staging 跑 48h 真实业务", owner: "PM + 客户", clientTime: "每日 15min stand-up" },
  { day: 12, phase: "UAT Bug 修复", phaseEn: "D12", deliverable: "Bug 清单全 close 或 defer (客户签字)", owner: "全员", clientTime: "异步" },
  { day: 13, phase: "生产部署 + 培训", phaseEn: "D13", deliverable: "生产上线 + 2h 培训录屏 + 操作手册 PDF", owner: "Tech Lead + PM", clientTime: "2h 培训" },
  { day: 14, phase: "Handoff & QA", phaseEn: "D14", deliverable: "代码仓库交付客户 org + 运维手册 + 60 天保修 + 账单", owner: "PM", clientTime: "30min 交付会 · 🚢 SHIP" },
];
