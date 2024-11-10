import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, Linkedin, Github } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-blue-950 to-black">
        <div className="container mx-auto px-4 py-5 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-3">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-blue-500 shadow-2xl shadow-blue-500/20">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gowtham-casual-pic-1_800-tykwbMxF5NLFh2f4al97OgUxoMhrow.jpeg"
                alt="Profile picture"
                width={200}
                height={200}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-bold mb-2">Gowtham Dhamodaran</h1>
              <p className="text-xl text-blue-400 mb-4">Front End Tech Lead - React, React Native, Redux, Node, Express, Javascript & TypeScript</p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                <Button variant="" className="gap-2 cursor-text">
                  <Phone className="w-4 h-4" />
                  +91 7418100293
                </Button>
                <Button variant="" className="gap-2 cursor-text">
                  <Mail className="w-4 h-4" />
                  gowthamdhamodaran94@gmail.com
                </Button>
                <Button variant="outline" className="gap-2 text-blue-400 hover:text-blue-300" asChild>
                  <a href="https://www.linkedin.com/in/gowtham-dhamodaran/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                </Button>
                <Button variant="outline" className="gap-2 text-blue-400 hover:text-blue-300" asChild>
                  <a href="https://github.com/gowtham-personal" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        <div className="grid md:grid-cols-[2fr,1fr] gap-8">
          {/* Experience Section */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold mb-6 text-blue-400">Experience</h2>

            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-blue-400">Front End Lead</h3>
                    <p className="text-blue-400">Immo Capital, Chennai</p>
                  </div>
                  <Badge variant="secondary">Sep 2023 - PRESENT</Badge>
                </div>
                <ul className="text-gray-400 list-disc pl-4 space-y-2">
                  <li>Real estate Portal for Sourcing the property - Building API'S</li>
                  <li>Managing Pipeline with Lambda and Kafka</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-blue-400">Front End Lead</h3>
                    <p className="text-blue-400">Nagarro Mena, UAE</p>
                  </div>
                  <Badge variant="secondary">Apr 2022 - Sep 2023</Badge>
                </div>
                <ul className="text-gray-400 list-disc pl-4 space-y-2">
                  <li>Mortgage loan & payments involves contract signing & Pdf generation</li>
                  <li>Involved in Improving Performance & SEO</li>
                  <li>Involved in Code Review, Debugging & Deployment</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-blue-400">Wallet Engineer</h3>
                    <p className="text-blue-400">Altimetrik, Chennai</p>
                  </div>
                  <Badge variant="secondary">Oct 2020 - Apr 2022</Badge>
                </div>
                <ul className="text-gray-400 list-disc pl-4 space-y-2">
                  <li>Crypto Exchange & Payments</li>
                  <li>Worked on different payment model, AS1, AS2 & sale</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-blue-400">Fullstack Engineer</h3>
                    <p className="text-blue-400">Foodhub, Chennai</p>
                  </div>
                  <Badge variant="secondary">Apr 2019 - Oct 2020</Badge>
                </div>
                <ul className="text-gray-400 list-disc pl-4 space-y-2">
                  <li>Online Food Ordering Application base architecture in React and Node</li>
                  <li>Design and development of api using Spatial data types in MYSQL</li>
                  <li>Used Google maps for Zone creation</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Skills & Education Section */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-blue-400">Skills</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Javascript',
                      'Typescript',
                      'React',
                      'React Native',
                      'Redux',
                      'Node',
                      'Next JS',
                      'Tailwind',
                      'Html',
                      'Css'
                    ].map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-blue-800 text-white hover:bg-blue-700">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Familiar IDE</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Visual Studio code', 'Intellij'].map((tool) => (
                      <Badge key={tool} variant="secondary" className="bg-blue-800 text-white hover:bg-blue-700">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Others</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Xml', 'Json', 'Git', 'Jira', 'Postman', 'Clickup'].map((tool) => (
                      <Badge key={tool} variant="secondary" className="bg-blue-800 text-white hover:bg-blue-700">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6 text-blue-400">Education</h2>
              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-blue-400">BE - CSE</h3>
                      <p className="text-blue-400">Vikram College of Engineering, Madurai</p>
                    </div>
                    <Badge variant="secondary">2011 - 2015</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
