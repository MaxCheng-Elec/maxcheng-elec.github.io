# Personal homepage

A monochrome, single-page personal website. No installation or build step is required.

## Preview

Open dist/index.html in a browser. Keep all four files in dist together.

## Edit your content

Edit dist/profile.js. Keep quotes, commas and brackets.

- name, initials: your display name and photo placeholder.
- avatar: put your photo in dist and enter its filename, e.g. "avatar.jpg". An HTTPS image URL also works. Photos display in grayscale; a missing photo falls back to your initials.
- affiliation, location: your university / organization and city. Leave blank to hide.
- tagline, intro, about: your introduction.
- interests: a list of interests.
- email, github: contact information. Leave blank to hide.
- projects: title, category, description, url. An empty URL hides the link.
- news: date and text.
- education: title, period and detail.

Set projects, news or education to [] to hide that section and its navigation item. The supplied entries are examples, not real biographical claims.

## Layout and interactions

- Name and photo appear at the top of the main page.
- The sidebar contains section navigation only.
- Use Navigation to show or hide the sidebar. Escape closes it.
- On phones, navigation starts closed and opens above the content. Selecting a section closes it.
- Selecting a navigation item also expands that section.
- Section headings can be clicked or activated with Enter / Space to fold their content.
- Desktop: sidebar and content in two columns.
- Tablet: a narrower sidebar and reduced spacing.
- Phone: one column with smaller photo and responsive text.
- All colors are grayscale. Edit dist/style.css to customize.

## GitHub Pages

1. Create a repository named YOUR_USERNAME.github.io.
2. Upload the contents of dist to the repository root, including your photo if used.
3. Go to Settings → Pages → Deploy from a branch.
4. Select main and /(root), then save.
5. Once deployed, visit https://YOUR_USERNAME.github.io.

Edit profile.js in GitHub to update content. No Jekyll configuration is needed.
Sites and GitHub Pages are separate deployments; changes do not automatically synchronize between them.

## English, Chinese and German

Use the language selector in the top bar to switch between English, 中文 and Deutsch. English is the initial default. The selection is saved in this browser when local storage is available.

Edit English content in window.PROFILE at the top of dist/profile.js. Edit Chinese and German content in window.PROFILE.translations.zh and .de at the bottom of the same file. Missing translated fields fall back to the shared English profile. Translated lists replace the entire English list, so add or remove corresponding entries in all three languages. Each translated project has its own URL; update that URL in each language.

Photo, email and GitHub settings are shared unless explicitly overridden. Switching languages preserves the sidebar and section folding states.
