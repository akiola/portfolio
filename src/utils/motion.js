export const textVariant = () => ({
    hidden: { opacity: 0, y: -50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: 0.5,
      },
    },
  });
  
  export const fadeIn = (direction = "up", type = "spring", delay = 0, duration = 0.75) => {
    return {
      hidden: {
        y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
        x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
        opacity: 0,
      },
      show: {
        y: 0,
        x: 0,
        opacity: 1,
        transition: {
          type,
          delay,
          duration,
          ease: "easeOut",
        },
      },
    };
  };
  