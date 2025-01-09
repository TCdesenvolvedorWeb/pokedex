import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { FilterContext } from "../../context/filter";

const Filter = () => {
  const [type, setType] = useState();
  const { setFilter } = useContext(FilterContext);

  const getAllTypes = async () => {
    const response = await axios.get(`https://pokeapi.co/api/v2/type/`);
    setType(response.data.results);
  };

  useEffect(() => {
    getAllTypes();
  }, []);

  return (
    <select name="filter" onChange={(e) => setFilter(e.target.value)}>
      <option value=""> Filter </option>
      {type?.map((e) => {        
        return (
          <>
            <option key={e.name} value={e.name}>
                {e.name !== "stellar" && e.name !== 'unknown' ? e.name : "indisponivel"}
            </option>
          </>
        );
      })}
    </select>
  );
};

export { Filter };
