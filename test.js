
const shortName = require('./index.js');


let companies = [
   "Walmart",
   "Sinopec Group",
   "UnitedHealth Group",
   "Royal Dutch Shell",
   "China National Petroleum",
   "Exxon Mobil",
   "State Grid",
   "Samsung Electronics",
   "Industrial & Commer. Bank of China",
   "Hon Hai Precision Industry",
   "China State Construction Engineering",
   "Assicurazioni Generali",
   "China Mobile Communications",
   "Bayrische Motoren Werke",
   "Nippon Tel. & Tel.",
   "China Railway Construction",
   "Dongfeng Motor Group",
   "Anheuser-Busch InBev",
   "Shandong Weiqiao Pioneering",
   "Twenty-First Century Fox",
   "Shanxi Jincheng Anthracite Coal Mining",
   "China Nonferrous Metal Mining",
   "Philip Morris International",
   "Sumitomo Electric Industries",
   "Minimax Viking Research & Development GmbH",
   "Agent-3D e.V. c/o Fraunhofer IWS Dresden",
   "Fraunhofer-Institut für Kurzzeitdynamik, Ernst-Mach-Institut",
   "Fraunhofer-Institut für Werkzeugmaschinen und Umformtechnik",
   "Fraunhofer Center Smart Materials",
   "Mechatronik-Zentrum Hannover (LUH)",
   "Technische Universität München",
   "Technische Universität Hamburg - Institut für Fluiddynamik und Schiffstheorie"
];


companies.forEach(function(name){
   console.log(name);
   let shortend = shortName.shortenName(name);
   console.log(shortend);
   console.log();
});
