# meow

## next-js app

### Using Docker
If you have Docker installed you can run the following commands to get a build of this up and running:
```bash
docker build -t trackiss .
docker run -i -t -p 3000:3000 trackiss
```

And it should be available at [here](https://localhost:3000)

### Getting Started
to run the app locally, run the following commands:
```bash
npm install
npm run dev
```

### stuff used
- [nasa resources](https://2022.spaceappschallenge.org/challenges/2022-challenges/track-the-iss/resources)
- [nextjs](https://nextjs.org/docs)
- [worldwind](https://worldwind.arc.nasa.gov/autodocs/WebWorldWind/)
  - [example](https://worldwind.arc.nasa.gov/web/examples/)
- react
- typescript
- tailwindcss
- scaffold from t3-app (a kind of create-next-app)

redux!?!?!? uwuwuwuwuwu

### Deployment
to deploy the app, run the following commands:
```bash
npm install
npm run build
npm run start
```

JAMstack is a new way to build websites and apps that delivers better performance, higher security, lower cost of scaling, and a better developer experience.
J - JavaScript
A - APIs
M - Markup

### Make nextjs app into a markup and javascript app
```bash
npm run build
npm run export
```
- this will create a folder called out
- and u can deploy the out folder to any static hosting service like
  - live-server
  - http-server
  - host on cdns like netlify, vercel, github pages, etc


### Formatting
we can figure this out later,
for now just use prettier

### Next.js
to learn more about next.js, visit the following link:
https://nextjs.org/docs

### notes
- curl --request GET https://isstracker.spaceflight.esa.int/tledata.txt
- SGP4 is a satellite propagation model that is used to predict the position of satellites in space. It is a simplified version of the SGP model, which is used by the US Air Force to predict the position of satellites in space.
- https://eol.jsc.nasa.gov/ESRS/HDEV/
- https://www.nasa.gov/mission_pages/station/main/index.html
