# SvelteKit `bundleStrategy: inline` test

## Issues

Without changes from a typical deployment:

- Favicon not found by browser
- Fetch requests in `+page.js` files fail
- Loading resources in CSS fails

## Notes

Using `router.type === 'hash'` seems to automatically specify `index.html` as a fallback page, and if you attempt to set it manually in `kit.adapter`, you get the warning:

```
> Using @sveltejs/adapter-static
Overwriting build/index.html with fallback page. Consider using a different name for the fallback.
  Wrote site to "build"
  ✔ done
```