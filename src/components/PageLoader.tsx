import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";

const PageLoader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] bg-background flex flex-col"
    >
      {/* Navigation skeleton */}
      <div className="h-16 border-b border-border px-4 flex items-center justify-between">
        <Skeleton className="h-8 w-12" />
        <div className="hidden md:flex gap-6">
          {[1, 2, 3, 4, 5].map((i) => (
            <Skeleton key={i} className="h-4 w-16" />
          ))}
        </div>
        <Skeleton className="h-9 w-20" />
      </div>

      {/* Hero skeleton */}
      <div className="flex-1 flex items-center justify-center">
        <div className="container px-4 flex flex-col items-center gap-6">
          {/* Profile image */}
          <Skeleton className="w-32 h-32 rounded-full" />
          
          {/* Name */}
          <Skeleton className="h-12 w-64" />
          
          {/* Title */}
          <Skeleton className="h-6 w-96 max-w-full" />
          
          {/* Description */}
          <div className="flex flex-col items-center gap-2 w-full max-w-lg">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
          
          {/* Buttons */}
          <div className="flex gap-4 mt-4">
            <Skeleton className="h-12 w-36" />
            <Skeleton className="h-12 w-36" />
            <Skeleton className="h-12 w-36" />
          </div>
        </div>
      </div>

      {/* Animated loading indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-1">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-2 h-2 rounded-full bg-primary"
            animate={{
              y: [0, -8, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              delay: i * 0.15,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default PageLoader;
