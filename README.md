<div align="center">
    <h2>
        <em>Resume</em> minimalista maquetado para web y pdf
    </h2>
    <p>
    Esquema del JSON de CV de <a href="https://jsonresume.org/schema/">jsonresume.org</a>
    </p>
    <p>
        Basado en el diseño de <a href="https://github.com/BartoszJarocki/cv">Bartosz Jarocki</a>
    </p>
</div>

# 🛠️ Stack

- [**Astro**](https://astro.build/) - El framework web de la nueva época.
- [**Typescript**](https://www.typescriptlang.org/) - JavaScript con sintaxis de tipado.
- [**Ninja Keys**](https://github.com/ssleptsov/ninja-keys) - Menu desplegable con atajos de teclado hecho en puro
  Javascript.

## 🚀 Empezar

### 1. Usa este [repo](https://github.com/QhorinElManco/minimalist-portfolio-json) como template de un proyecto de Astro

- Yo uso [pnpm](https://pnpm.io/installation) como gestor de dependencias y empaquetador.

```bash
# Activa pnpm en MacOS, WSL & Linux:
corepack enable
corepack prepare pnpm@latest --activate

# Inicializa el proyecto
pnpm create astro@latest -- --template midudev/minimalist-portfolio-json
```

### 2. Añade tu contenido:

Edita el archivo `cv.json` para crear tu propio Portafolio/CV imprimible.

#### 📂 Versiones de CV

Guardá una versión por postulación en la carpeta `cv/` y `cv.json` es la versión activa (la que se compila y despliega).

```bash
# Ver versiones y cuál está activa
pnpm cv:set

# Cambiar la versión activa (copia cv/<nombre>.json a cv.json)
pnpm cv:set ingenieria-digital
pnpm cv:set base
```

Para agregar una versión nueva: creá `cv/<nombre>.json`, ajustala a la oferta y activala con `pnpm cv:set <nombre>`. Al hacer commit y push, Vercel despliega la versión activa.

### 3. Lanza el servidor de desarrollo:

```bash
# Disfruta del resultado
pnpm dev
```

1. Abre [**http://localhost:4321**](http://localhost:4321/) en tu navegador para ver el resultado 🚀

## 🧞 Comandos

|    | Comando         | Acción                                                                       |
|:---|:----------------|:-----------------------------------------------------------------------------|
| ⚙️ | `dev` o `start` | Lanza un servidor de desarrollo local en  `localhost:4321`.                  |
| ⚙️ | `build`         | Comprueba posibles errores y hace un empaquetado de producción en `./dist/`. |
| ⚙️ | `preview`       | Vista previa en local `localhost:4321`                                       |
| 📂 | `cv:set`        | Lista o cambia la versión activa del CV (`pnpm cv:set <version>`)            |                                |

## 🔑 Licencia

[MIT](LICENSE.txt) - Creado por Maynor Pineda.

