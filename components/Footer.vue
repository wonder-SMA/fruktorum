<script setup lang="ts"></script>

<template>
  <footer class="footer">
    <div class="footer__site-section">
      <div class="footer__site-info">
        <NuxtLink to="/">
          <NuxtImg src="logo.svg" width="133" height="32" quality="100" />
        </NuxtLink>
        <p class="footer__site-desc">
          Cтатьи о дизайне и искусстве, которые исследуют творческие вдохновения и актуальные
          тенденции, раскрывая мир эстетики и креативности
        </p>
      </div>
      <div class="footer__site-social">
        <div class="footer__site-email">
          <span class="footer__site-email-title">email</span>
          <span class="footer__site-email-text">testblogsupport@gmail.com</span>
        </div>
        <div class="footer__site-social-media">
          <NuxtImg src="fb-icon.svg" width="30" height="30" quality="100" />
          <NuxtImg src="vk-icon.svg" width="30" height="30" quality="100" />
          <NuxtImg src="inst-icon.svg" width="30" height="30" quality="100" />
          <NuxtImg src="tg-icon.svg" width="30" height="30" quality="100" />
        </div>
      </div>
    </div>
    <SubscribeForm />
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  width: 100%;
  height: 332px;
  margin-top: 200px;

  .footer__site-section {
    padding: 50px 0 70px 0;
    display: flex;
    gap: 602px;

    .footer__site-info {
      display: flex;
      flex-direction: column;
      gap: 20px;

      .footer__site-desc {
        width: 426px;
        font-size: 14px;
        line-height: 20px;
        color: var(--Gray);
      }
    }

    .footer__site-social {
      padding-top: 14px;
      display: flex;
      flex-direction: column;
      gap: 24px;

      .footer__site-email {
        display: flex;
        flex-direction: column;

        .footer__site-email-title {
          font-size: 14px;
          line-height: 20px;
          color: var(--Gray);
        }

        .footer__site-email-text {
          font-size: 18px;
          line-height: 22px;
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
</style>
