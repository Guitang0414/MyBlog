export const seo = {
  title: 'Jiayu Guo | Blog',
  description:
    '我叫 Jiayu Guo, 欢迎来到我的Blog',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://jiayuguo.homes/'
      : 'http://localhost:3000'
  ),
} as const
