<script setup>
import HelloWorld from '@/components/HelloWorld.vue';
</script>

<template>
  <main>
    <HelloWorld />
    <BButton
      variant="card"
      size="xs"
    >
      Extra Small
    </BButton>

    <BButton
      variant="card"
      size="sm"
    >
      Small
    </BButton>

    <BButton
      variant="card"
      size="md"
    >
      Medium
    </BButton>

    <BButton
      pill
      variant="card"
      size="lg"
      full
    >
      Large
    </BButton>
  </main>
</template>
