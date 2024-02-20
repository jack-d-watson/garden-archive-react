export type PlantType =
  | "Annual"
  | "Biannual"
  | "Perennial"
  | "Aquatic"
  | "Bamboo"
  | "Bulb"
  | "Cactus or Succulent"
  | "Climber"
  | "Confier"
  | "Fern"
  | "Fruit"
  | "Herb"
  | "Orchid"
  | "Ornamental Grass"
  | "Palm"
  | "Rose"
  | "Shrub"
  | "Trees";

export type SeasonSegment =
  | "Early Spring"
  | "Mid Spring"
  | "Late Spring"
  | "Early Summer"
  | "Mid Summer"
  | "Late Summer"
  | "Fall"
  | "Winter";

export type SeasonRange = {
  beginning: SeasonSegment;
  end: SeasonSegment;
};

export type SeasonOfInterest = SeasonRange | SeasonSegment | "Year Round";
export type SoilType = "Chalk" | "Clay" | "Loam" | "Sand";
export type NeedLevel = "Low" | "Average" | "High";

export type NumericRange = {
  low: number;
  high: number;
};

export type AttractableWildlife =
  | "Bees"
  | "Birds"
  | "Butterflies"
  | "Hummingbirds";

export type PhysicalDescription = {
  flower?: string;
  leaf?: string;
  height: {
    low: number;
    high: number;
  };
  spread: {
    low: number;
    high: number;
  };
};

export type StageOfLife =
  | "Sprout"
  | "Seedling"
  | "Vegetative"
  | "Reproductive"
  | "Senesence";
export type PlantPhoto = {
  caption: string;
  altText: string;
  creditLine?: string;
  stageOfLife: StageOfLife;
  uri: string;
};

export type PlantCharacteristics = {
  scientificName: string;
  commonName: string;
  varietyName?: string;
  plantType: PlantType;
  physicalDescription: PhysicalDescription;
  matureHeight: NumericRange;
  matureSpread: NumericRange;
  seasonOfInterest: SeasonOfInterest;
  soilType: SoilType[];
  droughtTolerant: boolean;
  waterNeeds: NeedLevel[];
  hardinessZone: NumericRange;
  heatZone?: NumericRange;
  sunNeeds: NeedLevel[];
  attracts: AttractableWildlife[];
  photos?: PlantPhoto[];
};
