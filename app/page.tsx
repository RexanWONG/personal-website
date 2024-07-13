'use client'

import React from 'react'
import Image from 'next/image';
import { GlobeIcon, MailIcon } from "lucide-react";
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Section } from '@/components/ui/section';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Badge } from '@/components/ui/badge';

import { RESUME_DATA } from "@/data/resume-data";
import { CommandMenu } from '@/components/command-menu';

const sections = [
  { title: 'Awards', id: 'awards' },
  { title: 'Education', id: 'education' },
  { title: 'Work Experience', id: 'work-experience' },
];

const page = () => {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-6">

        <div className="flex items-center justify-between">
          <div className="flex-1 space-y-1.5">
            <h1 className="text-2xl font-bold">{RESUME_DATA.name}</h1>
            {/* <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground">
              {RESUME_DATA.about} 
            </p> */}
            <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
              <a
                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                href={RESUME_DATA.locationLink}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <GlobeIcon className="size-3" />
                {RESUME_DATA.location}
              </a>
            </p>
            <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
              {RESUME_DATA.contact.email ? (
                <Button
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={`mailto:${RESUME_DATA.contact.email}`} target="_blank" rel="noopener noreferrer">
                    <MailIcon className="size-4" />
                  </a>
                </Button>
              ) : null}
              {RESUME_DATA.contact.social.map((social) => (
                <Button
                  key={social.name}
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={social.url} target="_blank" rel="noopener noreferrer">
                    <social.icon className="size-4" />
                  </a>
                </Button>
              ))}
            </div>
            <div className="hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex">
              {RESUME_DATA.contact.email ? (
                <a href={`mailto:${RESUME_DATA.contact.email}`} target="_blank" rel="noopener noreferrer">
                  <span className="underline">{RESUME_DATA.contact.email}</span>
                </a>
              ) : null}
            </div>
          </div>
          <Avatar className="size-28">
            <AvatarImage alt={RESUME_DATA.name} src={RESUME_DATA.avatarUrl} />
            <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
          </Avatar>
        </div>
        {/* <div className='flex items-center'>
          <NavigationMenu>
            <NavigationMenuList className="space-x-10"> 
              {sections.map((section) => (
                <NavigationMenuItem key={section.id}>
                  <a href={`#${section.id}`} className="text-pretty font-mono text-sm hover:underline">
                    {section.title}
                  </a>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div> */}
        <Section>
          <h2 className="text-xl font-bold">About</h2>
          <p className="text-pretty font-mono text-sm text-muted-foreground">
            {RESUME_DATA.about}
          </p>
        </Section>
        <Section>
          <h2 className="text-xl font-bold">Skills</h2>
          <div className="flex flex-wrap gap-1">  
            {RESUME_DATA.skills.map((skill) => {
              return <Badge key={skill}>{skill}</Badge>;
            })}
          </div>
        </Section>
        <Section id='currentlyBuilding'> 
          <h2 className="text-xl font-bold">Currently Building</h2>
          {RESUME_DATA.currentlyBuilding.map((currentlyBuilding) => {
            return (
              <Card key={currentlyBuilding.name}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                      <a className="hover:underline max-w-[300px]" href={currentlyBuilding.link} target="_blank" rel="noopener noreferrer">
                        {currentlyBuilding.name}
                      </a>
                      
                      <span className="inline-flex gap-x-1">
                        {currentlyBuilding.badges.map((badge) => (
                          <Badge
                            variant="secondary"
                            className="align-middle text-xxs"
                            key={badge}
                          >
                            {badge}
                          </Badge>
                          ))}
                        </span>
                      </h3>
                      <div className="text-sm tabular-nums text-gray-500">
                        {currentlyBuilding.date}
                      </div>
                    </div>

                    <h4 className="font-mono text-sm leading-none max-w-[500px]">
                      {currentlyBuilding.title}
                    </h4>
                </CardHeader>
                <CardContent className="mt-2 text-xs">
                  {currentlyBuilding.description}
                </CardContent>
                <CardFooter>
                  <Button>
                    <a href={currentlyBuilding.projectDetailsLink} target="_blank" rel="noopener noreferrer">
                        View details
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </Section>
        <Section id='awards'> 
          <h2 className="text-xl font-bold">Awards </h2>
          {RESUME_DATA.awards.map((award) => {
            return (
              <Card key={award.name}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                      <a className="hover:underline max-w-[300px]" href={award.link} target="_blank" rel="noopener noreferrer">
                        {award.name}
                      </a>
                      
                      <span className="inline-flex gap-x-1">
                        {award.badges.map((badge) => (
                          <Badge
                            variant="secondary"
                            className="align-middle text-xxs"
                            key={badge}
                          >
                            {badge}
                          </Badge>
                          ))}
                        </span>
                      </h3>
                      <div className="text-sm tabular-nums text-gray-500">
                        {award.date}
                      </div>
                    </div>

                    <h4 className="font-mono text-sm leading-none max-w-[500px]">
                      {award.title}
                    </h4>
                </CardHeader>
                <CardContent className="mt-2 text-xs">
                  {award.description}
                </CardContent>
                <CardFooter>
                  <Button>
                    <a href={award.projectDetailsLink} target="_blank" rel="noopener noreferrer">
                        View details
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </Section>
        <Section id='education'> 
          <h2 className="text-xl font-bold">Education</h2>
          {RESUME_DATA.education.map((education) => {
            return (
              <Card key={education.school}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                      <p>
                        {education.school}
                      </p>
                    </h3>
                    <div className="text-sm tabular-nums text-gray-500">
                      {education.start} - {education.end}
                    </div>
                  </div>

                  <h4 className="font-mono text-sm leading-none max-w-[500px]">
                    {education.degree}
                  </h4>
                </CardHeader>
                <CardContent className="mt-2 text-xs">
                  {education.activities}
                </CardContent>
              </Card>
            );
          })}
        </Section>
        <Section id='work-experience'> 
          <h2 className="text-xl font-bold">Work Experience</h2>
          {RESUME_DATA.work.map((work) => {
            return (
              <Card key={work.company}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                      <a className="hover:underline" href={work.link} target="_blank" rel="noopener noreferrer">
                        {work.company}
                      </a>

                      <span className="inline-flex gap-x-1">
                        {work.badges.map((badge) => (
                          <Badge
                            variant="secondary"
                            className="align-middle text-xs"
                            key={badge}
                          >
                            {badge}
                          </Badge>
                        ))}
                      </span>
                    </h3>
                    <div className="text-sm tabular-nums text-gray-500">
                      {work.start} - {work.end}
                    </div>
                  </div>

                  <h4 className="font-mono text-sm leading-none max-w-[500px]">
                    {work.title}
                  </h4>
                </CardHeader>
                <CardContent className="mt-2 text-xs">
                  {work.description}
                </CardContent>
              </Card>
            );
          })}
        </Section>
        <Section id='data-science'> 
          <h2 className="text-xl font-bold">Data Science</h2>
          {RESUME_DATA.dataScience.map((item) => {
            return (
              <Card key={item.projectName}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                      <a className="hover:underline" href={item.projectLink} target="_blank" rel="noopener noreferrer">
                        {item.projectName}
                      </a>

                      <span className="inline-flex gap-x-1">
                        {item.badges.map((badge) => (
                          <Badge
                            variant="secondary"
                            className="align-middle text-xs"
                            key={badge}
                          >
                            {badge}
                          </Badge>      
                        ))}
                      </span>
                    </h3>
                  </div>
                </CardHeader>
                <CardContent className="text-xs">
                  {item.projectDescription}
                </CardContent>
                <CardFooter>
                  <Button>
                    <a href={item.projectLink} target="_blank" rel="noopener noreferrer">
                        View details
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </Section>
        <Section id='music'> 
          <h2 className="text-xl font-bold">Music</h2>
          {RESUME_DATA.music.map((award) => {
            return (
              <Card key={award.awardName}>
                <CardHeader>
                  <h3 className="font-semibold">{award.awardName}</h3>
                  <div className="text-sm text-gray-500">{award.year}</div>
                </CardHeader>
                <CardContent>
                  {award.description}
                </CardContent>
              </Card>
            );
          })}
        </Section>
      </section>

      <CommandMenu
          links={[
            ...RESUME_DATA.contact.social.map((socialMediaLink) => ({
              url: socialMediaLink.url,
              title: socialMediaLink.name,
            })),
          ]}
      />
    </main>
  )
}

export default page