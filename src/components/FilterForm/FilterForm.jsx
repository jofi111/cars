import React, { useEffect, useState } from "react";

function FilterForm({ data }) {
  const [brands, setBrands] = useState([]); //nastaveni prazdneho pole s useEffect, aby se pole aktualizovalo vzdy kdyz se zmeni data

  useEffect(() => {
    Array.from(new Set(data.map((boat) => boat.brand))); // nejrychlejsi zpusob jak vytvorit unikatnost: ze znacek je vytvoreno pole (data.map...), pro unikatnost (aby se neopakovaly) znacek je z nich vytvorena kolekce (Set), z kolekce je pak vytvoreno znovu pole (Array.from)
  }, [data]);

  return (
    <fieldset>
      <legend>Boat filter</legend>
      <div>
        <select></select>
      </div>
    </fieldset>
  );
}

export default FilterForm;
