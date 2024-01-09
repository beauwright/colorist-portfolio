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

const projects = [
  {
    title: "Thank God I Do",
    description: "Colorist",
    content:
      "Created a warm color grade with an exciting pop of green for this Noteworthy music video.",
    imageUrl: "./src/assets/thank-god-I-do.webp",
    link: "https://youtu.be/2CjrJuA7qmo?si=JSy4daniruU04Vm6",
    buttonLabel: "Watch Online",
  },
  {
    title: "Fear Is Not Welcome",
    description: "Colorist",
    content:
      "Created a warm color grade with an exciting pop of green for this Vocal Point music video.",
    imageUrl: "./src/assets/fear-is-not-welcome.webp",
    link: "https://youtu.be/fw1mBBMl6rI?si=DH-mZlYCzVbrPa-k",
    buttonLabel: "Watch Online",
  },
  {
    title: "I See the Light",
    description: "Colorist",
    content:
      "Created a color grade to evoke a sunset for this Noteworthy music video.",
    imageUrl: "./src/assets/I-see-the-light.webp",
    link: "https://www.youtube.com/watch?v=BsQ6K0yJpkY",
    buttonLabel: "Watch Online",
  },
  {
    title: "deja vu / drivers license / good 4 u",
    description: "Colorist",
    content:
      "Created a vibrant, saturated filmic color grade with for this Noteworthy music video.",
    imageUrl: "./src/assets/olivia-rodrigo.webp",
    link: "https://letterboxd.com/film/still-3/crew/",
    buttonLabel: "Watch Online",
  },
  {
    title: "Still",
    description: "Colorist",
    content:
      "Created a warm, modern filmic look as the colorist for this award-winning short film about a man who ventures into the desert to photograph Damascus Arch for his terminally ill girlfriend.",
    imageUrl: "./src/assets/still.jpg",
    link: "https://letterboxd.com/film/still-3/crew/",
    buttonLabel: "View on Letterboxd",
  },
  {
    title: "Bethesda",
    description: "Colorist",
    content:
      "Created a gritty, modern look for this period-piece about a grandfather searching for meaning after the death of his grandson as the colorist.",
    imageUrl: "./src/assets/bethesda.jpg",
    link: "https://youtu.be/WH_fO6aKOPI?si=tLX7yXHbdXFSn2g4",
    buttonLabel: "Watch Online",
  },
  {
    title: "The Piece Maker S1 E7",
    description: "Assistant Colorist",
    content:
      "Colorist for Season 1 Episode 7, Miami: Where Time Stands Still; assistant colorist on other episodes.",
    imageUrl: "./src/assets/piece-maker.jpg",
    link: "https://www.imdb.com/title/tt27717686/",
    buttonLabel: "View on IMDB",
  },
  {
    title: "Tokyo Cowboy",
    description: "Assistant Colorist",
    content:
      "Created a complex workflow for correcting unwanted image artifacts in the color-grade and assisted in the color grade.",
    imageUrl: "./src/assets/tokyo-cowboy.jpg",
    link: "https://www.imdb.com/title/tt22815732/",
    buttonLabel: "View on IMDB",
  },
  {
    title: "Cryo",
    description: "VFX Artist",
    content: "Complex VFX paint-outs on a variety of shots,",
    imageUrl: "./src/assets/cryo.jpg",
    link: "https://www.imdb.com/title/tt8814500/",
    buttonLabel: "View on IMDB",
  },
];

function App() {
  return (
    <Router>
      <div className="chat chat-start p-5">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Beau Wright Profile Picture"
              src="./src/assets/beau-wright-profile-2.jpg"
            />
          </div>
        </div>
        <div className="chat-bubble text-slate-100 bg-blue-500 text-4xl font-semibold">
          👋 Hi, I'm Beau Wright
        </div>
      </div>
      <h2 className="text-2xl font-medium p-5">Colorist</h2>
      <Separator />
      <h2 className="text-xl font-medium px-4 py-10">Top 10 Projects</h2>
      <Carousel
        opts={{
          loop: "true",
        }}
        className="mx-20"
      >
        <CarouselContent className="-ml-4">
          {projects.map((project, index) => (
            <CarouselItem key={index} className="pl-4">
              <ProjectCard {...project} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <Separator />
      <Accordion type="single" collapsible className="container mx-auto px-4">
        <AccordionItem value="About">
          <AccordionTrigger>
            <p className="text-xl font-medium">About Me</p>
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex items-center gap-4 py-4">
              <Avatar>
                <AvatarImage
                  alt="Beau Wright Profile Picture"
                  src="./src/assets/beau-wright-profile-1.jpg"
                  className="rounded-lg object-contain h-40"
                />
                <AvatarFallback>BW</AvatarFallback>
              </Avatar>
              <h2 className="text-xl font-medium">Beau Wright • Colorist</h2>
            </div>
            <h3 className="text-xl font-medium text-slate-700 py-2">
              Experienced working on
            </h3>
            <ul className="list-inside font-medium text-slate-700">
              <li>Advertisements</li>
              <li>Broadcast TV shows</li>
              <li>Reality TV</li>
              <li>Dramas</li>
              <li>Short films</li>
              <li>Feature films</li>
            </ul>
            <p className="font-small text-slate-700 py-4 pr-10">
              I believe color grading is as much of a science as it is an art
              and I take a rigorous technical approach to my color grading while
              also leaving room to create exciting creative styles. I color
              grade on a color accurate monitor and use a variety of tools to
              ensure my color grading environment leads to accurate, stunning
              colors.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="Demo Reel">
          <AccordionTrigger>
            <p className="text-xl font-medium">Demo Reel</p>
          </AccordionTrigger>
          <AccordionContent>
            <a
              href="https://byu.box.com/s/lfvq8ql6h7zafit26yl2g2uq6qy6hyhr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="./src/assets/olivia-rodrigo.webp"
                alt="Beau Wright 2021 Demo Reel"
                className="object-fill h-40 my-5 rounded-md"
              />
              <Button>
                <a
                  href="https://byu.box.com/s/lfvq8ql6h7zafit26yl2g2uq6qy6hyhr"
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
            <p className="text-xl font-medium">What Are Your Rates?</p>
          </AccordionTrigger>
          <AccordionContent>
            <p className="font-small text-slate-700">
              If you need an hourly rate, I charge $75/hr. However, I prefer to
              negotiate a fixed rate per project that needs your needs. Please
              contact me to get a quote for your project. I look forward to
              hearing from you!
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Router>
  );
}

export default App;
