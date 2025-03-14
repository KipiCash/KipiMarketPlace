import { TypewriterEffect } from "@/components/typewriter-effect"
import { RegistrationForm } from "@/components/registration-form"
import { FeatureCard } from "@/components/feature-card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { ArrowRight, CheckCircle, Globe, Wallet, Users } from "lucide-react"
import Link from "next/link"

export default function Home() {
  const words = [
    { text: "Compra y vende" },
    { text: "Facil, Rapido y seguro" },
    { text: "Con Kipi Market Place" },
  ]

  const features = [
    {
      title: "Paga con tus monedas WDL",
      description: "Realiza compras directamente con tus monedas desde la propia WorldApp, sin necesidad de conversión.",
      icon: <Wallet className="h-10 w-10 text-primary" />,
    },
    {
      title: "Comunidad Verificada",
      description: "Únase a un mercado confiable con más de 1 millón de usuarios verificados, lo que garantiza transacciones seguras.",
      icon: <CheckCircle className="h-10 w-10 text-primary" />,
    },
    {
      title: "Mercado Global",
      description: "Acceda a una amplia gama de productos y servicios de diferentes empresas, todo en una sola plataforma.",
      icon: <Globe className="h-10 w-10 text-primary" />,
    },
    {
      title: "Oportunidades de negocio",
      description: "Llega a mas clientes verificados y aumenta tus ventas aceptando un nuevo medio de pago.",
      icon: <Users className="h-10 w-10 text-primary" />,
    },
  ]

  return (
    <main className="flex min-h-screen flex-col">
      <Header />

      {/* Hero Section */}
      <section className="w-full py-12 md:py-20 lg:py-24 bg-gradient-to-b from-background to-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Una nueva forma de comprar y vender en nuestra plataforma de Kipi Market Place
                </h1>
                <div className="h-16 md:h-24">
                  <TypewriterEffect words={words} className="text-lg md:text-xl text-muted-foreground" />
                </div>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="#register"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  Quiero saber mas
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="flex justify-center lg:justify-center">
              <div className="relative h-[350px] w-[350px] sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px]">
                <Image
                  src="/worldapp.png?height=500&width=500"
                  alt="Worldcoin Platform"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                ¿Por qué elegir Kipi Market Place?
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Conectamos clientes verificados con empresas confiables en un plataforma integrada impulsado por la WorldApp.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12 pt-8 md:pt-12">
            {features.map((feature, index) => (
              <FeatureCard key={index} title={feature.title} description={feature.description} icon={feature.icon} />
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition Sections */}
      <section className="w-full py-12 md:py-24 lg:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Para clientes</h2>
                <p className="text-muted-foreground md:text-xl">
                  Únete a una comunidad exclusiva de más de un millón de usuarios verificados. Empieza a recibir pagos de Worldcoin y disfruta de la flexibilidad de gastarlos en productos y servicios que realmente te apasionan. ¡Es el momento perfecto para comenzar a ganar y aprovechar tus recompensas al máximo!
                </p>
                <ul className="space-y-2 pt-4">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                    <span>Compra facil sin cambiar tu moneda</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                    <span>Compra seguro en negocios  verificados</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                    <span>Encuentra todo en un solo lugar</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex justify-center lg:justify-center">
              <div className="relative h-[300px] w-[300px] sm:h-[350px] sm:w-[350px]">
                <Image
                  src="/cliente.jpg?height=350&width=350"
                  alt="Compra desde tu celular"
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex justify-center lg:justify-center order-last lg:order-first">
              <div className="relative h-[500px] w-[500px] sm:h-[400px] sm:w-[400px]">
                <Image
                  src="/negocios.png?height=350&width=350"
                  alt="Mejora ventas"
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Para negocios</h2>
                <p className="text-muted-foreground md:text-xl">
                  Impulsa tu negocio uniéndote a una red global de más de un millón de usuarios verificados. Con Worldcoin, podrás recibir pagos de manera rápida y segura, y ofrecer a tus clientes una forma innovadora de realizar transacciones. ¡Aprovecha esta oportunidad para expandir tu alcance y mejorar la experiencia de compra de tus clientes!
                </p>
                <ul className="space-y-2 pt-4">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                    <span>Aumenta tus ventas</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                    <span>Haz crecer tu marca</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                    <span>Vende facil</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="register" className="w-full py-12 md:py-24 lg:py-16 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">¡Quiero usar la plataforma!</h2>
                <p className="md:text-xl">
                  Regístrate ahora para contactarte y puedas empezar a comprar y vender en Kipi Market Place. Conecta con usuarios y empresas verificadas en nuestro y crece.
                </p>
              </div>
            </div>
            <div className="bg-background text-foreground rounded-lg p-6 shadow-lg">
              <RegistrationForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

