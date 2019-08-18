<style>
nav {
  position: fixed;
  display: flex;
  bottom: 0;
  z-index: 1;
  align-items: center;
  justify-content: flex-start;
  height: 3rem;
  width: 100%;

  background: #f7f7f7;
  border-top: 1px #e7e7e7 solid;
}
ul {
  position: fixed;
  bottom: 3rem;
  width: 100vw;
  left: 100vw;

  background: #f7f7f7;

  transition: 0.2s all ease-in-out;
  opacity: 0;
}

ul li:first-child {
  border-top: 1px #e7e7e7 solid;
}

ul li {
  display: flex;
  align-items: center;
  height: 3rem;
}

ul li:not(:last-child) {
  border-bottom: 1px #e7e7e7 solid;
}

a {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  padding: 0 2rem 0 0.5rem;
  margin: 0 0.5rem;
  width: 100%;

  transition: 0.15s all linear;
}

a:link, a:visited {
  color: #306;
}

button {
  display: flex;
  align-items: center;
  z-index: 1;
  padding-left: 1rem;

  cursor: pointer;
  font-size: inherit;
  background: none;
  border: none;
}

.image-container {
  width: 2rem;
  height: 2rem;
  position: relative;
}

.image-container img {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;

  transition: opacity 0.15s ease-in-out;
}

button span {
  margin-left: 0.5rem;
  font-family: inherit;
  font-size: inherit;
  color: #306;
}

.opened-menu {
  left: 0;
  opacity: 1;
}

.opaque {
  opacity: 0;
}

@media only screen and (min-width: 60rem) {
  nav {
    position: sticky;
    justify-content: center;
    top: 0;
    
    border-bottom: 1px #e7e7e7 solid;
  }

  button {
    display: none;
  }

  ul {
    display: flex;
    top: 0;
    position: relative;
    left: inherit;
    opacity: 1;
    flex-flow: row;
    width: auto;
    border: none;
    background: none;
  }

  ul li {
    border: none;
  }

  ul li:not(:last-child) {
    border-bottom: initial;
  }

  a, a:link, a:visited {
    padding: 0 2rem;

    color: inherit;
    opacity: 0.65;
  }

  a:hover {
    color: #306;
    opacity: 1;
  }
}
</style>

<script>
  let menuOpen = false;
  let menuText = "Menu"

  function toggleMenu() {
    menuOpen = !menuOpen;

    if (menuOpen) {
      menuText = "Close"
    } else {
      menuText = "Menu"
    }
  }
</script>

<nav>
  <ul class:opened-menu={menuOpen}>
    <li><a href="/#about-me" on:click="{toggleMenu}">About me</a></li>
    <li><a href="/#portfolio" on:click="{toggleMenu}">Portfolio</a></li>
    <li><a href="/#contact" on:click="{toggleMenu}">Contact</a></li>
  </ul>
  <button on:click="{toggleMenu}">
    <div class="image-container">
      <img src="images/burger-menu.svg" alt="Menu icon" class:opaque="{menuOpen}">
      <img src="images/cross-icon.svg" alt="Close icon" class:opaque="{!menuOpen}">
    </div>
    <span>{menuText}</span>
  </button>
</nav>