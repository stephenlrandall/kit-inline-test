# SvelteKit Inline Bundle Test

Outside of the [documentation issues](https://github.com/sveltejs/kit/issues/13233), there are still four issues present when using hash-based routing:

- [404 errors in Safari when refreshing a page with a "real" hash](https://github.com/sveltejs/kit/issues/13318)
- [An inability to clear `searchParams` on typical navigation](https://github.com/sveltejs/kit/issues/13319)
- [An inability to use page-relative "real" hashes to jump to a different part of the page](https://github.com/sveltejs/kit/issues/13320)
- [Not all `load` functions are re-run on user changes to the URL](https://github.com/sveltejs/kit/issues/13322)