/*
 * ===========================================================================
 *  EDIT THIS FILE TO ADD YOUR PHOTOS, VIDEOS, ARTICLES AND DOCUMENTS
 * ===========================================================================
 *
 *  1. Fill in SITE (name, school, contact).
 *  2. Add items to the MEDIA lists. Each list matches a tab on the site.
 *
 *  Item types:
 *    { type: "youtube", url: "https://www.youtube.com/watch?v=XXXX", title: "...", caption: "..." }
 *    { type: "vimeo",   url: "https://vimeo.com/123456",             title: "...", caption: "..." }
 *    { type: "image",   src: "assets/images/eagle-scout/photo1.jpg", title: "...", caption: "..." }
 *    { type: "video",   src: "assets/images/course-design/run.mp4",  title: "...", caption: "..." }
 *    { type: "link",    url: "https://...",                          title: "...", caption: "..." }
 *    { type: "pdf",     src: "assets/docs/eagle-proposal.pdf",       title: "...", caption: "..." }
 *
 *  - Put photos in the matching assets/images/<section>/ folder; PDFs in assets/docs/.
 *  - Instagram, Google Drive and Facebook videos can't be embedded reliably.
 *    Use type "link" for those, and the site shows them as a clickable card.
 *  - Items with an empty url/src are placeholders. They only show while
 *    showPlaceholders is true. Set it to false before sending the link
 *    to colleges, and any unfilled slots disappear.
 */

window.SITE = {
  name: "Student Name",
  subtitle: "Class of 2027 · Summit High School · Summit, NJ",
  email: "",          // e.g. "name@example.com" (leave "" to hide)
  resumeUrl: "",      // e.g. "assets/docs/resume.pdf" (leave "" to hide)
  showPlaceholders: true
};

window.MEDIA = {
  "ninja-competition": [
    { type: "youtube", url: "", title: "Barbados Ninja Throwdown 2024: 2nd Place Interview", caption: "Post-competition interview, Young Adult Division" },
    { type: "youtube", url: "", title: "WNL Premier Series Finals 2025 Run", caption: "5th place, Young Adult Division" },
    { type: "youtube", url: "", title: "WNL Head-to-Head Finals 2025", caption: "4th place, Young Adult Division" },
    { type: "link",    url: "", title: "World Ninja League Rankings / Athlete Profile", caption: "Official standings and power rankings" },
    { type: "image",   src: "", title: "Competition photo", caption: "" }
  ],

  "course-design": [
    { type: "image",   src: "", title: "Original obstacle design", caption: "Sketch or build photo" },
    { type: "youtube", url: "", title: "Course walkthrough / test run", caption: "WNL competition course at Nex Level Ninja" },
    { type: "image",   src: "", title: "WNL competition course, 2025", caption: "150+ competitors" },
    { type: "image",   src: "", title: "Youth Ninja Sport Network course, 2025", caption: "50+ competitors" }
  ],

  "eagle-scout": [
    { type: "youtube", url: "", title: "Eagle Scout Project Pitch", caption: "Proposal presentation" },
    { type: "image",   src: "", title: "Pollinator shelter, Site 1", caption: "" },
    { type: "image",   src: "", title: "Pollinator shelter, Site 2", caption: "" },
    { type: "image",   src: "", title: "Educational plaque", caption: "" },
    { type: "image",   src: "", title: "Bees using the shelter", caption: "" },
    { type: "pdf",     src: "", title: "Project proposal (PDF)", caption: "Approved by Summit Director of Engineering & Public Works" }
  ],

  "recycling": [
    { type: "link",    url: "", title: "Local newspaper article", caption: "Coverage of the Recycling Advisory Committee videos" },
    { type: "youtube", url: "", title: "City of Summit recycling tips video", caption: "Featured speaker" },
    { type: "youtube", url: "", title: "Composting program video", caption: "Produced with Scout Troop" },
    { type: "link",    url: "", title: "City of Summit Recycling Advisory Committee page", caption: "" }
  ],

  "research": [
    { type: "link",    url: "", title: "Published paper: National High School Journal of Science", caption: "Prevalence of physical activity in teens by covariates" }
  ],

  "service": [
    { type: "image",   src: "", title: "Troop leadership", caption: "" },
    { type: "image",   src: "", title: "Special Needs Warrior Program", caption: "" }
  ],

  "academics": [
    { type: "image",   src: "", title: "Yale Young Global Scholars certificate", caption: "" },
    { type: "image",   src: "", title: "Cross country", caption: "" }
  ]
};
