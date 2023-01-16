const Page3 = () => {
  return (
    <div className="text-white">
      <div>
        <h2>User Guide</h2>
      </div>
      <div>
        <h3>Earth 3D Rotation</h3>
      </div>
      <div>
        <p>
          Users can rotate the Earth 360 degrees, to observe the Earth while
          watching the International Space Station rotates around the Earth.
        </p>
      </div>

      <div>
        <h3>Track ISS Path</h3>
      </div>

      <div>
        <p>
          {" "}
          The tracker of the International Space Station displays where the ISS
          is currently and its path 90 minutes ago and where it will be 90
          minutes later. Users can interact with the slider to see where the ISS
          was or will be at a specific time within the 90 minutes time frame.
        </p>
      </div>
      <div>
        <h3>Debris Tracker Toggler</h3>
      </div>
      <div>
        <p>
          Users can interact with the &quot;Debris&quot; button to see space
          debris alerts within the orbital of the ISS.
        </p>
      </div>
      <div>
        <h3>Sighting Opportunities</h3>
      </div>
      <div>
        <p>
          Users can enter the chosen location to see the prediction of time and
          date the International Space Station Location will pass
        </p>
      </div>
    </div>
  );
};

export default Page3;
