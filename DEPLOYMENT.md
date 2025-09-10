# GitHub Pages 部署指南

## 项目特点
本项目是纯HTML/CSS/JavaScript静态网站，无需构建过程，可直接部署到GitHub Pages。

## 部署步骤

### 1. 创建GitHub仓库
1. 登录GitHub，点击右上角的"+"号，选择"New repository"
2. 仓库名称建议使用：`missli-personal-website` 或 `your-username.github.io`
   - 如果使用 `your-username.github.io` 格式，网站将自动部署到 `https://your-username.github.io`
   - 如果使用其他名称，网站地址将是 `https://your-username.github.io/repo-name`
3. 选择"Public"（公开仓库）
4. 不要勾选"Add a README file"，因为我们会上传自己的文件
5. 点击"Create repository"

### 2. 上传项目文件
有两种方式上传文件：

#### 方式一：通过GitHub网页界面
1. 在新建的仓库页面，点击"uploading an existing file"
2. 将项目中的所有文件和文件夹拖拽到上传区域：
   ```
   css/
   js/
   images/
   index.html
   favicon.html
   .gitignore
   DEPLOYMENT.md
   README.md (如果有)
   ```
3. 在页面底部的提交信息中输入："Initial commit - Personal website"
4. 点击"Commit changes"

#### 方式二：通过Git命令行（推荐）
```bash
# 在项目文件夹中打开终端，执行以下命令：

# 初始化git仓库
git init

# 添加所有文件
git add .

# 提交文件
git commit -m "Initial commit - Personal website"

# 添加远程仓库地址（替换为您的仓库地址）
git remote add origin https://github.com/your-username/your-repo-name.git

# 推送到GitHub
git push -u origin main
```

### 3. 启用GitHub Pages
1. 在GitHub仓库页面，点击顶部的"Settings"选项卡
2. 在左侧菜单中找到"Pages"
3. 在"Source"部分选择"Deploy from a branch"
4. 分支选择"main"或"master"
5. 文件夹选择"/ (root)"
6. 点击"Save"

### 4. 访问您的网站
- 部署完成后（通常需要几分钟），您可以通过以下地址访问：
  - 如果仓库名是 `your-username.github.io`：`https://your-username.github.io`
  - 如果是其他名称：`https://your-username.github.io/repo-name`

## 更新网站
当您需要更新网站内容时：

1. 修改本地文件
2. 提交并推送更改：
```bash
git add .
git commit -m "Update website content"
git push
```

3. GitHub Pages会自动重新部署，几分钟后更改就会生效

## 注意事项

### 文件结构要求
- 确保 `index.html` 在根目录
- 保持相对路径的正确性（css/、js/、images/）
- 所有文件名不要包含中文字符

### 域名自定义（可选）
如果您有自己的域名，可以：
1. 在仓库根目录创建 `CNAME` 文件
2. 文件内容写入您的域名，如：`www.yourwebsite.com`
3. 在域名提供商处设置DNS解析指向GitHub Pages

### 性能优化建议
- 压缩图片文件大小
- 使用CDN加载的外部资源（已使用Google Fonts和Font Awesome CDN）
- 定期检查外部链接的有效性

## 故障排除

### 网站无法访问
1. 检查GitHub Pages设置是否正确
2. 确认 `index.html` 在根目录
3. 查看仓库的Actions页面是否有部署错误

### 样式或脚本加载失败
1. 检查文件路径是否正确（使用相对路径）
2. 确认所有CSS和JS文件都已上传
3. 检查浏览器控制台的错误信息

### 图片无法显示
1. 确认图片文件已上传到正确的images目录
2. 检查HTML中的图片路径
3. 图片文件名不要包含特殊字符

## 成功部署的标志
- 可以通过GitHub Pages地址正常访问网站
- 所有样式和交互功能正常工作
- 移动端和桌面端显示都正常
- 所有导航链接可以正常跳转

部署完成后，您就拥有了一个完全免费的个人品牌官网！