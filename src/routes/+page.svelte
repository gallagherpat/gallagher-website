<script lang="ts>
    let currentVariant = 'bg-initial';
    export let data;

    let articles = data.data;
    console.log(data)
</script>

<section class="w-[70%] mx-auto my-6">
    <div class="logo-cloud grid-cols-1 lg:!grid-cols-3 gap-0.5">
        <a class="logo-item {currentVariant}" href="https://twitch.com/" target="_blank" rel="noreferrer">
            <i class="fa-brands fa-twitch text-2xl" />
            <span>Twitch</span>
        </a>
        <a class="logo-item {currentVariant}" href="https://youtube.com/" target="_blank" rel="noreferrer">
            <i class="fa-brands fa-youtube text-2xl" />
            <span>YouTube</span>
        </a>
        <a class="logo-item {currentVariant}" href="https://vimeo.com/" target="_blank" rel="noreferrer">
            <i class="fa-brands fa-vimeo text-2xl" />
            <span>Vimeo</span>
        </a>
    </div>
</section>
<div class="h-[2px] w-1/3 variant-filled-primary mx-auto mb-6"/>
<div class="w-[70%] mx-auto text-token grid grid-cols-1 md:grid-cols-2 lg:w-1/2 gap-4">
    {#each articles as article}
    <a class="card {currentVariant} card-hover overflow-hidden" href="/blog/{article.id}">
        <!-- Minimal -->
            <header>
                <img src="https://source.unsplash.com/random/1280x540?skeleton" class="bg-black/50 w-full aspect-[21/9]" alt="Post" />
            </header>
            <div class="p-4 space-y-4">
                <h6>{article.title}</h6>
                <h3 data-toc-ignore>Skeleton is Awesome!</h3>
                <article>
                    <p>
                        {article.content}
                    </p>
                </article>
            </div>
            <hr class="opacity-50" />
            <footer class="p-4 flex justify-start items-center space-x-4">
                <div class="flex-auto flex justify-between items-center">
                    <h6 class="font-bold">By Alex</h6>
                    <small>On {new Date().toLocaleDateString()}</small>
                </div>
            </footer>
        </a>
    {/each}
   
</div>
