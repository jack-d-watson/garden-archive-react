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
          name: "Flower",
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
          name: "Sun",
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
          name: "Leaf",
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
          name: "Snowflake",
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
          name: "CalendarFold",
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
            name: "Cloud",
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
            name: "CloudSun",
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
            name: "SunDim",
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
            name: "Haze",
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
            name: "Droplet",
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
            name: "Droplets",
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
            name: "Hexagon",
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
            name: "Egg",
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
            name: "Bug",
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
            name: "Bird",
            color: "black",
            size: "16px"
          }
        });
        break;
    }
  }
  return fieldValues;
}
