# types

Publishing this library is 2-fold.
First run the command
```bash
npx ts-node scripts/transform.ts
```

Essentially we are genreating typescript objects from the manifest files, and then we will rely on the typescript compiler to validate the objects.
There are libraries(or you can write your own runtime logic) for validating essentially json objects against typescript classes. This is normally runtime logic so we have to use classes, which are a runtime construct opposed to ts interfaces, which are compile time only. Okay so when need be, you perform a runtime validation against the logic. My idea differs in that the data is published in a library to a package feed. Before the build(aka ts compilation) we perofrm a custom transformation step in which we convert the manifest.json file into a ts entry. During the transformation step no logic is applied. Its only during the typescript compilation that the typescript compiler will complian if the generated code is not compliant.

Why do all of this??? honestly I'm having fun, but also trying to build a living piece of software where a repository and published libraries can be the primary artifacts. ALSO infrastructure as code but ACTUALLY `as code`. Libraries and standalone programs CAN be entire product suits, and they can be sometimes be architected AWAY from the cloud, meaining we can look at IaC in a entirely new light. If `viz-init` can be supported without any paid offerings on the cloud, that is freakin awesome.