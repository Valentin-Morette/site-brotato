// src/scripts/filterName.js
export function filterName() {
	const searchTerm = document.getElementById('searchInput').value.toLowerCase();
	const weapons = document.querySelectorAll('.name-item');

	weapons.forEach((weapon) => {
		const weaponName = weapon.getAttribute('data-name').toLowerCase();

		// Si le nom de l'arme correspond à la recherche, on l'affiche, sinon on la cache
		if (weaponName.includes(searchTerm)) {
			weapon.style.display = 'block';
		} else {
			weapon.style.display = 'none';
		}
	});
}

// Associe la fonction filterName à l'événement 'input' sur l'élément searchInput
document.addEventListener('DOMContentLoaded', () => {
	const searchInput = document.getElementById('searchInput');
	if (searchInput) {
		searchInput.addEventListener('input', filterName);
	}
});
