"use client";

export function ClientComponent() {
  return (
    <section>
      <button
        onClick={() => {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              console.log("position", position);
            },
            (e) => {
              console.log("err", e);
            },
            {
              enableHighAccuracy: true,
            },
          );
        }}
      >
        get geoposition
      </button>
    </section>
  );
}
