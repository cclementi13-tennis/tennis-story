# Mettre Tennis Story en ligne — guide pas à pas

Pas besoin de coder. Il y a deux comptes gratuits à créer, puis quelques clics.

## 1. Récupérer une clé API Anthropic (obligatoire)

1. Va sur https://console.anthropic.com et crée un compte.
2. Dans le menu, va dans **"API Keys"** puis **"Create Key"**. Copie la clé (elle commence par `sk-ant-...`) — tu ne pourras plus la revoir après, garde-la de côté.
3. Va dans **"Billing"** et ajoute un moyen de paiement / crédits. L'API Anthropic est payante à l'usage (pas d'offre gratuite illimitée), mais les coûts par partie de jeu restent faibles (quelques centimes).

**Ne mets jamais cette clé dans le fichier `index.html` ou sur GitHub en clair** — elle doit rester uniquement dans les variables d'environnement de l'hébergeur (étape 4).

## 2. Créer un compte Vercel (gratuit)

1. Va sur https://vercel.com et inscris-toi (via GitHub, Google ou email).
2. C'est gratuit pour ce niveau de trafic.

## 3. Déployer le site

**Option la plus simple (glisser-déposer) :**
1. Sur le tableau de bord Vercel, clique **"Add New..."** → **"Project"**.
2. Cherche l'option d'import sans Git / **"Deploy without Git"** (parfois listée comme "Browse" ou en important le dossier directement). Si Vercel te demande obligatoirement un repo Git, utilise l'option GitHub ci-dessous.
3. Sélectionne le dossier `tennis-story-deploy` (celui que je t'ai fourni).

**Option alternative (recommandée si le glisser-déposer n'est pas proposé) — via GitHub, sans écrire de code :**
1. Crée un compte gratuit sur https://github.com.
2. Crée un nouveau repository (bouton **"New"**), nomme-le `tennis-story`.
3. Sur la page du repo vide, utilise **"uploading an existing file"** et glisse-dépose tous les fichiers du dossier `tennis-story-deploy` (en gardant la structure : `index.html` à la racine, et le dossier `api/` avec `generate.js` et `lead.js` dedans).
4. Valide (**"Commit changes"**).
5. Retourne sur Vercel → **"Add New..."** → **"Project"** → connecte ton compte GitHub → sélectionne le repo `tennis-story` → **"Deploy"**.

## 4. Ajouter ta clé API (étape critique)

1. Une fois le projet créé sur Vercel, va dans **Project → Settings → Environment Variables**.
2. Ajoute :
   - **Name** : `ANTHROPIC_API_KEY`
   - **Value** : ta clé `sk-ant-...` copiée à l'étape 1
3. Enregistre, puis va dans l'onglet **"Deployments"** et clique **"Redeploy"** sur le dernier déploiement (les variables d'environnement ne s'appliquent qu'après un nouveau déploiement).

## 5. Tester

Ton site est en ligne sur une adresse du type `tennis-story.vercel.app`. Ouvre-la et lance une carrière pour vérifier que les saisons se génèrent bien.

## 6. (Optionnel) Nom de domaine personnalisé

Dans **Project → Settings → Domains**, tu peux ajouter un nom de domaine que tu as acheté ailleurs (ex. chez Gandi, OVH, Namecheap) et suivre les instructions DNS affichées.

## À savoir sur la collecte d'emails

Pour l'instant, les emails collectés (avec consentement) sont juste écrits dans les **logs** de la fonction `api/lead.js`, visibles dans Vercel → ton projet → onglet **"Logs"**. C'est fonctionnel pour tester, mais pas exploitable pour de l'envoi réel à des partenaires (pas d'export propre, pas de gestion de désinscription RGPD). Quand tu seras prêt à vraiment démarcher des partenaires, dis-le moi : je peux connecter `api/lead.js` à Google Sheets, Airtable, ou un outil comme Brevo/Mailchimp pour avoir une vraie liste exploitable et conforme.
