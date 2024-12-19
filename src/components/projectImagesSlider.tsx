import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { ProjectData } from "@/app/projects/page";
const ProjectImagesSlider: React.FC<{ projectDetails: ProjectData | null }> = ({
  projectDetails,
}) => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[Autoplay({ delay: 2000 })]}
      className="w-[80%] max-w-xss"
    >
      <CarouselContent>
        {projectDetails?.project_image.map((image, index) => (
          <CarouselItem key={index} className={`basis-1/2`}>
            <div className="p-1">
              <div>
                <div>
                  <img src={image} alt={image} />
                </div>
                {/* <div className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </div> */}
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ProjectImagesSlider;
