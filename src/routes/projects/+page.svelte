<script>
    import Step from './../../lib/components/Step.svelte';

    const steps = [
        {   name: 'Kojo Website',
            logo: 'kojo',
            link: '#!',
            description: `Kojo Senpai Festival website made with
                <span class="accent-text">
                Next.js, Tailwind CSS, Node.js + Express.js</span>
                and <span class="accent-text">Strapi</span>
                for content management.`,
        },
        {   name: 'Konbini App',
            logo: 'konbini',
            link: '#!',
            description: `Konbini is an ultimate Full Stack
                <span class="accent-text">
                Next.js, Node.js + Express.js</span> and
                <span class="accent-text">Firebase</span>
                CRUD web application.`,
        },
        { name: 'Taiko Store',
            logo: 'taiko',
            link: '#!',
            description: `Merchanising store created with
                <span class="accent-text">Next.js,
                Commerce.js, Node.js + Express.js</span> and
                <span class="accent-text">Stripe</span>,
                which is used for all transaction handling.`,
        },
    ];
</script>

<svelte:head>
    <meta name="description" content="Jonnas Huff's projects">
    <title>Jonnas Huff - Projects</title>
</svelte:head>

<section class="projects">
    <div class="wrapper wrapper_projects">
        <header class="projects__header">
            <h3 class="projects__subtitle">
                Curious to <span class="accent-text-title">see</span> my work?
            </h3>

            <div class="projects__video">
                <a class="button button_main button_large" href="#!">
                    <div class="button-wrapper">
                        <span class="button__icon">
                            <svg viewBox="0 0 286.054 286.054">
                                <use href="/icons/icons-set.svg#play"></use>
                            </svg>
                        </span>
                        <span class="button__text"> Watch the video </span>
                    </div>
                    <span class="button__hover button__hover_border"></span>
                </a>
            </div>
        </header>

        <div class="projects__list">
            <h2 class="projects__title">
                A few of <span class="accent-text-title"> my </span> creative
                <span class="accent-text-title"> endeavors </span>
            </h2>

            {#each steps as step}
                <Step {step} />
            {/each}
        </div>
    </div> <!-- end of div "wrapper_projects" -->
</section>

<style>
    .wrapper_projects,
    .projects__header,
    .projects__list {
        display: grid;
        gap: 68px;
    }

    .projects__header {
        gap: 48px;
    }

    .projects__list {
        gap: 76px;

        @media screen and (min-width: 1024px) {
            gap: 88px 56px;
            grid-template-columns: 1fr 1fr 1fr;
        }
    }

    .projects__title {
        font-size: var(--fs-h2);
        font-weight: var(--fw-h2);

        @media screen and (min-width: 1024px) {
            grid-area: 1 / 1 / 2 / 4;
        }
    }

    .projects__subtitle {
        font-size: var(--fs-h1);
    }

    .button_large > .button-wrapper {
        padding: 10px 18px;
    }

    .button__icon {
        display: flex;
        align-items: center;
    }

    .button_large .button__icon {
        width: 20px;
    }
</style>