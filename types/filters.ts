export enum OriginEnum {
  Africa = "africa",
  Asia = "asia",
  Europe = "europe",
  America = "america",
}

export type ResultFiltersType = {
  schema: {
    attributes: {
        origin: {
          enum: OriginEnum[];
        };
    }
  };
};
