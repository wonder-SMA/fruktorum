<script setup lang="ts">
defineProps<{
  data: string;
}>();

const sectionRef = ref(null);

onMounted(() => {
  if (sectionRef.value) {
    const elements = (sectionRef.value as HTMLElement).getElementsByTagName('blockquote');
    const img = document.createElement('img');
    img.src = 'blockquote-icon.svg';

    const onLoad = () => {
      img.setAttribute(
        'style',
        'position: absolute; top: 0; left: 0; width: min(100vw * 80 / 1340, 80px); aspect-ratio: 80 / 64;'
      );

      for (let i = 0; i < elements.length; i++) {
        const footerTextArr = elements[i]?.lastChild?.textContent?.split(', ');

        if (footerTextArr && footerTextArr.length > 1) {
          (elements[i].lastChild as HTMLElement).innerHTML = footerTextArr
            .map((text, idx) => text + (idx + 1 < footerTextArr.length ? ',<br/>' : '<br/>'))
            .join('');
        }
        elements[i].append(img);
      }
      removeEventListener('load', onLoad);
    };

    img.addEventListener('load', onLoad, { once: true });
  }
});
</script>

<template lang="pug">
section.article-text(:ref="(el) => sectionRef = el" v-html="data")
</template>

<style lang="scss">
.article-text {
  width: 100vw;
  margin: 0;

  h2 {
    margin-bottom: clamp(20px, 100vw * 50 / 1340, 50px);
    font-size: clamp(34px / 1.4, 100vw * 34 / 1340, 34px);
    font-weight: 800;
    line-height: calc(46 / 34);
    color: var(--Text);
  }

  ul {
    margin: 15px 0 20px 0;
    padding-left: min(100vw * 136 / 1340, 136px);
    list-style: none;

    li {
      position: relative;
    }

    li::before {
      position: absolute;
      top: 9px;
      left: -20px;
      width: 8px;
      height: 8px;
      border-radius: 1px;
      content: '';
      background-color: var(--Text);
      transform: rotate(45deg);
    }
  }

  p,
  li {
    font-size: clamp(16px, 100vw * 18 / 1340, 18px);
    line-height: calc(26 / 18);
  }

  p {
    margin-bottom: 20px;
    color: var(--Text);
  }

  p:has(~ ul) {
    margin-bottom: 0;
  }

  li {
    color: var(--Black);
  }

  p:last-child {
    margin-bottom: 0;
  }

  blockquote {
    position: relative;
    margin-top: clamp(30px, 100vw * 40 / 1340, 40px);
    padding-left: min(100vw * 116 / 1340, 116px);
    display: flex;
    flex-direction: column;

    p {
      margin-bottom: 15px;
      font-style: italic;
      font-weight: 300;
    }

    footer {
      font-size: clamp(12px, 100vw * 14 / 1340, 14px);
      line-height: calc(20 / 14);
      color: var(--Gray);
    }
  }
}

@media screen and (min-width: 768px) {
  .article-text {
    width: clamp(768px, 100vw * 884 / 1340, 884px);
    margin: 0 auto;
  }
}
</style>
