import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Update the interface to include an optional imageUrl
interface ProjectCardProps {
  title: string;
  description: string;
  content: string;
  link: string;
  buttonLabel: string;
  imageUrl?: string; // Optional image URL
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  content,
  link,
  buttonLabel,
  imageUrl,
}) => (
  <Card>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent className='text-slate-700'>
      {imageUrl && (
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img src={imageUrl} alt={title} className="object-fill h-40 my-5 rounded-md"/>
        </a>
      )}
      {content}
    </CardContent>
    <CardFooter>
      <Button asChild>
        <a href={link} target="_blank" rel="noopener noreferrer">
          {buttonLabel}
        </a>
      </Button>
    </CardFooter>
  </Card>
);

export default ProjectCard;
