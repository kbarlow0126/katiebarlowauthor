<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="Official website of children's author Katie Barlow, creator of The Boy with Red Hair.">
  <title>Katie Barlow | Children's Author</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <a class="skip-link" href="#main">Skip to content</a>

  <header class="site-header">
    <div class="nav-wrap">
      <a class="brand" href="#home" aria-label="Katie Barlow home">
        <span class="brand-name">Katie Barlow</span>
        <span class="brand-subtitle">Children's Author</span>
      </a>

      <button class="menu-button" aria-expanded="false" aria-controls="site-nav">
        <span></span><span></span><span></span>
        <span class="sr-only">Open menu</span>
      </button>

      <nav id="site-nav" class="site-nav" aria-label="Main navigation">
        <a href="#home">Home</a>
        <a href="#books">Books</a>
        <a href="#about">About Katie</a>
        <a href="#school-visits">School Visits</a>
        <a href="#activities">Activities</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  </header>

  <main id="main">
    <section id="home" class="hero" aria-label="Welcome to Stanley">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <p class="eyebrow">Welcome to Stanley</p>
        <h1>Stories that inspire curiosity, kindness, and adventure.</h1>
        <p>Heartwarming children's stories rooted in the Shenandoah Valley and the little moments that make childhood magical.</p>
        <div class="button-row">
          <a class="button primary" href="#books">Explore the Stories</a>
          <a class="button secondary" href="#school-visits">Book a School Visit</a>
        </div>
      </div>
      <div class="milo-note" aria-label="Find Milo">Can you find Milo?</div>
    </section>

    <section id="books" class="section paper">
      <div class="section-heading">
        <p class="eyebrow">Featured Book</p>
        <h2>The Boy with Red Hair</h2>
      </div>

      <div class="book-grid">
        <div class="book-cover-wrap">
          <img src="assets/the-boy-with-red-hair-cover.png" alt="Cover of The Boy with Red Hair by Katie Barlow">
        </div>
        <div class="book-copy">
          <p class="lead">Meet Cole, a curious boy who loves fishing, adventure, and the quiet discoveries waiting beside the pond.</p>
          <p>This warm story celebrates patience, friendship, and the joy found in slowing down long enough to notice the world around us.</p>
          <p class="age-line">Perfect for children ages 4–8 and the grown-ups who love reading with them.</p>
          <div class="button-row">
            <!-- Replace # with your real Amazon book link -->
            <a class="button primary" href="#" data-placeholder-link>Buy on Amazon</a>
            <!-- Replace # with your real Barnes & Noble book link -->
            <a class="button outline" href="#" data-placeholder-link>Buy on Barnes & Noble</a>
          </div>
        </div>
      </div>
    </section>

    <section id="about" class="section cream">
      <div class="about-grid">
        <div class="portrait-frame">
          <img src="assets/katie-barlow-headshot.jpg" alt="Katie Barlow">
        </div>
        <div>
          <p class="eyebrow">Meet Katie</p>
          <h2>Stories inspired by home, family, and small-town wonder.</h2>
          <p>Katie Barlow is a children's author who creates warm, imaginative stories filled with friendship, curiosity, and adventure.</p>
          <p>Her books are inspired by the beauty of Virginia's Shenandoah Valley and the unforgettable moments that make childhood so special.</p>
          <a class="text-link" href="#contact">Connect with Katie →</a>
        </div>
      </div>
    </section>

    <section id="school-visits" class="section church-section">
      <div class="church-card">
        <div>
          <p class="eyebrow">School & Library Visits</p>
          <h2>Bring the world of Stanley to your young readers.</h2>
          <p>Author visits can include a read-aloud, a behind-the-scenes look at creating a children's book, character activities, questions and answers, and plenty of encouragement for young writers.</p>
          <a class="button primary" href="#contact">Ask About a Visit</a>
        </div>
        <img src="assets/stanley-church-guide.png" alt="Storybook guide featuring the Stanley United Methodist Church">
      </div>
    </section>

    <section id="activities" class="section paper">
      <div class="section-heading">
        <p class="eyebrow">Activities</p>
        <h2>Fun beyond the last page.</h2>
        <p>Coloring pages, reading certificates, “Find Milo” activities, and classroom resources can be added here as they become available.</p>
      </div>
      <div class="activity-grid">
        <article class="activity-card">
          <span class="activity-icon">🎨</span>
          <h3>Coloring Pages</h3>
          <p>Printable pages featuring Cole, Milo, and the world of Stanley.</p>
        </article>
        <article class="activity-card">
          <span class="activity-icon">🔎</span>
          <h3>Find Milo</h3>
          <p>A playful hidden-character activity for children and classrooms.</p>
        </article>
        <article class="activity-card">
          <span class="activity-icon">📚</span>
          <h3>Teacher Resources</h3>
          <p>Discussion prompts and activities designed to extend the story.</p>
        </article>
      </div>
    </section>

    <section id="contact" class="section contact-section">
      <div class="contact-card">
        <p class="eyebrow">Contact</p>
        <h2>Let's connect.</h2>
        <p>Questions about books, events, school visits, or author appearances?</p>
        <!-- Replace the email below with the address you want visitors to use -->
        <a class="button primary" href="mailto:YOUR-EMAIL-HERE">Email Katie</a>
        <p class="small-note">Before publishing, replace <strong>YOUR-EMAIL-HERE</strong> in <code>index.html</code> with your preferred email address.</p>
      </div>
    </section>
  </main>

  <footer>
    <p>© <span id="year"></span> Katie Barlow. All rights reserved.</p>
    <p>Thank you for being part of the story. ♥</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>
