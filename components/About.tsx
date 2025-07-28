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
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Improved Background Elements for better transition */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-gray-100/20 rounded-full opacity-40"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gray-50/30 rounded-full opacity-40"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-96 bg-gradient-to-r from-gray-50/10 to-gray-100/10 rounded-full opacity-30"></div>
      </div>
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div 
          className="absolute inset-0 bg-repeat"
          style={{ 
            backgroundImage: `url(${aboutImages.patternTexture})`,
            backgroundSize: '60px 60px'
          }}
        ></div>
      </div>
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl lg:text-6xl font-display font-bold text-gray-900 mb-6"
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
                className="group text-center p-6 rounded-2xl hover:bg-white/80 hover:shadow-xl transition-all duration-500 backdrop-blur-sm border border-gray-100/50 hover:border-primary-200/50"
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto bg-white rounded-3xl flex items-center justify-center group-hover:bg-primary-50 transition-all duration-300 shadow-lg border border-gray-100 group-hover:border-primary-200 group-hover:shadow-xl">
                    <value.icon className="w-10 h-10 text-primary-600 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                <h3 className="text-xl font-display font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
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
            <h3 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-6">
              Meet Our Creative Minds
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our diverse team of strategists, designers, and developers brings together 
              decades of experience in crafting digital experiences that drive results and inspire audiences.
            </p>
            
            {/* Stats Section */}
            <motion.div 
              className="grid grid-cols-3 gap-6 mb-8 p-6 bg-white/60 rounded-2xl backdrop-blur-sm border border-gray-100"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={teamInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600 mb-1">50+</div>
                <div className="text-sm text-gray-600">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600 mb-1">5+</div>
                <div className="text-sm text-gray-600">Years</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600 mb-1">12+</div>
                <div className="text-sm text-gray-600">Team</div>
              </div>
            </motion.div>
            
            {/* Team Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6">
              {aboutImages.team.map((member, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4 p-4 rounded-xl hover:bg-white/80 transition-all duration-300 border border-transparent hover:border-gray-100 hover:shadow-md backdrop-blur-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={teamInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.8 + index * 0.1 }}
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
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
              <img
                src={aboutImages.teamPhoto}
                alt="Rida Digital Team"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 to-transparent"></div>
              
              {/* Overlay text */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 border border-gray-200/50">
                  <p className="text-sm font-medium text-gray-900">Creative Excellence</p>
                  <p className="text-xs text-gray-600 mt-1">Building digital experiences that matter</p>
                </div>
              </div>
            </div>
            
            {/* Floating Elements with improved design */}
            <motion.div
              className="absolute -top-8 -right-8 w-24 h-24 bg-primary-100/80 rounded-3xl opacity-80 backdrop-blur-sm border border-primary-200/50"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -bottom-8 -left-8 w-20 h-20 bg-accent-100/80 rounded-2xl opacity-80 backdrop-blur-sm border border-accent-200/50"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
