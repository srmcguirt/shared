# Husky Setup

## Install Husky

```bash
pnpm add -D husky
```

## Add 'scripts' to package.json

```bash
pnpm pkg set scripts.prepare="husky install"
```

Will add the following to package.json:

```json
{
  "scripts": {
    "prepare": "husky install"
  }
}
```

## Run Husky prepare

```bash
pnpm prepare
```
