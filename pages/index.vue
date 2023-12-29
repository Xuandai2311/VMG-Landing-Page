<template>
  <div class="mt-20">
    <hero />
    <features />
    <speaker />
    <prices />
    <call-to-action />
  </div>
</template>

<script>
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Speaker from '@/components/Speaker'
import Prices from '@/components/Prices'
import CallToAction from '@/components/CallToAction'

export default {
  name: 'LandingPage',
  components: {
    hero: Hero,
    features: Features,
    speaker: Speaker,
    prices: Prices,
    'call-to-action': CallToAction
  }
}
</script>
