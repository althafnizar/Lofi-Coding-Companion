"use client";
import usePomodoro from "@/hooks/usePomodoro";

export default function Timer() {
    const { timeLeft, isRunning, start, pause, reset } = usePomodoro();

    // Convert seconds → MM:SS
    const minutes = Math.floor(timeLeft / 60)
        .toString()
        .padStart(2, "0");

    const seconds = (timeLeft % 60)
        .toString()
        .padStart(2, "0");

    return (
        <div className="flex flex-col items-center gap-8 bg-white/5 backdrop-blur-lg px-10 py-8 rounded-2xl shadow-xl">
            {/* Time Display */}
            <div className="text-7xl tracking-[0.2em] text-accent drop-shadow-[0_0_15px_rgba(56,189,248,0.6)] pulse-slow">
                {minutes}:{seconds}
            </div>

            {/* Controls */}
            <div className="flex gap-6">
                {!isRunning ? (
                    <button
                        onClick={start}
                        className="px-6 py-2 rounded-xl bg-accent text-black hover:scale-105 transition"
                    >
                        ▶ Start
                    </button>
                ) : (
                    <button
                        onClick={pause}
                        className="px-6 py-2 rounded-xl bg-soft text-black hover:scale-105 transition"
                    >
                        ⏸ Pause
                    </button>
                )}

                <button
                    onClick={reset}
                    className="px-6 py-2 rounded-xl border border-white/20 hover:bg-white/10 transition"
                >
                    ⟳ Reset
                </button>
            </div>
        </div>
    );
}
