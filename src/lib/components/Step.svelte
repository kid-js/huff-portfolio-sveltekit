<script>
    let { step } = $props();
</script>

<svelte:options runes={true} />

<div class="card">
    <picture>
        <source type="image/avif" srcset="img/{step.logo}.avif" />
        <source type="image/webp" srcset="img/{step.logo}.webp" />
        <img
            class="card__logo"
            src="img/{step.logo}.jpg"
            loading="lazy"
            alt="{step.name} Logo"
            width="116" height="116"
        />
    </picture>

    <h4 class="card__title"> {step.name} </h4>
    <p class="card__description"> {@html step.description} </p>

    <a class="button button_main button_small" href="#!">
        <div class="button-wrapper">
            <span class="button__text"> Go to &rarr; </span>
        </div>
        <span class="button__hover button__hover_border"></span>
    </a>
</div>

<style>
    .card {
        padding: 76px 16px 20px;
        border: 2px solid var(--color-main-500);
        border-radius: 32px;
        background-color: var(--bg-dark);
        position: relative;

        & a:last-child {
            @media screen and (min-width: 1024px) {
                margin-top: auto;
            }
        }

        @media screen and (min-width: 1024px) {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }

    .card__logo {
        max-width: 116px;
        border: 8px solid var(--bg-dark);
        border-radius: 50%;
        position: absolute;
        top: -40px;
        left: 50%;
        transform: translateX(-50%);
    }

    .card__title {
        font-size: var(--fs-h4);
        font-weight: var(--fw-h2);
    }

    .card__description {
        margin: 16px 0 20px;
    }

    .button_small > .button-wrapper {
        padding: 2px 10px;
    }
</style>