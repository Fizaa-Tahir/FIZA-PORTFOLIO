<motion.div
  animate={{ rotateX: tilt.y, rotateY: tilt.x }}
  transition={{ type: "spring", stiffness: 120, damping: 14 }}
  className="relative overflow-hidden border border-border-pink-strong shadow-[0_0_60px_rgba(255,0,122,0.18)]"
  style={{
    transformStyle: "preserve-3d",
    borderRadius: "48% 52% 55% 45% / 45% 48% 52% 55%",
  }}
>
