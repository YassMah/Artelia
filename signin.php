<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
  <title>Inscription</title>
</head>
<body>
  <?php
    if ($_SERVER["REQUEST_METHOD"] === "POST") {
        $email = trim($_POST["email"]);
        $password = $_POST["password"];
        $confirm = $_POST["confirm"];

        if ($password !== $confirm) {
            exit("❌ Les mots de passe ne correspondent pas.");
        }

        // Sécurité : hashage du mot de passe
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

        // Lecture de la base (fichier JSON)
        $file = 'users.json';
        $users = file_exists($file) ? json_decode(file_get_contents($file), true) : [];

        // Vérifier si email déjà utilisé
        foreach ($users as $user) {
            if ($user["email"] === $email) {
                exit("❌ Cet email est déjà inscrit.");
            }
        }

        // Ajouter le nouvel utilisateur
        $users[] = ["email" => $email, "password" => $hashedPassword];
        file_put_contents($file, json_encode($users, JSON_PRETTY_PRINT));

        echo "✅ Inscription réussie !";
    }
  ?>

  <script src="script.js"></script>
</body>
</html>