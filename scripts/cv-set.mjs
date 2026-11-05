// Cambia la versión activa del CV copiando cv/<nombre>.json a cv.json
// Uso:
//   node scripts/cv-set.mjs                -> lista versiones y muestra la activa
//   node scripts/cv-set.mjs <nombre>       -> activa cv/<nombre>.json
import { copyFileSync, existsSync, readFileSync, readdirSync } from "node:fs";
import { createHash } from "node:crypto";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const versionsDir = join(root, "cv");
const activeFile = join(root, "cv.json");

const versions = readdirSync(versionsDir)
  .filter((file) => file.endsWith(".json"))
  .map((file) => file.replace(/\.json$/, ""))
  .sort();

const hash = (path) =>
  existsSync(path) ? createHash("sha256").update(readFileSync(path)).digest("hex") : null;

const activeHash = hash(activeFile);
const current = versions.find((v) => hash(join(versionsDir, `${v}.json`)) === activeHash);

const name = process.argv[2];

if (!name) {
  console.log("Versiones disponibles:");
  for (const version of versions) {
    console.log(`${version === current ? " *" : "  "} ${version}`);
  }
  console.log(current ? `\nActiva: ${current}` : "\nActiva: cv.json no coincide con ninguna versión");
  console.log("Uso: node scripts/cv-set.mjs <version>");
  process.exit(0);
}

const source = join(versionsDir, `${name}.json`);
if (!existsSync(source)) {
  console.error(`No existe cv/${name}.json.`);
  console.error(`Versiones disponibles: ${versions.join(", ") || "ninguna"}`);
  process.exit(1);
}

copyFileSync(source, activeFile);
console.log(`CV activo: ${name} -> cv.json`);
