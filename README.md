# sunimori.tools

Landing page and downloads for the tools published at <https://sunimori.tools>.

Only the landing page and build output live here. The tools' source is kept
elsewhere; this repository exists so Eclipse has a URL to install and update
from, and so the other packages have a place to be downloaded from.

## Install

In Eclipse: **Help → Install New Software… → Add… → Location**

```
https://sunimori.tools/eclipse/impact-analyzer/
https://sunimori.tools/eclipse/smartreviewer/
```

Then **Help → Check for Updates** from then on. SmartReviewer's IntelliJ IDEA
plugin, VS Code extension and command line are under `smartreviewer/`, with
their SHA-256 checksums in `smartreviewer/SHA256SUMS`.

## Layout

| Path | Owner |
|---|---|
| `index.html`, `assets/`, `robots.txt`, `CNAME`, `.nojekyll` | this repository (edit the page here) |
| `eclipse/impact-analyzer/`, `impact-analyzer.zip` | Java Impact Analyzer release |
| `eclipse/smartreviewer/`, `smartreviewer/` | SmartReviewer release |

Each tool's release replaces only its own paths, so one tool's release never
removes another tool or the page. The page reads each tool's version from
`eclipse/impact-analyzer/version.txt` and `smartreviewer/version.txt`.

## Publishing a new build

- **Java Impact Analyzer** — in the plug-in repository run
  `build.bat --publish`; it writes `eclipse/impact-analyzer/` and
  `impact-analyzer.zip` into `SITE_DIR`. Copy those two paths over a clone of
  this repository (or set `SITE_DIR` to the clone), then commit and push.
- **SmartReviewer** — in its repository run
  `node scripts/publish-site.mjs --site <clone> --eclipse-repo <signed repository> --eclipse-zip <signed zip>`;
  it replaces `eclipse/smartreviewer/` and `smartreviewer/`. Commit and push.

GitHub Pages serves `main` within a minute or two. Each SmartReviewer release
adds about 100 MB of binaries; before the repository nears 1 GB, squash its
history into one commit and force-push (the history of build output has no
value of its own).
