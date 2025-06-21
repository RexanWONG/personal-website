'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image';
import '@vidstack/react/player/styles/base.css';
import '@vidstack/react/player/styles/plyr/theme.css';
import { MediaPlayer, MediaProvider } from '@vidstack/react';
import { PlyrLayout, plyrLayoutIcons } from '@vidstack/react/player/layouts/plyr';
import { GlobeIcon, MailIcon } from "lucide-react";
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Section } from '@/components/ui/section';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

import { RESUME_DATA } from "@/data/resume-data";
import { CommandMenu } from '@/components/command-menu';
import { RexanWong } from '@/public';
import ScrambleIn, { ScrambleInHandle } from '@/fancy/components/text/scramble-in';

const Page = () => {
  // Create refs for each section that will have the scramble effect
  const nameRef = useRef<ScrambleInHandle>(null);
  const aboutRef = useRef<ScrambleInHandle>(null);
  const locationRef = useRef<ScrambleInHandle>(null);
  const sectionHeadingRefs = useRef<(ScrambleInHandle | null)[]>([]);
  const aboutBulletRefs = useRef<(ScrambleInHandle | null)[]>([]);
  
  // Refs for cards and their content
  const currentlyBuildingRefs = useRef<{[key: string]: ScrambleInHandle | null}>({});
  const awardRefs = useRef<{[key: string]: ScrambleInHandle | null}>({});
  const educationRefs = useRef<{[key: string]: ScrambleInHandle | null}>({});
  const workRefs = useRef<{[key: string]: ScrambleInHandle | null}>({});
  const socialRefs = useRef<{[key: string]: ScrambleInHandle | null}>({});
  
  // Animation has been triggered flag
  const animationTriggered = useRef(false);
  
  const triggerAnimations = () => {
    if (animationTriggered.current) return;
    animationTriggered.current = true;
    
    // Start all animations at the same time
    const startAllRefs = () => {
      // Start main elements
      nameRef.current?.start();
      locationRef.current?.start();
      aboutRef.current?.start();
      
      // Start about bullet points
      aboutBulletRefs.current.forEach(ref => ref?.start());
      
      // Start section headings
      sectionHeadingRefs.current.forEach(ref => ref?.start());
      
      // Start all card content
      Object.values(currentlyBuildingRefs.current).forEach(ref => ref?.start());
      Object.values(awardRefs.current).forEach(ref => ref?.start());
      Object.values(educationRefs.current).forEach(ref => ref?.start());
      Object.values(workRefs.current).forEach(ref => ref?.start());
      Object.values(socialRefs.current).forEach(ref => ref?.start());
    };
    
    // Start all animations with a small initial delay
    setTimeout(startAllRefs, 300);
  };
  
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    document.body.appendChild(script);
    
    // Trigger animations once on page load
    setTimeout(triggerAnimations, 500);
    
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16 font-normal tracking-tight">
      <section className="mx-auto w-full max-w-3xl space-y-8 print:space-y-6">

        <div className="flex items-center justify-between">
          <div className="flex-1 space-y-1.5">
            <h1 className='text-2xl font-bold'>
              <ScrambleIn 
                ref={nameRef}
                text={RESUME_DATA.name}
                scrambleSpeed={30}
                scrambledLetterCount={3}
                autoStart={false}
              />
            </h1>
            <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
              <a
                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                href={RESUME_DATA.locationLink}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <GlobeIcon className="size-3" />
                <ScrambleIn 
                  ref={locationRef}
                  text={RESUME_DATA.location}
                  scrambleSpeed={25}
                  scrambledLetterCount={3}
                  autoStart={false}
                />
              </a>
            </p>
            
            <div className="hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex">
              {RESUME_DATA.contact.email ? (
                <a href={`mailto:${RESUME_DATA.contact.email}`} target="_blank" rel="noopener noreferrer">
                  <span className="underline">{RESUME_DATA.contact.email}</span>
                </a>
              ) : null}
            </div>
          </div>
          <div className="relative group">
            <Avatar className="size-28">
              <AvatarImage
                alt={RESUME_DATA.name}
                src={RexanWong.src}
                className="transition-opacity duration-300 ease-in-out group-hover:opacity-0"
              />
              <AvatarImage
                alt={RESUME_DATA.name}
                src={RESUME_DATA.avatarUrl2}
                className="absolute inset-0 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100"
              />
              <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
            </Avatar>
          </div>
        </div>
        <Section>
          <p className='text-sm font-semibold'>
            <ScrambleIn 
              ref={aboutRef}
              text={RESUME_DATA.about}
              scrambleSpeed={25}
              scrambledLetterCount={5}
              autoStart={false}
            />
          </p>

          <div className='mt-2'>
            {RESUME_DATA.aboutBulletPoints.map((item, index) => (
              <p className='text-sm mb-1' key={index}>
                {'>'} <ScrambleIn 
                  ref={(el) => aboutBulletRefs.current[index] = el}
                  text={item}
                  scrambleSpeed={25}
                  scrambledLetterCount={4}
                  autoStart={false}
                />
              </p>
            ))}
          </div>
          
          <div className="flex flex-col gap-4 mt-6 w-full print:hidden">
            {RESUME_DATA.contact.email ? (
              <Card className="w-full">
                <a href={`mailto:${RESUME_DATA.contact.email}`} className="flex items-center p-4" target="_blank" rel="noopener noreferrer">
                  <MailIcon className="size-6 mr-4" />
                  <div className="flex-1">
                    <h3 className="font-semibold">
                      <ScrambleIn 
                        ref={(el) => socialRefs.current['email'] = el}
                        text="Email"
                        scrambleSpeed={25}
                        scrambledLetterCount={2}
                        autoStart={false}
                      />
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      <ScrambleIn 
                        ref={(el) => socialRefs.current['email-address'] = el}
                        text={RESUME_DATA.contact.email || ""}
                        scrambleSpeed={25}
                        scrambledLetterCount={3}
                        autoStart={false}
                      />
                    </p>
                  </div>
                  <div className="ml-auto">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </a>
              </Card>
            ) : null}
            
            {RESUME_DATA.contact.social.map((social, index) => (
              <Card key={social.name} className="w-full text-sm">
                <a href={social.url} className="flex items-center p-4" target="_blank" rel="noopener noreferrer">
                  {social.iconEmoji ? (
                    <span className="text-2xl mr-4">{social.iconEmoji}</span>
                  ) : (
                    <social.icon className="size-6 mr-4" />
                  )}
                  <div className="flex-1">
                    <h3 className="font-semibold">
                      <ScrambleIn 
                        ref={(el) => socialRefs.current[`social-name-${index}`] = el}
                        text={social.name}
                        scrambleSpeed={25}
                        scrambledLetterCount={3}
                        autoStart={false}
                      />
                    </h3>
                    <p className="text-sm">
                      <ScrambleIn 
                        ref={(el) => socialRefs.current[`social-desc-${index}`] = el}
                        text={social.description}
                        scrambleSpeed={25}
                        scrambledLetterCount={4}
                        autoStart={false}
                      />
                    </p>
                  </div>
                  <div className="ml-auto">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </a>
              </Card>
            ))}
          </div>
        </Section>
        <Section id='currentlyBuilding'> 
          <h2 className="text-xl font-bold">
            <ScrambleIn 
              ref={(el) => sectionHeadingRefs.current[0] = el}
              text="Currently building"
              scrambleSpeed={30}
              scrambledLetterCount={3}
              autoStart={false}
            />
          </h2>
          {RESUME_DATA.currentlyBuilding.map((currentlyBuilding, idx) => {
            return (
              <Card key={currentlyBuilding.name}>
                <CardHeader>
                  <div className="flex items-center gap-x-3">
                    {currentlyBuilding.logo && (
                      <Image src={currentlyBuilding.logo} alt={`${currentlyBuilding.name} logo`} className="w-10 h-10 rounded-lg object-contain" />
                    )}
                    <div className='flex-grow'>
                      <div className="flex items-center justify-between gap-x-2 text-base">
                        <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                          <a className="hover:underline max-w-[300px]" href={currentlyBuilding.link} target="_blank" rel="noopener noreferrer">
                            <ScrambleIn 
                              ref={(el) => currentlyBuildingRefs.current[`name-${idx}`] = el}
                              text={currentlyBuilding.name}
                              scrambleSpeed={25}
                              scrambledLetterCount={3}
                              autoStart={false}
                            />
                          </a>
                        </h3>
                        <div className="text-sm tabular-nums text-gray-500">
                          <ScrambleIn 
                            ref={(el) => currentlyBuildingRefs.current[`date-${idx}`] = el}
                            text={currentlyBuilding.date}
                            scrambleSpeed={25}
                            scrambledLetterCount={3}
                            autoStart={false}
                          />
                        </div>
                      </div>

                      <h4 className="font-mono text-sm leading-none max-w-[500px]">
                        <ScrambleIn 
                          ref={(el) => currentlyBuildingRefs.current[`title-${idx}`] = el}
                          text={currentlyBuilding.title}
                          scrambleSpeed={25}
                          scrambledLetterCount={4}
                          autoStart={false}
                        />
                      </h4>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col mt-2 gap-4">
                  <p className='text-xs'>
                    <ScrambleIn 
                      ref={(el) => currentlyBuildingRefs.current[`desc-${idx}`] = el}
                      text={currentlyBuilding.description}
                      scrambleSpeed={20}
                      scrambledLetterCount={5}
                      autoStart={false}
                    />
                  </p>
                  {currentlyBuilding.videoLink && (
                    <MediaPlayer title={currentlyBuilding.name} src={currentlyBuilding.videoLink}>
                      <MediaProvider />
                      <PlyrLayout icons={plyrLayoutIcons}/>
                    </MediaPlayer>
                  )}
                  <span className="inline-flex gap-x-1">
                    {currentlyBuilding.badges.map((badge, badgeIdx) => (
                      <Badge
                        variant="secondary"
                        className="align-middle text-xxs"
                        key={badge}
                      >
                        <ScrambleIn 
                          ref={(el) => currentlyBuildingRefs.current[`badge-${idx}-${badgeIdx}`] = el}
                          text={badge}
                          scrambleSpeed={20}
                          scrambledLetterCount={2}
                          autoStart={false}
                        />
                      </Badge>
                    ))}
                  </span>
                </CardContent>

                <CardFooter>
                  <Button>
                    <a href={currentlyBuilding.projectDetailsLink} target="_blank" rel="noopener noreferrer">
                      <ScrambleIn 
                        ref={(el) => currentlyBuildingRefs.current[`view-${idx}`] = el}
                        text="View details"
                        scrambleSpeed={25}
                        scrambledLetterCount={3}
                        autoStart={false}
                      />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </Section>
        <Section id='awards'> 
          <h2 className="text-xl font-bold">
            <ScrambleIn 
              ref={(el) => sectionHeadingRefs.current[1] = el}
              text="Awards"
              scrambleSpeed={30}
              scrambledLetterCount={3}
              autoStart={false}
            />
          </h2>
          {RESUME_DATA.awards.map((award, idx) => {
            return (
              <Card key={award.name} className="w-full mb-4">
                <CardHeader>
                  <div className="flex items-center gap-x-3">
                    {award.logo && (
                      <Image src={award.logo} alt={`${award.name} logo`} className="w-12 h-12 rounded-lg object-contain" />
                    )}
                    <div className="flex-grow">
                      <div className="flex items-center justify-between gap-x-2 text-base">
                        <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                          <a className="hover:underline max-w-[300px]" href={award.link} target="_blank" rel="noopener noreferrer">
                            <ScrambleIn 
                              ref={(el) => awardRefs.current[`name-${idx}`] = el}
                              text={award.name}
                              scrambleSpeed={25}
                              scrambledLetterCount={3}
                              autoStart={false}
                            />
                          </a>
                        </h3>
                        <div className="text-sm tabular-nums text-gray-500">
                          <ScrambleIn 
                            ref={(el) => awardRefs.current[`date-${idx}`] = el}
                            text={award.date}
                            scrambleSpeed={25}
                            scrambledLetterCount={3}
                            autoStart={false}
                          />
                        </div>
                      </div>
                      <h4 className="font-mono text-sm leading-none max-w-[500px] mt-1">
                        <ScrambleIn 
                          ref={(el) => awardRefs.current[`title-${idx}`] = el}
                          text={award.title}
                          scrambleSpeed={25}
                          scrambledLetterCount={4}
                          autoStart={false}
                        />
                      </h4>
                    </div>
                  </div>
                </CardHeader>
        
                <CardContent className="flex flex-col mt-2 gap-4">
                  <p className='text-xs'>
                    <ScrambleIn 
                      ref={(el) => awardRefs.current[`desc-${idx}`] = el}
                      text={award.description}
                      scrambleSpeed={20}
                      scrambledLetterCount={5}
                      autoStart={false}
                    />
                  </p>
                  {award.videoLink && (
                    <MediaPlayer title={award.name} src={award.videoLink}>
                      <MediaProvider />
                      <PlyrLayout icons={plyrLayoutIcons}/>
                    </MediaPlayer>
                  )}
                  <span className="inline-flex gap-x-1">
                    {award.badges.map((badge, badgeIdx) => (
                      <Badge
                        variant="secondary"
                        className="align-middle text-xxs"
                        key={badge}
                      >
                        <ScrambleIn 
                          ref={(el) => awardRefs.current[`badge-${idx}-${badgeIdx}`] = el}
                          text={badge}
                          scrambleSpeed={20}
                          scrambledLetterCount={2}
                          autoStart={false}
                        />
                      </Badge>
                    ))}
                  </span>
                </CardContent>
                
                <CardFooter>
                  <Button>
                    <a href={award.projectDetailsLink} target="_blank" rel="noopener noreferrer">
                      <ScrambleIn 
                        ref={(el) => awardRefs.current[`view-${idx}`] = el}
                        text="View details"
                        scrambleSpeed={25}
                        scrambledLetterCount={3}
                        autoStart={false}
                      />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </Section> 
        <Section id='work-experience'> 
          <h2 className="text-xl font-bold">
            <ScrambleIn 
              ref={(el) => sectionHeadingRefs.current[3] = el}
              text="Work Experience"
              scrambleSpeed={30}
              scrambledLetterCount={3}
              autoStart={false}
            />
          </h2>
          {RESUME_DATA.work.map((work, idx) => {
            return (
              <Card key={work.company} className="w-full mb-4">
                <CardHeader>
                  <div className="flex items-center gap-x-3">
                    {work.logo && (
                      <Image src={work.logo} alt={`${work.company} logo`} className="w-12 h-12 rounded-lg object-contain" />
                    )}
                    <div className="flex-grow">
                      <div className="flex items-center justify-between gap-x-2 text-base">
                        <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                          <a className="hover:underline" href={work.link} target="_blank" rel="noopener noreferrer">
                            <ScrambleIn 
                              ref={(el) => workRefs.current[`company-${idx}`] = el}
                              text={work.company}
                              scrambleSpeed={25}
                              scrambledLetterCount={3}
                              autoStart={false}
                            />
                          </a>
                        </h3>
                        <div className="text-sm tabular-nums text-gray-500">
                          <ScrambleIn 
                            ref={(el) => workRefs.current[`date-${idx}`] = el}
                            text={`${work.start} - ${work.end}`}
                            scrambleSpeed={25}
                            scrambledLetterCount={3}
                            autoStart={false}
                          />
                        </div>
                      </div>
                      <h4 className="font-mono text-sm leading-none max-w-[500px] mt-1">
                        <ScrambleIn 
                          ref={(el) => workRefs.current[`title-${idx}`] = el}
                          text={work.title}
                          scrambleSpeed={25}
                          scrambledLetterCount={4}
                          autoStart={false}
                        />
                      </h4>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="mt-2 text-xs">
                  <ScrambleIn 
                    ref={(el) => workRefs.current[`desc-${idx}`] = el}
                    text={work.description}
                    scrambleSpeed={20}
                    scrambledLetterCount={5}
                    autoStart={false}
                  />
                  {/* <span className="inline-flex gap-x-1 mt-4">
                    {work.badges.map((badge, badgeIdx) => (
                      <Badge
                        variant="secondary"
                        className="align-middle text-xxs"
                        key={badge}
                      >
                        <ScrambleIn 
                          ref={(el) => workRefs.current[`badge-${idx}-${badgeIdx}`] = el}
                          text={badge}
                          scrambleSpeed={20}
                          scrambledLetterCount={2}
                          autoStart={false}
                        />
                      </Badge>
                    ))}
                  </span> */}
                </CardContent>
              </Card>
            );
          })}
        </Section>
        <Section id='education'> 
          <h2 className="text-xl font-bold">
            <ScrambleIn 
              ref={(el) => sectionHeadingRefs.current[2] = el}
              text="Education"
              scrambleSpeed={30}
              scrambledLetterCount={3}
              autoStart={false}
            />
          </h2>
          {RESUME_DATA.education.map((education, idx) => {
            return (
              <Card key={education.school}>
                <CardHeader>
                  <div className="flex items-center gap-x-3">
                    {education.logo && (
                      <Image src={education.logo} alt={`${education.school} logo`} className="w-12 h-12 rounded-lg object-contain" />
                    )}
                    <div className='flex-grow'>
                      <div className="flex items-center justify-between gap-x-2 text-base">
                        <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                          <p>
                            <ScrambleIn 
                              ref={(el) => educationRefs.current[`school-${idx}`] = el}
                              text={education.school}
                              scrambleSpeed={25}
                              scrambledLetterCount={3}
                              autoStart={false}
                            />
                          </p>
                        </h3>
                        <div className="text-sm tabular-nums text-gray-500">
                          <ScrambleIn 
                            ref={(el) => educationRefs.current[`date-${idx}`] = el}
                            text={`${education.start} - ${education.end}`}
                            scrambleSpeed={25}
                            scrambledLetterCount={3}
                            autoStart={false}
                          />
                        </div>
                      </div>

                      <h4 className="font-mono text-sm leading-none max-w-[500px]">
                        <ScrambleIn 
                          ref={(el) => educationRefs.current[`degree-${idx}`] = el}
                          text={education.degree}
                          scrambleSpeed={25}
                          scrambledLetterCount={4}
                          autoStart={false}
                        />
                      </h4>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="mt-2 text-xs">
                  <ScrambleIn 
                    ref={(el) => educationRefs.current[`activities-${idx}`] = el}
                    text={education.activities}
                    scrambleSpeed={20}
                    scrambledLetterCount={5}
                    autoStart={false}
                  />
                </CardContent>
              </Card>
            );
          })}
        </Section>
       
        {/* <Section id='music'> 
          <h2 className="text-xl font-bold">
            <ScrambleIn 
              ref={(el) => sectionHeadingRefs.current[4] = el}
              text="Music"
              scrambleSpeed={30}
              scrambledLetterCount={3}
              autoStart={false}
            />
          </h2>
          {RESUME_DATA.music.map((award) => {
            return (
              <Card key={award.awardName} className='text-sm'>
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
        </Section> */}
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

export default Page