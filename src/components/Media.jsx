export default function Media({ src, label, className }) {
  if (src) {
    // 확장자로 영상/이미지 자동 판별
    const isVideo = /\.(mp4|webm|mov|m4v)(\?.*)?$/i.test(src);
    if (isVideo) {
      return (
        <video
          src={src}
          className={className}
          autoPlay
          muted
          loop
          playsInline
        />
      );
    }
    return <img src={src} alt={label} className={className} />;
  }
  return (
    <div className={"tt-ph " + (className || "")}>
      <span>{label}</span>
      <small>이미지 자리 · data/site.js의 MEDIA에서 경로 입력</small>
    </div>
  );
}
