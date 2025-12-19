<template>
    <section class="bet-list">
        <header>
            <h1>Live Bets</h1>
        </header>
        <section class="bets-container">
            <article class="bet card">
                <header>
                    <h3>Player</h3>
                </header>

                <footer>
                    <button>Bet</button>
                </footer>
            </article>
            <article class="bet card">
                <header>
                    <h3>Player</h3>
                </header>

                <footer>
                    <button>Bet</button>
                </footer>
            </article>
            <article class="bet card">
                <header>
                    <h3>Player</h3>
                </header>

                <footer>
                    <button>Bet</button>
                </footer>
            </article>
            <article class="bet card">
                <header>
                    <h3>Player</h3>
                </header>

                <footer>
                    <button>Bet</button>
                </footer>
            </article>
            <article class="bet card">
                <header>
                    <h3>Player</h3>
                </header>

                <footer>
                    <button>Bet</button>
                </footer>
            </article>
            <article class="bet card">
                <header>
                    <h3>Player</h3>
                </header>

                <footer>
                    <button>Bet</button>
                </footer>
            </article>
            <article class="bet card">
                <header>
                    <h3>Player</h3>
                </header>

                <footer>
                    <button>Bet</button>
                </footer>
            </article>
        </section>

    </section>
</template>

<script setup lang="ts">

</script>
<style scoped>
.bet-list {
    margin: var(--space-lg);

}

.bets-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: var(--space-lg);
}
</style>