import { Injectable } from "@angular/core";

export class Data {
  house: string;

  monarch: string;

  start: Date;

  end: Date;
}

const dataSource = [
  {
    monarch: "F01",
    start: new Date(2022, 6, 1),
    end: new Date(2022, 6, 8),
    house: "F01"
  },
  {
    monarch: "F02",
    start: new Date(2022, 6, 2),
    house: "F02",
    end: new Date(2022, 6, 12)
  },
  {
    monarch: "F03",
    start: new Date(2022, 6, 16),
    house: "F03",
    end: new Date(2022, 6, 20)
  },
  {
    monarch: "F04",
    start: new Date(2022, 6, 25),
    house: "F04",
    end: new Date(2022, 6, 29)
  },
  {
    monarch: "F06",
    start: new Date(2022, 6, 15),
    house: "F06",
    end: new Date(2022, 6, 21)
  },
  {
    monarch: "F06",
    start: new Date(2022, 6, 11),
    house: "F06",
    end: new Date(2022, 6, 25)
  },
  {
    monarch: "F07",
    start: new Date(2022, 6, 26),
    house: "F07",
    end: new Date(2022, 6, 20)
  },
  {
    monarch: "F08",
    start: new Date(2022, 6, 20),
    end: new Date(2022, 6, 22),
    house: "F08"
  },
  {
    monarch: "F09",
    start: new Date(2022, 6, 22),
    house: "F09",
    end: new Date(2022, 6, 6)
  },
  {
    monarch: "F10",
    start: new Date(2022, 6, 6),
    house: "F10",
    end: new Date(2022, 6, 17)
  },
  {
    monarch: "F11",
    start: new Date(2022, 6, 17),
    house: "F11",
    end: new Date(2022, 6, 20)
  },
  {
    monarch: "F12",
    start: new Date(2022, 6, 20),
    house: "F12",
    end: new Date(2022, 6, 11)
  },
  {
    monarch: "F13",
    start: new Date(2022, 6, 11),
    house: "F13",
    end: new Date(2022, 6, 6)
  },
  {
    monarch: "F14",
    house: "F14",
    start: new Date(2022, 6, 6),
    end: new Date(2022, 6, 11)
  },
  {
    house: "F16",
    start: new Date(2022, 6, 1),
    end: new Date(2022, 6, 5),
    monarch: "F16"
  },
  {
    end: new Date(2022, 6, 8),
    house: "F16",
    start: new Date(2022, 6, 13),
    monarch: "F16"
  },
  {
    start: new Date(2022, 6, 15),
    end: new Date(2022, 6, 17),
    house: "F16",
    monarch: "F16"
  },
  {
    house: "F16",
    start: new Date(2022, 6, 19),
    end: new Date(2022, 6, 25),
    monarch: "F16"
  }
];

@Injectable()
export class Service {
  getData(): Data[] {
    return dataSource;
  }
}
