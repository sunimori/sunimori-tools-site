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
| `eclipse/impact-analyzer/`, `impact-analyzer.zip`, `impact-analyzer/` | Java Impact Analyzer release |
| `eclipse/smartreviewer/`, `smartreviewer/` | SmartReviewer release |

Each tool's release replaces only its own paths, so one tool's release never
removes another tool or the page. The page reads each tool's version from its
Eclipse update site, `eclipse/impact-analyzer/version.txt` and
`eclipse/smartreviewer/version.txt`: the plug-in version with its build time
(such as `0.1.3.202610190716`), as Eclipse shows it. The SmartReviewer badge also
shows the version of the built-in rule package, read from `smartreviewer/rule-package.txt`
(such as `0.19.0`), and the SmartReviewer card shows the number of built-in rules, read from
`smartreviewer/rule-count.txt` (such as `140`). Both files are written by the SmartReviewer release.
The SmartReviewer card also links to the rule page, `smartreviewer/rules/` (every built-in rule with its examples in Japanese,
Chinese and English), which the SmartReviewer release generates and replaces like its other files.
The Java Impact Analyzer card and its version badge link to the release notes, `impact-analyzer/changelog/`
(Japanese, Chinese and English, dates only), which the Java Impact Analyzer release generates and replaces
like its other files.

## Publishing a new build

- **Java Impact Analyzer** — in the plug-in repository run
  `build.bat --publish`; it writes `eclipse/impact-analyzer/`,
  `impact-analyzer.zip` and `impact-analyzer/` (the release notes page) into
  `SITE_DIR`. Put the release into a clone of this repository with
  `node verify/publish-site.js <SITE_DIR> <clone>` (run in the plug-in repository),
  then commit and push. Do not copy or delete the files by hand: the command keeps
  the jars of the newest five versions under `eclipse/impact-analyzer/plugins/` and
  `features/`, while the catalog offers only the latest. An Eclipse that read the
  site before a release still asks for the jars of the version it saw, and fails
  with "Artifact not found" when they are gone.
- **SmartReviewer** — in its repository run
  `node scripts/publish-site.mjs --site <clone> --eclipse-repo <signed repository> --eclipse-zip <signed zip>`;
  it replaces `eclipse/smartreviewer/` and `smartreviewer/`. Commit and push.

GitHub Pages serves `main` within a minute or two. Each SmartReviewer release
adds about 100 MB of binaries; before the repository nears 1 GB, squash its
history into one commit and force-push (the history of build output has no
value of its own).
