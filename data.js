// https://www.annuityexpertadvice.com/states-that-dont-tax-retirement-income

const lists = [
  {id: 'ss', name: 'Social Security'},
  {id: 'pension', name: 'Pension'},
  {id: 'TSP', name: 'TSP'},
  {id: 'income', name: 'Income Tax'},
  {id: 'sales', name: 'Sales Tax'},
  {id: 'inheritance', name: 'Inheritance'},
];

const ss = [
  {state: 'Colorado'},
  {state: 'California'},
  {state: 'Connecticut', note: '50%'},
  {state: 'Florida'},
  {state: 'Kansas'},
  {state: 'Minnesota', note: '33%'},
  {state: 'Missouri', note: 'prorated'},
  {state: 'Montana'},
  {state: 'RhodeIsland', note: 'prorated'},
  {state: 'Vermont'},
  {state: 'WestVirginia'},
  {state: 'NewJersey'},
];

const pension = [
  {state: 'Alaska'},
  {state: 'Florida'},
  {state: 'Nevada'},
  {state: 'SouthDakota'},
  {state: 'Tennessee'},
  {state: 'Texas'},
  {state: 'Washington'},
  {state: 'Wyoming'},
  {state: 'NewHampshire'},
  {state: 'Alabama'},
  {state: 'Illinois'},
  {state: 'Hawaii'},
  {state: 'Mississippi'},
  {state: 'Pennsylvania'},
];

const TSP = [
  {state: 'Alaska'},
  {state: 'Florida'},
  {state: 'Nevada'},
  {state: 'NewHampshire'},
  {state: 'SouthDakota'},
  {state: 'Tennessee'},
  {state: 'Texas'},
  {state: 'Washington'},
  {state: 'Wyoming'},
  {state: 'Illinois'},
  {state: 'Mississippi'},
  {state: 'Pennsylvania'},
];

const income = [
  {state: 'Alaska'},
  {state: 'Florida'},
  {state: 'Nevada'},
  {state: 'NewHampshire'},
  {state: 'SouthDakota'},
  {state: 'Tennessee'},
  {state: 'Texas'},
  {state: 'Washington'},
  {state: 'Wyoming'},
];

const sales = [
  {state: 'Alaska'},
  {state: 'Delaware'},
  {state: 'Montana'},
  {state: 'NewHampshire'},
  {state: 'Oregon'},
];

const inheritance = [
  {state: 'Alabama'},
  {state: 'Alaska'},
  {state: 'Arizona'},
  {state: 'Arkansas'},
  {state: 'California'},
  {state: 'Colorado'},
  {state: 'Delaware'},
  {state: 'Florida'},
  {state: 'Georgia'},
  {state: 'Idaho'},
  {state: 'Indiana'},
  {state: 'Iowa'},
  {state: 'Kansas'},
  {state: 'Kentucky', note: 'Estate Tax Only'},
  {state: 'Louisiana', note: 'Inheritance Tax only'},
  {
    state: 'Maryland',
    note: 'Taxes can be an exemption if requirements are met',
  },
  {state: 'Michigan'},
  {state: 'Mississippi'},
  {state: 'Missouri'},
  {state: 'Montana'},
  {state: 'Nebraska', note: 'Estate Tax Only'},
  {state: 'Nevada'},
  {state: 'NewHampshire'},
  {state: 'NewJersey', note: 'Estate Tax Only'},
  {state: 'NewMexico'},
  {state: 'NorthCarolina'},
  {state: 'NorthDakota'},
  {state: 'Ohio'},
  {state: 'Oklahoma'},
  {
    state: 'Pennsylvania',
    note: 'No Estate Tax. No Inheritance Tax Depending On Beneficiary',
  },
  {state: 'SouthCarolina'},
  {state: 'SouthDakota'},
  {state: 'Tennessee'},
  {state: 'Texas'},
  {state: 'Utah'},
  {state: 'Virginia'},
  {state: 'WestVirginia'},
  {state: 'Wisconsin'},
  {state: 'Wyoming'},
];

export {lists, ss, pension, TSP, income, sales, inheritance};
