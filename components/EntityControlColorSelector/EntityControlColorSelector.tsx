import { Loading, useToggle } from "@/components";
import { useEffect, useState } from "react";
import { Flex } from "rebass";
import { ColorFiller } from "../EntityControlColorItem/EntityControlColorItem.styled";
import { EntityControlColorSelectorContainer } from "./EntityControlColorSelector.styled";

/* Select a new color */
export const EntityControlColorSelector = ({
  colors = [],
  onClick = () => true,
}: {
  colors?: string[];
  onClick?: (values: any) => any;
}) => {
  const [data, setData] =
    useState<string[]>(colors);
  const [loading, toggle] = useToggle(false);

  // move this to selectors/hexadecimalCode
  function handleAddHexadecimalCode(list: any[]) {
    return list.map(
      (item) => item.hexadecimalCode
    );
  }

  // move this to fetchColors()
  useEffect(() => {
    toggle();
    async function fetchData() {
      const response = await fetch(`/api/hello`);
      const { list } = await response.json();
      const hexadecimalCodeList =
        handleAddHexadecimalCode(list);

      setData(hexadecimalCodeList);
    }
    if (data.length == 0) {
      fetchData();
    }
    toggle();
  }, [toggle, data.length]);

  if (loading === true) {
    return <Loading />;
  }
  if (data == null) {
    return <>No colors found</>;
  }
  return (
    <EntityControlColorSelectorContainer>
      <Flex>
        {data.map(
          (code: string, index: number) => (
            <ColorFiller
              key={index}
              size={16}
              value={code.toString()}
              onClick={() =>
                onClick({
                  color: code.toString(),
                })
              }
            />
          )
        )}
      </Flex>
    </EntityControlColorSelectorContainer>
  );
};
