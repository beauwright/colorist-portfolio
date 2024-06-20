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
  <Card className='bg-slate-50 dark:bg-slate-900 hover:border-slate-700 dark:hover:border-slate-400'>
    <CardHeader>
      <CardTitle className='dark:text-slate-300 text-slate-700'>{title}</CardTitle>
      <CardDescription className='dark:text-slate-300'>{description}</CardDescription>
    </CardHeader>
    <CardContent className='text-slate-700 dark:text-slate-400'>
      {imageUrl && (
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img src={imageUrl} alt={title} className="object-contain aspect-auto md:h-40 h-28 my-5 rounded-md"/>
        </a>
      )}
      {content}
    </CardContent>
    <CardFooter>
      <Button asChild className='dark:outline'>
        <a href={link} target="_blank" rel="noopener noreferrer">
          {buttonLabel}
        </a>
      </Button>
    </CardFooter>
  </Card>
);

export default ProjectCard;
