# Miss Li Personal Brand Website

## 项目结构 Project Structure

```
trae-web-missli-v02/
├── index.html                 # 主页面文件 Main HTML file
├── css/
│   └── style.css             # 样式文件 Stylesheet
├── js/
│   └── main.js               # JavaScript文件 Scripts
├── images/
│   ├── profile/              # 个人照片 Profile photos
│   │   ├── hero-photo.jpg    # 首页大头像 (推荐尺寸: 600x600px)
│   │   └── about-photo.jpg   # 关于页面头像 (推荐尺寸: 500x500px)
│   ├── icons/                # 图标文件 Icon files
│   ├── backgrounds/          # 背景图片 Background images
│   └── gallery/              # 作品展示 Portfolio gallery
└── README.md                 # 项目说明 Project documentation
```

## 图片要求 Image Requirements

### 个人照片 Profile Photos
- **首页头像 (hero-photo.jpg)**
  - 推荐尺寸: 600x600px
  - 格式: JPG/PNG
  - 建议: 专业形象照，正方形构图，背景简洁

- **关于页面头像 (about-photo.jpg)**
  - 推荐尺寸: 500x500px
  - 格式: JPG/PNG
  - 建议: 商务或亲和力形象照

### 其他图片规格
- **背景图片**: 1920x1080px 或更高分辨率
- **作品展示**: 建议统一比例，如 16:9 或 4:3
- **图标**: 256x256px PNG格式（透明背景）

## 文件大小建议
- 个人照片: 小于 500KB
- 背景图片: 小于 1MB
- 作品展示: 小于 300KB

## 支持的图片格式
- JPG/JPEG (推荐用于照片)
- PNG (推荐用于图标和透明背景图片)
- WebP (现代浏览器支持，文件更小)

## 如何添加图片
1. 将照片文件放入对应的目录
2. 确保文件名与代码中的引用一致
3. 图片会自动加载，如果文件不存在会显示占位符

## 技术栈 Tech Stack
- HTML5
- CSS3 (包含现代特性: Grid, Flexbox, 动画等)
- Vanilla JavaScript
- Font Awesome 图标
- Google Fonts

## 浏览器兼容性
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 本地开发
```bash
# 启动本地服务器
cd trae-web-missli-v02
python -m http.server 8080

# 访问网站
http://localhost:8080
```

## 特色功能
- 响应式设计 (移动端优先)
- 中英文双语显示
- 紫色渐变主题设计
- 动画效果 (悬停、翻页、光效等)
- 平滑滚动导航
- 联系表单
- 图片懒加载

## 自定义建议
- 替换 images/profile/ 中的个人照片
- 修改联系信息 (微信、邮箱、电话)
- 调整个人介绍内容
- 添加真实的作品案例
- 更新服务价格和详情