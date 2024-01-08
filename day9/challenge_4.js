function isValidWalk(walk) {
  if (walk.length !== 10) {
    return false;
  }

  let nn = 0;
  let ss = 0;
  let ww = 0;
  let ee = 0;

  walk.forEach((direction) => {
    switch (direction) {
      case "n":
        nn += 1;
        break;
      case "s":
        ss += 1;
        break;
      case "w":
        ww += 1;
        break;
      case "e":
        ee += 1;
        break;
    }
  });

  return nn - ss === 0 && ww - ee === 0;
}
