export const App = () => {
  const ideas = [
    { idea: "cool idea 1", name: "idea-1", desc: "cool idea desc 1" },
    { idea: "cool idea 2", name: "idea-2", desc: "cool idea desc 2" },
    { idea: "cool idea 3", name: "idea-3", desc: "cool idea desc 3" },
    { idea: "cool idea 4", name: "idea-4", desc: "cool idea desc 4" },
    { idea: "cool idea 5", name: "idea-5", desc: "cool idea desc 5" },
  ];
  return (
    <div>
      <h1>Ideas</h1>
      {ideas.map((idea) => {
        return (
          <div key={idea.idea}>
            <h2>{idea.name}</h2>
            <p>{idea.desc}</p>
          </div>
        );
      })}
    </div>
  );
};
