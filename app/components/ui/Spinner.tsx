type SpinnerProps = {
  size?: number;
  className?: string;
};

export default function Spinner({ size = 24, className = "" }: SpinnerProps) {
  const s = size;
  const r = s / 2 - 2;
  const c = s / 2;
  return (
    <span className={`spinner inline-flex items-center justify-center ${className}`} aria-label="Loading">
      <svg
        className="spinner-svg"
        width={s}
        height={s}
        viewBox={`0 0 ${s} ${s}`}
        fill="none"
      >
        <circle cx={c} cy={c} r={r} strokeWidth="3" strokeLinecap="round" />
      </svg>
    </span>
  );
}


