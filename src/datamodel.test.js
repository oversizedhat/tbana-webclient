import model from './datamodel';

test('getPossibleEndSiteFilter, Åkeshov - Bagarmossen', () => {
  expect(model.getPossibleEndSiteFilter("Åkeshov", "Bagarmossen")).toEqual(["Bagarmossen", "Skarpnäck"]);
});

test('getPossibleEndSiteFilter, Åkeshov - Björkhagen', () => {
  expect(model.getPossibleEndSiteFilter("Åkeshov", "Björkhagen")).toEqual(["Björkhagen", "Kärrtorp", "Bagarmossen", "Skarpnäck"]);
});

test('getSiteId', () => {
  expect(model.getSiteId("Bagarmossen")).toBe("9141");
});

test('Bagarmossen to Åkeshov', () => {
  expect(model.getDirection("Bagarmossen","Åkeshov")).toBe("1");
});

test('Åkeshov to Bagarmossen', () => {
  expect(model.getDirection("Åkeshov","Bagarmossen")).toBe("2");
});

test('Åkeshov to Bagarmossen', () => {
  expect(model.getDirection("Alvik","Kristineberg")).toBe("2");
});

test('Mörby centrum -> Bergshamra', () => {
  expect(model.getDirection("Mörby centrum","Bergshamra")).toBe("2");
});

test('Västra skogen to Hjulsta', () => {
  expect(model.getDirection("Västra skogen","Hjulsta")).toBe("1");
});

test('Västra skogen to Akalla', () => {
  expect(model.getDirection("Västra skogen","Akalla")).toBe("1");
});

test('Akalla to Hjulsta', () => {
  expect(model.getDirection("Akalla","Hjulsta")).toBe("2");
});

test('Norsborg to Akalla', () => {
  expect(model.getDirection("Norsborg","Akalla")).toBe("1");
});

test('Odenplan to Aspudden', () => {
  expect(model.getDirection("Odenplan","Aspudden")).toBe("2");
});

test('Ängbyplan to Aspudden', () => {
  expect(model.getDirection("Ängbyplan","Aspudden")).toBe("2");
});

test('Odenplan to Gamla stan', () => {
  expect(model.getDirection("Ängbyplan","Aspudden")).toBe("2");
});

test.only('should be possible to set/get active sites', () => {
  model.setActiveSites("Bagarmossen", "Alvik");

  expect(model.getActiveSites().from).toEqual("Bagarmossen");
  expect(model.getActiveSites().to).toEqual("Alvik");
});

test.only('should not be possible to set faulty active sites', () => {
  expect(()=>{model.setActiveSites("BagarmosSsen", "Alvdik")}).toThrow();
  expect(()=>{model.setActiveSites("Bagarmossssen", "Alvik")}).toThrow();
  expect(()=>{model.setActiveSites("Bagarmossen", "Alvdik")}).toThrow();
});

test.only('should be ok with some white spaces in site names...', () => {
  model.setActiveSites("  Bagarmossen  ", " Alvik");
  model.setActiveSites("Bagarmossen  ", " Alvik ");
});