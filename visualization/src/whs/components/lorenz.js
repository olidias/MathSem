export class Coordinate {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
}


export function Calculate() {
  const r = 28; /* document.getElementById('rho').value; */
  const s = 10; /* document.getElementById('sigma').value; */
  const beta = 8 / 3; /* document.getElementById('beta').value; */
  const it = 2500;

  let x = 0.1;
  let y = 0.1;
  let z = 0.1;
  const delta = 0.01;

  const arr = [];
  arr.push(new Coordinate(x, y, z));

  for (let i = 0; i < it; i += 1) {
    /* eslint-disable no-mixed-operators */
    x = arr[i].x + ((s * y) - (s * x)) * delta;
    y = arr[i].y + ((-x * z) + (r * x) - y) * delta;
    z = arr[i].z + ((x * y) - (beta * z)) * delta;
    arr.push(new Coordinate(x, y, z));
  }

  return arr;
}

