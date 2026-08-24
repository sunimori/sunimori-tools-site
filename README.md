# sunimori.tools

Update site for the Eclipse tooling published at <https://sunimori.tools>.

Only build output lives here — the landing page, the p2 repository and an
offline zip. The plugin source is kept elsewhere; this repository exists so
Eclipse has a URL to install and update from.

## Install

In Eclipse: **Help → Install New Software… → Add… → Location**

```
https://sunimori.tools/eclipse/impact-analyzer/
```

Then **Help → Check for Updates** from then on.

## Publishing a new build

From the plugin repository:

```
build.bat --publish
```

That assembles the whole web root; copy it over a clone of this repository
and push.
