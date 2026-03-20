# 心火欧青官网

心火同行欧洲青年事工（HeartFire Journey）官网项目。  
这是一个基于 Next.js 14、TypeScript、Tailwind CSS 和 `lucide-react` 搭建的单页官网，用于介绍异象、使命、目标策略、参与方式与联系方式。

## 技术栈

- Next.js 14 App Router
- TypeScript
- Tailwind CSS
- lucide-react

## 本地启动

```bash
npm install
npm run dev
```

默认访问：

```text
http://localhost:3000
```

## 生产构建

```bash
npm run build
```

如果仓库已经连接 Vercel，推送到 `main` 后会自动重新部署。

## 项目结构

```text
app/
  globals.css
  layout.tsx
  page.tsx
components/
  CTAButton.tsx
  ContactForm.tsx
  Container.tsx
  FeatureCard.tsx
  LogoMark.tsx
  Navbar.tsx
  SectionHeading.tsx
lib/
  site.ts
public/
  logo.jpg
```

## 常用修改入口

1. 页面主要文案与区块顺序：`app/page.tsx`
2. 联系表单字段与 mailto 行为：`components/ContactForm.tsx`
3. 联系邮箱与 Instagram 链接：`lib/site.ts`
4. Logo 图片：`public/logo.jpg`

## 当前联系信息

- 联系邮箱：`yeyile8896@gmail.com`
- Instagram：`https://www.instagram.com/heart_on_fire.1?igsh=eTQzNG9nbGwwc3Yy`

## 说明

- 联系表单不会连接后端，提交后会调用用户本地邮件客户端。
- 当前项目使用 Next.js `14.2.5`。
