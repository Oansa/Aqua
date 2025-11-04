import React from 'react'
import { motion } from 'framer-motion'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Hero } from '@/components/sections/hero'
import { Shield, FileCheck, Zap, Users, Code, Lock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/utils/helpers'
import {
  containerVariants,
  itemVariants,
  slideUpVariants,
  useInViewAnimation
} from '@/utils/animations'

export default function HomePage() {
  const viewAnimation = useInViewAnimation()

  const valueProps = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Verify Any Data",
      description: "Cryptographic verification for documents, files, and digital assets with military-grade security",
      color: "from-primary-aqua to-bright-aqua"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Privacy Preserving",
      description: "Zero-knowledge proofs ensure confidentiality while maintaining verifiable integrity",
      color: "from-seafoam to-primary-aqua"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Open Protocol",
      description: "Completely open-source with transparent standards and community-driven development",
      color: "from-ocean-blue to-seafoam"
    }
  ]

  const useCases = [
    {
      id: 'documents',
      title: 'Document Verification',
      description: 'Sign and verify PDFs, contracts, and legal documents with cryptographic certainty',
      features: ['Digital signatures', 'Timestamp verification', 'Legal compliance'],
      demo: {
        title: 'Try PDF Signing',
        description: 'Experience secure document verification',
        action: 'Launch Demo'
      }
    },
    {
      id: 'claims',
      title: 'Claims Attestation',
      description: 'Verify identity claims and credentials without revealing sensitive information',
      features: ['Zero-knowledge proofs', 'Privacy-first design', 'Cross-platform'],
      demo: {
        title: 'Test Claims',
        description: 'Explore identity verification',
        action: 'Try Now'
      }
    },
    {
      id: 'files',
      title: 'File Integrity',
      description: 'Ensure software and file integrity through cryptographic hash verification',
      features: ['Hash verification', 'Batch processing', 'Automated monitoring'],
      demo: {
        title: 'Verify Files',
        description: 'Check file integrity instantly',
        action: 'Start Testing'
      }
    }
  ]

  const socialProof = {
    githubStars: 1250,
    contributors: 47,
    downloads: '15K+',
    audits: 3
  }

  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <Hero />

        {/* Value Proposition Section */}
        <section className="py-24 bg-gradient-to-b from-transparent to-ocean-blue/10" id="features">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              {...viewAnimation}
              variants={slideUpVariants}
            >
              <Badge variant="secondary" size="lg" className="mb-4">
                Why Choose Aqua
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Built for <span className="text-bright-aqua">Digital Trust</span>
              </h2>
              <p className="text-xl text-white-foam/80 max-w-3xl mx-auto">
                Experience the future of data verification with our privacy-preserving cryptographic protocol
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              {...viewAnimation}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {valueProps.map((prop, index) => (
                <motion.div key={prop.title} variants={itemVariants}>
                  <Card hover glass ripple className="h-full">
                    <div className={cn(
                      "w-16 h-16 rounded-2xl bg-gradient-to-br flex items-center justify-center mb-6 text-white-foam",
                      prop.color
                    )}>
                      {prop.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{prop.title}</h3>
                    <p className="text-white-foam/80 leading-relaxed">
                      {prop.description}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Cryptography vs Blockchain Section */}
        <section className="py-24 bg-ocean-blue/10" id="comparison">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              {...viewAnimation}
              variants={slideUpVariants}
            >
              <Badge variant="secondary" size="lg" className="mb-4">
                Clear Distinction
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-primary-aqua">Cryptography</span> vs Blockchain
              </h2>
              <p className="text-xl text-white-foam/80 max-w-3xl mx-auto">
                Understanding the difference between cryptographic verification and distributed ledgers
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto"
              {...viewAnimation}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Traditional Blockchain */}
              <motion.div variants={itemVariants}>
                <Card hover className="h-full">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mr-4">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-amber-400">Blockchain Currency</h3>
                  </div>
                  <ul className="space-y-3">
                    {[
                      "Financial transactions and value transfer",
                      "Public ledger with transparent records",
                      "Mining and consensus mechanisms",
                      "Cryptocurrency focus",
                      "Energy-intensive validation"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-white-foam/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>

              {/* Aqua Cryptographic Protocol */}
              <motion.div variants={itemVariants}>
                <Card hover className="h-full">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-aqua to-bright-aqua rounded-xl flex items-center justify-center mr-4">
                      <Lock className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary-aqua">Aqua Protocol</h3>
                  </div>
                  <ul className="space-y-3">
                    {[
                      "Data verification and integrity",
                      "Privacy-preserving with zero-knowledge proofs",
                      "Direct cryptographic validation",
                      "Document and file verification",
                      "Energy-efficient verification"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-primary-aqua rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-white-foam/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-24 bg-gradient-to-b from-transparent to-ocean-blue/10" id="use-cases">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              {...viewAnimation}
              variants={slideUpVariants}
            >
              <Badge variant="secondary" size="lg" className="mb-4">
                Real-World Applications
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Versatile <span className="text-bright-aqua">Use Cases</span>
              </h2>
              <p className="text-xl text-white-foam/80 max-w-3xl mx-auto">
                From document verification to identity claims, Aqua Protocol adapts to your needs
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 lg:grid-cols-3 gap-8"
              {...viewAnimation}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {useCases.map((useCase, index) => (
                <motion.div key={useCase.id} variants={itemVariants}>
                  <Card hover glass className="h-full">
                    <h3 className="text-2xl font-bold mb-4 text-primary-aqua">
                      {useCase.title}
                    </h3>
                    <p className="text-white-foam/80 mb-6">
                      {useCase.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-bright-aqua">Key Features:</h4>
                      <ul className="space-y-2">
                        {useCase.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-white-foam/80">
                            <div className="w-1.5 h-1.5 bg-primary-aqua rounded-full mr-3" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {useCase.demo && (
                      <Button
                        variant="outline"
                        size="sm"
                        fullWidth
                        onClick={() => window.open('https://aquafier.inblock.io', '_blank')}
                      >
                        {useCase.demo.action}
                      </Button>
                    )}
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Trust Indicators Section */}
        <section className="py-24 bg-ocean-blue/10" id="trust">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              {...viewAnimation}
              variants={slideUpVariants}
            >
              <Badge variant="secondary" size="lg" className="mb-4">
                Trusted by Developers
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Growing <span className="text-bright-aqua">Community</span>
              </h2>
              <p className="text-xl text-white-foam/80 max-w-3xl mx-auto">
                Join thousands of developers using Aqua Protocol for secure data verification
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto"
              {...viewAnimation}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {[
                { label: 'GitHub Stars', value: socialProof.githubStars, suffix: '+' },
                { label: 'Contributors', value: socialProof.contributors, suffix: '' },
                { label: 'Downloads', value: socialProof.downloads, suffix: '' },
                { label: 'Security Audits', value: socialProof.audits, suffix: '+' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  className="text-center"
                >
                  <div className="text-3xl lg:text-4xl font-bold text-bright-aqua mb-2">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-white-foam/80 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 fluid-gradient-secondary text-center" id="cta">
          <div className="container mx-auto px-6">
            <motion.div
              {...viewAnimation}
              variants={slideUpVariants}
            >
              <Badge variant="secondary" size="lg" className="mb-6">
                Ready to Get Started?
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Experience <span className="text-bright-aqua">Aqua Protocol</span> Today
              </h2>
              <p className="text-xl text-white-foam/80 max-w-2xl mx-auto mb-10">
                Try our interactive demo and see the power of cryptographic data verification in action
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="liquid"
                  size="xl"
                  liquid
                  onClick={() => window.open('https://aquafier.inblock.io', '_blank')}
                >
                  Launch Aquafier Demo
                </Button>

                <Button
                  variant="outline"
                  size="xl"
                  onClick={() => window.open('https://github.com/Oansa/Aqua', '_blank')}
                  className="border-white-foam text-white-foam hover:bg-white-foam hover:text-deep-teal"
                >
                  View on GitHub
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}