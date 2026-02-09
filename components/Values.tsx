"use client";

import { motion } from "framer-motion";
import { Eye, Flag, Languages, Heart, Code } from "lucide-react";

const values = [
  {
    icon: Eye,
    title: "Privacitat",
    description: "Proteccio de les dades personals i el dret a la intimitat en l'entorn digital.",
  },
  {
    icon: Flag,
    title: "Sobirania Tecnologica",
    description: "Control sobre les eines i infraestructures digitals que utilitzem.",
  },
  {
    icon: Languages,
    title: "Catala",
    description: "Compromis amb la normalitzacio linguistica en l'ambit tecnologic.",
  },
  {
    icon: Heart,
    title: "Tecnologia Etica",
    description: "Solucions tecnologiques al servei de les persones i la societat.",
  },
  {
    icon: Code,
    title: "Codi Obert",
    description: "Transparencia, auditabilitat i col\u00b7laboracio en el desenvolupament de software.",
  },
];

const Values = () => {
  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden" id="valors">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/3 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary text-sm font-medium tracking-wider uppercase px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
            Els nostres principis
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mt-4 mb-6">
            Valors fonamentals
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {"Els principis que guien la nostra feina i el nostre compromis amb la societat."}
          </p>
        </motion.div>

        {/* Values */}
        <div className="grid md:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group text-center p-6 rounded-2xl glass glass-hover border-gradient relative"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 group-hover:shadow-glow transition-all duration-300">
                <value.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-serif text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {value.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
