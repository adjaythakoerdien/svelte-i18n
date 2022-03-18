<script>
    import { _ } from "svelte-i18n";
</script>

<style>
    header {
        margin-top: 0px;
        width: 100%;
        text-align: center;
        background-color: #316509;
        padding: 20px 0px;
        color: white;
    }
</style>

<header class="hero">
    <div class="hero-body">
        <div class="container">
            <h1 class="title">
                {$_("header.title")}
            </h1>
            <h2 class="subtitle">
                {$_("header.subtitle")}
            </h2>
        </div>
    </div>
</header>