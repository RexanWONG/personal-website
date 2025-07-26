'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image';
import '@vidstack/react/player/styles/base.css';
import '@vidstack/react/player/styles/plyr/theme.css';
import { MediaPlayer, MediaProvider } from '@vidstack/react';
import { PlyrLayout, plyrLayoutIcons } from '@vidstack/react/player/layouts/plyr';
import { GlobeIcon, MailIcon, ChevronDown, SquareArrowOutUpRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Section } from '@/components/ui/section';
import { Card, CardContent } from '@/components/ui/card';

import { RESUME_DATA } from "@/data/resume-data";
import { RexanWong } from '@/public';
import ScrambleIn, { ScrambleInHandle } from '@/components/fancy/components/text/scramble-in';
import ScrambleHover from '@/components/fancy/components/text/scramble-hover';

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
  
  // State for tracking expanded portfolio items
  const [expandedPortfolioItems, setExpandedPortfolioItems] = useState<Set<string>>(new Set());
  const [expandedAwardItems, setExpandedAwardItems] = useState<Set<string>>(new Set());
  const [expandedWorkItems, setExpandedWorkItems] = useState<Set<string>>(new Set());
  
  // State for tracking ScrambleIn completion
  const [portfolioScrambleComplete, setPortfolioScrambleComplete] = useState<Set<string>>(new Set());
  const [awardScrambleComplete, setAwardScrambleComplete] = useState<Set<string>>(new Set());
  const [workScrambleComplete, setWorkScrambleComplete] = useState<Set<string>>(new Set());
  
  const togglePortfolioItem = (itemName: string) => {
    setExpandedPortfolioItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(itemName)) {
        newSet.delete(itemName);
      } else {
        newSet.add(itemName);
      }
      return newSet;
    });
  };

  const toggleAwardItem = (itemName: string) => {
    setExpandedAwardItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(itemName)) {
        newSet.delete(itemName);
      } else {
        newSet.add(itemName);
      }
      return newSet;
    });
  };

  const toggleWorkItem = (itemName: string) => {
    setExpandedWorkItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(itemName)) {
        newSet.delete(itemName);
      } else {
        newSet.add(itemName);
      }
      return newSet;
    });
  };
  
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

  const handlePortfolioScrambleComplete = (itemName: string) => {
    setPortfolioScrambleComplete(prev => {
      const newSet = new Set(prev);
      newSet.add(itemName);
      return newSet;
    });
  };

  const handleAwardScrambleComplete = (itemName: string) => {
    setAwardScrambleComplete(prev => {
      const newSet = new Set(prev);
      newSet.add(itemName);
      return newSet;
    });
  };

  const handleWorkScrambleComplete = (itemName: string) => {
    setWorkScrambleComplete(prev => {
      const newSet = new Set(prev);
      newSet.add(itemName);
      return newSet;
    });
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
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16 font-normal tracking-tight lowercase">
      <section className="mx-auto w-full max-w-3xl space-y-8 print:space-y-6">

        <div className="flex items-center justify-between">
          <div className="flex-1 space-y-1.5">
            <h1 className='text-4xl md:text-5xl font-extrabold lowercase tracking-tight'>
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
          <p className='text-lg md:text-xl font-semibold'>
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
              <p className='text-[16px] md:text-lg mb-1' key={index}>
                {'-'} <ScrambleIn 
                  ref={(el) => aboutBulletRefs.current[index] = el}
                  text={item}
                  scrambleSpeed={25}
                  scrambledLetterCount={4}
                  autoStart={false}
                />
              </p>
            ))}
          </div>
          
          <div className="flex flex-col gap-4 mt-3 w-full print:hidden">
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
            
            <div className='flex flex-row flex-wrap items-start justify-start gap-2 max-w-full'>
              {RESUME_DATA.contact.social.map((social, index) => (
                <Card key={social.name} className="w-fit text-sm min-w-0 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border border-gray-100 bg-white/80 backdrop-blur-sm">
                  <a href={social.url} className="flex items-center justify-center p-3 group" target="_blank" rel="noopener noreferrer">
                    {social.iconEmoji ? (
                      <span className="text-[20px] flex-shrink-0 group-hover:scale-110 transition-transform duration-200">{social.iconEmoji}</span>
                    ) : (
                      <social.icon className="size-[20px] flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                    )}
                    <div className="flex-1 text-left min-w-0">
                      <h3 className='font-semibold'>
                        {social.handle && (
                          <ScrambleIn 
                            ref={(el) => socialRefs.current[`social-name-${index}`] = el}
                            text={social.handle}
                            scrambleSpeed={25}
                            scrambledLetterCount={3}
                            autoStart={false}
                            className='ml-2 group-hover:text-gray-700 transition-colors duration-200'
                          />
                        )}
                      </h3>
                    </div>
                  </a>
                </Card>
              ))}
            </div>
          </div>
        </Section>

        <Section id='currentlyBuilding'> 
          <h2 className="text-3xl font-bold tracking-tight">
            <ScrambleIn 
              ref={(el) => sectionHeadingRefs.current[0] = el}
              text="🥷"
              scrambleSpeed={30}
              scrambledLetterCount={3}
              autoStart={false}
            />
          </h2>
          {RESUME_DATA.currentlyBuilding.map((currentlyBuilding, idx) => {
            const isExpanded = expandedPortfolioItems.has(currentlyBuilding.name);
            return (
              <div key={currentlyBuilding.name}>
                <div className='flex flex-row w-full items-center justify-between'>
                  {/* Main clickable area for external link */}
                  <a
                    href={currentlyBuilding.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center border-b-2 border-transparent hover:border-[#f0ecec] group"
                  >
                    {currentlyBuilding.logo && (
                        <Image src={currentlyBuilding.logo} alt={`${currentlyBuilding.name} logo`} className="w-7 h-7 rounded-lg object-contain mr-2" />
                    )}
                    <div className="flex w-full items-center justify-between mr-2.5">
                      <div className="flex items-center gap-2">
                        <h1 className='text-[16px] md:text-xl'>
                          {portfolioScrambleComplete.has(currentlyBuilding.name) ? (
                            <ScrambleHover
                              text={currentlyBuilding.name}
                              scrambleSpeed={25}
                              maxIterations={20}
                            />
                          ) : (
                            <ScrambleIn 
                              ref={(el) => currentlyBuildingRefs.current[`name-${idx}`] = el}
                              text={currentlyBuilding.name}
                              scrambleSpeed={25}
                              scrambledLetterCount={3}
                              autoStart={false}
                              onComplete={() => handlePortfolioScrambleComplete(currentlyBuilding.name)}
                            />
                          )}
                        </h1>
                      </div>
                      <div className='flex flex-row items-center gap-4'>
                        <SquareArrowOutUpRight 
                          strokeWidth={1.3}
                          className="w-6 h-6 opacity-0 group-hover:opacity-100" 
                        />
                        <span className="text-[16px] md:text-xl">
                          {currentlyBuilding.year}
                        </span>
                      </div>
                    </div>
                  </a>
                  
                  {/* Separate clickable area for accordion toggle */}
                  <button
                    className="hover:bg-gray-50 rounded"
                    onClick={() => togglePortfolioItem(currentlyBuilding.name)}
                  >
                    <ChevronDown
                      strokeWidth={1}
                      className={`h-8 w-8 transition-transform duration-200 ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                </div>
                
                <div className={`overflow-hidden transition-all duration-300 ease-in-out w-full ${
                  isExpanded ? 'max-h-[2000px] opacity-100 pt-4' : 'max-h-0 opacity-0'
                }`}>
                    <Card className="border-0 shadow-none p-0">
                      <CardContent className="flex flex-col gap-4 p-0">
                        <p className='text-xs'>
                          {currentlyBuilding.description}
                        </p>
                        {currentlyBuilding.videoLink && (
                          <MediaPlayer title={currentlyBuilding.name} src={currentlyBuilding.videoLink}>
                            <MediaProvider />
                            <PlyrLayout icons={plyrLayoutIcons}/>
                          </MediaPlayer>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                </div>
            );
          })}
        </Section>
        <Section id='awards'> 
          <h2 className="text-3xl font-bold tracking-tight">
            <ScrambleIn 
              ref={(el) => sectionHeadingRefs.current[1] = el}
              text="🏅"
              scrambleSpeed={30}
              scrambledLetterCount={3}
              autoStart={false}
            />
          </h2>
          {RESUME_DATA.awards.map((award, idx) => {
            const isExpanded = expandedAwardItems.has(award.name);
            return (
              <div key={award.name}>
                <div className='flex flex-row w-full items-center justify-between border-b-2 border-transparent hover:border-[#f0ecec]'>
                  {award.logo && (
                      <Image src={award.logo} alt={`${award.name} logo`} className="w-7 h-7 rounded-lg object-contain mr-2" />
                  )}
                  <button
                    className="flex w-full items-center justify-between text-left"
                    onClick={() => toggleAwardItem(award.name)}
                  >
                    <h1 className='text-[16px] md:text-xl lowercase'>
                      {awardScrambleComplete.has(award.name) ? (
                        <ScrambleHover
                          text={award.name}
                          scrambleSpeed={25}
                          maxIterations={20}
                        />
                      ) : (
                        <ScrambleIn 
                          ref={(el) => awardRefs.current[`name-${idx}`] = el}
                          text={award.name}
                          scrambleSpeed={25}
                          scrambledLetterCount={3}
                          autoStart={false}
                          onComplete={() => handleAwardScrambleComplete(award.name)}
                        />
                      )}
                    </h1>
                    <div className="flex flex-row items-center gap-2">
                      <span className="text-[16px] md:text-xl">
                        {award.year}
                      </span>
                      <ChevronDown
                        strokeWidth={1}
                        className={`h-8 w-8 transition-transform duration-200 ${
                          isExpanded ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                  </button>
                </div>
                
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isExpanded ? 'max-h-[2000px] opacity-100 pt-4' : 'max-h-0 opacity-0'
                }`}>
                  <Card className="border-0 shadow-none p-0">
                    <CardContent className="flex flex-col gap-4 p-0">
                      <p className='text-xs'>
                        {award.description}
                      </p>
                      {award.videoLink && (
                        <MediaPlayer title={award.name} src={award.videoLink}>
                          <MediaProvider />
                          <PlyrLayout icons={plyrLayoutIcons}/>
                        </MediaPlayer>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>
            );
          })}
        </Section> 
        <Section id='work-experience'> 
          <h2 className="text-3xl font-bold tracking-tight">
            <ScrambleIn 
              ref={(el) => sectionHeadingRefs.current[3] = el}
              text="💼"
              scrambleSpeed={30}
              scrambledLetterCount={3}
              autoStart={false}
            />
          </h2>
          {RESUME_DATA.work.map((work, idx) => {  
            const isExpanded = expandedWorkItems.has(work.company);
            return (
              <div key={work.company}>
                <div className='flex flex-row w-full items-center justify-between border-b-2 border-transparent hover:border-[#f0ecec]'>
                  {work.logo && (
                      <Image src={work.logo} alt={`${work.company} logo`} className="w-7 h-7 rounded-lg object-contain mr-2" />
                  )}
                  <button
                    className="flex w-full items-center justify-between text-left"
                    onClick={() => toggleWorkItem(work.company)}
                  >
                    <h1 className='text-[16px] md:text-xl lowercase'>
                      {workScrambleComplete.has(work.company) ? (
                        <ScrambleHover
                          text={work.oneLiner}
                          scrambleSpeed={25}
                          maxIterations={20}
                        />
                      ) : (
                        <ScrambleIn 
                          ref={(el) => workRefs.current[`company-${idx}`] = el}
                          text={work.oneLiner}
                          scrambleSpeed={25}
                          scrambledLetterCount={3}
                          autoStart={false}
                          onComplete={() => handleWorkScrambleComplete(work.company)}
                        />
                      )}
                    </h1>
                    <div className="flex flex-row items-center gap-2">
                      <span className="text-[16px] md:text-xl">
                        {work.year}
                      </span>
                      <ChevronDown
                        strokeWidth={1}
                        className={`h-8 w-8 transition-transform duration-200 ${
                          isExpanded ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                  </button>
                </div>
                
                <div className={`overflow-hidden transition-all duration-300 ease-in-out w-full ${
                  isExpanded ? 'max-h-[2000px] opacity-100 pt-4' : 'max-h-0 opacity-0'
                }`}>
                  <Card className="border-0 shadow-none p-0">
                    <CardContent className="flex flex-col gap-4 p-0">
                      <p className='text-xs'>
                        {work.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            );
          })}
        </Section>
        <Section id='education'> 
          <h2 className="text-3xl font-bold tracking-tight">
            <ScrambleIn 
              ref={(el) => sectionHeadingRefs.current[2] = el}
              text="🎓"
              scrambleSpeed={30}
              scrambledLetterCount={3}
              autoStart={false}
            />
          </h2>
          {RESUME_DATA.education.map((education, idx) => {
            return (
              <div key={education.school}>
                <div className='flex flex-col sm:flex-row w-full sm:items-center justify-between gap-2 sm:gap-0'>
                  <div className="flex items-center">
                    {education.logo && (
                        <Image src={education.logo} alt={`${education.school} logo`} className="w-7 h-7 rounded-lg object-contain mr-2" />
                    )}
                    <h1 className='text-[16px] md:text-xl'>
                      <ScrambleIn 
                        ref={(el) => educationRefs.current[`school-${idx}`] = el}
                        text={education.oneLiner}
                        scrambleSpeed={25}
                        scrambledLetterCount={3}
                        autoStart={false}
                      />
                    </h1>
                  </div>
                  <div className="flex flex-row items-center gap-2 sm:ml-4">
                    <span className="text-[16px] md:text-xl">
                      {`${education.start} - ${education.end}`}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </Section>
      </section>
    </main>
  )
}

export default Page