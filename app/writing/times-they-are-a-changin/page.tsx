import type { Metadata } from "next";
import { Suspense } from "react";
import SongHeading from "@/components/SongHeading";
import BackLink from "@/components/BackLink";
import NextArticle from "@/components/NextArticle";

export const metadata: Metadata = {
  title: "The Times They Are A-Changin' — Ben Appleyard",
  description:
    "Observations on the effects of mass AI adoption in a large organisation within the product and technology sphere.",
};

export default function TimesTheyAreAChangin() {
  return (
    <main className="min-h-screen bg-surface">
      <div className="max-w-[680px] mx-auto px-6 md:px-8 pt-24 pb-32">

        <Suspense fallback={null}>
          <BackLink />
        </Suspense>

        {/* Header */}
        <div className="mb-12">
          <SongHeading
            videoId="90WD_ats6eE"
            as="h1"
            className="mt-4 text-[36px] md:text-[48px] font-extrabold text-ink tracking-[-1.5px] leading-[1.1] flex items-center gap-3"
            style={{ fontFamily: "ThermalRegular", fontWeight: 400 }}
          >
            The Times They Are A-Changin&apos;
          </SongHeading>
          <div className="mt-4 flex items-center gap-4 text-[13px] text-muted">
            <span>Apr 2026</span>
            <span>·</span>
            <span>7 min read</span>
          </div>
        </div>

        {/* Intro */}
        <p className="text-[17px] text-[#444] dark:text-[#bbb] leading-[175%]">
          Nobody needs another article or essay detailing all the ways in which product development
          and design are changing. So skipping the obvious, I thought I&apos;d share some of my
          observations about the effects of mass AI adoption in a large organisation within the
          product and technology sphere. I will stress that these are my thoughts and observations
          and mine alone. Our world is changing and I believe that it&apos;s a useful exercise to
          keep track of that.
        </p>

        {/* Section 1 */}
        <SongHeading videoId="6vTn8qUYHEw">All that Glitters is not Gold</SongHeading>

        <div className="space-y-5 text-[17px] text-[#444] dark:text-[#bbb] leading-[175%]">
          <p>
            If early stage LLMs are sycophantic, then organisations who have invested in AI
            are… sycophantic-er?
          </p>
          <p>
            The slack channel explodes every week; someone has built something for themselves
            over the weekend. Flames, rockets and claps light up your feed. LLM generated
            summaries of said &apos;something&apos; sound good but say little. Then, a senior
            figure chimes in with a flames emoji and people take notice. They even comment:
          </p>
          <p>
            <em>&apos;I love this initiative&apos;</em>. More flames emojis follow. Someone even adds a
            heart, a rocket and a party popper. The excitement amplifies, the frenzy intensifies.
            You sit and ponder what your contributions to &apos;AI success stories&apos; are going
            to be.
          </p>
          <p>
            But a voice in the back of your head just won&apos;t stop pestering you.
            <em>&apos;What the hell are they talking about?&apos;</em>, <em>&apos;I don&apos;t understand&apos;</em>.
          </p>
          <p>
            To be clear, when people are embarking on side quests and building their new AI powered
            lives - all power to them. This is a time for the brave and the curious. It&apos;s a
            time for experimentation and ingenuity. If you work in tech and you&apos;re not
            experimenting, you probably should be. I am on that journey myself, just as many other
            practitioners are too. We all know the lay of the land and we know that to foster an
            environment of mass adoption (followed by the implicit assumption of a mass boost in
            productivity) we must be encouraging and optimistic. It would be counterproductive to
            rain on someone&apos;s parade who has likely spent several hours experimenting with AI;
            leadership is all about empowering others.
          </p>
          <p>
            The issue for me, is that beneath it all, the same paradigms and problems that we were
            attempting to solve before AI adoption are still there - at least up to a point. And one
            of life&apos;s original, great questions persists for each and every endeavour:
            <em>&apos;what is the point?&apos;</em>.
          </p>
          <p>
            I don&apos;t mean this to sound flippant. I am not questioning the point of
            experimenting with AI but your experiment has to be useful. Not in the sense of roaring
            success; making &apos;mistakes&apos; and sharing your learnings is a legitimate
            cornerstone of science. But the project outcome cannot be considered success <em>just by virtue of the fact that you used AI</em>.
          </p>
          <p>
            My inner cynic wants to rename these types of Slack channels from &apos;AI success
            stories&apos; to &apos;I used AI&apos;. That little word &apos;success&apos; may be a
            positive one, but in this context, it can have a hugely detrimental impact on critical
            thought. Guess how many challenges or constructive criticisms I have seen in this
            channel of thousands of posts and 4000 people? I can count on one hand.
          </p>
          <p>
            Curious about this, I&apos;ve asked over a dozen colleagues from different disciplines:
            <em>&apos;what&apos;s your view on the &apos;AI success stories channel&apos;?&apos;</em>. Here
            are a few responses:
          </p>

          <blockquote className="border-l-2 border-edge pl-5 space-y-4 text-[16px] text-[#666] dark:text-[#999]">
            <p className="italic">&apos;To be honest, I&apos;ve muted that channel. Those posts all just feel generic, it feels like spam&apos;</p>
            <p className="italic">&apos;I want to challenge but I think I&apos;ll just look like a Luddite&apos;</p>
            <p className="italic">&apos;I think a lot of it is nonsense but I wouldn&apos;t bother commenting, I don&apos;t want to look like a d***&apos;</p>
          </blockquote>

          <p>
            Despite all the apparent positivity surrounding the channel, the silent majority may
            harbour significant skepticism; not skepticism of AI, not skepticism of experimentation,
            but skepticism of <em>every outcome being positive</em>. Certainly, the people that I spoke to
            feel that constructive criticism and healthy debate are off the table.
          </p>
          <p>
            I suppose my observation is that whilst an initial challenge to all employees to become
            AI native was helpful, the total and absolute endorsement of each and every shared use
            of AI - championed by leadership (intentionally or not) - has created a sycophantic
            environment where mediocre output is paraded triumphantly and we risk inducing a mass
            case of Dunning Kruger.{" "}
            <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3240751/" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline underline-offset-4 decoration-blue-300 hover:text-blue-500 transition-colors">There is plenty of evidence of this happening elsewhere also.</a>{" "}
            Many employees are fearful of going against the grain, whilst in some cases, attitudes
            have descended into apathy. I would argue that <em>jeopardises</em> an empowered environment.
          </p>
          <p>
            Too many times I&apos;ve seen bewildering problem statements, reverse written into
            something someone has built, or a prototype that struggles badly when crosschecked
            against basic HCI principles. The makers of such items should not be shamed or attacked,
            we are all learning and we are in this together; but sometimes, a challenge to improve
            something goes an awfully long way.
          </p>
          <p>
            I do question whether this is just teething problems; perhaps if you&apos;re not in the
            know when it comes to AI, you may feel that it is not your place to critique
            others&apos; projects. But the truth is we are all apprentices - relatively speaking. No
            one has been using AI for long enough to be an expert and therefore I would&apos;ve
            thought there must be some acknowledgement that we are likely getting an awful lot wrong
            along the way.
          </p>
          <p>
            I think back to product critique sessions from many a year ago and the debate was
            intense, the ideas were robust and the mental stimulation was palpable (not always, but
            often). I accept that we are in the infancy of this brave new world, the goalposts have
            moved and we all must move with them, but I do wonder if we are on the cusp of
            compromising or even losing something deeply valuable.
          </p>
        </div>

        {/* Section 2 */}
        <SongHeading videoId="RAh6Dj9C9Tc">Quest for Coin</SongHeading>

        <div className="space-y-5 text-[17px] text-[#444] dark:text-[#bbb] leading-[175%]">
          <p>
            My second observation is that people are far more willing to step on others&apos; toes.
            This is a natural byproduct of the assembly layer disappearing; you can no longer demand
            others stay in their lane because the lanes all blur into one. If you think about it,
            this is hardly a new concept; on a granular level, &apos;UX/UI Designer&apos; was and
            is a title that has been in the industry for years but for the purists, that&apos;s an
            egregious term - UX and UI are different disciplines within design. Yet perhaps if your
            title is &apos;Product Designer&apos;, you may simply shrug your shoulders and say
            &apos;well I do both&apos;. And in a start up, this is basically the norm: hire a
            generalist and watch them cook; their day to day will cover all kinds of tasks.
          </p>
          <p>
            The same thing is happening now, although admittedly in a far more disruptive sense.
            I&apos;ve witnessed a push for all product and technology practitioners to adopt an
            entrepreneurial mindset. If you simply regard that as a call to arms for all of us to
            take more initiative, then I can only see that as a good thing.
          </p>
          <p>
            There are risks with this, however, which I would imagine are self-evident. One is that
            experts will find themselves having new conflicts with people who clearly are not
            informed enough to debate the topic at hand. Such a dynamic is not new per se but
            imagine you are a designer of 20 years with exemplary credentials and you have a product
            manager sending engineers fully coded prototypes without consulting you. You first lay
            eyes on it only once engineers have started inspecting it and then you spot <em>dozens</em> of UX
            flaws. Existential questions come into play: who is the designer here? Why was I not
            aware of this before? <em>What are you doing?</em> Where previously, a rejection of poorly
            thought out product proposals would be part of your responsibilities, you are now
            relegated to an afterthought.
          </p>
          <p>
            With the right governance, maybe this isn&apos;t a problem, maybe this literally is the
            new way of working. An unwavering commitment to old product pyramids and a resistance to
            change is going to look ridiculous in 2 years. I imagine it will look foolish in 6
            months. We are all anticipating a restructuring of product teams (it&apos;s already
            happening); less people will be needed to do the same things. What once required a team
            of 10, may only require a team of 3. And to be honest, if a product practitioner of an
            arguably arbitrary title is good at their craft, who&apos;s to say they shouldn&apos;t
            step on others&apos; toes? Further still, <a href="https://www.insidergrowthhq.com/p/generalists-arent-dead-the-rise-of" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline underline-offset-4 decoration-blue-300 hover:text-blue-500 transition-colors">if we are all on the road to generalism</a>, those
            toes might not be there to step on much longer anyway.
          </p>
          <p>
            But &apos;governance&apos; is a very serious word in a world of such extreme change. If
            a first risk is alienating experts, then a second is rewarding the wrong people.
          </p>
          <p>
            Let me tell you a story about two product managers named Rob and Bob. Rob is a doer;
            they are energetic, proactive and love to take initiative. They are ambitious, motivated
            and intelligent. They have an inner confidence and they are efficient. They are also
            uncompromising, lacking in curiosity and have a habit of disregarding others.
          </p>
          <p>
            Bob is a thinker; they are measured, deeply invested in both data analysis and
            qualitative research. They are committed to rigorous product methodology and refuse to
            rush or make wild assumptions. They too, are intelligent but they are willing to defer
            to others where necessary.
          </p>
          <p>
            Over the past 12 months, guess who has been rampantly building their own ideas,
            bypassing designers and engineers. I&apos;ll give you a clue: it&apos;s not Bob. And
            which of the two would you trust to leverage AI to make better decisions? I&apos;ll give
            you a clue: it&apos;s not Rob.
          </p>
          <p>
            Therein lies a problem. When you throw down the gauntlet, you may trigger a wave of
            activity from people like Rob who - while efficient and proactive - are prone to being
            irresponsible and overestimating their own ability. If Rob is positionally rewarded for
            their initiative, up to a point you might argue that they deserve it - they&apos;ve
            worked hard and have made shipping easier.
          </p>
          <p>
            But is the product improving? Is the user experience meticulously crafted? Do we really
            know what the point of Rob&apos;s work was? Is Rob-powered AI really better than the
            team that they are set to replace? It is paramount that leadership don&apos;t lose sight
            of what makes a good product in the first place. Just because people <em>can</em>, doesn&apos;t
            mean they <em>should</em>. Let us not elevate the status of those who are busy just because they
            are busy. <a href="https://www.inc.com/ben-sherry/what-is-tokenmaxxing-ai-productivity-hack/91328999?utm_source=thedeepview&utm_medium=newsletter&utm_campaign=why-ai-agent-slop-is-overwhelming-workers&_bhlid=d6f0664631e92ea2b9e288cb7fcef05e6275fa70" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline underline-offset-4 decoration-blue-300 hover:text-blue-500 transition-colors">Such behaviour is well documented in the technology world</a>; I can&apos;t
            imagine that it always ends well.
          </p>
          <p>
            Part of me loves knowing that I can now build a product in an evening. Part of me sits
            pensively in anticipation of the bad decisions that may be on the horizon.
          </p>
        </div>

        {/* Section 3 */}
        <SongHeading videoId="0dJ30dREjaE">Give a little bit</SongHeading>

        <div className="space-y-5 text-[17px] text-[#444] dark:text-[#bbb] leading-[175%]">
          <p>
            Conscious that there&apos;s a current of criticism with a splash of sarcasm flowing
            through the previous two subsections, here&apos;s a positive observation:
          </p>
          <p>
            Something that I&apos;ve always found heartening and enjoyable about working in the
            design world is that there has never been any shortage of advice to go around. So many
            kind individuals were willing to directly help me when I was first starting out and
            there are myriad practitioners around the world sharing their insights and expertise
            online. It&apos;s partly what inspired me to start writing myself.
          </p>
          <p>
            In a large organisation, however, I&apos;ve witnessed that things can stagnate somewhat;
            not specifically among designers necessarily, but among product and technology
            professionals in general. The downside of working on a singular product in a continuum
            is that true innovation can suffer and people fall into a <a href="https://www.ideatovalue.com/inno/nickskillicorn/2017/11/diminishing-law-innovation-returns-problem-better/#:~:text=Diminishing%20law%20of%20innovation%20returns%20and%20the%20problem%20with%20%E2%80%9Cbetter,diminishing%20law%20of%20innovation%20returns." target="_blank" rel="noopener noreferrer" className="text-blue-400 underline underline-offset-4 decoration-blue-300 hover:text-blue-500 transition-colors">trap of incrementalism</a>. Such
            an environment in turn contains silos, rigid disciplines and minimal change. Not to
            mention that a large organisation almost always suffers from burdensome layers of
            bureaucracy. I suppose you could argue that people become too comfortable - learning
            stutters and the status quo becomes impermeable. Momentum slows and inspiration
            disappears.
          </p>
          <p>
            As AI takes root everywhere, such a dynamic cannot hold for long. It shakes the
            foundations of what people know or thought they knew. When the paradigm genuinely
            shifts, those with a shred of curiosity within them scramble for clues, answers,
            resources or tools. And the knock on effect of that has been an improvement in sharing
            culture. As we sit together on the proverbial tip of the iceberg, many of us seem to
            embody the implicit understanding that we must share and support one another on our
            journey into the waters deep.
          </p>
          <p>
            Despite my quips about an absence of critical thinking in slack channels, my feeling is
            that we are in a golden age of information sharing. <em>So many colleagues and peers are
            learning so much.</em> And in the spirit of the design community that I have appreciated for
            years, all of these learnings are being passed around willingly and enthusiastically -
            in my experience at least. People are reimagining <em>the entire process</em>{" "}and despite the
            seemingly inescapable fear of the collapse of the economy and our humanoid overlords
            coming for us, right now I feel like it&apos;s worth appreciating all the new knowledge
            and intelligence at our disposal.
          </p>
        </div>

        <NextArticle
          title="I'm Looking Through You"
          slug="/writing/im-looking-through-you"
          date="Feb 2026"
          readTime="8 min"
        />
      </div>
    </main>
  );
}
