import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

type Props = {
    children: React.ReactNode;
    className?: string;
    delay?: number;
};

export default function Slide({ children, delay, className }: Props) {
    const ref = useRef(null);
    const isInView = useInView(ref); // Removed `{ once: true }` to allow continuous triggering
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        } else {
            controls.start("hidden"); // Return to hidden state when out of view
        }
    }, [isInView, controls]);

    return (
        <motion.div
            ref={ref}
            variants={{
                hidden: { opacity: 0, translateX: 90 },
                visible: { opacity: 1, translateX: 0 },
            }}
            transition={{
                type: "spring",
                duration: 0.2,
                damping: 4,
                delay: delay,
                stiffness: 100,
            }}
            initial="hidden"
            animate={controls}
            className={className}
        >
            {children}
        </motion.div>
    );
}
