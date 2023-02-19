const Footer = () => {
  return (
    <footer className="fixed bottom-0 min-w-full flex justify-center mb-4">
      <div className="container flex justify-between flex-column">
        <div className="flex-start">
          {/* TODO: add controls */}
          {/* <p className="text-sm text-gray-500">CONTROLS</p> */}
        </div>
        <div className="flex-end bg-blue-300 p-5 rounded-3xl w-auto">
          <div className="">
            <a
              href="https://2022.spaceappschallenge.org/challenges/2022-challenges/track-the-iss/teams/challenjours/project"
              target="_blank"
              rel="noopener noreferrer"
            >
              🚀 by ICT-challenjour
              <br />
              for Nasa SpaceAppsChallenge-2022
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
