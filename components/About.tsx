'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  LightBulbIcon, 
  HeartIcon, 
  RocketLaunchIcon,
  UserGroupIcon 
} from '@heroicons/react/24/outline'
import { aboutImages } from '@/lib/mediaContent'

const values = [
  {
    icon: LightBulbIcon,
    title: 'Innovation First',
    description: 'We push boundaries and challenge conventions to create truly unique digital experiences.',
  },
  {
    icon: HeartIcon,
    title: 'Human-Centered',
    description: 'Every solution we craft puts people first, creating meaningful connections between brands and audiences.',
  },
  {
    icon: RocketLaunchIcon,
    title: 'Growth Driven',
    description: 'Our strategies are designed to deliver measurable results and sustainable business growth.',
  },
  {
    icon: UserGroupIcon,
    title: 'Collaborative Spirit',
    description: 'We believe the best work comes from true partnerships with our clients and team members.',
  },
]

export default function About() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [valuesRef, valuesInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [teamRef, teamInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Add ID for smooth transitions */}
      <div id="about" className="absolute top-0 left-0 w-full h-1"></div>
      
      {/* Background Pattern with opacity control */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0 bg-repeat opacity-10"
          style={{ backgroundImage: `url(${aboutImages.patternTexture})` }}
        ></div>
      </div>
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="heading-primary mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            About <span className="text-primary-600">Rida Digital</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We are more than a digital agency—we are creative partners who transform 
            visionary ideas into powerful brand experiences that resonate, engage, and inspire lasting connections.
          </motion.p>
        </motion.div>

        {/* Values Section */}
        <motion.div
          ref={valuesRef}
          className="mb-20"
          initial={{ opacity: 0 }}
          animate={valuesInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="group text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 mx-auto bg-primary-100 rounded-2xl flex items-center justify-center group-hover:bg-primary-200 transition-colors duration-300">
                    <value.icon className="w-8 h-8 text-primary-600" />
                  </div>
                </div>
                <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          ref={teamRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          initial={{ opacity: 0 }}
          animate={teamInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          {/* Team Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={teamInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <h3 className="text-3xl font-display font-bold text-gray-900 mb-6">
              Meet Our Creative Minds
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our diverse team of strategists, designers, and developers brings together 
              decades of experience in crafting digital experiences that drive results and inspire audiences.
            </p>
            
            {/* Team Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6">
              {aboutImages.team.map((member, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={teamInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{member.name}</h4>
                    <p className="text-sm text-primary-600">{member.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Team Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={teamInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={aboutImages.teamPhoto}
                alt="Rida Digital Team"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent"></div>
            </div>
            
            {/* Floating Elements */}
            <motion.div
              className="absolute -top-6 -right-6 w-24 h-24 bg-primary-100 rounded-2xl opacity-60"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -bottom-6 -left-6 w-16 h-16 bg-accent-200 rounded-xl opacity-80"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
