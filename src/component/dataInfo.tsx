
export const topNavInfo = {
  minasidor: "Mina Sidor",
  schemaLaggning: "Schemaläggning",
  organisation: "Organisation"
}

export const tabInfo = {
  organisationshierarki: "Organisationshierarki",
  schemainställningar: "Schemainställningar",
  kontoinställningar: "Kontoinställningar"
}

export const searchInfo = {
  smastadensKommun: "Småstadens kommun",
  sok: "Sök"
}

export const actionInfo = {
  person: "Ny Person",
  team: "Nytt Team",
  group: "Ny Grupp",
  changeColumn: "Ändra Kolumner",
  importera: "Importera",
  exportera: "Exportera",
  dela: "Dela"
}

export const dataTableTitleInfo = {
  namn: "Namn",
  tjanstegrad: "Tjänstegrad",
  Tjanstetype: "Tjänstetyp",
  Undantagsregler: "Undantagsregler",
  Delegeringar: "Delegeringar"
}

export const dataTableBlueInfo = [
  {
    namn: "Emery Dorwart",
    tjanstegrad: "75%",
    Tjanstetype: "Dag/Kväll",
    Undantagsregler: "",
    Delegeringar: "Insulin"
  },
  {
    namn: "Jakob George",
    tjanstegrad: "80%",
    Tjanstetype: "Roterande 3-skift",
    Undantagsregler: "",
    Delegeringar: "Läkemedel"
  },
  {
    namn: "Maren Passaquindici",
    tjanstegrad: "100%",
    Tjanstetype: "Stäadning Natt",
    Undantagsregler: "",
    Delegeringar: "Sond"
  },
  {
    namn: "Justin Donin",
    tjanstegrad: "90%",
    Tjanstetype: "Dag/Kväll",
    Undantagsregler: "2 st",
    Delegeringar: ""
  }
]

const gulName = ['Marley Vaccaro', 'Kaylynn Septimus', 'Lydia Dias', 'Zaire Siphron']

export const dataTableGulInfo = dataTableBlueInfo.map((item, id)=> Object.assign({},item,{gulNamn: gulName[id]}))


