<script>
    import '../app.css';

	import Header from './../lib/components/Header.svelte';
	import Footer from './../lib/components/Footer.svelte';

    let isPageScrolled = $state(false);

    async function initParticlesAndToTopButton() {
        const observerTarget = document.querySelector('.particles-bg');
        const toTopButton = document.querySelector('.to-top-button');

        if (!toTopButton || !observerTarget) { return; }

        let minDistance = 215;
        let maxParticles = 30;
        const width = document.body.offsetWidth;

        if (width < 960) {
            minDistance = 165;
            maxParticles = 19;
        }
        else if (width > 1600) {
            minDistance = 265;
            maxParticles = 36;
        }

        const particles = Particles.init({ // eslint-disable-line no-undef
            selector: '.particles-bg',
            color: ['#9290C3', '#836FFF'],
            connectParticles: true,
            sizeVariations: 2,
            speed: 0.275,
            maxParticles,
            minDistance,
        });

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
        crossorigin
    />
    <link
        rel="preload"
        as="font"
        type="font/woff2"
        href="fonts/poppins-v20-latin-600.woff2"
        crossorigin
    />
    <link
        rel="preload"
        as="font"
        type="font/woff2"
        href="/fonts/poppins-v20-latin-500.woff2"
        crossorigin
    >
</svelte:head>

<Header {isPageScrolled} />

<main class="main">
    {@render children()}
</main>

<Footer/>

<a class="to-top-button" href="#top" title="Scroll to top" role="button">
    <svg viewBox="0 0 24 24">
        <use href="/icons/icons-set.svg#arrow-up"></use>
    </svg>
</a>