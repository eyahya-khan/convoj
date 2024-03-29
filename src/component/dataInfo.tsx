
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

const dataTableInfo = [
  {
    tjanstegrad: "75%",
    Tjanstetype: "Dag/Kväll",
    Undantagsregler: "",
    Delegeringar: "Insulin"
  },
  {
    tjanstegrad: "80%",
    Tjanstetype: "Roterande 3-skift",
    Undantagsregler: "",
    Delegeringar: "Läkemedel"
  },
  {
    tjanstegrad: "100%",
    Tjanstetype: "Ständing Natt",
    Undantagsregler: "",
    Delegeringar: "Sond"
  },
  {
    tjanstegrad: "90%",
    Tjanstetype: "Dag/Kväll",
    Undantagsregler: "2 st",
    Delegeringar: ""
  }
]

const blueName = ['Emery Dorwart', 'Jakob George', 'Maren Passaquindici', 'Justin Donin']

const dataTableBlueInfo = dataTableInfo.map((item, id) => Object.assign({}, item, { BlåNamn: blueName[id] }))

const gulName = ['Marley Vaccaro', 'Kaylynn Septimus', 'Lydia Dias', 'Zaire Siphron']

const dataTableGulInfo = dataTableBlueInfo.map((item, id) => Object.assign({}, item, { GulNamn: gulName[id] }))

const greenName = ['Desirae Rhiel Madsen', 'Giana Lipshutz', 'Tatiana Carder', 'Ashlynn Siphron']

const dataTableGreenInfo = dataTableGulInfo.map((item, id) => Object.assign({}, item, { GrönNamn: greenName[id] }))

const redName = ['Desirae Dokidis', 'Madelyn Schleifer', 'Madelyn Rosser', 'Skylar Bergson']

export const dataTableInformation = dataTableGreenInfo.map((item, id) => Object.assign({}, item, { RödNamn: redName[id] }))


const gladanName = ['Justin Lubin', 'Alfredo Herwitz', 'Philip Schleifer', 'Madelyn George']

const dataTableGladanInfo = dataTableInfo.map((item, id) => Object.assign({}, item, { gladanNamn: gladanName[id] }))

const sarlanName = ['Marcus Saris', 'Adison Aminoff', 'Randy Saptimus', 'Randy Gouse']

export const dataTableAlvgardenInfo = dataTableGladanInfo.map((item, id) => Object.assign({}, item, { sarlanNamn: sarlanName[id] }))
