import type { Motion } from "../types/common"
import { motion} from 'framer-motion';

const Motion = ({children, ...props } : Motion) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      {...props}

    >
        {children}
    </motion.div>
  )
}

export default Motion