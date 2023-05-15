import { type EntityControlItem as IEntityControlItem } from "./EntityControlItem.d";
import {
  EntityControlItemContainer,
  EntityControlItemInline,
} from "./EntityControlItem.styled";

export const EntityControlItem = ({
  property = "prop",
  value = "value",
  theme = {},
}: IEntityControlItem): JSX.Element => (
  <EntityControlItemContainer>
    <EntityControlItemInline
      style={theme?.property}
    >
      {property}
    </EntityControlItemInline>
    <EntityControlItemInline style={theme?.value}>
      {value}
    </EntityControlItemInline>
  </EntityControlItemContainer>
);
