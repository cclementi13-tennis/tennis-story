export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  try {
    const { name, email, sport } = req.body;
    // Version simple pour démarrer : le lead est écrit dans les logs de la fonction
    // (visibles dans le dashboard Vercel > ton projet > Logs).
    // A remplacer plus tard par un envoi vers Google Sheets, Airtable ou un vrai CRM.
    console.log('NOUVEAU LEAD PARTENAIRE:', JSON.stringify({
      name, email, sport, date: new Date().toISOString()
    }));
    res.status(200).json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
