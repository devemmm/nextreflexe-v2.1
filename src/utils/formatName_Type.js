export function formatName_Type(fname, lname, type) {
  let fnameSplit = fname.toLowerCase().split('');
  const fnameMod = [fnameSplit[0].toUpperCase(), ...fnameSplit.slice(1)].join(
    '',
  );

  const lnameSplit = lname.toUpperCase().split('');
  const lnameMod = lnameSplit.slice(0, 3).join('');

  // const typeSplit = type.toUpperCase().split('');
  // const typeMod = typeSplit.slice(0, 2).join('');

  return [fnameMod, ' ', lnameMod, '.'].join('');
}

