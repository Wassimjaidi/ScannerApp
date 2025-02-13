# ScannerApp   
🚀 Description
Cette application mobile permet aux utilisateurs de vérifier la validité des numéros CNK en utilisant l'algorithme de Luhn. Elle offre une interface fluide et intuitive basée sur Ionic & Angular, avec une prise en charge de Capacitor pour une expérience optimale sur mobile.
📦 Installation et Exécution
1️⃣ Prérequis
Avant d'installer ce projet, assurez-vous d'avoir les outils suivants :

Node.js installé (version recommandée : LTS)

Ionic CLI installé :
npm install -g @ionic/cli

Capacitor (si vous souhaitez exécuter sur mobile) :

npm install --save @capacitor/core @capacitor/cli
2️⃣ Cloner le projet

git clone https://github.com/votre-repository.git
cd votre-repository
3️⃣ Installer les dépendances
npm install

4️⃣ Exécuter l'application en mode développement
ionic serve

Si vous souhaitez exécuter sur un appareil mobile :

ionic build
npx cap sync
npx cap open android  # Pour Android
npx cap open ios      # Pour iOS
🔑 Fonctionnalités
✅ Vérification de la validité d'un numéro CNK avec l'algorithme de Luhn.
✅ Génération automatique du numéro avec CRC valide.
✅ Interface simple et fluide avec Ionic Framework.
✅ Gestion de la status bar pour un affichage optimal sur mobile.
✅ Compatible Android & iOS via Capacitor.

