<script setup lang="ts">
const config = useRuntimeConfig()

useHead(() => {
  const scripts = config.public.umamiWebsiteId && config.public.umamiHost
    ? [
        {
          src: `${config.public.umamiHost}/script.js`,
          defer: true,
          'data-website-id': config.public.umamiWebsiteId,
        },
      ]
    : []

  return {
    title: 'Self-hosted Website Base',
    meta: [
      {
        name: 'description',
        content: 'A Nuxt starter wired for self-hosted analytics and blog infrastructure.',
      },
    ],
    script: scripts,
  }
})
</script>

<template>
  <main class="page-shell">
    <section class="intro">
      <p class="eyebrow">
        Nuxt + Umami + Ghost
      </p>
      <h1>Self-hosted website base</h1>
      <p class="summary">
        A deployable Nuxt starter for a website stack with self-hosted analytics and blog services.
      </p>
    </section>

    <section class="service-grid" aria-label="Stack services">
      <article>
        <span>Website</span>
        <strong>Nuxt</strong>
      </article>
      <article>
        <span>Analytics</span>
        <strong>Umami</strong>
      </article>
      <article>
        <span>Blog</span>
        <strong>Ghost</strong>
      </article>
    </section>
  </main>
</template>

<style>
:root {
  color: #17221f;
  background: #eef3ef;
  font-family:
    Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

body {
  margin: 0;
}

.page-shell {
  min-height: 100vh;
  display: grid;
  align-content: center;
  gap: 48px;
  padding: 48px;
  box-sizing: border-box;
  background:
    linear-gradient(135deg, rgba(83, 116, 104, 0.18), transparent 42%),
    #eef3ef;
}

.intro {
  max-width: 760px;
}

.eyebrow {
  margin: 0 0 16px;
  color: #4a675e;
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 0;
  text-transform: uppercase;
}

h1 {
  margin: 0;
  color: #14211d;
  font-size: clamp(3rem, 8vw, 6.5rem);
  line-height: 0.96;
  letter-spacing: 0;
}

.summary {
  max-width: 620px;
  margin: 24px 0 0;
  color: #40534d;
  font-size: 1.25rem;
  line-height: 1.6;
}

.service-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  max-width: 860px;
}

.service-grid article {
  min-height: 112px;
  display: grid;
  align-content: space-between;
  padding: 20px;
  border: 1px solid rgba(20, 33, 29, 0.14);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.58);
}

.service-grid span {
  color: #63766f;
  font-size: 0.85rem;
}

.service-grid strong {
  color: #16231f;
  font-size: 1.35rem;
}

@media (max-width: 720px) {
  .page-shell {
    padding: 28px;
  }

  .service-grid {
    grid-template-columns: 1fr;
  }
}
</style>
