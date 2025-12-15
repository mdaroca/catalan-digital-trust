import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Shield, Scale, Code, Wrench } from "lucide-react";

const services = [
  {
    icon: BookOpen,
    title: "Divulgació i Formació",
    description:
      "Cursos i formació especialitzada a mida per a equips d'informàtica i seguretat d'empreses, institucions, administracions i individus. Dissenyem els cursos segons les vostres necessitats.",
    features: ["Cursos a mida", "A demanda", "En català"],
  },
  {
    icon: Shield,
    title: "Ciberseguretat",
    description:
      "Auditories de seguretat, hacking ètic, plans de seguretat digital i manteniment d'equips. Elaborem directrius per al tractament segur de la informació i dades.",
    features: ["Hacking ètic", "Plans de seguretat", "Manteniment"],
  },
  {
    icon: Scale,
    title: "Assessorament Jurídic",
    description:
      "Assessorament legal a persones i col·lectius sobre drets lingüístics, tractament de dades i compliment normatiu dins els marcs legals espanyol, francès i andorrà.",
    features: ["Drets lingüístics", "Protecció de dades", "Compliment normatiu"],
  },
  {
    icon: Code,
    title: "Desenvolupament de Software",
    description:
      "Desenvolupament d'aplicacions i software a mida, sempre amb codi obert, respectuós amb la privacitat i els drets lingüístics.",
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
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Què oferim
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mt-4 mb-6">
            Serveis Especialitzats
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Una aproximació integral a la seguretat digital que combina educació, 
            assessorament tècnic i suport legal.
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
              className="group relative p-8 rounded-2xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-serif text-2xl font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground"
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
