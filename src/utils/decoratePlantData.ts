import { FieldValue } from "@/types/FieldValue";
import {
  AttractableWildlife,
  NeedLevel,
  SeasonSegment,
  SoilType,
} from "@/types/PlantCharacteristics";

export function decorateSeason(
  season: SeasonSegment | "Year Round"
): FieldValue {
  switch (season) {
    case "Early Spring":
    case "Late Spring":
    case "Mid Spring":
      return {
        value: season,
        icon: {
          name: "flower-2",
          color: "black",
          size: "16px",
        },
        badge: {
          type: "primary",
          outline: false,
        },
      };
    case "Early Summer":
    case "Mid Summer":
    case "Late Summer":
      return {
        value: season,
        icon: {
          name: "sun",
          color: "black",
          size: "16px",
        },
        badge: {
          type: "warning",
          outline: false,
        },
      };
    case "Fall":
      return {
        value: season,
        icon: {
          name: "leaf",
          color: "black",
          size: "16px",
        },
        badge: {
          type: "accent",
          outline: false,
        },
      };
    case "Winter":
      return {
        value: season,
        icon: {
          name: "snowflake",
          color: "black",
          size: "16px",
        },
        badge: {
          type: "info",
          outline: false,
        },
      };
    case "Year Round":
      return {
        value: season,
        icon: {
          name: "calendar-fold",
          color: "black",
          size: "16px",
        },
        badge: {
          type: "ghost",
          outline: false,
        },
      };
  }
}

export function decorateZone(zoneValue: number): FieldValue {
  return {
    value: zoneValue + "",
    badge: {
      type: "neutral",
      outline: true,
    },
  };
}

export function decorateSoilType(soilType: SoilType[]): FieldValue[] {
  const fieldValues: FieldValue[] = [];
  for (let soil of soilType) {
    fieldValues.push({
      value: soil,
      badge: {
        type: "neutral",
        outline: true,
      },
    });
  }
  return fieldValues;
}

export function decorateSunNeeds(sunNeeds: NeedLevel[]): FieldValue[] {
  const fieldValues: FieldValue[] = [];
  for (let need of sunNeeds) {
    switch(need){
      case "Low":
        fieldValues.push({
          value: "Shade",
          badge: {
            type: "neutral",
            outline: false,
          },
          icon: {
            name: "cloud",
            color: "white",
            size: "16px"
          }
        });
        break;
      case "Average":
        fieldValues.push({
          value: "Partial Sun",
          badge: {
            type: "ghost",
            outline: false,
          },
          icon: {
            name: "cloud-sun",
            color: "black",
            size: "16px"
          }
        });
        break;
      case "High":
        fieldValues.push({
          value: "Full Sun",
          badge: {
            type: "neutral",
            outline: true,
          },
          icon: {
            name: "sun-dim",
            color: "black",
            size: "16px"
          }
        });
        break;
    }
  }
  return fieldValues;
}

export function decorateWaterNeeds(waterNeeds: NeedLevel[]): FieldValue[] {
  const fieldValues: FieldValue[] = [];
  for (let need of waterNeeds) {
    switch(need){
      case "Low":
        fieldValues.push({
          value: need,
          badge: {
            type: "neutral",
            outline: true,
          },
          icon: {
            name: "haze",
            color: "black",
            size: "16px"
          }
        });
        break;
      case "Average":
        fieldValues.push({
          value: need,
          badge: {
            type: "neutral",
            outline: true,
          },
          icon: {
            name: "droplet",
            color: "black",
            size: "16px"
          }
        });
        break;
      case "High":
        fieldValues.push({
          value: need,
          badge: {
            type: "neutral",
            outline: true,
          },
          icon: {
            name: "droplets",
            color: "black",
            size: "16px"
          }
        });
        break;
    }
  }
  return fieldValues;
}


export function decorateAttractableWildlife(
  attracts: AttractableWildlife[]
): FieldValue[] {
  const fieldValues: FieldValue[] = [];
  for (let wildlife of attracts) {
    switch(wildlife) {
      case "Bees":
        fieldValues.push({
          value: wildlife,
          badge: {
            type: "neutral",
            outline: true,
          },
          icon: {
            name: "hexagon",
            color: "black",
            size: "16px"
          }
        });
        break;
      case "Birds":
        fieldValues.push({
          value: wildlife,
          badge: {
            type: "neutral",
            outline: true,
          },
          icon: {
            name: "egg",
            color: "black",
            size: "16px"
          }
        });
        break;
      case "Butterflies":
        fieldValues.push({
          value: wildlife,
          badge: {
            type: "neutral",
            outline: true,
          },
          icon: {
            name: "bug",
            color: "black",
            size: "16px"
          }
        });
        break;
      case "Hummingbirds":
        fieldValues.push({
          value: wildlife,
          badge: {
            type: "neutral",
            outline: true,
          },
          icon: {
            name: "bird",
            color: "black",
            size: "16px"
          }
        });
        break;
    }
  }
  return fieldValues;
}
