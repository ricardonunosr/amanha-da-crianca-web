interface Entity {
  id: string;
}

export interface NextMatch extends Entity {
  date: string;
  homeTeam: string;
  awayTeam: string;
  fieldName: string;
  type: string;
}

export interface PastResult extends Entity {
  date: string;
  homeTeam: string;
  awayTeam: string;
  result: string;
  type: string;
}
