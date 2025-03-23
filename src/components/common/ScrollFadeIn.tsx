import { motion, TargetAndTransition, VariantLabels } from "framer-motion";
import { useInView } from "react-intersection-observer";

type InitialValueType = VariantLabels | TargetAndTransition;

const ScrollFadeIn = ({
  initialValue,
  children,
}: {
  initialValue: InitialValueType;
  children: React.ReactNode;
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Run animation only once
    threshold: 0.2, // Trigger when 20% of the component is visible
  });

  return (
    <motion.div
      ref={ref}
      initial={initialValue} // Start from 100px below
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}} // Move to normal position
      transition={{ duration: 0.8, ease: "easeOut" }} // Smooth bottom-to-top effect
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

export default ScrollFadeIn;
