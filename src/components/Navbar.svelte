<style>
  nav {
    position: fixed;
    display: flex;
    top: 0;
    z-index: 1;
    align-items: center;
    justify-content: flex-end;
    height: 3rem;
    width: 100%;

    background: white;
    border-bottom: 1px #e7e7e7 solid;
  }
  ul {
    position: fixed;
    top: 3rem;
    width: 100vw;
    right: 100vw;

    background: white;
    border-bottom: 1px #e7e7e7 solid;

    transition: 0.2s all ease-in-out;
    opacity: 0;
  }
  ul li {
    display: flex;
    align-items: center;
    height: 3rem;

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

    transition: 0.2s all linear;
  }

  a:link, a:visited {
    color: #123;
  }
  
  button {
    display: flex;
    align-items: center;
    z-index: 1;
    padding-right: 1rem;

    cursor: pointer;
    font-size: inherit;
    background: none;
    border: none;
  }
  button img {
    height: 2rem;
    width: auto;
  }
  button span {
    margin-right: 0.5rem;
    font-family: inherit;
    font-size: inherit;
    color: #123;
  }
  .opened-menu {
    right: 0;
    opacity: 1;
  }

  @media only screen and (min-width: 60rem) {
    nav {
      position: sticky;
      justify-content: center;
    }

    button {
      display: none;
    }

    ul {
      display: flex;
      top: 0;
      position: relative;
      right: inherit;
      opacity: 1;
      flex-flow: row;
      width: auto;
      border: none;
      background: none;
    }

    ul li {
      border: none;
    }

    a, a:link, a:visited {
      padding: 0 2rem;

      color: inherit;
      opacity: 0.5;
    }

    a:hover {
      color: #123;
      opacity: 1;
    }

    .about-me-link {
      display: none;
    }
  }
</style>

<script>
  let menuOpen = false;

  function toggleMenu() {
    menuOpen = !menuOpen;
  }
</script>

<nav>
  <ul class:opened-menu={menuOpen}>
    <li><a href="/#about-me" on:click="{toggleMenu}" class="about-me-link">About me</a></li>
    <li><a href="/#portfolio" on:click="{toggleMenu}">Portfolio</a></li>
    <li><a href="/#services" on:click="{toggleMenu}">Services</a></li>
    <li><a href="/#contact" on:click="{toggleMenu}">Contact</a></li>
  </ul>
  <button on:click="{toggleMenu}">
    <span>Menu</span>
    <img src="images/burger-menu.svg" alt="menu-icon">
  </button>
</nav>