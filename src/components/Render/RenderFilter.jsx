const RenderFilter = (props) => {
  return (
    <select name="filter" onChange={(e) => setFilter(e.target.value)}>
      <option value="" > Filter </option>
      {props.data?.map((e, index) => {
        return (
          <>
          <option key={index} value={e.name}> {e.name} </option>
          </>
        );
      })}
    </select>
  );
};

export { RenderFilter };
