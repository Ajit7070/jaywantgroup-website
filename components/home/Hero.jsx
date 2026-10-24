import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero-section" aria-label="Jaywant Group">
      <Image
        className="hero-banner"
        src="/images/hero/jaywant-hero-banner2.png"
        alt="Jaywant Group — Real Estate That Creates Growth"
        width={1649}
        height={924}
        priority
        sizes="100vw"
      />
    </section>
  );
}
