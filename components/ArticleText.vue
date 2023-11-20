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
      img.setAttribute('style', 'position: absolute; top: 0; left: 0;');
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

<template>
  <section ref="sectionRef" class="article-text" v-html="data"></section>
</template>

<style lang="scss">
.article-text {
  width: 884px;
  margin: 0 auto;

  h2 {
    margin-bottom: 50px;
    font-size: 34px;
    font-weight: 800;
    line-height: 46px;
    color: var(--Text);
  }

  ul {
    margin: 15px 0 20px 0;
    padding-left: 136px;
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
    font-size: 18px;
    line-height: 26px;
  }

  p {
    margin-bottom: 20px;
    color: var(--Text);
  }

  li {
    color: var(--Black);
  }

  p:last-child {
    margin-bottom: 0;
  }

  blockquote {
    position: relative;
    margin: 20px 0;
    padding-left: 116px;
    display: flex;
    flex-direction: column;

    p {
      margin-bottom: 15px;
      font-style: italic;
      font-weight: 300;
    }

    footer {
      font-size: 14px;
      line-height: 20px;
      color: var(--Gray);
    }
  }

  blockquote:last-child {
    margin: 20px 0 0 0;
  }
}
</style>
