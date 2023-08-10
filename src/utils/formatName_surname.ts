export function formatName_surname(fname: string, lname: string) {
  const lnameSplit = lname.toLowerCase().split('');
  const lnameMod = [lnameSplit[0].toUpperCase(), ...lnameSplit.slice(1)].join(
    '',
  );

  const fnameSplit = fname.toUpperCase().split('');
  const fnameMod = fnameSplit.slice(0, 1).join('');

  return [fnameMod, '. ', lnameMod].join('');
}

