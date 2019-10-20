'use strict'
// <--1, 2-->
const line17 = [{"name":"Åkeshov","siteId":"9108","x":"17923700","y":"59342316"},{"name":"Brommaplan","siteId":"9109","x":"17937867","y":"59338298"},{"name":"Abrahamsberg","siteId":"9110","x":"17952753","y":"59336869"},{"name":"Stora mossen","siteId":"9111","x":"17967423","y":"59334783"},{"name":"Alvik","siteId":"9112","x":"17980628","y":"59332940"},{"name":"Kristineberg","siteId":"9113","x":"18005897","y":"59332707"},{"name":"Thorildsplan","siteId":"9114","x":"18017268","y":"59331664"},{"name":"Fridhemsplan","siteId":"9115","x":"18029134","y":"59332131"},{"name":"S:t Eriksplan","siteId":"9116","x":"18038636","y":"59339583"},{"name":"Odenplan","siteId":"9117","x":"18049099","y":"59342901"},{"name":"Rådmansgatan","siteId":"9118","x":"18057531","y":"59341930"},{"name":"Hötorget","siteId":"9119","x":"18063868","y":"59335529"},{"name":"T-centralen","siteId":"9001","x":"18060434","y":"59331376"},{"name":"Gamla stan","siteId":"9193","x":"18068192","y":"59323016"},{"name":"Slussen","siteId":"9192","x":"18071860","y":"59320284"},{"name":"Medborgarplatsen","siteId":"1323","x":"18076390","y":"59314818"},{"name":"Skanstull","siteId":"9190","x":"18076166","y":"59307941"},{"name":"Gullmarsplan","siteId":"9189","x":"18080939","y":"59298422"},{"name":"Skärmarbrink","siteId":"9188","x":"18091339","y":"59297496"},{"name":"Hammarbyhöjden","siteId":"9144","x":"18107026","y":"59294709"},{"name":"Björkhagen","siteId":"9143","x":"18116078","y":"59291356"},{"name":"Kärrtorp","siteId":"9142","x":"18115736","y":"59283725"},{"name":"Bagarmossen","siteId":"9141","x":"18133508","y":"59276596"},{"name":"Skarpnäck","siteId":"9140","x":"18132618","y":"59266456"}];
const line18 = [{"name":"Alvik","siteId":"9112","x":"17980628","y":"59332940"},{"name":"Kristineberg","siteId":"9113","x":"18005897","y":"59332707"},{"name":"Thorildsplan","siteId":"9114","x":"18017268","y":"59331664"},{"name":"Fridhemsplan","siteId":"9115","x":"18029134","y":"59332131"},{"name":"S:t Eriksplan","siteId":"9116","x":"18038636","y":"59339583"},{"name":"Odenplan","siteId":"9117","x":"18049099","y":"59342901"},{"name":"Rådmansgatan","siteId":"9118","x":"18057531","y":"59341930"},{"name":"Hötorget","siteId":"9119","x":"18063868","y":"59335529"},{"name":"T-centralen","siteId":"9001","x":"18060434","y":"59331376"},{"name":"Gamla stan","siteId":"9193","x":"18068192","y":"59323016"},{"name":"Slussen","siteId":"9192","x":"18071860","y":"59320284"},{"name":"Medborgarplatsen","siteId":"1323","x":"18076390","y":"59314818"},{"name":"Skanstull","siteId":"9190","x":"18076166","y":"59307941"},{"name":"Gullmarsplan","siteId":"9189","x":"18080939","y":"59298422"},{"name":"Skärmarbrink","siteId":"9188","x":"18091339","y":"59297496"},{"name":"Blåsut","siteId":"3660","x":"17881028","y":"59341255"},{"name":"Sandsborg","siteId":"9186","x":"18089631","y":"59284830"},{"name":"Skogskyrkogården","siteId":"9185","x":"18092697","y":"59279823"},{"name":"Tallkrogen","siteId":"9184","x":"18087330","y":"59268560"},{"name":"Gubbängen","siteId":"9183","x":"18082782","y":"59261962"},{"name":"Hökarängen","siteId":"9182","x":"18082773","y":"59258429"},{"name":"Farsta","siteId":"9180","x":"18101237","y":"59236064"},{"name":"Farsta strand","siteId":"9180","x":"18101237","y":"59236064"}];
const line19 = [{"name":"Hässelby strand","siteId":"9100","x":"17831398","y":"59360870"},{"name":"Hässelby gård","siteId":"9101","x":"17843408","y":"59366488"},{"name":"Johannelund","siteId":"9102","x":"17855373","y":"59367675"},{"name":"Vällingby","siteId":"9103","x":"17871535","y":"59363486"},{"name":"Råcksta","siteId":"9104","x":"17881136","y":"59355072"},{"name":"Blackeberg","siteId":"9105","x":"17884767","y":"59349562"},{"name":"Islandstorget","siteId":"9106","x":"17893352","y":"59346415"},{"name":"Ängbyplan","siteId":"9107","x":"17907034","y":"59342568"},{"name":"Åkeshov","siteId":"9108","x":"17923700","y":"59342316"},{"name":"Brommaplan","siteId":"9109","x":"17937867","y":"59338298"},{"name":"Abrahamsberg","siteId":"9110","x":"17952753","y":"59336869"},{"name":"Stora mossen","siteId":"9111","x":"17967423","y":"59334783"},{"name":"Alvik","siteId":"9112","x":"17980628","y":"59332940"},{"name":"Kristineberg","siteId":"9113","x":"18005897","y":"59332707"},{"name":"Thorildsplan","siteId":"9114","x":"18017268","y":"59331664"},{"name":"Fridhemsplan","siteId":"9115","x":"18029134","y":"59332131"},{"name":"S:t Eriksplan","siteId":"9116","x":"18038636","y":"59339583"},{"name":"Odenplan","siteId":"9117","x":"18049099","y":"59342901"},{"name":"Rådmansgatan","siteId":"9118","x":"18057531","y":"59341930"},{"name":"Hötorget","siteId":"9119","x":"18063868","y":"59335529"},{"name":"T-centralen","siteId":"9001","x":"18060434","y":"59331376"},{"name":"Gamla stan","siteId":"9193","x":"18068192","y":"59323016"},{"name":"Slussen","siteId":"9192","x":"18071860","y":"59320284"},{"name":"Medborgarplatsen","siteId":"1323","x":"18076390","y":"59314818"},{"name":"Skanstull","siteId":"9190","x":"18076166","y":"59307941"},{"name":"Gullmarsplan","siteId":"9189","x":"18080939","y":"59298422"},{"name":"Globen","siteId":"9168","x":"18076040","y":"59293667"},{"name":"Enskede gård","siteId":"9167","x":"18070359","y":"59289639"},{"name":"Sockenplan","siteId":"9166","x":"18071536","y":"59282511"},{"name":"Svedmyra","siteId":"9165","x":"18068983","y":"59278187"},{"name":"Stureby","siteId":"9164","x":"18054178","y":"59274421"},{"name":"Bandhagen","siteId":"9163","x":"18048272","y":"59270555"},{"name":"Högdalen","siteId":"9162","x":"18041171","y":"59263121"},{"name":"Rågsved","siteId":"9161","x":"18026617","y":"59256496"},{"name":"Hagsätra","siteId":"9160","x":"17896202","y":"59392251"}];
const line13 = [{"name":"Ropsten","siteId":"9220","x":"18103430","y":"59358002"},{"name":"Gärdet","siteId":"1605","x":"18011165","y":"59315933"},{"name":"Karlaplan","siteId":"9222","x":"18092094","y":"59339071"},{"name":"Östermalmstorg","siteId":"9206","x":"18080049","y":"59336365"},{"name":"T-centralen","siteId":"9001","x":"18060434","y":"59331376"},{"name":"Gamla stan","siteId":"9193","x":"18068192","y":"59323016"},{"name":"Slussen","siteId":"9192","x":"18071860","y":"59320284"},{"name":"Mariatorget","siteId":"9297","x":"18062115","y":"59317012"},{"name":"Zinkensdamm","siteId":"9296","x":"18050277","y":"59317578"},{"name":"Hornstull","siteId":"9295","x":"18034231","y":"59315537"},{"name":"Liljeholmen","siteId":"9294","x":"18024810","y":"59310665"},{"name":"Aspudden","siteId":"9293","x":"18002184","y":"59305694"},{"name":"Örnsberg","siteId":"9292","x":"17988215","y":"59305182"},{"name":"Axelsberg","siteId":"9291","x":"17977410","y":"59304031"},{"name":"Mälarhöjden","siteId":"9290","x":"17956546","y":"59301280"},{"name":"Bredäng","siteId":"9289","x":"17933390","y":"59294736"},{"name":"Sätra","siteId":"1100","x":"18092589","y":"59332042"},{"name":"Skärholmen","siteId":"9287","x":"17909488","y":"59276758"},{"name":"Vårberg","siteId":"9286","x":"17887931","y":"59273603"},{"name":"Vårby gård","siteId":"1605","x":"18011165","y":"59315933"},{"name":"Masmo","siteId":"9284","x":"17878969","y":"59249727"},{"name":"Fittja","siteId":"9283","x":"17861243","y":"59247956"},{"name":"Alby","siteId":"9282","x":"17846608","y":"59239192"},{"name":"Hallunda","siteId":"9281","x":"17825942","y":"59243282"},{"name":"Norsborg","siteId":"9280","x":"17814085","y":"59244091"}];
const line14 = [{"name":"Mörby centrum","siteId":"9200","x":"18036271","y":"59398373"},{"name":"Danderyds sjukhus","siteId":"9201","x":"18042609","y":"59390058"},{"name":"Bergshamra","siteId":"9202","x":"18038321","y":"59380116"},{"name":"Universitetet","siteId":"9203","x":"18053800","y":"59365365"},{"name":"Tekniska högskolan","siteId":"9204","x":"18071707","y":"59345543"},{"name":"Stadion","siteId":"9205","x":"18081532","y":"59340518"},{"name":"Östermalmstorg","siteId":"9206","x":"18080049","y":"59336365"},{"name":"T-centralen","siteId":"9001","x":"18060434","y":"59331376"},{"name":"Gamla stan","siteId":"9193","x":"18068192","y":"59323016"},{"name":"Slussen","siteId":"9192","x":"18071860","y":"59320284"},{"name":"Mariatorget","siteId":"9297","x":"18062115","y":"59317012"},{"name":"Zinkensdamm","siteId":"9296","x":"18050277","y":"59317578"},{"name":"Hornstull","siteId":"9295","x":"18034231","y":"59315537"},{"name":"Liljeholmen","siteId":"9294","x":"18024810","y":"59310665"},{"name":"Midsommarkransen","siteId":"9264","x":"18011983","y":"59301874"},{"name":"Telefonplan","siteId":"9263","x":"17997510","y":"59298233"},{"name":"Hägerstensåsen","siteId":"9262","x":"17977185","y":"59294467"},{"name":"Västertorp","siteId":"9261","x":"17966506","y":"59291329"},{"name":"Fruängen","siteId":"9260","x":"17965454","y":"59285594"}]
const line10 = [{"name":"Hjulsta","siteId":"9320","x":"17885630","y":"59395829"},{"name":"Tensta","siteId":"9321","x":"17904723","y":"59393959"},{"name":"Rinkeby","siteId":"9322","x":"17922037","y":"59389033"},{"name":"Rissne","siteId":"9323","x":"17941273","y":"59376035"},{"name":"Duvbo","siteId":"9324","x":"17965194","y":"59367801"},{"name":"Sundbybergs centrum","siteId":"9325","x":"17971495","y":"59360870"},{"name":"Solna strand","siteId":"9326","x":"17974381","y":"59353499"},{"name":"Huvudsta","siteId":"9327","x":"17985419","y":"59349651"},{"name":"Västra skogen","siteId":"9306","x":"18003029","y":"59347584"},{"name":"Stadshagen","siteId":"9307","x":"18015938","y":"59337462"},{"name":"Fridhemsplan","siteId":"9115","x":"18029134","y":"59332131"},{"name":"Rådhuset","siteId":"9309","x":"18044245","y":"59331035"},{"name":"T-centralen","siteId":"9001","x":"18060434","y":"59331376"},{"name":"Kungsträdgården","siteId":"9340","x":"18073343","y":"59330801"}];
const line11 = [{"name":"Akalla","siteId":"9300","x":"17913281","y":"59415461"},{"name":"Husby","siteId":"9301","x":"17927053","y":"59410688"},{"name":"Kista","siteId":"9302","x":"17942595","y":"59403470"},{"name":"Hallonbergen","siteId":"9303","x":"17970192","y":"59375567"},{"name":"Näckrosen","siteId":"9304","x":"17983756","y":"59366443"},{"name":"Solna centrum","siteId":"9305","x":"17997555","y":"59358677"},{"name":"Västra skogen","siteId":"9306","x":"18003029","y":"59347584"},{"name":"Stadshagen","siteId":"9307","x":"18015938","y":"59337462"},{"name":"Fridhemsplan","siteId":"9115","x":"18029134","y":"59332131"},{"name":"Rådhuset","siteId":"9309","x":"18044245","y":"59331035"},{"name":"T-centralen","siteId":"9001","x":"18060434","y":"59331376"},{"name":"Kungsträdgården","siteId":"9340","x":"18073343","y":"59330801"}];
const lines = [line10,line11,line13,line14,line17,line18,line19];

let siteMap = {};
lines.forEach(line => {
  line.forEach(station => {
    siteMap[station.name] = station;
  });
});

export default {
  getSiteId,
  getDirection
}

export function getSiteId(name){
  return siteMap[name].siteId;
}

export function getDirection(fromStation,toStation){
  const lineContainingBoth = lineWithBoth(fromStation,toStation);
 
  if (lineContainingBoth){
    const indexOfFrom = lineContainingBoth.findIndex((elem)=>{return elem.name == fromStation});
    const indexOfTo = lineContainingBoth.findIndex((elem)=>{return elem.name == toStation});
    return indexOfFrom>indexOfTo?"1":"2";
  } else {
    const linesWithFromStation = linesWith(fromStation);
    for (var i=0;i<linesWithFromStation.length;i++){
      for (var j=0;j<linesWithFromStation[i].length;j++){
        if (fromStation != linesWithFromStation[i][j].name){
          if (lineWithBoth(linesWithFromStation[i][j].name,toStation)){
            // eslint-disable-next-line
            console.log(`${fromStation} - ${toStation}. Found connection: ${linesWithFromStation[i][j].name}`);
            return getDirection(fromStation, linesWithFromStation[i][j].name);
          }
        }
      }    
    }
  }

  // eslint-disable-next-line
  console.log(`Unable to find direction from ${fromStation} to ${toStation}`);
  throw "Failed to find direction";
}

function lineWithBoth(a,b){
  let lineWithBoth; 
  lines.some((line)=>{
    const stops = line.filter(stop=>{return stop.name==a || stop.name==b});
    if (stops.length>=2) {
      lineWithBoth = line;
      return true;
    }
  });
  return lineWithBoth;
}

function linesWith(a){
  let linesWithA = lines.filter((line)=>{
    return line.some(stop=>{return stop.name==a});
  });
  return linesWithA;
}