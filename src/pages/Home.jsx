import Hero from '../components/section/Hero';

export default function Home() {
  return (
    <div>
      <Hero />
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">Nuestros cursos</h2>
        <p className="text-blue-700">Explora cursos en tecnología, marketing digital y emprendimiento.</p>
      </section>
    </div>
  );
}
