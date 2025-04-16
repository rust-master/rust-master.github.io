import { useState, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Calendar, Code2, Download, ExternalLink, Mail, ArrowRight, ChevronRight, Building2, GraduationCap, Briefcase, Award, Phone, MapPin } from 'lucide-react'
import { Button } from "../components/ui/button"
import { Badge } from "../components/ui/badge"
import { Card, CardContent } from "../components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import Image from "../components/Image"
import zaryabImg from "../assets/dp.jpeg"
import substrateImg from "../assets/projects/substrate.png"
import didImg from "../assets/projects/did.png"
import nftImg from "../assets/projects/nftMarketplace.png"
import maliciousToolimg from "../assets/projects/maliciousTool.png"

type Project = {
  title: string
  description: string
  image?: string
  tags: string[]
  codeLink?: string
  demoLink?: string
}

type ProjectCardProps = {
  project: Project
  index: number
}

const skills = [
  { name: "Rust", category: "backend" },
  { name: "Golang", category: "backend" },
  { name: "React", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "Express", category: "backend" },
  { name: "MongoDB", category: "backend" },
  { name: "PostgreSQL", category: "backend" },
  { name: "Solidity", category: "blockchain" },
  { name: "NFT", category: "blockchain" },
  { name: "Web3.js", category: "blockchain" },
  { name: "Ethers.js", category: "blockchain" },
  { name: "Hardhat", category: "blockchain" },
  { name: "Foundry", category: "blockchain" },
  { name: "EVM Chain", category: "blockchain" },
  { name: "Stellar", category: "blockchain" },
  { name: "Solana", category: "blockchain" },
  { name: "Substrate", category: "blockchain" },
]

const projects = [
  {
    "title": "Substrate(Rust) EVM based NPOS Blockchain",
    "description": "Built a core blockchain using Substrate (Rust) with NPOS consensus and EVM compatibility. Integrated custom pallets, modified gas fee logic, and enabled Solidity smart contract deployment for building dApps.",
    "image": substrateImg,
    "tags": ["Rust", "Substrate", "EVM", "Solidity", "Blockchain", "dApps"],
    "demoLink": "#",
    "codeLink": "#",
    "featured": true
  },  
  {
    title: "Blockchain Identity Verification (Solidity Contracts) & JS SDK",
    description: "Self-sovereign identity system built on blockchain for secure credential management.",
    image: didImg,
    tags: ["Alogrithm", "Solidity", "IPFS", "JS SDK"],
    demoLink: "#",
    codeLink: "#",
    featured: true,
  },
  {
    title: "NFT Marketplace",
    description:
      "A full-stack NFT marketplace with minting, trading, and auction capabilities for digital collectibles.",
    image: nftImg,
    tags: ["React Js", "JavaScript", "Ethers.js", "IPFS"],
    demoLink: "#",
    codeLink: "#",
    featured: true,
  },
  {
    "title": "Malicious Code Scanner Tool",
    "description": "This project aims to detect and scan malicious code in JavaScript-based projects. It is especially useful for identifying scams often found on freelancing marketplaces.",
    "image": maliciousToolimg,
    "tags": ["JavaScript", "HTML", "CSS", "Security", "Code Analysis"],
    "demoLink": "#",
    "codeLink": "#",
    "featured": false
  },
]

const experiences = [
  {
    company: "InvoZone",
    position: "Blockchain Engineer",
    period: "March 2022 - Present",
    location: "Lahore, Punjab, Pakistan",
    skills: [
      "EVM Architecture",
      "Smart Contract Development (Solidity)",
      "Web3 Integration",
      "DeFi Protocols",
      "zksync & zkevm",
      "Proxy Contracts",
      "Rust/Soroban Development",
      "Cosmos SDK",
      "Substrate Development",
      "Solana Development",
    ]
  },
  {
    company: "Fiverr",
    position: "Blockchain Developer",
    period: "February 2021 - Present",
    location: "Remote",
    skills: [
      "Smart Contract Development",
      "NFT Collection Launch",
      "OpenSea Integration",
      "Web3 Development"
    ]
  },
  {
    company: "Sruplex",
    position: "Mobile Application Developer",
    period: "February 2021 - June 2022",
    location: "Lahore",
    skills: [
      "Kotlin Development",
      "Jetpack Compose",
      "Material Design",
      "Room DB",
      "Firebase",
      "Code Optimization"
    ]
  }
]

const education = [
  {
    institution: "COMSATS University Islamabad",
    degree: "Bachelor of Science in Computer Sciences BS(CS)",
    field: "Computer Science",
    period: "February 2018 - February 2022"
  },
  {
    institution: "Educators College Sahiwal",
    degree: "ICS (Inter Computer Science)",
    period: "April 2015 - July 2017"
  }
]

const certificates = [
  {
    name: "Back End Development and APIs",
    issuer: "freeCodeCamp",
    date: "2023"
  },
  {
    name: "Certified Blockchain Practitioner (CBP)",
    issuer: "The SecOps Group",
    date: "2023"
  },
  {
    name: "Decentralized Applications",
    issuer: "Coursera",
    date: "2023"
  },
  {
    name: "Blockchain Foundation Developer",
    issuer: "IBM",
    date: "2022"
  },
  {
    name: "Blockchain Essentials",
    issuer: "IBM",
    date: "2022"
  },
  {
    name: "Intermediate Python for Data Science",
    issuer: "DataCamp",
    date: "2022"
  },
  {
    name: "Blockchain Specialization",
    issuer: "Coursera",
    date: "2022"
  }
]

export function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [activeTab, setActiveTab] = useState("featured")
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])
  const y = useTransform(scrollYProgress, [0, 1], [0, 100])

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-background to-background">

      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-primary/5 dark:to-secondary/5" />
          <div className="absolute inset-0 bg-grid-white/[0.02] dark:bg-grid-white/[0.05]" />
        </div>

        <motion.div style={{ opacity, scale, y }} className="container relative z-10 px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center text-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-6 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary dark:bg-primary/20"
            >
              Full Stack Developer & Blockchain Engineer
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-4xl font-bold leading-tight tracking-tighter md:text-6xl lg:text-7xl lg:leading-[1.1] max-w-3xl bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70"
            >
              Building the Future with Code & Blockchain
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="mt-6 max-w-[750px] text-lg text-muted-foreground sm:text-xl"
            >
              Crafting innovative solutions at the intersection of web development and blockchain technology. Turning
              complex problems into elegant, efficient, and scalable solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" className="group"
               onClick={() => scrollToSection('contact')}
              >
                Contact Me
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <a 
                  href="https://calendly.com/muhammadzaryabrafique/30min" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className=""
                >
              <Button size="lg" variant="outline" className="group">
                <Calendar className="mr-2 h-4 w-4 transition-all group-hover:-translate-y-1" />
                
                Schedule a call
               
              </Button>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
              <div className="flex flex-col items-center">
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                  className="w-6 h-10 rounded-full border-2 border-muted flex justify-center pt-1"
                >
                  <motion.div
                    animate={{ height: [6, 12, 6] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                    className="w-1 bg-muted-foreground rounded-full"
                  />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      <section id="about" className="container py-24 sm:py-32">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-6xl"
        >
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 z-10 mix-blend-overlay" />
                <Image
                  src={zaryabImg}
                  alt="Zaryab Profile Photo"
                  width={600}
                  height={600}
                  className="object-cover h-full w-full"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-xl bg-primary/10 backdrop-blur-sm border border-primary/20" />
              <div className="absolute -top-6 -left-6 h-24 w-24 rounded-xl bg-secondary/10 backdrop-blur-sm border border-secondary/20" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">About Me</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Passionate Developer & Blockchain Enthusiast
              </h2>
              <p className="text-muted-foreground">
                Myself is Zaryab. I'm a Full Stack Developer with over 5 years of experience specializing in building scalable web
                applications and blockchain solutions. My journey in tech has been driven by curiosity and a desire to
                create meaningful digital experiences.
              </p>
              <p className="text-muted-foreground">
                With expertise in both frontend and backend technologies, I bridge the gap between user experience and
                technical implementation. My blockchain experience allows me to build decentralized applications that
                leverage the power of distributed ledger technology.
              </p>

              <div className="pt-4">
                <h3 className="text-xl font-semibold mb-4">Core Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge key={skill.name} variant="outline" className="px-3 py-1 text-sm">
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section id="projects" className="container py-24 sm:py-32 bg-muted/30">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center"
        >
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Portfolio</div>
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-4xl md:text-5xl">Featured Projects</h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg">
            Explore my recent work showcasing technical expertise and problem-solving abilities
          </p>
        </motion.div>

        <div className="mt-12 flex justify-center">
          <Tabs defaultValue="featured" className="w-full max-w-4xl" onValueChange={(value) => setActiveTab(value)}>
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="featured">Featured</TabsTrigger>
                <TabsTrigger value="all">All Projects</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="featured" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects
                  .filter((p) => p.featured)
                  .map((project, index) => (
                    <ProjectCard key={project.title} project={project} index={index} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="all" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                  <ProjectCard key={project.title} project={project} index={index} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="experience" className="container py-24 sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto max-w-[58rem] flex flex-col items-center space-y-4 text-center"
        >
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Experience</div>
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-4xl md:text-5xl">Professional Journey</h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg">
            A track record of delivering innovative blockchain and software solutions
          </p>
        </motion.div>

        <div className="mt-16 space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                <div className="md:w-1/3">
                  <div className="flex items-center gap-2 text-primary">
                    <Building2 className="h-5 w-5" />
                    <h3 className="font-semibold text-xl">{exp.company}</h3>
                  </div>
                  <p className="text-muted-foreground mt-1">{exp.period}</p>
                  <p className="text-sm text-muted-foreground">{exp.location}</p>
                </div>
                <div className="md:w-2/3">
                  <h4 className="text-lg font-medium mb-2">{exp.position}</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="px-2 py-0.5">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              {index !== experiences.length - 1 && (
                <div className="absolute left-5 md:left-1/3 top-full h-16 w-px bg-border" />
              )}
            </motion.div>
          ))}
        </div>
      </section>

      <section id="education" className="container py-24 sm:py-32 bg-muted/30">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto max-w-[58rem] flex flex-col items-center space-y-4 text-center"
        >
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Education</div>
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-4xl md:text-5xl">Academic Background</h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg">
            Educational foundation in Computer Science and Technology
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg border bg-background p-6"
            >
              <div className="flex items-center gap-2 text-primary mb-4">
                <GraduationCap className="h-5 w-5" />
                <h3 className="font-semibold text-xl">{edu.institution}</h3>
              </div>
              <div className="space-y-2">
                <p className="font-medium">{edu.degree}</p>
                {edu.field && <p className="text-muted-foreground">{edu.field}</p>}
                <p className="text-sm text-muted-foreground">{edu.period}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="certificates" className="container py-24 sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto max-w-[58rem] flex flex-col items-center space-y-4 text-center"
        >
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Certificates</div>
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-4xl md:text-5xl">Professional Certifications</h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg">
            Continuous learning and professional development in technology and blockchain
          </p>
        </motion.div>

        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg border bg-background p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-full p-2 bg-primary/10 text-primary">
                  <Award className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold leading-tight">{cert.name}</h3>
                  <div className="flex flex-col gap-1">
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    <p className="text-sm text-muted-foreground">{cert.date}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="contact" className="container py-24 sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto max-w-5xl"
        >
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
            <div className="space-y-6">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Contact</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Let's Work Together</h2>
              <p className="text-muted-foreground">
                I'm currently available for freelance work and open to discussing new opportunities. Feel free to reach
                out!
              </p>

              <div className="space-y-4 pt-4">
                <a 
                  href="muhammadzaryabrafique@gmail.com"
                  className="flex items-center gap-3 hover:text-primary transition-colors group"
                >
                  <Button variant="outline" size="icon" className="rounded-full group-hover:border-primary">
                    <Mail className="h-4 w-4" />
                  </Button>
                  <span>muhammadzaryabrafique@gmail.com</span>
                </a>

                <a 
                  href="https://calendly.com/muhammadzaryabrafique/30min" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-primary transition-colors group"
                >
                  <Button variant="outline" size="icon" className="rounded-full group-hover:border-primary">
                    <Calendar className="h-4 w-4" />
                  </Button>
                  <span>Schedule a call</span>
                </a>

                <div className="flex items-center gap-3">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Phone className="h-4 w-4" />
                  </Button>
                  <span>+92 334 786 0477</span>
                </div>

                <div className="flex items-center gap-3">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <MapPin className="h-4 w-4" />
                  </Button>
                  <span>Lahore, Pakistan</span>
                </div>
              </div>

              <div className="pt-4">
                <p className="text-muted-foreground text-sm">
                  Prefer sending a message? Fill out the form and I'll get back to you within 24 hours.
                </p>
              </div>
            </div>

            <Card className="overflow-hidden">
              <CardContent className="p-6">
                <form className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Name
                    </label>
                    <input
                      id="name"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your email"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your message"
                    />
                  </div>

                  <Button className="w-full">
                    Send Message
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-lg border bg-background"
    >
      <div className="aspect-video w-full overflow-hidden">
        <Image
          src={project.image || "https://placehold.co/500x300"}
          alt={project.title}
          width={500}
          height={300}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="p-6">
        <div className="space-y-2">
          <h3 className="font-bold text-xl">{project.title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag: any) => (
            <Badge key={tag} variant="secondary" className="px-2 py-0 text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-4">
          {project.codeLink && (
            <a 
              href={project.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              <Button variant="outline" size="sm" className="group/btn">
                <Code2 className="mr-2 h-4 w-4" />
                Code
                <ChevronRight className="ml-1 h-3 w-3 transition-transform group-hover/btn:translate-x-1" />
              </Button>
            </a>
          )}
          {project.demoLink && (
            <a 
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              <Button variant="outline" size="sm" className="group/btn">
                <ExternalLink className="mr-2 h-4 w-4" />
                Demo
                <ChevronRight className="ml-1 h-3 w-3 transition-transform group-hover/btn:translate-x-1" />
              </Button>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default Home;