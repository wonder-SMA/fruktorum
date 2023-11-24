<script setup lang="ts"></script>

<template lang="pug">
footer.footer
  div.footer__site-section
    div.footer__site-info
      NuxtLink(to="/" aria-label="Go to homepage")
        NuxtImg(src="logo.svg" width="133" height="32" loading="lazy" alt="Logo")
      p.footer__site-desc
        | Cтатьи о дизайне и искусстве, которые исследуют творческие вдохновения и актуальные тенденции, раскрывая мир эстетики и креативности
    div.footer__site-social
      div.footer__site-email
        span.footer__site-email-title email
        span.footer__site-email-text testblogsupport@gmail.com
      div.footer__site-social-media
        NuxtImg(src="fb-icon.svg" width="30" height="30" loading="lazy" alt="fb icon")
        NuxtImg(src="vk-icon.svg" width="30" height="30" loading="lazy" alt="vk icon")
        NuxtImg(src="inst-icon.svg" width="30" height="30" loading="lazy" alt="inst icon.")
        NuxtImg(src="tg-icon.svg" width="30" height="30" loading="lazy" alt="tg icon")
  SubscribeForm
</template>

<style lang="scss" scoped>
.footer {
  min-height: 332px;
  margin-top: clamp(200px / 2.5, 100vw * 200 / 1340, 200px);

  .footer__site-section {
    padding: clamp(50px / 4, 100vw * 50 / 1340, 50px) clamp(78px / 4, 100vw * 78 / 1340, 78px)
      clamp(70px / 4, 100vw * 70 / 1340, 70px) 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .footer__site-info {
      margin-right: 20px;
      display: flex;
      flex-direction: column;
      gap: 20px;

      .footer__site-desc {
        width: 100%;
        max-width: 426px;
        font-size: clamp(12px, 100vw * 14 / 1340, 14px);
        line-height: 20px;
        color: var(--Gray);
      }
    }

    .footer__site-social {
      padding-top: 14px;
      display: flex;
      flex-direction: column;
      gap: clamp(20px, 100vw * 24 / 992, 24px);

      .footer__site-email {
        display: flex;
        flex-direction: column;

        .footer__site-email-title {
          font-size: clamp(12px, 100vw * 14 / 1340, 14px);
          line-height: calc(20 / 14);
          color: var(--Gray);
        }

        .footer__site-email-text {
          font-size: clamp(16px, 100vw * 18 / 1340, 18px);
          line-height: calc(22 / 18);
          color: var(--Text);
        }
      }

      .footer__site-social-media {
        display: flex;
        flex-direction: row;
        gap: 20px;
      }
    }
  }
}

@media screen and (min-width: 768px) {
  .footer {
    .footer__site-section {
      flex-direction: row;
    }
  }
}

@media screen and (min-width: 992px) {
  .footer {
    .footer__site-section {
      padding: 50px 78px 70px 0;
    }
  }
}
</style>
