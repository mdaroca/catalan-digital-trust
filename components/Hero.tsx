"use client";

import { motion } from "framer-motion";
import { Shield, Terminal, Lock, Wifi } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Construction banner */}
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute top-0 left-0 right-0 bg-primary/90 text-primary-foreground py-2 px-4 text-center text-sm z-20 backdrop-blur-sm"
      >
        Nou espai web en construccio, disculpeu els errors i molesties
      </motion.div>

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main gradient orbs */}
        <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl animate-pulse" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" 
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                              linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
        
        {/* Floating icons */}
        <motion.div 
          className="absolute top-1/4 right-1/4 text-primary/10"
          animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <Terminal className="w-24 h-24" />
        </motion.div>
        <motion.div 
          className="absolute bottom-1/3 left-1/5 text-primary/10"
          animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <Lock className="w-16 h-16" />
        </motion.div>
        <motion.div 
          className="absolute top-1/3 left-1/4 text-primary/5"
          animate={{ y: [-5, 15, -5], rotate: [0, 10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          <Wifi className="w-20 h-20" />
        </motion.div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mr-auto text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-gradient mb-8"
          >
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">{"Privacitat \u00b7 Seguretat \u00b7 Drets Digitals"}</span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          >
            <span className="text-gradient">Seguretat digital</span><br />
            <span className="text-gradient">Privacitat i drets</span><br />
            <span className="text-foreground">{"Creacio a mida d'aplicacions multiplataforma"}</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-4 max-w-2xl"
          >
            Assessorament, formacio i serveis a equips professionals, entitats i individus.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-lg text-primary font-medium mb-10"
          >
            {"En catala i al servei de la transformacio social"}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-start"
          >
            <Button variant="hero" size="xl" className="group relative overflow-hidden" asChild>
              <a href="#serveis">
                <span className="relative z-10">Descobrir serveis</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </Button>
            <Button variant="hero-outline" size="xl" asChild className="glass-hover">
              <a href="#contacte">{"Contacta'ns"}</a>
            </Button>
          </motion.div>

        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
