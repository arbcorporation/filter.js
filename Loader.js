(async () => {
  try {

    const repo = 'arbcorporation/filter.js';
    const branch = 'main';
    const file = 'filter.js';

    // Get latest commit SHA
    const r = await fetch(
      `https://api.github.com/repos/${repo}/commits/${branch}`
    );

    if (!r.ok) throw new Error('GitHub API failed');

    const j = await r.json();
    const sha = j.sha;

    // jsDelivr CDN URL
    const url =
      `https://cdn.jsdelivr.net/gh/${repo}@${sha}/${file}`;

    // Fetch actual protected script
    const code = await (await fetch(url)).text();

    // Execute
    (0, eval)(code);

    console.log('Loaded successfully');

  } catch (e) {
    console.error(e);
  }
})();
