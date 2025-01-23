import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

type Props = {
    children: React.ReactNode;
    className?: string;
    delay?: number;
};

export default function Slide({ children, delay, className }: Props) {
    const ref = useRef(null);
    const isInView = useInView(ref);
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [isInView, controls]);

    return (
        <div className={className}>
            {" "}
            {/* Added wrapper div */}
            <motion.div
                ref={ref}
                variants={{
                    hidden: { opacity: 0, translateY: 50 },
                    visible: { opacity: 1, translateY: 0 },
                }}
                transition={{
                    type: "spring",
                    duration: 0.2,
                    damping: 4,
                    delay: delay,
                    stiffness: 100,
                }}
                style={{
                    visibility: isInView ? "visible" : "hidden",
                }}
                initial="hidden"
                animate={controls}
                className={!isInView ? "hidden-content" : ""}
            >
                {children}
            </motion.div>
        </div>
    );
}
