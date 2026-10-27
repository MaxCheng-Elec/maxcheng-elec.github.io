# Personal homepage

A single-page personal website with English, Chinese and German support.

## Files

Open dist/index.html to preview. Edit dist/profile.js for personal information.
The top navigation scrolls to sections on the same page. On phones, use the menu button.
The left profile column contains your photo, name, affiliation, location and icon links.
On phones it becomes a compact profile block above the content.

Fonts match the reference website: Alegreya for prose and Alegreya Sans for headings and profile information. Google Fonts requires an internet connection; Georgia and system sans-serif fonts are fallbacks. The interface stays monochrome; uploaded photos retain their original colors.

## Profile links

Email and GitHub use the existing email and github fields.
Edit window.PROFILE.links at the bottom of profile.js to add LinkedIn, Google Scholar, ORCID or any other link:

    { label: "LinkedIn", url: "https://www.linkedin.com/in/YOUR-ID", icon: "linkedin" }

An empty URL hides the link. Built-in icons: email, github, linkedin, scholar, orcid, location, link.

Use your own image icon:

    { label: "My website", url: "https://example.com", iconImage: "images/site-icon.png" }

Text labels can also be translated:

    { label: { en: "Website", zh: "个人网站", de: "Website" }, url: "https://example.com", icon: "link" }

## Education logos and photos

Place files in dist/images, then edit window.PROFILE.media at the bottom of profile.js:

    "education-0": {
      initials: "UE",
      image: "images/edinburgh-logo.png",
      imageAlt: { en: "University of Edinburgh", zh: "爱丁堡大学", de: "Universität Edinburgh" },
      url: "https://www.ed.ac.uk",
      photos: [
        {
          src: "images/campus.jpg",
          caption: { en: "Campus", zh: "校园", de: "Campus" }
        },
        {
          src: "images/lab.jpg",
          caption: { en: "Laboratory", zh: "实验室", de: "Labor" }
        }
      ]
    }

image is the small logo beside the title; photos is a gallery below the description.
Photo links open the full image in a new tab. Add url to a photo to use a different destination.
Images and captions are shared by all languages. A missing image falls back to the initials badge; unavailable gallery photos are hidden.
Use square logos and landscape photos where possible. Compress large photos before uploading.

education-0 means the first entry, education-1 the second. If you reorder entries often, give each entry a stable id, e.g. id: "edinburgh", in all three languages and use media.edinburgh instead.

## Work experience

Edit window.PROFILE.experience at the bottom of profile.js:

    window.PROFILE.experience = [
      {
        id: "internship",
        title: "Company · Role",
        period: "2027 – 2028",
        detail: "Describe your work and responsibilities."
      }
    ];

Add translated lists under window.PROFILE.translations.zh.experience and .de.experience.
Add a media.internship object for the logo and photos, using the same fields as education above.
The section stays hidden when there are no entries. No fictional work experience has been added.

## Projects

Projects also accept an image and photos through media.project-0 or an entry's id.
Keep text and project URLs in the existing projects arrays.

## Languages

English is the initial default. Language choices are remembered in this browser.
English text is in window.PROFILE, Chinese and German text in translations.zh and translations.de.
Missing translated fields fall back to English. Translated lists replace the whole English list.
Language switching preserves section folding states.

## Publish

Commit and push your changes, including images. These local edits do not automatically publish to GitHub or Sites.
For GitHub Pages, publish the contents of dist using your existing deployment method.
If using Settings → Pages → main → /(root), place the contents of dist in the repository root before publishing; GitHub's branch-based publishing does not select an arbitrary dist folder.
