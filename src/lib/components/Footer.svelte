<footer class="footer">
    <div class="wrapper wrapper_footer">
        <div class="footer__header">
            <h3 class="footer__title">
                <span class="accent-text-title">Connect</span> with me
            </h3>
        </div>

        <ul class="footer__links" id="contact">
            <li class="footer__link">
                <a href="#!"> Email </a>
            </li>
            <li class="footer__link">
                <a href="#!"> LinkedIn </a>
            </li>
            <li class="footer__link">
                <a href="#!"> GitHub </a>
            </li>
        </ul>

        <p class="footer__copyright">
            &#169; Jonnas Huff, full-stack developer ·
            <a
                href="https://github.com/kid-js/huff-portfolio-sveltekit"
                target="_blank"
                rel="noopener noreferrer"
            >
                GitHub
            </a>
        </p>
    </div>
</footer>

<style>
    .footer,
    .wrapper_footer {
        display: grid;
        place-items: center;
        gap: 40px;
    }

    .footer {
        padding-top: 48px;
        margin-top: 48px;
        border-top: 1px solid var(--color-main-600);
        background-color: var(--color-main-900);
    }

    .footer__title {
        font-size: var(--fs-h2);
    }

    .footer__links {
        font-size: var(--fs-h4);
        display: grid;
        place-items: center;
        gap: 16px;
    }

    .footer__copyright {
        text-align: center;
        font-size: 14px;
        padding: 12px 0 24px;
        opacity: 0.5;
    }
</style>