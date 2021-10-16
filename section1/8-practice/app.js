const data = [
  {
    icon: "code",
    title: "Development",
  },
  {
    icon: "business",
    title: "Business",
  },
  {
    icon: "computer",
    title: "IT & Software",
  },
  {
    icon: "library_books",
    title: "Office Productivity",
  },
  {
    icon: "person",
    title: "Personal Development",
  },
  {
    icon: "mode_edit",
    title: "Personal Development",
  },
  {
    icon: "track_changes",
    title: "Marketing",
  },
  {
    icon: "directions_bike",
    title: "Health & Fitness",
  },
  {
    icon: "music_note",
    title: "Music",
  },
];

let list = data.map((obj, i) => {
  return <CatNav key={i} data={obj} />;
});

ReactDOM.render(<CatNav data={data} />, document.getElementById("root"));
