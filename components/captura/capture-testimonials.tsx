import { TestimonialVideo } from "@/components/landing/testimonial-video";

const VIDEOS = [
  {
    src: "/images/depoimentos/depoimento-1.mp4",
    poster: "/images/depoimentos/depoimento-1-poster.jpg",
  },
  {
    src: "/images/depoimentos/depoimento-2.mp4",
    poster: "/images/depoimentos/depoimento-2-poster.jpg",
  },
  {
    src: "/images/depoimentos/depoimento-4.mp4",
    poster: "/images/depoimentos/depoimento-4-poster.jpg",
  },
];

// Substitui a seção de "print" (foto do parceiro) da referência do Manus por
// depoimentos reais em vídeo — os mesmos 2 do 2º slide do carrossel principal
// + o novo depoimento-gibbous, todos 9:16.
export function CaptureTestimonials() {
  return (
    <div className="w-full rounded-3xl border border-border bg-card p-3 shadow-lg">
      <div className="grid grid-cols-3 gap-2">
        {VIDEOS.map((item, i) => (
          <TestimonialVideo
            key={item.src}
            src={item.src}
            poster={item.poster}
            aspect="9 / 16"
            label={`Depoimento de cliente ${i + 1}`}
            className="w-full"
          />
        ))}
      </div>
    </div>
  );
}
