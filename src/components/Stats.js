export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">Start adding some items to your packing list!</p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? 'Packing done. Ready to go! ✈️'
          : `You have ${numItems} items on your list ${
              numPacked !== 0
                ? `and you've already packed ${numPacked} (${percentage}%) ✅`
                : "but you haven't packed anything yet..."
            }`}
      </em>
    </footer>
  );
}
