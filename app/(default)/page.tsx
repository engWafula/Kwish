export const metadata = {
  title: 'Home',
  description: 'We are committed to deepening ﬁnancial inclusion through technology and enabling shared prosperity. We are more than a company, Kwish Cash is beyond Banking.',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'
import Payment from '@/components/payment'

export default function Home() {
  return (
    <>
      <Hero />
      {/* <Features /> */}
      <Zigzag />
      <Testimonials />
      <Payment/>
      <Newsletter />
    </>
  )
}
