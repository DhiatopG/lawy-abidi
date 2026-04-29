export default function BlogPost({ params }: { params: { slug: string } }) {
  return (
    <div className="container mx-auto px-6 py-32">
      <h1 className="text-4xl font-display font-bold text-primary mb-8">Article: {params.slug}</h1>
      <p className="text-dark/60 text-lg">Le contenu de cet article est en cours de rédaction.</p>
    </div>
  );
}
