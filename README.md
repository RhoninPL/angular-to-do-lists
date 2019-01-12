## Tutorial

1. Install Angular CLI

```shell
$ npm i -g @angular/cli
```

2. Create an app

```shell
$ ng new my-app --routing --style=scss
$ cd my-app
```

3. Add PWA module

```shell
$ ng add @angular/pwa --project=my-app
```

4. Generate App Shell

```shell
$ ng g app-shell --client-project=my-app --universal-project=my-app
```

5. Run `ng run` to build the app

```shell
$ ng run my-app:app-shell:production
```

Congratulations ! Your Angular application is built in `dist/my-app`.

You can see it by using a local web server, for example [pushstate-server](https://github.com/scottcorgan/pushstate-server).

```
$ npm pushstate-server ./dist/my-app
```

