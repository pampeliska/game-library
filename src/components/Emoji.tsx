import { Image, ImageProps } from "@chakra-ui/react";
import amazing from "../assets/amazing.webp";
import good from "../assets/good.webp";
import notGood from "../assets/not-good.webp";

interface Props {
  rating: number;
}

const Emoji = (props: Props) => {
  const { rating } = props;

  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: notGood, alt: "notGood", boxSize: "15px" },
    4: { src: good, alt: "recomended", boxSize: "15px" },
    5: { src: amazing, alt: "amazing", boxSize: "20px" },
  };

  return <Image {...emojiMap[rating]} />;
};

export default Emoji;
