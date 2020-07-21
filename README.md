Shorten company names to make them easier to use.

## Setup

```js

const shortName = require('./index.js');

let shortend = shortName.shortenName('Hon Hai Precision Industry');
console.log(shortend); // Hon Hai Pre. In.


```

## Example

> node test.js

```
Sinopec Group # long version
Sinopec G.    # shortened

UnitedHealth Group
UnitedHealth G.

Royal Dutch Shell
Royal Dutch S.

China National Petroleum
China NP.

Exxon Mobil
Exxon M.

State Grid
State Grid

Samsung Electronics
Samsung E.

Industrial & Commer. Bank of China
Industrial CB.

Hon Hai Precision Industry
Hon Hai Pre. In.

China State Construction Engineering
China State Con. En.

Assicurazioni Generali
Assicurazioni G.

China Mobile Communications
China Mobile C.

Bayrische Motoren Werke
Bayrische MW.

Nippon Tel. & Tel.
Nippon Tel. Tel.

China Railway Construction
China Railway C.

Dongfeng Motor Group
Dongfeng Motor G.

Anheuser-Busch InBev
Anheuser Busch In.

Shandong Weiqiao Pioneering
Shandong WP.

Twenty-First Century Fox
Twenty FCF.

Shanxi Jincheng Anthracite Coal Mining
Shanxi Jincheng An.

China Nonferrous Metal Mining
China NMM.

Philip Morris International
Philip Morris I.

Sumitomo Electric Industries
Sumitomo EI.

Minimax Viking Research & Development GmbH
Minimax Viking R.

Agent-3D e.V. c/o Fraunhofer IWS Dresden
Agent 3D e.V.

Fraunhofer-Institut für Kurzzeitdynamik, Ernst-Mach-Institut
Fraunhofer IK.

Fraunhofer-Institut für Werkzeugmaschinen und Umformtechnik
Fraunhofer IWU.

Fraunhofer Center Smart Materials
Fraunhofer CSM.

Mechatronik-Zentrum Hannover (LUH)
Mechatronik ZHL.

Technische Universität München
Technische UM.

Technische Universität Hamburg - Institut für Fluiddynamik und Schiffstheorie
Technische UH.


```

## testing

> npm test

## ideas for principles
* remove names, that are not memorable: group, groups, GmbH
* shorthands for common words: "Electronics" => "Electric"
* shorten the longest word
* words should still sound good => check sillables
* hypenate
* shorten to two syllables
* if too long: only first letter of word



sample names: https://github.com/mvila/big-companies/blob/master/data.json
