import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section className="py-24 bg-muted/30" id="contacte">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Icon */}
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-8">
            <Mail className="w-8 h-8 text-primary" />
          </div>

          {/* Content */}
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Vols parlar?
          </h2>
          <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
            Si tens dubtes o creus que et podem ajudar, escriu-nos. 
            Sense compromís, ja mirarem com ho fem.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" className="group">
              Contacta'ns
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Additional info */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm text-muted-foreground mt-8"
          >
            Resposta en menys de 48 hores · Consulta inicial gratuïta
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
