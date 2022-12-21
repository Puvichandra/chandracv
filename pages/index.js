import Head from 'next/head'
import Image from 'next/image'
import CircleProgressBar from '../components/circular-progrsspbar'
import ExperienceTopComp from '../components/experience-comp'

import LandingComponent from '../components/landing'
import OtherCertiicateComp from '../components/other-training'
import RatingStars from '../components/rating-comp'
import SkillratingComp from '../components/skill-rating'
import TimelineComp from '../components/timeline'








export default function Home() {
  return (
   
    <div>
    <Head>
    
<script async src="https://www.googletagmanager.com/gtag/js?id=G-1N3Q1LE25Y"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)}
  gtag('js', new Date());

  gtag('config', 'G-1N3Q1LE25Y');
</script>
  
    <meta name="description" CONTENT="Landing Gear MRO"/>
    <title>Home</title>
    <meta property='og:title' content="Chandrasekar"/>
    </Head>
<LandingComponent />
<TimelineComp />
<ExperienceTopComp/>
<OtherCertiicateComp/>

<SkillratingComp />
<RatingStars />

</div>

  )
}
