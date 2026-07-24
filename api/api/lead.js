export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  try {
    const { name, email, sport } = req.body;
    console.log('NOUVEAU LEAD PARTENAIRE:', JSON.stringify({
      name, email, sport, date: new Date().toISOString()
    }));
    res.status(200).json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
Clique "Commit changes..." puis confirme.

Une fois ça fait, ton dépôt GitHub aura exactement : README.md, index.html, api/generate.js, api/lead.js. Vercel va détecter le changement et redéployer automatiquement (patiente 1 minute environ).

Ensuite : va sur tennis-story.vercel.app, actualise la page (Ctrl+F5 pour forcer le rechargement), et dis-moi ce que tu vois.
