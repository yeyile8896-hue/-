import {
  CalendarDays,
  Compass,
  Flame,
  Globe2,
  GraduationCap,
  HandHeart,
  HeartHandshake,
  Instagram,
  Mail,
  Monitor,
  Sparkles,
  Target,
  Users
} from "lucide-react";
import { CTAButton } from "@/components/CTAButton";
import { ContactForm } from "@/components/ContactForm";
import { Container } from "@/components/Container";
import { FeatureCard } from "@/components/FeatureCard";
import { Navbar, type NavItem } from "@/components/Navbar";
import { SectionHeading } from "@/components/SectionHeading";
import { CONTACT_EMAIL, INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/site";

const navItems: NavItem[] = [
  { label: "关于", href: "#about" },
  { label: "名称由来", href: "#origin" },
  { label: "异象使命", href: "#vision" },
  { label: "我们在做什么", href: "#what-we-do" },
  { label: "目标策略", href: "#goals" },
  { label: "参与方式", href: "#join" },
  { label: "联系", href: "#contact" }
];

const ministryHighlights = [
  {
    icon: CalendarDays,
    title: "跨国青年营会",
    description:
      "承接自 2019 年起累积的东欧青年营传统，自 2025 年起由心火欧青承办，继续成为彼此连结与更新的平台。"
  },
  {
    icon: Monitor,
    title: "线上聚会",
    description:
      "让分散在不同国家与城市的青年，仍能规律相遇、查经祷告、分享真实生活与信仰挣扎。"
  },
  {
    icon: HeartHandshake,
    title: "门徒陪伴",
    description:
      "在关系里陪伴青年扎根真理、建立属灵节奏，帮助信仰从活动参与走向生命更新。"
  },
  {
    icon: GraduationCap,
    title: "领袖培育",
    description:
      "持续培育核心同工与新一代领袖，让门徒带领门徒，让使命在欧洲不同处境中延续。"
  }
];

const goals = [
  { value: "100+", label: "青年连结网络", detail: "持续聚集并同行成长" },
  { value: "10+", label: "欧洲国家覆盖", detail: "建立跨文化青年连接" },
  { value: "15+", label: "核心同工团队", detail: "形成稳定服事群体" },
  { value: "长期", label: "领袖传承培育", detail: "推动新一代接棒" }
];

const strategies = [
  "坚持“小而稳定”的发展节奏，先建立真实同行的关系密度，再逐步拓展影响力。",
  "结合线上聚会与线下营会，让分散在欧洲各地的青年都能持续参与。",
  "把属灵建造与领袖培育放在核心位置，不只办活动，更陪伴生命成长。",
  "维持伙伴关系连结与财务透明，建立可信任、可持续的事工基础。"
];

const participationWays = [
  {
    icon: Sparkles,
    title: "报名参加",
    description: "加入营会或线上聚会，认识一群在欧洲同行、扎根真理的青年。"
  },
  {
    icon: Users,
    title: "成为同工",
    description: "参与接待、行政、内容策划、敬拜或陪伴服事，一起承担平台建设。"
  },
  {
    icon: HandHeart,
    title: "成为代祷伙伴",
    description: "为欧洲青年、营会、线上群体与领袖培育长期守望，成为看不见却关键的同行者。"
  },
  {
    icon: Mail,
    title: "支持奉献",
    description: "以资源参与跨国青年事工，让更多青年在真理中被装备、被点燃、被差遣。"
  }
];

export default function Home() {
  return (
    <>
      <Navbar items={navItems} />

      <main>
        <section className="relative overflow-hidden pt-28" id="top">
          <Container className="pb-16 pt-8 sm:pb-20">
            <div className="grid items-center gap-10 lg:grid-cols-[1.12fr_0.88fr]">
              <div className="space-y-6">
                <span className="fire-chip">
                  <Flame className="h-4 w-4 text-amber-600" />
                  HeartFire Journey Youth Ministry of Europe
                </span>
                <div className="space-y-4">
                  <h1 className="font-display text-5xl font-semibold leading-tight text-slate-950 sm:text-6xl">
                    心火欧青
                  </h1>
                  <p className="max-w-2xl text-balance text-lg leading-8 text-[color:var(--text-soft)] sm:text-xl">
                    连接欧洲青年，扎根真理，活出使命。
                  </p>
                  <p className="max-w-2xl text-balance text-base leading-7 text-slate-700 sm:text-lg">
                    心火同行欧洲青年事工是一个跨国青年平台，不隶属于单一教会或机构，
                    盼望连结欧洲各地青年，在真理中被建立，在关系中彼此扶持，在各自城市活出使命。
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <CTAButton href="#about">了解我们</CTAButton>
                  <CTAButton href="#join" variant="secondary">
                    参与同行
                  </CTAButton>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  <div className="glass-panel rounded-3xl p-4">
                    <p className="text-sm text-[color:var(--text-soft)]">历史承接</p>
                    <p className="mt-1 text-lg font-semibold text-slate-900">
                      2019 起跨国青年营传统
                    </p>
                  </div>
                  <div className="glass-panel rounded-3xl p-4">
                    <p className="text-sm text-[color:var(--text-soft)]">年度转承</p>
                    <p className="mt-1 text-lg font-semibold text-slate-900">2025 起承办营会</p>
                  </div>
                  <div className="glass-panel rounded-3xl p-4">
                    <p className="text-sm text-[color:var(--text-soft)]">平台定位</p>
                    <p className="mt-1 text-lg font-semibold text-slate-900">
                      跨文化属灵同行群体
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 -z-10 rounded-[36px] bg-gradient-to-br from-orange-200/50 via-amber-100/30 to-red-200/30 blur-3xl" />
                <div className="section-card relative overflow-hidden p-7 sm:p-8">
                  <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-orange-300/25 blur-3xl" />
                  <div className="space-y-6">
                    <div className="inline-flex rounded-full bg-gradient-to-r from-orange-500 to-amber-400 p-3 text-white shadow-glow">
                      <Compass className="h-7 w-7" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-700">
                        Who We Are
                      </p>
                      <h2 className="mt-3 font-display text-3xl font-semibold text-slate-950">
                        在欧洲点燃青年心火
                      </h2>
                    </div>
                    <div className="space-y-4 text-sm leading-7 text-slate-700 sm:text-base">
                      <p>
                        我们承接东欧青年营多年累积的同行传统，透过营会、线上聚会与持续陪伴，
                        让分散各地的青年能够在信仰旅程中重新连结。
                      </p>
                      <p>
                        不论你身处校园、职场、移居生活或跨文化处境，这里都盼望成为你被理解、
                        被装备、被差遣的同行平台。
                      </p>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2">
                      <div className="rounded-2xl bg-orange-50 p-4">
                        <p className="text-sm text-amber-700">关键词</p>
                        <p className="mt-1 font-semibold text-slate-900">跨国、真理、陪伴、使命</p>
                      </div>
                      <div className="rounded-2xl bg-amber-50 p-4">
                        <p className="text-sm text-amber-700">核心节奏</p>
                        <p className="mt-1 font-semibold text-slate-900">小而稳定，持续成长</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-12 sm:py-16" id="about">
          <Container>
            <SectionHeading
              eyebrow="关于我们"
              title="一个不隶属于单一教会或机构的跨国青年平台"
              description="心火欧青延续既有跨国青年营历史，连接欧洲青年，建立跨文化、跨城市、跨阶段的属灵同行群体。"
            />

            <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="section-card space-y-5">
                <p className="text-base leading-8 text-slate-700">
                  2019 年，一位对东欧青年福音事工深具负担的年轻传道人，
                  联合来自东欧各国有心参与的青年同工，共同发起并主办跨国青年营会。
                  多年来，这个营会逐渐成为青年彼此连结、信仰成长与世代同行的重要平台。
                </p>
                <p className="text-base leading-8 text-slate-700">
                  心火同行欧洲青年事工承接这份历史传统，自 2025 年起开始承办年度东欧青年营会，
                  继续连结欧洲各地青年，帮助他们在真理中扎根、在关系中被陪伴，
                  并在各自国家与城市里回应呼召、活出使命。
                </p>
              </div>

              <div className="section-card bg-gradient-to-br from-orange-50 via-white to-amber-50">
                <div className="space-y-4">
                  <div className="inline-flex rounded-2xl bg-orange-500/10 p-3 text-orange-600">
                    <Globe2 className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-slate-950">我们的定位</h3>
                  <ul className="space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
                    <li>连接分散在欧洲各地的青年与伙伴群体。</li>
                    <li>建立跨文化、跨代际、跨国家的属灵同行关系。</li>
                    <li>让青年不只参与活动，更被装备进入长期成长与服事。</li>
                  </ul>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-12 sm:py-16" id="origin">
          <Container>
            <SectionHeading
              eyebrow="名称由来"
              title="以马忤斯路上的“心里火热”"
              description="“心火”取自路加福音 24:32 的意象：当人与基督同行、聆听祂的话语，心灵会再次被点燃。"
            />

            <div className="section-card grid gap-6 md:grid-cols-[0.72fr_1.28fr] md:items-center">
              <div className="rounded-[30px] bg-gradient-to-br from-orange-500 via-amber-400 to-red-500 p-8 text-white shadow-glow">
                <Flame className="h-10 w-10" />
                <p className="mt-6 font-display text-3xl font-semibold">心火同行</p>
                <p className="mt-3 text-sm leading-7 text-orange-50 sm:text-base">
                  象征一群青年在信仰旅程中彼此同行，在上帝的话语中被更新与激励，让心中的火再次燃起。
                </p>
              </div>
              <div className="space-y-4 text-base leading-8 text-slate-700">
                <p>
                  我们相信，青年并不只是需要一次热闹的活动，而是需要在真实关系里，
                  被主的话不断开启、澄清、鼓舞。
                </p>
                <p>
                  因此，“心火同行”不只是一个名称，而是一种服事方向：
                  与欧洲青年一起走路、一起聆听、一起分辨、一起回应召命。
                </p>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-12 sm:py-16" id="vision">
          <Container>
            <SectionHeading
              eyebrow="异象、使命、目标与策略"
              title="让青年在真理中扎根，并以清晰目标稳健成长"
              description="我们盼望不只是聚集活动参与者，而是建立一个能持续影响城市与国家的青年属灵网络，并以稳定节奏推进长期同行。"
            />

            <div className="grid gap-6 md:grid-cols-2">
              <FeatureCard
                icon={Target}
                title="异象 Vision"
                description="在欧洲建立一个跨国且具有影响力的青年基督徒平台，使年轻人在真理中扎根、在信仰中成长，并在各自的国家与城市中活出使命。"
              />
              <FeatureCard
                icon={Users}
                title="使命 Mission"
                description="透过营会、线上聚会与持续陪伴，连结并装备欧洲青年，使他们在信仰、生活与领导力上持续成长，彼此支持，同奔使命。"
              />
            </div>

            <div className="mt-10 space-y-6" id="goals">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.26em] text-amber-700">
                  目标与策略
                </p>
                <h3 className="mt-3 font-display text-3xl font-semibold leading-tight text-slate-950 sm:text-4xl">
                  以清晰目标推进，以稳定节奏成长
                </h3>
                <p className="mt-4 text-base leading-8 text-[color:var(--text-soft)] sm:text-lg">
                  我们期待建立跨国青年门徒网络，同时坚持稳健发展，不牺牲关系质量与属灵深度。
                </p>
              </div>

              <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
                <div className="space-y-5">
                  <h3 className="font-display text-2xl font-semibold text-slate-950">目标 Goal</h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {goals.map((goal) => (
                      <div className="stat-card" key={goal.label}>
                        <p className="text-3xl font-semibold text-orange-600">{goal.value}</p>
                        <p className="mt-2 text-lg font-semibold text-slate-900">{goal.label}</p>
                        <p className="mt-2 text-sm leading-6 text-slate-600">{goal.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="section-card space-y-5">
                  <h3 className="font-display text-2xl font-semibold text-slate-950">策略 Strategy</h3>
                  <div className="space-y-4">
                    {strategies.map((strategy) => (
                      <div
                        className="flex gap-3 rounded-2xl border border-orange-100 bg-orange-50/60 p-4"
                        key={strategy}
                      >
                        <div className="mt-1 rounded-full bg-orange-500/10 p-2 text-orange-600">
                          <Target className="h-4 w-4" />
                        </div>
                        <p className="text-sm leading-7 text-slate-700 sm:text-base">{strategy}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-12 sm:py-16" id="what-we-do">
          <Container>
            <SectionHeading
              eyebrow="我们在做什么"
              title="用聚集、陪伴与培育，建立持续成长的青年网络"
              description="活动只是起点，真正重要的是之后的关系、装备与使命实践。"
            />

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {ministryHighlights.map((item) => (
                <FeatureCard
                  key={item.title}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </Container>
        </section>

        <section className="py-12 sm:py-16" id="join">
          <Container>
            <SectionHeading
              eyebrow="参与方式"
              title="你可以用不同方式，加入这段同行旅程"
              description="无论你想参加聚会、投入服事、代祷守望或资源支持，都欢迎先与我们联系。"
            />

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {participationWays.map((item) => (
                <div className="section-card flex h-full flex-col" key={item.title}>
                  <div className="rounded-2xl bg-orange-500/10 p-3 text-orange-600">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-slate-700 sm:text-base">
                    {item.description}
                  </p>
                  <div className="mt-6">
                    <CTAButton href="#contact" size="sm">
                      前往联系
                    </CTAButton>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="pb-16 pt-12 sm:pb-20 sm:pt-16" id="contact">
          <Container>
            <SectionHeading
              eyebrow="联系我们"
              title="把你的回应告诉我们"
              description="填写表单后会直接打开你的邮件客户端，并自动拼好主题与内容。"
            />

            <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
              <ContactForm />

              <div className="section-card space-y-6">
                <div>
                  <p className="text-sm font-semibold tracking-[0.24em] text-amber-700">联系方式</p>
                  <h3 className="mt-3 font-display text-2xl font-semibold text-slate-950">
                    保持连接
                  </h3>
                </div>

                <div className="rounded-3xl bg-orange-50 p-5">
                  <p className="text-sm text-amber-700">邮箱联系</p>
                  <p className="mt-2 text-base leading-7 text-slate-700">
                    填写左侧表单后会自动打开邮件客户端；如果你想直接联系，也可以发送邮件至
                  </p>
                  <a
                    className="mt-3 inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-900 shadow-sm transition hover:bg-orange-100"
                    href={`mailto:${CONTACT_EMAIL}`}
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>

                <div className="space-y-3">
                  <div className="rounded-2xl border border-orange-100 bg-white p-4">
                    <p className="font-semibold text-slate-900">社交媒体</p>
                    <a
                      className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-orange-700 transition hover:text-orange-800"
                      href={INSTAGRAM_URL}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <Instagram className="h-4 w-4" />
                      Instagram：{INSTAGRAM_HANDLE}
                    </a>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      欢迎先在 Instagram 关注我们，最新动态会优先更新在这里。
                    </p>
                  </div>
                  <div className="rounded-2xl border border-orange-100 bg-white p-4">
                    <p className="font-semibold text-slate-900">适合先联系的人</p>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      想报名、想成为同工、愿意代祷或希望支持事工的人，都可以先留下联络方式。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <footer className="border-t border-orange-100/80 bg-white/70 py-8">
        <Container className="flex flex-col gap-3 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} 心火同行欧洲青年事工 HeartFire Journey.</p>
          <p className="font-medium text-amber-800">在真理中被点燃，在欧洲各地同行到底。</p>
        </Container>
      </footer>
    </>
  );
}
