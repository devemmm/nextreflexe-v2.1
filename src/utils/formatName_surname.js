export function formatName_surname(fname, lname) {
  const lnameSplit = lname.toLowerCase().split('');
  const lnameMod = [lnameSplit[0].toUpperCase(), ...lnameSplit].join('');

  const fnameSplit = fname.toUpperCase().split('');
  const fnameMod = fnameSplit.slice(0, 2).join('');

  return [fnameMod, '. ', lnameMod].join('');
}
