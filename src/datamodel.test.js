import {getSiteId, getDirection, getPossibleEndSiteFilter} from './datamodel';

test('getPossibleEndSiteFilter, Åkeshov - Bagarmossen', () => {
  expect(getPossibleEndSiteFilter("Åkeshov", "Bagarmossen")).toEqual(["Bagarmossen", "Skarpnäck"]);
});

test('getPossibleEndSiteFilter, Åkeshov - Björkhagen', () => {
  expect(getPossibleEndSiteFilter("Åkeshov", "Björkhagen")).toEqual(["Björkhagen", "Kärrtorp", "Bagarmossen", "Skarpnäck"]);
});

test('getSiteId', () => {
  expect(getSiteId("Bagarmossen")).toBe("9141");
});

test('Bagarmossen to Åkeshov', () => {
  expect(getDirection("Bagarmossen","Åkeshov")).toBe("1");
});

test('Åkeshov to Bagarmossen', () => {
  expect(getDirection("Åkeshov","Bagarmossen")).toBe("2");
});

test('Åkeshov to Bagarmossen', () => {
  expect(getDirection("Alvik","Kristineberg")).toBe("2");
});

test('Mörby centrum -> Bergshamra', () => {
  expect(getDirection("Mörby centrum","Bergshamra")).toBe("2");
});

test('Västra skogen to Hjulsta', () => {
  expect(getDirection("Västra skogen","Hjulsta")).toBe("1");
});

test('Västra skogen to Akalla', () => {
  expect(getDirection("Västra skogen","Akalla")).toBe("1");
});

test('Akalla to Hjulsta', () => {
  expect(getDirection("Akalla","Hjulsta")).toBe("2");
});

test('Norsborg to Akalla', () => {
  expect(getDirection("Norsborg","Akalla")).toBe("1");
});

test('Odenplan to Aspudden', () => {
  expect(getDirection("Odenplan","Aspudden")).toBe("2");
});

test('Ängbyplan to Aspudden', () => {
  expect(getDirection("Ängbyplan","Aspudden")).toBe("2");
});

test('Odenplan to Gamla stan', () => {
  expect(getDirection("Ängbyplan","Aspudden")).toBe("2");
});