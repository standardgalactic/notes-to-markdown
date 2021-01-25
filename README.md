# standard-notes-to-markdown
Converts a Standard Notes backup file to Markdown

# Summary
I wanted a way to convert my standard notes backup file to markdown to use in other file managers.
This simple Node.js program imports the backup file and create markdown files from each note.

**Please note that this script only processes the "title" and "text" (note content) properties.**

# Prerequisites
This program assumes that you have already download an unencrypted copy of your Standard Notes data.

## Downloading Your Data (Standard Notes Desktop)

1. Click on the account button

![account button](/img/img-1.png)

2. Scroll down to data backups, select unencrypted, and click "Download Backup"

![backup data](/img/img-2.png)

3. Save to Desktop

![save](/img/img-3.png)

4. Extract zip to a folder

5. You should see a file named `Standard Notes Backup and Import File txt`

![backup file](/img/img-4.png)

# Installation
Clone repository
`git clone https://github.com/trey-wallis/standard-notes-to-markdown.git`

Install node_modules
`npm install`

Place Standard Notes backup file `Standard Notes Backup and Import File txt.txt` into the `src` folder

Run program
`node index.js`

View .md files in `./out`

![md files](/img/img-5.png)
