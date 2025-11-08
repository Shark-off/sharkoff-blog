export default function BioSection() {
  return (
    <section className="flex flex-col gap-4 text-center px-4">
      <h1>
        你好! 我是
        {' '}
        <span className="font-bold text-purple-400">鲨掉</span>
        ,
      </h1>
      <p>欢迎来到我的私人博客, 我会在这里记录一些日记或者笔记, 感谢你的到来</p>

      <small className="text-xs md:text-sm">
        话说敲两下头像可以切换主题来着
        {' '}
        <span className="text-fuchsia-500">( ´◔ ‸◔`)</span>
      </small>
    </section>
  )
}
