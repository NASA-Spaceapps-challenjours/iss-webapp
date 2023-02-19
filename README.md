# TrackISS webapp

to live site: https://trackiss.com/

## Using Docker

If you have Docker installed you can run the following commands to get a build of this up and running:

```bash
docker build -t trackiss .
docker run -i -t -p 3000:3000 trackiss
```

And it should be available at [here](https://localhost:3000)

## to develop the app locally (hot reload)

to run the app locally, run the following commands:

```bash
npm install
npm run dev
```

## stuff used

- [nasa resources](https://2022.spaceappschallenge.org/challenges/2022-challenges/track-the-iss/resources)
- [nextjs](https://nextjs.org/docs)
- [worldwind](https://worldwind.arc.nasa.gov/autodocs/WebWorldWind/)
  - [example](https://worldwind.arc.nasa.gov/web/examples/)
- react
- typescript
- tailwindcss
- scaffold from t3-app (a kind of create-next-app)

### Deployment

to deploy the app on server, run the following commands:

```bash
npm install
npm run build
npm run start
```

or export the static files to the `out` folder and then deploy the `out` folder to the server

```bash
npm install
npm run build
npm run export
```

### Formatting

for now just use prettier

### Next.js

to learn more about next.js, visit the following link:
https://nextjs.org/docs

### notes

- `curl --request GET https://isstracker.spaceflight.esa.int/tledata.txt`
- SGP4 is a satellite propagation model that is used to predict the position of satellites in space. It is a simplified version of the SGP model, which is used by the US Air Force to predict the position of satellites in space.
- https://eol.jsc.nasa.gov/ESRS/HDEV/
- https://www.nasa.gov/mission_pages/station/main/index.html
