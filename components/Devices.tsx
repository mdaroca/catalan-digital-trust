"use client";

import { motion } from "framer-motion";
import { Smartphone, Monitor, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const devices = [
  {
    icon: Smartphone,
    name: "Smartphones amb GrapheneOS",
    description:
      "Telefons intel\u00b7ligents amb un sistema operatiu dissenyat exclusivament per maximitzar privacitat i seguretat.",
    features: [
      "Privacitat per defecte",
      "Sense Google Services obligatoris",
      "Actualitzacions de seguretat",
      "Control total de permisos",
    ],
  },
  {
    icon: Monitor,
    name: "Ordinadors Segurs",
    description:
      "Equipaments preconfigurats amb sistemes operatius i programari que reforcen la seguretat, privacitat i drets linguistics.",
    features: [
      "Linux preinstal\u00b7lat",
      "Programari lliure",
      "Configuracio segura",
      "Suport en catala",
    ],
  },
];

const Devices = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden" id="dispositius">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/3 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent/3 blur-3xl" />
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
            Equipament
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mt-4 mb-6">
            Dispositius segurs i configurats
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {"Subministrem i configurem mobils i ordinadors optimitzats per a la privacitat i la seguretat."}
          </p>
        </motion.div>

        {/* Devices grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {devices.map((device, index) => (
            <motion.div
              key={device.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative p-8 rounded-2xl glass glass-hover border-gradient overflow-hidden group"
            >
              {/* Background glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-primary/0 blur-3xl group-hover:bg-primary/10 transition-all duration-700" />

              {/* Icon */}
              <div className="relative w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:shadow-glow transition-all duration-300">
                <device.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-serif text-2xl font-semibold mb-3 relative group-hover:text-primary transition-colors">
                {device.name}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed relative">
                {device.description}
              </p>

              {/* Features */}
              <ul className="flex flex-col gap-3 relative">
                {device.features.map((feature, featureIndex) => (
                  <motion.li 
                    key={feature} 
                    className="flex items-center gap-3 text-sm"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.4 + featureIndex * 0.1 }}
                  >
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-foreground/80">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" className="glass-hover border-primary/20 hover:border-primary/40">
            {"Mes informacio sobre dispositius"}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Devices;
