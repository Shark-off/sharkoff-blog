import HorizontalDividingLine from '@/components/shared/horizontal-dividing-line'
import MaxWidthWrapper from '@/components/shared/max-width-wrapper'
// import { ArrowDownIcon } from 'lucide-react'
import * as motion from 'motion/react-client'
// import Link from 'next/link'

export default function AboutPage() {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: [30, -8, 0], opacity: 1 }}
      transition={{
        duration: 0.6,
        ease: 'easeOut',
      }}
    >
      <MaxWidthWrapper className="md:text-lg text-center flex items-center justify-center flex-col gap-4 mt-4">
        <p>嘿!你好!</p>
        <p>欢迎来到我的私人博客</p>
        <p>你可以叫我, 鲨掉</p>
        <p>sharkoff什么的都行</p>
        <p>你可以随意称呼我</p>
        <HorizontalDividingLine fill="#006A71" />
        <p>我</p>
        <p>不喜欢吵闹的地方, 不喜欢人多的地方...</p>
        <p>大抵是孤芳自赏罢</p>
        <p>不过无所谓的一个人有一个人的玩法</p>
        <p>如果出了有趣的新番和游戏, 也是会尝试一下滴</p>
        <p>现在的我在为自由而努力着</p>
        <p>接下来是我的学习记录</p>
        <HorizontalDividingLine fill="#107B80" />
        <p>2024年的暑假, 我高考考砸了...</p>
        <p>没能出省看看大好河山</p>
        <p>只能在这里继续生活</p>
        <p>从一个小一点的县城搬到了大一点的城市</p>
        <p>接触了第一次编程, print('Hello, World!')</p>

        <HorizontalDividingLine fill="#208D90" />

        {/* <HorizontalDividingLine fill="#30A09F" />

        <HorizontalDividingLine fill="#48A6A7" />

        <HorizontalDividingLine fill="#40B2AF" /> */}

      </MaxWidthWrapper>
    </motion.div>
  )
}
