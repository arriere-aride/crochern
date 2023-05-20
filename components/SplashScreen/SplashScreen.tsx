import {
  GithubIcon,
  StoryBookIcon,
} from "@/components";
import Image from "next/image";
import Link from "next/link";
import { RxCross2 as CloseIcon } from "react-icons/rx";
import { SplashScreen as ISplashScreen } from "./SplashScreen.d";
import {
  Center,
  CenteredIcons,
  ComingSoon,
  H1,
  H2,
  ImageStyle,
  SplashScreenClose,
  SplashScreenContainer,
  SplashScreenLeft,
  SplashScreenRight,
} from "./SplashScreen.styled";

/**
 *  Like [adobe photoshop](https://www.adobe.com/fr/products/photoshop.html),
 *  a splash screen is shown while loadings are made.
 */
export const SplashScreen = ({
  image = {
    src: "/cover.jpg",
    alt: "",
  },
  onClick = () => true,
}: ISplashScreen): JSX.Element => {
  return (
    <SplashScreenContainer>
      <SplashScreenClose onClick={onClick}>
        <CloseIcon />
      </SplashScreenClose>
      <SplashScreenLeft>
        <Image
          src={image.src}
          style={{
            ...ImageStyle,
            objectFit: "cover",
          }}
          fill={true}
          alt={image.alt}
        />
      </SplashScreenLeft>
      <SplashScreenRight>
        <Center>
          <div>
            <H1>CROCHERN</H1>
            <H2>Crochet Pattern Maker</H2>
            <ComingSoon>Coming soon</ComingSoon>
            <CenteredIcons>
              <Link href="https://github.com/arriere-aride/crochern">
                <GithubIcon />
              </Link>
              <Link href="https://6442b05ef9aaa3328e81efe6-vqehlbmdpu.chromatic.com/?path=/docs/introduction--docs">
                <StoryBookIcon />
              </Link>
            </CenteredIcons>
          </div>
        </Center>
      </SplashScreenRight>
    </SplashScreenContainer>
  );
};
