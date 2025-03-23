"use client";

import React, { useState } from "react";

import {
  Heading,
  Text,
  Button,
  Icon,
  InlineCode,
  Logo,
  Input,
  Avatar,
  AvatarGroup,
  Textarea,
  PasswordInput,
  SegmentedControl,
  SmartLink,
  Dialog,
  Feedback,
  SmartImage,
  Line,
  LogoCloud,
  Background,
  Select,
  useToast,
  Card,
  Fade,
  StatusIndicator,
  DateRangePicker,
  DateRange,
  TiltFx,
  HoloFx,
  IconButton,
  TagInput,
  Switch,
  Column,
  Row,
  StyleOverlay,
} from "@/once-ui/components";
import { CodeBlock, MediaUpload } from "@/once-ui/modules";
import ProfilePhoto from "../once-ui/components/ProfilePhoto";

export default function Home() {
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedRange, setSelectedRange] = useState<DateRange>();
  const [isFirstDialogOpen, setIsFirstDialogOpen] = useState(false);
  const [isSecondDialogOpen, setIsSecondDialogOpen] = useState(false);
  const [firstDialogHeight, setFirstDialogHeight] = useState<number>();
  const { addToast } = useToast();
  const [intro, setIntro] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tags, setTags] = useState<string[]>(["UX / UI", "Design systems", "AI / ML"]);
  const [twoFA, setTwoFA] = useState(false);

  const handleSelect = (value: string) => {
    console.log("Selected option:", value);
    setSelectedValue(value);
  };

  const links = [
    {
      href: "https://once-ui.com/docs/theming",
      title: "Themes",
      description: "Style your app in minutes",
    },
    {
      href: "https://once-ui.com/docs/RowComponent",
      title: "Layout",
      description: "Build responsive layouts",
    },
    {
      href: "https://once-ui.com/docs/typography",
      title: "Typography",
      description: "Scale text automatically",
    },
  ];

  const validateIntro = (value: React.ReactNode) => {
    if (typeof value === "string" && value.length < 10) {
      return (
        <Row horizontal="center" marginBottom="12" gap="8">
          <Icon name="errorCircle" />
          Intro must be at least 10 characters long.
        </Row>
      );
    }
    return null;
  };

  const validateLogin = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      return "Email and / or password is invalid.";
    }
    return null;
  };

  return (
    <Column fillWidth paddingY="80" paddingX="s" horizontal="center" flex={1}>
      <Fade
        zIndex={3}
        pattern={{
          display: true,
          size: "4",
        }}
        position="fixed"
        top="0"
        left="0"
        to="bottom"
        height={5}
        fillWidth
        blur={0.25}
      />
      {/* Start nav bar */}
      <Row position="fixed" top="0" fillWidth horizontal="center" zIndex={3}>
        <Row
          data-border="rounded"
          horizontal="space-between"
          maxWidth="l"
          paddingRight="64"
          paddingLeft="32"
          paddingY="20"
        >
          <Logo size="m" wordmark={false} icon={false} iconSrc="/images/bs_logo.png" href="https://www.linkedin.com/in/bethshieh/" />
          <Row gap="12" hide="s">
            <Button
              href="https://www.linkedin.com/in/bethshieh/"
              size="s"
              label="LinkedIn"
              weight="default"
              variant="tertiary"
            />
            <Button
              href="https://github.com/shiehbeth"
              size="s"
              label="GitHub"
              weight="default"
              variant="tertiary"
            />
          </Row>
        </Row>
      </Row>
      <Column
        overflow="hidden"
        as="main"
        maxWidth="l"
        position="relative"
        radius="xl"
        horizontal="center"
        border="neutral-alpha-weak"
        fillWidth
      >
        <Column
          fillWidth
          horizontal="center"
          gap="48"
          radius="xl"
          paddingTop="80"
          position="relative"
        >
          <Background
            mask={{
              x: 0,
              y: 48,
            }}
            position="absolute"
            grid={{
              display: true,
              width: "0.25rem",
              color: "neutral-alpha-medium",
              height: "0.25rem",
            }}
          />
          <Background
            mask={{
              x: 80,
              y: 0,
              radius: 100,
            }}
            position="absolute"
            gradient={{
              display: true,
              tilt: -35,
              height: 50,
              width: 75,
              x: 100,
              y: 40,
              colorStart: "accent-solid-medium",
              colorEnd: "static-transparent",
            }}
          />
          <Background
            mask={{
              x: 100,
              y: 0,
              radius: 100,
            }}
            position="absolute"
            gradient={{
              display: true,
              opacity: 100,
              tilt: -35,
              height: 20,
              width: 120,
              x: 120,
              y: 35,
              colorStart: "brand-solid-strong",
              colorEnd: "static-transparent",
            }}
          />

          {/* start intro portion */}
          <Column fillWidth horizontal="center" gap="32" padding="32" position="relative">
            <Heading wrap="balance" variant="display-default-l" align="center" marginBottom="16">
              Beth Shieh
            </Heading>
            <ProfilePhoto
              photoUrl="/images/bs_photo.jpeg"
              altText="Beth Shieh"
            />
            <InlineCode radius="xl" shadow="m" fit paddingX="16" paddingY="8">
              MSCS Student | Ex Peds PT
            </InlineCode>
            <Heading marginBottom="12" as="h2" align="center" variant="heading-default-l">
              Hello! I am a Master’s student in Computer Science at Northeastern University with a passion for using technology to solve real world problems. Before transitioning into software engineering, I was a pediatric physical therapist, where I worked closely with multidisciplinary teams to deliver patient-centered care. My background has equipped me with strong problem-solving skills and a unique perspective on how technology can be leveraged to improve lives.
            </Heading>
            <Button
              id="downloadResume"
              target="_blank"
              label="Resume"
              href="https://drive.google.com/file/d/1BSIDXPPzXJEBkIzy_6BpFFoSYgSQhQiO/view?usp=sharing"
              variant="secondary"
              arrowIcon
            />
          </Column>

          <Column fillWidth paddingX="32" gap="12" horizontal="center" position="relative">
          <Heading as="h2" variant="display-default-m">
            Employment
          </Heading>
          <Text marginBottom="32" align="center" onBackground="neutral-weak">
            Relevant employment experiences.
          </Text>
          <Row
            paddingX="32"
            fillWidth
            paddingY="160"
            gap="64"
            position="relative"
            mobileDirection="column"
            vertical="center"
            marginY="32"
            background="overlay"
            radius="xl"
            border="neutral-alpha-strong"
            overflow="hidden"
          >
            <Background
              style={{ left: "-1px" }}
              borderTop="neutral-alpha-medium"
              mask={{
                x: 0,
                y: 50,
                radius: 100,
              }}
              position="absolute"
              grid={{
                display: true,
                opacity: 100,
                width: "10%",
                color: "neutral-alpha-medium",
                height: "1.25%",
              }}
            />
            <Row
              position="relative"
              shadow="xl"
              fillWidth
              border="neutral-alpha-medium"
              borderStyle="dashed"
              background="page"
              radius="xl"
            >
              <TiltFx
                aspectRatio="16 / 9"
                fillWidth
                radius="xl"
                border="accent-alpha-weak"
                overflow="hidden"
              >
                <HoloFx fill>
                  <Background
                    fill
                    position="absolute"
                    gradient={{
                      display: true,
                      tilt: -45,
                      height: 150,
                      width: 100,
                      x: 50,
                      y: 10,
                      colorStart: "brand-solid-strong",
                      colorEnd: "accent-solid-weak",
                    }}
                  >
                    <Column
                      fill
                      position="absolute"
                      padding="24"
                      gap="12"
                      onSolid="neutral-strong"
                    >
                      <Text variant="body-default-xl"><b>Software Development Intern</b> @ Amazon Bedrock</Text>
                      <Row
                        fillWidth
                        horizontal="space-between"
                        vertical="end"
                        paddingRight="16"
                      >
                        <Column gap="4">
                          <Row>
                            <Text variant="body-default-xs">May 2025 -  Aug 2025</Text>
                          </Row>
                          <Line></Line>
                          <Text variant="body-default-xs">•	Details coming soon</Text>

                        </Column>
                      </Row>
                    </Column>
                  </Background>
                </HoloFx>
              </TiltFx>
            </Row>
            <Row
              position="relative"
              shadow="xl"
              fillWidth
              border="neutral-alpha-medium"
              borderStyle="dashed"
              background="page"
              radius="xl"
            >
              <TiltFx
                aspectRatio="16 / 9"
                fillWidth
                radius="xl"
                border="accent-alpha-weak"
                overflow="hidden"
              >
                <HoloFx fill>
                  <Background
                    fill
                    position="absolute"
                    gradient={{
                      display: true,
                      tilt: -45,
                      height: 150,
                      width: 100,
                      x: 50,
                      y: 10,
                      colorStart: "brand-solid-strong",
                      colorEnd: "accent-solid-weak",
                    }}
                  >
                    <Column
                      fill
                      position="absolute"
                      padding="24"
                      gap="12"
                      onSolid="neutral-strong"
                    >
                      <Text variant="body-default-xl"><b>Teaching Assistant</b> @ Northeastern University</Text>
                      <Row
                        fillWidth
                        horizontal="space-between"
                        vertical="end"
                        paddingRight="16"
                      >
                        <Column gap="4">
                          <Row>
                            <Text variant="body-default-xs">Aug 2024 - Present</Text>
                          </Row>
                          <Line></Line>
                          <Text variant="body-default-xs">•	Teaching Assistant for CS5001 Foundations of Computer Science and CS5004 Object-Oriented Design</Text>
                        </Column>
                      </Row>
                    </Column>
                  </Background>
                </HoloFx>
              </TiltFx>
            </Row>
          </Row>
          </Column>

          {/* Start Project Section */}
          <Column fillWidth paddingX="32" gap="12" horizontal="center" position="relative">
            <Heading as="h2" variant="display-default-m">
              Projects
            </Heading>
            <Text marginBottom="32" align="center" onBackground="neutral-weak">
              Select a project to view more
            </Text>
            <Row
              marginY="32"
              background="overlay"
              fillWidth
              radius="xl"
              border="neutral-alpha-strong"
              overflow="hidden"
            >
              <Column fillWidth horizontal="center" gap="20" padding="32" position="relative">
                <Background
                  mask={{
                    x: 100,
                    y: 0,
                    radius: 75,
                  }}
                  position="absolute"
                  grid={{
                    display: true,
                    opacity: 50,
                    width: "0.5rem",
                    color: "neutral-alpha-medium",
                    height: "1rem",
                  }}
                />
                  <Row paddingY="24" onBackground="neutral-weak" fillWidth gap="24" vertical="center">
                    <Line />/<Line />
                  </Row>
                  <Row paddingY="24" onBackground="neutral-weak" fillWidth gap="24" vertical="center">


                    {/* start card 1*/}
                    <SmartLink unstyled fillWidth target="_blank" href="https://bethshieh-coolaidproject.onrender.com/">
                      <Card
                        fillWidth
                        padding="40"
                        gap="8"
                        direction="column"
                        background="brand-background-medium"
                        borderRight={undefined}
                        border="s"
                        radius="m"
                      >

                        <SmartImage
                          sizes="500px"
                          fillWidth
                          aspectRatio="1"
                          radius="m"
                          src="/images/coolAidLogo.jpg"

                        />
                        <Row fillWidth center gap="12">
                          <Text variant="body-strong-m" onBackground="neutral-strong">
                            CoolAid
                          </Text>
                          <Icon size="s" name="arrowUpRight" />
                        </Row>

                        <Text align="center" variant="body-default-s" onBackground="neutral-weak">
                          CoolAid is a community-focused application designed to help people during extreme heat waves. The app connects donors who provide heat relief resources with those in need, utilizing a map-based system for location matching.
                        </Text>

                        <Row fillWidth center gap="12">
                          <AvatarGroup
                            avatars={[
                              {
                                src: '/images/mongoDB.png',
                              },
                              {
                                src: '/images/express.png'
                              },
                              {
                                src: '/images/react.png'
                              },
                              {
                                src: '/images/nodejs.png'
                              }
                            ]}
                            size="m"
                          />
                          <Text>
                            #mongoDB #express #react #node.js
                          </Text>
                        </Row>
                      </Card>
                    </SmartLink>
                    {/* start card 2 */}
                    <SmartLink unstyled fillWidth target="_blank" href="https://github.com/shiehbeth/reLaunchHerBeth">
                      <Card
                        fillWidth
                        padding="40"
                        gap="8"
                        direction="column"
                        background="brand-background-medium"
                        borderRight={undefined}
                        border="s"
                        radius="m"
                      >
                        <SmartImage
                          sizes="500px"
                          fillWidth
                          aspectRatio="1"
                          radius="m"
                          src="/images/reLaunchHerLogo.jpg"

                        />
                        <Row fillWidth center gap="12">
                          <Text variant="body-strong-m" onBackground="neutral-strong">
                          reLaunchHer
                          </Text>
                          <Icon size="s" name="arrowUpRight" />
                        </Row>
                        <Text align="center" variant="body-default-s" onBackground="neutral-weak">
                          reLaunchHer is a website created to help women transition back into the workforce by generating personalized job roles and learning paths while leveraging OpenAI's API.
                        </Text>
                        <Row fillWidth center gap="12">
                          <AvatarGroup
                            avatars={[
                              {
                                src: '/images/mysql.png',
                              },
                              {
                                src: '/images/java.png',
                              },
                              {
                                src: '/images/react.png'
                              }
                            ]}
                            size="m"
                          />
                          <Text>
                            #mySQL #java #react #springboot #artificialintelligence
                          </Text>
                        </Row>
                      </Card>
                    </SmartLink>
                  </Row>
                  <Row paddingY="24" onBackground="neutral-weak" fillWidth gap="24" vertical="center">
                    {/* start card 3*/}

                    <SmartLink unstyled fillWidth target="_blank" href="https://github.com/ShirleyFang/ActIve">
                      <Card
                        fillWidth
                        padding="40"
                        gap="8"
                        direction="column"
                        background="brand-background-medium"
                        borderRight={undefined}
                        border="s"
                        radius="m"
                      >
                        <SmartImage
                          sizes="500px"
                          fillWidth
                          aspectRatio="1"
                          radius="m"
                          src="/images/ActIve.png"

                        />
                        <Row fillWidth center gap="12">
                          <Text variant="body-strong-m" onBackground="neutral-strong">
                          ActIve
                          </Text>
                          <Icon size="s" name="arrowUpRight" />
                        </Row>
                        <Text align="center" variant="body-default-s" onBackground="neutral-weak">
                          ActIve is an offline AI-powered exercise app for Snapdragon X Elite Copilot+ PC that uses MediaPipe for real-time posture analysis and Llama for personalized exercise recommendation generation to improve overall health.
                        </Text>
                        <Row fillWidth center gap="12">
                          <AvatarGroup
                            avatars={[
                              {
                                src: '/images/python.png',
                              },
                              {
                                src: '/images/ai.png',
                              },
                            ]}
                            size="m"
                          />
                          <Text>
                            #python #machinelearning #artificialintelligence
                          </Text>
                        </Row>
                      </Card>
                    </SmartLink>

                    {/* card 4 */}

                    <SmartLink unstyled fillWidth target="_blank" href="https://github.com/shiehbeth/bookstore-inventory">
                      <Card
                        fillWidth
                        padding="40"
                        gap="8"
                        direction="column"
                        background="brand-background-medium"
                        borderRight={undefined}
                        border="s"
                        radius="m"
                      >

                        <SmartImage
                          sizes="500px"
                          fillWidth
                          aspectRatio="1"
                          radius="m"
                          src="/images/bookstore_inventory.jpg"

                        />
                        <Row fillWidth center gap="12">
                          <Text variant="body-strong-m" onBackground="neutral-strong">
                            Bookstore Inventory
                          </Text>
                          <Icon size="s" name="arrowUpRight" />
                        </Row>

                        <Text align="center" variant="body-default-s" onBackground="neutral-weak">
                          A program that simulates a bookstore and a user's personal collection. Uses a large dataset on Kaggle, and a MySQL database to store the data. The user can search for books and/or add books to their personal collection.
                        </Text>

                        <Row fillWidth center gap="12">
                          <AvatarGroup
                            avatars={[
                              {
                                src: '/images/c.png',
                              },
                              {
                                src: '/images/mysql.png'
                              },
                              {
                                src: '/images/algorithm.png'
                              },
                            ]}
                            size="m"
                          />
                          <Text>
                            #C #MySQL #python #datastructures #algorithms
                          </Text>
                        </Row>
                      </Card>
                    </SmartLink>
                    </Row>
              </Column>
            </Row>
          </Column>
        </Column>

        {/* Experiences */}

        <Column fillWidth paddingX="32" gap="12" horizontal="center" position="relative">
          <Heading as="h2" variant="display-default-m">
            Extracurriculars
          </Heading>
          <Text marginBottom="32" align="center" onBackground="neutral-weak">
            Leadership and extracurricular experiences.
          </Text>
          <Row
            paddingX="32"
            fillWidth
            paddingY="160"
            gap="64"
            position="relative"
            mobileDirection="column"
            vertical="center"
            marginY="32"
            background="overlay"
            radius="xl"
            border="neutral-alpha-strong"
            overflow="hidden"
          >

            <Background
              style={{ left: "-1px" }}
              borderTop="neutral-alpha-medium"
              mask={{
                x: 0,
                y: 50,
                radius: 100,
              }}
              position="absolute"
              grid={{
                display: true,
                opacity: 100,
                width: "10%",
                color: "neutral-alpha-medium",
                height: "1.25%",
              }}
            />

            <Row
              position="relative"
              shadow="xl"
              fillWidth
              border="neutral-alpha-medium"
              borderStyle="dashed"
              background="page"
              radius="xl"
            >
              <TiltFx
                aspectRatio="16 / 9"
                fillWidth
                radius="xl"
                border="accent-alpha-weak"
                overflow="hidden"
              >
                <HoloFx fill>
                  <Background
                    fill
                    position="absolute"
                    gradient={{
                      display: true,
                      tilt: -45,
                      height: 150,
                      width: 100,
                      x: 50,
                      y: 10,
                      colorStart: "accent-solid-strong",
                      colorEnd: "accent-solid-weak",
                    }}
                  >
                    <Column
                      fill
                      position="absolute"
                      padding="24"
                      gap="12"
                      onSolid="neutral-strong"
                    >
                      <Text variant="body-default-xl"><b>Co-Founder</b> @ Decode Leetcode</Text>
                      <Row
                        fillWidth
                        horizontal="space-between"
                        vertical="end"
                        paddingRight="16"
                      >
                        <Column gap="4">
                          <Row>
                            <Text variant="body-default-xs">Jan 2024 -  Present</Text>
                          </Row>
                          <Line></Line>
                          <Text variant="body-default-xs">•	Decode LeetCode is a student-led club at Northeastern University dedicated to demystifying coding challenges through collaborative problem-solving.</Text>
                        </Column>
                      </Row>
                    </Column>
                  </Background>
                </HoloFx>
              </TiltFx>
            </Row>
            <Row
              position="relative"
              shadow="xl"
              fillWidth
              border="neutral-alpha-medium"
              borderStyle="dashed"
              background="page"
              radius="xl"
            >
              <TiltFx
                aspectRatio="16 / 9"
                fillWidth
                radius="xl"
                border="accent-alpha-weak"
                overflow="hidden"
              >
                <HoloFx fill>
                  <Background
                    fill
                    position="absolute"
                    gradient={{
                      display: true,
                      tilt: -45,
                      height: 150,
                      width: 100,
                      x: 50,
                      y: 10,
                      colorStart: "accent-solid-strong",
                      colorEnd: "accent-solid-weak",
                    }}
                  >
                    <Column
                      fill
                      position="absolute"
                      padding="24"
                      gap="12"
                      onSolid="neutral-strong"
                    >
                      <Text variant="body-default-xl"><b>Peer Mentor</b> @ NU Buddies</Text>
                      <Row
                        fillWidth
                        horizontal="space-between"
                        vertical="end"
                        paddingRight="16"
                      >
                        <Column gap="4">
                          <Row>
                            <Text variant="body-default-xs">Aug 2024 - Present</Text>
                          </Row>
                          <Line></Line>
                          <Text variant="body-default-xs">•	NU Buddies is a peer mentorship program that fosters connections between students, providing guidance in academic and professional challenges.</Text>
                        </Column>
                      </Row>
                    </Column>
                  </Background>
                </HoloFx>
              </TiltFx>
            </Row>

          </Row>

        </Column>
        {/* Education */}
        <Row
          padding="32"
          fillWidth
          gap="64"
          position="relative"
          mobileDirection="column"
          vertical="center"
        >
          <Background
            fill
            position="absolute"
            gradient={{
              display: true,
              opacity: 60,
              tilt: 0,
              height: 100,
              width: 100,
              x: 50,
              y: 0,
              colorStart: "brand-solid-strong",
              colorEnd: "static-transparent",
            }}
            radius="xl"
          />
          <Column>
          <Heading as="h2" variant="display-default-m">
            Education
          </Heading>
          </Column>

          <Column
            fillWidth
            background="surface"
            radius="xl"
            border="neutral-medium"
            overflow="hidden"
            padding="32"
            gap="40"
            position="relative"
          >
            <Text><b>Master's in Computer Science</b> Northeastern University <i>2024 - 2026</i></Text>
            <Text><b>Doctor of Physical Therapy</b> Northwestern University <i>2018-2021</i></Text>
            <Text><b>Bachelor's in Biology</b> Northwestern University <i>2014-2018</i></Text>
          </Column>
        </Row>
        {/* Awards */}
        <Row
          padding="32"
          fillWidth
          gap="64"
          position="relative"
          mobileDirection="column"
          vertical="center"
        >
          <Background
            fill
            position="absolute"
            gradient={{
              display: true,
              opacity: 30,
              tilt: 0, // Ensures a vertical gradient
              height: 100,
              width: 100,
              x: 20,
              y: 15, // Center the gradient properly
              colorStart: "static-transparent", // Transparent/white at the top
              colorEnd: "accent-solid-strong",
            }}
            radius="xl"
          />
          <Column>
          <Heading as="h2" variant="display-default-m">
            Awards & More
          </Heading>

          </Column>

          <Column
            fillWidth
            background="surface"
            radius="xl"
            border="neutral-medium"
            overflow="hidden"
            padding="32"
            gap="40"
            position="relative"
          >
            <Text><b>Earth Hacks Climate Resiliency Hackathon</b> First Place Winner 🏆</Text>
            <Text><b>AWS Academy Graduate</b> AWS Academy Cloud Foundations ☁️</Text>
            <Text><b>Publication</b> <i>Searching Behind 'No!'</i> Journal of Humanities in Rehab (2020) 📝</Text>
          </Column>
        </Row>

        {/* Connect */}
        <Row
          position="relative"
          fillWidth
          paddingX="32"
          paddingTop="160"
          minHeight={28}
          paddingBottom="80"
          horizontal="center"
          vertical="end"
        >
          <Background
            mask={{
              x: 50,
              y: 100,
            }}
            position="absolute"
            grid={{
              display: true,
              width: "0.25rem",
              color: "brand-alpha-strong",
              height: "0.25rem",
            }}
            radius="xl"
          />
          <Row position="relative" textVariant="display-default-m" align="center">
            Connect with Me
          </Row>
        </Row>
        <Row fillWidth overflow="hidden">
          <Row maxWidth="32" borderTop="neutral-alpha-weak" borderBottom="neutral-medium"></Row>
          <Row fillWidth border="neutral-alpha-weak" mobileDirection="column">

            <SmartLink unstyled fillWidth target="_blank" href="https://www.linkedin.com/in/bethshieh/">
              <Card
                fillWidth
                padding="40"
                gap="8"
                direction="column"
                background={undefined}
                borderRight={undefined}
                border={undefined}
                radius={undefined}
              >
                <Row fillWidth center gap="12">
                  <Text variant="body-strong-m" onBackground="neutral-strong">
                    LinkedIn
                  </Text>
                  <Icon size="s" name="arrowUpRight" />
                </Row>
              </Card>
            </SmartLink>
            <SmartLink unstyled fillWidth target="_blank" href="https://github.com/shiehbeth">
              <Card
                fillWidth
                padding="40"
                gap="8"
                direction="column"
                background={undefined}
                borderRight={undefined}
                border={undefined}
                radius={undefined}
              >
                <Row fillWidth center gap="12">
                  <Text variant="body-strong-m" onBackground="neutral-strong">
                    GitHub
                  </Text>
                  <Icon size="s" name="arrowUpRight" />
                </Row>
              </Card>
            </SmartLink>
            <SmartLink unstyled fillWidth target="_blank" href="mailto:shiehbeth@gmail.com">
              <Card
                fillWidth
                padding="40"
                gap="8"
                direction="column"
                background={undefined}
                borderRight={undefined}
                border={undefined}
                radius={undefined}
              >
                <Row fillWidth center gap="12">
                  <Text variant="body-strong-m" onBackground="neutral-strong">
                    Email
                  </Text>
                  <Icon size="s" name="arrowUpRight" />
                </Row>
              </Card>
            </SmartLink>
          </Row>
          <Row maxWidth="32" borderTop="neutral-alpha-weak" borderBottom="neutral-medium"></Row>
        </Row>
        <Row
          position="relative"
          as="footer"
          fillWidth
          paddingX="l"
          paddingTop="128"
          paddingBottom="80"
        >
          <Background
            borderTop="brand-alpha-strong"
            mask={{
              x: 50,
              y: 0,
            }}
            position="absolute"
            grid={{
              display: true,
              width: "0.25rem",
              color: "brand-alpha-strong",
              height: "0.25rem",
            }}
          />
          <Column
            position="relative"
            textVariant="body-default-xs"
            onBackground="neutral-medium"
            horizontal="center"
            align="center"
            fillWidth
            gap="16"
          >
            <Text size="m">
              <Text onBackground="neutral-weak">Template from Once UI</Text>
            </Text>
          </Column>
        </Row>
      </Column>
    </Column>
  );
}
