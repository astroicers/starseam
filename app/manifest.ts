import type { MetadataRoute } from "next";

export const dynamic = "force-static";

/**
 * Installable-app manifest. Colours are the console (night-shift) material —
 * an installed instrument panel opens dark; the in-page mode switch still
 * honours the user's stored choice.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "starseam",
    short_name: "starseam",
    description:
      "Stars live where the plates meet. A shadcn registry on a lacquer ground.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0c",
    theme_color: "#0a0a0c",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      {
        src: "/icon-maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
