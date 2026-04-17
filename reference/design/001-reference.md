# 需求说明

做一个英文静态微站，主题是 **SG Arrival Card**。

## 目标用户
准备入境新加坡、想确认官方入口、是否免费、3-day rule、group submission 和常见错误的人。

## 网站定位
网站不是官方站，不提供代提交服务，只做清晰解释和轻量工具。

## 页面结构（第一版 6 个页面）
1. **Home** - 首页
2. **Official & Free** - 官方渠道和免费说明
3. **3-Day Rule** - 3天规则说明
4. **Who Needs to Submit** - 谁需要提交
5. **Group Submission** - 团体提交说明
6. **Common Mistakes / Scam Warning** - 常见错误/诈骗警示

## 功能
另做 1 个前端小工具：**SGAC Date Checker**
- 用户输入 arrival date
- 返回最早可提交日期
- 以及今天是否在有效提交窗口内

## 设计风格
- 简洁、可信、像工具站
- 不像博客，也不要像官方站
- 全站英文
- 每页要有清晰 title、H1、FAQ 区块、内链和 last updated
- 全站需要一个明显 disclaimer：
  > "This website is an independent guide and is not affiliated with the Singapore government or ICA."

## 首页要求
首页首屏要突出三件事：
- official channel
- free of charge
- submit within 3 days before arrival

## 技术要求
- 静态站即可
- 设计可部署到 Cloudflare Pages
- 内容尽量组件化，方便后续复制做 UK ETA、TDAC、MDAC 等类似站点