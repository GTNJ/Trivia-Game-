# Trivia Sprint

Run the game locally with:

```bash
python3 serve.py
```

Then open:

```text
http://127.0.0.1:8000/index.html
```

The game includes:

- Single-player mode
- Party mode
- Multiple trivia categories including Math, Science, History, Entertainment, Technology, and General Knowledge
- 10 questions per game
- 10 seconds per question
- 1 point for each correct answer
- Visual and sound effects for correct and wrong answers
- Deck-based question rotation to reduce repeats
- Optional AI-generated question rounds when a backend is available

## Public hosting

This project is prepared for GitHub Pages.

1. Create a GitHub repository and push this folder to the `main` branch.
2. In GitHub, open `Settings` -> `Pages`.
3. Set the source to `GitHub Actions`.
4. Push to `main` or run the `Deploy Trivia Sprint` workflow manually.

Your public URL will be:

```text
https://<your-github-username>.github.io/<your-repository-name>/
```

## AI-backed questions with Vercel

This project now includes a Vercel serverless endpoint at `api/generate-questions.js`.
The frontend will:

- try AI-generated questions first
- fall back to the built-in local question bank if the AI backend is unavailable

### Deploy on Vercel

1. Import this repository into Vercel.
2. Set the project root to this folder.
3. Add this environment variable in Vercel:

```text
OPENAI_API_KEY=your_openai_api_key
```

4. Optional: choose a model with:

```text
OPENAI_MODEL=gpt-5-mini
```

5. Deploy.

If you deploy the whole app on Vercel, the frontend will automatically call:

```text
/api/generate-questions
```

### Using GitHub Pages for the frontend and Vercel for the backend

If you keep the frontend on GitHub Pages and host only the backend on Vercel, set a global before `script.js` loads:

```html
<script>
  window.TRIVIA_API_BASE = "https://your-vercel-project.vercel.app";
</script>
```

Then `script.js` will call:

```text
https://your-vercel-project.vercel.app/api/generate-questions
```

### Important

Do not put your OpenAI API key in `script.js` or any browser-side file.
Keep the key only in Vercel environment variables.
