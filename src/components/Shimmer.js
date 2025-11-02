import React from "react";

/**
 * Shimmer.js
 * Simple reusable shimmer (skeleton) loader for a Swiggy-like restaurant list.
 *
 * Usage:
 *  <Shimmer count={8} variant="grid" />
 *  variant: "grid" | "list"
 */

const Shimmer = ({ count = 6, variant = "grid" }) => {
    const items = Array.from({ length: count });

    return (
        <>
            <style>{shimmerCss}</style>
            <div className={`sg-shimmer sg-shimmer--${variant}`}>
                {items.map((_, i) => (
                    <div className="sg-shimmer__card" key={i}>
                        <div className="sg-shimmer__image" />
                        <div className="sg-shimmer__body">
                            <div className="sg-shimmer__title" />
                            <div className="sg-shimmer__meta">
                                <div className="sg-shimmer__rating" />
                                <div className="sg-shimmer__dot" />
                                <div className="sg-shimmer__cuisines" />
                            </div>
                            <div className="sg-shimmer__tags">
                                <div />
                                <div />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

const shimmerCss = `
/* Container */
.sg-shimmer {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    margin: 8px 0;
    align-items: flex-start;
    justify-content: flex-start;
    box-sizing: border-box;
}

/* Grid vs List sizing */
.sg-shimmer--grid .sg-shimmer__card {
    width: calc(33.333% - 10.666px);
    min-width: 220px;
    box-sizing: border-box;
}

@media (max-width: 900px) {
    .sg-shimmer--grid .sg-shimmer__card { width: calc(50% - 8px); }
}
@media (max-width: 520px) {
    .sg-shimmer--grid .sg-shimmer__card,
    .sg-shimmer--list .sg-shimmer__card { width: 100%; }
}

.sg-shimmer--list { flex-direction: column; }
.sg-shimmer--list .sg-shimmer__card { width: 100%; display: flex; gap: 12px; }

/* Card */
.sg-shimmer__card {
    background: transparent;
    border-radius: 8px;
    overflow: hidden;
    padding: 8px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 8px;
}

/* Image block */
.sg-shimmer__image {
    width: 100%;
    height: 140px;
    border-radius: 8px;
    background: var(--sg-shimmer-bg);
    background-image: var(--sg-shimmer-gradient);
    background-size: 400% 100%;
    animation: sg-shimmer-anim 1.2s linear infinite;
}

/* Body */
.sg-shimmer__body { display: flex; flex-direction: column; gap: 8px; padding: 4px 2px; }
.sg-shimmer__title { height: 16px; width: 60%; border-radius: 8px; background: var(--sg-shimmer-bg); background-image: var(--sg-shimmer-gradient); background-size: 400% 100%; animation: sg-shimmer-anim 1.2s linear infinite; }
.sg-shimmer__meta { display: flex; align-items: center; gap: 8px; }
.sg-shimmer__rating { width: 48px; height: 14px; border-radius: 8px; background: var(--sg-shimmer-bg); background-image: var(--sg-shimmer-gradient); animation: sg-shimmer-anim 1.2s linear infinite; }
.sg-shimmer__dot { width: 6px; height: 6px; border-radius: 50%; background: transparent; }
.sg-shimmer__cuisines { flex: 1; height: 12px; border-radius: 8px; background: var(--sg-shimmer-bg); background-image: var(--sg-shimmer-gradient); animation: sg-shimmer-anim 1.2s linear infinite; }

/* Tags (small pills) */
.sg-shimmer__tags { display: flex; gap: 8px; margin-top: 6px; }
.sg-shimmer__tags > div {
    width: 60px;
    height: 18px;
    border-radius: 12px;
    background: var(--sg-shimmer-bg);
    background-image: var(--sg-shimmer-gradient);
    background-size: 400% 100%;
    animation: sg-shimmer-anim 1.2s linear infinite;
}

/* Shared shimmer variables */
:root {
    --sg-shimmer-bg: #f6f6f6;
    --sg-shimmer-gradient: linear-gradient(90deg, #f6f6f6 25%, #eaeaea 37%, #f6f6f6 63%);
}

/* Animation */
@keyframes sg-shimmer-anim {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
}

/* Respect user preference */
@media (prefers-reduced-motion: reduce) {
    .sg-shimmer__image,
    .sg-shimmer__title,
    .sg-shimmer__rating,
    .sg-shimmer__cuisines,
    .sg-shimmer__tags > div {
        animation: none !important;
        background-image: none !important;
        background-color: #eee !important;
    }
}
`;

export default Shimmer;