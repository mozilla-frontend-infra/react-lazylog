function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const getSpacy = list =>
  list.reduce((acc, item) => {
    const color = getRandomColor();
    const items = item.valueReference.map(e => ({
      name: e.name,
      type: 'location',
      position: { start: e.start, end: e.end },
      color,
    }));
    return acc.concat(items);
  }, []);

const spacyEntitites = {
  '@type': 'Dataset',
  measurementTechnique: 'spacy-entities',
  variableMeasured: [
    {
      name: 'Numbers',
      '@type': 'PropertyValue',
      valueReference: [
        { '@type': 'spacy-entity', name: '3', start: 85, end: 86 },
        { '@type': 'spacy-entity', name: '3', start: 4252, end: 4253 },
        { '@type': 'spacy-entity', name: '3', start: 6469, end: 6470 },
        { '@type': 'spacy-entity', name: '3.5', start: 9514, end: 9517 },
        { '@type': 'spacy-entity', name: 'three', start: 10347, end: 10352 },
        { '@type': 'spacy-entity', name: '3', start: 10725, end: 10726 },
        { '@type': 'spacy-entity', name: 'one', start: 11323, end: 11326 },
        { '@type': 'spacy-entity', name: '3', start: 12945, end: 12946 },
        { '@type': 'spacy-entity', name: '3', start: 14973, end: 14974 },
        { '@type': 'spacy-entity', name: 'twenty', start: 16791, end: 16797 },
        { '@type': 'spacy-entity', name: 'One', start: 19384, end: 19387 },
      ],
    },
    {
      name: 'Law',
      '@type': 'PropertyValue',
      valueReference: [
        {
          '@type': 'spacy-entity',
          name: 'CHAPTER 3 - METHODOLOGY\nChapter Preface\n',
          start: 181,
          end: 221,
        },
        { '@type': 'spacy-entity', name: 'Chapter 1', start: 324, end: 333 },
        { '@type': 'spacy-entity', name: 'Chapter 5', start: 16838, end: 16847 },
        { '@type': 'spacy-entity', name: 'Chapter 9', start: 17007, end: 17016 },
      ],
    },
    {
      name: 'Dates',
      '@type': 'PropertyValue',
      valueReference: [
        { '@type': 'spacy-entity', name: '1991', start: 632, end: 636 },
        { '@type': 'spacy-entity', name: '1994', start: 695, end: 699 },
        { '@type': 'spacy-entity', name: '1999', start: 3025, end: 3029 },
        { '@type': 'spacy-entity', name: '1979', start: 4493, end: 4497 },
        { '@type': 'spacy-entity', name: '1992', start: 5336, end: 5340 },
        { '@type': 'spacy-entity', name: '1999', start: 5774, end: 5778 },
        { '@type': 'spacy-entity', name: '1999', start: 5938, end: 5942 },
        { '@type': 'spacy-entity', name: 'many years', start: 7456, end: 7466 },
        { '@type': 'spacy-entity', name: '1984', start: 7716, end: 7720 },
        { '@type': 'spacy-entity', name: '1980', start: 9936, end: 9940 },
        { '@type': 'spacy-entity', name: '1987', start: 10178, end: 10182 },
        { '@type': 'spacy-entity', name: '1987', start: 10324, end: 10328 },
        { '@type': 'spacy-entity', name: '60\n\n', start: 10636, end: 10640 },
        { '@type': 'spacy-entity', name: '1978', start: 11065, end: 11069 },
        { '@type': 'spacy-entity', name: '1984', start: 11082, end: 11086 },
        { '@type': 'spacy-entity', name: '1984', start: 11094, end: 11098 },
        { '@type': 'spacy-entity', name: '1985', start: 11109, end: 11113 },
        { '@type': 'spacy-entity', name: '1985', start: 11127, end: 11131 },
        { '@type': 'spacy-entity', name: '1987', start: 11153, end: 11157 },
        { '@type': 'spacy-entity', name: '1991', start: 11722, end: 11726 },
        { '@type': 'spacy-entity', name: '1991', start: 12284, end: 12288 },
        { '@type': 'spacy-entity', name: '1983', start: 12300, end: 12304 },
        { '@type': 'spacy-entity', name: '1978', start: 12591, end: 12595 },
        { '@type': 'spacy-entity', name: '61\n\n', start: 12857, end: 12861 },
        { '@type': 'spacy-entity', name: '1994', start: 13753, end: 13757 },
        { '@type': 'spacy-entity', name: '1994', start: 14196, end: 14200 },
        { '@type': 'spacy-entity', name: '62\n\n', start: 14884, end: 14888 },
        { '@type': 'spacy-entity', name: '2001', start: 15316, end: 15320 },
        { '@type': 'spacy-entity', name: '1987', start: 15339, end: 15343 },
        { '@type': 'spacy-entity', name: '1994', start: 16072, end: 16076 },
        { '@type': 'spacy-entity', name: '1989', start: 16314, end: 16318 },
        { '@type': 'spacy-entity', name: '1984', start: 17194, end: 17198 },
        { '@type': 'spacy-entity', name: '1984', start: 17905, end: 17909 },
        { '@type': 'spacy-entity', name: '1990', start: 20196, end: 20200 },
        { '@type': 'spacy-entity', name: '1998', start: 20483, end: 20487 },
        { '@type': 'spacy-entity', name: '1995', start: 21436, end: 21440 },
        { '@type': 'spacy-entity', name: '65\n', start: 21515, end: 21518 },
      ],
    },
    {
      name: 'Works of Art',
      '@type': 'PropertyValue',
      valueReference: [
        { '@type': 'spacy-entity', name: 'PhD', start: 676, end: 679 },
        { '@type': 'spacy-entity', name: 'PhD', start: 1022, end: 1025 },
        { '@type': 'spacy-entity', name: 'PhD', start: 3018, end: 3021 },
      ],
    },
    {
      name: 'Countries, cities and states',
      '@type': 'PropertyValue',
      valueReference: [
        { '@type': 'spacy-entity', name: 'Gable', start: 688, end: 693 },
        { '@type': 'spacy-entity', name: 'Smith', start: 12277, end: 12282 },
      ],
    },
    {
      name: 'Person',
      '@type': 'PropertyValue',
      valueReference: [
        { '@type': 'spacy-entity', name: 'Methodology\n', start: 808, end: 820 },
        { '@type': 'spacy-entity', name: 'Models', start: 3031, end: 3037 },
        { '@type': 'spacy-entity', name: 'Van Maanen', start: 4481, end: 4491 },
        { '@type': 'spacy-entity', name: 'Klein', start: 5921, end: 5926 },
        { '@type': 'spacy-entity', name: '\n\nCase', start: 6541, end: 6547 },
        { '@type': 'spacy-entity', name: 'Yin', start: 7711, end: 7714 },
        { '@type': 'spacy-entity', name: 'Benbasat', start: 10159, end: 10167 },
        { '@type': 'spacy-entity', name: 'Benbasat', start: 10307, end: 10315 },
        { '@type': 'spacy-entity', name: 'al', start: 10319, end: 10321 },
        { '@type': 'spacy-entity', name: 'Jackson', start: 11042, end: 11049 },
        { '@type': 'spacy-entity', name: 'Stone', start: 11058, end: 11063 },
        { '@type': 'spacy-entity', name: 'Benbasat\n', start: 11072, end: 11081 },
        { '@type': 'spacy-entity', name: 'Yin', start: 11089, end: 11092 },
        { '@type': 'spacy-entity', name: 'Bonoma', start: 11101, end: 11107 },
        { '@type': 'spacy-entity', name: 'Kaplan', start: 11119, end: 11125 },
        { '@type': 'spacy-entity', name: 'Benbasat', start: 11136, end: 11144 },
        { '@type': 'spacy-entity', name: 'Gummerson', start: 11711, end: 11720 },
        { '@type': 'spacy-entity', name: 'Mitchel', start: 12291, end: 12298 },
        { '@type': 'spacy-entity', name: 'Yin\n', start: 13748, end: 13752 },
        { '@type': 'spacy-entity', name: 'Yin', start: 14191, end: 14194 },
        { '@type': 'spacy-entity', name: 'Jackson', start: 15307, end: 15314 },
        { '@type': 'spacy-entity', name: 'al', start: 15335, end: 15337 },
        { '@type': 'spacy-entity', name: 'Yin', start: 16067, end: 16070 },
        { '@type': 'spacy-entity', name: 'Lee', start: 16309, end: 16312 },
        { '@type': 'spacy-entity', name: 'Yin\n', start: 17189, end: 17193 },
        {
          '@type': 'spacy-entity',
          name: '                                                               Chapter',
          start: 17325,
          end: 17395,
        },
        { '@type': 'spacy-entity', name: 'Yin', start: 17900, end: 17903 },
        { '@type': 'spacy-entity', name: 'Yin', start: 18273, end: 18276 },
        { '@type': 'spacy-entity', name: 'Stewart', start: 20172, end: 20179 },
        { '@type': 'spacy-entity', name: 'Shamdasani', start: 20184, end: 20194 },
        { '@type': 'spacy-entity', name: 'Additionally Greenbaum', start: 20459, end: 20481 },
      ],
    },
    {
      name: 'Organisation',
      '@type': 'PropertyValue',
      valueReference: [
        { '@type': 'spacy-entity', name: 'Loughborough University\n', start: 1045, end: 1069 },
        { '@type': 'spacy-entity', name: '  Research', start: 2067, end: 2077 },
        { '@type': 'spacy-entity', name: '  Research', start: 2136, end: 2146 },
        { '@type': 'spacy-entity', name: '  Research', start: 2258, end: 2268 },
        { '@type': 'spacy-entity', name: '\n\n\n3.4 Research', start: 4324, end: 4339 },
        { '@type': 'spacy-entity', name: 'Clarke', start: 5766, end: 5772 },
        { '@type': 'spacy-entity', name: 'Myers', start: 5931, end: 5936 },
        { '@type': 'spacy-entity', name: 'Dockerell and Hamilition', start: 9910, end: 9934 },
        { '@type': 'spacy-entity', name: '  Research', start: 10804, end: 10814 },
        { '@type': 'spacy-entity', name: 'how’', start: 14018, end: 14022 },
        { '@type': 'spacy-entity', name: 'how’', start: 14470, end: 14474 },
        { '@type': 'spacy-entity', name: 'NSB', start: 18106, end: 18109 },
        { '@type': 'spacy-entity', name: 'NSB', start: 18389, end: 18392 },
      ],
    },
    {
      name: 'Percentages',
      '@type': 'PropertyValue',
      valueReference: [
        { '@type': 'spacy-entity', name: '3\n', start: 1907, end: 1909 },
        { '@type': 'spacy-entity', name: 'as low as 20%', start: 19972, end: 19985 },
      ],
    },
    {
      name: 'Products',
      '@type': 'PropertyValue',
      valueReference: [
        { '@type': 'spacy-entity', name: '57\n\nMethodology', start: 4163, end: 4178 },
        { '@type': 'spacy-entity', name: '58\n\n', start: 6378, end: 6382 },
        { '@type': 'spacy-entity', name: '  detail', start: 6877, end: 6885 },
      ],
    },
    {
      name: 'Positions',
      '@type': 'PropertyValue',
      valueReference: [
        { '@type': 'spacy-entity', name: 'secondary', start: 6164, end: 6173 },
        { '@type': 'spacy-entity', name: 'first', start: 16887, end: 16892 },
      ],
    },
    {
      name: 'Human group',
      '@type': 'PropertyValue',
      valueReference: [{ '@type': 'spacy-entity', name: 'Bryman', start: 12583, end: 12589 }],
    },
    {
      name: 'Money',
      '@type': 'PropertyValue',
      valueReference: [{ '@type': 'spacy-entity', name: '63\n\n', start: 17309, end: 17313 }],
    },
    {
      name: 'Events',
      '@type': 'PropertyValue',
      valueReference: [{ '@type': 'spacy-entity', name: 'World War II', start: 20110, end: 20122 }],
    },
  ],
};

const numbers = {
  '@type': 'Dataset',
  measurementTechnique: 'found-numbers',
  variableMeasured: [
    { name: '3', '@type': 'found-number', start: 85, end: 86 },
    { name: '3 -', '@type': 'found-number', start: 189, end: 192 },
    { name: '1.', '@type': 'found-number', start: 332, end: 334 },
    { name: '1991', '@type': 'found-number', start: 632, end: 636 },
    { name: '1994', '@type': 'found-number', start: 695, end: 699 },
    { name: '3.1', '@type': 'found-number', start: 804, end: 807 },
    { name: '3.2', '@type': 'found-number', start: 1288, end: 1291 },
    { name: '56', '@type': 'found-number', start: 1819, end: 1821 },
    { name: '3', '@type': 'found-number', start: 1907, end: 1908 },
    { name: '3.3', '@type': 'found-number', start: 2834, end: 2837 },
    { name: '1999.', '@type': 'found-number', start: 3025, end: 3030 },
    { name: '57', '@type': 'found-number', start: 4163, end: 4165 },
    { name: '3', '@type': 'found-number', start: 4252, end: 4253 },
    { name: '3.4', '@type': 'found-number', start: 4327, end: 4330 },
    { name: '1979', '@type': 'found-number', start: 4493, end: 4497 },
    { name: '1992', '@type': 'found-number', start: 5336, end: 5340 },
    { name: '1999', '@type': 'found-number', start: 5774, end: 5778 },
    { name: '1999', '@type': 'found-number', start: 5938, end: 5942 },
    { name: '58', '@type': 'found-number', start: 6378, end: 6380 },
    { name: '3', '@type': 'found-number', start: 6469, end: 6470 },
    { name: '1984', '@type': 'found-number', start: 7716, end: 7720 },
    { name: '59', '@type': 'found-number', start: 8711, end: 8713 },
    { name: '3', '@type': 'found-number', start: 8801, end: 8802 },
    { name: '3.5', '@type': 'found-number', start: 9514, end: 9517 },
    { name: '1980', '@type': 'found-number', start: 9936, end: 9940 },
    { name: '1987', '@type': 'found-number', start: 10178, end: 10182 },
    { name: '1987', '@type': 'found-number', start: 10324, end: 10328 },
    { name: '60', '@type': 'found-number', start: 10636, end: 10638 },
    { name: '3', '@type': 'found-number', start: 10725, end: 10726 },
    { name: '2001', '@type': 'found-number', start: 11051, end: 11055 },
    { name: '1978', '@type': 'found-number', start: 11065, end: 11069 },
    { name: '1984', '@type': 'found-number', start: 11082, end: 11086 },
    { name: '1984', '@type': 'found-number', start: 11094, end: 11098 },
    { name: '1985', '@type': 'found-number', start: 11109, end: 11113 },
    { name: '1985', '@type': 'found-number', start: 11127, end: 11131 },
    { name: '1987', '@type': 'found-number', start: 11153, end: 11157 },
    { name: '1991', '@type': 'found-number', start: 11722, end: 11726 },
    { name: '1991', '@type': 'found-number', start: 12284, end: 12288 },
    { name: '1983', '@type': 'found-number', start: 12300, end: 12304 },
    { name: '1978', '@type': 'found-number', start: 12591, end: 12595 },
    { name: '61', '@type': 'found-number', start: 12857, end: 12859 },
    { name: '3', '@type': 'found-number', start: 12945, end: 12946 },
    { name: '1994', '@type': 'found-number', start: 13753, end: 13757 },
    { name: '1994', '@type': 'found-number', start: 14196, end: 14200 },
    { name: '62', '@type': 'found-number', start: 14884, end: 14886 },
    { name: '3', '@type': 'found-number', start: 14973, end: 14974 },
    { name: '2001', '@type': 'found-number', start: 15316, end: 15320 },
    { name: '1987', '@type': 'found-number', start: 15339, end: 15343 },
    { name: '1994', '@type': 'found-number', start: 16072, end: 16076 },
    { name: '1989', '@type': 'found-number', start: 16314, end: 16318 },
    { name: '2', '@type': 'found-number', start: 16723, end: 16724 },
    { name: '5.', '@type': 'found-number', start: 16846, end: 16848 },
    { name: '9.', '@type': 'found-number', start: 17015, end: 17017 },
    { name: '1984', '@type': 'found-number', start: 17194, end: 17198 },
    { name: '63', '@type': 'found-number', start: 17309, end: 17311 },
    { name: '3', '@type': 'found-number', start: 17396, end: 17397 },
    { name: '1984', '@type': 'found-number', start: 17905, end: 17909 },
    { name: '3.6', '@type': 'found-number', start: 19020, end: 19023 },
    { name: '64', '@type': 'found-number', start: 19551, end: 19553 },
    { name: '3', '@type': 'found-number', start: 19639, end: 19640 },
    { name: '20', '@type': 'found-number', start: 19982, end: 19984 },
    { name: '1990', '@type': 'found-number', start: 20196, end: 20200 },
    { name: '1998', '@type': 'found-number', start: 20483, end: 20487 },
    { name: '3.7', '@type': 'found-number', start: 20695, end: 20698 },
    { name: '1995', '@type': 'found-number', start: 21436, end: 21440 },
    { name: '65', '@type': 'found-number', start: 21515, end: 21517 },
  ],
};

// const currenciesData = currencies.variableMeasured.map(e => {
//   return {
//     value: e.name,
//     type: 'location',
//     color: 'green',
//     caseSensitive: true,
//     position: {
//       start: e.start,
//       end: e.end,
//     },
//   };
// });

const numberColor = getRandomColor();

const numbersData = numbers.variableMeasured.map(e => {
  return {
    value: e.name,
    type: 'location',
    color: numberColor,
    caseSensitive: false,
    position: {
      start: e.start,
      end: e.end,
    },
  };
});

export const items = getSpacy(spacyEntitites.variableMeasured).concat(numbersData);
