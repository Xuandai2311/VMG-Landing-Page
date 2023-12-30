<template>
  <div class="mt-20">
    <hero />
    <features />
    <speaker />
    <event />
    <timeline />
    <location/>
    <introvmg/>
  </div>
</template>

<script>
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Speaker from '@/components/Speaker'
import Event from '@/components/Event'
import Timeline from '~/components/Timeline.vue'
import Location from '~/components/location.vue'
import IntroVMG from '~/components/IntroVMG.vue'

export default {
  name: 'LandingPage',
  components: {
    hero: Hero,
    features: Features,
    speaker: Speaker,
    event: Event,
    timeline: Timeline,
    location: Location,
    introvmg: IntroVMG
  }
}
</script>
