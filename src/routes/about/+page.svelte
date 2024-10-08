<script>
    import Close from './../../lib/icons/Close.svelte';
	import Check from './../../lib/icons/Check.svelte';

    const benefits = [
        {   title: 'a self taught developer',
            text: `I taught myself to code using free online
                resources and absolutely fell in love with the creativity
                and problem solving that is involved in developing and
                engineering innovative new online experiences. Starting
                of with JavaScript, HTML & CSS and evolving my knowledge
                base to include JavaScript frameworks, backend programming,
                design, cloud services and much more.`,
        },
        {   title: 'a product design & UX fanatic',
            text: `Carefully crafting and designing amazing user
                experiences allows me to express and experiment with every
                morsel of creativity I have. I love the challenge of
                learning new design concepts and enabling users with
                amazing online experiences.`,
        },
        {   title: 'an excellent communicator',
            text: `Communication is key and it's a paramount value
                of mine. I believe in transparency and constructive
                communication above all else. This helps me develop deep
                relationships and ensures my effectiveness and productivity
                in any work space with any team.`,
        },
    ];
</script>

<svelte:head>
    <meta name="description" content="About full-stack developer Jonnas Huff">
    <title>Jonnas Huff - About</title>
</svelte:head>

<section class="benefits">
    <div class="wrapper wrapper_benefits">
        <header class="benefits__header">
            <h2 class="benefits__title">
                A bit more <span class="accent-text-title">about</span> me
            </h2>

            <p class="benefits__subtitle">
                I am...
            </p>
        </header>

        <ol class="benefits__list">
            {#each benefits as benefit, i}
                <li class="benefit">
                    <span class="benefit__number"> {i + 1} </span>

                    <div class="benefit__body">
                        <h2 class="benefit__title"> {benefit.title} </h2>
                        <p class="benefit__text"> {benefit.text} </p>
                    </div>
                </li>
            {/each}
        </ol>
    </div> <!-- end of div "wrapper" -->
</section> <!-- end of section "benefits" -->

<section class="package">
    <div class="wrapper wrapper_package">
        <header class="package__header">
            <h3 class="package__title">
                The <span class="accent-text-title">Complete</span> Package
            </h3>
        </header>

        <div class="wrapper_table">
            <table class="package__table">
                <thead class="table-head">
                    <tr>
                        <th class="table-head__cell"></th>
                        <th class="table-head__cell accent-table-cell">Me</th>
                        <th class="table-head__cell">Person #1</th>
                        <th class="table-head__cell">Person #2</th>
                    </tr>
                </thead>

                <tbody class="table-body">
                    <tr>
                        <td class="table-body__cell">Dedication</td>
                        <td class="table-body__cell"> <Check/> </td>
                        <td class="table-body__cell"> <Close/> </td>
                        <td class="table-body__cell"> <Check/> </td>
                    </tr>
                    <tr>
                        <td class="table-body__cell">Meeting deadlines</td>
                        <td class="table-body__cell"> <Check/> </td>
                        <td class="table-body__cell"> <Check/> </td>
                        <td class="table-body__cell"> <Close/> </td>
                    </tr>
                    <tr>
                        <td class="table-body__cell">Programming ability</td>
                        <td class="table-body__cell"> <Check/> </td>
                        <td class="table-body__cell"> <Close/> </td>
                        <td class="table-body__cell"> <Check/> </td>
                    </tr>
                    <tr>
                        <td class="table-body__cell">Interpersonal skills</td>
                        <td class="table-body__cell"> <Check/> </td>
                        <td class="table-body__cell"> <Check/> </td>
                        <td class="table-body__cell"> <Check/> </td>
                    </tr>
                    <tr>
                        <td class="table-body__cell">Critical thought</td>
                        <td class="table-body__cell"> <Check/> </td>
                        <td class="table-body__cell"> <Check/> </td>
                        <td class="table-body__cell"> <Close/> </td>
                    </tr>
                </tbody>
            </table>
        </div> <!-- end of div "wrapper_table" -->
    </div> <!-- end of div "wrapper_package" -->

    <p class="scroll-table-hint"> Scroll to see more &rarr; </p>
</section> <!-- end of section "package" -->

<style>
    .wrapper_benefits,
    .wrapper_package {
        display: grid;
        gap: 48px;
    }

    .benefits__header {
        display: grid;
        gap: 36px;
    }

    .benefits__title,
    .benefit__number {
        font-size: var(--fs-h1);
    }

    .benefits__subtitle {
        font-size: var(--fs-h3);
    }

    .benefits__list {
        display: grid;
        gap: 40px;

        @media screen and (min-width: 960px) {
            max-width: 888px;
            margin: 0 auto;
        }
    }

    .benefit {
        display: flex;
        justify-content: center;
        gap: 24px;
    }

    .benefit__number {
        color: var(--color-main-300);
        text-align: right;
        flex-basis: 8%;
        font-weight: var(--fw-h1);
        line-height: 1.5;

        @media screen and (min-width: 960px) {
            flex-basis: 5%;
        }
    }

    .benefit__body {
        flex-basis: 90%;
        text-align: left;
    }

    .benefit__title,
    .package__title {
        font-size: var(--fs-h2);
    }

    .benefit__title {
        font-weight: var(--fw-normal);
    }

    .benefit__text {
        margin-top: 20px;
    }

    .wrapper_table {
        overflow-x: auto;
    }

    .package__table {
        color: var(--text-dark);
        margin: 0 auto;
        border-radius: 32px;
        background-color: var(--bg-light);
        border-collapse: collapse;

        @media screen and (min-width: 960px) {
            min-width: 740px;
        }
    }

    .table-head {
        white-space: nowrap;
    }

    .table-head__cell,
    .table-body__cell {
        padding: 16px;
        font-weight: var(--fw-h2);
    }

    .table-body > tr {
        border-top: 1px solid rgb(226 232 240);
    }

    .table-body__cell {
        font-weight: var(--fw-normal);
    }

    .accent-table-cell {
        color: var(--text-light);
        min-width: 120px;
        padding-inline: 40px;
        background-color: var(--color-main-500);
    }

    .scroll-table-hint {
        font-family: system-ui, Arial, sans-serif;
        font-weight: 300;
        font-style: italic;
        text-align: right;
        padding: 4px 8vw 0;
        opacity: 0.5;

        @media screen and (min-width: 536px) {
            display: none;
        }
    }
</style>