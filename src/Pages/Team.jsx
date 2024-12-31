import { useEffect } from 'react';
import TeamSection from '../Components/TeamSection';
import data from '../data1.json';

const TeamPage = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("aos").then((AOS) => {
        AOS.init({ duration: 1200, once: true });
      });
    }
  }, []);

  return (
    <div className="teamPage">
      <TeamSection title="Technical Team" members={data.technical} />
      <TeamSection title="Graphics Team" members={data.graphics} />
      <TeamSection title="Event Team" members={data.event} />
      <TeamSection title="Content Team" members={data.content} />
      <TeamSection title="Publicity Team" members={data.publicity} />
      <TeamSection title="Digital Media Team" members={data.digital} />
    </div>
  );
};

export default TeamPage;
