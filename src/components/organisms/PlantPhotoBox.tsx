"use client";
import { PlantPhoto } from "@/types/PlantCharacteristics";
import PhotoBox from "../molecules/PhotoBox";
import Button from "../atoms/Button";
import { Dispatch, SetStateAction, useState } from "react";

function onPhotoButtonClick(
  setIndex: Dispatch<SetStateAction<number>>,
  buttonIndex: number
) {
  return () => {
    setIndex(buttonIndex);
  };
}

export default function PlantPhotoBox(props: { plantPhotos: PlantPhoto[] }) {
  const [activePlantIndex, setIndex] = useState(0);

  return (
    <div className="" id="plantPhotoBox">
      <div className="flex flex-row gap-2 pb-2">
        {props.plantPhotos.map((plantPhoto, index) => {
          return (
            <div key={index}>
              <Button
                onClick={onPhotoButtonClick(setIndex, index)}
                buttonType="neutral"
                className={"" + (activePlantIndex === index ? " btn-active" : "")}
              >
                {plantPhoto.stageOfLife}
              </Button>
            </div>
          );
        })}
      </div>
      <div className="carousel">
        {props.plantPhotos.map((plantPhoto, index) => {
          return (
            <div
              key={index}
              id={"plantPhoto-" + index}
              className={"" + (activePlantIndex === index ? "block" : "hidden")}
            >
              <PhotoBox
                caption={plantPhoto.caption}
                creditLine={plantPhoto.creditLine}
                altText={plantPhoto.altText}
                photoUri={plantPhoto.uri}
                priority={index === 0}
                className="carousel-item w-full flex-col"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
