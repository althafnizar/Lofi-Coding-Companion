"use client";
import { useEffect, useState } from "react";

export default function usePomodoro() {
    // 25 minutes in seconds
    const DEFAULT_TIME = 25 * 60;

    const [timeLeft, setTimeLeft] = useState(DEFAULT_TIME);
    const [isRunning, setIsRunning] = useState(false);

    // Timer effect
    useEffect(() => {
        if (!isRunning) return;

        const interval = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(interval);
                    setIsRunning(false);
                    return DEFAULT_TIME; // reset after finish
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [isRunning]);

    // Controls
    const start = () => setIsRunning(true);
    const pause = () => setIsRunning(false);
    const reset = () => {
        setIsRunning(false);
        setTimeLeft(DEFAULT_TIME);
    };

    return {
        timeLeft,
        isRunning,
        start,
        pause,
        reset,
    };
}
