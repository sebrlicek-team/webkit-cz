import test from "node:test";
import assert from "node:assert/strict";
import { isValidICO, isValidPSC, formatPSC, isValidCzechPhone, formatCzechPhone, isValidDIC } from "../dist/index.js";

test("IČO check digit and format", () => {
  assert.equal(isValidICO("27074358"), true);
  assert.equal(isValidICO("27074359"), false);
  assert.equal(isValidICO("123"), false);
});
test("PSČ validation and formatting", () => {
  assert.equal(isValidPSC("110 00"), true);
  assert.equal(isValidPSC("11000"), true);
  assert.equal(isValidPSC("1100"), false);
  assert.equal(formatPSC("11000"), "110 00");
  assert.equal(formatPSC("bad"), null);
});
test("Czech phone syntax and formatting", () => {
  assert.equal(isValidCzechPhone("+420 777 123 456"), true);
  assert.equal(isValidCzechPhone("777123456"), true);
  assert.equal(isValidCzechPhone("123"), false);
  assert.equal(formatCzechPhone("777123456"), "+420 777 123 456");
});
test("DIČ basic syntax", () => {
  assert.equal(isValidDIC("CZ27074358"), true);
  assert.equal(isValidDIC("CZ123"), false);
});
