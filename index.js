const fs = require("fs");
const fsExtra = require("fs-extra");

//Constants
const SRC_DIRECTORY = "./src";
const OUT_DIRECTORY = "./out";
const INPUT_FILE = "Standard Notes Backup and Import File txt.txt";
const OUT_FILE_EXTENSION = "md";

/**
 * Main function for our program
 */
function main() {
	fs.readFile(`${SRC_DIRECTORY}/${INPUT_FILE}`, (err, data) => {
		if (err) throw err;

		//Clear folder
		fsExtra.emptyDirSync(OUT_DIRECTORY);

		const notes = JSON.parse(data);
		const promises = [];

		notes.items.forEach((note) => {
			//Return on empty content but not on empty title
			if (note.content.text === undefined) return;

			promises.push(saveFile(note.content.title, note.content.text));
		});
		Promise.all(promises).then(() => console.log("Success!"));
	});
}

main();

/**
 * Removes invalid characters from a title
 * @param {string} title 
 */
function formatTitle(title) {
    //Replace forward slash with hyphen
    title = title.replace(/\//g, "-");
    //Remove question mark
    title = title.replace(/\?/g, "");
    return title;
}

/**
 * Writes a file to the out directory
 * @param {string} title - The note title
 * @param {string} body  - The note body
 */
async function saveFile(title, body) {
	let fileName = fileNameFromTitle(title);
	return fs.stat(`${OUT_DIRECTORY}/${fileName}`, function (err, stat) {
        //If file exists
		if (err == null) {
            fileName = fileNameFromTitle(title, false);
        //If the error is something other than the file not existing
		} else if (err.code !== "ENOENT") {
			throw err;
        }
        //Otherwise write the file
		return fs.writeFile(
			`${OUT_DIRECTORY}/${fileName}`,
			body,
			function (err) {
                if (err)
                    throw err;
            }
		);
	});
}

/**
 * Creates a file name from a note title
 * @param {string} title - the note title 
 * @param {boolean} isUnique - whether another note exists that has the same title
 */
function fileNameFromTitle(title, isUnique = true) {
	if (title === undefined) title = "Empty Title";

    //Date.now() is num millis from 1970
    //this number is always uniq
	var uniqid = Date.now();
	if (isUnique) return `${formatTitle(title)}.${OUT_FILE_EXTENSION}`;
	return `${formatTitle(title)} ${uniqid}.${OUT_FILE_EXTENSION}`;
}
