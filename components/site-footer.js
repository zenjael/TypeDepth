/**
 * <site-footer> — Light DOM Web Component
 * Shared footer across all pages.
 *
 * Usage: <site-footer></site-footer>
 */
class SiteFooter extends HTMLElement {
  connectedCallback() {
    const year = new Date().getFullYear()

    this.innerHTML = `
      <footer class="footer" role="contentinfo">
        <div class="container">

          <p class="footer-logo">TypeDepth</p>
          <p class="footer-tagline">
            Go beyond your 4 letters. Understand the 8 cognitive functions that make you who you are.
          </p>

          <nav class="footer-links" aria-label="Footer navigation">
            <a href="/index.html">Home</a>
            <a href="/explore.html">Explore Types</a>
            <a href="/compare.html">Compare Types</a>
          </nav>

          <p class="footer-copy">&copy; ${year} TypeDepth. Built for learning.</p>

        </div>
      </footer>
    `
  }
}

customElements.define('site-footer', SiteFooter)
