<script>
    import {
        setAndRemoveClass as animateTitle
    } from './../helpers/setAndRemoveClass.js';
    import { animationsOptions } from './../config/animationsConfig.js';
    import { throttle } from './../helpers/throttle.js';

    const options = animationsOptions.contactTitle;
    const accentTitle = throttle(animateTitle.bind({}, options), options.delay);
</script>

<svelte:head>
    <meta name="description" content="Jonnas Huff - Full-stack developer">
    <title>Jonnas Huff</title>
</svelte:head>

<section class="hero">
    <div class="wrapper wrapper_hero">
        <div class="hero__about">
            <h2 class="hero__title">
                Hi! I am <span class="accent-text-title">Jonnas</span> Huff
                <br />
                Full-stack <span class="accent-text-title">developer</span>
            </h2>

            <p class="hero__skills">
                My <span class="accent-text">favourite tech</span>
                includes <span class="accent-text">React & Next.js</span>
                (or Vue & Nuxt.js), TypeScript, Tailwind CSS, Node.js +
                Express.js + PostgreSQL or Firebase/Firestore!
            </p>

            <div class="hero__contact">
                <a
                    class="button button_solid button_large"
                    href="#contact"
                    onclick={accentTitle}
                >
                    <span class="button__text">
                        Get in touch &rarr;
                    </span>
                    <span class="button__hover button__hover_large">
                        Get in touch &rarr;
                    </span>
                </a>
            </div>
        </div>

        <div class="hero__picture">
            <picture>
                <source
                    type="image/avif"
                    media="(-webkit-min-device-pixel-ratio: 1.5)"
                    srcset="
                        img/profile-small.avif 800w,
                        img/profile-medium.avif 1000w,
                        img/profile-large.avif 1200w"
                />
                <source type="image/avif" srcset="img/profile-large.avif" />
                <source type="image/webp" srcset="img/profile.webp" />
                <img class="hero-img" src="img/profile.png" alt="Jonnas Huff" />
            </picture>
        </div>
    </div> <!-- end of div "wrapper" -->
</section> <!-- end of section "hero" -->

<style>

</style>