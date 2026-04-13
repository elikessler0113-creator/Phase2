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
│── index.html         # The Homepage
│── about.html         # Meet the Board & FAQ
│── activities.html    # Past events and Photowheel gallery
│── contact.html       # Social links and Google Form embed
│── robots.txt         # Blocks web scrapers and crawlers
│
├── css/
│   └── style.css      # The master stylesheet for all pages
│
├── js/
│   └── script.js      # Handles the mobile menu, gallery, and interactive cards
│
└── assets/
|   └── images/        # All site photography, board headshots, and logos
|        └──logos/     # Logos for links on contact
|       └──events/     # Photos for event cards on activities
|       └──photowheel/ # Photos on the homepage within the photowheel
|        └──board/     # Board member headshots
│
└── BackupHTML/        # Backup code files


```
# Maintenance Guide for Future Board Members
If you are a new officer taking over this site, welcome! The code has been heavily annotated with "Developer Comments" to help you find your way around.

The contact form will need to me updated immediately, as the current form and link to the form is a form that I (Eli, whi is not affiliated with the club), created, and is linked to my email.

BACKUP FILES - If anything goes catastrphically wrong, there are backups for all files, which contain exact copies of the files as they are as of April 2026. If needed, change the name of the main folder, and move the backup out of the BackupHTML and into the main repository folder. Additionally, you can copy and paste the code from the backup directly into the active page.

Hosting
This site is currently deployed using GitHub Pages. Any changes pushed to the main branch will automatically reflect on the live website within a few minutes.

GEMINI CHAT LOGS:
Google Gemini 3.1 Pro was used to assist with building this website. A complete chat log that has been copied and pasted directy into a Google document is linked below for reference:
https://docs.google.com/document/d/1OZviQjiHrFF94jqeXLR-12MKMpIQTZ1XdaVyAEsPBvU/edit?usp=sharing
