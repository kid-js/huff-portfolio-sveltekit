<script>
    import '../app.css';

	import Header from './../lib/components/Header.svelte';
	import Footer from './../lib/components/Footer.svelte';
	import ArrowUp from './../lib/icons/Arrow-up.svelte';

    let isPageScrolled = $state(false);

    async function initParticlesAndToTopButton() {
        const {particles} = await import('../config/particles.init.config.js');

        const observerTarget = document.querySelector('.particles-bg');
        const toTopButton = document.querySelector('.to-top-button');

        const callback = (entries) => {
            if (entries[0].isIntersecting) {
                isPageScrolled = entries[0].intersectionRatio < 0.95;

                particles.resumeAnimation();
                // particles.pauseAnimation();
                toTopButton.removeAttribute('style');
            }
            else {
                particles.pauseAnimation();
                toTopButton.style.bottom = '20px';
            }
        };

        const options = {
            threshold: [0.1, 0.95],
        };

        const observer = new IntersectionObserver(callback, options);
        observer.observe(observerTarget);
    }

    $effect(initParticlesAndToTopButton);

    let { children } = $props();
</script>

<svelte:options runes={true} />

<svelte:head>
    <link
        rel="preload"
        as="font"
        type="font/woff2"
        href="fonts/poppins-v20-latin-regular.woff2"
    />
    <link
        rel="preload"
        as="font"
        type="font/woff2"
        href="fonts/poppins-v20-latin-600.woff2"
    />
</svelte:head>

<Header {isPageScrolled} />

<main class="main">
    {@render children()}
</main>

<Footer/>

<a class="to-top-button" href="#top" title="Scroll to top" role="button">
    <ArrowUp />
</a>

<style>

</style>