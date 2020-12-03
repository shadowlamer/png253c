const distance = require('euclidean-distance');

/**
 * Array of available attributes (indexed colors)
 * attr - attribute
 * r, g, b - corresponding coordinates in RGB colorspace
 */
const palette = [
  {attr: 0x0,  r: 0,   g: 0,   b: 0},
  {attr: 0x8,  r: 0,   g: 0,   b: 96},
  {attr: 0x10, r: 96,  g: 0,   b: 0},
  {attr: 0x18, r: 96,  g: 0,   b: 96},
  {attr: 0x20, r: 0,   g: 96,  b: 0},
  {attr: 0x28, r: 0,   g: 96,  b: 96},
  {attr: 0x30, r: 96,  g: 96,  b: 0},
  {attr: 0x38, r: 96,  g: 96,  b: 96},
  {attr: 0x9,  r: 0,   g: 0,   b: 192},
  {attr: 0x19, r: 96,  g: 0,   b: 192},
  {attr: 0x29, r: 0,   g: 96,  b: 192},
  {attr: 0x39, r: 96,  g: 96,  b: 192},
  {attr: 0x12, r: 192, g: 0,   b: 0},
  {attr: 0x1a, r: 192, g: 0,   b: 96},
  {attr: 0x32, r: 192, g: 96,  b: 0},
  {attr: 0x3a, r: 192, g: 96,  b: 96},
  {attr: 0x1b, r: 192, g: 0,   b: 192},
  {attr: 0x3b, r: 192, g: 96,  b: 192},
  {attr: 0x24, r: 0,   g: 192, b: 0},
  {attr: 0x2c, r: 0,   g: 192, b: 96},
  {attr: 0x34, r: 96,  g: 192, b: 0},
  {attr: 0x3c, r: 96,  g: 192, b: 96},
  {attr: 0x2d, r: 0,   g: 192, b: 192},
  {attr: 0x3d, r: 96,  g: 192, b: 192},
  {attr: 0x36, r: 192, g: 192, b: 0},
  {attr: 0x3e, r: 192, g: 192, b: 96},
  {attr: 0x3f, r: 192, g: 192, b: 192},
  {attr: 0x48, r: 0,   g: 0,   b: 127},
  {attr: 0x50, r: 127, g: 0,   b: 0},
  {attr: 0x58, r: 127, g: 0,   b: 127},
  {attr: 0x60, r: 0,   g: 127, b: 0},
  {attr: 0x68, r: 0,   g: 127, b: 127},
  {attr: 0x70, r: 127, g: 127, b: 0},
  {attr: 0x78, r: 127, g: 127, b: 127},
  {attr: 0x49, r: 0,   g: 0,   b: 255},
  {attr: 0x59, r: 127, g: 0,   b: 255},
  {attr: 0x69, r: 0,   g: 127, b: 255},
  {attr: 0x79, r: 127, g: 127, b: 255},
  {attr: 0x52, r: 255, g: 0,   b: 0},
  {attr: 0x5a, r: 255, g: 0,   b: 127},
  {attr: 0x72, r: 255, g: 127, b: 0},
  {attr: 0x7a, r: 255, g: 127, b: 127},
  {attr: 0x5b, r: 255, g: 0,   b: 255},
  {attr: 0x7b, r: 255, g: 127, b: 255},
  {attr: 0x64, r: 0,   g: 255, b: 0},
  {attr: 0x6c, r: 0,   g: 255, b: 127},
  {attr: 0x74, r: 127, g: 255, b: 0},
  {attr: 0x7c, r: 127, g: 255, b: 127},
  {attr: 0x6d, r: 0,   g: 255, b: 255},
  {attr: 0x7d, r: 127, g: 255, b: 255},
  {attr: 0x76, r: 255, g: 255, b: 0},
  {attr: 0x7e, r: 255, g: 255, b: 127},
  {attr: 0x7f, r: 255, g: 255, b: 255}
];

class Palette {

  /**
   * Finds nearest color in RGB color space
   * @param r red coordinate
   * @param g green coordinate
   * @param b blue coordinate
   * @returns {number} attribute of nearest color from palette
   */
  getAttr(r, g, b) {
    return palette
        .map(p => ({ attr: p.attr, d: distance([r, g, b], [p.r, p.g, p.b])}))
        .reduce((a, c) => a.d < c.d ? a : c)
        .attr;
  }
}

module.exports = new Palette();
