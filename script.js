document.addEventListener("DOMContentLoaded", () => {
  // ✅ FADE-IN au chargement
  document.body.classList.add("pre-fade");
  requestAnimationFrame(() => {
    document.body.classList.add("fade-in");
  });

  // Animation disparition logo et titre (si présents)
  setTimeout(() => {
    const logo = document.querySelector('.logo');
    const titre = document.querySelector('.Titre');
    if (logo) logo.classList.add('disparu');
    if (titre) titre.classList.add('disparu');
  }, 1200);

  // Si c'est une page d'intro avec redirection automatique
  if (document.body.classList.contains("intro-page")) {
    setTimeout(() => {
      document.body.classList.remove("fade-in");
      document.body.classList.add("fade-out");
      setTimeout(() => {
        window.location.href = "intro.html";
      }, 500);
    }, 1500);
  }

  // Bouton vers signup.html
  const bouton = document.getElementById("monBouton");
  if (bouton) {
    bouton.addEventListener("click", () => {
      document.body.classList.remove("fade-in");
      document.body.classList.add("fade-out");
      setTimeout(() => {
        window.location.href = "accueil.html";
      }, 200);
    });
  }

  // Bouton retour avec .back
  const backBtn = document.querySelector('.back');
  if (backBtn) {
    backBtn.addEventListener("click", (e) => {
      e.preventDefault();
      document.body.classList.remove("fade-in");
      document.body.classList.add("fade-out");
      setTimeout(() => {
        history.back();
      }, 100);
    });
  }

  // Lien internes (fade-out avant navigation)
  const links = document.querySelectorAll('a[href]');
  links.forEach(link => {
    if (link.classList.contains('back')) return; // éviter double écoute
    link.addEventListener("click", function (e) {
      if (this.target === "_blank" || this.hostname !== window.location.hostname) return;
      e.preventDefault();
      const href = this.getAttribute("href");
      document.body.classList.remove("fade-in");
      document.body.classList.add("fade-out");
      setTimeout(() => {
        window.location.href = href;
      }, 100);
    });
  });
});

document.getElementById('signup-form').addEventListener('submit', function(e) {
  e.preventDefault(); // Empêche la redirection

  const email = document.getElementById('email').value;
  const pass = document.getElementById('password').value;
  const confirm = document.getElementById('password-confirm').value;

  const message = document.getElementById('message');

  if (pass !== confirm) {
    message.textContent = "❌ Les mots de passe ne correspondent pas.";
    message.style.color = "red";
    return;
  }

  // Ici on peut simuler un enregistrement
  message.textContent = "✅ Inscription réussie !";
  message.style.color = "green";

  // Optionnel : rediriger vers une autre page
  // setTimeout(() => window.location.href = "accueil.html", 1500);
});



