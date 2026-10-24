```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: Arial, sans-serif;
    color: #222;
    background: #f8f9fa;
}

/* Navigation */

header {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    background: rgba(255, 255, 255, 0.95);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.navbar {
    max-width: 1200px;
    margin: auto;
    padding: 18px 25px;

    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 25px;
    font-weight: bold;
}

.logo span {
    color: #008cff;
}

.nav-links {
    display: flex;
    gap: 30px;
    list-style: none;
}

.nav-links a {
    text-decoration: none;
    color: #222;
    font-weight: 500;
}

.nav-links a:hover {
    color: #008cff;
}

.menu-btn {
    display: none;
    border: none;
    background: none;
    font-size: 25px;
}

/* Hero */

.hero {
    min-height: 100vh;

    background:
        linear-gradient(rgba(0, 0, 0, 0.45),
        rgba(0, 0, 0, 0.45)),
        url("https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1600&q=80");

    background-size: cover;
    background-position: center;

    display: flex;
    align-items: center;
    justify-content: center;

    text-align: center;
    color: white;
    padding: 100px 20px 50px;
}

.hero-content {
    max-width: 800px;
}

.subtitle {
    letter-spacing: 4px;
    font-size: 14px;
    margin-bottom: 15px;
}

.hero h1 {
    font-size: 60px;
    margin-bottom: 20px;
}

.hero h1 span {
    color: #4fc3ff;
}

.hero p {
    font-size: 18px;
    line-height: 1.7;
    margin-bottom: 30px;
}

/* Buttons */

.btn {
    display: inline-block;
    padding: 14px 28px;
    background: #008cff;
    color: white;
    text-decoration: none;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    font-size: 16px;
}

.btn:hover {
    background: #006fd1;
}

/* Search */

.search-section {
    max-width: 1000px;
    margin: -50px auto 60px;
    position: relative;

    background: white;
    padding: 30px;
    border-radius: 15px;

    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);

    text-align: center;
}

.search-section h2 {
    margin-bottom: 20px;
}

.search-box input {
    width: 80%;
    padding: 15px 20px;

    border: 1px solid #ddd;
    border-radius: 30px;

    font-size: 16px;
    outline: none;
}

/* Sections */

.destinations,
.about,
.contact {
    max-width: 1200px;
    margin: auto;
    padding: 70px 25px;
}

.section-title {
    text-align: center;
    margin-bottom: 45px;
}

.section-title p,
.section-label {
    color: #008cff;
    font-size: 13px;
    font-weight: bold;
    letter-spacing: 3px;
    margin-bottom: 10px;
}

.section-title h2,
.about h2 {
    font-size: 38px;
}

/* Destination Cards */

.destination-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
}

.card {
    background: white;
    border-radius: 15px;
    overflow: hidden;

    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);

    transition: 0.3s;
}

.card:hover {
    transform: translateY(-8px);
}

.card img {
    width: 100%;
    height: 220px;
    object-fit: cover;
}

.card-content {
    padding: 20px;
}

.card-content h3 {
    font-size: 24px;
    margin-bottom: 10px;
}

.card-content p {
    color: #666;
    margin-bottom: 18px;
}

.card button {
    padding: 10px 18px;
    border: none;
    border-radius: 20px;
    background: #008cff;
    color: white;
    cursor: pointer;
}

.card button:hover {
    background: #006fd1;
}

/* About */

.about {
    background: white;
    max-width: none;
    padding-left: calc((100% - 1150px) / 2);
    padding-right: calc((100% - 1150px) / 2);
}

.about h2 {
    margin-bottom: 20px;
}

.about > div {
    max-width: 800px;
}

.about p {
    line-height: 1.8;
    color: #555;
}

.stats {
    display: flex;
    gap: 60px;
    margin-top: 35px;
}

.stats div {
    display: flex;
    flex-direction: column;
}

.stats strong {
    font-size: 30px;
    color: #008cff;
}

.stats span {
    color: #666;
}

/* Contact */

.contact form {
    max-width: 700px;
    margin: auto;

    display: flex;
    flex-direction: column;
    gap: 15px;
}

.contact input,
.contact textarea {
    width: 100%;
    padding: 15px;

    border: 1px solid #ddd;
    border-radius: 8px;

    font-size: 16px;
    font-family: inherit;
}

.contact textarea {
    min-height: 150px;
    resize: vertical;
}

/* Footer */

footer {
    background: #111;
    color: white;
    text-align: center;
    padding: 35px;
}

footer p {
    margin-top: 10px;
    color: #aaa;
}

/* Mobile */

@media (max-width: 768px) {

    .nav-links {
        display: none;
        position: absolute;
        top: 70px;
        left: 0;

        width: 100%;
        background: white;

        flex-direction: column;
        text-align: center;

        padding: 20px;
    }

    .nav-links.active {
        display: flex;
    }

    .menu-btn {
        display: block;
    }

    .hero h1 {
        font-size: 40px;
    }

    .destination-grid {
        grid-template-columns: 1fr;
    }

    .search-section {
        margin-left: 20px;
        margin-right: 20px;
    }

    .search-box input {
        width: 100%;
    }

    .stats {
        flex-wrap: wrap;
        gap: 30px;
    }
}
```
