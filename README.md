# Phase2

# UMD MISBA Club Website 

Welcome to the official repository for the Management Information Systems & Business Analytics (MISBA) Club at the University of Minnesota Duluth! 

This repository holds the code for our front-facing website, providing information about our events, executive board, and how to get involved.

##  Tech Stack
This website is built with lightweight, universally supported web technologies to ensure it is easy to maintain for future club officers:
* **HTML5** (Semantic structure)
* **CSS3** (Custom styling, Flexbox, CSS Grid)
* **Vanilla JavaScript** (No external libraries required)

##  File Structure
The repository is organized to be as straightforward as possible:

```text
/ (Root)
│── index.html        # The Homepage
│── about.html        # Meet the Board & FAQ
│── activities.html   # Past events and Photowheel gallery
│── contact.html      # Social links and Google Form embed
│── robots.txt        # Blocks web scrapers and crawlers
│
├── css/
│   └── style.css     # The master stylesheet for all pages
│
├── js/
│   └── script.js     # Handles the mobile menu, gallery, and interactive cards
│
└── assets/
    └── images/       # All site photography, board headshots, and logos
```
# Maintenance Guide for Future Board Members
If you are a new officer taking over this site, welcome! The code has been heavily annotated with "Developer Comments" to help you find your way around.

1. Updating the Photowheel (Image Gallery)
To add new photos to the homepage and activities gallery:

Upload your new images to the assets/images/photowheel/ folder.

Open js/script.js.

Locate the photoFiles list at the top of the gallery section and type your new file names into the list.

2. Updating the Contact Form
If the club creates a new Google Form for memberships or inquiries:

Open contact.html.

Scroll to the ``.

Follow the numbered instructions in the HTML comments to swap out the <iframe> link.

3. Updating the Executive Board
To change out the Meet the Board cards:

Upload new headshots to the assets/images/board/ folder.

Open about.html and scroll to the ``.

Replace the text and image paths inside each <div class="board-card">.

Hosting
This site is currently deployed using GitHub Pages. Any changes pushed to the main branch will automatically reflect on the live website within a few minutes.

GEMINI CHAT LOGS:
Google Gemini 3.1 Pro was used to assist with building this website. A complete chat log that has been copied and pasted directy into a Google document is linked below for reference:
https://docs.google.com/document/d/1OZviQjiHrFF94jqeXLR-12MKMpIQTZ1XdaVyAEsPBvU/edit?usp=sharing
