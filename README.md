# standard-notes-to-markdown
Converts a Standard Notes backup file to Markdown

## Summary
I wanted a way to convert my standard notes backup file to markdown to use in other file managers.
This simple Node.js program imports the backup file and create markdown files from each note.

**Please note that this script only processes the "title" and "text" (note content) properties.**

## Prerequisites
This program assumes that you have already download an unencrypted copy of your Standard Notes data.

### Downloading Your Data (Desktop)

Click on the account button

![alt text](/img/img-1.png)

Scroll down to data backups, select unencrypted, and click "Download Backup"

Save to Desktop

Extract zip to a folder

You should see a file named `Standard Notes Backup and Import File txt`

## Installation
Clone repository
`git clone https://github.com/trey-wallis/standard-notes-to-markdown.git`

Install node_modules
`npm install`

Place Standard Notes backup file `Standard Notes Backup and Import File txt.txt` into the `src` folder

Run program
`node index.js`

View .md files in `./out`
