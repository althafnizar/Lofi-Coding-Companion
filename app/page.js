import Background from "@/components/Background";
import Timer from "@/components/timer";

export default function Home() {
  return (
    <main className="relative h-screen w-screen flex items-center justify-center">
      <Background />

      <div className="relative z-10">
        <Timer />
      </div>
    </main>
  );
}
