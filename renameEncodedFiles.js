import fs from 'fs';
import path from 'path';

// 🔧 Chemin vers ton dossier d'images
const folderPath = './public/assets/img/weapons';

fs.readdir(folderPath, (err, files) => {
	if (err) {
		console.error('Erreur de lecture du dossier :', err);
		return;
	}

	files.forEach((filename) => {
		if (filename.includes('%27')) {
			const oldPath = path.join(folderPath, filename);
			const decodedName = decodeURIComponent(filename); // convertit %27 en '
			const newPath = path.join(folderPath, decodedName);

			// Renommage
			fs.rename(oldPath, newPath, (renameErr) => {
				if (renameErr) {
					console.error(`❌ Échec pour ${filename} → ${decodedName}`, renameErr);
				} else {
					console.log(`✅ ${filename} → ${decodedName}`);
				}
			});
		}
	});
});
