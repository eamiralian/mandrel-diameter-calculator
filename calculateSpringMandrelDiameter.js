/* MANDREL.C   M. W. Klotz   2/05

Computing mandrel size for spring winding.  Based on Kozo Hiraoka's article in
"Home Shop Machinist", July/August 1987, pg. 30.

Ported to Javascript by Eric Amiralian 6/1/2023
https://www.myvirtualnetwork.com/mklotz/
*/

const WIRE_DIAMETER = 0.045;
const SPRING_INSIDE_DIAMETER = 0.27;
const WIRE_TYPE = 0; // 0 for music wire, 1 for phosphorus bronze wire

const CONSTANT_COEFFICIENT = [0.980364, 0.012436];
const FIRST_ORDER_COEFFICIENT = [-0.012436, -0.11018];

const springAverageDiameter = WIRE_DIAMETER + SPRING_INSIDE_DIAMETER;
const empiricalFactor =
  CONSTANT_COEFFICIENT[WIRE_TYPE] +
  (FIRST_ORDER_COEFFICIENT[WIRE_TYPE] * springAverageDiameter) / WIRE_DIAMETER;
const mandrelDiameter = empiricalFactor * springAverageDiameter - WIRE_DIAMETER;
console.log("mandrelDiameter", mandrelDiameter);
