# EmailJS 集成配置说明

## 配置信息
- **邮件服务商**: Microsoft Outlook
- **发送邮箱**: xiangyibaichuang@outlook.com
- **接收邮箱**: smlshangwuyingyu@soulmately.info
- **Public Key**: DYURVWb1P5eK19AD4
- **Service ID**: service_cj4kgy6
- **Template ID**: template_0riwfad

## 功能特点

### 1. 自动邮件发送
- 用户提交表单后，自动发送邮件到指定邮箱
- 包含用户的姓名、电话、邮箱、服务类型和留言信息
- 支持中英文双语显示

### 2. 用户体验优化
- **实时状态反馈**: 显示发送中、成功、失败状态
- **按钮状态管理**: 发送时显示加载动画，防止重复提交
- **表单验证**: 检查必填字段
- **自动滚动**: 状态消息出现时自动滚动到可视区域

### 3. 错误处理
- 网络错误处理
- 邮件发送失败提示
- 详细的错误信息显示

## 邮件模板参数

发送到EmailJS的模板参数包括：
```javascript
{
  from_name: "用户姓名",
  from_email: "用户邮箱",
  phone: "用户电话",
  service: "选择的服务类型",
  message: "用户留言",
  to_email: "smlshangwuyingyu@soulmately.info",
  reply_to: "用户邮箱或默认邮箱"
}
```

## 状态消息

### 成功状态
- 绿色背景提示
- 显示预约详细信息
- 10秒后自动隐藏
- 表单自动重置

### 加载状态
- 金色背景提示
- 按钮显示旋转动画
- 禁用表单提交

### 错误状态
- 红色背景提示
- 显示具体错误信息
- 需要用户手动关闭

## 安全特性

1. **客户端验证**: 提交前检查必填字段
2. **EmailJS安全**: 使用Public Key，不暴露敏感信息
3. **防重复提交**: 发送过程中禁用提交按钮

## 测试建议

1. **正常流程测试**:
   - 填写所有必填字段
   - 提交表单
   - 检查邮箱是否收到邮件

2. **验证测试**:
   - 尝试提交空表单
   - 只填写部分必填字段
   - 验证错误提示是否正确

3. **网络异常测试**:
   - 断网状态下提交表单
   - 检查错误处理是否正常

## 维护说明

- 如需修改接收邮箱，更新 `templateParams.to_email`
- 如需修改邮件模板，在EmailJS后台修改对应模板
- Public Key和Service ID变更时，需要更新 `EMAILJS_CONFIG` 配置

## 依赖项

- EmailJS CDN: https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js
- 无需额外后端配置，完全前端实现