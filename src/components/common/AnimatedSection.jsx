import { motion } from 'framer-motion'
import { fadeUp } from '../../utils/motion'

const MotionSection = motion.section

function AnimatedSection({ className = '', children }) {
  return (
    <MotionSection
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={fadeUp}
    >
      {children}
    </MotionSection>
  )
}

export default AnimatedSection
