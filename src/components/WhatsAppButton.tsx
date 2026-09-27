/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from "react";
import { motion, useDragControls } from "motion/react";

export default function WhatsAppButton() {
  const messageText =
    "Olá BVolt! Vi o site e gostaria de fazer minha matrícula para treinar hoje!";
  const encodedMessage = encodeURIComponent(messageText);
  const whatsappUrl = `https://wa.me/5521996408986?text=${encodedMessage}`;

  const dragControls = useDragControls();
  const wasDragged = useRef(false);
  const [isDragging, setIsDragging] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    if (wasDragged.current) {
      e.preventDefault();
      wasDragged.current = false;
    }
  };

  return (
    <motion.a
      id="whatsapp-floating-btn"
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      drag
      dragControls={dragControls}
      dragMomentum={false}
      dragElastic={0.1}
      onDragStart={() => {
        setIsDragging(true);
        wasDragged.current = true;
      }}
      onDragEnd={() => {
        setIsDragging(false);
        setTimeout(() => {
          wasDragged.current = false;
        }, 200);
      }}
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 select-none touch-none"
      style={{ cursor: isDragging ? "grabbing" : "grab" }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: isDragging ? 1.15 : 1,
        opacity: 1,
      }}
      transition={{ opacity: { duration: 0.4 } }}
      title="Fale Conosco no WhatsApp"
      aria-label="Abrir WhatsApp"
    >
      {/* Pulse rings */}
      {!isDragging && (
        <>
          <motion.span
            className="absolute inset-0 rounded-full bg-green-400"
            animate={{ scale: [1, 1.6], opacity: [0.5, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeOut" }}
          />
          <motion.span
            className="absolute inset-0 rounded-full bg-green-400"
            animate={{ scale: [1, 1.35], opacity: [0.4, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1.8,
              ease: "easeOut",
              delay: 0.4,
            }}
          />
        </>
      )}

      {/* Button circle */}
      <motion.div
        className="relative flex items-center justify-center w-14 h-14 rounded-full shadow-[0_0_20px_rgba(34,197,94,0.6)]"
        style={{
          background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
        }}
        whileHover={!isDragging ? { scale: 1.1 } : {}}
      >
        {/* Official WhatsApp SVG logo */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="30"
          height="30"
          fill="white"
          aria-hidden="true"
        >
          <path d="M16.004 0C7.164 0 0 7.164 0 16.004c0 2.824.74 5.476 2.032 7.788L.044 32l8.396-2.2A15.94 15.94 0 0 0 16.004 32C24.836 32 32 24.836 32 16.004 32 7.164 24.836 0 16.004 0zm0 29.268a13.21 13.21 0 0 1-6.736-1.844l-.484-.288-5.004 1.312 1.332-4.876-.316-.5A13.22 13.22 0 0 1 2.74 16.004c0-7.3 5.964-13.264 13.264-13.264s13.264 5.964 13.264 13.264-5.964 13.264-13.264 13.264zm7.268-9.924c-.396-.2-2.348-1.16-2.712-1.292-.364-.132-.628-.2-.892.2-.264.396-1.024 1.292-1.256 1.556-.232.264-.464.296-.86.1-.396-.2-1.672-.616-3.184-1.964-1.176-1.048-1.972-2.344-2.204-2.74-.232-.396-.024-.612.176-.808.18-.176.396-.464.596-.696.2-.232.264-.396.396-.66.132-.264.068-.496-.032-.696-.1-.2-.892-2.152-1.224-2.944-.32-.776-.648-.668-.892-.68-.232-.012-.496-.016-.76-.016-.264 0-.692.1-1.056.496-.364.396-1.388 1.356-1.388 3.308 0 1.952 1.42 3.836 1.62 4.1.2.264 2.796 4.268 6.776 5.984.948.408 1.688.652 2.264.836.952.3 1.82.26 2.504.16.764-.116 2.348-.96 2.68-1.888.332-.928.332-1.724.232-1.888-.1-.164-.364-.264-.76-.464z" />
        </svg>
      </motion.div>
    </motion.a>
  );
}
