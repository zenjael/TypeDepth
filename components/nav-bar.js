/**
 * <nav-bar> — Light DOM Web Component
 * Shared navigation across all pages.
 *
 * Usage: <nav-bar active="home"></nav-bar>
 * Attributes:
 *   active — one of: "home" | "explore" | "compare"
 */
class NavBar extends HTMLElement {
  connectedCallback() {
    const active = this.getAttribute('active') || ''

    this.innerHTML = `
      <nav class="nav" role="navigation" aria-label="Main navigation">
        <div class="container">
          <a href="/index.html" class="nav-logo" aria-label="TypeDepth home">TypeDepth</a>

          <div class="nav-links">
            <a href="/index.html"   class="${active === 'home'    ? 'active' : ''}" >Home</a>
            <a href="/explore.html" class="${active === 'explore' ? 'active' : ''}">Explore</a>
            <a href="/compare.html" class="${active === 'compare' ? 'active' : ''}">Compare</a>
          </div>

          <a href="/explore.html" class="btn nav-cta">Find My Type</a>

          <!-- Mobile menu toggle -->
          <button class="nav-mobile-toggle" aria-label="Open menu" aria-expanded="false">
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      <!-- Mobile drawer -->
      <div class="nav-mobile-drawer" aria-hidden="true">
        <a href="/index.html">Home</a>
        <a href="/explore.html">Explore</a>
        <a href="/compare.html">Compare</a>
        <a href="/explore.html" class="btn btn-primary">Find My Type</a>
      </div>
    `

    this._initMobileMenu()
  }

  _initMobileMenu() {
    const toggle = this.querySelector('.nav-mobile-toggle')
    const drawer = this.querySelector('.nav-mobile-drawer')
    if (!toggle || !drawer) return

    toggle.addEventListener('click', () => {
      const isOpen = drawer.classList.toggle('open')
      toggle.setAttribute('aria-expanded', isOpen)
      drawer.setAttribute('aria-hidden', !isOpen)
    })
  }
}

customElements.define('nav-bar', NavBar)
