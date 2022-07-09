const formatName_fnameShort = (fname, lname) => {
	const initial = fname.toLowerCase().split('')[0];
	const lowerLName = lname.toLowerCase().split('');

	return [initial, '.', ' ', lowerLName[0].toUpperCase(), ...lowerLName.splice(1)].join('');
};

export default formatName_fnameShort;
