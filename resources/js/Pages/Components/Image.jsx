export default function ImageCard({ src, alt }) {
  return (
    <div className="col-6 p-2 image-card">
      <img
        src={src}
        alt={alt}
        className="rounded d-none d-lg-block"
      />
    </div>
  );
}
