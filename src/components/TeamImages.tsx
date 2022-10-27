import React, { ReactElement } from "react";

interface Image {
  image: string | string[];
}

function TeamImages({ image }: Image) {
  let img: ReactElement | ReactElement[];
  if (typeof image == "string") img = <img src={image} alt='images' />;
  else img = image.map((img) => <img src={img} alt='images' />);

  return <>{img}</>;
}

export default TeamImages;
