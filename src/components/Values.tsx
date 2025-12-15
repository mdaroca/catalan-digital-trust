import { motion } from "framer-motion";
import { Eye, Flag, Languages, Heart, Code } from "lucide-react";

const values = [
  {
    icon: Eye,
    title: "Privacitat",
    description: "Defensem el dret fonamental a que les dades personals siguin respectades i protegides.",
  },
  {
    icon: Flag,
    title: "Sobirania Tecnològica",
    description: "Els territoris i les persones han de controlar la seva tecnologia, no al revés.",
  },
  {
    icon: Languages,
    title: "Drets Lingüístics",
    description: "El català té dret a existir en l'espai digital amb la mateixa dignitat que altres llengües.",
  },
  {
    icon: Heart,
    title: "Transformació Social",
    description: "La tecnologia ha de servir a les persones i a la sostenibilitat, no a interessos corporatius.",
  },
  {
    icon: Code,
    title: "Software Lliure",
    description: "Transparència, llibertat i control són fonamentals; el codi obert és el camí.",
  },
];

const Values = () => {
  return (
    <section className="py-24 bg-muted/30" id="valors">
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
            Els nostres principis
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mt-4 mb-6">
            Dimensions Transversals
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Cinc pilars que travessen tota la nostra acció i defineixen 
            el nostre compromís amb la societat.
          </p>
        </motion.div>

        {/* Values */}
        <div className="grid md:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group text-center p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-glow transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <value.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-serif text-lg font-semibold mb-2">
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
