import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollToTopButton() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setShow(window.scrollY > 420); // когда показывать
        };

        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    if (!show) return null;

    return (
        <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-2xl
                 border border-violet-400/40 bg-violet-400/30
                 text-white shadow-[0_10px_30px_rgba(167,139,250,0.25)]
                 hover:bg-violet-400/40 transition"
            aria-label="Scroll to top"
            title="Up"
        >
            <ArrowUp className="h-5 w-5" />
        </button>
    );
}