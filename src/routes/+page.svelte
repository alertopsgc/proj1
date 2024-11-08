<script lang="ts"> 
    let isMenuOpen = false;
</script>

<style>
    /* Navbar styling */
   .navbar {
        background-color: #D20F32;
        padding: 1.5rem 2.5rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative; /* Allows dropdown to appear below */
    }

    /* Brand styling */
    .brand {
        color: white;
        font-size: 1.5rem;
        font-weight: bold;
    }

    /* Hamburger button styling */
    .hamburger {
        display: none;
        flex-direction: column;
        gap: 4px;
        cursor: pointer;
    }

    .hamburger div {
        width: 24px;
        height: 3px;
        background-color: white;
        transition: 0.3s;
    }

    /* Menu items styling */
    .menu {
        display: flex;
        gap: 2rem;
    }

    .menu-item {
        color: white;
        text-decoration: none;
        font-size: 1rem;
        transition: color 0.3s;
    }

    .menu-item:hover {
        color: #CCCCCC;
    }

    



    /* Responsive styles */
    @media (max-width: 768px) {
        .menu {
            display: none; /* Hidden by default on mobile */
            flex-direction: column;
            gap: 2rem;
            position: absolute; /* Positions menu below navbar */
            top: 100%; /* Moves it directly below the navbar */
            left: 0;
            width: 100%;
            background-color: #D20F32; /* Matches navbar color */
            padding: 2rem 2rem;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Adds a slight shadow */
            z-index: 10;
            text-align: center;
        }

        .menu.open {
            display: flex; /* Show menu when open */
        }

        .hamburger {
            display: flex; /* Show hamburger on mobile */
        }
    }
</style>

<div class="navbar">
    <!-- Brand Logo -->
    <div class="brand">
        <a href="/" >ResQ</a>
    </div>

    <!-- Hamburger Icon (visible on mobile) -->
    <div class="hamburger" on:click={() => (isMenuOpen = !isMenuOpen)}>
        <div></div>
        <div></div>
        <div></div>
    </div>

    <!-- Navigation Menu -->
    <div class={`menu ${isMenuOpen ? 'open' : ''}`}>
        <a href="/hotlines" class="menu-item">Hotlines</a>
        <a href="/about" class="menu-item">About</a>
        <a href="/contact" class="menu-item">Contact</a>
    </div>
</div>

