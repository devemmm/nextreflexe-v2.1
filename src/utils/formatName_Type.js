export function formatName_Type(fname, lname, type) {
	const fnameSplit = fname.toLowerCase().split('');
	const fnameMod = [fnameSplit[0].toUpperCase(), ...fnameSplit].join('');

	const lnameSplit = lname.toUpperCase().split('');
	const lnameMod = lnameSplit.slice(0, 2).join('');

	const typeSplit = type.toUpperCase().split('');
	const typeMod = typeSplit.slice(0, 2).join('');

	return [typeMod, ' ', fnameMod, '.', lnameMod].join('');
}
