import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { BrowserRouter as Router } from "react-router-dom";
import { Button } from "./components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ProjectCard from "@/components/ProjectCard";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { Separator } from "./components/ui/separator";
import Autoplay from "embla-carousel-autoplay";
import { Switch } from "./components/ui/switch";
import { Label } from "@/components/ui/label";

import loversRetreatImage from "./assets/lovers-retreat.webp";
import thankGodIDoImage from "./assets/thank-god-I-do.webp";
import fearIsNotWelcomeImage from "./assets/fear-is-not-welcome.webp";
import iSeeTheLightImage from "./assets/I-see-the-light.webp";
import oliviaRodrigoImage from "./assets/olivia-rodrigo.webp";
import stillImage from "./assets/still.jpg";
import bethesdaImage from "./assets/bethesda.jpg";
import pieceMakerImage from "./assets/piece-maker.jpg";
import tokyoCowboyImage from "./assets/tokyo-cowboy.jpg";
import cryoImage from "./assets/cryo.jpg";
import beauProfileImage1 from "./assets/beau-wright-profile-4.jpg";
import beauProfileImage2 from "./assets/beau-wright-profile-3.jpg";

const projects = [
  {
    title: "Lover's Retreat",
    description: "Colorist",
    content:
      "Created a stylized horror color grade as the colorist with bright reds and unnerving greens.",
    imageUrl: loversRetreatImage,
    link: "https://youtu.be/8c7Lg08g-NY?si=N4-QFmiOGnFVWx9O",
    buttonLabel: "Watch Online",
  },
  {
    title: "deja vu / drivers license / good 4 u",
    description: "Colorist",
    content:
      "Created a vibrant, saturated filmic color grade as the colorist with for this Noteworthy music video.",
    imageUrl: oliviaRodrigoImage,
    link: "https://youtu.be/YqyjTfJ0F0c?si=qksQ08wv4XU4nmOC",
    buttonLabel: "Watch Online",
  },
  {
    title: "Fear Is Not Welcome",
    description: "Colorist",
    content:
      "Created a warm color grade as the colorist for this Vocal Point music video.",
    imageUrl: fearIsNotWelcomeImage,
    link: "https://youtu.be/fw1mBBMl6rI?si=DH-mZlYCzVbrPa-k",
    buttonLabel: "Watch Online",
  },
  {
    title: "Tokyo Cowboy",
    description: "Assistant Colorist",
    content:
      "Created a unique workflow for correcting image artifacts in the color-grade and assisted in the conform and deliveries.",
    imageUrl: tokyoCowboyImage,
    link: "https://www.imdb.com/title/tt22815732/",
    buttonLabel: "View on IMDB",
  },
  {
    title: "I See the Light",
    description: "Colorist",
    content:
      "Created a stylized color grade as the colorist to evoke a sunset for this Noteworthy music video.",
    imageUrl: iSeeTheLightImage,
    link: "https://www.youtube.com/watch?v=BsQ6K0yJpkY",
    buttonLabel: "Watch Online",
  },
  {
    title: "Still",
    description: "Colorist",
    content:
      "Created a warm, modern filmic look as the colorist for this award-winning short film about a man who ventures into the desert to photograph Damascus Arch for his terminally ill girlfriend.",
    imageUrl: stillImage,
    link: "https://letterboxd.com/film/still-3/crew/",
    buttonLabel: "View on Letterboxd",
  },
  {
    title: "Bethesda",
    description: "Colorist",
    content:
      "Created a gritty, modern look as the colorist for this period-piece about a grandfather searching for meaning after the death of his grandson.",
    imageUrl: bethesdaImage,
    link: "https://youtu.be/WH_fO6aKOPI?si=tLX7yXHbdXFSn2g4",
    buttonLabel: "Watch Online",
  },
  {
    title: "The Piece Maker S1 E7",
    description: "Assistant Colorist",
    content:
      "Colorist for Season 1 Episode 7, Miami: Where Time Stands Still; assisted with conform on other episodes.",
    imageUrl: pieceMakerImage,
    link: "https://www.imdb.com/title/tt27717686/",
    buttonLabel: "View on IMDB",
  },
  {
    title: "Thank God I Do",
    description: "Colorist",
    content:
      "Created a warm color grade with an exciting pop of green for this Noteworthy music video.",
    imageUrl: thankGodIDoImage,
    link: "https://youtu.be/2CjrJuA7qmo?si=JSy4daniruU04Vm6",
    buttonLabel: "Watch Online",
  },
  {
    title: "Cryo",
    description: "VFX Artist",
    content: "Performed complex VFX paint-outs on a variety of shots.",
    imageUrl: cryoImage,
    link: "https://www.imdb.com/title/tt8814500/",
    buttonLabel: "View on IMDB",
  },
];

interface AppProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

function App({ isDarkMode, toggleDarkMode }: AppProps) {
  return (
    <Router>
      <div className={isDarkMode ? "dark" : ""}>
        <div className="justify-end flex items-center space-x-2 pt-2 mb-5 mr-5">
          <Switch
            id="dark-mode"
            checked={isDarkMode}
            onCheckedChange={toggleDarkMode}
          />
          <Label
            htmlFor="dark-mode"
            className="dark:text-slate-300 text-slate-700"
          >
            Dark Mode
          </Label>
        </div>
        <div className="md:mx-28">
          <div className="chat chat-start mx-5 md:mx-10">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Beau Wright Profile Picture"
                  src={beauProfileImage2}
                />
              </div>
            </div>
            <div className="chat-bubble text-slate-100 bg-blue-500 text-2xl md:text-4xl font-semibold">
              👋 Hi, I'm Beau Wright
            </div>
          </div>
          <h2 className="text-2xl font-medium m-5 md:m-10 text-slate-500 dark:text-slate-300">
            Colorist located in Provo, UT
          </h2>
        </div>
        <div className="m-5">
          <Separator />
        </div>
        <Carousel
          opts={{
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
          className="mx-12 md:mx-60"
        >
          <h2 className="text-2xl font-medium my-5 dark:text-slate-200 text-slate-800">
            Top 10 Projects
          </h2>
          <CarouselContent className="-ml-4">
            {projects.map((project, index) => (
              <CarouselItem key={index} className="pl-4">
                <ProjectCard {...project} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="m-2" />
          <CarouselNext className="m-2" />
        </Carousel>
        <div className="m-5">
          <Separator />
        </div>
        <div className="container md:mx-60 mt-5">
          <Accordion type="single" collapsible className="">
            <AccordionItem value="About">
              <AccordionTrigger>
                <p className="text-xl font-medium dark:text-slate-200 text-slate-800">
                  About Me
                </p>
              </AccordionTrigger>
              <AccordionContent>
                <Avatar>
                  <AvatarImage
                    alt="Beau Wright Profile Picture"
                    src={beauProfileImage1}
                    className="rounded-lg object-contain md:h-40 h-28"
                  />
                  <AvatarFallback>BW</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-medium text-slate-700 dark:text-slate-300 py-2">
                  Experienced working on
                </h3>
                <ul className="list-inside font-medium text-slate-700 dark:text-slate-300">
                  <li>Advertisements</li>
                  <li>Broadcast TV shows</li>
                  <li>Reality TV</li>
                  <li>Dramas</li>
                  <li>Short films</li>
                  <li>Feature films</li>
                </ul>
                <p className="font-small text-slate-700 dark:text-slate-300 py-4 pr-10">
                  I believe color grading is both a science and an art. My
                  approach to color grading is technically rigorous while
                  leaving room for creativity, ensuring your vision is achieved.
                  I use a color-accurate monitor and advanced tools to ensure
                  precision in every project. The result is a blend of technical
                  excellence and creative flair in every color grade.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="Demo Reel">
              <AccordionTrigger>
                <p className="text-xl font-medium dark:text-slate-200 text-slate-800">
                  Demo Reel
                </p>
              </AccordionTrigger>
              <AccordionContent>
                <a
                  href="https://drive.google.com/file/d/16AYqMPys3hxnQAn-A7Kwnobea1ndyYay/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={oliviaRodrigoImage}
                    alt="Beau Wright 2024 Demo Reel"
                    className="object-contain h-40 my-5 rounded-md"
                  />
                  <Button>
                    <a
                      href="https://drive.google.com/file/d/16AYqMPys3hxnQAn-A7Kwnobea1ndyYay/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Watch Demo Reel
                    </a>
                  </Button>
                </a>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="Rates">
              <AccordionTrigger>
                <p className="text-xl font-medium dark:text-slate-200 text-slate-800">
                  What Are Your Rates?
                </p>
              </AccordionTrigger>
              <AccordionContent>
                <p className="font-small text-slate-700 dark:text-slate-300">
                  If you need an hourly rate, I charge $75/hr. However, I prefer
                  to negotiate a fixed rate per project that meets your needs.
                  Please contact me at{" "}
                  <a href="mailto:&#098;&#101;&#097;&#117;&#049;&#119;&#114;&#105;&#103;&#104;&#116;+&#099;&#111;&#108;&#111;&#114;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;">
                    &#098;&#101;&#097;&#117;&#049;&#119;&#114;&#105;&#103;&#104;&#116;+&#099;&#111;&#108;&#111;&#114;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;
                  </a>
                  to get a quote for your project. I look forward to hearing
                  from you!
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </Router>
  );
}

export default App;
