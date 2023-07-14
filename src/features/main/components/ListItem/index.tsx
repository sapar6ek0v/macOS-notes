import {
  Item,
  ItemDate,
  ItemFooterGroup,
  ItemText,
  ItemTitle,
  ListItemWrapper,
} from './styles';

const ListItem = () => {
  return (
    <ListItemWrapper>
      <Item $isActive>
        <ItemTitle>Fdfef ded fewfwew</ItemTitle>
        <ItemFooterGroup>
          <ItemDate>12/23/2005</ItemDate>
          <ItemText>vdvfdb ferwf</ItemText>
        </ItemFooterGroup>
      </Item>
      <Item>
        <ItemTitle>Fdfef ded fewfwew</ItemTitle>
        <ItemFooterGroup>
          <ItemDate>12/23/2005</ItemDate>
          <ItemText>vdvfdb ferwf</ItemText>
        </ItemFooterGroup>
      </Item>
    </ListItemWrapper>
  );
};

export default ListItem;
