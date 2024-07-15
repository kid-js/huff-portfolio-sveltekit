<script>
    import {
        setAndRemoveClass as animateTitle
    } from './../../helpers/setAndRemoveClass.js';
    import { animationsOptions } from './../../config/animationsConfig.js';
    import { throttle } from './../../helpers/throttle.js';
    import { page } from '$app/stores';

    const options = animationsOptions.contactTitle;
    const accentTitle = throttle(animateTitle.bind({}, options), options.delay);

    function getMenuItem(currentPage, pathName, text) {
        if (currentPage === pathName) {
            return `<span class="current-page-menu-item"> ${text} </span>`;
        }
        return `<a class="header__link" href=${pathName}> ${text} </a>`;
    }

    let { isPageScrolled } = $props();
</script>

<svelte:options runes={true} />

{#snippet title()}
    <h1 class="header__title">
        <span class="accent-text-title visible-desktop">Jonnas</span>
        <span class="accent-text-title visible-mobile">J.</span> Huff
    </h1>
{/snippet}

<header class="header" class:header_small={isPageScrolled}>
    <div class="wrapper wrapper_header">
        {#if $page.url.pathname === '/'}
            {@render title()}
        {:else}
            <a class="header__link" href="/"> {@render title()} </a>
        {/if}

        <ul class="header__menu" role="menu">
            <li class="visible-desktop" role="menuitem">
                {@html getMenuItem($page.url.pathname, '/', 'Main')}
            </li>
            <li role="menuitem">
                {@html getMenuItem($page.url.pathname, '/about', 'About')}
            </li>
            <li role="menuitem">
                {@html getMenuItem($page.url.pathname, '/projects', 'Projects')}
            </li>
        </ul>

        <a
            class="button button_solid button_small"
            href="#contact"
            onclick={accentTitle}
        >
            <span class="button__text"> Contact </span>
            <span class="button__hover button__hover_small"> Contact </span>
        </a>
    </div>
</header>

<style>

</style>