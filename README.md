# 心火欧青官网 MVP

使用 Next.js 14 App Router、TypeScript、Tailwind CSS 与 `lucide-react` 搭建的单页 Landing Page。

## 启动

```bash
npm install
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000)。

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
public/
  logo.jpg
```

## 上线前需要替换

1. 把团队 Logo 放到 `public/logo.jpg`。
2. 把 `components/ContactForm.tsx` 里的 `CONTACT_EMAIL` 改成真实收件邮箱。
3. 把联系区块中的社媒 `TODO` 改成真实账号或链接。
