
var https = require('https');

const line17 = "Åkeshov,Brommaplan,Abrahamsberg,Stora mossen,Alvik,Kristineberg,Thorildsplan,Fridhemsplan,S:t Eriksplan,Odenplan,Rådmansgatan,Hötorget,T-centralen,Gamla stan,Slussen,Medborgarplatsen,Skanstull,Gullmarsplan,Skärmarbrink,Hammarbyhöjden,Björkhagen,Kärrtorp,Bagarmossen,Skarpnäck";
const line18 = "Alvik,Kristineberg,Thorildsplan,Fridhemsplan,S:t Eriksplan,Odenplan,Rådmansgatan,Hötorget,T-centralen,Gamla stan,Slussen,Medborgarplatsen,Skanstull,Gullmarsplan,Skärmarbrink,Blåsut,Sandsborg,Skogskyrkogården,Tallkrogen,Gubbängen,Hökarängen,Farsta,Farsta strand";
const line19 = "Hässelby strand,Hässelby gård,Johannelund,Vällingby,Råcksta,Blackeberg,Islandstorget,Ängbyplan,Åkeshov,Brommaplan,Abrahamsberg,Stora mossen,Alvik,Kristineberg,Thorildsplan,Fridhemsplan,S:t Eriksplan,Odenplan,Rådmansgatan,Hötorget,T-centralen,Gamla stan,Slussen,Medborgarplatsen,Skanstull,Gullmarsplan,Globen,Enskede gård,Sockenplan,Svedmyra,Stureby,Bandhagen,Högdalen,Rågsved,Hagsätra"
const line13 = "Ropsten,Gärdet,Karlaplan,Östermalmstorg,T-centralen,Gamla stan,Slussen,Mariatorget,Zinkensdamm,Hornstull,Liljeholmen,Aspudden,Örnsberg,Axelsberg,Mälarhöjden,Bredäng,Sätra,Skärholmen,Vårberg,Vårby gård,Masmo,Fittja,Alby,Hallunda,Norsborg";
const line14 = "Mörby centrum,Danderyds sjukhus,Bergshamra,Universitetet,Tekniska högskolan,Stadion,Östermalmstorg,T-centralen,Gamla stan,Slussen,Mariatorget,Zinkensdamm,Hornstull,Liljeholmen,Midsommarkransen,Telefonplan,Hägerstensåsen,Västertorp,Fruängen";
const line10 = "Hjulsta,Tensta,Rinkeby,Rissne,Duvbo,Sundbybergs centrum,Solna strand,Huvudsta,Västra skogen,Stadshagen,Fridhemsplan,Rådhuset,T-centralen,Kungsträdgården";
const line11 = "Akalla,Husby,Kista,Hallonbergen,Näckrosen,Solna centrum,Västra skogen,Stadshagen,Fridhemsplan,Rådhuset,T-centralen,Kungsträdgården";

const test = "Bagarmossen";
AUTH_KEY = process.argv[2];

if (!AUTH_KEY) {
  console.error("Needs auth key! 'npm run siteids YOUR_TRAFIKLAB_KEY'\n\n");
  process.exit(1);
}

loadSites(test.split(','));

async function loadSites(stations) {
  let sts = [];
  for(const station of stations) {
    sts.push(await find(station));
  }
  console.log(JSON.stringify(sts));
};

function find(station) {
  return new Promise((resolve, reject) => {
    https.get(`https://api.sl.se/api2/typeahead.json?key=${AUTH_KEY}&searchstring=${station}&stationsonly=True&maxresults=1&type=S`, (res) => {
      const { statusCode } = res;
      const contentType = res.headers['content-type'];

      let error;
      if (statusCode !== 200) {
        error = new Error('Request Failed.\n' +
                          `Status Code: ${statusCode}`);
      } else if (!/^application\/json/.test(contentType)) {
        error = new Error('Invalid content-type.\n' +
                          `Expected application/json but received ${contentType}`);
      }
      if (error) {
        res.resume();
        console.log(error.message);
        reject(error);
        return;
      }

      res.setEncoding('utf8');
      let rawData = '';
      res.on('data', (chunk) => { rawData += chunk; });
      res.on('end', () => {
        try {
          const parsedData = JSON.parse(rawData);
          const st = parsedData.ResponseData[0];
          let obj = { name: station, siteId: st.SiteId, x:st.X, y:st.Y };
          resolve(obj);
        } catch (e) {
          console.error(e.message);
          reject(e);
        }
      });
    }).on('error', (e) => {
      console.error(`Got error: ${e.message}`);
      reject(error);
    });
  });
}