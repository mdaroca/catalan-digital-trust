"use client";

import { motion } from "framer-motion";
import { BookOpen, Shield, Scale, Code } from "lucide-react";

const services = [
  {
    icon: BookOpen,
    title: "Divulgacio i Formacio",
    description:
      "Cursos i formacio especialitzada a mida per a equips d'informatica i seguretat d'empreses, institucions, administracions i individus. Dissenyem els cursos segons les vostres necessitats.",
    features: ["Cursos a mida", "A demanda", "En catala"],
  },
  {
    icon: Shield,
    title: "Ciberseguretat",
    description:
      "Auditories de seguretat, hacking etic, plans de seguretat digital i manteniment d'equips. Elaborem directrius per al tractament segur de la informacio i dades.",
    features: ["Hacking etic", "Plans de seguretat", "Manteniment"],
  },
  {
    icon: Scale,
    title: "Assessorament Juridic",
    description:
      "Assessorament legal a persones i col\u00b7lectius sobre drets linguistics, tractament de dades i compliment normatiu dins els marcs legals espanyol, frances i andorra.",
    features: ["Drets linguistics", "Proteccio de dades", "Compliment normatiu"],
  },
  {
    icon: Code,
    title: "Desenvolupament de Software",
    description:
      "Desenvolupament d'aplicacions i software a mida, sempre amb codi obert, respectuos amb la privacitat i els drets linguistics.",
    features: ["Aplicacions a mida", "Codi obert", "Privacitat per disseny"],
  },
];

const Services = () => {
  return (
    <section className="py-24 bg-background" id="serveis">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            <span className="text-gradient">Ciberseguretat</span><br />
            <span className="text-gradient">Privacitat</span><br />
            <span className="text-foreground">Auditories</span><br />
            <span className="text-foreground">Formacio i Drets.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-6">
            {"Formacio, seguretat informatica, assessorament legal i desenvolupament."}
          </p>
          <div className="inline-flex flex-col sm:flex-row items-center gap-2 px-6 py-3 rounded-xl bg-muted/50 border border-border">
            <span className="text-sm text-primary font-medium">{"Ambit: Paisos Catalans"}</span>
            <span className="hidden sm:inline text-muted-foreground">{"\u00b7"}</span>
            <span className="text-sm text-muted-foreground text-center">{"Marcs juridics espanyol, frances i andorra"}</span>
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            {"Atencio presencial a Barcelona, Valencia, Palma, Perpinya i Andorra la Vella"}
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl glass glass-hover border-gradient overflow-hidden"
            >
              {/* Background glow on hover */}
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-primary/0 blur-3xl group-hover:bg-primary/10 transition-all duration-700" />
              
              {/* Icon */}
              <div className="relative w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:shadow-glow transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="relative font-serif text-2xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="relative text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="relative flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="text-xs px-3 py-1.5 rounded-full bg-primary/5 text-primary/80 border border-primary/10 group-hover:border-primary/20 transition-colors"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
