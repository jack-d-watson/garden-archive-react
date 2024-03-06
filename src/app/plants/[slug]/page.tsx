"use client";

import Button from "@/components/atoms/Button";
import PageTitle from "@/components/molecules/PageTitle";
import PhysicalDescriptionBlock from "@/components/organisms/PhysicalDescriptionBlock";
import PlantData from "@/components/organisms/PlantData";
import PlantPhotoBox from "@/components/organisms/PlantPhotoBox";
import { getPlant } from "@/data/plantsDatabase";
import { PlantCharacteristics } from "@/types/PlantCharacteristics";
import { CartDispatchContext } from "@/utils/cartContext";
import { handleAddItem } from "@/utils/cartReducer";
import { useContext, useState } from "react";

export default function PlantSlug({ params }: { params: { slug: string } }) {
  console.log(`User visited /plants/${params.slug}`);
  // let plantData = await getData(params.slug);
  let [plantData, setPlantData] = useState<PlantCharacteristics>();

  getPlant(params.slug)
    .then((data) => {
      setPlantData(data);
    })
    .catch((error) => {
      console.log(error);
    });

  const dispatch = useContext(CartDispatchContext);
  if (!plantData) {
    return <p>loading...</p>;
  } else {
    return (
      <div className="px-2">
        <PageTitle
          title={plantData.commonName + " - " + plantData.scientificName}
          subtitle={plantData.varietyName}
        />
        <div className="grid grid-cols-2 py-4">
          <div className="" id="plantInfo">
            <PhysicalDescriptionBlock
              physicalDescriptions={plantData.physicalDescription}
            />
            <PlantData plantData={plantData} />
            <Button
              buttonType="primary"
              onClick={() => {
                const cartItem = {
                  plantLabel: plantData!!.commonName,
                  quantity: 1,
                  plantId: params.slug,
                  href: "/plants/" + params.slug,
                  spreadPerPlant: plantData!!.physicalDescription.spread.high,
                };
                handleAddItem(dispatch, cartItem);
              }}
            >
              Add to My Garden
            </Button>
          </div>
          <div className="" id="plantPhotos">
            {plantData.photos && (
              <PlantPhotoBox plantPhotos={plantData.photos} />
            )}
          </div>
        </div>
      </div>
    );
  }
}
