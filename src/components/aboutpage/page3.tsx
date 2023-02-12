const Page3 = () => {
  return (
    <div className="text-white md:w-1/2">
      <div>
        <h2 className="font-bold text-2xl underline-offset-2">User Guide</h2>
        <h3 className="font-semibold text-base underline-offset-auto">
          Earth 3D Rotation
        </h3>
        <p className="italic">
          Users can rotate the Earth 360 degrees, to observe the Earth while
          watching the International Space Station rotates around the Earth.
        </p>
      </div>

      <div>
        <h3 className="font-semibold text-base underline-offset-auto">
          Track ISS Path
        </h3>
        <p className="italic">
          The tracker of the International Space Station displays where the ISS
          is currently and its path 90 minutes ago and where it will be 90
          minutes later. Users can interact with the slider to see where the ISS
          was or will be at a specific time within the 90 minutes time frame.
        </p>
      </div>
      <div>
        <h3 className="font-semibold text-base underline-offset-auto">
          Debris Tracker Toggler
        </h3>
        <p className="italic">
          Users can interact with the &quot;Debris&quot; button to see space
          debris alerts within the orbital of the ISS.
        </p>
      </div>
      <div>
        <h3 className="font-semibold text-base underline-offset-auto">
          Sighting Opportunities
        </h3>
        <p className="italic">
          Users can enter the chosen location to see the prediction of time and
          date the International Space Station Location will pass
        </p>
      </div>
    </div>
  );
};

export default Page3;
